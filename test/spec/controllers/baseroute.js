'use strict';

describe('Controller: BaserouteCtrl', function () {

  // load the controller's module
  beforeEach(module('scottDemoApp'));

  var BaserouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BaserouteCtrl = $controller('BaserouteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
