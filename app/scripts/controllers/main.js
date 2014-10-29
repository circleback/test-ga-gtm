'use strict';

angular.module('testGaGtmApp')
  .controller('MainCtrl', function ($scope, $analytics) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.test = function() {
      $analytics.eventTrack(
        'test method',
        {
          'category': 'button',
          'label': 'test'
        }
      )
    };
  });
