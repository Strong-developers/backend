import { Comment } from "../models";

export default {
  async selectAllComment() {},

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
