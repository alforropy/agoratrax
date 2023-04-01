const env = process.env.NODE_ENV || 'development';
const config = require('./dbconfig')[env];
const Sequelize = require('sequelize');

let sequelize;
// if (process.env.DB_URL) {
//   sequelize = new Sequelize(config.url, config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

sequelize = new Sequelize('agoratrax', 'root', 'password', {
  dialect: 'mysql',
  dialectOptions: {
    // Your mysql2 options here
  }
})

// sequelize = new Sequelize("agora", "root", "admin", config);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});
console.log("TEST")
module.exports = sequelize;
