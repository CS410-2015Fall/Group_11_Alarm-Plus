describe('AppCtrl', function() {


    var alarmName = "guest",
        alarmHour = 0,
        alarmMinute = 0;

    var alarmDays = [{
        text: "SUN",
        checked: false,
        value: 0
    }, {
        text: "MON",
        checked: false,
        value: 1
    }, {
        text: "TUE",
        checked: false,
        value: 2
    }, {
        text: "WED",
        checked: false,
        value: 3
    }, {
        text: "THUR",
        checked: false,
        value: 4
    }, {
        text: "FRI",
        checked: false,
        value: 5
    }, {
        text: "SAT",
        checked: false,
        value: 6
    }, ];

    var closestDate = function(day) {
        var today = new Date();
        var today_day = today.getDay();
        for (var i = 7; i--;) {
            if (day === alarmDays[i].text) {
                day = (i < today_day) ? (i + 7) : i;
                break;
            }
        }
        var daysUntilNext = day - today_day;
        var wanted = new Date().setDate(today.getDate() + daysUntilNext);
        //navigator.notification.alert(day + new Date(wanted));
        console.log(day + new Date(wanted));
        console.log("date value: " + new Date().setDate(today.getDate() + daysUntilNext));
        return new Date().setDate(today.getDate() + daysUntilNext);
    };

    it("check alarm setup", function() {
        expect(alarmName).toBe("guest");
        expect(alarmHour).toBe(0);
        expect(alarmMinute).toBe(0);
        expect(alarmDays[0].text).toBe("SUN");
        expect(alarmDays[1].checked).toBe(false);
        expect(alarmDays[2].value).toBe(2);
    });

    it("check Function calls", function() {
      var tempt = closestDate('SUN');
       expect(tempt instanceof Date).toBe(false);
    });

    it("check Function calls", function() {
      var tempt = closestDate('SUN');
       expect(tempt instanceof Date).toBe(false);
    });
});
