angular.module('mainApp')
.directive('about', function() {
  return {
    templateUrl: 'templates/about.html',
    replace: true
  }
})
.directive('skills', function() {
  return {
    templateUrl: 'templates/skills.html',
    replace: true
  }
})
.directive('portfolio', function() {
  return {
    templateUrl: 'templates/portfolio.html',
    controller: 'portfolioCtrl',
    replace: true
  }
})
.directive('contact', function() {
  return {
    templateUrl: 'templates/contact.html',
    replace: true
  }
});