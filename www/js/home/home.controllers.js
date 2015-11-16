angular.module('Alarm-Plus.controllers')

.controller('homeController', ['$scope', '$ionicPlatform', 'Alarm',
    function($scope, $ionicPlatform, Alarm) {
        $ionicPlatform.ready(function() {

            $scope.shouldShowDelete = false;
            $scope.shouldShowReorder = false;
            $scope.listCanSwipe = true


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

            // Modify the alarm on Home page
            $scope.editAlarm = function(index) {
              var a = $scope.alarms[index];
              // TODO: use another modal or direct us to the setup modal.
              navigator.notification.alert("Successfully updated");
            };

            // Remove all item in the localStorage
            $scope.clearAll = function() {
                window.localStorage.clear();
                $scope.alarms = [];
            };
        });
    }
]);
