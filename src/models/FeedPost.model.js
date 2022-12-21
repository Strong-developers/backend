import sequelize from "../configs/sequelize";
import { DataTypes } from "sequelize";

const FeedPost = sequelize.define(
  "FeedPost",
  {
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
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
