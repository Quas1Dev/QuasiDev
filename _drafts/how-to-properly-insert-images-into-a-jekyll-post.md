---
layout: article
title: 'Como Inserir Imagens em uma Página Jekyll?'
description: 'Entenda como inserir imagens de maneira apropriada em Jekyll.'
---

A criação de textos para sites construídos com Jekyll, geralmente, é feito usando Markdown para fazer as marcações necessárias nos posts, tais como a indicação de quais são os parágrafos, onde inserir uma imagem, indicar uma citação, etc. essa linguagem, teoricamente, é mais fácil de integrar ao fluxo de criação textual que a HTM. No entanto, ela não oferece uma sintaxe para definir múltiplas fontes de imagens para o navegador escolher conforme for adequado. 

Nas seções abaixo nós veremos uma maneira de contornar esse problema usando arquivos da pasta \_includes.

## Imagens em Markdown
Existem diferentes sintaxes para inserir uma imagem no 

## A Pasta \_includes

Essa é uma das pastas mais importantes de um projeto Jekyll. Nela, são armazenados documentos com trechos de código HTML que podem ser invocados e combinados em vários documentos diferentes. Geralmente, esses arquivos são inseridos em arquivos da pasta \_layouts, que contém os layouts utilizados para montar as páginas que compõem o site. 

Para importar o conteúdo de um arquivo da pasta \_include, nós usamos a tag ```{% include %}``` da linguagem de modelo Liquid. Para inserir o código de um arquivo nomeado disqus.html que está dentro da pasta \_include, por exemplo, nós podemos escrever o comando 

~~~ liquid
{% include disqus.html %}
~~~

no documento que deve receber o código. 

Uma característica importante dos arquivos include é que nós podemos passar parâmetros para esses arquivos. Esses parâmetros podem ser acessados e inseridos onde for necessário acessando os atributos do objeto ```{{ include }}``` da linguagem Liquid. Funciona assim: na tag include, inserimos, além do nome do arquivo include que será inserido na página, os parâmetros necessários na forma ```nome-do-parâmetro="parâmetro"```. Por exemplo, em um arquivo chamado link.html que contém a estrutura de um link para uma página externa ao site. Como no exemplo abaixo.

~~~ html
<a href="{{ include.url }}" target="_blank" rel="noopener nofollow norefer"> {{ include.text }}</a>
~~~

Para chamar esse conteúdo em um post, por exemplo, nós usamos o comando abaixo.

``` html
{% include link.html text="texto do link" url="https:\\exemplo.com"  %}
```

Nesse exemplo, o endereço para a página será inserido onde ```{{ include.url }}``` está localizado, enquanto a partícula "texto do link" será inserida onde está o código Liquid ```{{ include.text }}```.




~~~ html
{% if include.align == "center" %}
<figure class="{{ include.align }}">

{% else %}
<figure class="{{ include.align }}">
  <div>
{% endif %}
  <picture class="image lazy">
    {% if include.jpg %}
    <source srcset="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-srcset="{% if page.images %}{{page.images}}{% endif %}{{ include.png }}" type="image/jpeg" />
    {% endif %}

    {% if include.png %}
    <source srcset="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-srcset="{% if page.images %}{{page.images}}{% endif %}{{ include.png }}" type="image/png" />
    {% endif %}

    {% if include.webp %}
    <source srcset="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-srcset="{% if page.images %}{{page.images}}{% endif %}{{ include.webp }}" type="image/webp"/>
    {% endif %}
        
    <img src="{% if page.images %}{{page.images}}{% endif %}{% if include.png %} {{ include.png }} {% else %} {{ include.jpg }} {% endif %}" alt="{% if include.alt %} {{ include.alt }}{% endif %}" class="image" />
  </picture>

  {% unless include.align == "center" %}
  </div>
  {% endunless %}

  {% if include.caption %}
  <figcaption>{{ include.caption }}</figcaption>
  {% endif %}
</figure>
~~~