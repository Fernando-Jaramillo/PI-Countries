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
            type: DataTypes.ENUM({
                values: ["1","2","3","4","5"]
            })
        },
        term: {
            type: DataTypes.STRING,
        },
        season: {
            type: DataTypes.ENUM({
                values: ["otoño", "invierno", "verano", "primavera"]
            })
        },
    });
};

