const myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

// app configuration
myApp.config(function($routeProvider, $mdThemingProvider){
  console.log('config loaded');

  // define our client side routes
  $routeProvider
  .when('/messages', {
      templateUrl: '/views/messages-view.html',
      controller: 'MessagesController as vm'
  })
  .otherwise(
      { redirectTo: '/messages' }
  );

  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('pink');
});