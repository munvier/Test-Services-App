'use strict';

angular.module('appconfApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.concerts = [];
	$http.get('http://nwx.bookdabun.fr/api/views/concerts')
	  .then(function(result) {
	    $scope.concerts = result.data;
	});
  });
