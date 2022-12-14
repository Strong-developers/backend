import { feedService } from "../services";

export default {
  async getPostList(req, res, next) {
    const { id } = req.params;
    const { page } = req.query;
    try {
      const feedPageCount = await feedService.countFeedPage(id);
      const selectedPosts = await feedService.selectPosts(id, page);
      const foundShelter = await feedService.getShelterInformation(id);

      res.status(200).json({
        success: true,
        status: 200,
        message: "Successfully GET the posts.",
        result: { feedPageCount, selectedPosts, foundShelter },
      });
    } catch (err) {
      next(err);
    }
  },

  async addPost(req, res, next) {
    const { id } = req.params;
    const { description } = req.body;
    const userId = req.userId;
    try {
      await feedService.addPost(id, userId, description);
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
    const userId = req.userId;
    try {
      await feedService.editPost(id, userId, postId, description);
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
    const userId = req.userId;
    try {
      await feedService.removePost(id, userId, postId);
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
