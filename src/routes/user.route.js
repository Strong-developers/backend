import express from "express";
import { userCtrl } from "../controllers";
import verifyToken from "../middlewares/verifyToken";

const router = express.Router();

router.get("/info", verifyToken, userCtrl.getUserInfo);
router.put("/edit/nickname", verifyToken, userCtrl.editNickname);
router.post("/check", verifyToken, userCtrl.verifyPassword);

export default router;
