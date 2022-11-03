import express from "express";

import { boardCtrl } from "../controllers";

const router = express.Router();

router.get("/comments/:postId", boardCtrl.getCommentList);
router.post("/comments/:postId", boardCtrl.addComment);
router.put("/comments/:commentId", boardCtrl.modifyComment);
router.delete("/comments/:commentId", boardCtrl.removeComment);

export default router;
