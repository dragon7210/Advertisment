import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;

const Users = db.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
    createdAt:true,
    updatedAt:true,
  }
);

(async () => {
  await db.sync();
})();

export default Users;
