import { Shelter, User } from "../models";
import bcrypt from "bcrypt";
import ApiError from "../utils/ApiError";
import jwt from "jsonwebtoken";

export default {
  async emailAndNicknameValidation(email, nickname) {
    const isEmailExist = await User.findOne({ where: { email } });

    if (isEmailExist) {
      throw ApiError.setBadRequest("Email already exist.");
    }

    const isNicknameExist = await User.findOne({ where: { nickname } });

    if (isNicknameExist) {
      throw ApiError.setBadRequest("Nickname already exist.");
    }

    return;
  },

  async passwordHashing(password) {
    const hashedPassword = await bcrypt.hash(
      password,
      Number.parseInt(process.env.SALTROUNDS)
    );

    return hashedPassword;
  },

  async createNormalUser(email, password, nickname, role) {
    if (!email || !password || !nickname || !role)
      throw ApiError.setBadRequest("All fields are required.");

    if (role != 1)
      throw ApiError.setBadRequest("API for registering a normal user.");

    await this.emailAndNicknameValidation(email, nickname);

    const hashedPassword = await this.passwordHashing(password);

    return User.create({
      email,
      password: hashedPassword,
      nickname,
      role,
    });
  },

  async createShelter(
    email,
    password,
    nickname,
    role,
    name,
    region,
    phoneNumber,
    description,
    caution
  ) {
    const isValid = [
      email,
      password,
      nickname,
      role,
      name,
      region,
      phoneNumber,
      description,
      caution,
    ].every((item) => item);

    if (!isValid) throw ApiError.setBadRequest("All fields are required.");

    await this.emailAndNicknameValidation(email, nickname);

    const hashedPassword = await this.passwordHashing(password);

    const createdShelterUserPart = await User.create({
      email,
      password: hashedPassword,
      nickname,
      role,
    });

    return Shelter.create({
      name,
      region,
      phoneNumber,
      description,
      caution,
      userId: createdShelterUserPart.id,
    });
  },

  async checkUser(email, password) {
    if (!email) throw ApiError.setBadRequest("Email is required.");
    if (!password) throw ApiError.setBadRequest("Password is required.");

    let foundUser = await User.findOne({
      where: { email },
    });

    if (!foundUser) {
      throw ApiError.setBadRequest("Email does not exist.");
    }

    const isCorrectPassword = await bcrypt.compare(
      password,
      foundUser.password
    );

    if (!isCorrectPassword) {
      throw ApiError.setBadRequest("Password is not correct.");
    }

    foundUser = await User.findOne({
      where: { email },
      attributes: { exclude: ["password"] },
      include: Shelter,
      raw: true,
    });

    return foundUser;
  },

  async createAccessToken(id) {
    const accessToken = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });
    return accessToken;
  },
};
