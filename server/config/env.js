'use strict';

const env = {
  DATABASE_NAME: process.env.DATABASE_NAME || 'sequelizemssql',
  DATABASE_HOST: process.env.DATABASE_HOST || '10.121.4.132',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'admin',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'admin',
  DATABASE_PORT: process.env.DATABASE_PORT || 1433,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mssql',
  DATABASE_INSTANCE: 'SQLExpress',

  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;