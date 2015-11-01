angular.module('Alarm-Plus.controllers',[])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        id: '1',
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal1 = modal;
    });

    $ionicModal.fromTemplateUrl('templates/setup.html', {
        id: '2',
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal2 = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeModal = function(index) {
        if (index == 1) $scope.modal1.hide();
      else $scope.modal2.hide();
    };

    // Open the login modal
    $scope.openModal = function(index) {
        if (index == 1) $scope.modal1.show();
      else $scope.modal2.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
});
