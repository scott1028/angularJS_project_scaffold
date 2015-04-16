'use strict';

/**
 * @ngdoc function
 * @name scottDemoApp.controller:BasemoduleBaseCtrl
 * @description
 * # BasemoduleBaseCtrl
 * Controller of the scottDemoApp
 */
angular.module('scottDemoApp')
  .controller('BasemoduleBaseCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
