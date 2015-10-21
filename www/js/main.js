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

jq("#create-alarm").click(function() {
    // Check if the inputs are valid:

    // Create an alarm based on user's input
    var id = Math.floor((Math.random() * 15) + 1);
    alarms[id] = new Alarm(jq("#alarm-name").val(), jq("#alarm-hour").val(),
        jq("#alarm-minute").val(), jq("#time-of-day").val());

    // start an alarm at second = 0
    setTimeout(function() {
      alarms[id].start();
    }, (60 - getCurrSecond) * 1000);

    console.log(alarms);
    ClearInputBox();
});

function getCurrSecond () {
  var today = new Date();
  currSecond = today.getSeconds();
  return (currentSeconds < 10 ? "0" : "") + currentSeconds;
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
