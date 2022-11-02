import { boardService } from "../services";

// 유저 아이디 받아서 수정 및 삭제 가능한지 생각해보기

export default {
  // 모든 댓글 데이터 가져오기(페이지네이션)
  async getCommentList(req, res, next) {
    const { postId } = req.params;
    const { page } = req.query;
    try {
      const commentList = await boardService.selectComment(postId, page);
      const commentPageCount = await boardService.selectCommentPageCount(postId);

      res.status(200).json({
        success: true,
        status: 200,
        message: "해당 게시물 댓글 불러오기 성공",
        result: commentList,
        commentPageCount,
      });
    } catch (err) {
      next(err);
    }
  },

  // 댓글 작성
  async addComment(req, res, next) {
    const { postId } = req.params;
    const { comment, ownerId } = req.body;

    try {
      await boardService.insertComment(postId, ownerId, comment);

      res.status(201).json({
        success: true,
        status: 201,
        message: "댓글 생성 성공",
      });
    } catch (err) {
      next(err);
    }
  },

  // 댓글 수정
  async modifyComment(req, res, next) {
    const { commentId } = req.params;
    const { comment } = req.body;

    try {
      await boardService.updateComment(commentId, comment);

      res.status(201).json({
        success: true,
        status: 201,
        message: "댓글 수정 성공",
      });
    } catch (err) {
      next(err);
    }
  },

  // 댓글 삭제
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
