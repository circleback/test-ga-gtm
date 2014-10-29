'use strict';

angular
  .module('testGaGtmApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'angulartics',
    'angulartics.google.analytics',
    'angulartics.google.tagmanager'
  ])
  .config(function ($routeProvider, $locationProvider, $analyticsProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $analyticsProvider.virtualPageviews(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
