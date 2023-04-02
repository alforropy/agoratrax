const env = process.env.NODE_ENV || 'development';
const config = require('./dbconfig')[env];
const Sequelize = require('sequelize');

let sequelize;
if (process.env.DB_URL) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
sequelize = new Sequelize("mysql://be032f6bc53e50:380f3ce3@us-cdbr-east-06.cleardb.net/heroku_fd29d3fc7f73149?reconnect=true", config)
// sequelize = new Sequelize('agoratrax', 'agoratrax', 'password', {
//   dialect: 'mysql',
//   dialectOptions: {
//     // Your mysql2 options here
//   }
// })

// sequelize = new Sequelize("agora", "root", "admin", config);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});
console.log("TEST")
module.exports = sequelize;
