const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const service = require('./service');
const config = require('./config.json');

const app = express();

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: config.maxReqPerHour,
});

app.use(limiter);
app.use(cors());
app.use(express.json());

app.post('/getUploadUrl', async (req, res) => {
  const {date, secret} = req.body;
  console.log(req.body)
  // if (secret!==config.secret) {
  //   res.status(400).json("wrong secret");
  //   return;
  // }
  if (!date) {
    res.status(400).json("date is required");
    return;
  }

  const zipUrl = await service.getS3SignedUrl(`${date}.zip`);
  res.json({
    zipUrl,
  });
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.status(err.status || 500);
  res.send(err);
});

app.listen(config.serverPort, () => {
    console.log('Portal is up on', config.serverPort);
});
