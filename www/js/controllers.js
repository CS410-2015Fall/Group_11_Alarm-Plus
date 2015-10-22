angular.module('Alarm-Plus.controllers', ['ionic', 'ngCordova'])

.controller('setupController', function($scope, $ionicPlatform) {
    $ionicPlatform.ready(function() {
        $scope.defaultMinute = 0,
            $scope.defaultHour = 0,
            $scope.defaultName = "CoolAlarm",
            $scope.defaultTod = "PM";
        $scope.tod = ["AM", "PM"];
    })
});
