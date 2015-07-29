var leaderboardApp = angular.module('leaderboardApp', [])

  .controller('leagueController', function($scope, $http) {
  var key = '84c3d590-07e1-4ed6-bf20-94931e215bd1';
    
  // Get json data from league-v2.5 API. See https://developer.riotgames.com/api/methods#!/985
  $http.get('https://na.api.pvp.net/api/lol/na/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key='+key).success(function(data) {
    $scope.players = data.entries;
  });
    
  // Sort players from the heightest leaguePoints to the lowest.
    $scope.orderProp = '-leaguePoints';
});
