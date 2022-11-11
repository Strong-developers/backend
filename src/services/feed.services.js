import { FeedPost } from "../models";
import ApiError from "../utils/ApiError";
import { FEED_POST_PER_PAGE } from "../utils/Constant";

export default {
  async countFeedPage(id) {
    const postCount = await FeedPost.count({
      where: {
        shelterId: id,
      },
    });
    if (postCount % FEED_POST_PER_PAGE === 0) {
      return postCount / FEED_POST_PER_PAGE;
    } else {
      return Math.floor(postCount / FEED_POST_PER_PAGE) + 1;
    }
  },

  async selectPosts(id, page) {
    const selectedPosts = await FeedPost.findAll({
      where: { shelterId: id },
      offset: (page - 1) * FEED_POST_PER_PAGE,
      limit: FEED_POST_PER_PAGE,
    });

    console.log(selectedPosts);

    if (!selectedPosts) {
      throw ApiError.setBadRequest("게시글이 존재하지 않습니다.");
    }
    return selectedPosts;
  },

  // async getPostList(id) {
  //   const foundPostList = await FeedPost.findAll({ where: { shelterId: id } });
  //   if (!foundPostList) {
  //     throw ApiError.setBadRequest("게시글이 존재하지 않습니다.");
  //   }
  //   return foundPostList;
  // },

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
