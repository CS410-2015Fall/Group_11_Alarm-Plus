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

    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    jq("#clock").text(currentTimeString);
};

Clock.prototype.stopTick = function() {
  clearInterval(this.isTick);
};

Clock.prototype.startTick = function() {
  this.isTick = setInterval(this.dispTime,1000);
};

