const DbMigration = require('../config/db_migratioin');
const Config = require('../config/config');
const ModelManager = require('../manager/model.manager');
const InfraManager = require('../manager/infra.manager');



const run = () => {
    const infraManager = InfraManager(Config);
    console.log(infraManager);
    const modelManager = ModelManager(infraManager);
    DbMigration(modelManager);
}
module.exports = run;