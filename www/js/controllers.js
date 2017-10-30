angular.module('app.controllers', [])

.controller('RecordesCtrl', function($scope, BancoDeDados) {
  $scope.posicoes = [];

  BancoDeDados.setup();
  BancoDeDados.dbQuiz.transaction(function(transacao){
      transacao.executeSql('SELECT * FROM recordes ORDER BY pontuacao DESC', [], function(transacao, resultados){
          for(var i = 0; i < resultados.rows.length; i++){
              $scope.posicoes.push(resultados.rows[i]);
          }
      });
  });

})

.controller('QuizCtrl', function($scope, $state, $ionicModal, BancoDeDados, Perguntas) {
  $scope.quizIniciado = false;
  $scope.perguntas = [];
  $scope.pontuacao = 0;

  $ionicModal.fromTemplateUrl('templates/gameover.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  var sortearPerguntas = function() {
    var numeros = [];
    numeros.push(Math.floor(Math.random() * 30) + 1);
    while (numeros.length < 10) {
      var num = Math.floor(Math.random() * 30) + 1;
      for (i=0; i < numeros.length; i++) {
        if (num === numeros[i]) {
          num = 0;
          break;
        }
      }
      if (num > 0) {
        numeros.push(num);
      }
    }
    return numeros;
  }

  $scope.iniciarQuiz = function() {
    $scope.quizIniciado = true;
    perguntasSorteadas = sortearPerguntas();
    for (i = 0; i < perguntasSorteadas.length; i++) {
      $scope.perguntas.push(Perguntas.get(perguntasSorteadas[i]));
    }
  }

  $scope.finalizarQuiz = function() {
    for (i = 0; i < $scope.perguntas.length; i++) {
      if ($scope.perguntas[i].resposta === $scope.perguntas[i].respostaCerta) {
        $scope.pontuacao++;
      }
      delete $scope.perguntas[i].resposta;
    }
    $scope.quizIniciado = false;
    $scope.perguntas = [];
    $scope.modal.show();
  }

  $scope.finalizarPartida = function(jogador) {
    if (jogador != "" && jogador != undefined && $scope.pontuacao > 0) {
      BancoDeDados.setup();
      BancoDeDados.dbQuiz.transaction(function(transacao){
        transacao.executeSql('INSERT INTO recordes(jogador, pontuacao) VALUES(?, ?)', [jogador, $scope.pontuacao])
      });
    }
    $scope.modal.hide();
    $state.go('tab.recordes');
  }
  
});