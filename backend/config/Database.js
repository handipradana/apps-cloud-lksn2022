import {Sequelize} from "sequelize";
import dotenv from "dotenv";
dotenv.config({ path: ".env"});
var database = process.env.DB_NAME;
var username = process.env.DB_USER;
var password = process.env.DB_PASS;
// require('dotenv').config();
const db = new Sequelize(database,username,password,{
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

export default db;