// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Alarm-Plus', ['ionic', 'Alarm-Plus.controllers', 'Alarm-Plus.services', 'ngCordova', 'ionic.contrib.ui.cards', 'ui.router', 'ionic-timepicker', 'ui.bootstrap'])

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

        // Android customization
        cordova.plugins.backgroundMode.setDefaults({
            title: "Alarm-Plus",
            text: "Let's go"
        });
        // Enable background mode
        cordova.plugins.backgroundMode.enable();

        // Called when background mode has been activated
        cordova.plugins.backgroundMode.onactivate = function() {
            setTimeout(function() {
                // Modify the currently displayed notification
                cordova.plugins.backgroundMode.configure({
                    text: 'Running in background for more than 5s now.'
                });
            }, 5000);
        };
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
            controller: 'setupController'
        })
        .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'templates/home.html',
                    controller: 'homeController'
                }
            }
        })
        .state('app.task', {
            url: '/task',
            views: {
                'menuContent': {
                    templateUrl: 'templates/task.html',
                    controller: 'CardsCtrl'
                }
            }
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
