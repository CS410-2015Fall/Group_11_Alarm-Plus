Clock = function(id) {
    this.id = id;
};


Clock.prototype.getCurrTime = function() {
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
    currentHours = (currentHours == 0) ? 12 : currentHours;

    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    console.log("the current time is: " + currentTimeString);
};


Clock.prototype.stopTick = function() {
    // body...
};

Clock.prototype.startTick = function() {
  // body...
};


//var alarmHour = angular.element(document.querySelector('#alarm-hour')).val();
