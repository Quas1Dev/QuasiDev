---
title: Java - Palavras Reservadas
layout: article
permalink: "/java/:title"
description: 'Conheça as palavras que o Java provém para que você possa programar.

  '
categories:
- Java
tags:
- comandos
- palavras-reservadas
- instruções
date: 2022-07-24T13:43:33.778+00:00
lastUpdated: 2022-07-24T13:43:33.060+00:00
author: Fernando Bonfim
excerpt_separator: "<!--more-->"
order: 7
sources:
- title: The Java® Language Specification Java SE 18 Edition
  url: https://docs.oracle.com/javase/specs/jls/se18/jls18.pdf
published: false

---
Nesse texto nós vamos apenas citar quais são as palavras-chave disponíveis no Java, e abordar palavras-chave e palavras reservadas no Java.

## Lista de Palavras-Chave no Java

Toda linguagem de programação provém um conjunto de palavras para os programadores montarem seus programas; elas são chamadas de palavras-chave. Atualmente o Java tem 67 dessas palavras-chave, sendo elas:

<div class="table-container">
<table class="table-model-1">
<thead>
<tr>
<td>abstract</td>
<td>assert</td>
<td>boolean</td>
<td>break</td>
<td>byte</td>
<td>case</td>
</tr>
</thead>
<tbody>
<tr>
<td>catch</td>
<td>char</td>
<td>class</td>
<td>onst</td>
<td>continue</td>
<td>default</td>
</tr>
<tr>
<td>do</td>
<td>double</td>
<td>else</td>
<td>enum</td>
<td>exports</td>
<td>extends</td>
</tr>
<tr>
<td>final</td>
<td>finally</td>
<td>float</td>
<td>for</td>
<td>goto</td>
<td>if</td>
</tr>
<tr>
<td>implements</td>
<td>import</td>
<td>instanceof</td>
<td>int</td>
<td>interface</td>
<td>long</td>
</tr>
<tr>
<td>module</td>
<td>native</td>
<td>new</td>
<td>non-sealed</td>
<td>open</td>
<td>opens</td>
</tr>
<tr>
<td>package</td>
<td>permits</td>
<td>private</td>
<td>protected</td>
<td>provides</td>
<td>public</td>
</tr>
<tr>
<td>record</td>
<td>requires</td>
<td>return</td>
<td>sealed</td>
<td>short</td>
<td>static</td>
</tr>
<tr>
<td>strictfp</td>
<td>super</td>
<td>switch</td>
<td>synchronized</td>
<td>this</td>
<td>throw</td>
</tr>
<tr>
<td>throws</td>
<td>to</td>
<td>transient</td>
<td>transitive</td>
<td>try</td>
<td>uses</td>
</tr>
<tr>
<td>var</td>
<td>void</td>
<td>volatile</td>
<td>while</td>
<td>with</td>
<td>yield</td>
</tr>
</tbody>
</table>
</div>

Junto dos operadores e dos separadores, essas 67 palavras-chaves formam a fundação da linguagem Java. Eles são os blocos de construção que usamos para descrever uma solução para algum problema da vida real em um software.

Cada uma dessas palavras tem algum significado na linguagem. Algumas dependem do contexto, já outras são usadas não podem ser usadas fora da forma como foram pensadas na linguagem.

Por causa do caráter especial desses termos na linguagem, grande parte deles são **palavras reservadas**. Uma palavra reservada é uma palavra especial em linguagem de programação que não pode ser usada como um identificador.

Um identificador é um nome que identifica uma variável, método, ou classe no Java. Esses conceitos serão estudados de forma extensíva nos próximos textos.

Cerca de 51 dessas palavras pertence ao grupo de palavras reservadas. Mas vale saber que, apesar de reservadas, as palavras-chave `const` e `goto` não são usadas. Além disso o _ (underscore) é rservado apenas para impedir que os programadores utilizem esse símbolo para nomear coisas.

As outras 16 são palavras-chave que têm algum significado apenas em contextos específicos, elas são **sensíveis a contexto**.  O contexto é caracterizado pelo que está a volta da palavra em questão. Dependendo do que tem a volta, ou seja, das outras palavras e símbolos da linguagem que estão na mesma declaração, a palavra sensível a contexto pode ou não ter um significado especial.

Observação: cada declaração é delimitada por um ; (ponto e vírgula).

As palavras-chave que não são reservadas são `exports`, `module`, `open`, `opens`, `provides`, `requires`, `to`, `transitive`, `uses`. `with`. `record`. `sealed`, `non-sealed`, `permits`, `yield` e `var`. Essas palavras podem ser usadas como identificador.

***

Esse texto é somente para manter um registro das palavras-chave e fornecer alguma explicação acerca das palavras especiais da linguagem Java.

Daqui em diante nós vamos usar essas palavras para construir programas e começar a mudar o mundo de fato.