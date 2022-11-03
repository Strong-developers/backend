import { authService } from "../services";

export default {
  async register(req, res, next) {
    const { email, password, nickname, role } = req.body;
    try {
      const createdUser = await authService.createUser(
        email,
        password,
        nickname,
        role
      );

      res.status(201).json({
        success: true,
        status: 201,
        message: "회원가입 완료",
        result: {
          id: createdUser.id,
          email: createdUser.email,
          nickname: createdUser.nickname,
          role: createdUser.role,
        },
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
        message: "로그인 성공",
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
