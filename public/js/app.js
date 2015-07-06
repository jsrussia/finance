var app = angular.module('fnApp', []);

app.controller('TabsController', function () {
  this.tab = 1;
  this.selectTab = function(tab) {
    this.tab = tab;
  };
  this.isSelected = function(tab) {
    return this.tab === tab;
  };
});

app.controller('IncomingsController', function($scope, $http) {

  $http.get('/incomings').success(function(data) {
    this.incomings = data;
  }.bind(this)).error(function(err) {
    console.log(err);
  });

  this.title = 'Информация о приходах денежных средств';
  this.incoming = {};

  this.addIncoming = function() {
    this.incomings.push(this.incoming);
    $http.post('/incomings', this.incoming).success(function(res) {
    }).error(function(err) {
      console.log(err);
    });
    this.incoming = {};
  };

});

app.controller('SpendingsController', function($scope, $http) {

  $http.get('/spendings').success(function(data) {
    this.spendings = data;
  }.bind(this)).error(function(err) {
    console.log(err);
  });

  this.title = 'Информация о расходах денежных средств';
  this.spending = {};

  this.addSpending = function() {
    this.spendings.push(this.spending);
    $http.post('/spendings', this.spending).success(function(res) {
    }).error(function(err) {
      console.log(err);
    });
    this.spending = {};
  }
});

app.controller('BalanceController', function($scope, $http) {
  $http.get('/balance').success(function(data) {
    this.balance = data.balance;
  }.bind(this)).error(function(err) {
    console.log(err);
  });
});