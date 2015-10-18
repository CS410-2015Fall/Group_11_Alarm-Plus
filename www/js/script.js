var jq = $.noConflict(); // allow us to use JQuery

// Check the input of alarmHour and alarmMinutes
var checkInput = function checkNumberInput(object) {
    if (object.value.length > object.maxLength) {
        object.value = object.value.slice(0, object.maxLength);
    }
    if (object.value > object.max) {
        object.value = object.max;
    }
};

// check time-of-day input
function checkTimeOfDay(object) {

}


var clock = new Alarm();
// alarms = set of alarms
var alarms = [];

// Start the clock
jq("#tempt-clock-run").click(function() {
    clock.startTick();
});

// Stop the clock
jq("#tempt-clock-stop").click(function() {
    clock.stopTick();
});

// Create an alarm based on user's input
jq("#create-alarm").click(function() {
    var id = Math.floor((Math.random() * 50) + 1);
    var alarm = new Alarm(jq("#alarm-name").val(), jq("#alarm-hour").val(),
        jq("#alarm-minute").val(), jq("#time-of-day").val());
    alarms[id] = alarm;
    console.log(alarms);
    ClearInputBox();
});

function ClearInputBox() {
    jq("#alarm-name").val(""),
        jq("#alarm-minute").val(""),
        jq("#time-of-day").val(""),
        jq("#alarm-hour").val("");
}
