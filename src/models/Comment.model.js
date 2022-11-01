import { DataTypes } from "sequelize";
import sequelize from "../configs/sequelize";

const Comment = sequelize.define(
  "Comment",
  {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps,
    tableName: "comments",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export default Comment;