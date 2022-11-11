import express from "express";
import { feedCtrl } from "../controllers";

const router = express.Router();

router.get("/:id/posts", feedCtrl.getPostList);
router.post("/:id/posts", feedCtrl.addPost);
router.put("/:id", feedCtrl.modifyPost);
router.delete("/:id", feedCtrl.removePost);

// router.get("/comments/:postId");
// router.post("/comments/:postId");
// router.put("/comments/:commentId");
// router.delete("/comments/:commentId");

export default router;
