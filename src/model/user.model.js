const USER = "user";

module.exports = (db) => {
  const { sequelize, DataTypes } = db;

  return sequelize.define(
    USER,
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
    },
    {
      freezeTableName: true,
      underscored: true,
      paranoid: true,
    }
  );
};
