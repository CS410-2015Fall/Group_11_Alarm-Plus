angular.module('Alarm-Plus.controllers')

// newGameController
.controller('task2Controller', function($scope, $ionicSwipeCardDelegate, $cordovaVibration, $state, $rootScope, $cordovaMedia) {
    $scope.cards = [{
        title: 'Swipe down to clear the card',
        histq: 'Which year the Second World War end?',
        answer: 1945, //answer
        choices: [1945, 1939, 1918, 1914],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        histq: 'How many provinces are there in Canada?',
        answer: 10, //answer
        choices: [50, 10, 9, 11],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        histq: 'Who was the first Prime Minister of Canada?',
        answer: "John A. Macdonald", //answer
        choices: ["John A. Macdonald", "Pierre Trudeau", "Paul Martin", "Brian Mulroney"],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        histq: 'Who designed the current flag of Canada?',
        answer: "George Stanley", //answer
        choices: ["King George V", "William Lyon Mackenzie King", "George Stanley", "John Cabot"],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        histq: 'Which is the largest Great Lake?',
        answer: "Lake Superior", //answer
        choices: ["Lake Erie", "Lake Huron", "Lake Ontario", "Lake Superior"],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        histq: 'How many teams were there when the NHL was founded?',
        answer: "6", //answer
        choices: ["5", "6", "7", "12"],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        histq: 'Which year did World War I end?',
        answer: "1918", //answer
        choices: ["1944", "1918", "1914", "1980"],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        histq: 'Which city is the capital of Canada?',
        answer: "Ottawa", //answer
        choices: ["Vancouver", "Toronto", "Ottawa", "Montreal"],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        histq: 'In Canada, which national holiday occurs on July 1st?',
        answer: "Canada Day", //answer
        choices: ["Family Day", "Labour Day", "Victoria Day", "Canada Day"],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        histq: 'Which city is the capital of BC?',
        answer: "Victoria", //answer
        choices: ["Victoria", "Vancouver", "Ottawa", "Edmonton"],
        rank: 0.5 - Math.random()
    }];

    $scope.count = 3;
    $scope.currIndex = "";


    $scope.loop = function(status) {
        if (status === Media.MEDIA_STOPPED) {
            $scope.myMedia.play();
            window.system.setSystemVolume(1.0);
        }

        if ($scope.count == 0) {
            $scope.myMedia.pause();
        }
    };

    $scope.myMedia = new Media("/android_asset/www/sound/buzzer.mp3", null, null, $scope.loop);
    $scope.myMedia.play();

    $scope.snoozeStatus = false;

    $scope.snooze = function() {
        $scope.snoozeStatus = $scope.snoozeStatus ? $scope.snoozeStatus = false : $scope.snoozeStatus = true;
        $scope.myMedia.setVolume(0.2);

        $timeout(function() {
            $scope.myMedia.setVolume(1.0);
        }, 10000);
    };


    $scope.randomQ = function() {
        return Math.floor((Math.random() * 5) + 1);
    }

    $scope.setSelected = function(selected) {
        $scope.currIndex = selected;
    };

    $scope.cardDestroyed = function(index) {
        console.log("destroy " + index);
        $scope.cards.splice(index, 1);
    };


    $scope.self = $scope;
    $scope.addCard = function() {
        var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    }



    $scope.random = function() {
        return 0.5 - Math.random();
    };

    $scope.isCorrect = function(answer, index) {
        console.log(answer);
        if (answer == $scope.cards[index].answer) {
            console.log("count is " + $scope.count);
            $scope.count = $scope.count - 1;
            var card = $ionicSwipeCardDelegate.getSwipeableCard(this);
            card.swipe();
        } else {
            $cordovaVibration.vibrate(100);
        }

        if ($scope.count == 0) {

            $scope.showConfirm();
            $scope.modalHistoryTask.remove();
        }

    };
})
