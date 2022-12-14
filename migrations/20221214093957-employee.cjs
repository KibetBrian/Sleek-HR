'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employees', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      middleName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      workEmail: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.ENUM("employee", "hr", "admin"),
        allowNull: false
      },
      gender: {
        type: Sequelize.ENUM("male", "female"),
        allowNull: false,
      },
      department: {
        type: Sequelize.ENUM("finance", "tech", "marketing", "department"),
        allowNull: false
      },
      passport: {
        type: Sequelize.STRING
      },
      firstDayOfWork: {
        type: Sequelize.DATE,
        allowNull: false
      },
      compensationDetails: {
        type: Sequelize.ENUM("hourly", "salary")
      },
      salary: {
        type: Sequelize.INTEGER,
        defaut: 0
      },
      paymentPeriod: {
        type: Sequelize.ENUM("weekly", "monthly")
      },
      role: {
        type: Sequelize.ENUM("hr", "employee", "admin"),
        defaultValue: "employee"
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "1234"
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('employees');
  }
};