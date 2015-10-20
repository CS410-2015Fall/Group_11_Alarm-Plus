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



// singleton object to be used:
var clock = new Clock();
var alarms = []; // hashtable
// var alarms = new Hashtable();
var startAlarm;
var startTask;
var snooze = 3;



// Start the clock
jq("#tempt-clock-run").click(function() {
    // we will wait for the second to hit 0 before we start running the clock.
    setTimeout(function() {
        startAlarm = setInterval(function() {
          console.log(clock.dispTime());
            isAlarmTime(alarms);
        }, 60000);
    }, (60 - clock.getSecond()) * 1000);
});

// Stop the clock
jq("#tempt-clock-stop").click(function() {
    clearInterval(startAlarm);
});


jq("#create-alarm").click(function() {
    // Check if the inputs are valid:

    // Create an alarm based on user's input
    var id = Math.floor((Math.random() * 15) + 1);
    var alarm = new Alarm(jq("#alarm-name").val(), jq("#alarm-hour").val(),
        jq("#alarm-minute").val(), jq("#time-of-day").val());
    alarms[id] = alarm;
    console.log(alarms);


    ClearInputBox();
});

// Constantly check if an alarm should go off.
// Alarms = the list of alarms
function isAlarmTime(Alarms) {
    for (var id in alarms) {
        if (!Alarms[id].active) {
            continue;
        }
        snooze = 3; // snooze should be set to 3 at the start
        var aName = Alarms[id].name;
        var aHour = Alarms[id].hour;
        var aMinute = Alarms[id].minute;
        var aTod = Alarms[id].tod;
        var aActive = Alarms[id].active;
        var aSnooze = Alarms[id].snoozeCredit;
        //console.log("alarm name is " + aName + " and my alarm hour is " + aHour + " and alarm minute is " + aMinute + " " + aTod + " " + aActive);
        if (aHour == clock.getHour() && aMinute == clock.getMinute() && aTod === clock.getTimeOfDay()) {
            // keep rining:
            alert('wake up already');
        }
    }
}

jq("#tempt-snooze").click(function() {
    snooze--;
    console.log(snooze);
});



function ClearInputBox() {
    jq("#alarm-name").val(''),
        jq("#alarm-minute").val(''),
        jq("#time-of-day").val(''),
        jq("#alarm-hour").val('');
}

jq("#tempt-check-time").click(function() {
    isAlarmTime(alarms);
});


//adwqdkoqwkdoqwkd


/*
Todo:
- the logic that we should run the setInterval.


*/
