'use strict';

/**
 * @ngdoc function
 * @name scottDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the scottDemoApp
 */
angular.module('scottDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
