---
title: Batch - Entrada de Dados
layout: ''
permalink: "/batch/:title"
description: Algumas vezes é necessário capturar o que o usuário digita. Saiba como
  fazer isso usando a linguagem Batch.
date: 2022-11-13 03:00:00 +0000
lastUpdated: 2022-08-21T13:09:24.359+00:00
author: Fernando Bonfim
excerpt_separator: "<!--more-->"
order: 7
published: false

---
Scripts interativos são úteis quando não temos todas as informações necessárias para a finalidade deles. Por exemplo, se o nosso script tem múltiplas funcionalidades, das quais o usuário escolhe uma para usar em um determinado momento. Para decidir qual funcionalidade executar nós pedimos ao usuário para indicar qual opção ele precisa no momento.

Em essência, a interatividade vem do fato de que nós podemos exibir uma mensagem de espera e então aguardar o usuário digitar alguma coisa. O dado enviado para o programa é então armazenado em uma variável que pode ser usada nas operações pertinentes.

Para ilustrar como podemos ler dados do usuário nós vamos introduzir o comando `SET /P`.

## Armazenando Dados do Usuário

Variáveis de ambiente podem armazenar o valor digitado pelo usuário. O comando `SET` com a opção `/P` habilitada é usada para isso. A sintaxe é como se segue:

    SET /P [nome da variável]=[Mensagem]

O \[nome da variável\] deve ser substituído pelo nome usado para referenciá-la durante o programa. Já \[mensagem\] será um texto exibido para usuário antes dele digitar qualquer coisa. Desse modo, o que vem do lado direito do sinal de atribuição não é o valor que será armazenado na variável. A mensagem pode ser usada para informar o usuário que tipo de informação que se espera que ele digite, como no fragmento abaixo.

```batchfile
SET /P _usuario=Digite seu nome de usuario: 
```

Ao executar um arquivo com esse comando, ao chegar na nele o CMD (ou outro interpretador de comandos que esteja usando) para e exibe a mensagem especificada. O programa só continua depois que o usuário aperta Enter, tendo ou não digitado alguma coisa de fato.

Com a instrução acima, o CMD iria para e mostra o seguinte na para o usuário:

    Digite seu nome de usuario:

Pode ajudar colocar aspas ao redor da sintaxe para identificar qualquer espaço após a frase, como o que foi colocado após os dois pontos.

```batchfile
SET /P "_usuario=Digite seu nome de usuario: "
```

Observação: as aspas não serão incluídas na mensagem.

Seguindo qualquer um dos scripts acima, o texto “Digite seu nome de usuário: ” será exibido na tela e então o script para de ser lido até que a tecla Enter seja pressionada.

Observe o código abaixo que pede para que seja inserido um valor e em seguida exibe ele na tela.

```batchfile
@ECHO OFF
SET /P "_valor=Insira um valor: "
ECHO _valor vale %_valor%
PAUSE
```

Ao ser executado. teremos isso na tela do CMD em um primeiro momento:

    Insira um valor: 

Considerando que o usuário digite o valor 8, o resultado no CMD seria:

    _valor vale 8

O único valor que será colocado na variável é o que for inserido pelo usuário.

Perceba que é possível que o usuário aperte Enter sem realmente digitar qualquer coisa. Não podemos fazer nada para evitar isso, mas podemos checar se a variável existe ou não. Como ela não é criada quando o valor é vazio, então não conseguiremos acessá-la quando o usuário não entra com nenhum dado.  Uma vez identificado que a variável não existe, nós voltamos a pedir um valor para o usuário.

```batchfile
@ECHO OFF
:pedirValor
SET /P "_valor=Insira um valor: "
IF "%_valor%"=="" GOTO pedirValor
PAUSE
```

O trecho acima utiliza uma combinação de labels (rótulos), e os comandos `IF` e `GOTO` para colocar o usuário em um ciclo do qual não pode escapar sem fazer o que pedimos.

O rótulo `:pedirValor` marca um ponto no script para o qual podemos voltar sempre que necessário usando o comando `GOTO`.

O comando `IF` testa uma condição. Se essa condição for verdadeira um conjunto com um ou mais comandos será executado. Nesse caso, se ao tentar acessar a variável retornar nada, o que acontece quando ela não existe, será executado o comando `GOTO pedirValor`, o que faz o controle retornar para a linha logo após o rótulo `:pedirValor`.

Controle aqui se refere ao poder de comandar o que será feito a seguir. Nesse caso, o poder de determinação do próximo passo na execução do script é transferido para a linha após o rótulo `:pedirValor`.

***

Então é isso, Vimos que é possível receber informações do usuário usando o comando SET /P. 