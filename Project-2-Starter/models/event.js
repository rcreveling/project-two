module.exports = function(sequelize, DataTypes) {

    var Event = sequelize.define("Event", {
      onDate: DataTypes.DATE,
    });
  
    Event.associate = function (models) {
      Event.hasMany(models.Event, {
        onDelete: "set null"
      });
    };
  
    // Event.beforeCreate = function (eventInstance, optionsObject) {
    //     userInstance.password = hash(userInstance.password)
    //   })
      
    return Event;
  };