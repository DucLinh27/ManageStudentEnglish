"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Orders.belongsTo(models.User, {
        foreignKey: "customerId",
        targetKey: "id",
        as: "customerData",
      });
      Orders.belongsTo(models.Allcode, {
        foreignKey: "timeType",
        targetKey: "keyMap",
        as: "timeTypeDataPatient",
      });
    }
  }
  Orders.init(
    {
      statusId: DataTypes.STRING,
      teacherId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
      description: DataTypes.STRING,
      date: DataTypes.STRING,
      timeType: DataTypes.STRING,
      token: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
