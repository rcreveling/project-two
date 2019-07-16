'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Clients', [{
    name: 'Jan',
    address: '123 Sesame Street',
    phone: '6035559999',
    age: 70,
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    name: 'Donna',
    address: '123 Sesame Street',
    phone: '6039995555',
    age: 68,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Clients', null, {});
  }
};
