angular.module('Alarm-Plus.controllers', [])

.controller('AppCtrl', ['$scope', '$ionicPlatform', '$timeout', 'Alarm', '$q', '$ionicModal',
    function($scope, $ionicPlatform, $timeout, Alarm, $q, $ionicModal) {
        $ionicPlatform.ready(function() {
            // Login Area
            $scope.loginData = {};

            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('templates/login.html', {
                id: '1',
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modal1 = modal;
            });

            $ionicModal.fromTemplateUrl('templates/setup.html', {
                id: '2',
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modal2 = modal;
            });

            // Triggered in the login modal to close it
            $scope.closeModal = function(index) {
                if (index == 1) {
                    $scope.modal1.hide();
                } else if (index == 2) {
                    $scope.modal2.hide();
                }
            };

            // Open the login modal
            $scope.openModal = function(index) {
                if (index == 1) {
                    $scope.modal1.show();
                } else if (index == 2) {
                    $scope.modal2.show();
                }
            };

            // Perform the login action when the user submits the login form
            $scope.doLogin = function() {
                console.log('Doing login', $scope.loginData);

                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system
                $timeout(function() {
                    $scope.closeLogin();
                }, 1000);
            };


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

            $ionicModal.fromTemplateUrl('templates/setup.html', {
                scope: $scope
            }).then(function(modal) {
                $scope.modal = modal;
            });

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
                for (var day in this.alarmDays) {
                    this.alarmDays[day].checked = false;
                }
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
                //this.clearInputBox();
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
        });
    }
]);
