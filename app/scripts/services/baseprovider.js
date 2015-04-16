'use strict';

/**
 * @ngdoc service
 * @name scottDemoApp.baseProvider
 * @description
 * # baseProvider
 * Provider in the scottDemoApp.
 */
angular.module('scottDemoApp')
  .provider('baseProvider', function () {

    // Private variables
    var salutation = 'Hello';

    // Private constructor
    function Greeter() {
      this.greet = function () {
        return salutation;
      };
    }

    // Public API for configuration
    this.setSalutation = function (s) {
      salutation = s;
    };

    // Method for instantiating
    this.$get = function () {
      return new Greeter();
    };
  });
