'use strict';

describe('Service: baseFactory', function () {

  // load the service's module
  beforeEach(module('scottDemoApp'));

  // instantiate service
  var baseFactory;
  beforeEach(inject(function (_baseFactory_) {
    baseFactory = _baseFactory_;
  }));

  it('should do something', function () {
    expect(!!baseFactory).toBe(true);
  });

});
