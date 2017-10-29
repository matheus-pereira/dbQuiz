angular.module('app.databases', [])
.value('BancoDeDados', {
    dbQuiz: null,
    setup: function(){
        this.dbQuiz = window.openDatabase('dbQuiz', '1.0', 'Banco de dados da aplicacão.', 3000);
    }
});
