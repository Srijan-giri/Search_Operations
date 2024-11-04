'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@example.com',
        city: 'Delhi',
        country: 'India',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'John',
        lastName: 'Wick',
        email: 'john@example.com',
        city: 'Kanpur',
        country: 'India',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Srijan',
        lastName: 'Giri',
        email: 'srijangiri2003@example.com',
        city: 'Kolkata',
        country: 'India',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        firstName: 'Srijan',
        lastName: 'Mandal',
        email: 'srijanmandal@example.com',
        city: 'New York',
        country: 'USA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Alok',
        lastName: 'Das',
        email: 'alok@example.com',
        city: 'Colombo',
        country: 'Sri Lanka',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'John',
        lastName: 'Dowk',
        email: 'johnle@example.com',
        city: 'Mumbai',
        country: 'India',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
