import express from "express";
import dotenv from "dotenv";
import sequelize from './models';

// 라우터 불러오기
import { testRouter } from "./routes";

dotenv.config();

class App {
  app: express.Application;

  constructor() {
    this.app = express();
  }
}

const app = new App().app;

sequelize.sync({force: false}).then(() => {
  console.log("데이터 베이스 연결");
})
.catch((err) => {
  console.error(err);
});

app.get("/", testRouter);

app.listen(process.env.SERVER_PORT, async () => {
  console.log("http://localhost:3002");
});
