# scafford-parcel-node-typescript
Scaffold for starting projects using ParcelJS, NodeJS, and TypeScript

### Benefits

- Live-reloading via `nodemon`
- TypeScript integration
- Containerized

### Caveats

- Cannot build within container due to parcel bug: https://github.com/parcel-bundler/parcel/issues/2095
- Docker image size not optimized ~316MB

### How to use
- `yarn watch` to spin up a dev server
- `yarn build` to create server JS bundle: `dist/app.js`
then do `docker build -t <image-name> .`

- `docker run -p 3000:3000 -d <image-name>`
- `docker ps`
- `docker logs <container-id>`
- `docker kill <container-id>`

### Thanks to

ING dev challenge for giving me the excuse to write a POC
for using ParcelJS with Node. 

### License

Public domain. 
Please [let me know](mailto:jsyang.ca@gmail.com) if you do something cool with it.