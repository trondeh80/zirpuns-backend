# Backend for "Zirpuns" yodeck widget

This project uses node 16, typescript & koa for setting up an API for adding and reading random
puns made by Philipp Zirpins.

## Develop

First copy the file .env-sample to .env and change the values if you want.

Then start the docker containers:

- docker-compose up

To start development:

- Run `npm i`
- Run `npm run watch` to watch files in src and transpile them live.

## Docker setup

Docker starta postgres SQL server and an adminer instance. The adminer instance runs on port 4242.
When postgressql starts for the first time it will create the database, and create a table with a row of test data.
The script for this can be seen in init.sql.
