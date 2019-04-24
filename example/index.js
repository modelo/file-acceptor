const axios = require('axios');
const fs = require('fs');
const path = require('path');

const URL = 'http://localhost:5050/getUploadUrl';
const zipPath = path.join(__dirname, './events.zip');

// const zipStream = fs.createReadStream(zipPath);
// const {size} = fs.statSync(zipPath);

async function uploadExample() {
  const res = await axios.post(URL, {
    date: "2019-04-24",
  });

  const { zipUrl } = res.data;

  await axios({
    method: 'PUT',
    url: zipUrl,
    headers: {
      // 'Content-Length': size,
      'Content-Type': 'application/zip',
    },
    data: fs.readFileSync(zipPath),
    maxContentLength: 100000000, // 100 MB
  });
}

uploadExample();
