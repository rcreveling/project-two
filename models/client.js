module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("Client", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    dob: DataTypes.DATEONLY,
    isAdmin: DataTypes.BOOLEAN,
    password: DataTypes.STRING
  });

  Client.associate = function(models) {
    // 1 to many reservations
    Client.belongsToMany(models.Event, {
      // delete all reservations when client is deleted
      through: models.Reservation
    });
  };

  return Client;
};
