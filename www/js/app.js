// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Alarm-Plus', ['ionic', 'Alarm-Plus.controllers', 'Alarm-Plus.services', 'ngCordova', 'ionic.contrib.ui.cards', 'ui.router', 'ionic-timepicker'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }

        if (window.StatusBar) {
            StatusBar.styleDefault();
        }

         $ionicPlatform.registerBackButtonAction(function(event) {
            console.log(event);
            //event.preventDefault();
            alert('No cheating! You have to complete the task');
            }, 201);

        
    });
})

// .directive('noScroll', function($document) {

//   return {
//     restrict: 'A',
//     link: function($scope, $element, $attr) {

//       $document.on('touchmove', function(e) {
//         e.preventDefault();
//       });
//     }
//   }
// })

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })
        .state('app.home', {
            url: '/home',
            views: {
                'home-tab': {
                    templateUrl: 'templates/home.html',
                    controller: 'homeController'
                }

            }
        })
        .state('app.task4', {
            url: '/task4',
            views: {
                'menuContent': {
                    templateUrl: 'templates/task4.html'

                }
            }
        })

        .state('app.task3', {
            url: '/task3',
            views: {
                'task3-tab': {
                    templateUrl: 'templates/task3.html'
                }
            }
        })

        .state('app.task2', {

            url: '/task2',
            views: {
                'task2-tab': {
                    templateUrl: 'templates/task2.html'


                }
            }
        })
        .state('app.task', {
            url: '/task',
            views: {
                'task-tab': {
                    templateUrl: 'templates/task.html'
                }
            }
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
