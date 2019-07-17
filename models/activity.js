module.exports = function(sequelize, DataTypes) {

  var Activity = sequelize.define("Activity", {
    activity: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: DataTypes.STRING
  });

  Activity.associate = function(models) {
    Activity.hasMany(models.Event, {
      onDelete: "cascade"
    });
  };

  return Activity;
};