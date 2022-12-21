import { feedService } from "../services";

export default {
  async getPostList(req, res, next) {
    const { id } = req.params;
    const { page } = req.query;
    try {
      const feedPageCount = await feedService.countFeedPage(id);
      const selectedPosts = await feedService.selectPosts(id, page);

      res.status(200).json({
        success: true,
        status: 200,
        message: "피드 게시글 목록 불러오기 성공",
        result: { feedPageCount, selectedPosts },
      });
    } catch (err) {
      next(err);
    }
  },

  async addPost(req, res, next) {
    const { id } = req.params;
    const { description } = req.body;
    try {
      await feedService.addPost(id, description);
      res.status(201).json({
        success: true,
        status: 201,
        message: "Successfully CREATE a post.",
      });
    } catch (err) {
      next(err);
    }
  },

  async editPost(req, res, next) {
    const { id } = req.params;
    const { postId } = req.query;
    const { description } = req.body;
    try {
      await feedService.editPost(id, postId, description);
      res.status(201).json({
        success: true,
        status: 201,
        message: "Successfully EDIT the post.",
      });
    } catch (err) {
      next(err);
    }
  },

  async removePost(req, res, next) {
    const { id } = req.params;
    const { postId } = req.query;
    try {
      await feedService.removePost(id, postId);
      res.status(201).json({
        success: true,
        status: 201,
        message: "Successfully DELETE the post.",
      });
    } catch (err) {
      next(err);
    }
  },
};
