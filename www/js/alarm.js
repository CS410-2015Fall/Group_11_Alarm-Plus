Alarm = function(name, hour, minute, timeofday, task) {
    this.name = name;
    this.hour = hour;
    this.minute = minute;
    this.tod = timeofday;
    this.task = task;
    this.active = true;
};

// Alarm inherits from Clock
Alarm.prototype = new Clock();

Alarm.prototype.disableAlarm = function() {
  this.active = false;
};

Alarm.prototype.enableAlarm = function() {
  this.active = true;
};

Alarm.prototype.isEnable = function() {
  return this.active;
};

Alarm.prototype.snooze = function() {

};


