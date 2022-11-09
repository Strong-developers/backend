import { FeedPost } from "../models";
import ApiError from "../utils/ApiError";

export default {
  async getPostList(id) {
    const foundPostList = await FeedPost.findAll({ where: { shelterId: id } });
    if (!foundPostList) {
      throw ApiError.setBadRequest("게시글이 존재하지 않습니다.");
    }
    return foundPostList;
  },

  async addPost(id, likes, description) {
    FeedPost.create({});
  },
};
