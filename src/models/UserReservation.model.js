import { DataTypes } from "sequelize";
import sequelize from "../configs/sequelize";

const UserReservation = sequelize.define(
  "UserReservation",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    memberCnt: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    tableName: "userReservations",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export default UserReservation;