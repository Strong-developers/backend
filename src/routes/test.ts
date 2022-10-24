import express from 'express';

import {testCtrl} from '../controllers';

const router = express.Router();

router.get('/', testCtrl.test);

export default router;