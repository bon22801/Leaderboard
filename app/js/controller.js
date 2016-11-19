(function () {
    'use strict';

    angular
		.module('leaderboardApp', [])
		.controller("PlayerCtrl", function ($scope, playerService) {
		    playerService.getPlayerData(function (data) {
		        $scope.players = data.entries;
		    });
		    $scope.orderProp = '-leaguePoints';
		})
})();

