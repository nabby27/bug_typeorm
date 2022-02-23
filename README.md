# Issue TypeORM

## Actual Behavior

GIVEN have many to many relation
AND have data for one entity but not have relation
WHEN get data with leftJoinandSelect
THEN return one object with null properties.

## Expected Behavior

GIVEN have many to many relation
AND have data for one entity but not have relation
WHEN get data with leftJoinandSelect
THEN return empty array.

## Requirements to Reproduce

- docker-compose (and make optional)

  or

- npm and postgresql

## Commands to create environment

### With make and docker-compose

```shell
make install
make migrate/run
make dev
```

### With only docker-compose

```shell
docker-compose run --rm issue_typeorm_back npm install
docker-compose run --rm issue_typeorm_back npm run migrate:run
docker-compose run --rm --service-ports issue_typeorm_back npm run dev
```

### With npm and postgresql

Change `.env` file to set your database connection

```shell
npm install
npm run migrate:run
npm run dev
```

## To reproduce bug

Open a rest client app and send request to http://localhost:8000/

(You can install rest client extension on vscode, go to restClient folder and send request to http://localhost:8000/)
