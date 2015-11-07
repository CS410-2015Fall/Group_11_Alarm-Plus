angular.module('Alarm-Plus.controllers')

.factory('Alarm', ['$ionicPopup', '$timeout', '$state', function($ionicPopup, $timeout, $state) {
    function Alarm( name, hour, minute, timeofday, weekDays, task) {
        this.name = name;
        this.hour = hour;
        this.minute = minute;
        this.tod = timeofday;
        this.task = task;
        this.snoozeCredit = 3;
        this.active = {};
        this.weekDays = weekDays; // TODO: weekdays should be an array of number
    };

    Alarm.prototype.setHour = function(hour) {
        this.hour = hour;
    };

    Alarm.prototype.setMinute = function(minute) {
        this.minute = minute;
    };

    Alarm.prototype.setTimeOfDay = function(tod) {
        this.tod = tod;
    };

    return Alarm;
}])
