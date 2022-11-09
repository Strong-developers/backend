import { feedService } from "../services";

export default {
  async getPostList(req, res, next) {
    const { id } = req.params;
    try {
      const postList = await feedService.getPostList(id);
      res.status(200).json({
        success: true,
        status: 200,
        message: "해당 보호소 피드 게시물 불러오기 성공",
        result: postList,
      });
    } catch (err) {
      next(err);
    }
  },
  async addPost(req, res, next) {
    const { id } = req.params;
    const { likes, description } = req.body;
    try {
      const addedPost = await feedService.addPost(id, likes, description);

      res.status(201).json({
        success: true,
        status: 201,
        message: "피드 포스팅 성공",
      });
    } catch (err) {
      next(err);
    }
  },
  async modifyPost() {},
  async removePost() {},
};
