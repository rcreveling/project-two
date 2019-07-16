module.exports = function(sequelize, DataTypes) {

	var Reservation = sequelize.define("Reservation", {
		activity: DataTypes.STRING,
		name: DataTypes.STRING
	});

	Reservation.associate = function(models) {
		Reservation.belongsTo(models.Client, {
			foreignKey: {
				allowNull: false
			 }
		});
	};

	Reservation.associate = function(models) {
		Reservation.belongsTo(models.Activity, {
			foreignKey: {
				allowNull: false
			 } 
		});
	};
  
    return Reservation;
  };