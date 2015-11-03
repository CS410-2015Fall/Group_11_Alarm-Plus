angular.module('Alarm-Plus.controllers')

.controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate) {
  var cardTypes = [{
    title: 'Swipe down to clear the card',
    equation: '5 + x = 15',
    answera: '10', //answer
    answerb: '11',
    answerc: '1',
    answerd: '5'
  }, {
    title: 'Swipe down to clear the card',
    equation: '5x + 2 = 12',
    answera: '1',
    answerb: '2', //answer
    answerc: '4',
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
    answerc: '5',
    answerd: '6' //answer
  }, {
    title: 'Swipe down to clear the card',
    equation: '9/x = 3',
    answera: '3', //answer
    answerb: '55',
    answerc: '10',
    answerd: '12'
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

  $scope.goAway = function() {
    var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
    card.swipe();



  };

})

//$state.go('app.home');

