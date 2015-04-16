'use strict';

/**
 * @ngdoc function
 * @name scottDemoApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the scottDemoApp
 */
angular.module('scottDemoApp')
  .controller('UserCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
