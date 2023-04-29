---
title: Batch - Estrutura de Decisão
layout: article
permalink: /batch/estruturas-de-repeticao
description: >-
  Estruturas de decisão fundamentais em qualquer  linguagem de programação,
  inclusive em Batch. Nesse texto nós aprendemos como podemos escrever essas
  estruturas usando o comando IF.
categories:
  - batch
tags:
  - '"estrutura de decisão"'
  - comparação
date: '2022-08-11T10:55:59.282Z'
lastUpdated: '2022-08-11T10:55:59.977Z'
author: Fernando Bonfim
excerpt_separator: <!--more-->
sources:
  - title: IF - Documentação da Microsoft
    url: >-
      https://docs.microsoft.com/pt-br/windows-server/administration/windows-commands/if
order: 5
published: true
---

Estruturas de decisão nos permitem determinar qual o caminho que um script vai seguir, isto é, qual será o próximo comando a ser executado. Essa estrutura é útil quando queremos executar um ou mais comandos dependendo da situação atual.

## O comando IF em Batch

O comando if é uma das estruturas de decisão mais simples em Batch. Ele permite que você execute um comando se uma condição for verdadeira. A sintaxe básica é:

```
IF <CONDIÇÃO> (
  :: Código se a condição for verdadeira
)
```

A sintaxe apresentada é usada para testar uma condição, e executar o que estiver entre `(` e `)` se a condição for verdadeira.

Por exemplo, se quisermos executar o comando "echo Hello World!" apenas se a variável "x" for igual a "1", podemos usar o seguinte comando:

```bat
if % x%== 1(
  echo Hello World!
)
```


Nós ainda podemos complementar essa estrutura acrescentando o comando `ELSE`, que introduz um conjunto de códigos alternativo para ser executado caso a condição seja falsa. Nesse caso a estrutura geral fica da seguinte forma:

```
IF <CONDIÇÃO> (
  :: Código se a condição for verdadeira
) ELSE (
  :: Código se a condição for falsa
)
```

No fragmento

```bat
@ECHO OFF
SET /A idade=16
IF %idade% LSS 18 (
  ECHO Eh menor de idade!
) else (
  ECHO Eh maior de idade!
)
PAUSE
```

os comandos `ECHO Eh menor de idade!` e `ECHO Eh maior de idade!` serão executados apenas em situações especificas. Se *idade* armazenar um valor menor que 18 então será exibido para o usuário a frase "Eh menor de idade!". caso contrário (else) será exibido "Eh maior de idade!". No código, LSS é uma abreviação de lesser, que é uma palavra em inglês para dizer "menor". Então a condição completa pode ser lida como "Se o valor da variável idade for menor que 18."  

Nesse caso, *idade* recebe o valor 16 antes do comando `if`, portanto a condição é falsa e "Eh menor de idade!" deve ser exibido na tela.

Resultado:

```
Eh menor de idade!
```

A condição pode ser qualquer coisa que possa ser determinada como verdadeira ou falsa. Na expressão acima, afirmamos que a variável *idade* guarda um valor que é menor que 18. O computador verifica se isso é verdade comparando o valor da variável e o número 18. Caso seja verdadeiro, o primeiro conjunto de instruções é executado. e o segundo é ignorado. Caso contrário, o segundo conjunto será considerado, enquanto o primeiro será ignorado.

Note que o conjunto de instruções é delimitado por parênteses e não chaves como em outras linguagens. Na verdade, os parênteses só são realmente necessários quando há mais de uma instrução a ser executada. O mesmo trecho acima poderia ser reescrito assim:

```bat
@ECHO OFF
SET /A idade=16
IF %idade% LSS 18 ECHO Eh menor de idade! ELSE ECHO Eh maior de idade!
PAUSE
```

O script será executado normalmente, produzindo o mesmo resultado do anterior. Contudo, é importante ficar atento a questão de legibilidade do código: omitir os parênteses pode dificultar a separação entre o que é comando, condição e a instrução que deve ser executada caso verdadeiro ou falso.

Você pode aninhar estruturas de decisão uma dentro da outra quantas vezes quiser.

```
IF <condição> (
  :: Comandos caso a condição do IF externo retorne verdadeiro
  IF <condição> (
    :: Comandos caso a condição do IF interno retorne verdadeiro
  )
) ELSE (
  :: Comandos caso a condição do IF externo retorne falso
  IF Condition (
    :: Comandos caso a condição do IF interno retorne verdadeiro
  ) ELSE (
    :: Comandos caso a condição do IF interno retorne falso
  )
 )
```

Os parênteses devem estar presentes na mesma linha que os comandos `IF` e `ELSE`. Assim, a seguinte estrutura não é válida:

```
IF <condição>
(
  :: Comandos
)
ELSE
(
  :: Comandos
)
```

## Operadores de Comparação

Os operadores de comparação são usados para criar uma condição que permita ao computador comparar os elementos envolvidos na operação, a fim de determinar se eles são iguais, diferentes, maiores ou menores que outros. 

Esses operadores são amplamente usados em estruturas de decisão em batch e são importantes para criar condições que permitam ao script seguir um caminho específico com base em um valor específico.

Um exemplo de operador de comparação é o `LSS`, que usamos na seção anterior. Além dele, existem outros operadores disponíveis na linguagem, incluindo:

* `EQU` - igual a - retorna verdadeiro se os valores forem iguais;
* `NEQ` - não é igual a - retorna verdadeiro apenas se os valores forem diferentes;
* `LSS` - menor que - retorna verdadeiro se o valor à esquerda do operador for menor que o da direita;
* `LEQ` - menor ou igual a - retorna verdadeiro se o valor à esquerda for menor ou igual ao valor à direita;
* `GTR` - maior que - retorna verdadeiro se o valor à esquerda do operador for maior que o da direita;
* `GEQ` - maior ou igual a - retorna verdadeiro se o valor à esquerda do operador for maior ou igual ao valor à direita.

Cada operador de comparação tem um requisito específico que deve ser satisfeito para que a condição seja considerada verdadeira. Se a condição não satisfizer o requisito, o resultado será falso. Por exemplo, se usarmos o operador EQU e os valores envolvidos na expressão não forem iguais, o resultado será falso.

É importante lembrar que podemos substituir o operador EQU por == tanto para comparar textos quanto para comparar números. Entretanto, é necessário ter cuidado ao comparar textos, pois a comparação leva em consideração o código ASCII dos caracteres.

Quando nós escrevemos um texto em um computador é necessário representar cada símbolo como uma sequência de dígitos binários (0s e 1s). O ASCII (American Standard Code for Information Interchange) é um padrão em que cada caractere é associado a um número, chamado de code point (ponto de código) ou ASCII code.  Por exemplo, o símbolo "a" é associado ao número 97, ou seja, 97 é o code point para o caractere "a". 

Desse modo, para representar um determinado caractere em binário é necessário apenas representar o seu code point em binário. Para guardar o símbolo "a" a sequência 01100001 é gerada.

Em Batch, quando usamos o operador LSS (menor que) para comparar strings (sequências de caracteres), ele compara os códigos ASCII de cada caractere um por um, da esquerda para a direita. Se o valor ASCII do caractere na posição correspondente na primeira string for menor que o da segunda string, a condição é verdadeira. Caso contrário, a condição é falsa.

Por exemplo, se compararmos as strings "batata" e "banana" usando o operador LSS, o primeiro caractere "b" tem o valor ASCII 98, enquanto o primeiro caractere "b" em "banana" tem o valor ASCII 98 também. Como ambos os caracteres têm o mesmo valor ASCII, a comparação passa para o próximo caractere. O segundo caractere em "batata" é "a" com o valor ASCII 97, enquanto o segundo caractere em "banana" é "a" com o valor ASCII 97 também. Como ambos os caracteres têm o mesmo valor ASCII, a comparação passa para o próximo caractere. Isso continua até que o primeiro caractere diferente seja encontrado. No exemplo, o quarto caractere de "batata" é "a" com valor ASCII 97, enquanto o quarto caractere em "banana" é "n" com valor ASCII 110. Como 97 é menor que 110, a condição é verdadeira e a string "batata" é considerada menor do que a string "banana".

## Variável Inexistente ou Vazia

Nos scripts usados nas seções anteriores, se a variável não existir o programa vai retornar um erro. Para evitar que isso aconteça, nós envolvemos a invocação da variável com aspas.

```bat
@ECHO OFF
SET /A idade=16
IF "%idade%" LSS 18 (
  ECHO Eh menor de idade!
) else (
  ECHO Eh maior de idade!
)
PAUSE
```

Agora se a variável idade não existir, aquele trecho será equivalente a "" com 18.

No lugar das aspas também é possível colocar pontos também, ficando um de cada lado da chamada da variável. Nesse caso, pode ser usado .%idade%. no lugar de "%idade%".

Se o valor a que a variável for comparada se tratar de um texto, ele também deve ser colocado entre aspas. Isso por que depois que o valor da variável é recuperado, ele acaba ficando dentro das aspas que envolve o código que invoca a variável.

No fragmento

```bat
@ECHO OFF
SET nome=Fernando
IF "%nome%" == "Fernando" ECHO Oi, Fernando!
PAUSE
```

o trecho "%nome%" é o mesmo que "Fernando", já que este é o valor da variável. Esse resultado então é comparado com a frase "Fernando" que foi escrita ali diretamente.

Resultado:

```
Oi, Fernando!
```

Quando o dado na variável se trata de um número, e este for comparado com outro número, as aspas são desnecessárias.

```bat
@ECHO OFF
SET idade=18

:: Não é necessário envolver o '18' entre aspas.
IF "%idade%" GTQ 18 (
  ECHO Deve votar!
)
PAUSE
```

## Checar a Existência de uma Variável

Uma condição que determina se uma variável existe ou não pode ser criada usando a palavra-chave `DEFINED`. A sintaxe é a seguinte:

```bat
@ECHO OFF
IF DEFINED idade (
  ECHO Idade = %idade%
) ELSE (
  ECHO idade nao foi definida.
)
PAUSE
```

Resultado:

```
idade nao foi definida.
```

Observe que o resultado foi "idade nao foi definida." foi gerado por que a variável idade  não foi definida antes do comando if.

## Comparação Insensível a Maiúscula ou Minúscula

Por padrão a comparação entre textos é sensível a maiúscula ou minúscula (Case-sensitive). Isso significa que uma palavra com a primeira letra em maiúsculo é diferente da mesma palavra toda em minúsculo.

```batchfile
@ECHO OFF
SET nome=Fernando
IF "%nome%" == "fernando" (
  ECHO Bem vindo senhor, pode entrar.
) ELSE (
  ECHO Oi, %nome%. Posso ajudar?
)
PAUSE
```

Resultado:

```
Oi, Fernando. Posso ajudar?
```

Perceba que nesse exemplo o CMD considerou "Fernando" diferente de "fernando". Isso acontece graças a primeira letra de cada texto. Em uma, ela está em maiúsculo, na outra em minúsculo.

Para que impedir essa distinção, usamos o parâmetro `/i` antes da condição.

```batchfile
@ECHO OFF
SET nome=Fernando
IF /i "%nome%" == "fernando" (
  ECHO Bem vindo senhor, pode entrar.
) ELSE (
  ECHO Oi, %nome%. Posso ajudar?
)
PAUSE
```

Resultado:

```
Bem vindo senhor, pode entrar.
```

## Checar a Existência de um Arquivo

Podemos usar o comando IF para verificar se um arquivo existe antes de executar uma ação. Por exemplo, podemos verificar se um arquivo existe antes de tentar abri-lo. Para isso é usado o comando EXIST.

```batchfile
@ECHO OFF
IF EXIST <caminho para o arquivo> (
  :: Instruções caso verdadeiro
)
PAUSE 
```

O \<caminho para o arquivo> deve ser substituído pelo caminho para o arquivo no sistema de arquivos do Windows. O caminho é composto por uma sequência de pastas e subpastas que devem ser acessadas para chegar ao arquivo + o nome do arquivo com a extensão. 

No fragmento

```bat
@ECHO OFF
IF EXIST C:\Users\fefe\Documents\meu-arquivo.cmd (
  ECHO O arquivo existe!
)
PAUSE 
```

nós verificamos se existe um arquivo chamado meu-arquivo, com extensão .cmd, na pasta documentos do sistema. 

Note que alguns nomes no caminho (users e documents) estão em inglês, isso porque o seu sistema pode estar configurado para português mas o CMD está enxergando o nome das pastas em inglês. É desse modo que o sistema de arquivos monta o caminho para seus diversos conteúdos.

O caminho também pode ser relativo À pasta em que está o script sendo executado. Para entender melhor nós vamos criar uma pasta chamada projetoX dentro da pasta Documentos. Em uma janela do CMD digite `CD C:\Users\fefe\Documents>` e aperte Enter para entrar na pasta Documentos. Agora, usamos o comando `MKDIR projetoX` para criar uma pasta chamada projetoX.

Ainda dentro da pasta Documentos, digite `START notepad`. Isso vai abrir o bloco de notas em branco. Preencha o vazio com o conteúdo do nosso script:

```bat
@ECHO OFF
IF EXIST projectX/xfile.cmd (
  ECHO O arquivo existe.
) ELSE (
  ECHO O arquivo nao existe.
)
PAUSE
```

Salve o arquivo dentro da pasta Documentos com o nome

Ao ser executado, o CMD vai olhar dentro da pasta projectX que está dentro da pasta Documentos e então determinar se o arquivo xfile.cmd existe lá dentro. Nesse caso, nós não criamos o arquivo ainda, então será exibido "O arquivo nao existe." na tela.

Mas o importante notar aqui é como o caminho para o arquivo foi escrito. Nós pudemos especificar apenas projectX/xfile.cmd porque o script está dentro da mesma pasta onde projectX foi colocada. Ou seja, O caminho especificado é relativo a localização do script no sistema de arquivos do Windows. Caso contrário, teríamos que fornecer o caminho completo para o arquivo, o que deixaria o código assim:

```batchfile
@ECHO OFF
IF EXIST C:\Users\fefe\Documents\projectX\xfile.cmd (
  ECHO O arquivo existe.
) ELSE (
  ECHO O arquivo nao existe.
)
PAUSE
```

## Negação da Condição

Da mesma forma como podemos testar se uma condição é verdadeira, nós também podemos testar se ela é falsa, Isso é feito prefixando a condição com o operador de negação `NOT`.

No fragmento

```batchfile
@ECHO OFF
IF NOT EXIST C:\Users\fefe\Documents\projectX\xfile.cmd (
  ECHO O arquivo nao existe.
) ELSE (
  ECHO O arquivo existe.
)
PAUSE
```

é verificado se o arquivo não existe no sistema, e caso afirmativo o código no primeiro conjunto é executado.

***

Nesse texto nós entendemos um pouco mais sobre o que é o comando `IF` e como usá-lo para tomar decisões no programa em várias situações. Vimos que ele funciona com uma condição que é avaliada para determinar o que fazer a seguir. Essa condição geralmente envolve um ou mais parâmetros, como um operador de comparação (`EQU`, `GTR`, `NEQ`, `LSS`, `LEQ`, `GTR`, ou `GEQ`), ou  a palavra-chave `DEFINED`, por exemplo. Existe mais coisas sobre o comando `IF` que veremos em outros textos, quando for mais apropriado.
