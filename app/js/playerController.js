(function () {
    'use strict';

    angular
		.module('leaderboardApp').controller("PlayerCtrl", function ($scope, playerService) {
		    playerService.getPlayers(function (players) {
		        $scope.players = players.entries;
		    });

		    $scope.orderProp = '-leaguePoints';
		})
})();

