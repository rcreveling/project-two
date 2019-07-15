module.exports = function(sequelize, DataTypes) {
    var Activity = sequelize.define(
      "Activity",
      {
        activity: DataTypes.STRING,
        description: DataTypes.TEXT,
        enabled: DataTypes.BOOLEAN
      },
      {
        timestamps: false
      }
    );
    return Activity;
  };
  