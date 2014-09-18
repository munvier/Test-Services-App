'use strict';

angular.module('appconfApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.concerts = [];
    $scope.concertsLoaded = false;

	$http.get('http://nwx.bookdabun.fr/api/views/concerts')
	  .then(function(result) {
    	$scope.concertsLoaded = true;
	    $scope.concerts = result.data;
	});
  });
