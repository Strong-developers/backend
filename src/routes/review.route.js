import express from "express";
import verifyToken from "../middlewares/verifyToken";
import { reviewCtrl } from "../controllers";

const router = express.Router();

router.post("/posts", verifyToken, reviewCtrl.addReview);
router.put("/posts/:postId", reviewCtrl.modifyReview);

router.get("/comments/:postId", reviewCtrl.getCommentList);
router.post("/comments/:postId", reviewCtrl.addComment);
router.put("/comments/:commentId", reviewCtrl.modifyComment);
router.delete("/comments/:commentId", reviewCtrl.removeComment);

export default router;
