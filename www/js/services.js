angular.module('app.services', [])

.factory('Perguntas', function() {

  var perguntas = [{
      id: 1,
      pergunta: 'Qual subconjunto do SQL é usado para inserir, atualizar e apagar dados?',
      alternativas: [{id: 0, resposta: 'DML'}, {id: 1, resposta: 'DDL'}, {id: 2, resposta: 'DCL'}, {id: 3, resposta: 'DQL'}],
      respostaCerta: 0
  }, {
      id: 2,
      pergunta: 'O comando SQL, que deve ser usado para obter o maior valor da coluna SALARIO, é:',
      alternativas: [{id: 0, resposta: 'SELECT salario AS MAX FROM cliente'}, {id: 1, resposta: 'SELECT MAX(salario) FROM cliente'}, {id: 2, resposta: 'SELECT salario FROM cliente WHERE salario = maximo'}, {id: 3, resposta: 'SELECT salario FROM cliente WHERE salario >= salario'}],
      respostaCerta: 1
  }, {
      id: 3,
      pergunta: 'A exclusão dos registros de uma tabela que apresenta o atributo numérico salário menor que 3000 pode ser feita por meio do comando SQL:',
      alternativas: [{id: 0, resposta: 'DELETE salario < 3000 FROM cliente'}, {id: 1, resposta: 'ERASE * FROM cliente WHERE salario < 3000'}, {id: 2, resposta: 'DELETE FROM cliente WHERE salario < 3000'}, {id: 3, resposta: 'DEL FROM cliente WHERE salario < 3000'}],
      respostaCerta: 2
  }, {
      id: 4,
      pergunta: 'Que cláusula do comando SQL CREATE TABLE inclui a lista dos atributos que constituem uma chave primária?',
      alternativas: [{id: 0, resposta: 'RESTRICT'}, {id: 1, resposta: 'CHECK'}, {id: 2, resposta: 'CAND KEY'}, {id: 3, resposta: 'PRIMARY KEY'}],
      respostaCerta: 3
  }, {
      id: 5,
      pergunta: 'Considere que no TRT exista, em um banco de dados, a tabela TRAB que possui como campos: nome, sexo, salario de vários trabalhadores. Um Técnico foi solicitado a escrever um comando SQL para obter a média salarial dos trabalhadores do sexo FEMININO. O comando correto é:',
      alternativas: [{id: 0, resposta: 'SELECT AVG(salario) FROM TRAB WHERE sexo="FEMININO"'}, {id: 1, resposta: 'SELECT sexo, AVG(salario) as MediaSalarial FROM TRAB GROUP BY sexo'}, {id: 2, resposta: 'SELECT sexo, AVG(salario) FROM TRAB GROUP BY sexo="FEMININO"'}, {id: 3, resposta: 'SELECT * FROM TRAB WHERE sexo="FEMININO" AS AVG(salario)'}],
      respostaCerta: 0
  }, {
      id: 6,
      pergunta: 'O subconjunto da linguagem SQL que apresenta os comandos INSERT, UPDATE e DELETE é representado pela sigla em inglês:',
      alternativas: [{id: 0, resposta: 'DCL (Data Control Language)'}, {id: 1, resposta: 'DQL (Data Query Language)'}, {id: 2, resposta: 'DTL (Data Transaction Language)'}, {id: 3, resposta: 'DML (Data Manipulation Language'}],
      respostaCerta: 1
  }, {
      id: 7,
      pergunta: 'Qual é a sintaxe correta do comando SQL, que deve ser utilizado para eliminar as duplicatas dos resultados de uma instrução select a ser realizada na tabela de PRODUTOS?',
      alternativas: [{id: 0, resposta: 'SELECT DISTINCT nome INTO produtos'}, {id: 1, resposta: 'SELECT FROM produtos.nome DISTINCT nome'}, {id: 2, resposta: 'SELECT DISTINCT nome FROM produtos'}, {id: 3, resposta: 'SELECT nome FROM produtos DISTINCT'}],
      respostaCerta: 2
  }, {
      id: 8,
      pergunta: 'Com relação à linguagem SQL, é incorreto afirmar que o comando:',
      alternativas: [{id: 0, resposta: '"UPDATE" pode atualizar linhas de uma tabela'}, {id: 1, resposta: '"SELECT" pode ler linhas de uma tabela'}, {id: 2, resposta: '"INSERT" pode criar linhas em uma tabela'}, {id: 3, resposta: '"REMOVE" pode remover linhas em uma tabela'}],
      respostaCerta: 3
  }, {
      id: 9,
      pergunta: 'Em SQL, para alterar a estrutura de uma tabela do banco de dados e incluir nela uma nova foreign key, é correto utilizar o comando:',
      alternativas: [{id: 0, resposta: 'ALTER TABLE'}, {id: 1, resposta: 'CONVERT'}, {id: 2, resposta: 'GROUP BY'}, {id: 3, resposta: 'UPDATE'}],
      respostaCerta: 0
  }, {
      id: 10,
      pergunta: 'Na linguagem SQL, quando for necessário obter uma lista e criar uma condição, pode-se utilizar a cláusula:',
      alternativas: [{id: 0, resposta: 'MIN'}, {id: 1, resposta: 'WHERE'}, {id: 2, resposta: 'SUM'}, {id: 3, resposta: 'AVG'}],
      respostaCerta: 1
  }, {
      id: 11,
      pergunta: 'Na linguagem SQL, o comando create table é usado para criar uma tabela no banco de dados; enquanto o relacionamento entre duas tabelas pode ser criado pela declaração:',
      alternativas: [{id: 0, resposta: 'NULL'}, {id: 1, resposta: 'PRIMARY KEY'}, {id: 2, resposta: 'CONSTRAINT'}, {id: 3, resposta: 'AUTO_INCREMENT'}],
      respostaCerta: 2
  }, {
      id: 12,
      pergunta: 'Se as tabelas T1, T2 e T3 possuem, respectivamente, 10, 20 e 30 registros, o comando SQL "SELECT * FROM T1, T2, T3 produz:',
      alternativas: [{id: 0, resposta: '1 linha'}, {id: 1, resposta: '10 linhas'}, {id: 2, resposta: '20 linhas'}, {id: 3, resposta: '6000 linhas'}],
      respostaCerta: 3
  }, {
      id: 13,
      pergunta: 'Nos comandos SQL que empregam funções de agregação em conjunto com a cláusula group by, é possível filtrar linhas do resultado depois da aplicação das funções de agregação por meio da cláusula:',
      alternativas: [{id: 0, resposta: 'HAVING'}, {id: 1, resposta: 'FULL OUTER JOIN'}, {id: 2, resposta: 'CASE'}, {id: 3, resposta: 'WHERE'}],
      respostaCerta: 0
  }, {
      id: 14,
      pergunta: 'No SQL, a outorga de privilégios sobre objetos de um banco de dados é efetuada por meio do comando:',
      alternativas: [{id: 0, resposta: 'CREATE'}, {id: 1, resposta: 'GRANT'}, {id: 2, resposta: 'LICENSE'}, {id: 3, resposta: 'REVOKE'}],
      respostaCerta: 1
  }, {
      id: 15,
      pergunta: 'A linguagem SQL é dividida em subconjuntos de acordo com as operações que se deseja efetuar sobre um banco de dados. Um deles é a Linguagem de Definição de Dados (LDD ou DDL, do Inglês Data Definition Language), cujos comandos básicos são:',
      alternativas: [{id: 0, resposta: 'CREATE, UPDATE e DROP'}, {id: 1, resposta: 'CREATE, UPDATE e DELETE'}, {id: 2, resposta: 'CREATE, ALTER e DROP'}, {id: 3, resposta: 'INSERT, UPDATE e DELETE'}],
      respostaCerta: 2
  }, {
      id: 16,
      pergunta: 'Que comando SQL insere uma linha na tabela Aluno, com idAluno = 1 e nomeAluno = Aline?',
      alternativas: [{id: 0, resposta: 'INSERT INTO Aluno SET nomeAluno="Aline" WHERE idAluno=1'}, {id: 1, resposta: 'INSERT INTO Aluno SET nomeAluno="Aline" AND idAluno=1'}, {id: 2, resposta: 'UPDATE Aluno SET nomeAluno="Aline" WHERE idAluno=1'}, {id: 3, resposta: 'INSERT INTO Aluno (idAluno, nomeAluno) VALUES (1,"Aline")'}],
      respostaCerta: 3
  }, {
      id: 17,
      pergunta: 'A linguagem SQL é dividida em subconjuntos de acordo com as operações que se deseja efetuar sobre um banco de dados. Um deles é a Linguagem de Manipulação de Dados (LMD ou DML, do Inglês Data Manipulation Language), cujos comandos básicos são:',
      alternativas: [{id: 0, resposta: 'INSERT, UPDATE e DELETE'}, {id: 1, resposta: 'CREATE, UPDATE e DROP'}, {id: 2, resposta: 'CREATE, UPDATE e DELETE'}, {id: 3, resposta: 'CREATE, ALTER e DROP'}],
      respostaCerta: 0
  }, {
      id: 18,
      pergunta: 'Os comandos GRANT e REVOKE disponíveis em SQL são exemplos típicos de mecanismos de controle de acesso:',
      alternativas: [{id: 0, resposta: 'Obrigatório'}, {id: 1, resposta: 'Discricionário'}, {id: 2, resposta: 'Baseado em regras'}, {id: 3, resposta: 'Mandatório'}],
      respostaCerta: 1
  }, {
      id: 19,
      pergunta: 'A restrição DEFAULT em SQL é utilizada para:',
      alternativas: [{id: 0, resposta: 'determinar uma operação padrão em uma trigger'}, {id: 1, resposta: 'atribuir um nome padrão para uma tabela'}, {id: 2, resposta: 'introduzir um valor padrão em uma coluna'}, {id: 3, resposta: 'determinar o valor padrão de retorno para uma procedure'}],
      respostaCerta: 2
  }, {
      id: 20,
      pergunta: 'O comando em SQL capaz de serializar dados de uma tabela para um arquivo em disco, ou efetuar a operação contrária, transferindo dados de um arquivo em disco para uma tabela de um banco de dados, é o comando:',
      alternativas: [{id: 0, resposta: 'TRANSFER'}, {id: 1, resposta: 'SERIALIZE'}, {id: 2, resposta: 'EXPORT'}, {id: 3, resposta: 'COPY'}],
      respostaCerta: 3
  }, {
      id: 21,
      pergunta: 'Assinale a alternativa que apresenta a cláusula SQL usada para apagar um banco de dados.',
      alternativas: [{id: 0, resposta: 'DROP DATABASE'}, {id: 1, resposta: 'DROP TABLE'}, {id: 2, resposta: 'DATASET EXCLUDED'}, {id: 3, resposta: 'DELETE DATABASE'}],
      respostaCerta: 0
  }, {
      id: 22,
      pergunta: 'Assinale a alternativa que apresenta a cláusula SQL que agrupa as linhas resultantes de uma consulta por uma regra lógica (expressão booliana).',
      alternativas: [{id: 0, resposta: 'CHECK'}, {id: 1, resposta: 'HAVING'}, {id: 2, resposta: 'DISTINCT'}, {id: 3, resposta: 'SELECT'}],
      respostaCerta: 1
  }, {
      id: 23,
      pergunta: 'São CONSTRAINTS SQL, exceto:',
      alternativas: [{id: 0, resposta: 'FOREIGN KEY'}, {id: 1, resposta: 'PRIMARY KEY'}, {id: 2, resposta: 'UNION'}, {id: 3, resposta: 'UNIQUE'}],
      respostaCerta: 2
  }, {
      id: 24,
      pergunta: 'Uma das características do Modelo de Entidade e Relacionamentos é que:',
      alternativas: [{id: 0, resposta: 'cada domínio de possíveis valores possui um atributo'}, {id: 1, resposta: 'dois conjuntos de entidades são sempre disjuntos'}, {id: 2, resposta: 'toda chave candidata é uma chave primária'}, {id: 3, resposta: 'um conjunto de relacionamentos pode ser considerado um conjunto de n-tuplas'}],
      respostaCerta: 3
  }, {
      id: 25,
      pergunta: 'Para criar um login para o usuário francisco com a senha vaticano em um SGBD SQLServer e obrigando a troca de senha, o comando correto em Transact-SQL é:',
      alternativas: [{id: 0, resposta: 'CREATE LOGIN francisco WITH PASSWORD="vaticano" MUST_CHANGE'}, {id: 1, resposta: 'ADD ACCOUNT francisco WITH PASSWORD="vaticano" MUST_CHANGE'}, {id: 2, resposta: 'CREATE ACCOUNT francisco WITH PASSWORD="vaticano" MUST_CHANGE'}, {id: 3, resposta: 'ADD LOGIN francisco WITH PASSWORD ="vaticano" CHANGE_PASSWORD'}],
      respostaCerta: 0
  }, {
      id: 26,
      pergunta: 'Que comando SQL em MySQL resulta na lista contendo o nome dos alunos que tiraram alguma nota maior ou igual a 8, sem repetições?',
      alternativas: [{id: 0, resposta: 'SELECT nomeAluno FROM Aluno INNER JOIN Nota WHERE Nota.nota>=8'}, {id: 1, resposta: 'SELECT DISTINCT nomeAluno FROM Aluno INNER JOIN Nota WHERE Nota.nota>=8'}, {id: 2, resposta: 'SELECT UNIQUE nomeAluno FROM Aluno INNER JOIN Nota WHERE Nota.nota>=8'}, {id: 3, resposta: 'SELECT DISTINCT nomeAluno FROM Aluno, Nota WHERE Nota.nota>=8d'}],
      respostaCerta: 1
  }, {
      id: 27,
      pergunta: 'Qual o menor comando SQL que retorna todas as notas, e apenas as notas, do aluno com idAluno=213 na turma com idTurma=456 no MySQL?',
      alternativas: [{id: 0, resposta: 'SELECT Nota.* FROM Nota, Aluno,Turma INNER JOIN Aluno.idAluno=Nota.idAluno AND Turma.idTurma=Nota.idTurma'}, {id: 1, resposta: 'select Nota.Nota FROM Nota INNER JOIN Aluno ON Aluno.idAluno=Nota.idAluno INNER JOIN Turma ON Turma.idTurma=Nota.idTurma'}, {id: 2, resposta: 'SELECT Nota.nota FROM Nota WHERE idTurma=456 AND idAluno=213'}, {id: 3, resposta: 'SELECT Nota.Nota FROM Nota INNER JOIN Aluno ON Aluno.idAluno=Nota.idAluno INNER JOIN Turma ON Turma.idTurma=Nota.idTurma WHERE Turma.idTurma=456 AND Aluno.idAluno=213'}],
      respostaCerta: 2
  }, {
      id: 28,
      pergunta: 'Qual o comando utilizado para excluir uma tabela de um banco de dados?',
      alternativas: [{id: 0, resposta: 'DELETE TABLE'}, {id: 1, resposta: 'EXCLUDE TABLE'}, {id: 2, resposta: 'CREATE TABLE'}, {id: 3, resposta: 'DROP TABLE'}],
      respostaCerta: 3
  }, {
      id: 29,
      pergunta: 'Qual função matemática do SQL retorna a raiz quadrada de um número?',
      alternativas: [{id: 0, resposta: 'SQRT'}, {id: 1, resposta: 'POWER'}, {id: 2, resposta: 'SUM'}, {id: 3, resposta: 'AVG'}],
      respostaCerta: 0
  }, {
      id: 30,
      pergunta: 'Qual função matemática do SQL retorna o valor absoluto de um número?',
      alternativas: [{id: 0, resposta: 'POWER'}, {id: 1, resposta: 'ABS'}, {id: 2, resposta: 'SQRT'}, {id: 3, resposta: 'LOG'}],
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
