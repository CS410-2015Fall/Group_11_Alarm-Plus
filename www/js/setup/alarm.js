angular.module('Alarm-Plus.controllers')

.factory('Alarm', ['$ionicPopup', '$timeout', '$state', function($ionicPopup, $timeout, $state) {
    function Alarm(id,name, hour, minute, timeofday, weekDays, task) {
        this.id = id;
        this.name = name;
        this.hour = hour;
        this.minute = minute;
        this.tod = timeofday;
        this.weekDays = weekDays;
        this.task = task;
        this.status = true;
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
