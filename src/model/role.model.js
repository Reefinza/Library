
const ROLE = "role";
module.exports = (db) => {
  const { sequelize, DataTypes } = db;
  return sequelize.define(
    ROLE,
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
