import sequelize from "../configs/sequelize";
import { DataTypes } from "sequelize";

const Review = sequelize.define(
  "Review",
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
    tableName: "reviews",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export default Review;

