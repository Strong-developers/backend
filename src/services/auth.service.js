import { User } from "../models";
import bcrypt from "bcrypt";
import ApiError from "../utils/ApiError";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export default {
  // 회원가입
  async createUser(email, password, nickname, role) {
    // 중복 이메일, 닉네임 체크
    const existEmail = await User.findOne({ where: { email } });
    const existNickname = await User.findOne({ where: { nickname } });
    if (existEmail) {
      throw ApiError.setBadRequest("중복된 이메일이 존재합니다.");
    }
    if (existNickname) {
      throw ApiError.setBadRequest("중복된 닉네임이 존재합니다.");
    }

    // 비밀번호 해싱
    const hashedpassword = await bcrypt.hash(
      password,
      Number.parseInt(process.env.SALTROUNDS)
    );

    return User.create({
      email,
      password: hashedpassword,
      nickname,
      role,
    });
  },

  // 로그인
  async checkUser(email, password) {
    // 이메일 가입여부 확인
    const existUser = await User.findOne({ where: { email } });
    if (!existUser) {
      throw ApiError.setBadRequest("이메일이 존재하지 않습니다.");
    }

    // 비밀번호 일치여부 확인
    const hashedpassword = await bcrypt.hash(
      password,
      Number.parseInt(process.env.SALTROUNDS)
    );
    const isCorrectPassword = await bcrypt.compare(password, hashedpassword);

    if (!isCorrectPassword) {
      throw ApiError.setBadRequest("비밀번호가 일치하지 않습니다.");
    }

    return {
      id: existUser.id,
      email: existUser.email,
      nickname: existUser.nickname,
      role: existUser.role,
    };
  },

  // JWT 토큰 생성
  async createAccessToken(id) {
    const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    return token;
  },
};
