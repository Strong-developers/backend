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
    const { like, description } = req.body;
    try {
      await feedService.addPost(id, like, description);
      res.status(201).json({
        success: true,
        status: 201,
        message: "피드 게시글 작성 성공",
      });
    } catch (err) {
      next(err);
    }
  },

  async modifyPost(req, res, next) {
    const { id } = req.params;
    const { postId } = req.query;
    const { like, description } = req.body;
    try {
      await feedService.modifyPost(id, postId, like, description);
      res.status(201).json({
        success: true,
        status: 201,
        message: "피드 게시글 수정 성공",
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
        message: "피드 게시글 삭제 성공",
      });
    } catch (err) {
      next(err);
    }
  },
};
