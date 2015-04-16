'use strict';

/**
 * @ngdoc service
 * @name scottDemoApp.baseFactory
 * @description
 * # baseFactory
 * Factory in the scottDemoApp.
 */
angular.module('scottDemoApp')
  .factory('baseFactory', function ($http) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      modify: function(data, success, error) {
        data.action = 'update';
        $http({
          url: '/api/books',
          method: 'POST',
          data: data,
          transformRequest: function(obj) {
            var str = [];
            for (var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
          },
        }).success(success).error(error);
      },
      list: function(data, success, error) {
        $http({
          url: '/',
          method: 'GET',
          params: data,
          headers: {
            'Content-Type': 'application/json'
          }
        }).
        success(success).error(error);
      },
      get: function(id, success, error) {
        $http({
          url: '/' + id,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }).
        success(success).error(error);
      },
      create: function(data, success, error) {
        var formData = new FormData();
        for(var field in data){
          if(data[field] !== undefined && data[field] !== null)
            formData.append(field, data[field]);
        };

        $http({
          url: '/',
          method: 'POST',
          data: formData,
          transformRequest: angular.identity,
          headers: {
            'Content-Type': undefined
          }
        }).
        success(success).error(error);
      },
      update: function(data, success, error) {
        var formData = new FormData();
        for(var field in data){
          if(data[field] !== undefined && data[field] !== null)
            // skip fill field when promotionIcon is stringType, not fileType.
            if(!(field === 'promotionIcon' && typeof data[field] === 'string')){
              formData.append(field, data[field]);
            };
        };

        $http({
          url: '/',
          method: 'PATCH',
          data: formData,
          transformRequest: angular.identity,
          headers: {
            'Content-Type': undefined
          }
        }).
        success(success).error(error);
      },
    };
  })
  .factory('Login', ['$http',
    function($http) {
      var url = CONFIG.login_url;
      return {
        send: function(user_name, password, success, error) {
          var login_data = 'username=' + user_name + '&password=' + password + '&source=web';
          //var login_status = false;
          $http({
            url: url,
            method: 'POST',
            data: login_data,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).success(success).error(error);
        }
      };
    }
  ])
;
