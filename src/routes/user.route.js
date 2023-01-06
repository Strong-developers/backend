import express from "express";
import { userCtrl } from "../controllers";
import verifyToken from "../middlewares/verifyToken";

const router = express.Router();

router.get("/info", verifyToken, userCtrl.getUserInfo);

export default router;
