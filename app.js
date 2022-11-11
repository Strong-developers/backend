import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./src/configs/sequelize";
import errorMiddleware from "./src/middlewares/error";
import { categoryRouter, authRouter, reviewRouter } from "./src/routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

sequelize.sync({ sync: false });

app.use("/category", categoryRouter);
app.use("/auth", authRouter);
app.use("/review", reviewRouter);

// 에러처리 미들웨어
app.use(errorMiddleware);

app.listen(process.env.SERVER_PORT, () => {
  console.log("http://localhost:3002");
});
