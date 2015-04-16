'use strict';

describe('Service: baseProvider', function () {

  // load the service's module
  beforeEach(module('scottDemoApp'));

  // instantiate service
  var baseProvider;
  beforeEach(inject(function (_baseProvider_) {
    baseProvider = _baseProvider_;
  }));

  it('should do something', function () {
    expect(!!baseProvider).toBe(true);
  });

});
