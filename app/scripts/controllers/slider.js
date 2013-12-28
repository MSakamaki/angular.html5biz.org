'use strict';

angular.module('exphtml5bizApp')
  .controller('SliderCtrl', function ($scope, motto) {
    $scope.mottos = motto;
    $scope.sliderActive=function(isFirst){
    		return isFirst?'item active':'item';
    };
  });
