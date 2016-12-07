(function () {
    'use strict';

    angular
		.module('leaderboardApp', [])
		.controller("PlayerCtrl", function ($scope, playerService, championService) {
		    playerService.getPlayers(function (players) {
		        $scope.players = players.entries;
		    });

		    championService.getChampionImages(function (data) {
		        console.log(data);
		    });

		    $scope.orderProp = '-leaguePoints';
		})
})();

