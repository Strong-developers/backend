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
      type: DataTypes.NUMBER,
      allowNull: false,
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
