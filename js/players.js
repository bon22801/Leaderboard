angular.module('leaderboardApp', []).
controller('playersController', function($scope) {
    $scope.players = [
      {summonerName: 'Turtle the cat',
      points: 2967,
      img: 'img/champs/Ahri.png'
      },
      {summonerName: 'Pobelter',
      points: 2962,
      img: 'img/champs/Teemo.png'
      },
      {summonerName: 'Apdo Dog',
      points: 2956,
      img: 'img/champs/Ahri.png'
      }
    ];
});