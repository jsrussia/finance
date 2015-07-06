var Base = function(sys) {
  this.router(sys.app);
};

Base.prototype.router = function(app) {

  app.get('/', function(req, res) {
    res.render('index');
  });

};

module.exports = Base;