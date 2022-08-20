const { passwordUtil } = require("../../utils/password.utils");
module.exports = async (user) => {
  await user.bulkCreate([
    {
      username: "Daud Haidar",
      password: await passwordUtil("password"),
      email: "daud@gmail.com",
      roleId: 1,
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
      roleId: 2,
    },
    // dari sini
    {
      username: "Fahlan",
      password: await passwordUtil("password"),
      email: "fahlan@gmail.com",
      roleId: 2,
    },
    {
      username: "Hanif",
      password: await passwordUtil("password"),
      email: "hanif@gmail.com",
      roleId: 2,
    },
    {
      username: "Iqrom",
      password: await passwordUtil("password"),
      email: "iqrom@gmail.com",
      roleId: 2,
    },
    {
      username: "Reynaldi",
      password: await passwordUtil("password"),
      email: "reynaldi@gmail.com",
      roleId: 2,
    },
    {
      username: "Stevano",
      password: await passwordUtil("password"),
      email: "stevano@gmail.com",
      roleId: 2,
    },
    {
      username: "Fauzi",
      password: await passwordUtil("password"),
      email: "fauzi@gmail.com",
      roleId: 2,
    },
    {
      username: "Aisyah",
      password: await passwordUtil("password"),
      email: "aisyah@gmail.com",
      roleId: 2,
    },
    {
      username: "Ikbar",
      password: await passwordUtil("password"),
      email: "ikbar@gmail.com",
      roleId: 2,
    },
    {
      username: "Riza",
      password: await passwordUtil("password"),
      email: "riza@gmail.com",
      roleId: 2,
    },
    {
      username: "Fii",
      password: await passwordUtil("password"),
      email: "fii@gmail.com",
      roleId: 2,
    },
    {
      username: "Rasyid",
      password: await passwordUtil("password"),
      email: "rasyid@gmail.com",
      roleId: 2,
    },
    {
      username: "Regi",
      password: await passwordUtil("password"),
      email: "regi@gmail.com",
      roleId: 2,
    },
    {
      username: "Taufik",
      password: await passwordUtil("password"),
      email: "taufik@gmail.com",
      roleId: 2,
    },
    {
      username: "Jution",
      password: await passwordUtil("password"),
      email: "jution@gmail.com",
      roleId: 2,
    },
    {
      username: "Fadli",
      password: await passwordUtil("password"),
      email: "fadli@gmail.com",
      roleId: 2,
    },
    {
      username: "Shibowo",
      password: await passwordUtil("password"),
      email: "shibowo@gmail.com",
      roleId: 2,
    },
  ]);
};
