---
title: Jekyll - Liquid, YAML e Markdown
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

Em meio a marcação HTML nós inserimos trechos de código escritos em Liquid que determina as partes do documento que devem receber conteúdo, e a lógica para a inserção desse conteúdo. Por exemplo, o texto de um post especifico pode ficar dentro de um elemento do HTML chamado `<main>`. Um template com tal lógica ficaria mais ou menos assim:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{ page.title }}</title>
</head>
<body>
  {{ page.content }}
</body>
</html>
```

No template acima, `{{ page.content }}` será substituído pelo texto do post de cada página que criamos baseada nele. Também adicionamos o trecho `{{ page.title }}` onde o titulo da página sendo construída é inserido. Vamos ver de onde o Jekyll tira o conteúdo que será colocado em cada um desses locais mais adiante. Antes, vamos discutir um pouco  mais sobre os componentes da linguagem Liquid: Rótulos, objetos e filtros.

### Tags

As <dfn>tags</dfn> são códigos usados para descrever a lógica que determina como uma determinada parte do template deve ser preenchida. As tags do Liquid são muito parecida com comandos em linguagens de programação, como o Java.  Por exemplo, se queremos que as informações de autoria de um texto sejam exibidas somente se a página tiver um autor definido, nós podemos usar a tag `if`, como no trecho abaixo

```
{% if page.author %}
  <div class="">
    
  </div>
{% endif %}
```

Tags are the programmatic logic that provides access to simple statements like if and for . The tags available
in Liquid can be further broken down into four categories, depending on the type of access they provide to
the user. The tags used in Liquid are wrapped in {% insert-tag %} . The first category is control-flow tags;
this is the set of tags that allow Jekyll to determine which block of code should be executed and in what
order. There are four types of control-flow tags and the first type is the if tag. As the name implies, an if tag
executes a block of code only if a certain condition is met. Here is an example of the if tag in action.



### Objetos 



### Filtros



que oferece uma estrutura padrão para guiar a criação de alguma coisa.

 possuindo espaços onde podemos colocar o conteúdo que

<!--StartFragment-->

*A template is a* form, mold or pattern used as *a* guide to make something. Here are some examples of templates: Website design; Creating *a* document; Knitting *a* ...

<!--EndFragment-->

Estruturação de Informações com YAML

Criação de Posts com Markdown