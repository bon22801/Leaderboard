(function () {
    'use strict';

    angular.module('leaderboardApp').controller("ChampionCtrl", ['championService', function (championService) {
        this.champSelected = false;
        this.selectedChampion = [];
        
		    championService.getChampionImages((data) => {
		        this.champions = data;
        });
        
        this.selectChampion = (id) => {
            championService.selectedChampionId = id;
            
            championService.getChampionStats((data) => {
                this.selectedChampion = data;
            });
            this.champSelected = true;
        }
		}])
})();

