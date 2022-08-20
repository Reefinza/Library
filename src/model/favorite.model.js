
const FAVORITE = "favorite";
module.exports = (db) => {
  const { sequelize, DataTypes } = db;
  return sequelize.define(
    FAVORITE,
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      }
    },
    {
      freezeTableName: true,
      underscored: true,
    }
  );
};
