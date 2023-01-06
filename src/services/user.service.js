import { Shelter, User } from "../models";
import ApiError from "../utils/ApiError";

export default {
  async getUserInfo(userId) {
    if (!userId) throw ApiError.setBadRequest("User ID required.");

    const foundUser = await User.findOne({
      where: { id: userId },
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
      include: {
        model: Shelter,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    });

    if (!foundUser) throw ApiError.setBadRequest("User does not exist.");

    return foundUser;
  },

  async editNickname(userId, nickname) {
    if (!userId) throw ApiError.setBadRequest("User ID required.");
    if (!nickname) throw ApiError.setBadRequest("New nickname is required.");

    console.log("🤢", nickname);
    await User.update({ nickname }, { where: { id: userId } });

    return;
  },
};
