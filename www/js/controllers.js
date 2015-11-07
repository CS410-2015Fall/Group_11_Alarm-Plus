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
                $scope.alarmName = "410 due today",
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
                }, ];



            $scope.getCurSecond = function() {
                var today = new Date();
                currSeconds = today.getSeconds();
                return (currSeconds < 10 ? "0" : "") + currSeconds;
            };


            $scope.initAlarms = function() {
                // Check if key alrms is already exist
                if (window.localStorage.getItem("alarms") === null) {
                    var tempt = [];
                    window.localStorage.setItem("alarms", JSON.stringify(tempt));
                    $scope.alarms = JSON.parse(window.localStorage.getItem("alarms"));
                } else {
                    var alarms = JSON.parse(window.localStorage.getItem("alarms"));
                    $scope.alarms = [];
                    for (var a in alarms) {

                        //var hi = $.extend(new Alarm(), $scope.alarms[a]);
                        // debugger;
                        //$scope.alarms[a].start();
                        var alarm = new Alarm();
                        alarm.name = alarms[a].name;
                        alarm.hour = alarms[a].hour;
                        alarm.minute = alarms[a].minute;
                        alarm.tod = alarms[a].tod;
                        alarm.weekDays = alarms[a].weekDays;
                        $scope.alarms.push(alarm);
                        //alarm.start();
                        //debugger;
                    }

                    $timeout(function() {
                        for (var b in $scope.alarms) {
                            $scope.alarms[b].start();
                        }
                    }, (60 - $scope.getCurSecond()) * 1000);
                }
            };

            $scope.initAlarms();


            // Triggered in the setup modal to close it
            $scope.closeSetup = function() {
                $scope.modal.hide();
            };

            // Open the setup modal
            $scope.setup = function() {
                $scope.modal.show();
            };

            $scope.createAlarm = function() {

                // Create an alarm based on user's input
                // var id = Math.floor((Math.random() * 15) + 1);
                var nalarm = new Alarm(this.alarmName, this.alarmHour,
                    this.alarmMinute, this.alarmTod.time, this.alarmDays);

                $scope.alarms.push(nalarm);

                // start an alarm at second = 0
                console.log($scope.getCurSecond());
                $timeout(function() {
                    $scope.alarms[$scope.alarms.length - 1].start();
                }, (60 - $scope.getCurSecond()) * 1000);

                window.localStorage.setItem("alarms", JSON.stringify($scope.alarms));
                console.log($scope.alarmDays);
                console.log($scope.alarms);
                // cleart Box input

                $scope.closeModal(2);
            };

            $scope.findAlarm = function(alarm) {
                var index = $scope.alarms.indexOf(alarm);
                console.log(index);
            };




            /*
            Return the closest date:
            day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
            */
            $scope.closestDate = function(day) {
                var today = new Date();
                var today_day = today.getDay();

                for (var i = 7; i--;) {
                  // console.log($scope.alarmDays[i].text);
                    if (day === $scope.alarmDays[i].text) {
                        day = (i <= today_day) ? (i + 7) : i;
                        break;
                    }
                }
                var daysUntilNext = day - today_day;
                console.log(daysUntilNext);
                var wanted = new Date().setDate(today.getDate() + daysUntilNext);
                navigator.notification.alert(day + new Date(wanted));
                //return new Date().setDate(today.getDate() + daysUntilNext);
            };

            $scope.test = function() {
              $scope.closestDate('SUN');
              $scope.closestDate('MON');
              $scope.closestDate('TUE');
              $scope.closestDate('WED');
              $scope.closestDate('THUR');
              $scope.closestDate('FRI');
              $scope.closestDate('SAT');
            };

            $scope.schedule = function(id, title, msg, hour, min) {
                var today = new Date();
                var year = today.getYear() + 1900;
                var month = today.getMonth();
                var day = today.getDate();
                var now = today.getTime();

                // at: new Date(year, month, day, hour, min)

                cordova.plugins.notification.local.schedule({
                    id: 2,
                    title: title,
                    at: new Date(year, month, day, hour, min)
                });

                // TODO: update localStorage here:
                navigator.notification.alert("Reminder added successfully" + new Date(year, month, day, hour, min));
            };

            $scope.testAlarm = function() {

                // var now = today.getTime();
                // cordova.plugins.notification.local.schedule({
                //     id: 1,
                //     title: "confused really",
                //     at: new Date(now + 60 * 1000)
                // });
                $scope.schedule($scope.alarmName, "Alarm-Plus", "Productive TIME", $scope.alarmHour, $scope.alarmMinute);
            };

            $scope.timePickerObject = {
                inputEpochTime: ((new Date()).getHours() * 60 * 60), //Optional
                step: 1, //Optional
                format: 12, //Optional
                titleLabel: 'SETUP', //Optional
                setLabel: 'Set', //Optional
                closeLabel: 'Cancel', //Optional
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
                    $scope.alarmMinute = selectedTime.getUTCMinutes();
                    var currentHours = selectedTime.getUTCHours();
                    $scope.alarmHour = currentHours;
                    $scope.alarmTod.time = (currentHours < 12) ? "AM" : "PM";
                    debugger;
                    // currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
                    // currentHours = (currentHours === 0) ? 12 : currentHours;
                    // $scope.alarmHour = currentHours
                    // console.log($scope.alarmHour + " " + $scope.alarmMinute + " " + $scope.alarmTod.time);
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


        });
    }
]);
