import {Sequelize, Model, DataType, DataTypes} from 'sequelize';
import sequelize from './index';

const User = sequelize.define("user", {
  name: {
    type: DataTypes.TEXT,
    defaultValue: 'hhs'
  },
  age: DataTypes.INTEGER
}, {
  timestamps: true
});

export default User;