import { DataTypes } from "sequelize";
import sequelize from "../configs/sequelize";

const ReservationMapping = sequelize.define(
  "ReservationMapping",
  {
    userReservationId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    reservationId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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

export default ReservationMapping;
