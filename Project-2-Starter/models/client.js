module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("Client", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    dob: DataTypes.DATEONLY,
    isAdmin: DataTypes.BOOLEAN
  });

  Client.associate = function(models) {
    Client.hasMany(models.Reservation, {
      onDelete: "cascade"
    });
  };

  return Client;
};

