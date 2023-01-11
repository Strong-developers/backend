import express from "express";
import { userCtrl } from "../controllers";
import verifyToken from "../middlewares/verifyToken";

const router = express.Router();

router.get("/info", verifyToken, userCtrl.getUserInfo);
router.put("/update/nickname", verifyToken, userCtrl.updateNickname);
router.post("/check", verifyToken, userCtrl.verifyPassword);
router.put("/update/password", verifyToken, userCtrl.updatePassword);

export default router;
