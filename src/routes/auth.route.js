import express from "express";
import { authCtrl } from "../controllers";

const router = express.Router();

router.post("/register/normaluser", authCtrl.registerNormalUser);
router.post("/register/shelter", authCtrl.registerShelter);
router.post("/login", authCtrl.login);

export default router;
