'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Activities', [{
    activity: 'Prescott Park',
    description: 'A nice day at Prescott Park in downtown Portsmouth, NH overlooking the Memorial Bridge',
    enabled: 0,
    type: "relax",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    activity: 'Bocchi Ball',
    description: 'Roll some balls, get some points',
    enabled: 0,
    type: "active",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    activity: 'Bingo',
    description: 'For the gamblin aul folks',
    enabled: 0,
    type: "mental",
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Activity', null, {});
  }
};
