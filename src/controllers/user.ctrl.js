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
};
