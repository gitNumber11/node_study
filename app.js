const express = require('express');
const helmet = require('helmet');
const app = express();
const ejs = require('ejs');
const db = require('./model/db');
const json2xls = require('json2xls');

app.use(json2xls.middleware);

//ejs setting
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/public', express.static(__dirname + '/public'));

// app.use(helmet());

//post api setting
app.use(express.json());
app.use(express.urlencoded());

//router setting
const mainRouter = require('./router/mainRouter');
app.use('/', mainRouter);

app.listen(3000, function(req, res) {

    //DB접속 데이터 강제 업데이트 여부 
    db.sequelize.sync({force:false});
    console.log("server start...");
});

