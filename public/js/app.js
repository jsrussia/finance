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

fnApp.controller('IncomingsController', function() {
  this.title = 'Информация о приходах денежных средств';
  this.incomings = [
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
    }
  ]
});

