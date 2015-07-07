var Auth = function(sys) {
  this.router(sys.app);
};

Auth.prototype.router = function(app) {

  app.get('/auth', function(req, res) {
    res.render('auth');
  });

};

module.exports = Auth;