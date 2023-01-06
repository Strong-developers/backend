import { userService } from "../services";

export default {
  async getUserInfo(req, res, next) {
    const userId = req.userId;
    try {
      const foundUser = await userService.getUserInfo(userId);

      return res.status(200).json({
        success: true,
        status: 200,
        message: "Succesfully GET the user information.",
        result: foundUser,
      });
    } catch (err) {
      next(err);
    }
  },

  async editNickname(req, res, next) {
    const userId = req.userId;
    const { nickname } = req.body;
    try {
      await userService.editNickname(userId, nickname);

      return res.status(201).json({
        success: true,
        status: 201,
        message: "Succesfully EDIT the user nickname.",
      });
    } catch (err) {
      next(err);
    }
  },

  async verifyPassword(req, res, next) {
    const userId = req.userId;
    const { password } = req.body;
    try {
      await userService.verifyPassword(userId, password);

      return res.status(201).json({
        success: true,
        status: 201,
        message: "Password CORRECT.",
      });
    } catch (err) {
      next(err);
    }
  },
};
