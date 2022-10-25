import dbConfig from "../config/connection";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: "mysql",
  }
);
