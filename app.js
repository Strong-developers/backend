import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./src/configs/sequelize";
import errorMiddleware from "./src/middlewares/error";
import { categoryRouter, boardRouter, authRouter } from "./src/routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

sequelize.sync({ force: false });

app.use("/category", categoryRouter);
app.use("/board", boardRouter);
app.use("/auth", authRouter);

// 에러처리 미들웨어
app.use(errorMiddleware);

app.listen(process.env.SERVER_PORT, async () => {
  console.log("http://localhost:3002");
});
