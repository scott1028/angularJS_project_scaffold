'use strict';

/**
 * @ngdoc directive
 * @name scottDemoApp.directive:baseDirective
 * @description
 * # baseDirective
 */
angular.module('scottDemoApp')
  .directive('baseDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the baseDirective directive');
      }
    };
  })
  .directive("datepicker", function() {
    return {
      restrict: "A",
      require: "ngModel",
      link: function(scope, elem, attrs, ngModelCtrl) {
        var updateModel = function(dateText) {
          scope.$apply(function() {
              ngModelCtrl.$setViewValue(dateText);
          });
        };
        var options = {
          dateFormat: "yy-mm-dd",
          onSelect: function(dateText) {
              updateModel(dateText);
          }
        };
        elem.datepicker(options);
      }
    }
  })
  .directive('fileModel', ['$parse',
    function($parse) {
      // refer to http://uncorkedstudios.com/blog/multipartformdata-file-upload-with-angularjs
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;

          element.bind('change', function() {
            scope.$apply(function() {
                modelSetter(scope, element[0].files[0]);
            });
          });
        }
      };
    }
  ])
  .directive('baseControlPanel', function() {
    return {
      replace: true,
      transclude: true,
      restrict: 'E',
      templateUrl: '/views/__directive__/basecontrolpanel.html'
    }
  })

  // product, package, topup approve list control panel
  .directive('controlPanel', function() {
      return {
        replace: false,
        restrict: 'E',
        templateUrl: '/views/__directive__/controlpanel.html'
      }
  })
;