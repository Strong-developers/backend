import express from "express";
import { postCtrl } from "../controllers";

const router = express.Router();

router.get("/:id/comments", postCtrl.getComments);

export default router;
