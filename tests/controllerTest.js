describe('AppCtrl', function(){
  var scope, ctrl;

  beforeEach(module("Alarm-Plus"));
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('AppCtrl', { $scope: scope });
  }));

  it('wut', function() {
    expect(scope).toBeDefined;
  });
});
