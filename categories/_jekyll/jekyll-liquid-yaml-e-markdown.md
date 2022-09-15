---
layout: article
categories: []
tags:
- " Linguagem de Modelo"
- Molde
lastUpdated: 2022-09-11 08:42:53 +0000
excerpt_separator: "<!--more-->"
order: 3
title: Jekyll - Liquid, YAML e Markdown
description: Nesse capitulo nós abordaremos o básico das três linguagens que formam
  a base para qualquer site escrito em Jekyll.
permalink: " jekyll/:title"
date: 2022-09-19 03:00:00 +0000
author: Fernando Bonfim
sources: []
secondary_sources: []
published: false

---
Além da tríade HTML, CSS e JavaScript, a construção de um site construído com Jekyll requer o conhecimento de pelo menos outras duas linguagens: o Liquid e o <abbr title="YAML Ain't a Markup Language">YAML</abbr>. Além dessas, conhecer uma terceira linguagem, o Markdown, pode ser necessário dependendo do tipo de conteúdo do site e também da preferência de quem produz esse conteúdo.

O Liquid é usado na criação dos templates usados no site. O YAML fornece uma maneira de apresentação de informações de modo estruturado para munir o Jekyll dos dados que ele precisa para montar nossas páginas. O Markdown substitui o HTML na estruturação do conteúdo textual da página, Nas seções seguintes nós dissecamos cada uma dessas tecnologias.

## Liquid e Templates

O principal objetivo do Jekyll é **automatizar** a criação de múltiplas páginas, permitindo a criação de sites enormes sem que o desenvolvedor precise codificar manualmente cada uma delas. A utilização de templates é fundamental para esse propósito.

<dfn>Template</dfn> é uma palavra do inglês que denota uma **forma,** **molde ou padrão** usado como um guia para fazer alguma coisa, como a página de um site. Durante esse texto estaremos usando as palavras template e molde como iguais.

Geralmente, um molde apresenta uma estrutura que deve estar presente em um grupo de páginas. Centralizando essa estrutura em um template, e descrevendo o conteúdo especifico de cada página em arquivos próprios, nós podemos simular uma cadeia de montagem que repete o processo de combinar o template com o cada um desses arquivos, gerando como resultado páginas HTML que contém ambos a estrutura comum e o conteúdo especifico de uma determinada página. Na prática, os moldes podem ser combinados com outros moldes também.

Usa-se um programa, que geralmente é referido como processador de modelo, para combinar moldes com dados para gerar uma ou mais páginas. Esse programa entende uma linguagem denominada linguagem de molde (do inglês templating language), que é usada para orientar o gerador no preenchimento do molde. Seguindo essa orientação, o gerador decide como preencher o template para gerar a página em questão.

Em um projeto Jekyll, qualquer arquivo pode conter código escrito em Liquid, o que significa que, teoricamente, qualquer arquivo pode ser um molde. 

Em Jekyll, um molde toma forma de um arquivo que mistura elementos do HTML e do Liquid. O HTML é usado para montar a estrutura que fará parte de toda página baseada em um determinado template. Em meio a marcação HTML nós inserimos trechos de código escritos em Liquid, que é a linguagem modelo em projetos desenvolvidos com Jekyll. Esses trechos podem descrever um raciocínio para a exclusão ou inclusão de elementos em um template (e.g., incluir um link para uma página de contato apenas se essa página existir), ou  eles também marcar pontos onde um conteúdo especifico para a página sendo criada é inserido.

Por exemplo, em um blog, o texto de um post especifico pode ficar envolto em um elemento do HTML chamado `<main>`. Já o titulo do texto pode ser inserido dentro do elemento criado com a tag HTML `<title>` e também na tag `<h1>`. Um template com a lógica permite essa organização ficaria mais ou menos assim:

{% raw %}

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
  <main>
    <h1>{{ page.title }}</h1>
    {{ page.content }}
  </main>
</body>
</html>
```

{% endraw %}

No template acima, {% raw %}`{{ page.content }}`{% endraw %} será substituído pelo texto do post de cada página que criamos baseada nele. Também adicionamos o trecho {% raw %}`{{ page.title }}`{% endraw %} onde o titulo da página sendo construída deve ser inserido. Vamos ver de onde o Jekyll tira o conteúdo que será colocado em cada um desses locais mais adiante. Antes, vamos discutir um pouco mais sobre Liquid e os componentes: Tags, objetos e filtros.

Para constatar como que esse documento pode se comparar a um molde ou template, considere que ele pode ser usado para construir diversas páginas com títulos e conteúdos diferentes.

Como esta:

{% raw %}

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title> Padrões de Design </title>
</head>
<body>
  <main>
    <h1>Padrões de Design</h1>
    Um conjunto de práticas definidos por um programador ou grupo de programadores, e são difundidas como uma biblioteca de soluções para situações problemas comuns na programação.
  
    Apesar de serem espalhados como "melhores práticas" que comprovadamente facilitam o desenvolvimento de um programa, existe uma carência de estudos cientificos que comprovem o impacto positivo quando há adoção dessas práticas. O que resta para a comunidade é adotar as práticas sem questionar conforme é exigido pela empresa na qual trabalha, ou implementar as práticas por iniciativa própria confiando apenas na experiência anedótica de outros programadores influentes.
  </main>
</body>
</html>
```

{% endraw %}

Ou esta:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title> James Webb </title>
</head>
<body>
  <main>
    <h1>James Webb</h1>
    O James Webb é um telescópio espacial usado para observar objetos captando ondas eletromagnéticas no espectro infravermelho. 
  </main>
</body>
</html>
```

Claro que uma página pode ter mais conteúdo que a outra, mas se elas compartilham a mesma estrutura HTML, elas podem ser criadas usando o mesmo template.

### Liquid

<dfn>Liquid</dfn> é uma **linguagem de modelo** criada pela Shopify para escrever os moldes usados na criação de sites de compra em sua plataforma. Apesar de ser pensada para o 

é disponibilizada como um projeto de código aberto no GitHub, o que permite sua adaptação e utilização em outros projetos que precisam de um sistema de templates, como o Jekyll.

Como uma linguagem, ela possui sua própria gramática e vocabulário. Com o vocabulário dessa linguagem nós podemos montar tags, objetos e filtros. Esses recursos são combinados e inseridos em moldes para preenchê-los de forma dinâmica. Até o fim desse texto nós devemos ver a dinamicidade possibilitada pela linguagem na prática. Falamos de cada um deles nas seções seguintes.

### Tags

As <dfn>tags</dfn> são "frases" (escritas com o vocabulário e seguindo um conjunto de regras da linguagem Liquid) que inserem algum raciocínio lógico dentro de um molde. O raciocínio empregado pode determinar coisas como a inclusão ou não de um trecho do template, a repetição de um determinado trecho do template e a atribuição de um valor à uma variável.

As tags do Liquid são muito parecidas com os comandos em linguagens de programação, como o JavaScript.  Por exemplo, se queremos que as informações do autor de um texto sejam exibidas somente se a página tiver um autor definido, nós podemos usar a tag `if`, como no trecho abaixo

{% raw %}

```liquid
{% if page.author %}
  <div class="author_info">
    <!-- Código que será exíbido caso page.author retorne algum valor -->
    <img src="avatar.jpg" alt="Imagem genérica para todos os autores"/>
    {{ page.author }}
    {{ page.author-description }}
  </div>
{% endif %}
```

{% endraw %}

Logo veremos que para determinar se a página tem um autor definido, o Jekyll olha nas informações descritas em um arquivo usando YAML.

Todas as tags são envolvidas com `{%` e `%}`. Algumas delas, como no caso do `if` acima, são compostas por uma parte que inicia a tag e outra que à finaliza. Esse tipo de construção da tag é usada para aquelas que precisam envolver algum conteúdo, exatamente como o `if`.

Nas seções abaixo nós falamos das tags (pelo menos a maioria delas) atualmente disponíveis para uso em Jekyll.

As tags podem ser dividas em quatro categorias, a depender do tipo de controle que elas descrevem: tags de decisão, iteração, templates, e atribuição de variáveis.

#### Tags de Decisão

Nessa categoria estão as tags que permitem o Jekyll determinar qual bloco de código deve ser avaliado e em qual ordem. Estão incluídas nesse conjunto as tags `if`, `elsif`, `else`, `unless`, `case` e `when`. Algumas tags trabalham em conjunto com outra. `elsif` e `else` formam uma parceria com a `if`. Já `when` é usado junto com `case` e `else`.

Tags que definem blocos possuem uma tag de fechamento correspondente. Por exemplo, a tag `if` possuí a tag correspondente `endif`.

A tag `if` condiciona a avaliação de um trecho no molde à uma condição ser verdadeira. A condição é, geralmente, entre o valor de uma variável com um valor especifico.

A sintaxe básica é a seguinte:

    {% if <condição> %}
      Bloco de código que será executado se a condição for verdadeira
    {% endif %}

Onde <condição> deve ser substituído por alguma coisa que pode ser determinada falsa ou verdadeira.

Considere o fragmento

{% raw %}

```liquid
{% if page.type == "post" %}
  <link rel="stylesheet" href="post.min.css">
{% endif %}
```

{% endraw %}

como exemplo. Nele, page.type == "post" é a condição da tag `if`. A condição descrita, nesse caso, se trata de uma comparação entre dois valores: o da variável acessada com page.type, que presumidamente indica o tipo da página, e o texto "post". page.type é usado para acessar a variável **type** do objeto **page**. O objeto page representa a página sendo gerada no momento. Falaremos de objetos e variáveis na seção seguinte.

Se a condição for verdadeira, se page.type retornar o valor "post", o que está sendo envolvido por {% raw %}`{% if page.type == "post" %}` e {% raw %}`{% endif %}`{% endraw %} avaliado. Se for falso, se page.type não retornar o valor "post", o que está sendo envolvido por {% raw %}`{% if page.type == "post" %}`{% endraw %} e {% raw %}`{% endif %}`{% endraw %} será ignorado. O que está entre {% raw %}`{% if page.type == "post" %}`{% endraw %} e {% raw %}`{% endif %}`{% endraw %} pode ser um código HTML, que será incluído ou não no molde (depende do resultado da avaliação da condição), ou outro código Liquid que  será executado ou não (depende do resultado da avaliação da condição).

O importante a se notar no trecho acima é que o link para folha de estilo **post.min.css** é incluído no molde apenas se a `page.type` retornar um texto igual á **"post"**.

Para especificar outros casos que devem ser considerados se a condição especificada na tag `if` for falsa, nós usamos as tags `elseif` e `else`.

{% raw %}

```liquid
<!-- Inclui link se a página for do tipo post -->
{% if page.type == "post" %}
  <link rel="stylesheet" href="post.min.css">
{% elsif page.type == "produto" %} <!-- Inclui link se a página for do tipo produto -->
  <link rel="stylesheet" href="produto.min.css">
{% else %} <!-- Inclui link se a página não for do tipo post ou produto -->
  <link rel="stylesheet" href="resto.min.css"> 
{% endif %}
```

{% endraw %}

Se a condição na tag `if` não for verdadeira, a condição especificada na tag `elsif` será avaliada. Ou seja, se o valor de `page.type` **não** for igual à "post", será verificado se `page.type` retorna "produto". A tag `else` indica um link que será incluído caso nenhuma das alternativas anteriores sejam escolhidas. Se a página não for do tipo produto ou post, um link para a folha de estilo resto.min.cssserá incluído no documento.

Agora nós vamos tratar das tags `case` e `when`. Essas duas tags trabalham em conjunto para construir uma estrutura lógica de decisão com múltiplas condições alternativas. Podemos considerar essa estrutura como uma alternativa à utilização da combinação `if` + `elsif`.

A sintaxe a seguinte:

{% raw %}

    {% case <variável> %}
      {% when <valor1> %}
       Bloco de código a ser avaliado
      {% when <valor2> %}
       Bloco de código a ser avaliado
      ...
      {% when <valorN> %}
       Bloco de código a ser avaliado
    {% endcase %}

{% endraw %}

`case` inicia a estrutura identificando uma variável cujo valor será comparado com o valor em cada tag `when`. Caso a comparação retorne verdadeiro,

Usando essa estrutura para carregar os arquivos post.min.css ou produto.min.css alternativamente, baseado no valor da variável page.type, nós obtemos o seguinte:

{% raw %}

```liquid
{% case page.type %}
  {% when "post" %} 
   <link rel="stylesheet" href="post.min.css">
  {% when "produto" %}
   <link rel="stylesheet" href="produto.min.css">
{% endcase %}
```

{% endraw %}

Nós também podemos incluir a tag `else` no fim para especificar o bloco de código que será avaliado se nenhuma das condições forem atendidas.

```liquid
{% case page.type %}
  {% when "post" %} 
   <link rel="stylesheet" href="post.min.css">
  {% when "produto" %}
   <link rel="stylesheet" href="produto.min.css">
  {% else %}
   <link rel="stylesheet" href="resto.min.css">
{% endcase %}
```

A última tag que nós vamos discutir é a `unless`. Ao contrário da tag `if`, a `unless` condiciona a avaliação de um trecho do template à uma condição não ser atendida.

A sintaxe é a seguinte:

    {% unless <condição> %}
      Bloco de código que será executado se a condição for atendida
    {% endunless %}

#### Tags de Iteração

Nessa categoria estão as tags que permitem o Jekyll determinar a repetição de um bloco de código. Estão incluídas nesse conjunto as tags `for`, `break` e `continue`.

A tag for repete um bloco de código para cada item em um vetor. Um vetor, nesse caso, é uma lista com um ou mais itens.

A sintaxe do comando for é a seguinte:

    {% for <variável> in <vetor> %}
      Bloco de código que será repetido
    {% endfor %}

`<variável>` é o nome da variável que recebe cada item do vetor a cada volta.

    {% for autor in site.autores %}
      {{ author.nome }}
    {% endfor %}

Este trecho de código nos permite percorrer cada um dos autores e obter seu nome. Entretanto, a tag `for` é não discriminante. Se há a necessidade de fazer o loop parar, ou impedi-lo de seguir em frente, nós precisamos de uma condição, e das tags `break` ou `continue`.

#### Tags de Temas

Nessa categoria estão as tags que permitem o Jekyll

determinar a repetição de um bloco de código. Estão incluídas nesse conjunto as tags `for`, `break` e `continue`.

These are a collection of tags that help Jekyll decide which components of the layout and the template to use. The most commonly used theme tag is the include tag. As the name implies, the include tag allows the user to include unique, modular components in a theme or a template. Most of these elements are stored in the includes folder. This tag is immensely useful in almost every single Jekyll theme file, as it allows for modularization and includes only the components that are needed in a particular layout. This tag is ubiquitous in layouts as well because it allows for advanced features such as inheritance to be used in Jekyll files. Let’s spend some time talking about the topic of inheritance in the next section. We have finally completed the first of the Liquid components: tags. The next category is objects

### Objetos

### Filtros

## YAML

Essa propriedade não existe por padrão no Jekyll. Nenhuma página recebe uma classificação de acordo com o seu tipo automaticamente.
{% endraw %}

Exemplo

Note que as tags não aparecem no resultado final, isto é, quando o documento HTML que de fato representa uma página é gerado, ele não contém nenhum código Liquid.