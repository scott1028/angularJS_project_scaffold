'use strict';

describe('Directive: baseDirective', function () {

  // load the directive's module
  beforeEach(module('scottDemoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<base-directive></base-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the baseDirective directive');
  }));
});
