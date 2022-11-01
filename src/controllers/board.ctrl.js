import { boardService } from "../services";

export default {
  // 모든 댓글 데이터 가져오기
  async getCommentList(req, res, next) {},

  // 댓글 작성
  async addComment(req, res, next) {

  },

  async modifyComment(req, res, next) {},

  async removeComment(req, res, next) {
    const { commentId } = req.params;

    try {
      await boardService.deleteComment(commentId);

      res.status(201).json({
        success: true,
        status: 201,
        message: "댓글 삭제 성공",
      });
    } catch (err) {
      next(err);
    }
  },
};
