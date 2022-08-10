---
title: Batch - Estrutura de Decisão e Comparações
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
date: 2022-08-09T23:08:34.695Z
lastUpdated: 2022-08-09T23:08:35.998Z
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

Existem outros operadores de comparação. 

* **EQU** – Igual a
* **NEQ** - Não é igual a
* **LSS** - Menor que
* **LEQ** – Menor ou igual a
* **GTR** – Maior que
* **GEQ** – Maior ou igual a