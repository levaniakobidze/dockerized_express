import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "db",
  port: 5432,
  username: "yourdbuser",
  password: "yourdbpassword",
  database: "yourdbname",
  models: [__dirname + "/models"],
  logging: false, // Set to true to log SQL queries
});

export default sequelize;
