module.exports = function(sequelize, DataTypes) {

  var Activity = sequelize.define("Activity", {
    activity: DataTypes.STRING,
    description: DataTypes.TEXT,
    enabled: DataTypes.BOOLEAN,
    type: DataTypes.STRING
  });

  Activity.associate = function(models) {
    Activity.belongsTo(models.Event, {
      onDelete: "cascade"
    });
  };

  return Activity;
};
