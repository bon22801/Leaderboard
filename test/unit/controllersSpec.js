'use strict';

describe('Player controllers', function() {

  describe('PlayerCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('leaderboardApp'));	

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
			$httpBackend.expectGET('json/league.json')
				.respond([{playerOrTeamName: 'Dyrus'}, {playerOrTeamName: 'Pobelter'}]);

      scope = $rootScope.$new();
      ctrl = $controller('PlayerCtrl', {$scope: scope});
    }));

    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('-leaguePoints');
    });
	
  });
});
