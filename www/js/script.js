var jq = $.noConflict(); // allow us to use JQuery
var module = angular.module('Alarm-Plus', []);


// Check the input of alarmHour and alarmMinutes
var checkInput = function checkNumberInput(object) {
    if (object.value.length > object.maxLength) {
        object.value = object.value.slice(0, object.maxLength);
    }
};


// Singleton Clock
var clock = new Clock();

// Start the clock
function startClock() {
  clock.startTick();
}

// Stop the clock
function stopClock() {
  clock.stopTick();
}


