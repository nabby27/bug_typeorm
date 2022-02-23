import express from 'express';
import dotenv from 'dotenv';
import 'reflect-metadata';
import { PostgresDataRepository } from './PostgresDataRepository';

dotenv.config({ path: __dirname + '/../../.env' });

const app = express();

app.get('/', async (req, res) => {
    const repository = new PostgresDataRepository();
    const data = await repository.getAllData();

    res.send(data);
});

const server = app.listen(process.env.BACK_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Example app listening at http://localhost:${process.env.BACK_PORT}`);
});

export default server;
