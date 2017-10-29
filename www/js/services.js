angular.module('app.services', [])

.factory('Perguntas', function() {

  var perguntas = [{
      id: 1,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'certa'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 0
  }, {
      id: 2,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'certa'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 1
  }, {
      id: 3,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'certa'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 2
  }, {
      id: 4,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'certa'}],
      respostaCerta: 3
  }, {
      id: 5,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'certa'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 0
  }, {
      id: 6,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'certa'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 1
  }, {
      id: 7,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'certa'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 2
  }, {
      id: 8,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'certa'}],
      respostaCerta: 3
  }, {
      id: 9,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'certa'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 0
  }, {
      id: 10,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'certa'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 1
  }, {
      id: 11,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'certa'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 2
  }, {
      id: 12,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'certa'}],
      respostaCerta: 3
  }, {
      id: 13,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'certa'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 0
  }, {
      id: 14,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'certa'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 1
  }, {
      id: 15,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'certa'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 2
  }, {
      id: 16,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'certa'}],
      respostaCerta: 3
  }, {
      id: 17,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'certa'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 0
  }, {
      id: 18,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'certa'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 1
  }, {
      id: 19,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'certa'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 2
  }, {
      id: 20,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'certa'}],
      respostaCerta: 3
  }, {
      id: 21,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'certa'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 0
  }, {
      id: 22,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'certa'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 1
  }, {
      id: 23,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'certa'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 2
  }, {
      id: 24,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'certa'}],
      respostaCerta: 3
  }, {
      id: 25,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'certa'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 0
  }, {
      id: 26,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'certa'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 1
  }, {
      id: 27,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'certa'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 2
  }, {
      id: 28,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'certa'}],
      respostaCerta: 3
  }, {
      id: 29,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'certa'}, {id: 1, resposta: 'errada'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 0
  }, {
      id: 30,
      pergunta: 'pergunta',
      alternativas: [{id: 0, resposta: 'errada'}, {id: 1, resposta: 'certa'}, {id: 2, resposta: 'errada'}, {id: 3, resposta: 'errada'}],
      respostaCerta: 1
  }];

  return {
    get: function(perguntaId) {
      for (var i = 0; i < perguntas.length; i++) {
        if (perguntas[i].id === parseInt(perguntaId)) {
          return perguntas[i];
        }
      }
      return null;
    }
  };

});
