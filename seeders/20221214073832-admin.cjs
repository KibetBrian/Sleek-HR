'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('employees', [{
      id: "710507b6-077e-495a-a158-5d91cb1625cd",
      firstName: "Brian",
      lastName: "Kibet",
      gender: "male",
      role: ["employee", "hr", "admin"],
      workEmail: "kibet@little.africa",
      password: "briankibet",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employees', [{
      id: "710507b6-077e-495a-a158-5d91cb1625cd",
      password: "briankibet",
      role: "admin"
    }])
  }
};


