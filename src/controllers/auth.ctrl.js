import { authService } from "../services";

export default {
  async registerNormalUser(req, res, next) {
    const { email, password, nickname, role } = req.body;
    try {
      await authService.createNormalUser(email, password, nickname, role);

      res.status(201).json({
        success: true,
        status: 201,
        message: "Successfully REGISTERED a normal user.",
      });
    } catch (err) {
      next(err);
    }
  },

  async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const foundUser = await authService.checkUser(email, password);
      const token = await authService.createAccessToken(foundUser.id);

      res.status(200).json({
        success: true,
        status: 200,
        message: "LOGIN success.",
        result: {
          ...foundUser,
          token,
        },
      });
    } catch (err) {
      next(err);
    }
  },
};
