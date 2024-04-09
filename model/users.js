module.exports = function(sequelize, DataTypes){

    return sequelize.define('users', {
        idx: {
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false  //null 허용여부
        },
        user_id : {
            type: DataTypes.STRING(250)
        }
    });
 }



