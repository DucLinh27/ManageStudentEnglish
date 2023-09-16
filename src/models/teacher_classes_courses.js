"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Teacher_Classes_Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Teacher_Classes_Courses.init(
    {
      teacherId: DataTypes.INTEGER,
      classesId: DataTypes.INTEGER,
      coursesId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Teacher_Classes_Courses",
    }
  );
  return Teacher_Classes_Courses;
};
