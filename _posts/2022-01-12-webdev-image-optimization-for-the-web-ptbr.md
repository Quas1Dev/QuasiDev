---
title: 'Carregamento Rápido de Páginas com Muitas Imagens'
layout: article
permalink: '/web-dev/:title'
description: 'Ter imagens e uma página rápida é possível, e aqui eu explico como você pode fazer isso.'
categories: ["Desenvolvimento Web"]
tags: imagem, otimização, web, pagespeed
lastUpdated: 2022-01-12 00:37:00
author: "Fernando"
excerpt_separator: <!--more-->
sources:
  - title: 'Populating the page: how browsers work - MDN'
    url: 'https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work' 
  - title: 'How Browsers Work: Behind the scenes of modern web browsers - HTML5Rocks'
    url: 'https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#Render_tree_construction'
---

A utilização de imagens para promoção de produtos, demonstração visual de um conceito, atrair o clique do usuário em um certo artigo ou apenas para deixar o look and feel de uma página mais agradável para o usuário, é uma prática comum em grande parte dos websites. Hoje em dia encontramos frequentemente páginas com 20 ou mais imagens em uma única página. 
<!--more-->

Dados do {% include postLink.html text="HTTP Archive" url="https://httparchive.org/reports/page-weight?start=2019_02_01&end=latest&view=list" %} mostram que em média 44,52% do tamanho total de uma página, corresponde a imagens - isso até a data desse post. Em uma página com 1mb no total de recursos carregados, cerca de 445,2kb seriam de imagens.


Em uma situação normal, para exibir o conteúdo de uma página, o navegador precisa antes baixar todos os recursos referenciados durante o documento HTML. Isso inclui, além dos arquivos JS e CSS, todas as imagens linkadas na página. Se tiver 20 imagens, serão baixadas vinte imagens antes que qualquer coisa seja exibida. Enquanto isso, o usuário deve esperar olhando para uma página em branco por alguns segundos, o que pode ser tempo suficiente para que ele desista e procure outro site sobre o assunto.
 
Felizmente temos técnicas e boas práticas que podemos aplicar para evitar esse tipo de problema. Aqui vamos ver algumas maneiras que nos permite ter páginas com carregamento rápido, mesmo com muitas imagens.
 
## Comprima suas Imagens
<dfn>Comprimir uma imagem</dfn> é essencialmente reduzir a quantidade de bits necessários para representá-la aplicando algum método. Para a navegação online isso significa imagens carregadas mais rápido, menos tempo para decodificação, menos recursos de hardware usados, e pode significar economia de dinheiro para usuários com plano de internet que limitam a quantidade de dados que podem ser transferidos.
 
Existem várias ferramentas que são usadas para esse propósito. Temos soluções pagas e gratuitas, disponibilizadas online e para download, e temos algumas que oferecem opções de configuração enquanto outras não. Abaixo eu listo algumas dessas ferramentas:
 
* {% include postLink.html text="Squoosh" url="https://squoosh.app/" %}
* {% include postLink.html text="Compress-or-die" url="https://compress-or-die.com/" %}
* {% include postLink.html text="XnConvert" url="https://www.xnview.com/en/xnconvert/" %} 
* {% include postLink.html text="TinyPNG" url="https://TinyPNG.com/" %} 
* {% include postLink.html text="TinyJPG" url="https://tinyjpg.com/" %}
* {% include postLink.html text="PNGGauntlet" url="https://pnggauntlet.com/" %}
 
Além dessas ferramentas, programas de edição de imagem, como o {% include postLink.html text="Gimp" url="https://www.gimp.org/" %} e o {% include postLink.html text="Photoshop" url="https://www.adobe.com/br/products/photoshop.html" %}, geralmente permitem fazer ajustes nas imagens que serão salvas, o que nos permite obter imagens menores como resultado.
 
Das ferramentas listadas, apenas o TinyPNG e o TinyJPG não oferecem opções para customização do processamento das imagens. Seus criadores preferiram definir uma configuração que é aplicada a todas as imagens que são enviadas. Essas ferramentas também são usadas para gerar arquivos PNG ou JPG apenas.
 
As outras ferramentas oferecem várias opções para configurar a compressão e podem gerar imagens comprimidas em diferentes formatos. Delas, o XnConvert parece ser mais completo. Além de comprimir dezenas de formatos, ele oferece a possibilidade de executar outras transformações nas imagens durante o processo de compressão, tais como recortar, redimensionar, extrair canais, etc. Basta configurar essas opções na aba Ações do programa.
 
Eu, geralmente, utilizo as ferramentas TinyPNG, PNGGauntlet e XnConvert para compressão das minhas imagens PNG. O primeiro utiliza uma técnica que tira um pouco de informação da imagem de forma muito eficiente, produzindo uma imagem bem reduzida. Mesmo tirando um pouco de informação, o resultado continua indistinguível do original. Então vale a pena. 

O resultado do processamento do TinyPNG é então processado pelo PNGGauntlet, que usa técnicas que preservam a imagem como ela está. O resultado não é uma redução tão grande quanto a primeira ferramenta proporciona, mas ajuda a tirar uma gordurinha extra da imagem.
 
Por fim, utilizo o XnConvert para gerar as imagens WebP a partir das imagens PNG disponíveis. Esse é provavelmente o formato das imagens que você vê nesse site, já que a maioria dos navegadores já dão suporte a esse formato.
 
## Converta Suas Imagens Para o Formato WebP ou AVIF
O <dfn>WebP</dfn> é um método de compressão lançado pela {% include postLink.html text="Google no dia 30 de setembro de 2010" url="http://googlecode.blogspot.com/2010/09/webp-new-image-format-for-web.html" %}. Esse formato permite a compressão {% include postLink.html text="lossy e lossless" url="https://youtu.be/v1u-vY6NEmM" %} de forma mais eficiente que os formatos de imagens mais comuns na Web (JPG e PNG), promovendo imagens com a mesma qualidade que podemos conseguir comprimindo com outros métodos, porém com o tamanho reduzido.
 
O <dfn>AVIF</dfn> é outro método de compressão que foi lançado oficialmente em fevereiro de 2019. Assim como com o WebP, as imagens no formato AVIF possibilita tanto a compressão lossy quanto lossless. A compressão lossy desse formato tem se mostrado mais eficiente que a compressão lossy do formato JPG. Esse formato até se sai melhor se comparado ao formato WebP usando a compressão lossy. No entanto, o AVIF ainda não é bom o suficiente para  compressão lossless. Para esses casos, o WebP ainda sai ganhando. Desse modo, escolher AVIF para versões alternativas de imagens JPG, enquanto usa WebP para versões alternativas a imagens PNG, parece ser a melhor opção no momento.
 
Esses formatos são ideais para páginas em websites, já que permitem melhorar a performance sem abrir mão de qualidade. Teste uma página que não tem as imagens otimizadas e veja que uma das recomendações é salvar versões WebP ou AVIF das imagens.
 
## Redimensione suas Imagens
Redimensionar uma imagem significa mudar sua largura e altura, ou seja, mudar suas dimensões. Quando redimensionamos uma imagem para diminuir sua dimensão, também estamos diminuindo o tamanho do arquivo em disco. Se aumentamos as dimensões do mesmo arquivo, também estamos aumentando seu tamanho em disco.
 
Os usuários aproveitam os sites com telas com diferentes dimensões. Podemos salvar uma mesma imagem em tamanhos diferentes e configurar o site de tal forma que o navegador possa escolher qual versão utilizar. Para indicar as imagens alternativas para o navegador, você pode utilizar o atributo ```srcset``` da tag {% include postLink.html text="```<img>```" url="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/img" %} ou a tag {% include postLink.html text="```<picture>```" url="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/picture#especifica%C3%A7%C3%B5es "%}.

## Use a Melhor Imagem para o Dispositivo

Nós podemos usar recursos da linguagem HTML para especificar opções de imagens que podem ser carregadas pelo navegador, ao invés de adicionar apenas uma versão da mesma, como fazemos habitualmente. Assim, aquela que for melhor adequada será carregada, e as outras serão ignoradas. No trecho abaixo, as imagens small-homer.jpg, mid-homer.jpg e big-homer.jpg são alternativas que o navegador pode escolher.

{% highlight html %}
<img srcset="imagens/small-homer.png 380w,
           imagens/mid-homer.png 750w,
           imagens/big-homer.png 2000w"
     sizes="(max-width: 380px) 380px,
          (max-width: 750px) 750px,
                2000px"
 
src="mid-homer.png" alt="Happy Homer" />
{% endhighlight %}

A tag ```<img>``` é usada para inserir uma imagem em um documento HTML. Os atributos usados são descritos abaixo:
 
```srcset```:
Determina um conjunto de imagens das quais o navegador pode escolher uma. Cada imagem é separada por uma virgula. Também é especificado a largura da imagem (em pixels) logo depois do seu nome e antes da vírgula. Esse valor será usado para escolher a imagem apropriada de acordo com os parâmetros no atributo ```size```.
 
```sizes```:
Conjunto de regras que determinam para quais dispositivos mostrar cada imagem. Cada regra é separada por uma vírgula.
 
Em cada regra nós usamos ```max-width``` entre parênteses para determinar até qual largura a tela do navegador deve mostrar a imagem com a largura especificada fora do parênteses. Por exemplo, na primeira regra, determinamos para dispositivos com largura de tela de até 380px (i.e., 380px ou menos) o navegador deve carregar a imagem que tem 380px de largura, que é o small-homer.jpg.
 
Na segunda regra, a imagem de 750px é selecionada para qualquer monitor com 750px ou menos de largura. Contudo, como
 
```src```:
 
Nesse caso, o atributo src está sendo usado como um plano B para navegadores que não suportam o atributo srcset.
 
A tag picture é usada para dar mais opções de controle. Nesse caso, vamos usar para carregar imagens em formatos diferentes.

{% highlight html %}
<picture>
  <source type=”image/webp” srcset=”small-homer.webp”>
  <source type=”image/png” srcset="small-homer.png">
  <img src="homer.png" alt="Happy Homer.">
</picture>
{% endhighlight %}
 
```<picture>``` é um elemento que permite definir múltiplas fontes para o elemento ```<img>``` que ele contém. Pode-se pensar como uma forma de definir mais de um atributo ```srcset``` para uma tag ```<img>```. Cada ```srcset```alternativo é colocado em um elemento ```<source>```. Alguns atributos podem ser adicionados a tag ```<source>``` para determinar qual dos ```srcset``` deve ser escolhido pelo navegador. Os atributos usados são descritos a seguir:
 
```srcset```:
Mesmo funcionamento descrito de quando falamos da tag ```<img>```.
 
```type```:
Informa para o navegador o tipo/formato da(s) imagem(ens) no atributo ``` srcset```. Se o navegador reconhecer o formato indicado, o ```srcset``` correspondente é escolhido.
 
Podemos adicionar um atributo media em cada ```<source>```, para indicar outros parâmetros para ajudar o navegador a escolher qual ```srcset```  selecionar.
 
Tem uma {% include postLink.html text="artigo bem mais extenso no MDN Web Docs" url="https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images" %} que mostra como usar esses elementos e o atributo ```srcset``` para carregar imagens mais adequadas para o dispositivo.
 
## Adiar o Carregamento de Imagens
Alguns conteúdos de uma página ficam visíveis assim que os usuários entram nela. Já o resto dos elementos da página se tornam visíveis apenas se o usuário rolar a página ou acessar outras partes do documento através de links.
 
Para acelerar o carregamento de uma página, convém carregar as imagens que aparecem no começo da página, enquanto as outras aguardam algum gatilho antes de serem carregadas. Esse adiamento da imagem para obter maior rapidez no carregamento de uma página é uma técnica chamada de lazyload.
 
Quando eu comecei a escrever esse artigo lá no começo de 2019, não existia uma solução nativa para implementação dessa ferramenta. Para conseguir o efeito desejado era necessário usar JavaScript puro, ou uma API chamada Intersection Observer para conseguir o efeito. Entretanto, atualmente existe uma forma mais simples de fazer isso com o atributo loading do HTML.
