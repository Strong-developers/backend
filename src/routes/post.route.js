import express from "express";
import { postCtrl } from "../controllers";
import verifyToken from "../middlewares/verifyToken";

const router = express.Router();

router.get("/:id/comments", postCtrl.getComments);
router.post("/:id/comments", verifyToken, postCtrl.addComment);
router.put("/:id/comments", verifyToken, postCtrl.editComment);
router.delete("/:id/comments", verifyToken, postCtrl.removeComment);
router.post("/:id/like", verifyToken, postCtrl.likePost);
router.post("/:id/undolike", verifyToken, postCtrl.undoLikePost);

export default router;
