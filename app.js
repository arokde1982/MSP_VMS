

//set var for environment
//
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;
var mongoose = require('mongoose'); 
var database = require('./config/database');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');

mongoose.connect(database.url);

//views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev'));
//app.use(express.logger('dev')); 						// log every request to the console
app.use(bodyParser()); 							// pull information from html in POST
app.use(methodOverride()); 						// simulate DELETE and PUT



//instruct express to serve up static assets
//app.use(express.static('public'));


//set routes
require('./app/routes.js')(app);

/*app.get('/', function (req, res) {
    res.render('index', { title: 'Hello World' });
});
*/

//set server port
app.listen(port);
console.log('server is running on port: ' + port);

module.exports = app;