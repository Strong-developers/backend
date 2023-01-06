import { Shelter, User } from "../models";
import ApiError from "../utils/ApiError";
import bcrypt from "bcrypt";

export default {
  async getUserInfo(userId) {
    if (!userId) throw ApiError.setBadRequest("User ID is required.");

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

  async updateNickname(userId, nickname) {
    if (!userId) throw ApiError.setBadRequest("User ID is required.");
    if (!nickname) throw ApiError.setBadRequest("New nickname is required.");

    await User.update({ nickname }, { where: { id: userId } });

    return;
  },

  async verifyPassword(userId, password) {
    if (!userId) throw ApiError.setBadRequest("User ID is required.");
    if (!password) throw ApiError.setBadRequest("Password is required");

    const foundUser = await User.findOne({ where: { id: userId } });
    if (!foundUser) throw ApiError.setBadRequest("User does not exist.");

    const isCorrectPassword = await bcrypt.compare(
      password,
      foundUser.password
    );

    if (!isCorrectPassword) throw ApiError.setForbidden("Password INCORRECT.");

    return;
  },

  async,
};
