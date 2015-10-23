angular.module('Alarm-Plus.controllers')

.controller('taskController', function($scope, $ionicPlatform) {
    $ionicPlatform.ready(function() {
      $scope.taskName = "hi there";
      $scope.fixedText = "im fixed";

      $scope.curPoint = 0;

      $scope.success = function () {
        $scope.curPoint++;
      }

    });
});
