angular.module('Alarm-Plus.controllers')


.controller('CardsCtrl', ['$scope', '$ionicSwipeCardDelegate', '$cordovaVibration', '$state', '$timeout',
    function($scope, $ionicSwipeCardDelegate, $cordovaVibration, $state, $rootScope, $timeout, $cordovaMedia, $ionicPlatform) {
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
        }, {
            title: 'Swipe down to clear the card',
            equation: '22 + 222 = X',
            answer: 244, //answer
            choices: [22222, 4444, 244, 2424],
            rank: 0.5 - Math.random()
        }, {
            title: 'Swipe down to clear the card',
            equation: '333/3 = X',
            answer: 111, //answer
            choices: [333, 3, 100, 111],
            rank: 0.5 - Math.random()
        }, {
            title: 'Swipe down to clear the card',
            equation: '1000 + 1000 = X',
            answer: 2000, //answer
            choices: [1000000, 10001000, 2000, 1100],
            rank: 0.5 - Math.random()
        }, {
            title: 'Swipe down to clear the card',
            equation: '50 x 50 = X',
            answer: 2500, //answer
            choices: [2500, 5050, 25000, 5000],
            rank: 0.5 - Math.random()
        }, {
            title: 'Swipe down to clear the card',
            equation: '50 + 150 = X',
            answer: 200, //answer
            choices: [50150, 200, 100, 5150],
            rank: 0.5 - Math.random()
        }];

        $scope.count = 3;
        $scope.currIndex = "";
        $scope.soundCount = 0;

        //$scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

        // $scope.cardSwiped = function(index) {
        //   console.log("swipe " + index);
        //     $scope.addCard();
        // };

        // $scope.cardDestroyed = function(index) {
        //   console.log("destroy " + index);
        //     $scope.cards.splice(index, 1);
        // };

        // var src = "/android_asset/www/sound/buzzer.mp3";
        // var media = new Media(src, null, null, loop);

        // document.addEventListener("backbutton", onBackKeyDown, false);
        //     function onBackKeyDown(e) {
        //     e.preventDefault();
        //     }


        // Loop the buzzer, and stop once the correct number of questions have been answered.
        $scope.myMedia;

        $scope.loop = function(status) {
            if (status === Media.MEDIA_STOPPED) {
                //document.addEventListener("deviceready", function () {
                $scope.myMedia.play();
                // window.system.setSystemVolume(1.0);
                //  }, false);
            }

            if (status === Media.MEDIA_RUNNING && $scope.count == 0) {
                $scope.myMedia.stop();
                $scope.myMedia.release();
            }
        };

        //  $scope.keepPlaying = function() {
        //     while ($scope.count != 0) {
        //         $scope.myMedia.play();

        //         if ($scope.count === 0) {
        //             $scope.myMedia.stop();
        //             $scope.myMedia.release();
        //             break;
        //         }
        //     }
        // };
        // $scope.keepPlaying();

        // Create the Media object and begin playing it.
        $scope.myMedia = new Media("/android_asset/www/sound/buzzer.mp3", null, null, $scope.loop);
        $scope.myMedia.play();

        // TODO: override the Back button to prevent leaving the task prematurely.
        // Current attempt: registerBackButtonAction is not being recognized.

        // $ionicPlatform.registerBackButtonAction(function(event) {
        //     event.preventDefault();
        //     alert('nope, you gotta wake up');
        //     }, 1000);


        $scope.randomQ = function() {
            return Math.floor((Math.random() * 5) + 1);
        };

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

        $scope.self = $scope;
        $scope.addCard = function() {
            var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
            // newCard.id = Math.random();
            //$scope.cards.push(angular.extend({}, newCard));
        }

        // $scope.goAway = function() {
        //     var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
        //     card.swipe();
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
                var card = $ionicSwipeCardDelegate.getSwipeableCard(this);
                card.swipe();

            } else {
                $cordovaVibration.vibrate(100);
            }
            // When the Task is completed:
            if ($scope.count == 0) {
                // TODO: ionic popup
                $scope.closeMathTask();
            }
        };
    }
])


// $scope.sharePost = function() {
//     facebookConnectPlugin.getLoginStatus(
//         function(status) {
//             alert("current status: " + JSON.stringify(status));

//             var options = {
//                 method: "feed"
//             };
//             facebookConnectPlugin.showDialog(options,
//                 function(result) {
//                     alert("Posted. " + JSON.stringify(result));
//                 },
//                 function(e) {
//                     alert("Failed: " + e);
//                 });
//         }
//     );
// };

//$state.go('app.home');
