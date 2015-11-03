angular.module('Alarm-Plus.controllers')

.controller('homeController', ['$scope', '$ionicPlatform', 'Alarm',
    function($scope, $ionicPlatform, Alarm) {
        $ionicPlatform.ready(function() {



            // TODO: sync the singleton array to the localstorage
            var permanentStorage = window.localStorage;
            var testalarm = new Alarm("cool", 10, 20, "AM");
            testalarm = JSON.stringify(testalarm);
            window.localStorage.setItem("key", testalarm);
            var coolalarm = ["babe", "love"];
            window.localStorage.setItem("key2", coolalarm);
            var value = window.localStorage.getItem("key");
            var value2 = window.localStorage.getItem("key2");
            console.log(value);
        });

        $scope.test1 = "do do do do";
    }
]);
