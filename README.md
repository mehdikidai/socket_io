## Project Setup | socket io with laravel

```sh
npm install
```

### Development

```sh
npm run dev
```

### Build

```sh
npm run build
```

## Docker



### build image

```sh
docker build -t io .
```
### run container

```sh
docker run -p 127.0.0.1:3000:3000 --name socket_io_laravel io
```

