Alarm = function(id, name, hour, minute, active, task) {
  this.id = id;
  this.name = name;
  this.hour = hour;
  this.minute = minute;
  this.active = active;
  this.task = task;
};

// Alarm inherits from Clock
Alarm.prototype = new Clock(this.id);

// Initialize the alarm
Alarm.prototype.create = function() {

};

Alarm.prototype.create = function(){

};

Alarm.prototype.remove = function(alarmID) {
  // body...
};

Alarm.prototype.set = function(alarmID, name, hour, minute) {
  // body...
};
