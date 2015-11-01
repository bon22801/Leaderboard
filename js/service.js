(function() {
	'use strict';

	angular
		.module('leaderboardApp')
		.factory("playerService", function ($http){
			return {
				getPlayerData: function(callback) {
					var key = '84c3d590-07e1-4ed6-bf20-94931e215bd1';
					$http.get('https://na.api.pvp.net/api/lol/na/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key='+key).success(callback);
				}
			}
		})

})();