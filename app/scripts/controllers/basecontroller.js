'use strict';

/**
 * @ngdoc function
 * @name scottDemoApp.controller:BasecontrollerCtrl
 * @description
 * # BasecontrollerCtrl
 * Controller of the scottDemoApp
 */
angular.module('scottDemoApp')
  .controller('BasecontrollerCtrl', function ($scope) {
    $scope.error = function(){
    	alert('base error handle.');
    };
  });
