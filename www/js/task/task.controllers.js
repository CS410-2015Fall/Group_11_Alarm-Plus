angular.module('Alarm-Plus.controllers')

.controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate, $cordovaVibration, $state) {
    $scope.cards = [{
        title: 'Swipe down to clear the card',
        equation: '5 + x = 15',
        answer: 10, //answer
        choices: [2, 7, 9, 10],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        equation: '5x + 2 = 12',
        answer: 2, //answer
        choices: [2, 7, 9, 10],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        equation: 'x + 6 = 13',
        answer: 7, //answer
        choices: [2, 7, 9, 10],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        equation: '8 - x = 2',
        answer: 6, //answer
        choices: [6, 7, 9, 10],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        equation: '9/x = 3',
        answer: 3, //answer
        choices: [2, 7, 3, 10],
        rank: 0.5 - Math.random()
    }];

    $scope.count = 3;
    $scope.currIndex = "";

    //$scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

    // $scope.cardSwiped = function(index) {
    //   console.log("swipe " + index);
    //     $scope.addCard();
    // };

    // $scope.cardDestroyed = function(index) {
    //   console.log("destroy " + index);
    //     $scope.cards.splice(index, 1);
    // };

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

    $scope.cardSwiped = function(index) {
        console.log("swipe " + index);
        var newCard = {
            title: 'Swipe down to clear the card',
            equation: '8 - x = 2',
            answer: 6, //answer
            choices: [6, 7, 9, 10]
        };
        $scope.cards.push(newCard);
    };

    $scope.addCard = function() {
        var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
        // newCard.id = Math.random();
        //$scope.cards.push(angular.extend({}, newCard));
    }

    // $scope.goAway = function() {
    //     //var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
    //     //card.swipe();
    //     $state.go('app.home');

    // };

    // $scope.stay = function() {

    //     // Vibrate 100ms
    //     $cordovaVibration.vibrate(100);

    // };

    $scope.random = function() {
        return 0.5 - Math.random();
    };

    $scope.isCorrect = function(answer, index) {
        console.log(answer);
        if (answer == $scope.cards[index].answer) {
            console.log("count is " + $scope.count);
            $scope.count = $scope.count - 1;
            $scope.cardDestroyed(index);
        }
        if ($scope.count == 0) {
            $state.go('app.home');
        }
    };
})

//$state.go('app.home');
