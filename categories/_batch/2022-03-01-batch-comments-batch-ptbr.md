---
title: Comentários em Batch
layout: article
permalink: /batch/:title
description: Vamos aprender a comentar programas escritos em batch usando o
  comando REM, e algumas gambiarras.
categories:
  - Batch
tags:
  - batch
  - windows
  - comentários
  - rem
date: 2022-03-01 08:10:00
lastUpdated: 2022-03-01 08:10:00
author: Fernando Bonfim
excerpt_separator: <!--more-->
sources:
  - title: Comando do Windows - Microsoft
    url: https://docs.microsoft.com/pt-br/windows-server/administration/windows-commands/windows-commands
order: 2
---

Em Batch também temos a possibilidade de incluir comentários: textos que são ignorados pelo interpretador. Essa é uma funcionalidade importante pois possibilita a inserção de mensagens que informam o propósito de um trecho de código no documento, por exemplo. Desse modo, nós facilitamos uma eventual releitura do algoritmo.
<!--more-->

Pode parecer bobagem em programas pequenos, mas à medida que o script fica mais complexo os comentários se tornam imprescindíveis para não se perder e ser mais eficiente. 

## Usando o Comando REM
O comando ```REM``` (de remark) é o comando oficial para inserção de anotações no documento. A sintaxe é a seguinte:

``` batch
REM [anotação]
```
Onde [anotação] é a informação que você quer passar. 

``` batch
@ECHO OFF
REM Esse programa exibe "Ola, mundo!" para o usuario.
ECHO Ola, mundo! 
PAUSE
```
Será imprimido algo assim no CMD:

``` console
Ola, mundo!
Pressione qualquer tecla para continuar. . . 
```

Perceba que o comentário não foi exibido para o usuário, apenas o texto "Ola, mundo!". Dessa forma, qualquer comentário inserido no código do programa será visualizado apenas por quem olhar o arquivo.

## Formas Não Oficiais Para Comentar

Apesar do comando ```REM``` ser o único comando para inserção de comentários documentado, nós podemos fazer isso de outras formas tirando vantagem de certos aspectos da linguagem. 

Nesta seção, nós vamos discutir como usar um rótulo inválido (como ```::```) ou chamada para uma variável inválida (```%= =%```) para fazer comentários no programa, e também quais as vantagens e desvantagens de cada método.

### Comentando com ::

Quando você pesquisa exemplos de scripts é provável que se depare uma estrutura de comentário na forma ```:: [comentário]```, onde [comentário] é a informação que deve ser passada, como no exemplo abaixo.

``` batch
@ECHO OFF
:: Esse programa exibe "Ola. mundo!"
ECHO Ola, mundo! 
PAUSE
```

O resultado será exatamente o mesmo de quando usamos o comando ```REM``` acima.

Resultado: 

~~~ console
Ola, mundo!
Pressione qualquer tecla para continuar. . .
~~~

Esses dois pontos, tecnicamente se trata de um rótulo, e não de um comando para a criação de um comentário.

De forma breve, um rótulo em Batch se trata de uma estrutura usada para marcar uma determinada parte do documento, para a qual podemos pular durante a execução do programa usando o comando ```GOTO``` ou ```CALL```. 
<!-- (Veja nossa seção sobre <a href="#labels" target="_self">Rótulos, GOTO e CALL</a> para saber mais)-->

Podemos citar algumas vantagens de usar essa gambiarra:
- Mesmo que o comando ```@ECHO OFF``` não tenha sido definido, os comentários continuam escondidos do usuário.
- Um dos motivos para a sua adoção no passado é que rótulos são ligeiramente mais rápidos já que eles são lidos e ignorados pelo CMD, enquanto que o comando ```REM``` é lido e executado (mesmo que não faça nada). Hoje em dia, apesar de ainda ter uma certa diferença na velocidade ela é desprezível, então é pouco provável que consiga perceber qualquer benefício nesse sentido. Porém, se algum dia, por qualquer motivo, precisar salvar alguns micro segundos, esse é um caminho.
- Os comentários ficam mais identificáveis no meio do código para algumas pessoas. Isso por que ```::``` se destaca por não usar letras do alfabeto, diferente do construto ```REM```.

No geral, esse "comando" pode ser usado praticamente da mesma forma que você utiliza o comando ```REM``` sem problemas, mas com algumas restrições no que diz respeito a sua utilização em blocos de códigos. 

## Comentários em Blocos de Código

Um bloco de código, em Batch, é um grupo de comandos agrupados entre parênteses e interpretados como uma única linha pelo CMD. Tudo aquilo que estiver entre parênteses, e não fazer parte de um cálculo aritmético, é parte de um bloco de código, como abaixo.

``` batch
(
ECHO Esse comando faz parte de um bloco de codigos.
ECHO Esse tambem.
)
```
No fragmento acima, os dois comandos ```ECHO``` fazem parte de um mesmo conjunto, um mesmo bloco de código.  Você pode, com certeza, adicionar comentários dentro desses blocos.

``` batch
(
REM Comentário 1
ECHO Esse comando faz parte de um bloco de comando.
REM Comentário 2
ECHO Esse comando faz parte de um bloco de comando.
)
```

Contudo, se for usar ```::``` você terá que prestar atenção para seguir as seguintes regras:

1 - Não pode haver dois comentários em seguida, caso contrário uma mensagem de erro será gerada.

``` batch 
@ECHO OFF
:: Comentando em bloco de código.
(
:: Um comentário.
:: Outro comentário
ECHO Mensagem qualquer.
)
PAUSE
```

Resultado no cmd:
~~~ console
O sistema não pode encontrar a unidade especificada.
Menssagem qualquer.
Pressione qualquer tecla para continuar. . .
~~~

A mensagem "O sistema não pode encontrar a unidade especificada" é exibida. Aquela primeira linha foi causada pelo uso de dois comentários com duplo dois pontos.

2 - O comentário não pode ser o último elemento do bloco, caso contrário vamos receber a mensagem de erro ") foi inesperado neste momento" . 

``` batch
@ECHO OFF
(
:: Um comentário
ECHO A linha abaixo causa um erro.
:: Outro comentário
)
PAUSE
```
Se você executar o script simplesmente clicando sobre ele é provável que nem veja a mensagem já que o CMD para de executar o programa sem nem chegar ao comando ```PAUSE```. Porém, se você executar o script através do CMD poderá ver a mensagem.

Você pode se livrar desses problemas simplesmente trocando ```::``` por  ```REM``` quando estiver comentando dentro de um bloco de código, não comentar em blocos, ou decorando as regras e se adaptando a elas.

### Comentando com % e =

Podemos usar porcentagem e o sinal de igual para definir comentários usando a seguinte forma ```%= [comentário] =%```. Como com ```::``` esse método é mais uma "gambiarra" por assim dizer. Nos aproveitamos da forma como o CMD lida com variáveis dentro de arquivos .bat e .cmd.

Colocando de forma simples, em Batch, e em muitas outras linguagens de programação, podemos criar **variáveis** que servem para **guardar informações**, como o endereço para uma pasta. Geralmente, a sintaxe é ```SET [nome da variável] = [valor]```. Por exemplo, para armazenar o caminho _imagens=C:\Users\user\imagens\ em uma variável chamada _imagens, nós escrevemos ```SET _imagens=C:\Users\user\imagens\```. 

Para acessar uma variável, geralmente, nós envolvemos seu nome entre dois sinais de porcentagem, tipo ```ECHO %_imagens%```. %\_imagens% será substituído pelo valor que foi armazenado na variável, ou seja, será exibido C:\Users\user\imagens\ para o usuário. 

~~~ batch
@ECHO OFF

:: Declara uma variável chamada _imagens e atribui 
:: o texto _imagens=C:\Users\user\imagens\ a ela.

SET _imagens=C:\Users\user\imagens\
ECHO %_imagens%
PAUSE
~~~ 

Resultado:

``` console
C:\Users\user\imagens\
Pressione qualquer tecla para continuar. . .
```
Quando tentamos acessar uma variável inexistente o cmd simplesmente remove a referência, e é essa característica que se torna uma opção interessante para inserir comentários em Batch. Ao inserir ```%= Comentário =%``` em arquivo Batch estamos apontando para o interpretador uma variável inexistente, então ele remove essa parte do script e prossegue na leitura do programa.

Temos certeza de que a variável é inexistente, pois não é permitido o uso de porcentagem como primeiro elemento do nome de uma variável.

Essa gambiarra é tão rápida quanto o comando ```REM``` e pode ser utilizado em praticamente qualquer lugar: em frente a outros comandos, entre parâmetros de outros comandos, em blocos de código, entre outros.

Essa técnica tem suas limitações. Não é permitido o uso de dois pontos (:) ou porcentagens (%).

<!-- Para saber mais sobre variáveis leia <a href="" target="_self">nosso post sobre o assunto</a>.-->

## Comentando Múltiplas Linhas

A linguagem Batch não oferece uma opção nativa para comentar múltiplas linhas, mas podemos contornar essa limitação usando Rótulos e o comando GOTO. Veja um exemplo no trecho abaixo:

``` batch
@ECHO OFF
ECHO Essa frase sera exibida na tela.

:: O comando GOTO abaixo pula a leitura do programa para o rótulo 
:: finalDoComentario1

GOTO finalDoComentario1
Essa linha e um comentario.
Essa tambem.
E essa.
:finalDoComentario1

ECHO Essa frase tambem sera exibida na tela.
PAUSE
```

Ao executar o comando ```GOTO finalDoComentario1``` o interpretador ignora tudo que está abaixo até encontrar o rótulo ```:finalDoComentário1``` e reinicia o processamento na linha seguinte.

Resultado:
~~~ console
Essa frase sera exibida na tela.
Essa frase tambem sera exibida na tela.
Pressione qualquer tecla para continuar. . .
~~~

<!-- Para entender o que são rótulos e o comando ```GOTO``` veja <a href="" target="_self">nosso post sobre o assunto</a>.-->

## Comentando na Mesma Linha com Outros Comandos

Em Batch não existe um comando que te permita comentar na frente de outros comandos. 

``` batch
@ECHO OFF
ECHO Frase 1 REM Esse texto sera exibido.
ECHO Frase 2 :: Esse texto sera exibido.
PAUSE
```
Resultado no CMD:

~~~ console
Frase 1 REM Esse texto sera exibido.
Frase 2 :: Esse texto sera exibido.
Pressione qualquer tecla para continuar. . .
~~~

Mas ainda podemos fazer isso aproveitando a funcionalidade do comando ```&```, que possibilita a introdução de um novo comando na mesma linha. 
Apenas preceda ```REM```ou ```::``` com ```&```:

``` batch 
@ECHO OFF
ECHO Frase 1 & REM Esse e um comentario.
ECHO Frase 2 & :: Esse e um comentario.
PAUSE
```

Resultado no CMD:
~~~ console
Frase 1 & REM Esse e um comentario.
Frase 2 & :: Esse e um comentario.
~~~

Usando ```%= [comentário] =%``` é bem mais fácil já que não precisa preceder ele com ```&```.

``` batch
@ECHO OFF
ECHO Frase qualquer %= Esse e um comentario =%
PAUSE
```
Resultado no CMD:
~~~ console
Frase qualquer
Pressione qualquer tecla para continuar. . .
~~~

Falamos sobre ```&``` e vários outros sinais que permitem mais de um comando na mesma linha futuramente.

<!-- em nosso post sobre <a href="" target="_self">Sinais Especiais em Batch </a>.-->
