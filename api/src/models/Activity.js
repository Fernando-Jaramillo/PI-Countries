const {Sequelize, DataTypes } = require("sequelize"); 

module.exports = (sequelize) => {
    sequelize.define("activity", {
        id: {
            type: DataTypes.UUID, 
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        dificultyLevel: {
            type: DataTypes.INTEGER,
        },
        term: {
            type: DataTypes.STRING,
        },
        season: {
            type: DataTypes.STRING,
        },
    });
};
