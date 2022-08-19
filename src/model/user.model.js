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
        type: DataTypes.STRING(),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      underscored: true,
      paranoid: true,
      indexes: [
        {
          unique: true,
          fields: ["email"],
        },
      ],
    }
  );
};
