"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init(
    {
      
      image: DataTypes.TEXT,
      timeType: DataTypes.STRING,
      descriptionHTML: DataTypes.TEXT,
      descriptionMarkdown: DataTypes.TEXT,
      priceId: DataTypes.STRING,
      paymentId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Courses",
    }
  );
  return Courses;
};
