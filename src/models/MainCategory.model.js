import { DataTypes } from "sequelize";
import sequelize from "../configs/sequelize";

const MainCategory = sequelize.define(
  "MainCategory",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  },
  {
    sequelize,
    timestamps: true,
    tableName: "mainCategories",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);


export default MainCategory;
