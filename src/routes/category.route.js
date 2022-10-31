import express from "express";

import { categoryCtrl } from '../controllers';

const router = express.Router();

router.get("/main", categoryCtrl.getMainCategory);
router.get("/sub/:id", categoryCtrl.getSubCategory);

export default router;
