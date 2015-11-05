'use strict';

describe('Player controllers', function() {

  describe('PlayerCtrl', function(){
    beforeEach(module('leaderboardApp'));
    var $scope, $ctrl;

		
    beforeEach(inject(function($controller) {
      $scope = {};
      $ctrl = $controller('PlayerCtrl', {$scope: $scope});
    }));

    it('should set the default value of orderProp model', function() {
      expect($scope.orderProp).toBe('-leaguePoints');
    });
		
		it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  });
});