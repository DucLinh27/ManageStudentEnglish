"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("markdowns", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      contentHTML: {
        allowNull: false,
        type: Sequelize.TEXT("long"),
      },
      contentMarkdown: {
        allowNull: false,
        type: Sequelize.TEXT("long"),
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT("long"),
      },
      doctorId: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      specialtyId: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      clinicid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("markdowns");
  },
};
