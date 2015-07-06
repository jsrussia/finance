var fnApp = angular.module('fnApp', []);

fnApp.controller('TabsController', function () {
  this.tab = 1;
  this.selectTab = function(tab) {
    this.tab = tab;
  };
  this.isSelected = function(tab) {
    return this.tab === tab;
  };
});

fnApp.controller('IncomingsController', function($scope, $http) {
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

fnApp.controller('SpendingsController', function() {
  this.title = 'Информация о расходах денежных средств';
  this.spendings = [
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
});
