## About

Normally, Sixgill will send one zip to Modelo everyday though the API.

The API also support resubmit if user meet error uploading zip file(user can upload zip to same date, the latest zip count)

## API

1. Get upload url
```bash
POST https://sixgill-file-acceptor.modeloapp.com/getUploadUrl
Header: "Content-Type: application/json"
Body: {"date":"2019-04-01"} # date format should be YYYY-MM-DD
```

2. upload file
```bash
PUT https://zipUploadUrl
Header: "Content-Type: application/zip"
Body: the zip binary
```

## Sample Usage

### Using curl

1. Get upload URL

```bash
# request zipUrl
curl -X POST -H "Content-Type: application/json" -d '{"date":"2019-04-01"}' https://sixgill-file-acceptor.modeloapp.com/getUploadUrl
# returns {"zipUrl":"https://ennead-sixgill-camera-data.s3.cn-north-1.amazonaws.com.cn/2019-04-01.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAPO6MTJE6NWLTYP4Q%2F20190424%2Fcn-north-1%2Fs3%2Faws4_request&X-Amz-Date=20190424T055203Z&X-Amz-Expires=3600&X-Amz-Signature=411067f50aa738ed50f1daece645eada747a005b3bf72e75e3cc2997b45438e0&X-Amz-SignedHeaders=host"}
```

1. upload file to the URL

```bash
# upload zip to zipUrl by PUT request
curl -T ./example/example.zip -X PUT https://zipurl
```

### [Example script written in nodejs](./example/index.js)
