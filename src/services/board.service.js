import { Comment } from "../models";

export default {
  async selectAllComment() {},

  async insertComment() {

  },

  async updateComment() {},

  async deleteComment(commentId) {
    await Comment.destroy({
      where: {
        id: commentId,
      },
      //force: true
    });
  },
};
