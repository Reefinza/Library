const { Sequelize, Op, DataTypes } = require('sequelize');
const InfraManager = (config) => {
    const initDb = () => {
        const { dbHost, dbPort, dbUser, dbPassword, dbName, dbDriver } = config();
        const dsn = `${dbDriver}://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;
        const sequelize = new Sequelize(dsn);
        return { sequelize, Op, DataTypes };
    }

    return { initDb }
}
module.exports = InfraManager
