import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;

const Post = db.define(
  "Post",
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
      type: DataTypes.TEXT('medium'),
    },
    content: {
      type: DataTypes.TEXT('long'),
    },
    pay: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updated_at: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
      onUpdate: true,
    }
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

export default Post;
