const express=require('express');
var cors=require('cors');
const bodyParser=require('body-parser');
const app=express();
const approutes = require('./routes/approutes');
const sequelize = require('./utils/database');
app.use(cors());
app.use(bodyParser.json({extended:false}));
app.use(approutes);
sequelize.sync().then(res=>{
    app.listen(3000);
}).catch(err=>console.log(err));