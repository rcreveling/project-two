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
    activity: 'Gardens',
    description: 'Pretty Flowers',
    enabled: 0,
    type: "relax",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    activity: 'Storm Watching',
    description: "We're gonna find Katrina, we're gonna bring her to justice",
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
    activity: 'Storm Chasing',
    description: "We're gonna find Katrina, we're gonna put her in a full nelson and bring her to justice",
    enabled: 0,
    type: "active",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    activity: 'Swimming at the Beach',
    description: 'If you get tired you can people watch',
    enabled: 0,
    type: "active",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    activity: 'Musical',
    description: 'A trip to the theater to see _______ at ________ on __\__\____',
    enabled: 0,
    type: "mental",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    activity: 'Pub Quiz',
    description: 'If you get tired you can people watch',
    enabled: 0,
    type: "mental",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    activity: 'Bingo',
    description: 'Read up on T-Swizzle cause she kissed a girl, and goddamn, did she like it',
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