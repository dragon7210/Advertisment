import { Sequelize } from "sequelize";

const db = new Sequelize("ads_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
