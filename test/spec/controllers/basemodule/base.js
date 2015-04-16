'use strict';

describe('Controller: BasemoduleBaseCtrl', function () {

  // load the controller's module
  beforeEach(module('scottDemoApp'));

  var BasemoduleBaseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BasemoduleBaseCtrl = $controller('BasemoduleBaseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
