Clock = function(id) {
    this.id = id;
    this.isTick = false;
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
    currentHours = (currentHours === 0) ? 12 : currentHours;

    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    jq("#clock").text(currentTimeString);
};

Clock.prototype.stopTick = function() {
  this.active = false;
};

Clock.prototype.startTick = function() {
  this.active = true;
};

Clock.prototype.Tick = function() {
  setInterval(this.getCurrTime,1000);
};



//var alarmHour = angular.element(document.querySelector('#alarm-hour')).val();
