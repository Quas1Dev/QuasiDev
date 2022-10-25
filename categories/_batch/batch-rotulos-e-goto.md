---
layout: article
categories:
- batch
tags:
- GOTO
- Rótulos
- Controle do Fluxo
date: 2022-10-23 14:34:08 +0000
lastUpdated: 2022-10-23 14:34:08 +0000
excerpt_separator: "<!--more-->"
order: 9
title: Batch - Rótulos e GOTO
description: Nessa postagem nós vamos aprender a utilizar o comando GOTO e rótulos
  para dobrar o fluxo de execução a nossa vontade.
permalink: batch/:title
author: Fernando Bonfim
sources: []
secondary_sources: []
published: false

---
Inexistente em linguagens de programação mais atuais, ou pelo menos nas mais usadas, a declaração de desvio incondicional GOTO continua existindo na linguagem Batch.  Como um comando existente em Batch, vale a pena saber como ele funciona. 

## Sintaxe 

A sintaxe para usar o comando GOTO é a seguinte:

    GOTO <rótulo>

Em que <rótulo> deve ser substituído por um identificador válido na linguagem. Esse identificador é uma palavra que marca uma posição especifica no código. 

Uma vez que o `goto <rótulo>` é encontrado, a execução do programa continua a partir do ponto marcado pelo rótulo. Podemos olhar um código curtinho em Batch só para ilustrar do que estamos falando:

    @echo off
    
    ECHO Um Programa em Batch.
    
    GOTO continuacao
    
    ECHO Essa linha não será executada.
    
    :continuacao
    
    ECHO Oi! Eu sou um programa escrito em Batch.
    
    PAUSE

No fragmento acima, assim que o interpretador chega na linha com `GOTO continuacao`, o controle do programa passa para a primeira linha após o rótulo `:continuacao`

O rótulo não precisa aparecer depois do comando `GOTO`. Na verdade, ele pode aparecer em qualquer posição no código.  

It is possible to simulate repetition control structures with a GOTO to repeat/loop and the IF conditional statement to decide when to break out of the loop. This method, unlike using the FOR keyword, is not really structured and does not have to follow a certain syntax. It is up to you how you structure your code to achieve the repetition and how to break out of it. In the following example, I demonstrate how to do forward counting and backward counting (count-gotoif.bat):