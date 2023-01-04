import { where } from "sequelize";
import { FeedComment, FeedPost, User } from "../models";
import ApiError from "../utils/ApiError";
import { FEED_COMMENT_PER_PAGE } from "../utils/Constant";

export default {
  async countCommentPage(id) {
    if (!id) throw ApiError.setBadRequest("Post ID is required.");

    const totalComments = await FeedComment.count({
      where: { feedPostId: id },
    });

    if (totalComments % FEED_COMMENT_PER_PAGE === 0)
      return totalComments / FEED_COMMENT_PER_PAGE;
    return Math.floor(totalComments / FEED_COMMENT_PER_PAGE) + 1;
  },

  async getSelectedComments(id, page) {
    if (!id) throw ApiError.setBadRequest("Post ID is required.");
    if (!page) throw ApiError.setBadRequest("Page number is required.");

    const foundComments = await FeedComment.findAll({
      where: { feedPostId: id },
      offset: (page - 1) * FEED_COMMENT_PER_PAGE,
      limit: FEED_COMMENT_PER_PAGE,
    });

    if (!foundComments) throw ApiError.setBadRequest("Comment does not exist.");

    return foundComments;
  },

  async addComment(id, userId, description) {
    if (!id) throw ApiError.setBadRequest("Post ID is required.");
    if (!userId) throw ApiError.setBadRequest("User ID is required.");
    if (!description)
      throw ApiError.setBadRequest("Comment description is required.");

    return FeedComment.create({ feedPostId: id, userId, description });
  },

  async findOneCommentWithID(id, commentId) {
    if (!id) throw ApiError.setBadRequest("Post ID is required.");
    if (!commentId) throw ApiError.setBadRequest("Comment ID is required.");

    const foundComment = await FeedComment.findOne({
      where: { id: commentId, feedPostId: id },
    });

    if (!foundComment) throw ApiError.setBadRequest("Comment does not exist.");

    return foundComment;
  },

  async editComment(id, userId, commentId, description) {
    if (!userId) throw ApiError.setBadRequest("User ID is required.");
    if (!description)
      throw ApiError.setBadRequest("Comment description is required.");

    const foundComment = await this.findOneCommentWithID(id, commentId);
    if (foundComment.userId !== userId)
      throw ApiError.setForbidden("Only the writer can edit the comment.");

    return FeedComment.update(
      { description },
      { where: { id: commentId, feedPostId: id, userId } }
    );
  },

  async removeComment(id, userId, commentId) {
    if (!userId) throw ApiError.setBadRequest("User ID is required.");

    const foundComment = await this.findOneCommentWithID(id, commentId);
    if (foundComment.userId !== userId)
      throw ApiError.setForbidden("Only the writer can delete the comment.");

    return FeedComment.destroy({
      where: { id: commentId, feedPostId: id, userId },
    });
  },

  async findUserAndPostById(postId, userId) {
    if (!postId) throw ApiError.setBadRequest("Post ID is required.");
    if (!userId) throw ApiError.setBadRequest("User ID is required.");

    const foundPost = await FeedPost.findByPk(postId);
    const foundUser = await User.findByPk(userId);

    return { foundPost, foundUser };
  },

  async likePost(id, userId) {
    const { foundPost, foundUser } = await this.findUserAndPostById(id, userId);

    const isLikeHistoryExist = await foundUser.hasFeedPost(foundPost);

    console.log("🤢", isLikeHistoryExist);
    if (isLikeHistoryExist)
      throw ApiError.setBadRequest("This user already LIKED the post.");

    return foundUser.addFeedPost(foundPost);
  },

  async undoLikePost(id, userId) {
    const { foundPost, foundUser } = await this.findUserAndPostById(id, userId);

    const isLikeHistoryExist = await foundUser.hasFeedPost(foundPost);

    if (!isLikeHistoryExist)
      throw ApiError.setBadRequest("This user did not LIKED the post.");

    return foundUser.removeFeedPost(foundPost);
  },
};
