'use strict';

angular.module('exphtml5bizApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Events',
      'link': '#'
    },
    {
      'title': 'Vision',
      'link': '#'
    },
    {
      'title': 'Abouts',
      'link': '#'
    }];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
