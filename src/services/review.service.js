import { ReviewPost, ReviewComment, User } from "../models";
import ApiError from "../utils/ApiError";
import {
  REVIEW_COMMENT_PER_PAGE,
  REVIEW_POST_PER_PAGE,
} from "../utils/Constant";

export default {
  /**
   * 후기 게시판 게시물의 글 개수 리턴
   *
   * @returns
   */
  async selectReviewCount() {
    const reviewCount = await ReviewPost.count({});

    return (() => {
      if (reviewCount % REVIEW_POST_PER_PAGE === 0) {
        return reviewCount / REVIEW_POST_PER_PAGE;
      } else {
        return Math.floor(reviewCount / REVIEW_POST_PER_PAGE) + 1;
      }
    })();
  },

  /**
   * 후기 게시판 게시물 페이지네이션
   *
   * @param {number} page
   * @returns
   */
  async selectReview(page) {
    const reviews = await ReviewPost.findAll({
      attributes: ["id", "title", "description", "createdAt"],
      include: [
        {
          model: User,
          as: "user",
          attributes: ["nickname", "role", "profileUrl", "id"],
        },
      ],
      offset: (page - 1) * REVIEW_POST_PER_PAGE,
      limit: REVIEW_POST_PER_PAGE,
    });

    return reviews;
  },

  /**
   * 후기 게시판 게시물 등록
   *
   * @param {number} userId
   * @param {string} title
   * @param {string} description
   */
  async insertReview(userId, title, description) {
    if (!title.trim()) {
      throw ApiError.setBadRequest("타이틀이 null이거나 공백입니다.");
    }
    if (!description.trim()) {
      throw ApiError.setBadRequest("내용이 null이거나 공백입니다.");
    }

    await ReviewPost.create({ userId, title, description });
  },

  /**
   * 후기 게시판 게시물 수정
   *
   * @param {number} postId
   * @param {string} title
   * @param {string} description
   */
  async updateReview(postId, title, description) {
    if (!title.trim()) {
      throw ApiError.setBadRequest("타이틀이 null이거나 공백입니다.");
    }
    if (!description.trim()) {
      throw ApiError.setBadRequest("내용이 null이거나 공백입니다.");
    }

    await ReviewPost.update(
      { title, description },
      {
        where: {
          id: postId,
        },
      }
    );
  },

  async deleteReview(postId) {
    await ReviewPost.destroy({
      where: {
        id: postId,
      },
    });
  },

  /**
   * 게시물에 달린 댓글의 총 개수 리턴
   *
   * @param {number} postId
   * @returns
   */
  async selectCommentPageCount(postId) {
    const commentCount = await ReviewComment.count({
      where: {
        postId,
      },
    });

    return (() => {
      if (commentCount % REVIEW_COMMENT_PER_PAGE === 0) {
        return commentCount / REVIEW_COMMENT_PER_PAGE;
      } else {
        return Math.floor(commentCount / REVIEW_COMMENT_PER_PAGE) + 1;
      }
    })();
  },

  /**
   * 후기 게시판 게시물에 해당하는 댓글을 10개 단위로 불러옴
   *
   * @param {number} postId
   * @param {number} page
   * @returns
   */
  async selectComment(postId, page) {
    const commentList = await ReviewComment.findAll({
      attributes: ["id", "userId", "postId", "comment", "updatedAt"],
      where: {
        postId,
      },
      offset: (page - 1) * REVIEW_COMMENT_PER_PAGE,
      limit: REVIEW_COMMENT_PER_PAGE,
    });

    return commentList;
  },

  /**
   * 후기 게시판 게시물의 댓글 생성하는 서비스
   *
   * @param {number} postId
   * @param {number} ownerId
   * @param {string} comment
   */
  async insertComment(postId, userId, comment) {
    if (!comment.trim()) {
      throw ApiError.setBadRequest("댓글이 null이거나 공백입니다.");
    }

    await ReviewComment.create({
      postId,
      userId,
      comment,
    });
  },

  /**
   * 후기 게시판 게시물의 댓글 수정하는 서비스
   *
   * @param {number} postId
   * @param {number} commentId
   * @param {string} comment
   */
  async updateComment(postId, commentId, comment) {
    if (!comment.trim()) {
      throw ApiError.setBadRequest("댓글이 null이거나 공백입니다.");
    }

    await ReviewComment.update(
      { comment },
      {
        where: {
          id: commentId,
          postId,
        },
      }
    );
  },

  /**
   * 후기 게시판 게시물의 댓글 삭제하는 서비스
   *
   * @param {number} postId
   * @param {number} commentId
   */
  async deleteComment(postId, commentId) {
    await ReviewComment.destroy({
      where: {
        id: commentId,
        postId,
      },
      //force: true
    });
  },
};
