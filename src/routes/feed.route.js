import express from "express";
import { feedCtrl } from "../controllers";

const router = express.Router();

router.get("/:id", feedCtrl.getPostList);
router.post("/:id", feedCtrl.addPost);
router.put("/:id", feedCtrl.editPost);
router.delete("/:id", feedCtrl.removePost);

export default router;
