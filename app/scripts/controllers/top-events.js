'use strict';

angular.module('exphtml5bizApp')
  .controller('TopEventsCtrl', function ($scope, events, actions) {
    $scope.events = events;
    $scope.actions = actions;
  });
