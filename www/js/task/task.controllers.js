angular.module('Alarm-Plus.controllers')

.controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate, $cordovaVibration, $state) {
    $scope.cards = [{
        title: 'Swipe down to clear the card',
        equation: '5 + x = 15',
        answera: '1',
        answerb: '11',
        answerc: '10', //answer
        answerd: '5'
    }, {
        title: 'Swipe down to clear the card',
        equation: '5x + 2 = 12',
        answera: '1',
        answerb: '4',
        answerc: '2', //answer
        answerd: '5'
    }, {
        title: 'Swipe down to clear the card',
        equation: 'x + 6 = 13',
        answera: '0',
        answerb: '10',
        answerc: '7', //answer
        answerd: '13'
    }, {
        title: 'Swipe down to clear the card',
        equation: '8 - x = 2',
        answera: '4',
        answerb: '3',
        answerc: '6', //answer
        answerd: '5'
    }, {
        title: 'Swipe down to clear the card',
        equation: '9/x = 3',
        answera: '10',
        answerb: '55',
        answerc: '3', //answer
        answerd: '12'
    }];

    //$scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

    // $scope.cardSwiped = function(index) {
    //   console.log("swipe " + index);
    //     $scope.addCard();
    // };

    // $scope.cardDestroyed = function(index) {
    //   console.log("destroy " + index);
    //     $scope.cards.splice(index, 1);
    // };

    $scope.cardDestroyed = function(index) {
      console.log("destroy " + index);
  $scope.cards.splice(index, 1);
};

$scope.cardSwiped = function(index) {
  console.log("swipe " + index);
  var newCard = // new card data
  $scope.cards.push(newCard);
};

    // $scope.addCard = function() {
    //     var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    //     newCard.id = Math.random();
    //     $scope.cards.push(angular.extend({}, newCard));
    // }

    // $scope.goAway = function() {
    //     //var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
    //     //card.swipe();
    //     $state.go('app.home');

    // };

    // $scope.stay = function() {

    //     // Vibrate 100ms
    //     $cordovaVibration.vibrate(100);

    // };


})

//$state.go('app.home');
