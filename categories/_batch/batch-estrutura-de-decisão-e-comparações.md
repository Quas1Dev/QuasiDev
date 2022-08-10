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
date: 2022-08-10T15:41:04.991Z
lastUpdated: 2022-08-10T15:41:05.966Z
author: Fernando Bonfim
excerpt_separator: <!--more-->
sources:
  - url: https://docs.microsoft.com/pt-br/windows-server/administration/windows-commands/if
    title: IF - Documentação da Microsoft
order: 7
---
Estruturas de decisão nos permite determinar qual o caminho que um script vai seguir, isto é, qual será o próximo comando a ser executado. Essa estrutura é útil quando queremos executar um ou mais comandos dependendo da situação atual.

## O Comando IF

A sintaxe geral do comando IF em Batch é como se segue:

```
IF <CONDIÇÃO> (
  :: Código se a condição for verdadeira
) else (
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

A condição pode ser qualquer coisa a que pode-se determinar como verdadeiro ou falso. Na expressão acima nós afirmamos que a variável idade guarda um valor que é menor que 18. O computador verifica se isso é verdade comparando o valor da variável e o número 18. Caso seja verdadeiro, o primeiro conjunto de instruções (delimitado por parênteses) é executado. e o segundo é ignorado. Caso contrário, o segundo conjunto será considerado, enquanto o primeiro será ignorado.

## Operadores de Comparação

Os operadores de comparação determinam uma situação onde o computador deve comparar os elementos envolvidos na operação em relação a igualdade entre eles, ou o tipo de diferença (se um é menor ou maior ou menor que o outro).

O `LSS` que usamos na seção anterior é um operador de comparação. Ele e os outros disponíveis na linguagem são listados abaixo:

* **EQU** – Igual a - Retorna verdadeiro se os valores forem iguais. 
* **NEQ** - Não é igual a - Retorna verdadeiro apenas se os valores forem diferentes.
* **LSS** - Menor que - Retorna verdadeiro se o valor a esquerda do operador for menor que o da direita.
* **LEQ** – Menor ou igual a - Retorna verdadeiro se o valor a esquerda for menor ou igual ao valor a direita.
* **GTR** – Maior que -  Retorna verdadeiro se o valor a esquerda do operador for maior que o da direita
* **GEQ** – Maior ou igual a - Retorna verdadeiro se o valor a esquerda do operador for maior ou igual ao valor a direita.

Na presença de cada um desses operadores, se a condição não satisfazer o requisito que a torna verdadeira, será falso. Então, se usamos o operador `EQU` e os valores envolvidos na expressão não forem iguais, será retornado.