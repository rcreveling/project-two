module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("Client", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    age: DataTypes.INTEGER
  });

  Client.associate = function(models) {
    Client.hasOne(models.Reservation, {
      onDelete: "set null"
    });
  };

  return Client;
};

