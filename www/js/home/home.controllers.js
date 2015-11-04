angular.module('Alarm-Plus.controllers')

.controller('homeController', ['$scope', '$ionicPlatform', 'Alarm',
    function($scope, $ionicPlatform, Alarm) {
        $ionicPlatform.ready(function() {
            // Testing Purpose:
            // // TODO: sync the singleton array to the localstorage
            // var permanentStorage = window.localStorage;
            // var testalarm = new Alarm("cool", 10, 20, "AM");
            // testalarm = JSON.stringify(testalarm);
            // window.localStorage.setItem("key", testalarm);
            // var coolalarm = ["babe", "love"];
            // window.localStorage.setItem("key2", coolalarm);
            // var value = window.localStorage.getItem("key");
            // var value2 = window.localStorage.getItem("key2");
            // console.log(value);


            // Remove an alarm on Home Page
            $scope.removeAlarm = function(index) {
                $scope.alarms.splice(index, 1);
                window.localStorage.setItem("alarms", JSON.stringify($scope.alarms));
            };

            // Modify the alarm on Home page
            $scope.editAlarm = function() {

            };

            // Remove all item in the localStorage
            $scope.clearAll = function() {
                window.localStorage.clear();
                $scope.alarms = [];
                debugger;
            };
        });
    }
]);
