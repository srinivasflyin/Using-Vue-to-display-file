

//process.env.NODE_ENV = 'production';
var express=require("express");
var app=express();
var server=require('http').createServer(app);
var cookieParser = require('cookie-parser');
var	bodyParser = require('body-parser');
var path = require('path');
var compression = require('compression');
var routes = require('../app/routes/common');
var logger = require('morgan');
server.listen(process.env.PORT || 5000);
//-----------------------
//app.use(timeout('600s'));
//Gzip compression middleware
app.use(compression());

// view engine setup
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
*/
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//-----------------------
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/public', express.static('public'));
//app.use(express.static(path.join(_dirname, 'public')));
app.use('/', routes);
