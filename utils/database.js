const Sequelize = require('sequelize');
const sequelize=new Sequelize('expenses','root','sumit@1234',{
    dialect:'mysql',
    host:'localhost'
})
module.exports=sequelize;
