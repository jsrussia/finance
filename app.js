var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

MongoClient.connect('mongodb://localhost:27017/finance', function(err, db) {

  var sys = {
    app : app,
    db : db
  };

  var base      = new (require('./modules/base'))(sys);
  var incomings = new (require('./modules/incomings'))(sys);
  var spendings = new (require('./modules/spendings'))(sys);
  var balance   = new (require('./modules/balance'))(sys);

  // db.close();
});

app.listen(3000, function() { console.log('Server listening on port 3000') });