import sequelize from "../configs/sequelize";
import { DataTypes } from "sequelize";

const User = sequelize.define(
  "User",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profileUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:
        "https://r1.community.samsung.com/t5/image/serverpage/image-id/907062i6D156A2E31A1D212/image-size/large?v=v2&px=999",
    },
  },
  {
    sequelize,
    timestamps: true,
    tableName: "users",
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

export default User;
