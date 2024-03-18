const Sequelize = require('sequelize');
const connection = new Sequelize('queimadas','root','Lord1999#',{
    host: 'localhost',
    dialect: 'mysql'

});

module.exports = connection;