angular.module('Alarm-Plus.controllers')

.controller('setupController', function($scope, $ionicPlatform, $timeout) {
    $ionicPlatform.ready(function() {
        $scope.curTime = "oh";
        $scope.tod = ["AM", "PM"],
            $scope.alarmName = "guest",
            $scope.alarmHour = 0,
            $scope.alarmMinute = 0,
            $scope.alarmTod = "PM",
            $scope.alarms = [];

        $scope.createAlarm = function() {
            // Check if the inputs are valid:
            var weekDays = [];

            // Create an alarm based on user's input
            var id = Math.floor((Math.random() * 15) + 1);
            $scope.alarms[id] = new Alarm(this.alarmName, this.alarmHour,
                this.alarmMinute, this.alarmTod);

            // start an alarm at second = 0
            console.log($scope.getCurSecond());
            setTimeout(function() {
                $scope.alarms[id].start();
            }, (60 - $scope.getCurSecond()) * 1000);

            console.log($scope.alarms);
            $scope.clearInputBox();
        }
        $scope.getCurSecond = function() {
            var today = new Date();
            currSeconds = today.getSeconds();
            return (currSeconds < 10 ? "0" : "") + currSeconds;
        }

        $scope.clearInputBox = function() {
            $scope.alarmMinute = '',
                $scope.alarmHour = '',
                $scope.alarmTod = 'PM';
        }

        $scope.findAlarm = function(alarm) {
            var index = $scope.alarms.indexOf(alarm);
            console.log(index);
        }

        $scope.dispCurTime = function() {
            var today = new Date();
            var currentHours = today.getHours();
            var currentMinutes = today.getMinutes();
            var currentSeconds = today.getSeconds();

            // Pad the minutes and seconds with leading zeros, if required
            currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
            currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

            // set the format of the time
            var timeOfDay = (currentHours < 12) ? "AM" : "PM";
            currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
            currentHours = (currentHours === 0) ? 12 : currentHours;
            $scope.curTime = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

            $timeout(function() {
                $scope.dispCurTime();
            }, 1000);
        }
    });
});
