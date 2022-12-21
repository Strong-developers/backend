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
};
