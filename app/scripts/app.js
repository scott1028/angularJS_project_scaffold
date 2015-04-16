'use strict';

/**
 * @ngdoc overview
 * @name scottDemoApp
 * @description
 * # scottDemoApp
 *
 * Main module of the application.
 */
angular
  .module('scottDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/baseRoute', {
        templateUrl: 'views/baseroute.html',
        controller: 'BaserouteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
