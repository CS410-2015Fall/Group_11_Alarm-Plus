angular.module('Alarm-Plus.controllers')

.factory('Task', ['$scope', 'ionicSwipeCardDelegate', function($scope, $ionicSwipeCardDelegate) {
    function Task(equation, taskTitle, point) {
        this.equation = equation;
        this.taskTitle = title;
        this.point = point;
    };

    // start the pop-up and don't close
    Task.prototype.start = function() {

    };

    // If the user answer correctly
    Task.prototype.end = function() {

    };

    Task.prototype.getPoint = function() {
        return this.point;
    };
    return Task;
}])

.controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate) {
  var cardTypes = [{
    title: 'Swipe down to clear the card',
    equation: '5 + x = 15'
  }, {
    title: 'Swipe down to clear the card',
    equation: '5x + 2 = 12'
  }, {
    title: 'Swipe down to clear the card',
    equation: 'x + 6 = 13'
  }, {
    title: 'Swipe down to clear the card',
    equation: '8 - x = 2'
  }, {
    title: 'Swipe down to clear the card',
    equation: '9/x = 3'
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



