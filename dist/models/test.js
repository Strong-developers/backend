"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const User = index_1.default.define("user", {
    name: {
        type: sequelize_1.DataTypes.TEXT,
        defaultValue: 'hhs'
    },
    age: sequelize_1.DataTypes.INTEGER
}, {
    timestamps: true
});
exports.default = User;
