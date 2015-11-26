angular.module('Alarm-Plus.controllers')

.controller('homeController', ['$scope', '$ionicPlatform', 'Alarm',
    function($scope, $ionicPlatform, Alarm) {
        $ionicPlatform.ready(function() {

            $scope.shouldShowDelete = false;
            $scope.shouldShowReorder = false;
            $scope.listCanSwipe = true

            $scope.toggleCustom = function(index) {
                var a = $scope.alarms[index];
                a.status = a.status === false ? true : false;
                console.log("status is " + a.status);
                var ids = a.id;
                if (a.status) {
                    $scope.updateAlarms(a.id,a.name, "Productive TIME", a.hour, a.minute, a.weekDays, a.task);
                } else {
                    for (var id in ids) {
                        cordova.plugins.notification.local.cancel(ids[id], function() {});
                    }
                }
            };

            // Remove an alarm on Home Page
            $scope.removeAlarm = function(index) {
                // Remove notification based on its id.
                var a = $scope.alarms[index];
                var toBeDeleted = a.id;
                for (var id in toBeDeleted) {
                    cordova.plugins.notification.local.cancel(toBeDeleted[id], function() {});
                }

                $scope.alarms.splice(index, 1);
                window.localStorage.setItem("alarms", JSON.stringify($scope.alarms));
                navigator.notification.alert("Successfully deleted");
            };

            // Remove all item in the localStorage
            $scope.clearAll = function() {
                window.localStorage.clear();
                $scope.alarms = [];
            };
        });
    }
]);
