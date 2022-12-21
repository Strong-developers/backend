import sequelize from "../configs/sequelize";
import { DataTypes } from "sequelize";

const FeedComment = sequelize.define(
  "FeedComment",
  {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    tableName: "feedComments",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export default FeedComment;
