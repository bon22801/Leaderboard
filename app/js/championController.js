(function () {
    'use strict';

    angular.module('leaderboardApp').controller("ChampionCtrl", ['championService', function (championService) {
        this.champSelected = false;
        this.selectedChampion = [];
        
		    championService.getChampionImages((data) => {
		        this.champions = data;
            championService.championMap = this.buildChampionMapping(data);
        });
        
        this.buildChampionMapping = (champions) => {
            let map = {};

            for (var prop in champions.data) {
                let id = champions.data[prop].id;
                let key = champions.data[prop].key;
                map[id] = key;
            }
            return map;
        }
        
        this.selectChampion = (id) => {
            championService.selectedChampionId = id;
            
            championService.getChampionStats((data) => {
                this.selectedChampion = data;
            });
            this.champSelected = true;
        }
        
        this.unselectChampion = () => {
            this.champSelected = false;
            this.selectedChampion = [];
        }
		}])
})();

