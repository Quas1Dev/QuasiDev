---
layout: article
title: 'Jekyll: usando includes para inserir imagens'
description: Entenda como inserir imagens de maneira apropriada em Jekyll.
permalink: "/webdev/:title"
categories:
- Desenvolvimento Web
tags: jekyll, imagem, include, picture
date: 2022-01-19T14:40:00.000+00:00
lastUpdated: 2022-01-19T14:40:00.000+00:00
author: Fernando Bonfim
excerpt_separator: "<!--more-->"

---
A criação de textos para sites construídos com Jekyll, geralmente, é feito usando Markdown para fazer as marcações necessárias nos posts, tais como a indicação de quais são os parágrafos, onde inserir uma imagem, indicar uma citação, etc. essa linguagem, teoricamente, é mais fácil de integrar ao fluxo de criação textual que a HTM. No entanto, ela não oferece uma sintaxe para definir múltiplas fontes de imagens para o navegador escolher conforme for adequado.
<!--more-->

Nas seções abaixo nós veremos uma maneira de contornar esse problema usando arquivos da pasta _includes.

## Imagens em markdown

Existem diferentes sintaxes para inserir uma imagem em um post usando Markdown. A primeira inclui o texto alternativo, o endereço para a imagem e o título na mesma linha. O texto alternativo é o texto que será inserido no atributo `alt` da imagem. O endereço será para o atributo `src`. E o título será o valor para o atributo `title` da imagem.

``` markdown
![Texto descritivo da imagem](link-para-a-imagem "Título para a imagem.")
```

O trecho acima é traduzido para a seguinte marcação HTML:

``` html
<p><img src="link-para-a-imagem" alt="Texto descritivo da imagem" title="Titulo para a imagem." /></p>
```

Nota: o título é opcional, mas o texto alternativo sempre deve ser incluído.

Outra opção de abordagem é incluir o texto alternativo em uma linha, e especificar o link da imagem e o título em outra.

``` markdown
![Texto descritivo da imagem][Texto descritivo da imagem]

Pode haver mais conteúdo aqui...

[Texto descritivo da imagem]: link-para-a-imagem "Título para a imagem."
```

O código HTML gerado pelo trecho acima é o seguinte:

``` html
<p><img src="link-para-a-imagem" alt="Texto descritivo da imagem" title="Titulo para a imagem." /></p>
<p> Pode haver mais conteúdo aqui...</p>
```

Usando o atributo {% include postLink.html text="`loading`" url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading" %} é possível adicionar a técnica de lazy loading, que consiste em carregar uma imagem somente quando ela estiver próximo da área visível para o usuário. Para inserir atributos em elementos na versão do Markdown utilizada no Jekyll, nós colocamos marcação `atributo1="valor" atributo2="valor" ... atributoN="valor"` logo após a especificação do endereço da imagem. Por exemplo:

``` markdown
![Texto descritivo da imagem](link-para-a-imagem "Título para a imagem."){: loading="lazy" }
```

Resultado em HTML é:

``` html
<p><img src="link-para-a-imagem" alt="Texto descritivo da imagem" title="Titulo para a imagem." loading="lazy"></p>
```

Como podemos definir atributos usando Markdown, nós podemos usar o `srcset` e `sizes` para especificar imagens diferentes para cada largura do viewport (a área do navegador onde a página é visível para o usuário). O trecho abaixo determina duas versões diferentes da mesma imagem. Uma será carregada sempre que a largura do viewport for menor ou igual a 750px. A outra será carregada para qualquer outra largura do viewport.

``` markdown
![Texto descritivo da imagem](link-para-a-imagem "Título para a imagem."){: loading="lazy" srcset="imagens/small-image.png 750w, imagens/big-image.png 1200w" sizes="(max-width: 750px) 750px, 1200px"}
```

Dessa vez, o HTML gerado é um pouco maior:

``` html
<p><img src="link-para-a-imagem" alt="Texto descritivo da imagem" title="Titulo para a imagem." loading="lazy" srcset="imagens/small-image.png 700w, imagens/big-image.png 1200w" sizes="(max-width: 750px) 750px, 1200px" /></p>
```

A estrutura que o Markdown nos permite usar é sem dúvida bem útil. Com uma marcação um pouco mais enxuta que o HTML, nós conseguimos incluir uma imagem no post, e usar a técnica de lazy loading, que deixa o carregamento da página mais rápido. Contudo, ela ainda é complicada quando precisamos de um elemento mais complexo, como nos casos onde `srcset` e `sizes` são necessários, ou quando precisamos de classes específicas para a imagem.

Além disso, não é possível especificar múltiplas imagens com diferentes extensões para a mesma mesma largura de tela. Em HTML, faríamos isso usando as tags {% include postLink.html text="`<picture>`" url="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/picture" %} e {% include postLink.html text="`<source>`" url="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Source" %}, que não possuem equivalentes em Markdown. Pelo menos na versão aceita em Jekyll.

Uma possível solução é incorporar código HTML diretamente no documento .md, inserindo uma estrutura com `<picture>`s e `<source>`s para cada imagem **que precisa de uma formatação especial**.

Um documento escrito dessa forma pode se parecer com o seguinte:

``` markdown
---
layout: post
title: 'Artigo Aleatório'
---
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<picture>
  <source srcset="image.jpg" type="image/jpg" media="(min-width: 1000px)">
  <source srcset="image.webp" type="image/webp" media="screen and (min-width: 800px)">
  <img src="image.jpg" alt="Texto descritivo."/>
</picture>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<picture>
  <source srcset="image2.jpg" type="image/jpg" media="(min-width: 1000px)">
  <source srcset="image2.webp" type="image/webp" media="screen and (min-width: 800px)">
  <img src="image2.jpg" alt="Texto descritivo."/>
</picture>
```

Apesar de ser completamente válido, para alguns desenvolvedores digitar tudo isso pode ser cansativo. Além disso, com um comando tão longo é muito fácil deixar escapar algum detalhe importante, e o documento ainda fica mais difícil de ler. Contudo, para situações como essa, existe uma solução em Jekyll envolvendo os arquivos include.

## A pasta _includes

Essa é uma das pastas mais importantes de um projeto Jekyll. Nela, são armazenados documentos que misturam HTML com {% include postLink.html text="Liquid" url="https://shopify.github.io/liquid/ " %}, que podem ser invocados e combinados em vários documentos diferentes. Esses arquivos são comumente chamados de arquivos include ou parciais.

Geralmente, o conteúdo desses arquivos são inseridos em documentos da pasta _layouts, que são os arquivos que efetivamente armazenam os templates utilizados para montar as páginas que compõem o site.

Para importar o conteúdo de um include file, nós usamos a tag `include` da linguagem de modelo Liquid, com a sintaxe {% raw %}`{% include nome-do-arquivo.html %}`{% endraw %}. Para inserir o código de um arquivo nomeado disqus.html que está dentro da pasta _include, por exemplo, nós podemos escrever o comando {% raw %}`{% include disqus.html %}`{% endraw %} no documento que deve receber o código.

{% raw %}

``` html
<!DOCTYPE html>
<html lang="pt-br" dir="ltr" itemscope itemtype="http://schema.org/WebPage">
  <head>
    {% include metadata.html %} <!-- Incluí o conteúdo do arquivo metadata.html aqui -->
  </head>
  <body>
    <div id="pg-container">
      {% include header.html %} <!-- Incluí o conteúdo do arquivo header.html aqui -->
      {{ content }}
      {% include footer.html %} <!-- Incluí o conteúdo do arquivo footer.html aqui -->
      <button id="go-to-top-button" title="Voltar ao Topo">
        <i class="fas fa-chevron-up"></i>
      </button>
    </div>
    {% include disqus.html %} <!-- Inclui o conteúdo do arquivo disqus.html aqui -->
  </body>
</html>
```

{% endraw %}

Uma característica importante dos arquivos include é que nós podemos passar parâmetros para esses arquivos. Esses parâmetros podem ser acessados e inseridos onde for necessário acessando os atributos do objeto {% raw %}`{{ include }}`{% endraw %} da linguagem Liquid. Funciona assim: na tag `include`, inserimos, além do nome do arquivo include que será inserido na página, os parâmetros necessários na forma `parâmetro="valor"`.

Por exemplo, considere o trecho de código a seguir que está em um arquivo chamado link.html na pasta _includes.

{% raw %}

``` html
<a href="{{ include.url }}" target="_blank" rel="noopener nofollow noreferrer"> {{ include.text }}</a>
```

{% endraw %}

Essa estrutura deve ser usada para criar links para páginas externas ao site. Desse modo, sempre que um novo link for criado em um post nós podemos usar o comando

{% raw %}

``` liquid
{% include link.html text="texto do link" url="https:\\exemplo.com"  %}
```

{% endraw %}

para invocar o código HTML do include file link.html devidamente preenchido.

Nesse exemplo, o endereço para a página é passado com o parâmetro `url`, e o texto do link é passado pelo parâmetro `text`. No documento link.html, são usados os comandos {% raw %}`{{ include.url }}`{% endraw %} e {% raw %}`{% include.text %}`{% endraw %} para acessar o valor desses parâmetros. Desse modo, o valor de `url` será incluído na estrutura do elemento `<a>` como o valor de seu atributo `href`, enquanto o valor de `text` é colocado entre as tags `<a>` e `</a>`.

## Usando arquivos include para inserir imagens

Agora que já sabemos como um include file funciona, e como usá-lo com parâmetros, vamos criar um para inserir imagens.

O nosso objetivo é ter várias versões de uma mesma imagem, das quais o navegador deverá escolher a mais adequada de acordo com o suporte a uma extensão específica e o tamanho da tela. Nesse caso, queremos uma estrutura que nos permita especificar um conjunto de imagens WebP e PNG. A imagem terá um valor para o atributo `alt`.

Para múltiplas imagens, nós podemos usar as tags `<picture>` e `source`. Os parâmetros serão:

`url` - O caminho para a imagem;
`caption` - Uma legenda para imagem que vai aparecer, opcionalmente, debaixo dela;
`alt` - Um texto descritivo para a imagem.

Na pasta _includes do projeto, crie um novo documento com o seguinte código:

{% raw %}

``` html
<figure class="image-container">
  <picture class="image">
      <!-- Adiciona uma versão WebP da imagem -->
      <source srcset="{{ include.url }}.webp" type="image/webp"/>

      <!-- Adiciona uma versão PNG da imagem -->
      <source srcset="{{ include.url }}.png" type="image/png" />

      <!-- Adiciona a versão PNG da imagem como padrão -->
      <img src="{{ include.url }}.png" alt="{{ include.alt }} " class="image" loading="lazy"/>
    </picture>
  </div>

  <!-- Se houver, inclui a legenda -->
  {% if include.caption %}  
    <figcaption> {{ include.caption }} </figcaption>
  {% endif %}
</figure>
```

{% endraw %}

O fragmento de código usado no exemplo é bem simples. É criado um elemento `<picture>` que especifica duas imagens alternativas, uma no formato WebP e a outra no formato PNG.

Os links são formados a partir do endereço da imagem, que é enviado como valor do parâmetro `url`. Nesse caso, estamos assumindo que o valor desse parâmetro não vai conter a extensão da imagem, apenas o caminho até a pasta onde ela está e o nome do arquivo.

O texto alternativo da imagem sempre é colocado na tag `<img>`. Apesar de ser explicitamente escrito apenas nessa tag, esse texto vale para qualquer opção escolhida.

A legenda da imagem é adicionada usando o `<figcaption>` apenas se for especificado. Ou seja, se por acaso o parâmetro `caption` não for definido, o trecho {% raw %}`<figure> {{ include.caption }} </figure>`{% endraw %} é simplesmente ignorado.

Para invocar esse documento nós podemos escrever algo como

{% raw %}

``` liquid
{% include img.html url="assets/imgs/nome-da-imagem" alt="Texto alternativo" caption="Legenda da imagem" %}
```

{% endraw %}

Depois que esse trecho é executado, o seguinte HTML é gerado:

``` html
<figure class="image-container">
  <picture class="image">
      <!-- Adiciona uma versão WebP da imagem -->
      <source srcset="assets/imgs/nome-da-imagem.webp" type="image/webp"/>

      <!-- Adiciona uma versão PNG da imagem -->
      <source srcset="assets/imgs/nome-da-imagem.png" type="image/png" />

      <!-- Adiciona a versão PNG da imagem como padrão -->
      <img src="assets/imgs/nome-da-imagem.png" alt="Texto alternativo" class="image" loading="lazy"/>
    </picture>
  </div>
    <!-- Se houver, inclui a legenda -->
    <figcaption> Legenda da imagem </figcaption>
</figure>
```

Esse código pode ficar mais complexo conforme a sua necessidade. Por exemplo, podemos adicionar um novo parâmetro que permita especificar como a imagem deve ser alinhada, como no fragmento abaixo:

{% raw %}

``` html
<figure class="image-container {{ include.align }}">
  <picture class="image">
      <!-- Adiciona uma versão WebP da imagem -->
      <source srcset="{{ include.url }}.webp" type="image/webp"/>

      <!-- Adiciona uma versão PNG da imagem -->
      <source srcset="{{ include.url }}.png" type="image/png" />

      <!-- Adiciona a versão PNG da imagem como padrão -->
      <img src="{{ include.url }}.png" alt="{{ include.alt }} " class="image" loading="lazy"/>
    </picture>
  </div>

  <!-- Se houver, inclui a legenda -->
  {% if include.caption %}  
    <figure> {{ include.caption }} </figure>
  {% endif %}
</figure>
```

{% endraw %}

Nesse exemplo, nós usamos o valor de um parâmetro chamado `align` como uma classe. Com isso, podemos definir estilos CSS que posicionam a imagem de acordo com o valor especificado. A folha de estilo abaixo centraliza a imagem se o valor de `align` for center.

``` css
/* Centraliza a imagem */
.center {
  width: 65%;
  height: auto;
  margin: 10px auto;
}

/* Configura a imagem para ocupar todo o contêiner */
.image{
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain; /* Evita distorção ao redimensionar */
}

/* Configura a aparência da Legenda */
.img-caption {
  text-align: center;
  font: italic helvetica, monospace;
  color: #666;
  padding: 0 3px;
}
```

***

Como pode ver, os arquivos include nos permitem criar inserir imagens com estruturas HTML bem complexas de maneira bem simples. Esses arquivos podem ser usados em muitas outras situações, como por exemplo inserir {% include postLink.html text="CSS crítico" url="https://web.dev/i18n/pt/extract-critical-css/" %} inline nas suas paginas. Esse é um dos recursos fundamentais do Jekyll, e você pode saber mais sobre ela na {% include postLink.html text="documentação oficial" url="https://jekyllrb.com/docs/includes/" %}.

É importante notar que essa solução não pode ser usada para todas as imagens que forem incluídas na página. Essa técnica pode diminuir a velocidade de construção do site. Use apenas para imagens que precisam ou diminua o número de imagens em uma página.

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8207192325867568" crossorigin="anonymous"></script>
