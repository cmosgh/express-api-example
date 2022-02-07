# Invoice generator

Just a sample Express api that uses typeorm for its entities and typedi as dependency injection library.

Sample _.env_:

POSTGRES_HOST=127.0.0.1

POSTGRES_USER=postgres

POSTGRES_PASSWORD=somepassyouwanttouse

POSTGRES_DB=express-test

POSTGRES_SCHEMA=public

POSTGRES_PORT=5432

EXPRESS_PORT=4000

EXPRESS_HOST=http://localhost

## Usage

`npm install`

`docker-compose up` needed for postgres (used postgres as storage for already fetched details) with typeorm

`npm start`

The endpoint you have to call is POST `http://localhost:4000/createInvoices`

There are some more advanced validations that can be done (via middlewares), but the main idea is there.

The pdf library that just popped was this (fairly limited at first look) so don't expect too much of a beauty.