# Backend for "Zirpuns" yodeck widget

This project uses node 16, typescript & koa for setting up an API for adding and reading random
puns made by Philipp Zirpins.

## Develop

First create a new .env file in the root of the project containing this:
```DB_USER=postgres
DB_PASSWORD=changeme
DB_NAME=zirpuns```

Then start the docker containers:
- docker-compose up

To start development:
- Run `npm i`
- Run `npm run watch` to watch files in src and transpile them live.

## Build & deploy

The dockerfile will build and deploy a zirpun instance
