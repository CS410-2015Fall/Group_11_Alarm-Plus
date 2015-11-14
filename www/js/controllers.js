angular.module('Alarm-Plus.controllers', [])

.controller('AppCtrl', ['$scope', '$ionicPlatform', '$timeout', 'Alarm', '$q', '$ionicModal', '$state',
    function($scope, $ionicPlatform, $timeout, Alarm, $q, $ionicModal, $state) {
        $ionicPlatform.ready(function() {
            // Login Area
            $scope.loginData = {};

            // // Create the login modal that we will use later
            // $ionicModal.fromTemplateUrl('templates/login.html', {
            //     id: '1',
            //     scope: $scope,
            //     animation: 'slide-in-up'
            // }).then(function(modal) {
            //     $scope.modal1 = modal;
            // });

            // $ionicModal.fromTemplateUrl('templates/setup.html', {
            //     id: '2',
            //     scope: $scope,
            //     animation: 'slide-in-up'
            // }).then(function(modal) {
            //     $scope.modal2 = modal;
            // });

            // Triggered in the login modal to close it
            $scope.closeModal = function(index) {
                if (index == 1) {
                    $scope.modal1.remove();
                } else if (index == 2) {
                    $scope.modal2.remove();
                }
            };

            // Open the login modal
            $scope.openModal = function(index) {
                var modalOptions = {
                    scope: $scope,
                    animation: 'slide-in-up'
                };
                if (index == 1) {
                    $ionicModal.fromTemplateUrl('templates/login.html', modalOptions).then(function(dialog) {
                        $scope.modal1 = dialog;
                        $scope.modal1.show();
                    });
                } else if (index == 2) {
                    $ionicModal.fromTemplateUrl('templates/setup.html', modalOptions).then(function(dialog) {
                        $scope.modal2 = dialog;
                        $scope.modal2.show();
                    });
                }
            };

            // $scope.openModal = function(item) {
            //     var modalOptions = {
            //         scope: $scope,
            //         animation: 'slide-in-up'
            //     };
            //     $ionicModal.fromTemplateUrl('templates/availability.html', modalOptions).then(function(dialog) {
            //         $scope.testModal = dialog;
            //         $scope.testModal.show();
            //     });
            // }

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
                    checked: false,
                    value: 0
                }, {
                    text: "MON",
                    checked: false,
                    value: 1
                }, {
                    text: "TUE",
                    checked: false,
                    value: 2
                }, {
                    text: "WED",
                    checked: false,
                    value: 3
                }, {
                    text: "THUR",
                    checked: false,
                    value: 4
                }, {
                    text: "FRI",
                    checked: false,
                    value: 5
                }, {
                    text: "SAT",
                    checked: false,
                    value: 6
                }, ];

            $scope.dispHour = 0;




            $scope.getCurSecond = function() {
                var today = new Date();
                currSeconds = today.getSeconds();
                return (currSeconds < 10 ? "0" : "") + currSeconds;
            };


            /*
            Synchronize the array of alarms with localStorage
            */
            $scope.initAlarms = function() {
                // Check if key alrms is already exist
                if (window.localStorage.getItem("alarms") === null) {
                    var tempt = [];
                    window.localStorage.setItem("alarms", JSON.stringify(tempt));
                    $scope.alarms = tempt;
                } else {
                    var alarms = JSON.parse(window.localStorage.getItem("alarms"));
                    $scope.alarms = [];
                    for (var a in alarms) {

                        //var hi = $.extend(new Alarm(), $scope.alarms[a]);
                        // debugger;
                        //$scope.alarms[a].start();
                        var alarm = new Alarm();
                        alarm.id = alarms[a].id;
                        alarm.name = alarms[a].name;
                        alarm.hour = alarms[a].hour;
                        alarm.minute = alarms[a].minute;
                        alarm.tod = alarms[a].tod;
                        alarm.weekDays = alarms[a].weekDays;
                        $scope.alarms.push(alarm);
                        //alarm.start();
                        //debugger;
                    }

                    // $timeout(function() {
                    //     for (var b in $scope.alarms) {
                    //         $scope.alarms[b].start();
                    //     }
                    // }, (60 - $scope.getCurSecond()) * 1000);
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
                    if (day === $scope.alarmDays[i].text) {
                        day = (i < today_day) ? (i + 7) : i;
                        break;
                    }
                }
                var daysUntilNext = day - today_day;
                var wanted = new Date().setDate(today.getDate() + daysUntilNext);
                //navigator.notification.alert(day + new Date(wanted));
                return new Date().setDate(today.getDate() + daysUntilNext);
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

            /*
            Alarms with the same id will result in using only the latest one.
            */
            $scope.schedule = function(name, title, msg, hour, min, wday) {
                var today = new Date();
                var year = today.getYear() + 1900;
                var month = today.getMonth();
                var now = today.getTime();
                var tod = (hour < 12) ? "AM" : "PM";
                var alarms = [];
                var arrayID = [];

                for (var i in wday) {
                    if (wday[i].checked) {
                        var tempt = wday[i].text;
                        alarms.push(tempt);
                    }
                }

                for (var j in alarms) {
                    var day = $scope.closestDate(alarms[j]);
                    //var myId = new Date(day).getDay(); // Currently correspond to each day
                    var myId = new Date().getUTCMilliseconds();
                    day = new Date(day).getDate();
                    console.log("my js is " + j + " so day is " + day);
                    cordova.plugins.notification.local.schedule({
                        id: myId,
                        title: title,
                        at: new Date(year, month, day, hour, min)
                    });
                    arrayID.push(myId);
                }
                console.log("my arrayID is " + arrayID);
                var alarm = new Alarm(arrayID, name, hour, min, tod, wday);
                $scope.alarms.push(alarm);

                window.localStorage.setItem("alarms", JSON.stringify($scope.alarms));
                navigator.notification.alert("Reminder added successfully" + new Date(year, month, day, hour, min));
                $scope.closeModal(2);
            };


            /*
            Things need to be done when the alarm fires:
            */
            cordova.plugins.notification.local.on("trigger", function(notification) {
                //alert("triggered: " + notification.id);
                $state.go('app.task');
            });

            $scope.testAlarm = function() {
                $scope.schedule(this.alarmName, "Alarm-Plus", "Productive TIME", this.alarmHour, this.alarmMinute, this.alarmDays);
            };

            $scope.reset = function() {
                $scope.myForm.$setPristine();
            };

            $scope.timePickerObject = {
                inputEpochTime: ((new Date()).getHours() * 60 * 60), //Optional
                step: 1, //Optional
                format: 24, //Optional
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
                    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
                    currentHours = (currentHours === 0) ? 12 : currentHours;
                    $scope.dispHour = currentHours
                        // console.log($scope.alarmHour + " " + $scope.alarmMinute + " " + $scope.alarmTod.time);
                }
            }

            /*
            Get all LocaNotification
            */
            $scope.getLocalNotification = function() {
                var allID;
                cordova.plugins.notification.local.getAllIds(function(ids) {
                    // getIds() as alias can also be used!
                    allID = ids;
                    navigator.notification.alert(allID);
                });
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
