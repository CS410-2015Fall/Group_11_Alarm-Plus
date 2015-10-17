var module = angular.module('Alarm-Plus', []);


// Check the input of alarmHour and alarmMinutes
var checkInput = function checkNumberInput(object) {
    if (object.value.length > object.maxLength) {
        object.value = object.value.slice(0, object.maxLength);
    }

    //if (object.value > object.max) { object.value = object.max};
};


var clock = new Clock(1);
clock.getCurrTime();
