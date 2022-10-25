import express from "express";
import dotenv from "dotenv";
import mysql from "mysql";
import dbconfig from "./config/connection";
const connection = mysql.createConnection(dbconfig);

connection.connect();

connection.query("SELECT * FROM test", (error, rows, fields) => {
  if (error) throw error;
  console.log("Test info: ", rows);
});

connection.end();

// 라우터 불러오기
import { testRouter } from "./routes";

class App {
  app: express.Application;

  constructor() {
    this.app = express();
  }
}

dotenv.config();

const app = new App().app;

app.get("/", testRouter);

app.listen(process.env.PORT, () => {
  console.log("http://localhost:3002");
});
