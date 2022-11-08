import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError";

export default (req, res, next) => {
  const token = req.header["authorization"].split(" ")[1];

  if (!token) {
    next(ApiError.setBadRequest("토큰이 없습니다."));
  }

  try {
    const jwtDecoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = jwtDecoded.id;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      next(ApiError.setUnauthorized("토큰이 만료되었습니다."));
    }
    next(ApiError.setUnauthorized("토큰이 유효하지 않습니다."));
  }
};
