import { reviewService } from "../services";

// 유저 아이디 받아서 수정 및 삭제 가능한지 생각해보기

export default {
  async getReview(req, res, next) {
    const { page } = req.query;

    try {
      const reviews = await reviewService.selectReview(page);
      const reviewPageCount = await reviewService.selectReviewCount();
      res.status(200).json({
        success: true,
        status: 200,
        message: "게시물 리스트 불러오기 성공",
        result: { reviewPageCount, reviews },
      });
    } catch (err) {
      next(err);
    }
  },

  async addReview(req, res, next) {
    const userId = req.userId;
    const { title, description } = req.body;

    try {
      await reviewService.insertReview(userId, title, description);

      res.status(201).json({
        success: true,
        status: 201,
        message: "게시물 등록 성공",
      });
    } catch (err) {
      next(err);
    }
  },

  async modifyReview(req, res, next) {
    const { postId } = req.params;
    const { title, description } = req.body;

    try {
      await reviewService.updateReview(postId, title, description);

      res.status(201).json({
        success: true,
        status: 201,
        message: "게시물 수정 성공",
      });
    } catch (err) {
      next(err);
    }
  },

  async removeReview(req, res, next) {
    const { postId } = req.params;

    try {
      await reviewService.deleteReview(postId);

      res.status(201).json({
        success: true,
        status: 201,
        message: "게시물 삭제 성공",
      });
    } catch (err) {
      next(err);
    }
  },

  // 모든 댓글 데이터 가져오기(페이지네이션)
  async getCommentList(req, res, next) {
    const { postId } = req.params;
    const { page } = req.query;
    try {
      const commentList = await reviewService.selectComment(postId, page);
      const commentPageCount = await reviewService.selectCommentPageCount(
        postId
      );

      res.status(200).json({
        success: true,
        status: 200,
        message: "해당 게시물 댓글 불러오기 성공",
        result: { commentPageCount, commentList },
      });
    } catch (err) {
      next(err);
    }
  },

  // 댓글 작성
  async addComment(req, res, next) {
    const { postId } = req.params;
    const { comment, userId } = req.body;

    try {
      await reviewService.insertComment(postId, userId, comment);

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
    const { postId, commentId } = req.params;
    const { comment } = req.body;

    try {
      await reviewService.updateComment(postId, commentId, comment);

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
    const { postId, commentId } = req.params;

    try {
      await reviewService.deleteComment(postId, commentId);

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
