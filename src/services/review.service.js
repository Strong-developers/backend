import { ReviewPost, ReviewComment, User } from "../models";
import {
  REVIEW_COMMENT_PER_PAGE,
  REVIEW_POST_PER_PAGE,
} from "../utils/Constant";

export default {
  async selectReviewCount() {
    const reviewCount = await ReviewPost.count({});

    return (() => {
      if (reviewCount % 12 === 0) {
        return reviewCount / 12;
      } else {
        return Math.floor(reviewCount / 12) + 1;
      }
    })();
  },

  async selectReview(page) {
    const reviews = await ReviewPost.findAll({
      attributes: ["id", "title", "description", "createdAt"],
      include: [
        {
          model: User,
          attributes: ["nickname", "role", "profileUrl", "id"],
        },
      ],
      offset: (page - 1) * 12,
      limit: 12,
    });

    return reviews;
  },

  async insertReview(userId, title, description) {
    await ReviewPost.create({ userId, title, description });
  },

  async updateReview(postId, title, description) {
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
   * 게시물에 해당하는 댓글을 10개 단위로 불러옴
   *
   * @param {number} postId
   * @param {number} page
   * @returns
   */
  async selectComment(postId, page) {
    const { commentList } = await ReviewComment.findAll({
      attributes: ["id", "owner_id", "post_id", "comment"],
      where: {
        postId,
      },
      offset: (page - 1) * REVIEW_COMMENT_PER_PAGE,
      limit: REVIEW_COMMENT_PER_PAGE,
    });

    return commentList;
  },

  /**
   * 댓글 생성하는 서비스
   *
   * @param {number} postId
   * @param {number} ownerId
   * @param {string} comment
   */
  async insertComment(postId, ownerId, comment) {
    await ReviewComment.create({
      postId,
      ownerId,
      comment,
    });
  },

  /**
   * 댓글 수정하는 서비스
   *
   * @param {number} commentId
   * @param {string} comment
   */
  async updateComment(commentId, comment) {
    await ReviewComment.update(
      { comment },
      {
        where: {
          id: commentId,
        },
      }
    );
  },

  /**
   * 댓글 삭제하는 서비스
   *
   * @param {number} commentId
   */
  async deleteComment(commentId) {
    await ReviewComment.destroy({
      where: {
        id: commentId,
      },
      //force: true
    });
  },
};
