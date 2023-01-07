import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;

const Posts = db.define(
  "Posts",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.TEXT("medium"),
    },
    content: {
      type: DataTypes.TEXT("long"),
    },
    pay: {
      type: DataTypes.INTEGER,
    }
  },
  {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
  }
);

(async () => {
  await db.sync();
})();

export default Posts;
