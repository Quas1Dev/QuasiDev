---
layout: article
title: 'Imagens em Jekyll'
description: 'Entenda como inserir imagens de maneira apropriada em Jekyll.'
---

A criação de textos para sites construídos com Jekyll, geralmente, é feito usando Markdown para fazer as marcações necessárias nos posts, tais como a indicação de quais são os parágrafos, onde inserir uma imagem, indicar uma citação, etc. essa linguagem, teoricamente, é mais fácil de integrar ao fluxo de criação textual que a HTM. No entanto, ela não oferece uma sintaxe para definir múltiplas fontes de imagens para o navegador escolher conforme for adequado. 

Nas seções abaixo nós veremos uma maneira de contornar esse problema usando arquivos da pasta \_includes.

## Imagens em Markdown
Existem diferentes sintaxes para inserir uma imagem em um post usando Markdown. A primeira inclui o texto alternativo, o endereço para a imagem e o titulo na mesma linha. O texto alternativo é o texto que será inserido no atributo ```alt``` da imagem. O endereço será para o atributo ```src```. E o titulo será o valor para o atributo ```title``` da imagem.

~~~ markdown
![Texto descritivo da imagem](link-para-a-imagem "Titulo para a imagem.")
~~~

O trecho acima é traduzido para a seguinte marcação HTML:

~~~ html
<p><img src="link-para-a-imagem" alt="Texto descritivo da imagem" title="Titulo para a imagem." /></p>
~~~

Nota: o titulo é opcional, mas o texto alternativo sempre deve ser incluído.

Outra opção de abordagem é incluir o texto alternativo em uma linha, e especificar o link da imagem e o titulo em outra.

~~~ markdown
![Texto descritivo da imagem][Texto descritivo da imagem]

Pode haver mais conteúdo aqui...

[Texto descritivo da imagem]: link-para-a-imagem "Titulo para a imagem."
~~~

O código HTML gerado pelo trecho acima é o seguinte:
~~~ html
<p><img src="link-para-a-imagem" alt="Texto descritivo da imagem" title="Titulo para a imagem." /></p>
<p> Pode haver mais conteúdo aqui...</p>
~~~

Usando o atributo ```loading``` é possível adicionar a técnica de lazy loading, que consiste em carregar uma imagem somente quando ela estiver próximo da área visível para o usuário. Para inserir atributos em elementos na versão do Markdown utilizada no Jekyll nós colocamos marcação ```{: atributo1="valor" atributo2="valor" ... atributoN="valor"}``` logo após a definição da imagem. Por exemplo:

~~~ markdown
![Texto descritivo da imagem](link-para-a-imagem "Titulo para a imagem."){: loading="lazy" }
~~~

Resultado em HTML é:

~~~ html
<p><img src="link-para-a-imagem" alt="Texto descritivo da imagem" title="Titulo para a imagem." loading="lazy"></p>
~~~

Como podemos definir atributos usando Markdown, nós podemos usar o ```srcset``` e ```sizes``` para especificar imagens diferentes para cada largura do viewport (a área do navegador onde a página é visível para o usuário). O trecho abaixo determina duas versões diferentes da mesma imagem. Uma será carregada sempre que a largura do viewport for menor ou igual a 750px. A outra será carregada para qualquer outra largura do viewport. 

~~~ markdown
![Texto descritivo da imagem](link-para-a-imagem "Titulo para a imagem."){: loading="lazy" srcset="imagens/small-image.png 750w, imagens/big-image.png 1200w" sizes="(max-width: 750px) 750px, 1200px"}
~~~

Dess vez, o HTML gerado é um pouco maior:

~~~ html
<p><img src="link-para-a-imagem" alt="Texto descritivo da imagem" title="Titulo para a imagem." loading="lazy" srcset="imagens/small-image.png 700w, imagens/big-image.png 1200w" sizes="(max-width: 750px) 750px, 1200px" /></p>
~~~

A estrutura que o Markdown nos permite usar é sem dúvida bem útil. Com uma marcação um pouco mais enxuta que o HTML, nós conseguimos incluir uma imagem no post, e usar a técnica de lazy loading, que deixa o carregamento da página mais rápido. Contudo, ela ainda é complicada quando precisamos de um elemento mais complexo, como nos casos onde ```srcset``` e ```sizes``` são necessários, ou quando precisamos de classes especificas para a imagem.

Além disso, não é possível especificar múltiplas imagens com diferentes extensões para a mesma mesma largura de tela. Em HTML, faríamos isso usando as tags ```<picture>``` e ```<source>```, que não possuem equivalentes em Markdown. Pelo menos na versão aceita em Jekyll.

Uma possível solução é incorporar código HTML diretamente no documento .md, inserindo uma estrutura com ```<picture>```s e ```<source>```s para cada imagem.

Um documento escrito dessa forma pode se parecer com o seguinte:

~~~ markdown
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
  <source srcset="image.webp" type="image/wewbp" media="screen and (min-width: 800px)">
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
  <source srcset="image2.webp" type="image/wewbp" media="screen and (min-width: 800px)">
  <img src="image2.jpg" alt="Texto descritivo."/>
</picture>
~~~

Apesar de ser completamente válido, para alguns desenvolvedores digitar tudo isso repetidamente para cada imagem pode ser cansativo. Somado a isso, o documento fica mais difícil de ler e editar. Para situações como essa, existe uma solução mais adequada em Jekyll envolvendo os arquivos include.

## A Pasta \_includes

Essa é uma das pastas mais importantes de um projeto Jekyll. Nela, são armazenados documentos que misturam HTML com Liquid, que podem ser invocados e combinados em vários documentos diferentes. Esses arquivos são comummente chamados de include files (ou arquivos include). 

Geralmente, o conteúdo desses arquivos são inseridos em documentos da pasta \_layouts, que são os arquivos que efetivamente armazenam os templates utilizados para montar as páginas que compõem o site.

Para importar o conteúdo de um include file, nós usamos a tag ```include``` da linguagem de modelo Liquid, com a sintaxe {% raw %}```{% include nome-do-arquivo.html %}```{% endraw %}. Para inserir o código de um arquivo nomeado disqus.html que está dentro da pasta \_include, por exemplo, nós podemos escrever o comando {% raw %}```{% include disqus.html %}```{% endraw %} no documento que deve receber o código.

{% raw %}
~~~ HTML
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
~~~
{% endraw %}

Uma característica importante dos arquivos include é que nós podemos passar parâmetros para esses arquivos. Esses parâmetros podem ser acessados e inseridos onde for necessário acessando os atributos do objeto {% raw %}```{{ include }}```{% endraw %} da linguagem Liquid. Funciona assim: na tag ```include```, inserimos, além do nome do arquivo include que será inserido na página, os parâmetros necessários na forma ```parâmetro="valor"```. 

Por exemplo, considere o trecho de código a seguir está em um arquivo chamado link.html na pasta \_includes.

{% raw %}
~~~ html
<a href="{{ include.url }}" target="_blank" rel="noopener nofollow noreferrer"> {{ include.text }}</a>
~~~
{% endraw %}

Essa estrutura deve ser usada para criar um links para páginas externas ao site. Desse modo, sempre que um novo link for criado em um post nós podemos usar o comando

{% raw %}
``` liquid
{% include link.html text="texto do link" url="https:\\exemplo.com"  %}
```
{% endraw %}

para invocar o código HTML do include file link.html devidamente preenchido.

Nesse exemplo, o endereço para a página é passado com o parâmetro ```url```, e o texto do link é passado pelo parâmetro ```text```. No documento link.html, são usados os comandos {% raw %}```{{ include.url }}```{% endraw %} e {% raw %}```{% include.text %}```{% endraw %} para acessar o valor desses parâmetros. Desse modo, o valor de ```url``` será incluído na estrutura do elemento ```<a>``` como o valor de seu atributo ```href```, enquanto o valor de ```text``` é colocado entre as tags ```<a>``` e ```</a>```.

## Usando Include Files Para Inserir Imagens

Agora que já sabemos como um include file funciona, e como usa-lo com parâmetros, vamos criar um para inserir imagens. 

O nosso objetivo é ter varias versões de uma mesma imagem, das quais o navegador deverá escolher a mais adequada de acordo com o suporte a uma extensão especifica e o tamanho da tela. Nesse caso, queremos uma estrutura que nos permita especificar um conjunto de imagens WebP e PNG. A imagem terá um valor para o atributo ```alt```. 

Para múltiplas imagens, nós podemos usar as tags ```<picture>``` e ```source```. Os parâmetros serão:

```url``` - O caminho para a imagem;
```align``` - Servirá como um indicador de como queremos alinhar a imagem na página;
```caption``` - Uma legenda para imagem que vai aparecer, opcionalmente, debaixo dela;
```alt``` - Um texto descritivo para a imagem.


Na pasta \_includes do projeto, crie um novo documento com o seguinte código:

~~~ html
{% if include.align == "center" %}
<div class="{{ include.align }}">

{% else %}
<div class="{{ include.align }}">
  <div class="img-ajuster">
{% endif %}
  <picture class="image lazy">
    {% if include.webp %}
    <source srcset="{{ include.url }}.webp" type="image/webp"/>
    {% endif %}

    {% if include.png %}
    <source srcset="{{ include.url }}.png" type="image/png" />
    {% endif %}
        
    <img src="{{ include.png }}" alt="{{ include.alt }} " class="image" />
  </picture>

  {% unless include.align == "center" %}
  </div>
  {% endunless %}

  {% if include.caption %}
  <div class="img-caption">{{ include.caption }}</div>
  {% endif %}
</div>
~~~


{% raw %}
~~~ html
{% if include.align == "center" %}
<div class="{{ include.align }}">

{% else %}
<div class="{{ include.align }}">
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
  <div class="caption">{{ include.caption }}</div>
  {% endif %}
</div>
~~~
{% endraw %}