Alarm = function(name, hour, minute, timeofday, task) {
    this.name = name;
    this.hour = hour;
    this.minute = minute;
    this.tod = timeofday;
    this.task = task;
    this.snoozeCredit = 3;
    this.active;
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

    if (this.hour == currentHours && this.minute == currentMinutes && this.tod === timeOfDay) {
        // if Time is up do something here:
        console.log("TIME IS UP");
        return;
    }
    active = setTimeout(this.start(), 1000);
};

Alarm.prototype.stop = function() {
    clearTimeout(this.active);
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
