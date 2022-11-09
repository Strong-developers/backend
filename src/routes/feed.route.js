import express from "express";
import verifyToken from "../middlewares/verifyToken";
import { feedCtrl } from "../controllers";

const router = express.Router();

router.get("/:id/posts", feedCtrl.getPostList);
router.post("/:id/posts", feedCtrl.addPost);
router.put("/:id/posts/:postId", feedCtrl.modifyPost);
router.delete("/:id/posts/:postId", feedCtrl.removePost);

// router.get("/comments/:postId");
// router.post("/comments/:postId");
// router.put("/comments/:commentId");
// router.delete("/comments/:commentId");

export default router;
