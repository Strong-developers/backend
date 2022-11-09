import { DataTypes } from "sequelize";
import sequelize from "../configs/sequelize";

const FeedPost = sequelize.define(
  "FeedPost",
  {
    like: {
      type: DataTypes.INTEGER,
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
    tableName: "feedPosts",
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

export default FeedPost;
