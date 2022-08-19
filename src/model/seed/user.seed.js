const {passwordUtil} = require("../../utils/password.utils");
module.exports = async (user) => {
    await user.bulkCreate([
        {
            username: "Daud Haidar",
            password: await passwordUtil("password"),
            email: "daud@gmail.com",
            roleId: 1

        },
        {
            username: "Hadin Davidi",
            password: await passwordUtil("password"),
            email: "vidi@gmail.com",
            roleId: 2,
        },
        {
            username: "M Ari",
            password: await passwordUtil("password"),
            email: "ari@gmail.com",
            roleId: 2,
        },
        {
            username: "R A Hafiz",
            password: await passwordUtil("password"),
            email: "hafiz@gmail.com",
            roleId: 2,
        },
        {
            username: "Raga",
            password: await passwordUtil("password"),
            email: "raga@gmail.com",
            roleId: 2
        } 



    ]);
}