import { ReviewComment } from "../models";
import { PER_PAGE } from "../utils/Constant";

export default {
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
      if (commentCount % PER_PAGE === 0) {
        return commentCount / PER_PAGE;
      } else {
        return Math.floor(commentCount / PER_PAGE) + 1;
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
      offset: (page - 1) * PER_PAGE,
      limit: PER_PAGE,
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
