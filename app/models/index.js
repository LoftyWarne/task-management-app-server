const Sequelize = require("sequelize");

const dbName = process.env.DB_NAME
const dbPort = process.env.DB_PORT
const dbUser = process.env.DB_USER
const dbHost = process.env.DB_HOST
const dbDriver = process.env.DB_DRIVER
const dbPassword = process.env.DB_PASSWORD
const pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
}

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: dbDriver,
  pool: {
    max: pool.max,
    min: pool.min,
    acquire: pool.acquire,
    idle: pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.list = require("./list.models.js")(sequelize, Sequelize);
db.task = require("./task.models.js")(sequelize, Sequelize);

module.exports = db;