import sequelize from "../configs/sequelize";
import { DataTypes } from "sequelize";

const FeedPostLike = sequelize.define(
  "FeedPostLike",
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    feedPostId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    tableName: "feedPostLikes",
    charset: "utf8",
    collate: "utf8_general_ci", 
  }
);

export default FeedPostLike;
