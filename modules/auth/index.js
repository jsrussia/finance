var Auth = function(sys) {
  this.router(sys.app);
};

Auth.prototype.router = function(app) {

  app.get('/auth', function(req, res) {
    res.render('auth');
  });

  app.post('/auth', function(req, res) {
    if (req.body.password === 'admin' && req.body.username === 'admin') {
      res.json({ success : true, sessionId : '12345' });
    } else {
      res.json({ success : false });
    }
  });

};

module.exports = Auth;