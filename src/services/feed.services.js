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
    if (postCount % FEED_POST_PER_PAGE === 0)
      return postCount / FEED_POST_PER_PAGE;
    return Math.floor(postCount / FEED_POST_PER_PAGE) + 1;
  },

  async selectPosts(id, page) {
    const selectedPosts = await FeedPost.findAll({
      where: { shelterId: id },
      offset: (page - 1) * FEED_POST_PER_PAGE,
      limit: FEED_POST_PER_PAGE,
    });

    if (!selectedPosts) throw ApiError.setBadRequest("Post does not exist.");

    return selectedPosts;
  },

  async addPost(id, description) {
    if (!id) throw ApiError.setBadRequest("Shelter ID is required.");
    if (!description)
      throw ApiError.setBadRequest("Post's description is required.");

    return FeedPost.create({
      shelterId: id,
      description,
    });
  },

  async findOnePostWithID(id, postId) {
    if (!id) throw ApiError.setBadRequest("Shelter ID is required.");
    if (!postId) throw ApiError.setBadRequest("Post ID is required.");

    const foundPost = await FeedPost.findOne({
      where: { id: postId, shelterId: id },
    });

    if (!foundPost) throw ApiError.setBadRequest("Post does not exist.");

    return foundPost;
  },

  async editPost(id, postId, description) {
    if (!description) {
      throw ApiError.setBadRequest("Post's description is required.");
    }

    await this.findOnePostWithID(id, postId);

    return FeedPost.update(
      { description },
      { where: { id: postId, shelterId: id } }
    );
  },

  async removePost(id, postId) {
    await this.findOnePostWithID(id, postId);

    return FeedPost.destroy({
      where: {
        id: postId,
        shelterId: id,
      },
    });
  },
};
