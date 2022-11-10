import express from "express";
import verifyToken from "../middlewares/verifyToken";
import { reviewCtrl } from "../controllers";

const router = express.Router();

router.get('/posts', reviewCtrl.getReview);
router.post("/posts", verifyToken, reviewCtrl.addReview);
router.put("/posts/:postId",verifyToken, reviewCtrl.modifyReview);
router.delete("/posts/:postId",verifyToken, reviewCtrl.removeReview);

router.get("/posts/comments/:postId", reviewCtrl.getCommentList);
router.post("/posts/comments/:postId",verifyToken, reviewCtrl.addComment);
router.put("/posts/comments/:commentId",verifyToken, reviewCtrl.modifyComment);
router.delete("/posts/comments/:commentId",verifyToken, reviewCtrl.removeComment);

export default router;
