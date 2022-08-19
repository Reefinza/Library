module.exports = async (roleModel)=>{

   return await roleModel.bulkCreate([
        {name:'Super Admin'},
        {name:'User'},
    ]);

}