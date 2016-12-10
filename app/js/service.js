'use strict';


(function () {
    const key = '84c3d590-07e1-4ed6-bf20-94931e215bd1';

    angular
		.module('leaderboardApp')
		.factory("playerService", function ($http) {
		    return {
		        getPlayers: function (callback) {
		            $http.get('https://na.api.pvp.net/api/lol/na/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key=' + key).success(callback);
		        }
		    }
		})

    .factory("championService", function ($http) {
   			return {
    	        getChampionImages: function (callback) {
    	            $http.get('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image&api_key=84c3d590-07e1-4ed6-bf20-94931e215bd1').success(callback);
    	        }
    	    }
    	})
})();
