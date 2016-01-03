'use strict';

angular.module('mainApp')
.service('dataService', function($http) {

  this.getWorks = function(callback){
    $http.get('/api/works')
    .then(callback);
  };

});