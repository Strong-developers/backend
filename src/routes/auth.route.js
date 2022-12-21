import express from "express";
import { authCtrl } from "../controllers";

const router = express.Router();

router.post("/normaluser", authCtrl.registerNormalUser);
// router.post("/shelter");
router.post("/login", authCtrl.login);

export default router;
