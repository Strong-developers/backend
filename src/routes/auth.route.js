import express from "express";
import { authCtrl } from "../controllers";

const router = express.Router();

router.post("/register", authCtrl.register);
router.post("/login", authCtrl.login);

export default router;