import sequelize from "../configs/sequelize";
import { DataTypes } from "sequelize";

const Review = sequelize.define(
  "ReviewPost",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    tableName: "reviewPosts",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export default Review;

