"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const connection_1 = __importDefault(require("../config/connection"));
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize(connection_1.default.database, connection_1.default.user, connection_1.default.password, {
    host: connection_1.default.host,
    dialect: "mysql",
});
