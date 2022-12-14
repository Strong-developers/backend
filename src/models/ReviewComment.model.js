import { DataTypes } from "sequelize";
import sequelize from "../configs/sequelize";

const ReviewComment = sequelize.define(
  "ReviewComment",
  {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    tableName: "reviewComments",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export default ReviewComment;
