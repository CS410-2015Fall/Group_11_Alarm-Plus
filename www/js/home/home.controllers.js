angular.module('Alarm-Plus.controllers')

.controller('homeController', ['$scope', '$ionicPlatform', 'Alarm',
    function($scope, $ionicPlatform, Alarm) {
        $ionicPlatform.ready(function() {

            $scope.myAlarm = ["well"];

            // TODO: sync the singleton array to the localstorage
            var permanentStorage = window.localStorage;
            window.localStorage.setItem("key", "can i put array here?");
            var coolalarm = ["babe", "love"];
            window.localStorage.setItem("key2", coolalarm);
            var value = window.localStorage.getItem("key");
            var value2 = window.localStorage.getItem("key2");
        });

        $ionicPlatform.on('resume', function() {
          // This should be a greate place to refresh the array
            alert("hi me");
        });
    }
]);
