# Backend for "Zirpuns" yodeck widget

This project uses node 16, typescript & koa for setting up an API for adding and reading random
puns made by Philipp Zirpins.

## Develop

First create copy .env-sample to .env and change the values if you want.

Then start the docker containers:

- docker-compose up

To start development:

- Run `npm i`
- Run `npm run watch` to watch files in src and transpile them live.

## Docker setup

Docker starta postgres SQL server and an adminer instance. The adminer instance runs on port 4242.
