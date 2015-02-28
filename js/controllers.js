var leaderboardApp = angular.module('leaderboardApp', []);

leaderboardApp.controller('playersController', function($scope) {

  $scope.nameFilter = null;
  $scope.playersList = [];
  $scope.players = [
  {'summonerName': 'Turtle the cat',
    'points': 2967,
    'imgURL': 'img/champs/Ahri.png'},
  {'summonerName': 'Pobelter',
    'points': 2962,
    'imgURL': 'img/champs/Teemo.png'},
  {summonerName: 'Apdo Dog',
    'points': 2956,
    'imgURL': 'img/champs/Ahri.png'}
  ];
});
