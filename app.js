import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({
    txt: "성공",
  });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log("http://localhost:3002");
});
