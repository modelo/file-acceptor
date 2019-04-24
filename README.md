# file-acceptor

Accept files from client though API
## [Usage](./Usage.md)

## Deploy

```bash
# install dependency
npm ci

# prepare config file(ask developer for password)
npm run decryptConfig

# deploy
npm run deploy
```

## Develop

```bash
# install dependency
npm i

# start server using nodemon
npm start

# run example
node example.js
```

### Setting up server on US AWS?

- prepare aws **accessKey**
- create `ennead-sixgill-camera-data` bucket on s3
