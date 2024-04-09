var Sequelize = require("sequelize");
var sequelize;

sequelize = new Sequelize("class101", "root", "password", {
    hosts:"localhost",
    port:3306,
    dialect:"mysql",
    timezone: '+09:00', //한국 시간 셋팅
    define: {
        freezeTableName: true,  //영어 복수이름으로 테이블 만드는 기능 off
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamps: true,   //테이블내의 생성시간, 수정시간 컬럼 자동 생성 기능 
    }
});


var db = {};

db.users = sequelize.import(__dirname + "/users.js");
db.reviews = sequelize.import(__dirname + "/reviews.js");

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
