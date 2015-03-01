var leaderboardApp = angular.module('leaderboardApp', []);

leaderboardApp.controller('playersController', function($scope, $http) {


  $http.get('https://na.api.pvp.net/api/lol/na/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key=84c3d590-07e1-4ed6-bf20-94931e215bd1').success(function(data) {
    $scope.players = data.entries;
  });
    $scope.orderProp = '-leaguePoints';
});
