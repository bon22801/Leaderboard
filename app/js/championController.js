(function () {
    'use strict';

    angular.module('leaderboardApp').controller("ChampionCtrl", ['championService', function (championService) {

		    championService.getChampionImages((data) => {
		        this.champions = data;
        });
        
        this.selectChampion = (id) => {
            championService.selectedChampionId = id;
            console.log(championService.selectedChampionId);
            
            championService.getChampionStats((data) => {
                console.log(data);
            });
            
        }
        
		}])
})();

