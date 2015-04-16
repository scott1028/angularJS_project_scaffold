'use strict';

describe('Controller: BasecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('scottDemoApp'));

  var BasecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BasecontrollerCtrl = $controller('BasecontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
