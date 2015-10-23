Alarm = function(name, hour, minute, timeofday, task, weekDays) {
    this.name = name;
    this.hour = hour;
    this.minute = minute;
    this.tod = timeofday;
    this.task = task;
    this.snoozeCredit = 3;
    this.active = {};
    this.weekDays = weekDays; // TODO: weekdays should be an array of number
};

Alarm.prototype.start = function() {
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
    // TODO: condition to add need ot check if our weekdays array contain the current day
    if (this.hour == currentHours && this.minute == currentMinutes && this.tod === timeOfDay) {
        console.log("TIME IS UP");
        alert('TIME IS UP');
        // TODO: the music should keep on ringing until user get the 3 answer OR close the app
        // the user should be redirect to another page

    }

    this.active = setTimeout((function() {
        this.start();
    }).bind(this), 60000);
};

// Stop the Alarm from running
Alarm.prototype.stop = function() {
    clearInterval(active);
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

// When the user press snooze button, lower the snooze credit
Alarm.prototype.useSnooze = function() {
  this.snoozeCredit--;
  console.log(this.snoozeCredit);
};

