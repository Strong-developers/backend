import { ReviewComment } from "../models";
import { ReviewPost } from "../models";

export default {
  async insertPost(ownerId, description) {
    await ReviewPost.create({ ownerId, description });
  },

  /**
   * 게시물에 달린 댓글의 총 개수 리턴
   *
   * @param {number} postId
   * @returns
   */
  async selectCommentPageCount(postId) {
    let totalCommentPage = null;
    const perPage = 10;
    const commentCount = await ReviewComment.count({
      where: {
        postId,
      },
    });

    if (commentCount % perPage === 0) {
      totalCommentPage = commentCount / perPage;
    } else {
      totalCommentPage = Math.floor(commentCount / perPage) + 1;
    }

    return totalCommentPage;
  },

  /**
   * 게시물에 해당하는 댓글을 10개 단위로 불러옴
   *
   * @param {number} postId
   * @param {number} page
   * @returns
   */
  async selectComment(postId, page) {
    const perPage = 10;
    const { commentList } = await ReviewComment.findAll({
      attributes: ["id", "owner_id", "post_id", "comment"],
      where: {
        postId,
      },
      offset: (page - 1) * perPage,
      limit: perPage,
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
