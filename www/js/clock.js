Clock = function() {
    this.isTick = {};
};

Clock.prototype.dispTime = function() {
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
    return currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
};

Clock.prototype.stopTick = function() {
    clearInterval(this.isTick);
};

Clock.prototype.startTick = function() {
    this.isTick = setInterval(this.dispTime, 1000);
};

// Get the current Hour
Clock.prototype.getHour = function() {
    var today = new Date();
    var currentHours = today.getHours();
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours === 0) ? 12 : currentHours;
    return currentHours;
};

// Get the current Minute
Clock.prototype.getMinute = function() {
    var today = new Date();
    var currentMinutes = today.getMinutes();
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    return currentMinutes;
};

// Get the current TimeOfDay
Clock.prototype.getTimeOfDay = function() {
    var today = new Date();
    return (today.getHours() < 12) ? "AM" : "PM";
};

// Get the current Second
Clock.prototype.getSecond = function() {
  var today = new Date();
  var currentSeconds = today.getSeconds();
  return (currentSeconds < 10 ? "0" : "") + currentSeconds;
};


