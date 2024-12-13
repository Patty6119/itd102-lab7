module.exports = (sequelize ,dataType) => { //ตั้งแต่ ()=> {}; คือฟังค์ชั่น
    const User = sequelize.define("users ", {
        id: {
            type: dataType.INTEGER,
            autoIncrement: true, 
            allowNull: false, //ห้ามว่าเปล่า
            primaryKey: true
        },
        name: {
            type: dataType.STRING,
            allowNull: false
            
        }
    });
    return User;
};  