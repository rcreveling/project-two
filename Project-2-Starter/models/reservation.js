module.exports = function(sequelize, DataTypes) {

	var Reservation = sequelize.define("Reservation", {
		isBooked: DataTypes.BOOLEAN
	});

	Reservation.associate = function(models) {	

		Reservation.belongsTo(models.Client, {
			foreignKey: {
				allowNull: false
			}
		});

		Reservation.hasOne(models.Event, {
			onDelete: "cascade"
		});

	};

	// Reservation.associate = function(models) {
	// };
  
    return Reservation;
  };