angular.module('Alarm-Plus.controllers', [])

.controller('AppCtrl', ['$scope', '$ionicPlatform', '$timeout', 'Alarm', '$q', '$ionicModal', '$state', '$cordovaFacebook', '$rootScope', '$ionicPopup',
    function($scope, $ionicPlatform, $timeout, Alarm, $q, $ionicModal, $state, $cordovaFacebook, $rootScope, $ionicPopup) {
        $ionicPlatform.ready(function() {
            // Login Area
            $scope.loginData = {};

            // Login and Setup Pages:
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

            // Start Task:
            $scope.startMathTask = function() {

                var modalOptions = {
                    scope: $scope,
                    animation: 'slide-in-up'
                };
                $ionicModal.fromTemplateUrl('templates/task.html', modalOptions).then(function(dialog) {
                    $scope.modalTask = dialog;
                    $scope.modalTask.show();

                });
            };
            $scope.closeMathTask = function() {
                $scope.modalTask.remove();
            };

            $rootScope.fbToggle = true;
            $rootScope.fbToggle2 = false;

            // Perform the login action when the user submits the login form
            $scope.doLogin = function() {
                var fbLoginSuccess = function(userData) {
                    navigator.notification.alert("successfully logged in");
                };
                facebookConnectPlugin.login(["public_profile"],
                    fbLoginSuccess,
                    function(error) {
                        console.log(error);
                        navigator.notification.alert("something went wrong.");
                    }
                );
            };

            $scope.fbIn = function() {
                $rootScope.fbToggle = false;
                $rootScope.fbToggle2 = true;
                facebookConnectPlugin.getLoginStatus(
                    function(status) {
                        var tempt = status;
                        console.log("current status: " + tempt);
                        if (tempt.status === "connected") {
                            navigator.notification.alert("you've already logged in.");
                        } else {
                            $scope.doLogin();
                        }
                    }
                );
            };

            $scope.fbOut = function() {
                $rootScope.fbToggle = true;
                $rootScope.fbToggle2 = false;

                facebookConnectPlugin.getLoginStatus(
                    function(status) {
                        var tempt = status;
                        console.log("current status: " + tempt);
                        if (tempt.status !== "connected") {
                            navigator.notification.alert("you've already logged out.");
                        } else {
                            var fbLogoutSuccess = function(userData) {
                                navigator.notification.alert("successfully logged out");
                            };
                            facebookConnectPlugin.logout(fbLogoutSuccess, function(error) {
                                navigator.notification.alert("logout went wrong.");
                            });
                        }
                    }
                );
            };

            $scope.fbPost = function() {
                facebookConnectPlugin.getLoginStatus(
                    function(status) {
                        var tempt = status;
                        if (tempt.status === "connected") {
                            var options = {
                                method: "feed",
                                name: "I wake up at"
                            };

                            facebookConnectPlugin.showDialog(options,
                                function(result) {
                                    console.log("Posted. " + result);
                                },
                                function(e) {
                                    console.log(e);
                                });
                        } else {
                            navigator.notification.alert("You've not logged in.");
                        }
                    }
                );
            };

            // A confirm dialog
            $scope.showConfirm = function() {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Share Your Success',
                    template: ':)))))'
                });
                confirmPopup.then(function(res) {
                    if (res) {
                        $scope.fbPost();
                    } else {
                        console.log('aw QQ');
                    }
                });
            };

            // Setup page:
            $scope.tod = ["AM", "PM"],
                $scope.alarmName = "",
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
            $scope.taskOptions = [{
                text: "Easy Math",
                value: 1
            }, {
                text: "HistoryQuestion",
                value: 2
            }, {
                text: "Hard Math",
                value: 3
            }, {
                text: "Snake Game",
                value: 4
            }];

            $scope.chosenTask = {
                value: 1
            };

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
                        var alarm = new Alarm();
                        alarm.id = alarms[a].id;
                        alarm.name = alarms[a].name;
                        alarm.hour = alarms[a].hour;
                        alarm.minute = alarms[a].minute;
                        alarm.tod = alarms[a].tod;
                        alarm.task = alarms[a].task;
                        alarm.status = alarms[a].status;
                        alarm.weekDays = alarms[a].weekDays;
                        $scope.alarms.push(alarm);
                    }
                }
            };

            $scope.initAlarms();

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
                console.log(day + new Date(wanted));
                console.log("date value: " + new Date().setDate(today.getDate() + daysUntilNext));
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
            Clear the input after each create
            */
            $scope.clearInputBox = function() {
                this.alarmName = "",
                    this.alarmMinute = 0,
                    this.alarmHour = 0,
                    this.alarmTod = 'PM';
                for (var day in this.alarmDays) {
                    this.alarmDays[day].checked = false;
                }
            };

            /*
            Alarms with the same id will result in using only the latest one.
            */
            $scope.schedule = function(name, msg, hour, min, wday, ctask) {
                var alarms = [];
                var arrayID = [];
                var tod;

                for (var i in wday) {
                    if (wday[i].checked) {
                        var tempt = wday[i].text;
                        alarms.push(tempt);
                    }
                }

                console.log(alarms);

                for (var j in alarms) {
                    var day = $scope.closestDate(alarms[j]);
                    var myId = new Date().getUTCMilliseconds();
                    var tempt = new Date(day);
                    var day = tempt.getDate();
                    var month = tempt.getMonth();
                    var year = tempt.getYear() + 1900;
                    tod = (hour < 12) ? "AM" : "PM";

                    console.log("my js is " + j + " so day is " + day);
                    console.log("new date is " + new Date(year, month, day, hour, min));
                    cordova.plugins.notification.local.schedule({
                        id: myId,
                        title: name,
                        data: {
                            task: ctask
                        },
                        at: new Date(year, month, day, hour, min)
                    });
                    //sound: "file://sound/reminder.mp3"
                    arrayID.push(myId);
                }
                console.log("my arrayID is " + arrayID);
                var alarm = new Alarm(arrayID, name, hour, min, tod, wday, ctask);
                return alarm;
            };

            $scope.updateAlarms = function(ids, name, msg, hour, min, wday, ctask) {
                var month;
                var year;
                var alarms = [];
                var closestDay = [];
                var closestMonth = [];

                for (var i in wday) {
                    if (wday[i].checked) {
                        var tempt = wday[i].text;
                        alarms.push(tempt);
                    }
                }

                for (var j in alarms) {
                    var day = $scope.closestDate(alarms[j]);
                    var tempt = new Date(day);
                    day = tempt.getDate();
                    year = tempt.getYear() + 1900;
                    month = tempt.getMonth();
                    closestDay.push(day);
                    closestMonth.push(month);
                }
                // sound: "file://sound/reminder.mp3"
                //console.log(closestDay + " length is " + closestDay.length);
                //console.log(closestMonth + " length is" + closestMonth.length);

                for (var id in ids) {
                    console.log(" my month is " + closestMonth[closestMonth.length - 1]);
                    console.log(" my day is " + closestDay[closestDay.length - 1]);
                    console.log("updated date is " + new Date(year, closestMonth[closestMonth.length - 1], closestDay[closestDay.length - 1], hour, min));
                    cordova.plugins.notification.local.schedule({
                        id: ids[id],
                        title: name,
                        data: {
                            task: ctask
                        },
                        at: new Date(year, closestMonth[closestMonth.length - 1], closestDay[closestDay.length - 1], hour, min)
                    });
                    console.log("check this: " + closestDay[closestDay.length - 1]);
                    closestMonth.pop();
                    closestDay.pop();
                }
            };

            /*
            Things need to  be done when the alarm fires:
            */
            cordova.plugins.notification.local.on("trigger", function(notification) {
                var task = JSON.parse(notification.data).task;
                console.log("task number is " + task);
                // TODO: do something on the task:
                if (task == 1) {
                    $scope.startMathTask();
                } else if (task == 2) {
                    $scope.startMathHardTask();
                } else if (task == 3) {
                    $scope.startHistoryTask();
                } else if (task == 4) {
                    $scope.startSnakeTask();
                }
            });

            // Start Task:
            $scope.startMathHardTask = function() {

                var modalOptions = {
                    scope: $scope,
                    animation: 'slide-in-up'
                };
                $ionicModal.fromTemplateUrl('templates/task4.html', modalOptions).then(function(dialog) {
                    $scope.modalHardTask = dialog;
                    $scope.modalHardTask.show();

                });
            };
            $scope.closeMathHardTask = function() {
                $scope.modalHardTask.remove();
            };

            // Start Task:
            $scope.startHistoryTask = function() {

                var modalOptions = {
                    scope: $scope,
                    animation: 'slide-in-up'
                };
                $ionicModal.fromTemplateUrl('templates/task2.html', modalOptions).then(function(dialog) {
                    $scope.modalHistoryTask = dialog;
                    $scope.modalHistoryTask.show();

                });
            };
            $scope.closeHistoryTask = function() {
                $scope.modalHistoryTask.remove();
            };

            // Start Snake Task:
            $scope.startSnakeTask = function() {
                var modalOptions = {
                    scope: $scope,
                    animation: 'slide-in-up'
                };
                $ionicModal.fromTemplateUrl('templates/task3.html', modalOptions).then(function(dialog) {
                    $scope.modalSnakeTask = dialog;
                    $scope.modalSnakeTask.show();
                });
            };
            $scope.closeSnakeTask = function() {
                $scope.modalSnakeTask.remove();
            };

            $scope.createAlarm = function() {
                console.log("my chosenTask value is " + this.chosenTask.value);
                var alarm = $scope.schedule(this.alarmName, "Productive TIME", this.alarmHour, this.alarmMinute, JSON.parse(JSON.stringify(this.alarmDays)), this.chosenTask.value);
                $scope.alarms.push(alarm);
                window.localStorage.setItem("alarms", JSON.stringify($scope.alarms));
                //navigator.notification.alert("Reminder added successfully" + new Date(year, month, day, hour, min));
                $scope.clearInputBox();
                $scope.closeModal(2);
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
                }
            }

            /*
            Get all LocaNotification
            */
            $scope.getLocalNotification = function() {
                var allID;
                var myItem;
                cordova.plugins.notification.local.getAllIds(function(ids) {
                    // getIds() as alias can also be used!
                    allID = ids;
                    navigator.notification.alert(allID);
                });
                // for (var id in allID) {
                //     cordova.plugins.notification.local.get(allID[id], function(item) {
                //         myItem = item;
                //         console.log("hihi " + myItem);
                //     });
                // }
            };
        });
    }
]);
