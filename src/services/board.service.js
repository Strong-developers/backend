import { Comment } from "../models";

export default {
  async selectCommentCount(postId) {
    const commentCount = await Comment.count({
      where: {
        postId
      }
    });

    return commentCount;
  },

  async selectComment(postId, page) {
    const perPage = 10;
    const {commentList} = await Comment.findAll({
      where: {
        postId,
      },
      offset: (page - 1) * perPage,
      limit: perPage,
    });

    return commentList;
  },

  async insertComment(postId, ownerId, comment) {
    await Comment.create({
      postId,
      ownerId,
      comment,
    });
  },

  async updateComment(commentId, comment) {
    await Comment.update(
      { comment },
      {
        where: {
          id: commentId,
        },
      }
    );
  },

  async deleteComment(commentId) {
    await Comment.destroy({
      where: {
        id: commentId,
      },
      //force: true
    });
  },
};
