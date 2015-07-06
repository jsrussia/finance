var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/incomings', function(req, res) {
  var incomings = [
    {
      date : '25.06.2006',
      sum  : 1600,
      comment : 'No comments'
    },
    {
      date : '27.06.2006',
      sum  : 2400,
      comment : 'No comments'
    },
    {
      date : '30.06.2006',
      sum  : 400,
      comment : 'No comments'
    },
    {
      date : '02.07.2006',
      sum  : 4200,
      comment : 'No comments'
    }
  ];
  res.send(incomings);
});

app.post('/incomings', function(req, res) {
  console.log(req.body);
});

app.listen(3000);