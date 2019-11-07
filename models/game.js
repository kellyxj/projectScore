module.exports = function(sequelize, DataTypes) {
    const Game = sequelize.define("Game", {
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        endCondition: DataTypes.STRING,
        minPlayers: DataTypes.INTEGER,
        maxPlayers: DataTypes.INTEGER,
        pointGoal: DataTypes.INTEGER,
        pointConditional: DataTypes.INTEGER,
        maxRounds: DataTypes.INTEGER,
        playerOutCondition: DataTypes.STRING
    });
    return Game;
};
