"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//import dbConfig from "./config/connection";
//import { sequelize } from "./models";
// 라우터 불러오기
const routes_1 = require("../src/routes");
class App {
    constructor() {
        this.app = (0, express_1.default)();
    }
}
dotenv_1.default.config();
const app = new App().app;
// const connection = mysql.createConnection(dbConfig);
// connection.connect();
// connection.query("SELECT * FROM test", (error, rows, fields) => {
//   if (error) throw error;
//   console.log("✅ Test info: ", rows);
// });
// connection.end();
app.get("/", routes_1.testRouter);
app.listen(process.env.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("http://localhost:3002");
    // await sequelize
    //   .authenticate()
    //   .then(async () => {
    //     console.log("✅ Connection success");
    //   })
    //   .catch((error) => {
    //     console.log("❗️Error: ", error);
    //   });
}));
