'use strict';

angular.module('mainApp')
.service('dataService', function($http) {

  this.getWorks = function(callback){
    $http.get('/works')
    .then(callback);
  };

});