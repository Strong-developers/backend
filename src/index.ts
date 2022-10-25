import express from "express";
import dotenv from "dotenv";
import mysql from "mysql";
//import dbConfig from "./config/connection";
//import { sequelize } from "./models";

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

// const connection = mysql.createConnection(dbConfig);

// connection.connect();

// connection.query("SELECT * FROM test", (error, rows, fields) => {
//   if (error) throw error;
//   console.log("✅ Test info: ", rows);
// });

// connection.end();

app.get("/", testRouter);

app.listen(process.env.PORT, async () => {
  console.log("http://localhost:3002");

  // await sequelize
  //   .authenticate()
  //   .then(async () => {
  //     console.log("✅ Connection success");
  //   })
  //   .catch((error) => {
  //     console.log("❗️Error: ", error);
  //   });
});
