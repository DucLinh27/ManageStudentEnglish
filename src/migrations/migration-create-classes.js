"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("classes", {
      // currentNumber: DataTypes.INTEGER,
      // maxNumber: DataTypes.INTEGER,
      // date: DataTypes.DATE,
      // timeType: DataTypes.STRING,
      // doctorId: DataTypes.INTEGER,

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      currentNumber: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.STRING,
      },
      timeType: {
        type: Sequelize.STRING,
      },
      teacherId: {
        type: Sequelize.INTEGER,
      },
      priceId: {
        type: Sequelize.STRING,
      },
      paymentId: {
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("classes");
  },
};
