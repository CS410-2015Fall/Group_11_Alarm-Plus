describe('alarmplus controllers', function() {

var $rootScope, task3Controller;

beforeEach(module('Alarm-Plus.controllers'));
beforeEach(inject(function($controller, $rootScope) {
    myScope = $rootScope.$new();
    ctrl = $controller('tsk3Controller', {
        $scope: myScope
    });
}));

it('works', function() {
    expect( myScope.onSwipeUp).toBeDefined();
});
});