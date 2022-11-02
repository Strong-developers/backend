import express from "express";

import { categoryCtrl } from '../controllers';

const router = express.Router();

router.get("/", categoryCtrl.getMainCategory);

export default router;
