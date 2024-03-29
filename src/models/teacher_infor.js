"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Teacher_Infor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Teacher_Infor.belongsTo(models.User, { foreignKey: "teacherId" });

      Teacher_Infor.belongsTo(models.Allcode, {
        foreignKey: "priceId",
        targetkey: "keyMap",
        as: "priceTypeData",
      });
      Teacher_Infor.belongsTo(models.Allcode, {
        foreignKey: "paymentId",
        targetkey: "keyMap",
        as: "paymentTypeData",
      });
      // Teacher_Infor.belongsTo(models.Allcode, {
      //   foreignKey: "provinceId",
      //   targetkey: "keyMap",
      //   as: "provinceTypeData",
      // });
    }
  }
  Teacher_Infor.init(
    {
      teacherId: DataTypes.INTEGER,
      classesId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      email: DataTypes.STRING,
      phonenumber: DataTypes.INTEGER,
      paymentId: DataTypes.INTEGER,
      gender: DataTypes.STRING,

    },
    {
      sequelize,
      modelName: "Teacher_Infor",
      freezeTableName: true,
    }
  );
  return Teacher_Infor;
};
