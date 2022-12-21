import express from "express";
import { feedCtrl } from "../controllers";
import verifyToken from "../middlewares/verifyToken";

const router = express.Router();

router.get("/:id", feedCtrl.getPostList);
router.post("/:id", verifyToken, feedCtrl.addPost);
router.put("/:id", verifyToken, feedCtrl.editPost);
router.delete("/:id", verifyToken, feedCtrl.removePost);

export default router;
