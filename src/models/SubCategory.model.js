import sequelize from "../configs/sequelize";
import { DataTypes } from "sequelize";

const SubCategory = sequelize.define(
  "SubCategory",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'name',
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'path',
    },
  },
  {
    sequelize,
    timestamps: true,
    tableName: "subCategories",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export default SubCategory;
