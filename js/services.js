angular.module('leaderboardApp.services', []).
  factory('RESTAPIservice', function($http) {

    var RESTAPI = {};

    RESTAPI.getPlayers = function() {
      return $http({
        method: 'JSONP', 
        url: 'https://na.api.pvp.net/api/lol/na/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key=84c3d590-07e1-4ed6-bf20-94931e215bd1'
      });
    }

    return RESTAPI;
  });