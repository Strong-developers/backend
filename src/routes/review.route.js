import express from 'express';

import {reviewCtrl} from '../controllers';

const router = express.Router();

router.get('/comments/:postId', reviewCtrl.getCommentList);
router.post('/comments/:postId', reviewCtrl.addComment);
router.put('/comments/:commentId', reviewCtrl.modifyComment);
router.delete('/comments/:commentId', reviewCtrl.removeComment);

export default router;