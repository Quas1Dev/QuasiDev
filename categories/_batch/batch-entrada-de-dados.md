---
title: Batch - Entrada de Dados
layout: ''
permalink: "/batch/:title"
description: Algumas vezes é necessário capturar o que o usuário digita. Saiba como
  fazer isso usando a linguagem Batch.
date: 
lastUpdated: 2022-08-21T13:09:24.359+00:00
author: Fernando Bonfim
excerpt_separator: "<!--more-->"
order: 7
published: false

---
Scripts interativos são úteis quando não temos todas as in informações necessárias para a finalidade deles. Por exemplo, se um programa tem múltiplas funcionalidades. não sabemos quais delas o usuário quer usar. Para decidir qual funcionalidade executar nós pedimos ao usuário para indicar qual opção ele precisa no momento.

Em essência, a interatividade vem do fato de que nós podemos exibir uma mensagem de espera e então aguardar o usuário digitar alguma coisa. O dado enviado para o programa é então armazenado em uma variável que pode ser usada nas operações pertinentes.

Para ilustrar como podemos ler dados do usuário nós vamos introduzir o comando `SET /P` e também o comando `CHOICE`.

## Armazenando Dados do Usuário

Variáveis de ambiente podem armazenar o valor digitado pelo usuário. O comando `SET` com a opção `/P` habilitada é usada para isso. A sintaxe é como se segue:

    SET /P [nome da variável]=[Mensagem]

O nome da variável é o nome usado para referenciá-la. Já \[mensagem\] será um texto exibido para usuário antes dele digitar qualquer coisa. Desse modo, o que vem do lado direito do sinal de atribuição não é o valor que será armazenado na variável. A mensagem pode ser usada para informar o usuário que tipo de informação se espera que ele digite, como feito abaixo.

```batchfile
SET /P _usuario=Digite seu nome de usuario: 
```

Resultado:

    Digite seu nome de usuario:

Pode ajudar inserir colocar aspas ao redor da estrutura para identificar qualquer espaço após a frase, como o que foi colocado após os dois pontos.

```batchfile
SET /P "_usuario=Digite seu nome de usuario: "
```

Note: as aspas não serão incluídas na mensagem.

Seguindo qualquer um dos scripts acima, o texto “Digite seu nome de usuário: ” será exibido na tela e então o script para de ser lido até que a tecla Enter seja pressionada.

Observe o código abaixo que pede para que seja inserido um valor e em seguida exibe ele na tela.

```batchfile
@ECHO OFF
SET /P "_valor=Insira um valor: "
ECHO _valor vale %_valor%
PAUSE
```

Ao ser executado. teremos isso na tela do CMD:

    Insira um valor: 

Considerando que o usuário digite o valor 8, o resultado no CMD seria:

    _valor vale 8

O único valor que será colocado na variável é o valor inserido pelo usuário.

Perceba que é possível que o usuário aperte Enter sem realmente digitar qualquer coisa. Não podemos fazer nada para evitar isso, mas podemos checar se a variável existe ou não, já que ela não é criada quando o valor é vazio, e se ela não existir nós pedimos novamente para o usuário inserir um valor.

```batchfile
@ECHO OFF
:pedirValor
SET /P "_valor=Insira um valor: "
IF "%_valor%"=="" GOTO pedirValor
PAUSE
```

O trecho acima utiliza uma combinação de labels (rótulos), e os comandos IF e GOTO para colocar o usuário em um loop do qual não pode escapar sem fazer o que pedimos.

O rótulo `:pedirValor` marca um ponto no script para o qual podemos voltar sempre que necessário usando o comando `GOTO`.

O comando `IF` testa uma condição, se essa condição for verdadeira um conjunto com um ou mais comandos será executado. Nesse caso, se ao tentar acessar a variável retornar nada, o que acontece quando ela não existe, será executado o comando `GOTO pedirValor`, o que faz o controle retornar para a linha logo após o rótulo `:pedirValor`.

## O Comando choice

Podemos usar uma variável para armazenar um valor inserido pelo usuário. Para isso, devemos usar a sintaxe abaixo.

```batchfile
SET /P [nome da variável]=[Mensagem]
```

O nome da variável você já deve saber o que é a essa altura. Já a mensagem será um texto exibido para usuário antes dele digitar qualquer coisa. A mensagem pode ser usada para informar o usuário que tipo de informação se espera que ele digite, como feito abaixo.

```batchfile
SET /P _usuario=Digite seu nome de usuario:
```

Pode ajudar inserir colocar aspas ao redor da estrutura para identificar qualquer espaço após a frase, como o que foi colocado após os dois pontos.

```batchfile
SET /P "_usuario=Digite seu nome de usuario: "
```

Note: as aspas não serão incluídas na mensagem.
O texto “Digite seu nome de usuário: ” será exibido na tela e então o script para de ser lido até que a tecla enter seja pressionada.

Observe o código abaixo que pede para que seja inserido um valor e em seguida exibe ele na tela.

``` batchfile
@ECHO OFF
SET /P ”_valor=Insira um valor: “
ECHO %_valor%
PAUSE
```

Considerando que o usuário digite o valor 8, o resultado no cmd seria:
\[IMAGEM\]

Dessa vez o que está do lado direito do sinal de igual (=) não é armazenada na variável como nas outras declarações de variáveis. O único valor que será colocado na variável é o valor inserido pelo usuário.
Perceba que é possível que o usuário aperte enter sem realmente digitar qualquer coisa. Não podemos fazer nada para evitar isso, mas podemos checar se a variável existe ou não, ja que ela não é criada quando o valor é vazio, e se ela não existir nós pedimos novamente para o usuário inserir um valor.

```batchfile
@ECHO OFF
:pedirValor
SET /P "_valor=Insira um valor: "
IF "%_valor%"=="" GOTO pedirValor
PAUSE
```

O trecho acima utiliza uma combinação de labels (rótulos), e os comandos IF e GOTO para colocar o usuário em um loop do qual não pode escapar sem fazer o que pedimos.

O rótulo `:pedirValor` marca um ponto no script para o qual podemos voltar sempre que necessário usando o comando GOTO.

O comando `IF` testa uma condição, se essa condição for verdadeira nós

O **nome** e o **valor**, no geral, respeitam algumas regras e normas consideradas boas práticas, sendo elas:
1 - Usar nomes simples e que identifiquem facilmente que tipo de informação será salva. Pode ser que tenha que referenciar a variável varias vezes durante o script, ou outro programador precisará ler seu código, então utilizar nomes muito grandes ou que não refletem com exatidão que tipo de informação foi armazenada nela pode levar a alguns enganos. Contudo, isto é opcional, ficando à seu critério usar ou não nomes simples.

Por Exemplo, ao invés de

```batchfile
SET _caminho_para_a_pasta_de_imagens="c:\users\kleber\images\"
```

Faça

```batchfile
SET _imagens="c:\users\kleber\images\"
```

2 - Use espaço somente para separar o comando SET do resto dos parâmetros, e para separar palavras de alguma frase. Espaços adicionados fora dessas situações não serão ignorados, podendo levar à comportamentos inesperados. Então, escreva isso SET name=Davy e não SET name = Davy. Vá para seção<a href=”#acessando-variáveis”> Acessando Variáveis </a>e veja como espaços extras afetam a forma como invocamos uma variável e também a apresentação do resultado.

3 - O primeiro elemento do nome não pode ser numérico. Ao invés disso, o comum é colocar o sinal de “underline” (_) ou o sinal de dólar ($) no começo do nome. Isso evita possíveis confusões com nomes de variáveis pré-definidas do sistema (veja: <a target=”_self” href=”#variaveis-de-ambiente-do-sistema”> Variáveis de Ambiente do Sistema </a>).
Exemplo:

``` batchfile
SET $path=c:\users\kleber\videos
```

4 - Você pode incluir qualquer um dos seguintes símbolos no nome de uma variável: A-Z, a-z, 0-9, # $ ' ( ) * + , - . ? @ \[ \] _ \` { } \~.

Exemplo:

```batchfile
SET _tomy's-car=Jaguar
```

5 - Os símbolos <, >, |, &, ^ são carateres especiais do CMD e só podem ser usados em nomes ou valores de variáveis se precedidos pelo sinal de escape ^, ou caso os parâmetros estejam entre aspas.
Exemplo:

```batchfile
SET _name^&lastName=Tony Stark
```

Ou

```batchfile
SET “_name&lastName=Tony Stark”
```

6 - Não use o sinal de igual no valor ou nome da variável.

O interpretador (cmd.exe) tem um limite de 8.190 caracteres que podem ser digitados, contando com o nome da variável, o sinal de igual e o valor guardado. Na verdade, a maioria dos sites apontam que o limite é de 8.191 caracteres, mas eu tentei chegar à esse valor e o CMD não permitiu, me deixando apenas com 8.186 de espaço.