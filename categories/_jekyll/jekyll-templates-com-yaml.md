---
title: Jekyll - Modelos com YAML
layout: articles
permalink: jekyll/:title
description: Nesse capitulo nós abordaremos o básico das três linguagens que
  formam a base para qualquer site escrito em Jekyll.
categories:
  - jekyll
tags:
  - templates
date: 2022-08-20T09:04:59.645Z
lastUpdated: 2022-08-20T09:05:00.798Z
author: Fernando Bonfim
excerpt_separator: <!--more-->
order: 3
---
A HTML é a linguagem que usamos para montar a estrutura de uma página, essa estrutura é visualmente configurada usando CSS, e por fim temos o JS que deixa as páginas mais dinâmicas. Só com esses três componentes nós já podemos construir qualquer site, mesmo que de maneira totalmente ineficiente. Mas para construir um site em Jekyll também precisamos compreender outras três linguagens: YAML, Markdown, e Liquid. 

O Liquid é usada na criação dos templates usados no site, a YAML fornece uma sintaxe para apresentação de informações sobre a página, e o Markdown substitui o HTML na estruturação do conteúdo textual da página, Nas seções seguintes nós dissecamos cada uma dessas tecnologias.

## Liquid e Templates

O objetivo principal do Jekyll é automatizar a criação de múltiplas páginas, permitindo a criação de sites enormes sem que o programador precise codificar diretamente cada uma delas. A utilização de templates é fundamental nessa empreitada. 

Um template é uma palavra do inglês que denota uma forma, molde ou padrão usado como um guia pra fazer alguma coisa, como a página de um site.  Em Jekyll, um template toma forma de um documento que mistura elementos do HTML e do Liquid. O HTML é usado para montar a estrutura que fará parte de toda página baseada em um determinado template. 

Em meio a marcação HTML nós inserimos trechos de código escritos em Liquid que determina as partes do documento que devem receber conteúdo, e a lógica para a inserção desse conteúdo. Por exemplo, o texto de um post especifico pode ficar dentro de um elemento do HTML chamado `<main>`.

onde com o que 

Nesse documento existem espaços que devem receber conteúdo especifico para cada página. A lógica que determina com o que esses espaços serão preenchidos é determinado usando o Liquid.

Liquid é uma linguagem de 

Liquid is designed to
provide programmatic access and to execute logic within template files without imposing any security risk
on the hosting server. Jekyll uses Liquid to generate a page based on the structure specified in the template.
The template leaves space for content blocks that are inserted into the static page as it is rendering. The final
result is an HTML page that contains content and style elements as if the page was written from scratch. Now
that we have an overall scheme of how Jekyll works, let’s begin with Markdown.



que oferece uma estrutura padrão para guiar a criação de alguma coisa.

 possuindo espaços onde podemos colocar o conteúdo que

<!--StartFragment-->

*A template is a* form, mold or pattern used as *a* guide to make something. Here are some examples of templates: Website design; Creating *a* document; Knitting *a* ...

<!--EndFragment-->

Estruturação de Informações com YAML

Criação de Posts com Markdown