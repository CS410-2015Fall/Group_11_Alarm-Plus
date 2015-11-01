// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Alarm-Plus', ['ionic', 'Alarm-Plus.controllers', 'Alarm-Plus.services', 'ngCordova', 'ionic.contrib.ui.cards', 'ui.router'])

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
                'menuContent': {
                    templateUrl: 'templates/home.html',
                    controller:'homeController'

                }
            }
        })
        .state('app.task', {
            url: '/task',
            views: {
                'menuContent': {
                    templateUrl: 'templates/task.html',
                    controller:'CardsCtrl'
                }
            }
        })
        .state('app.setup', {
            url: '/setup',
            views: {
                'menuContent': {
                    templateUrl: 'templates/setup.html',
                    controller: 'setupController'
                }
            }
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});


