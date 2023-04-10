module.exports = {
  HOST: "27.0.0.1:3306",
  USER: "u887374776_dpr", //u994505211_cryp
  PASSWORD: "Mayur@1234", //#Cryp@2023
  DB: "dpr", //u994505211_cryp
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
