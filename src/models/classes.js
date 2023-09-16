"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Classes.belongsTo(models.Allcode, {
        foreignKey: "timeType",
        targetKey: "keyMap",
        as: "timeTypeData",
      });
      Classes.belongsTo(models.User, {
        foreignKey: "teacherId",
        targetKey: "id",
        as: "teacherData",
      });
    }
  }
  Classes.init(
    {
      name: DataTypes.STRING,
      currentNumber: DataTypes.INTEGER,
      date: DataTypes.STRING,
      timeType: DataTypes.STRING,
      teacherId: DataTypes.INTEGER,
      priceId: DataTypes.STRING,
      paymentId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Classes",
    }
  );
  return Classes;
};
