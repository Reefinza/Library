const { DataTypes } = require("sequelize");
const ROLE = "role";
module.exports = (db) => {
  return db.define(
    MST_ADDRESS,
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      underscored: true,
      paranoid: true,
    }
  );
};
