export default {
  // 모든 댓글 데이터 가져오기
  async getCommentList(req, res, next) {},

  // 댓글 작성
  async setComment(req, res, next) {},

  async modifyComment(req, res, next) {},

  async removeComment(req, res, next) {
    const { boardId, commentId } = req.params;

    try {

    } catch (err) {
      next(err);
    }
  },
};
