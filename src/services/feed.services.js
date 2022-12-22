import { FeedPost, Shelter, User } from "../models";
import ApiError from "../utils/ApiError";
import { FEED_POST_PER_PAGE } from "../utils/Constant";

export default {
  async getShelterInformation(id) {
    if (!id) throw ApiError.setBadRequest("Shelter ID is required.");

    const foundShelter = await Shelter.findOne({
      where: { id },
      include: User,
    });

    if (!foundShelter) throw ApiError.setBadRequest("Shelter does not exist.");

    return foundShelter;
  },

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

  async addPost(id, userId, description) {
    if (!userId) throw ApiError.setBadRequest("User ID is required.");
    if (!description)
      throw ApiError.setBadRequest("Post's description is required.");

    const foundShelter = await this.getShelterInformation(id);

    if (foundShelter.userId !== userId)
      throw ApiError.setForbidden(
        "Only the shelter administrator can create a post on the feed."
      );

    return FeedPost.create({
      shelterId: id,
      userId,
      description,
    });
  },

  async findOnePostWithID(id, postId) {
    if (!id) throw ApiError.setBadRequest("Shelter ID is required.");
    if (!postId) throw ApiError.setBadRequest("Post ID is required.");

    const foundPostWithShelterInfo = await FeedPost.findOne({
      where: { id: postId, shelterId: id },
      include: Shelter,
      raw: true,
    });

    const foundShelterWithUserInfo = await Shelter.findOne({
      where: { id: foundPostWithShelterInfo.shelterId },
      include: User,
      raw: true,
    });

    if (!foundPostWithShelterInfo)
      throw ApiError.setBadRequest("Post does not exist.");

    return { foundPostWithShelterInfo, foundShelterWithUserInfo };
  },

  async editPost(id, userId, postId, description) {
    if (!description) {
      throw ApiError.setBadRequest("Post's description is required.");
    }

    const { _, foundShelterWithUserInfo } = await this.findOnePostWithID(
      id,
      postId
    );
    console.log("🤢", foundShelterWithUserInfo);

    if (foundShelterWithUserInfo.userId !== userId)
      throw ApiError.setForbidden(
        "Only the writer or the shelter admin can edit the post."
      );

    return FeedPost.update(
      { description },
      { where: { id: postId, shelterId: id } }
    );
  },

  async removePost(id, userId, postId) {
    const { _, foundShelterWithUserInfo } = await this.findOnePostWithID(
      id,
      postId
    );
    if (foundShelterWithUserInfo.userId !== userId)
      throw ApiError.setForbidden(
        "Only the writer or the shelter admin can delete the post."
      );

    return FeedPost.destroy({
      where: {
        id: postId,
        shelterId: id,
      },
    });
  },
};
