angular.module('Alarm-Plus.controllers')

.factory('Alarm', ['$ionicPopup', '$timeout', '$state', function($ionicPopup, $timeout, $state) {
    function Alarm(name, hour, minute, timeofday, weekDays, task) {
        this.name = name;
        this.hour = hour;
        this.minute = minute;
        this.tod = timeofday;
        this.weekDays = weekDays;
        this.task = task;
    };

    Alarm.prototype.setHour = function(hour) {
        this.hour = hour;
    };

    Alarm.prototype.setMinute = function(minute) {
        this.minute = minute;
    };

    Alarm.prototype.setWeekDays = function(weekDays) {
        this.weekDays = weekDays;
    };
    Alarm.prototype.setTimeOfDay = function(tod) {
        this.tod = tod;
    };

    return Alarm;
}])
