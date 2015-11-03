angular.module('Alarm-Plus.controllers')

.controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate) {
  var cardTypes = [{
    title: 'Swipe down to clear the card',
    equation: '5 + x = 15',
    answera: '6',
    answerb: '6',
    answerc: '6',
    answerd: '6'
  }, {
    title: 'Swipe down to clear the card',
    equation: '5x + 2 = 12',
    answera: '6',
    answerb: '6',
    answerc: '6',
    answerd: '6'
  }, {
    title: 'Swipe down to clear the card',
    equation: 'x + 6 = 13',
    answera: '6',
    answerb: '6',
    answerc: '6',
    answerd: '6'
  }, {
    title: 'Swipe down to clear the card',
    equation: '8 - x = 2',
    answera: '6',
    answerb: '6',
    answerc: '6',
    answerd: '6'
  }, {
    title: 'Swipe down to clear the card',
    equation: '9/x = 3',
    answera: '6',
    answerb: '6',
    answerc: '6',
    answerd: '6'
  }];

  $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

  $scope.cardSwiped = function(index) {
    $scope.addCard();
  };

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }

  $scope.goAway = function(input) {
    var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);

    card.swipe();



  };

})

//$state.go('app.home');

