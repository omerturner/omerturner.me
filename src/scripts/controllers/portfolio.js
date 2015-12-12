'use strict';

angular.module('mainApp')
.controller('portfolioCtrl', function($scope, dataService) {
  
  dataService.getWorks(function(response) { 
    console.log(response.data);  
    $scope.works = response.data;
  });
  
  $scope.showWork = function (work) {
    console.log(work);
  };
  
});