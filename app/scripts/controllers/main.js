'use strict';

/**
 * @ngdoc function
 * @name scottDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scottDemoApp
 */
angular.module('scottDemoApp')
  .controller('MainCtrl', function ($scope, $controller, baseFactory) {
    // inhertis basecontrollerCtrl
    $controller('BasecontrollerCtrl', {$scope: $scope});

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // set super
    $scope._error = $scope.error;

    $scope.error = function(){
      // invoke super
      $scope._error();

      // delete super
      delete $scope._error;

      baseFactory.list({}, function(data, status, header){
        console.log(data, status, header);
      }, function(data, status, header){
        console.log(data, status, header);
      });
    };

    console.log(baseFactory);
  });
