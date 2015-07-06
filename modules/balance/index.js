var async = require('async');

var Balance = function(sys) {
  sys.db.collection('spendings', function(err, collection) {
    this.spendings = collection;
  }.bind(this));
  sys.db.collection('incomings', function(err, collection) {
    this.incomings = collection;
  }.bind(this));

  this.router(sys);
};

Balance.prototype.getBalance = function(cb) {

  var spendings, incomings;

  this.spendings.find().toArray(function(err, items) {
    spendings = items;
    this.incomings.find().toArray(function(err, items) {
      incomings = items;
      var incomingsBal = 0;
      var spendingBal  = 0;
      incomings.forEach(function(incoming) {
        incomingsBal += incoming.sum;
      });
      spendings.forEach(function(spending) {
        spendingBal += spending.sum;
      });
      var balance = incomingsBal - spendingBal;
      cb(balance);
    });
  }.bind(this));



};

Balance.prototype.router = function(sys) {
  var app = sys.app;

  app.get('/balance', function(req, res) {
    var cb = function(result) {
      res.send({ balance : result });
    };
    this.getBalance(cb);
  }.bind(this));

};

module.exports = Balance;