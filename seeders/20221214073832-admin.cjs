'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('basic_employee_details', [{
      id: "710507b6-077e-495a-a158-5d91cb1625cd",
      firstName: "Brian",
      lastName: "Kibet",
      gender: "male",
      department: "tech",
      permisions: ["read", "write", "update", "delete"],
      roles: ["employee", "hr", "admin"],
      workEmail: "kibet@little.africa",
      password: "briankibet",
      firstDayOfWork: new Date(),
      password: "admin",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('basic_employee_details', [{
      id: "710507b6-077e-495a-a158-5d91cb1625cd",
      password: "briankibet",
      role: "admin"
    }])
  }
};


