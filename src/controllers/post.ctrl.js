import { postService } from "../services";

export default {
  async getComments(req, res, next) {
    const { id } = req.params;
    const { page } = req.query;
    try {
      const totalCommentPage = await postService.countCommentPage(id);
      const selectedComments = await postService.getSelectedComments(id, page);

      return res.status(200).json({
        success: true,
        status: 200,
        message: "Successfully GET the post's comments.",
        result: { totalCommentPage, selectedComments },
      });
    } catch (err) {
      next(err);
    }
  },

  async addComment(req, res, next) {
    const { id } = req.params;
    const { description } = req.body;
    const userId = req.userId;
    try {
      await postService.addComment(id, userId, description);

      return res.status(201).json({
        success: true,
        status: 200,
        message: "Successfully CREATE a comment.",
      });
    } catch (err) {
      next(err);
    }
  },

  async editComment(req, res, next) {
    const { id } = req.params;
    const { commentId } = req.query;
    const { description } = req.body;
    const userId = req.userId;
    try {
      await postService.editComment(id, userId, commentId, description);

      return res.status(201).json({
        success: true,
        status: 201,
        message: "Successfully EDIT the comment.",
      });
    } catch (err) {
      next(err);
    }
  },

  async removeComment(req, res, next) {
    const { id } = req.params;
    const { commentId } = req.query;
    const userId = req.userId;
    try {
      await postService.removeComment(id, userId, commentId);

      return res.status(201).json({
        success: true,
        status: 201,
        message: "Successfully DELETE the comment.",
      });
    } catch (err) {
      next(err);
    }
  },
};
