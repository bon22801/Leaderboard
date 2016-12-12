(function () {
    'use strict';

    angular.module('leaderboardApp').controller("ChampionCtrl", ['championService', function (championService) {

		    championService.getChampionImages((data) => {
		        this.champions = data;
        });
        
        this.selectChampion = (key) => {
            championService.getChampionImages(key, (data) => {
                console.log(data);
            });
        }
        
		}])
})();

