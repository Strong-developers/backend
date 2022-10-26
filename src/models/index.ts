import {Dialect, Sequelize} from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();


const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER_NAME as string;
const dbPassword = process.env.DB_USER_PASSWORD as string;
const dbHost = process.env.DB_HOST as string;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: 3306,
  dialect: 'mysql'
});


export default sequelize;
