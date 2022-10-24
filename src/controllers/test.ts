import express from 'express';

interface SuccessRes {
  success: boolean;
  status: number;
  message: string;
  result: object;
}

export default {
  /**
   * 테스트 용
   */
  async test(req: express.Request, res: express.Response, next: express.NextFunction) {
    
    const result: SuccessRes = {
      success: true,
      status: 200,
      message: "테스트 성공",
      result: {
        a: 'aa',
      }
    }

    res.status(200).json(result);
  },


}