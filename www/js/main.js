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


var clock = new Clock();
// alarms = set of alarms
var alarms = [];
var startAlarm;



// Start the clock
jq("#tempt-clock-run").click(function() {
    //clock.startTick();
    startAlarm = setInterval(function(){isAlarmTime(alarms);}, 5000);
});

// Stop the clock
jq("#tempt-clock-stop").click(function() {
    //clock.stopTick();
    clearInterval(startAlarm);
});

// Create an alarm based on user's input
jq("#create-alarm").click(function() {
    var id = Math.floor((Math.random() * 15) + 1);
    var alarm = new Alarm(jq("#alarm-name").val(), jq("#alarm-hour").val(),
        jq("#alarm-minute").val(), jq("#time-of-day").val());
    alarms[id] = alarm;
    console.log(alarms);
    ClearInputBox();
});

function isAlarmTime(Alarms) {
  alert('repeat me');
    for (var id in alarms) {
        var aName = Alarms[id].name;
        var aHour = Alarms[id].hour;
        var aMinute = Alarms[id].minute;
        var aTod = Alarms[id].tod;
        var aActive = Alarms[id].active;
        console.log("alarm name is " + aName + " and my alarm hour is " + aHour + " and alarm minute is " + aMinute + " " + aTod + " " + aActive);
        if (aHour == clock.getHour() && aMinute == clock.getMinute()) {
          alert("time is up");
        }
    }
}

function ClearInputBox() {
    jq("#alarm-name").val(''),
        jq("#alarm-minute").val(''),
        jq("#time-of-day").val(''),
        jq("#alarm-hour").val('');
}

jq("#tempt-check-time").click(function() {
    isAlarmTime(alarms);
});
