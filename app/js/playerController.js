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
                console.log(data);
                this.champions = data.champions;
                this.championMap = championService.championMap;
                console.log(championService.championMap[1]);
            });
            
            this.playerSelected = true;
        }

        this.orderProp = '-leaguePoints';
    }])
})();

