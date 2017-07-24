var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/messages.html',
      controller: 'MessageController',
      controllerAs: 'mc'
    }).otherwise('/');
}]);
