angular.module('Alarm-Plus.controllers')

.controller('setupController', ['$scope', '$ionicPlatform', '$timeout', 'Alarm', function($scope, $ionicPlatform, $timeout, Alarm) {
    $ionicPlatform.ready(function() {
        $scope.curTime = "oh";
        $scope.tod = ["AM", "PM"],
            $scope.alarmName = "guest",
            $scope.alarmHour = 0,
            $scope.alarmMinute = 0,
            $scope.alarmTod = "PM",
            $scope.alarmDays = {
              SUN: 0,
              MON: 1,
              TUE: 2,
              WED: 3,
              THUR: 4,
              FRI: 5,
              SAT: 6
            },
            $scope.alarms = [];


        $scope.clearInputBox = function() {
            $scope.alarmMinute = 2,
                $scope.alarmHour = 2,
                $scope.alarmTod = 'PM';
        }

        $scope.createAlarm = function() {
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
            // cleart Box input
            $scope.clearInputBox()
        }

        $scope.getCurSecond = function() {
            var today = new Date();
            currSeconds = today.getSeconds();
            return (currSeconds < 10 ? "0" : "") + currSeconds;
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
}]);



