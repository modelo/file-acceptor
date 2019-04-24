const aws = require('aws-sdk');
const config = require('./config.json');

aws.config.update({
  accessKeyId: config.s3.accessKeyId,
  secretAccessKey: config.s3.secretAccessKey,
  region: config.s3.region,
  signatureVersion: 'v4',
});

const s3 = new aws.S3();

async function getS3SignedUrl(filename) {
  const url = await s3.getSignedUrl('putObject', {
    Bucket: config.s3.bucket,
    Key: filename,
    Expires: config.s3.expires,
  });

  return url;
}

module.exports = {
  getS3SignedUrl
}