module.exports = function(sequelize, DataTypes) {
    const Game = sequelize.define("Game", {
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 50]
            }
        },
        endCondition: {
            type: DataTypes.STRING,
            default: null
        },
        minPlayers: {
            type: DataTypes.INTEGER,
            default: 1
        },
        maxPlayers: {
            type: DataTypes.INTEGER,
            default: 6,
            validate: {
                max: 6
            }
        },
        pointGoal: {
            type: DataTypes.INTEGER,
            default: null
        },
        maxRounds: {
            type: DataTypes.INTEGER,
            default: null
        }
    });
    return Game;
};
