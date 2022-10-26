"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    dialect: "postgresql"
};
exports.default = dbConfig;
