module.exports = function(sequelize, DataTypes) {

	var Reservation = sequelize.define("Reservation", {
		isBooked: DataTypes.BOOLEAN
	});

	Reservation.associate = function(models) {	

		Reservation.hasOne(models.Client, {
			onDelete: "SET NULL"
		});

		Reservation.hasOne(models.Event, {
			onDelete: "SET NULL"
		});

	};

	// Reservation.associate = function(models) {
	// };
  
    return Reservation;
  };