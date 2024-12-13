const config =require('../config/db');

const dataType = require('sequelize');
const sequelize = new dataType(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect
    }
);

const db = {}; //{}อ๊อบเจ็ตเปล่า ไม่มีค่าอยู่ข้างใน 

db.dataType = dataType; //ทำมาเพื่อ
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, dataType); //

module.exports = db; //เป็กการส่งdbทั้งหมดที่เขียนมา


