import { FeedComment } from "../models";
import ApiError from "../utils/ApiError";
import { FEED_COMMENT_PET_PAGE } from "../utils/Constant";

export default {
  async countCommentPage(id) {
    if (!id) throw ApiError.setBadRequest("Post ID is required.");

    const totalComments = await FeedComment.count({
      where: { feedPostId: id },
    });

    if (totalComments % FEED_COMMENT_PET_PAGE === 0)
      return totalComments / FEED_COMMENT_PET_PAGE;
    return Math.floor(totalComments / FEED_COMMENT_PET_PAGE) + 1;
  },

  async getSelectedComments(id, page) {
    if (!id) throw ApiError.setBadRequest("Post ID is required.");
    if (!page) throw ApiError.setBadRequest("Page number is required.");

    const foundComments = await FeedComment.findAll({
      where: { feedPostId: id },
      offset: (page - 1) * FEED_COMMENT_PET_PAGE,
      limit: FEED_COMMENT_PET_PAGE,
    });

    if (!foundComments) throw ApiError.setBadRequest("Comment does not exist.");

    return foundComments;
  },
};
