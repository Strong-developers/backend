import express from 'express';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.json({
    test: "test입니다.",
  })
})

export default router;