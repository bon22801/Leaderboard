'use strict';

(function () {
    const key = '84c3d590-07e1-4ed6-bf20-94931e215bd1';
    const challengerUrl = 'https://na.api.pvp.net/api/lol/na/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key=';
    const challengerStatUrl = 'https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/';
    const championImageUrl = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image&api_key=';
    const championStatUrl = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/';


    angular
        .module('leaderboardApp')
        .factory("playerService", function ($http) {
        return {
            getPlayers: function (callback) {
                $http.get( challengerUrl + key).success(callback);
            },
            getChampionStats: function (callback) {
                console.log(this.selectedPlayerId);
                
                $http.get( challengerStatUrl + this.selectedPlayerId + '/ranked?season=SEASON2017&api_key=' + key).success(callback);
            }
        }
    })

        .factory("championService", function ($http) {        
        return {
            getChampionImages: function (callback) {
                $http.get(championImageUrl + key).success(callback);
            },
            getChampionStats: function (callback) {
                $http.get( championStatUrl + this.selectedChampionId + '?champData=all&api_key=' + key).success(callback);
            }
        }
    })
})();
