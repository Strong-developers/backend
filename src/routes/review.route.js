import express from "express";
import verifyToken from "../middlewares/verifyToken";
import { reviewCtrl } from "../controllers";

const router = express.Router();

router.get('/posts', reviewCtrl.getReview);
router.post("/posts", verifyToken, reviewCtrl.addReview);
router.put("/posts/:postId",verifyToken, reviewCtrl.modifyReview);
router.delete("/posts/:postId",verifyToken, reviewCtrl.removeReview);

router.get("/posts/:postId/comments", reviewCtrl.getCommentList);
router.post("/posts/:postId/comments",verifyToken, reviewCtrl.addComment);
router.put("/posts/:postId/comments/:commentId",verifyToken, reviewCtrl.modifyComment);
router.delete("/posts/:postId/comments/:commentId",verifyToken, reviewCtrl.removeComment);

export default router;
