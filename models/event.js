module.exports = function(sequelize, DataTypes) {

	var Event = sequelize.define('Event', {
		onDate: {
			type: DataTypes.DATE,
			allowNull: false
		},
		enabled: { 
			type: DataTypes.BOOLEAN
		}
	});

	Event.associate = function (models) {
		// 1 to 1 activity
		Event.belongsTo(models.Activity, {
			onDelete: 'SET NULL'
		});
		// 1 to many reservations
		Event.belongsToMany(models.Client, {
			through: models.Reservation
		});
	};

	// Event.beforeCreate = function (eventInstance, optionsObject) {
	//     userInstance.password = hash(userInstance.password)
	//   })
	
	return Event;
  };