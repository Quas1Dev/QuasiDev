---
layout: article
categories:
  - batch
tags:
  - GOTO
  - Rótulos
  - Controle do Fluxo
date: 2022-10-23T14:34:08.000Z
lastUpdated: 2022-10-23T14:34:08.000Z
excerpt_separator: <!--more-->
order: 9
title: Batch - Rótulos e GOTO
description: >-
  Nessa postagem nós vamos aprender a utilizar o comando GOTO e rótulos para
  dobrar o fluxo de execução a nossa vontade.
permalink: 'batch/:title'
author: Fernando Bonfim
sources: []
secondary_sources: []
published: false
_template: site_content_post
---















Inexistente em linguagens de programação mais atuais, ou pelo menos nas mais usadas, a declaração de desvio incondicional GOTO continua existindo na linguagem Batch, que é bem antiga.  Como um comando existente em Batch, vale a pena saber como ele funciona.

## Sintaxe

A sintaxe para usar o comando GOTO é a seguinte:

    GOTO <rótulo>

Em que <rótulo> deve ser substituído por um identificador válido na linguagem. Esse identificador é uma palavra que marca uma posição especifica no código.

Uma vez que o `goto <rótulo>` é encontrado, a execução do programa continua a partir do ponto marcado pelo rótulo. Podemos olhar um código curtinho em Batch só para ilustrar do que estamos falando:

    @ECHO off
    
    ECHO Um Programa em Batch.
    
    GOTO continuacao
     
    ECHO Essa linha não será executada.
    
    :continuacao
    
    ECHO Oi! Eu sou um programa escrito em Batch.
    
    PAUSE

No fragmento acima, assim que o interpretador chega na linha com `GOTO continuacao`, o controle do programa passa para a primeira linha após o rótulo `:continuacao`. Desse modo, o fluxo de execução do programa é desviado sem que nenhuma condição tenha de ser satisfeita, como e o caso da estrutura de decisão `IF`

O rótulo pode aparecer antes ou depois do comando `GOTO`. Se o rótulo vem antes um ciclo infinito será criado. Para decidir quando quebrar esse ciclo, nós podemos usar o `IF`.

    @ECHO OFF
    :repetir
    ECHO Início do ciclo
    
    goto repetir
    PAUSE

Essa forma de criação de ciclos difere do uso do comando FOR, já que não segue uma sintaxe especifica. É você o responsável por definir em que ponto o ciclo pode ser quebrado.

It is possible to simulate repetition control structures with a GOTO to repeat/loop and the IF conditional statement to decide when to break out of the loop. This method, unlike using the FOR keyword, is not really structured and does not have to follow a certain syntax. It is up to you how you structure your code to achieve the repetition and how to break out of it. In the following example, I demonstrate how to do forward counting and backward counting (count-gotoif.bat):

These problems follow directly from a goto’s ability to force any program statement to follow any other in execution sequence, regardless of whether that statement precedes or follows the previously executed statement in textual order. Readability is best when the execution order of statements in a program is nearly the same as the order in which they appear—in our case, this would mean top to bottom, which is the order to which we are accustomed. Thus, restricting gotos so they can transfer control only downward in a program partially alleviates the problem. It allows gotos to transfer control around code sections in response to errors or unusual conditions but disallows their use to build any sort of loop.
