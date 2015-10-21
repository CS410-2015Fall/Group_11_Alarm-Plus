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

// alarms will contain all the created alarms.
var alarms = [];
var checkTime;





jq("#create-alarm").click(function() {
    // Check if the inputs are valid:

    // Create an alarm based on user's input
    var id = Math.floor((Math.random() * 15) + 1);
    alarms[id] = new Alarm(jq("#alarm-name").val(), jq("#alarm-hour").val(),
        jq("#alarm-minute").val(), jq("#time-of-day").val());

    // start an alarm at second = 0
    console.log(getCurrSecond());
    setTimeout(function() {
        alarms[id].start();
    }, (60 - getCurrSecond()) * 1000);

    console.log(alarms);
    ClearInputBox();
});

function getCurrSecond() {
    var today = new Date();
    currSeconds = today.getSeconds();
    return (currSeconds < 10 ? "0" : "") + currSeconds;
}

// Used for debug purpose
function currTime() {
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
    var curTime = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

    jq("#clock").text(curTime);

    checkTime = setTimeout(function() {
        currTime();
    }, 1000);
}

currTime();

jq("#tempt-snooze").click(function() {
    // snooze--;
    // console.log(snooze);
    clearTimeout(checkTime);
});



function ClearInputBox() {
    jq("#alarm-minute").val(''),
        jq("#time-of-day").val(''),
        jq("#alarm-hour").val('');
}

jq("#tempt-check-time").click(function() {
    isAlarmTime(alarms);
});
