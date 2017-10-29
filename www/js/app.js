angular.module('app', ['ionic', 'app.controllers', 'app.databases', 'app.routes', 'app.services'])

.run(function($ionicPlatform, BancoDeDados) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  BancoDeDados.setup();
  BancoDeDados.dbQuiz.transaction(function(transacao){
    transacao.executeSql('CREATE TABLE IF NOT EXISTS recordes(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, jogador VARCHAR(30), pontuacao INT);', [])
  });

});
