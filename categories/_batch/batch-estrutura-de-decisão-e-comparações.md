---
title: Batch - Estrutura de Decisão
layout: article
permalink: /batch/estruturas-de-repeticao
description: Estruturas de decisão fundamentais em qualquer  linguagem de
  programação, inclusive em Batch. Nesse texto nós aprendemos como podemos
  escrever essas estruturas usando o comando IF.
categories:
  - batch
tags:
  - '"estrutura de decisão"'
  - comparação
date: 2022-08-11T10:55:59.282Z
lastUpdated: 2022-08-11T10:55:59.977Z
author: Fernando Bonfim
excerpt_separator: <!--more-->
sources:
  - url: https://docs.microsoft.com/pt-br/windows-server/administration/windows-commands/if
    title: IF - Documentação da Microsoft
order: 5
---
Estruturas de decisão nos permite determinar qual o caminho que um script vai seguir, isto é, qual será o próximo comando a ser executado. Essa estrutura é útil quando queremos executar um ou mais comandos dependendo da situação atual.

## O Comando IF

A sintaxe geral do comando IF em Batch é como se segue:

```
IF <CONDIÇÃO> (
  :: Código se a condição for verdadeira
)
```

A sintaxe apresentada é usada para testar uma condição, e executar o que estiver entre `(` e `)` se a condição for verdadeira. 

Nós ainda podemos complementar essa estrutura acrescentando o comando `ELSE`, que introduz um conjunto de códigos alternativo para ser executado caso a condição seja falsa. Nesse caso a estrutura geral fica da seguinte forma:

```
IF <CONDIÇÃO> (
  :: Código se a condição for verdadeira
) ELSE (
  :: Código se a condição for falsa
)
```

 No fragmento 

```batchfile
@ECHO OFF
SET /A idade=16
IF %idade% LSS 18 (
  ECHO Eh menor de idade!
) else (
  ECHO Eh maior de idade!
)
PAUSE
```

os trechos `ECHO Eh menor de idade!` e `ECHO Eh maior de idade!` serão executados apenas em situações especificas. Se idade armazenar um valor menor (LSS = lesser = Menor ) que 18 então será exibido para o usuário a frase "Eh menor de idade!". caso contrário (else) será exibido "Eh maior de idade!".

A condição pode ser qualquer coisa a que se pode determinar como verdadeiro ou falso. Na expressão acima nós afirmamos que a variável idade guarda um valor que é menor que 18. O computador verifica se isso é verdade comparando o valor da variável e o número 18. Caso seja verdadeiro, o primeiro conjunto de instruções (delimitado por parênteses) é executado. e o segundo é ignorado. Caso contrário, o segundo conjunto será considerado, enquanto o primeiro será ignorado.

Os parênteses só são realmente necessários quando há mais de uma instrução a ser executada. O mesmo trecho acima poderia ser reescrito assim:

```batchfile
@ECHO OFF
SET /A idade=16
IF %idade% LSS 18 ECHO Eh menor de idade! ELSE ECHO Eh maior de idade!
PAUSE
```

O script será executado normalmente, produzindo o mesmo resultado do anterior. Contudo, é importante ficar atento a questão de legibilidade do código. Omitir os parênteses pode dificultar a separação do que é comando, condição e o código associado à cada opção.

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

Os operadores de comparação criam uma situação na qual o computador deve comparar os elementos envolvidos na operação a fim de determinar a igualdade entre eles, ou o tipo de diferença (se um é menor ou maior ou menor que o outro).

O `LSS` que usamos na seção anterior é um operador de comparação. Ele e os outros disponíveis na linguagem são listados abaixo:

* **EQU** – Igual a - Retorna verdadeiro se os valores forem iguais. 
* **NEQ** - Não é igual a - Retorna verdadeiro apenas se os valores forem diferentes.
* **LSS** - Menor que - Retorna verdadeiro se o valor a esquerda do operador for menor que o da direita.
* **LEQ** – Menor ou igual a - Retorna verdadeiro se o valor a esquerda for menor ou igual ao valor a direita.
* **GTR** – Maior que -  Retorna verdadeiro se o valor a esquerda do operador for maior que o da direita
* **GEQ** – Maior ou igual a - Retorna verdadeiro se o valor a esquerda do operador for maior ou igual ao valor a direita.

Na presença de cada um desses operadores, se a condição não satisfizer o requisito que a torna verdadeira, o resultado será falso. Então, se usamos o operador `EQU` e os valores envolvidos na expressão não forem iguais, será retornado falso, isto é, os valores não são iguais.

Nós podemos substituir o operador `EQU` por `==` tanto para comparar textos quanto para comparar números.  

## Variável Inexistente ou Vazia

Nos scripts usados nas seções anteriores, se a variável não existir o programa vai retornar um erro. Para evitar que isso aconteça, nós envolvemos a invocação da variável com aspas.

```batchfile
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

```batchfile
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

```batchfile
@ECHO OFF
SET idade=18

:: Não é necessário envolver o 18 entre aspas.
IF "%idade%" GTQ 18 (
  ECHO Deve votar!
)
PAUSE
```

## Checar a Existência de uma Variável

Uma condição que determina se uma variável existe ou não pode ser criada usando a palavra-chave `DEFINED`. A sintaxe é a seguinte:

```batchfile
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

## Comparação Insensível a Maiúscula ou Minúscula

Por padrão a comparação entre strings é sensível a maiúscula ou minúscula (Case-sensitive). Isso significa que uma palavra com a primeira letra em maiúsculo é diferente da mesma palavra toda em minúsculo.

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

Condicionar a execução de um conjunto de instruções à existência ou não de um arquivo específico também é possível. Nós usamos a palavra-chave `EXIST` para esse propósito. A sintaxe fica da seguinte forma:

```batchfile
@ECHO OFF
IF NOT EXIST <caminho para o arquivo> (
:: Instruções caso verdadeiro
)
PAUSE 
```

O `<caminho para o arquivo>` deve ser substituído pela sequência de pastas e subpastas que devem ser acessadas para chegar ao arquivo + o nome do arquivo com a extensão. No fragmento

```batchfile
@ECHO OFF
IF EXIST C:\Users\fefe\Documents\meu-arquivo.cmd (
  ECHO O arquivo existe!
)
PAUSE 
```

nós verificamos se existe um arquivo chamado meu-arquivo na pasta documentos do sistema. O nome foi indicado em inglês porque é desse modo que o sistema de arquivos monta o caminho para seus diversos conteúdos. 

O caminho também pode ser relativo À pasta em que está o script sendo executado. Para entender melhor nós vamos criar uma pasta chamada projetoX dentro da pasta Documentos. Em uma janela do CMD digite `CD C:\Users\fefe\Documents>` e aperte Enter para entrar na pasta Documentos. Agora, usamos o comando `MKDIR projetoX` para criar uma pasta chamada projetoX. 

Ainda dentro da pasta Documentos, digite `START notepad`. Isso vai abrir o bloco de notas em branco. Preencha o vazio com o conteúdo do nosso script:

```batchfile
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

- - -

Nesse texto nós entendemos um pouco mais sobre o que é o comando `IF` e como usá-lo para tomar decisões no programa em várias situações. Vimos que ele funciona com uma condição que é avaliada para determinar o que fazer a seguir. Essa condição geralmente envolve um ou mais parâmetros, como um operador de comparação (`EQU`, `GTR`, `NEQ`, `LSS`, `LEQ`, `GTR`, ou `GEQ`), ou  a palavra-chave `DEFINED`, por exemplo. Existe mais coisas sobre o comando `IF` que veremos em outros textos, quando for mais apropriado.