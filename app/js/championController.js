(function () {
    'use strict';

    angular
		.module('leaderboardApp', [])
		.controller("ChampionCtrl", function ($scope, championService) {
		    championService.getChampionImages(function (data) {
		        console.log(data);
		    });

		    $scope.orderProp = '-leaguePoints';
		})
})();

