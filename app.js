import express from "express";
import dotenv from "dotenv";
import sequelize from "./src/configs/sequelize";

import { categoryRouter } from "./src/routes";

dotenv.config();

const app = express();

sequelize.sync({ force: false });

app.get("/", (req, res, next) => {
  res.status(200).json({
    txt: "성공",
  });
});

app.use("/category", categoryRouter);

app.listen(process.env.SERVER_PORT, async () => {
  console.log("http://localhost:3002");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
