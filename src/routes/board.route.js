import express from 'express';

import {boardCtrl} from '../controllers';

const router = express.Router();

router.get('/comments/:boardId', boardCtrl.getCommentList);
router.post('/comments/:boardId', boardCtrl.setComment);
router.put('/comments/:boardId/:commentId', boardCtrl.modifyComment);
router.delete('/comments/:boardId/:commentId', boardCtrl.removeComment);

export default router;