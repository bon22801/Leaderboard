'use strict';

(function () {
    const key = '84c3d590-07e1-4ed6-bf20-94931e215bd1';
    const challengerUrl = 'https://na.api.pvp.net/api/lol/na/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key=';
    const championImageUrl = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image&api_key=84c3d590-07e1-4ed6-bf20-94931e215bd1';
    const championStatUrl = 'https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/';
    
    
    
    angular
		.module('leaderboardApp')
		.factory("playerService", function ($http) {
		    return {
		        getPlayers: function (callback) {
		            $http.get( challengerUrl + key).success(callback);
		        }
		    }
		})

    .factory("championService", function ($http) {
        return {
            getChampionImages: function (callback) {
    	            $http.get(championImageUrl).success(callback);
    	        },
            getChampionStats: function (callback) {
    	            $http.get( championStatUrl + this.championId + '.json').success(callback);
    	        }
    	    }
    	})
})();
