angular.module('Alarm-Plus.controllers')

.controller('setupController', ['$scope', '$ionicPlatform', '$timeout', 'Alarm', '$q', '$ionicModal',
    function($scope, $ionicPlatform, $timeout, Alarm, $q, $ionicModal) {
        // Setup page:
        $scope.curTime = "oh";
        $scope.tod = ["AM", "PM"],
            $scope.alarmName = "guest",
            $scope.alarmHour = 0,
            $scope.alarmMinute = 0,
            $scope.alarmTod = {
                time: "PM"
            },
            $scope.alarmDays = [{
                text: "SUN",
                checked: false
            }, {
                text: "MON",
                checked: false
            }, {
                text: "TUE",
                checked: false
            }, {
                text: "WED",
                checked: false
            }, {
                text: "THUR",
                checked: false
            }, {
                text: "FRI",
                checked: false
            }, {
                text: "SAT",
                checked: false
            }, ],
            $scope.alarms = [];

        // Triggered in the setup modal to close it
        $scope.closeSetup = function() {
            $scope.modal.hide();
        };

        // Open the setup modal
        $scope.setup = function() {
            $scope.modal.show();
        };

        $scope.clearInputBox = function() {
            this.alarmMinute = 0,
                this.alarmHour = 0,
                this.alarmTod = 'PM';
        };

        $scope.createAlarm = function() {
            // Create an alarm based on user's input
            var id = Math.floor((Math.random() * 15) + 1);
            $scope.alarms[id] = new Alarm(this.alarmName, this.alarmHour,
                this.alarmMinute, this.alarmTod.time, this.alarmDays);

            // start an alarm at second = 0
            console.log($scope.getCurSecond());
            $timeout(function() {
                $scope.alarms[id].start();
            }, (60 - $scope.getCurSecond()) * 1000);

            console.log($scope.alarmDays);
            console.log($scope.alarms);
            // cleart Box input

            $scope.closeModal(2);
        };

        $scope.getCurSecond = function() {
            var today = new Date();
            currSeconds = today.getSeconds();
            return (currSeconds < 10 ? "0" : "") + currSeconds;
        };

        $scope.findAlarm = function(alarm) {
            var index = $scope.alarms.indexOf(alarm);
            console.log(index);
        };

        $scope.timePickerObject = {
            inputEpochTime: ((new Date()).getHours() * 60 * 60), //Optional
            step: 15, //Optional
            format: 12, //Optional
            titleLabel: '12-hour Format', //Optional
            setLabel: 'Set', //Optional
            closeLabel: 'Close', //Optional
            setButtonType: 'button-positive', //Optional
            closeButtonType: 'button-stable', //Optional
            callback: function(val) { //Mandatory
                timePickerCallback(val);
            }
        };

        function timePickerCallback(val) {
            if (typeof(val) === 'undefined') {
                console.log('Time not selected');
            } else {
                var selectedTime = new Date(val * 1000);
                console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes(), 'in UTC');
            }
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
        };

    }
])
