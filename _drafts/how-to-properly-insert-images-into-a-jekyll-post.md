---
layout: article
title: 'Como Inserir Imagens em uma Página Jekyll?'
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

Como podemos definir atributos usando Markdown, nós podemos usar o ```srcset``` e ```sizes``` para especificar imagens diferentes para cada largura do viewport (a área do navegador onde a página é visível para o usuário). O trecho abaixo determina duas versões diferentes da mesma imagem. Uma será carregada sempre que a largura do viewport for menor 

~~~ markdown
![Texto descritivo da imagem](link-para-a-imagem "Titulo para a imagem."){: loading="lazy" srcset="imagens/small-image.png 700w, imagens/big-image.png 1200w" sizes="(max-width: 750px) 750px, 1200px"}
~~~

Dess vez, o HTML gerado é um pouco maior:

~~~ html
<p><img src="link-para-a-imagem" alt="Texto descritivo da imagem" title="Titulo para a imagem." loading="lazy" srcset="imagens/small-image.png 700w, imagens/big-image.png 1200w" sizes="(max-width: 750px) 750px, 1200px" /></p>
~~~

A estrutura que o Markdown nos permite usar é sem dúvida bem útil. Com uma marcação um pouco mais enxuta que o HTML, nós conseguimos incluir uma imagem no post, e ativar uma funcionalidade que deixa o carregamento da página mais rápido. Contudo, ela ainda é complicada quando precisamos de um elemento mais complexo, como quando precisamos dos elementos ```srcset``` e ```sizes```, ou quando precisamos de classes especificas para a imagem.

Além disso, não é possível especificar múltiplas imagens com diferentes extensões par o mesma mesma largura de tela. Em HTML, fariamos isso usando as tags ```<picture>``` e ```<source>```, que não possuem equivalentes em Markdown. Pelo menos na versão aceitas em Jekyll.

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

Essa é uma das pastas mais importantes de um projeto Jekyll. Nela, são armazenados documentos que misturam HTML com Liquid que podem ser invocados e combinados em vários documentos diferentes. Nós podemos chamar esses arquivos de arquivo include. Geralmente, esses arquivos são inseridos em arquivos da pasta \_layouts, que são os arquivos que efetivamente armazenam os templates utilizados para montar as páginas que compõem o site.

Para importar o conteúdo de um arquivo da pasta \_include, nós usamos a tag {% raw %}```{% include %}```{% endraw %} da linguagem de modelo Liquid. Para inserir o código de um arquivo nomeado disqus.html que está dentro da pasta \_include, por exemplo, nós podemos escrever o comando 

{% raw %}
~~~ liquid
{% include disqus.html %}
~~~
{% endraw %}

no documento que deve receber o código. 

Uma característica importante dos arquivos include é que nós podemos passar parâmetros para esses arquivos. Esses parâmetros podem ser acessados e inseridos onde for necessário acessando os atributos do objeto {% raw %}```{{ include }}```{% endraw %} da linguagem Liquid. Funciona assim: na tag include, inserimos, além do nome do arquivo include que será inserido na página, os parâmetros necessários na forma ```nome-do-parâmetro="parâmetro"```. Por exemplo, em um arquivo chamado link.html que contém a estrutura de um link para uma página externa ao site. Como no exemplo abaixo.

{% raw %}
~~~ html
<a href="{{ include.url }}" target="_blank" rel="noopener nofollow norefer"> {{ include.text }}</a>
~~~
{% endraw %}

Para chamar esse conteúdo em um post, por exemplo, nós usamos o comando abaixo.

{% raw %}
``` liquid
{% include link.html text="texto do link" url="https:\\exemplo.com"  %}
```
{% endraw %}

Nesse exemplo, o endereço para a página será inserido onde {% raw %}```{{ include.url }}```{% endraw %} está localizado, enquanto a partícula "texto do link" será inserida onde está o código Liquid {% raw %}```{{ include.text }}```{% endraw %}.




~~~ html
{% raw %}
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
{% endraw %}
~~~