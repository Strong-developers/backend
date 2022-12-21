import sequelize from "../configs/sequelize";
import { DataTypes } from "sequelize";

const FeedPostLike = sequelize.define(
  "FeedPostLike",
  {
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: "feedPostLikes",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export default FeedPostLike;
