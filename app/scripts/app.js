'use strict';

angular
  .module('appconfApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ng.httpLoader'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function (httpMethodInterceptorProvider) {
    httpMethodInterceptorProvider.whitelistDomain('site.conf');
  });