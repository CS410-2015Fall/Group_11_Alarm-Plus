angular.module('Alarm-Plus.controllers')

// newGameController
.controller('task4Controller', function($scope, $ionicSwipeCardDelegate, $cordovaVibration, $state, $rootScope, $cordovaMedia) {
    $scope.cards = [{
        title: 'Swipe down to clear the card',
        hardm: 'I have a deck of cards, and I draw the King of Spades (without replacement), what is the probability that I will draw the King of hearts next?',
        answer: 0.0196, //answer
        choices: [0.0196, 0.0192, 1, 0],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        hardm: 'What is the probability that I roll 2 6s in row with a fair die?',
        answer: 0.0278, //answer
        choices: [0.167, 0.0278, 1, 0],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        hardm: 'If I flip a coin 4 times, what is the probability that I get 4 heads?',
        answer: "0.0625", //answer
        choices: ["0.025", "1", "0.25", "0.0625"],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        hardm: '2 + 2 x 2 - 2 = ?',
        answer: "4", //answer
        choices: ["2", "4", "6", "8"],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        hardm: '5 x 5 + 5 - 5 + 5 = ?',
        answer: "30", //answer
        choices: ["25", "40", "30", "50"],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        hardm: '6 x 6 + 6 - 6 x 6 = ?',
        answer: "6", //answer
        choices: ["0", "6", "12", "36"],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        hardm: 'What is the probability of drawing a heart from a deck of cards?',
        answer: "0.25", //answer
        choices: ["0.40", "0.25", "0.20", "1"],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        hardm: '8 x 8 + 8 - 8 - 8 x 8 = ?',
        answer: "0", //answer
        choices: ["0", "1", "8", "64"],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        hardm: '1 x 1 + 1 - 1 + 1 x 1 + 1 = ?',
        answer: "3", //answer
        choices: ["1", "3", "2", "0"],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        hardm: '5 + 5 x 5 + 5 - 5 = ?',
        answer: "30", //answer
        choices: ["10", "20", "30", "25"],
        rank: 0.5 - Math.random()
    }];

    $scope.count = 3;
    $scope.currIndex = "";


    // Loop the buzzer, and stop once the correct number of questions have been answered.
    $scope.myMedia;

    $scope.loop = function(status) {
        if (status === Media.MEDIA_STOPPED) {
            //document.addEventListener("deviceready", function () {
            $scope.myMedia.play();
            // window.system.setSystemVolume(1.0);
            //  }, false);
        }
    };

    // Create the Media object and begin playing it.
    //$scope.myMedia = new Media("/android_asset/www/sound/buzzer.mp3", null, null, $scope.loop);
    //$scope.myMedia.play();


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

        setTimeout(function() {
            $scope.myMedia.setVolume(1.0);
        }, 10000);
    };



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
            $scope.closeMathHardTask();
        }

    };
})
