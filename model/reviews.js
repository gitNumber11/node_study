module.exports = function(sequelize, DataTypes){

    return sequelize.define('reviews', {
        idx: {
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false  //null 허용여부
        },
        movie_id : {
            type: DataTypes.STRING(250)
        },
        review : {
            type: DataTypes.TEXT
        }
    });
 }