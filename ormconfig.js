'use strict';

/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

const config = [
    {
        type: 'postgres',
        name: 'issue_typeorm_db',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        migrations: [
            process.env.MIGRATIONS_FILES,
        ],
        cli: {
            migrationsDir: process.env.MIGRATIONS_PATH,
        },
        migrationsRun: false,
        synchronize: false,
        logging: false,
        entities: [
            process.env.ENTITIES_PATH,
        ],
    }
];

module.exports = config;
