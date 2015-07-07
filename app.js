var express      = require('express');
var i18n         = require('./modules/i18n');
var bodyParser   = require('body-parser');
var MongoClient  = require('mongodb').MongoClient;
var app          = express();
var config       = require('./config.js');

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(i18n);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

MongoClient.connect('mongodb://localhost:27017/' + config.dbname, function(err, db) {

  var sys = {
    app    : app,
    db     : db,
    config : config
  };

  var base      = new (require('./modules/base'))(sys);
  var auth      = new (require('./modules/auth'))(sys);
  var incomings = new (require('./modules/incomings'))(sys);
  var spendings = new (require('./modules/spendings'))(sys);
  var balance   = new (require('./modules/balance'))(sys);

});

app.listen(config.port, function() { console.log('Server listening on port ' + config.port) });