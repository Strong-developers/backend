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

  async addPost(id, like, description) {
    if (!like) {
      throw ApiError.setBadRequest("좋아요 개수가 null이거나 공백입니다.");
    }
    if (!description) {
      throw ApiError.setBadRequest("게시글 내용이 null이거나 공백입니다.");
    }

    await FeedPost.create({
      shelterId: id,
      like,
      description,
    });
  },

  async modifyPost(id, postId, like, description) {
    if (!like) {
      throw ApiError.setBadRequest("좋아요 개수가 null이거나 공백입니다.");
    }
    if (!description) {
      throw ApiError.setBadRequest("게시글 내용이 null이거나 공백입니다.");
    }
    await FeedPost.update(
      { like, description },
      { where: { id: postId, shelterId: id } }
    );
  },

  async removePost(id, postId) {
    await FeedPost.destroy({
      where: {
        id: postId,
        shelterId: id,
      },
    });
  },
};
