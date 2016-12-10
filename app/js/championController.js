(function () {
    'use strict';

    angular.module('leaderboardApp').controller("ChampionCtrl", ['championService', function (championService) {

		    championService.getChampionImages((data) => {
            console.log(this);
		        this.champions = data;
        });
        
        this.selectChampion = (id) => {
            console.log(id);
        }
				
		}])
})();

