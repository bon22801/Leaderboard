(function () {
    'use strict';

    angular
        .module('leaderboardApp').controller("PlayerCtrl",  ['playerService', 'championService', function (playerService, championService) {
        playerService.getPlayers((playerList) => {
            this.players = playerList.entries;
        });

        this.selectPlayer = (id) => {
            playerService.selectedPlayerId = id;
            playerService.getChampionStats((data) => {
                this.champions = data.champions;
                this.championMap = championService.championMap;
            });
            
            this.playerSelected = true;
        }
        
        this.unselectPlayer = () => {
            this.playerSelected = false;
            this.champions = [];
        }
        
        this.orderProp = '-leaguePoints';
        this.champOrderProp = '-totalChampionKills';
    }])
})();

