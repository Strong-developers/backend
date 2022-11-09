import { DataTypes } from "sequelize";
import sequelize from "../configs/sequelize";

const Shelter = sequelize.define(
  "Shelter",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    caution: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    tableName: "shelters",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export default Shelter;