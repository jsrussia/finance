var Spendings = function(sys) {
  sys.db.collection('spendings', function(err, collection) {
    this.collection = collection;
  }.bind(this));
  this.router(sys);
};

Spendings.prototype.getSpendings = function(cb) {
  this.collection.find().toArray(function(err, data) {
    cb(data);
  });
};

Spendings.prototype.newSpending = function(data, cb) {
  this.collection.insert(data, function(err, result) {
    cb(result);
  });
};

Spendings.prototype.router = function(sys) {
  var app = sys.app;

  app.get('/spendings', function(req, res) {
    var cb = function(result) {
      res.send(result);
    };
    this.getSpendings(cb);
  }.bind(this));

  app.post('/spendings', function(req, res) {
    var cb = function(result) {};
    var data = req.body;
    this.newSpending(data, cb);
  }.bind(this));

};

module.exports = Spendings;