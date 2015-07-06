var Incomings = function(sys) {
  sys.db.collection('incomings', function(err, collection) {
    this.collection = collection;
  }.bind(this));
  this.router(sys);
};

Incomings.prototype.getIncomings = function(cb) {
  this.collection.find().toArray(function(err, data) {
    cb(data);
  });
};

Incomings.prototype.newIncoming = function(data, cb) {
  this.collection.insert(data, function(err, result) {
    cb(result);
  });
};

Incomings.prototype.router = function(sys) {
  var app = sys.app;

  app.get('/incomings', function(req, res) {
    var cb = function(result) {
      res.send(result);
    };
    this.getIncomings(cb);
  }.bind(this));

  app.post('/incomings', function(req, res) {
    var cb = function(result) {};
    var data = req.body;
    this.newIncoming(data, cb);
  }.bind(this));

};

module.exports = Incomings;