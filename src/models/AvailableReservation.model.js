import { DataTypes } from "sequelize";
import sequelize from "../configs/sequelize";

const AvailableReservation = sequelize.define(
  "AvailableReservation",
  {
    openDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    memberMax: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    tableName: "availableReservations",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export default AvailableReservation;
