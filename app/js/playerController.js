(function () {
    'use strict';

    angular
        .module('leaderboardApp').controller("PlayerCtrl", function (playerService) {
        playerService.getPlayers((playerList) => {
            console.log(playerList);
            this.players = playerList.entries;
        });

        this.orderProp = '-leaguePoints';
    })
})();

