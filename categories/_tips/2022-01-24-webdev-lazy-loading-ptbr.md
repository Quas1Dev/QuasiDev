---
layout: article
title: 'Lazy loading: por que e como adiar o carregamento de imagens?'
description: Se você precisa melhorar a performance do seu site, você precisa entender
  e implementar essa técnica...
permalink: "/webdev/:title"
categories:
- Desenvolvimento Web
tags:
- lazy loading
- loading
- performance
- Desenvolvimento web
- ''
date: 2022-01-24T23:40:00.000+00:00
lastUpdated: 2022-09-29 06:23:00 +0000
author: Fernando Bonfim
excerpt_separator: "<!--more-->"

---
A estrutura de uma página atualmente pode agregar muitos recursos. Além das instruções para montagem, estilização e funcionamento da página ainda temos vídeos, gifs, áudios e principalmente muitas imagens. Uma página comum chega a ter dezenas de um ou mais desses recursos, e todos precisam ser baixados e executados pelo navegador, o que pode agregar ao carregamento do site um tempo absurdo.
<!--more-->

Existem muitas técnicas que podem ser aplicadas nos componentes de uma página que aumentam a sua performance, mas nesse texto vamos focar apenas em adiar o carregamento de imagens. Essa técnica se baseia na ideia de que nem todas as imagens precisam ser carregadas assim que a página é acessada, já que, geralmente,  apenas as que estão no topo serão vistas pelo usuário em um primeiro momento. Desta forma, podemos carregar imagens que aparecem no topo primeiro, enquanto as outras aguardam até que seja acionado um gatilho especifico.

Nas seções seguintes vamos abordar técnicas usadas para implementar esse comportamento.

* Adiar as imagens até que sejam necessárias para o usuário. Você já deve ter ouvido sobre essa técnica com o nome de lazy loading;
* Adiar as imagens até que o conteúdo "mais importante" esteja carregado.

## O que é lazy loading?

<dfn>Lazy Loading</dfn> (carregamento lento ou carregamento preguiçoso) se refere a ideia de esconder um recurso, e carrega-lo somente quando o usuário precisar dele. O recurso pode ser qualquer componente de um site, mas no desenvolvimento web, o Lazy Loading é usado principalmente para imagens.

Essa técnica pode fazer maior diferença em sites com muitas imagens, podendo diminuir consideravelmente o tempo de carregamento da página, e a quantidade de largura de banda gasta pelo usuário, o que significa economia de dinheiro para aqueles que usam planos limitados.

Para entender melhor, vamos pensar em um exemplo. Digamos que um usuário esteja procurando por imagens de cachorrinhos em um banco de imagens, como o [Unsplash](https://unsplash.com){: target="_blank" rel="noreferrer noopener nofollow"}. Caso a página não use a técnica de Lazy Loading ela será carregada com todas as imagens relacionadas com cachorrinhos. Se logo nos primeiros resultados o usuário encontra a imagem ideal, o mais provável é que ele baixe a imagem e feche a página, deixando todas as outras imagens carregadas não visualizadas. No fim o resultado é um usuário feliz, mas com o desperdício dos recursos que foram necessário para carregar todas as imagens da página de uma vez. O Lazy Loading é a solução para esse tipo de problema.

Os métodos de Lazy Loading são os mais utilizados para adiar o carregamento de imagens. No próprio site da Unsplash é possível notar que uma técnica de Lazy Loading é utilizada. Perceba que conforme você sobe a página, as imagens são carregadas no lugar dos retângulos com uma cor. O gatilho (o evento que ativa o carregamento), neste caso, é a aproximação devido a rolagem da página. Quando o usuário estiver chegando perto de uma imagem o navegador é avisado e a imagem é carregada.

## Vantagens e Desvantagens do Lazy loading

As vantagens dessa técnica incluem:

* Carregamento de páginas mais rápido. Isso por que o navegador não precisará carregar todas as imagens de uma vez;
* Recursos de processamento utilizados com maior eficiência, pois se uma imagem não for necessária ela nunca será carregada;
* Usuários mais felizes por não precisarem ficar olhando para uma tela branco, e por consequência Google e outros buscadores podem ranquear sua página mais alto.

Entre as desvantagens podemos apontar:

* Código extra na página (dependendo da técnica escolhida, isso não é um problema);
* Talvez robôs de buscadores (como o Google) tenham dificuldades para rastrear e indexar as imagens não carregadas do modo convencional. Para evitar esse problema você pode fazer um [teste para ter certeza que o Google pode ver a imagem](https://developers.google.com/search/docs/guides/lazy-loading?hl=pt_br#test){: target="_blank" rel="noreferrer nofollow noopener"} carregada com a técnica.

## Loading: uma solução nativa

Existe a algum tempo um atributo HTML que podemos usar para aplicar a técnica de lazy loading dispensando o JavaScript. O feito é possível com o atributo `loading`, que pode receber três valores: `lazy`, `eager` e `auto`. O valor `lazy` indica que a imagem deve ser adiada até que esteja próxima o suficiente da área visível da página. O valor `eager` define que a imagem deve ser carregada imediatamente após o carregamento do resto da página. E o valor `auto` determina que o navegador pode escolher se deve carregar a imagem quanto necessário ou imediatamente.

A estrutura para postergar o carregamento de uma imagem em uma tag `<img>` é a seguinte:

``` html
<img src="img.jpg" loading="lazy" alt="..."/>
```

Para imagens carregadas usando a tríade `<picture>`, `<source>` e `<img>` a estrutura seria a seguinte:

``` html
<picture>
  <source type="<tipo MIME>" srcset="<imagem>" alt="...">
  <source type="<tipo MIME>" srcset="<imagem>" alt="...">
  <img src="<imagem>" alt="..." loading="lazy">
</picture>
```

O atributo loading também pode ser usado com a tag `<iframe>` . A utilização é tão fácil quanto é com `<img>` e `<picture>`.

``` html
<iframe src="video-player..html" loading="lazy"><iframe>`
```

Você pode visitar [essa demo](https://lazyloadingtest.netlify.app/loading-attribute.html){: target="_blank" rel="noreferrer noopener nofollow"} para checar o efeito desse atributo com imagens. Na página, abra as [ferramentas do desenvolvedor](https://developer.chrome.com/docs/devtools/overview/){: target="_blank" rel="noreferrer noopener nofollow"} (DevTools). o que geralmente pode ser feito pressionando as teclas CTRL + SHIFT + i. Clique na aba rede (Network), e selecione o circulo escuro que aparece no canto superior esquerdo para iniciar uma gravação dos recursos que são baixados durante o carregamento da página, como mostra a Figura 1. Logo depois, ainda com a janela com as ferramentas do desenvolvedor aberta, atualize a página.

Observação: você pode usar a combinação de teclas CTRL + R para iniciar a gravação e atualizar a página.

{% include post_img.html
png="/assets/imgs_posts/webdev/lazyloading/devtools.png"
webp="/assets/imgs_posts/webdev/lazyloading/devtools.webp"
alt="O botão para inicia a gravação dos eventos de rede é destacado."
align="center"
caption="Figura 1: Interface do DevTools no Google Chrome."%}

Depois da atualização, você verá uma série de dados sendo exibido em uma tabela no painel inferior da aba rede. A tabela indica para a gente tudo que foi baixado pelo navegador ao carregar a página. Além disso, ele continua detectando os recursos que são solicitados enquanto você está na página. Na primeira linha contém o nome do arquivo HTML que estamos carregando, e logo em seguida temos as imagens que foram baixadas. A Figura 2 mostra que, inicialmente, apenas 5 imagens foram carregadas, mas isso pode variar dependendo do navegador que você está usando (explicamos o porquê disso logo mais).

{% include post_img.html png="/assets/imgs_posts/webdev/lazyload_ng/devtools-waterfall.png"

_webp="/assets/imgs_posts/webdev/lazyloading/devtools-waterfall.webp_"

alt="Tabela na parte inferior da aba Rede no DevTools. São exibidos os recursos carregados inicialmente."

caption="Figura 2: Os recursos carregados para a página são exibidos em na parte inferior da aba Rede, no DevTools do Google Chrome."

%}

Conforme você rola a página, note que novas imagens são carregadas, aumentando a quantidade de itens na tabela. Perceba que o navegador não espera o elemento `<img>` que invoca uma imagem aparecer na tela para baixar ela. Basta o elemento estar próximo da área visível. O quão próximo? O navegador determina a distância com base em em alguns fatores como o tipo de recurso de imagem que está sendo baixado. Mais detalhes você encontra em [Lazy loading de imagens em navegadores](https://web.dev/i18n/pt/browser-level-image-lazy-loading/){: target="_blank" rel="noreferrer noopener nofollow"}.

Isso é um dos motivos para o número de imagens carregadas variar para cada navegador. Dependendo da quantidade de imagens que você inserir em uma página, e da distância que cada uma está parte visível, pode até parecer que a ferramenta não está funcionando. Por exemplo, se na demo apresentada houvesse apenas as 5 primeiras imagens, e elas estivessem posicionadas no mesmo local, não daria para ver o efeito do atributo loading.

Outro ponto importante para se considerar é que as imagens precisam ter a largura e altura definidas. Caso contrário, o navegador pode optar por baixar todas as imagens de uma vez para evitar o deslocamento de layout ([layout shift](https://web.dev/i18n/pt/cls/){: target="_blank" rel="noreferrer noopener nofollow"}), que pode afetar a experiência do usuário negativamente.

O atributo loading se sobressai diante das outras formas de implementar a técnica de lazy loading por sua simplicidade e por funcionar mesmo se o usuário desativar o JavaScript. Um ponto fraco seria a falta de flexibilidade, já que o navegador é quem determina quando deve carregar a imagem.

No que diz respeito ao suporte, de acordo com os dados disponíveis no site [caniuse](https://caniuse.com/#search=loading){: target="_blank" rel="noreferrer noopener nofollow"}, o `loading` funciona em na maioria dos navegadores mais modernos. O Safari está caminhando para ter essa funcionalidade. De todo modo, o suporte a esse atributo é até que bem amplo, mas existem alternativas com maior maior abrangência, das quais falaremos abaixo.
\[API\]

## Lazy Loading com JavaScript

Geralmente adicionamos uma imagem em um site usando a seguinte estrutura:

``` html
<img src="imagem.jpg" alt="Texto descritivo da imagem"/>
```

Para que possamos ter o controle de quando o navegador deve fazer o download da imagem, precisamos fazer algumas alterações na marcação acima. O primeiro passo é impedir qua a imagem seja carregada. Depois, nós podemos escrever o script para carregar a imagem quando nos convém.

Na tag `<img>` o atributo `src` é usado para especificar o caminho para a imagem. Sempre que o navegador encontra esse atributo, ele tenta baixar o recurso do endereço especificado. Então, para impedir que conteúdo seja baixado, nós precisamos mover o caminho para imagem para fora do atributo `src`.

Em HTML é possível a criação de um [atributo customizado](http://html5doctor.com/html5-custom-data-attributes/){: target="_blank" rel="noreferrer noopener nofollow"}, que é um atributo que não tem significado para o navegador, ele serve apenas para o propósito que nós empregamos à ele. Assim, ao invés de especificar o recurso no atributo `src`, nós podemos usar um atributo customizado. Posteriormente, é possível mover o caminho de volta para o `src` usando JavaScript, e então a imagem é carregada.

Um atributo customizado tem a forma `data-*`, onde * deve ser substituído por uma string que pode conter letras em caixa baixa, números, hífen(-), ponto(.), dois-pontos(:) ou "underline"(_). Nós vamos escrever nosso atributo como `data-src`, mas você pode usar nome que quiser.

``` html
<img data-src="imagem.jpg" alt="Texto descritivo da imagem"/>
```

Você pode encontrar frequentemente uma marcação com os atributos `src` e  `data-src` em um mesmo elemento. O primeiro guarda o endereço para uma imagem temporária, usada apenas para guardar lugar, e o segundo possui o endereço para a imagem real.

``` html
<img src="placeholder.jpg" data-src="img-real.jpg" alt="Texto descritivo da imagem"/>
```

A imagem que vai no atributo `src` é uma imagem que geralmente é muito menor em bytes, porem com as mesma dimensões que a original. Ter uma imagem com as mesmas dimensões antes de carregar a original evita que o conteúdo ao redor dela tenha que ser reposicionado Além disso, essa imagem temporária permite que o navegador possa determinar quanto do elemento está dentro do viewport, o que pode ser necessário dependendo da situação.

Outro elemento que tem sido muito usado para o carregamento de imagens é a tag `<picture>`. Essa tag permite a especificação de múltiplas fontes, usando duas ou mais tags `<source>`s, para uma mesma imagem.

``` html
<picture>
  <source srcset="img.webp" type="image/webp"/>
  <source srcset="img.jpg" type="image/jpg"/>
  <img src="img.jpg" alt="Texto alternativo à imagem"/>
</picture>
```

Na situação acima, foram definidas duas fontes para o navegador selecionar. A primeira `<source>` é para uma imagem no formato WebP, enquanto que a segunda aponta para uma imagem no formato JPG. O elemento `<img>` incluído no código define a imagem padrão que o navegador deve carregar quando a tag `<picture>` não for reconhecida.

Da mesma forma, vamos usar um atributo customizado para impedir que o navegador carregue a imagem real em um primeiro momento.

``` html
<picture>
  <source srcset="placeholder.webp" data-src="img-original.webp" type="image/webp"/>
  <source srcset="placeholder.jpg" data-src="img-original" type="image/jpg"/>
  <img src="img-original.jpg" alt="Texto alternativo à imagem"/>
</picture>
```

Agora temos que avisar para o navegador quando carregar o as imagens reais, caso contrario elas permaneceram ocultas. O aviso pode ser feito usando Events Listeners (Detetores de Eventos) ou um Observer (Observador), mais especificamente o IntersectionObserver. Vou mostrar como usar ambos para o mesmo propósito.

### Antes das soluções

Considere o seguinte documento HTML para todos os exemplos:

``` html
<div class="container">
<img class="image" src="imgs/1.jpg" alt="img" />

<!-- Exemplos com img -->
<img class="image lazy" src="placeholder.jpg" data-src="imgs/2.jpg" alt="..." />
  <img class="image lazy" src="placeholder.jpg" data-src="imgs/3.jpg" alt="..." />
  <img class="image lazy" src="placeholder.jpg" data-src="imgs/4.jpg" alt="..." />
  <img class="image lazy" src="placeholder.jpg" data-src="imgs/5.jpg" alt="..." />
  <img class="image lazy" src="placeholder.jpg" data-src="imgs/6.jpg" alt="..." />
  <img class="image lazy" src="placeholder.jpg" data-src="imgs/7.jpg" alt="..." />
  <img class="image lazy" src="placeholder.jpg" data-src="imgs/8.jpg" alt="..." />
  <img class="image lazy" src="placeholder.jpg" data-src="imgs/9.jpg" alt="..." />
  <img class="image lazy" src="placeholder.jpg" data-src="imgs/10.jpg" alt="..." />
  <img class="image lazy" src="placeholder.jpg" data-src="imgs/11.jpg" alt="..." />
  <img class="image lazy" src="placeholder.jpg" data-src="imgs/12.jpg" alt="..." />
  <img class="image lazy" src="placeholder.jpg" data-src="imgs/13.jpg" alt="..." />

<!-- Exemplo com Picture --> 
<picture class="image-container lazy">
    <source srcset="placeholder.webp" data-srcset="imgs/14.webp" type="image/webp">
    <source srcset="placeholder.jpg" data-srcset="imgs/14.jpg" type="image/jpg">
    <img src="placeholder.jpg" data-src="imgs/14.jpg" alt="..." class="image">
  </picture>
</div>
```

A `<div class="containter">` servirá para agrupar todas as imagens no centro, e manter uma largura fixa.
A primeira tag `<img>` carregará uma imagem normalmente, pois tenho certeza que ela estará visível para os usuários em navegadores com qualquer dimensão assim que a página for carregada. Já as outras imagens terão seu carregamento adiado.

Os links para as imagens adiadas foram colocados no atributo `data-src` ou no atributo `data-srcset` ao invés dos tradicionais `src.` e `srcset`. Quando o elemento `<img>` ou o `<picture>` entrar no viewport são desses atributos que vamos recuperar o caminho para a imagem.

A imagem placeholder.jpg tem tamanho em bytes muito menor que as originais. Ela servirá para "guardar lugar" para a imagem verdadeira.

O estilo para o HTML acima é dado pelo seguinte:

``` css
* {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}

.container {
    width: 800px;
    margin: auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.image-container {
    display: block;
    width: 100%;
    height: 100vh;
}

.image {
    display: block;
    width: 100%;
    height: 100vh;
    -o-object-fit: cover;
    object-fit: cover;
}
```

Confira [o resultado na página](https://lazyloadingtest.netlify.app/intersection-observer-ec5.html){: rel="noreferrer noopener nofollow"}.

Agora vamos conferir as técnicas usando JS para fazer o carregamento dessas imagens no site.

### Usando a API IntersectionObserver

O <dfn>IntersectionObserver</dfn> é uma API projetada para oferecer aos desenvolvedores um novo método para consultar de forma assíncrona a posição de um elemento em relação a outro elemento que o contenha ou ao viewport, que seria a área retangular do navegador em que o site aparece.

Considere o seguinte fragmento

``` html
<div class="avo">
<div class="pai">
	<img src="img.jpg" alt="Apenas uma imagem"/>
  </div>
  <div class="tio">
  </div>
</div>
```

Podemos verificar a posição da tag imagem em relação ao elemento `.pai` ou `.avo` ou também podemos verficar em relação ao viewport. Não da para checar a posição do elemento em questão em relação a outro que não o engloba, como o elemento ".tio".

Configuramos o IntersectionObserver para monitorar e carregar as imagens adiadas anteriormente usando o código

``` html
<script>
window.addEventListener('DOMContentLoaded',function(){
// Opções de configuração do Observer.
let config = {
  root: null,
  rootMargin: '0px', 
  threshold: 0
}

// Bloco de instruções para o Observer.
let callback = (entries, self)=>{
  var elemento = entry.target;
  
  if (elemento.tagName.toLowerCase() == 'img') {
  
    // Cola o valor de data-src em src
    elemento.src = elemento.dataset.src;
  
  } else if (elemento.tagName.toLowerCase() == 'picture') {
    // Cola o valor de data-srcset em srcset para cada elemento source
    var sources = Array.from(elemento));
    for (var i = 0; i < sources.length; i++) {
      sources[i].srcset = sources[i].dataset.srcset;
    }
  }
}

// Define um observador com o bloco de instruções 
// e a configuração Definida anteriormente.
let observer = new IntersectionObserver(callback, config);

  // Avisa ao observer quais elementos monitorar.
let lazyImgs = Array.from(document.querySelectorAll('.lazy'));

lazyImgs.forEach((image)=>{
  observer.observe(image);
  });
});
</script>
```

Esse código JavaScript deve ser inserido logo antes do `</body>` no seu documento, ou você pode usar alguma outra técnica que garanta a execução dele apenas depois que o documento HTML for totalmente carregado.

#### Definição do Objeto

Vamos analisar linha por linha para entender o que está acontecendo.

``` javascript
let observer = new IntersectionObserver(callback, config);
```

No trecho destacado acima foi criado um observador, que será o objeto responsável por monitorar as tags `<img>`s e `<source>`s no documento HTML.

Precisamos passar duas informações para esse observador durante sua criação: uma [função callback](https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function){: target="_blank" rel="noopener noreferrer nofollow"} e um objeto com as configurações necessárias.

#### Definição das Configurações

As configurações são definidas em um objeto chamado `config`. Esse objeto possuí três propriedades, que correspondem a opções de configuração: `root`, `marginRoot` e `threshold`.

``` javascript
let config = {
  root: null,
  rootMargin: '0px',
  threshold: 0
}
```

Vamos entender cada uma dessas opções:

`root` - Determina a tela de captura. Pense na tela de captura como uma janela (veja a Figura 3). Se o recurso for referenciado fora dos limites dessa janela, ele não é carregado. O papel do observador aqui, é monitorar se o elemento, seja o `<ìmg>` ou `<picture>` está ou não visível nessa janela, e manipular o elemento monitorado conforme o resultado, seguindo as instruções da função callback.

Se ignorarmos essa opção ou definirmos um valor `null` o viewport será considerado, mas podemos definir qualquer elemento contido no documento HTML, como uma `<div>`. por exemplo.

Temos que ressaltar que o elemento observado deve estar localizado dentro do elemento `root`, isto é, na árvore [DOM (Document Object Model](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM){: target="_blank" rel="noreferrer noopener nofollow"} a tela de captura deve ser pai do elemento observado.

{% include post_img.html
png="/assets/imgs_posts/webdev/lazyloading/root-sample.png"
webp="/assets/imgs_posts/webdev/lazyloading/root-sample.webp"
alt="Do lado esquerdo, a área em que a página de um site é visível é marcada em azul. Essa área é o que chamamos de viewport, e será escolhida se o valor de root for null. Do lado direito, uma marcação azul representa um elemento div imaginário que pode ser escolhido com um valor diferente para a opção root."
align="center"
caption="Figura 3: A propriedade `root` define qual será a 'tela de captura'."%}

A propriedade `root` define qual será a "tela de captura".

`rootMargin` - Define uma margem ao redor do elemento `root`. Essa margem expande (com valores positivos) ou diminui (com valores negativos) os limites do elemento `root` (Veja a Figura 4).

Os valores podem ser definidos da mesma forma que definimos a propriedade `margin` no CSS: determinando um valor para as margens acima, a esquerda, abaixo e a direita do elemento (e.g: rootMargin: '10px 10px 10px 10px'). Os valores também podem ser abreviados (e.g: rootMargin: '10px'). Veja abaixo alguns exemplos:

`rootMargin: "0px'` - Os limites do elemento `root` não serão estendidos ou diminuídos;
`rootMargin: "10px"` - O elemento `root` será expandido por 10px em todas as direções;

* `rootMargin: "-10px -10px -20px -20px"` - O elemento `root` será diminuído 10px no topo na esquerda e 20 pixels nas partes de baixo e direita.

{% include post_img.html
png="/assets/imgs_posts/webdev/lazyloading/margin-sample.png"
webp="/assets/imgs_posts/webdev/lazyloading/margin-sample.webp"
alt="Os resultados de três valores diferentes para o rootMargin, considerando o mesmo valor null (i.e., root = viewport) para o root. No primeiro, com rootMargin = 0, os limites do viewport não mudam. No segundo, com rootMargin = 10px, a margem do viewport se expande para todos os lados por 10 pixels. No último, com rootMargin = -10 -10 -20 -20, o limite do viewport diminuí 10 pixels em cima e na direita, e 20 pixels em baixo e na esquerda."
align="center"
caption="Figura 4 - Os resultados de três valores diferentes para o rootMargin, considerando o mesmo valor null para o root." %}

A propriedade `rootMargin` aumenta ou diminui a fronteira do elemento `root`.

`threshold` - As vezes não queremos que a função callback seja executada assim que o elemento se torna visível na tela de captura, i.e., quando o elemento observado está dentro dos limites do elemento `root`. A propriedade `threshold` nos permite determinar quanto do elemento monitorado deverá estar dentro do elemento `root` para que a função seja executada.

O valor pode ser um único número entre 0 e 1 (e.g., 0.5) ou um vetor com valores entre 0 e 1 (e.g., \[0.1, 0.5\]).

Existem dois momentos em que um elemento observado pode satisfazer o(s) parâmetro(s) especificados nessa opção: quando ele está entrando no `root` e quando ele está saindo do `root`. Tipo, quando o elemento observado estiver entrando no `root`, em algum momento metade dele estará dentro do elemento `root`, da mesma forma quando ele estiver saindo, em algum momento restará apenas metade do elemento ainda dentro do `root`. A figura 5 mostra o resultado considerando três configurações diferentes.

* `threshold: 0`: a função callback será executada quando o elemento estiver atravessando a borda do `root`, e quando o elemento estiver quase saindo do elemento `root`.
* `treshold: 0.5`: a função callback será executada sempre que metade do elemento estiver dentro dos limites do `root`.
* `tresshold: 1`: a função callback será executada sempre que o elemento tiver acabado de atravessar a borda do root, e quando estiver prestes a sair.

{% include post_img.html
png="/assets/imgs_posts/webdev/lazyloading/threshold-sample.png"
webp="/assets/imgs_posts/webdev/lazyloading/threshold-sample.webp"
alt="Uma representação dos efeitos de três valores para o valor do threshold. No primeiro, Quando o elemento está prestes a entrar e prestes a sair completamente do root, o observador executa alguma coisa. No segundo, o elemento está com metade da sua área dentro do root. No terceiro, o elemento está completamente acabou de entrar completamente no elemento root."
caption='Figura 5: A propriedade `threshold` define o quanto o elemento deve atravessar a borda do quadro de captura antes que o observador seja acionado.'%}

A propriedade `threshold` define o quanto o elemento deve atravessar a borda do quadro de captura antes que o observador seja acionado.

**Observação**: ainda existem algumas inconsistências de comportamento entre navegadores. Por exemplo, Em navegadores baseados no Chromium, como o Google Chrome (versão 79 testada), Vivaldi (versão 2.10 testada), Opera (versão 66 testada) ou Edge (Versão 79 testada) o callback só é executado quando o elemento observado está entrando no viewport, e não quando está saindo. No Edge (versão 44 testada), ainda utilizando o motor EdgeHTML, a função callback ainda pode ser executada sem respeitar o valor da propriedade `tresshold`. Esses problemas não vão impedir o uso da ferramenta para a maioria das pessoas, mas mesmo assim leve-os em consideração antes de implementar.

#### Callback

Já o callback é uma função com as instruções que serão executadas pelo observador quando o elemento observado aparecer na "tela de captura".

``` javascript
let callback = (entries, self)=>{
  var elemento= entry.target;
  if (elemento.tagName == 'IMG') {
    elemento.src = elemento.dataset.src;
  } else if (elemento.tagName == 'PICTURE') {
    var sources = Array.from(elemento.querySelectorAll('source'));
    for (var i = 0; i < sources.length; i++) {
        sources[i].srcset = sources[i].dataset.srcset;
    }
  }
}
```

Essa função recebe os parâmetros `entries` e `self`. O primeiro é um vetor com um objeto para cada elemento monitorado (as tags `<img>` e `<picture>` neste caso). Já o último é uma referência ao próprio observador que usa a função.

Cada objeto no vetor `entries` possuí varias propriedades relacionadas a um elemento especifico. Aqui vamos precisar de duas delas: `target` e o `isIntersecting`. A propriedade `target` se refere ao elemento para o qual o objeto foi criado. Enquanto `isIntersecting` guarda um valor booleano (true ou false) que indica se o elemento está ou não visível na tela de captura, baseado em um calculo e levando em consideração as opções de configuração definidas (`root`, `marginRoot`, `threshold`).

Já no bloco da função (tudo entre `{` colchetes `}`) eu iterei sobre todos os itens do vetor `entries` usando o [método forEach()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach){: target="_blank" rel="noreferrer noopener nofollow"}.

O trecho `if(entry.isIntersecting)` verifica se o elemento está intercectando o elemento `root`. Caso a condição seja verdadeira, a imagem será carregada. O algoritmo que carrega a imagem depende do elemento que à invoca; se for `<img>`, o valor do atributo `data-src` será copiado para o atributo `src`. Para cada elemento `<picture>` serão identificados os elementos `<source>`s, e o valor do atributo `data-srcset` deles será copiado para o atributo `srcset`.

Com o comando `self.unobserve(entry.target)` informamos para o observador parar de monitorar o elemento que já teve sua imagem carregada. Caso contrario o código da função callback pode ser executado para um mesmo elemento varias vezes sem necessidade.

``` javascript
let lazyImgs = Array.from(document.querySelectorAll('.lazy'));

lazyImgs.forEach((image)=>{
  observer.observe(image);
});
```

Por fim, eu informo ao observador quais elementos observar. Temos que passar um elemento por vez, não um vetor inteiro com todos os elementos que precisam ser monitorados.

Veja o [resultado em nossa demo](https://lazyloadingtest.netlify.app/intersection-observer-ec5.html){: target="_blank" rel="noreferrer nofollow noopener"}.

### Polyfill para o IntersectionObserver

Observação: o texto dessa seção é interessante se realmente precisar dar suporte a navegadores muito antigos. Siga lendo apenas se esse for o seu caso, ou vai perder tempo.

Atualmente o IntersectionObserver funciona totalmente para mais ou menos [92%](https://caniuse.com/mdn-api_intersectionobserver){: target="_blank" rel="noreferrer noopener nofollow"} dos usuários. No entanto, nós podemos expandir a quantidade de usuários que podem usufruir dessa ferramenta aumentando o número navegadores que a suportam. Para isso usamos um [Polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill){: target="_blank" rel="noreferrer  noopener nofollow"}.

Faça os passos a seguir para usar o polyfill do IntersectionObserver:

* Entre na página do diretório do Polyfill disponível no Github e clique em "Clone or download -> Download ZIP".
* Extraia os arquivos e pastas do arquivo .zip baixado dentro de qualquer pasta.
* Localize dentro da pasta "intersection observer" o arquivo intersection-observer.js. Copie esse arquivo e coloque-o dentro da pasta de scripts do seu projeto (ou qualquer outra pasta).
* Agora use uma tag `<script>` para referenciar esse arquivo no documento HTML das páginas que provavelmente vão precisar dessa ferramenta.

Caso esteja usando um empacotador de módulos como o Webpack:

* Faça a instalação usando o comando `npm install intersection-observer`;
* Requisite o módulo intersection-observer antes de qualquer outro módulo.

Você também pode usar o serviço do [polyfill.io](https://polyfill.io/v3/), que recebe uma solicitação por uma ou mais ferramentas (como o IntersectionObserver) e envia de volta o polyfill apenas se o navegador que fez a solicitação realmente precise.

* Referencie a seguinte URL em uma tag `<script>`: https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver.

É importante frisar que o polyfill para o IntersectionObserver deve ser baixado pelo navegador antes que essa ferramenta seja usada no código. Isso se o navegador não possuir suporte nativo, é claro.

Lembre-se de que todo documento JavaScript linkado no documento HTML do seu site será requisitado pelo navegador. Mesmo ao usar o serviço do Polyfill.io, o navegador ainda tem que fazer um pedido ao servidor, e esse pedido pode ou não ser negado. Cada pedido que um navegador faz, significa um acréscimo no tempo de carregamento de uma página, pois ele precisa procurar o IP do site, fazer todas as negociações com o servidor que hospeda o site, enviar o pedido e aguardar a resposta para, enfim, poder continuar a análise do seu código HTML.

Para evitar que o polyfill seja requisitado ou baixado sem necessidade, você pode adicionar uma condição antes de acionar o IntersectionObserver como no exemplo abaixo.

``` html
<script>
var lazyload = function(){
	// Código para a configuração e utilização do IntersectionObserver
}

if (!("IntersectionObserver" in window)) {

  // cria um novo elemento &lt;script&gt;
  var script = document.createElement('script');
  
  // Configura o atributo src com o endereço para o intersection-observer.js.
  // Opcionalmente você pode adicionar o link para o Polyfill.io
  script.src = './caminho/para/o/arquivo/intersection-observer.js';
  
  // O atributo onload executa a função lazyload()
  // após o carregamento do elemento &lt;script&gt na página.
  script.onload =  lazyload;
  
  // Insere o elemento configurado entre as tags <head> e </head>
  document.head.appendChild(script);
  	
}
 
// Executa o código que configurar um novo observador e 
// inicia o monitoramento.
Lazyload();
```

Quando o navegador desconhece a existência dessa API será inserido no documento HTML uma nova tag `<script>` com o link para o polyfill necessário para fazer o código funcionar. Assim que o documento é carregado na página, o código usado para configurar o observador e selecionar as margens que devem ser monitoradas.

### Monitorando Eventos

A linguagem JavaScript nos permite detectar eventos que eventualmente tornam o elemento visível no viewport. Uma vez visível, o conteúdo do elemento deve ser carregado.

``` html
<script>
  // Busca as imagens que serão carregadas usando a técnica de 
  // carregamento lento.
  var lazyImgs = [].slice.call(document.querySelectorAll('.lazy'));

  // Responsável por verificar cada imagem no vator lazyImgs
  var lazyload = function() {
    for (var i = 0; i < lazyImgs.length; i++) {

      // Retorna a coordenada do elemento relativo janela
      var rect = lazyImgs[i].getBoundingClientRect().top;

      // Checa se o elemento está minimamente dentro
      // do viewport e carrega a imagem de acordo
      // com o resultado.
      if (rect.top < window.innerHeight{
          if (lazyImgs[i].tagName == 'IMG') {
              var dtSrc = lazyImgs[i].getAttribute('data-src');
              lazyImgs[i].setAttribute('src', dtSrc);
          } else if (lazyImgs[i].tagName == "PICTURE") {
              var sources = lazyImgs[i].querySelectorAll('source');
              sources.forEach(function(source) {
                   var dtSrcset = source.getAttribute('data-srcset');
                        source.setAttribute('srcset', dtSrcset);
              })
          }

          // Remove o elemento desnecessário da lista
          // de elementos monitorados
          lazyImgs[i].classList.remove('lazy');
          lazyImgs = [].slice.call(document.querySelectorAll('.lazy'));
      }
  }  
}

// Executa chama a função lazyload em diferentes cenários
window.addEventListener('load', lazyload)
window.addEventListener('scroll', lazyload)
window.addEventListener('resize', lazyload)
</script>
```

Vamos destrinchar o código a fim de compreender seu funcionamento.

#### Definindo os gatilhos

``` javascript
window.addEventListener('load', lazyload)
window.addEventListener('scroll', lazyload)
window.addEventListener('resize', lazyload)
```

Não há muita complicação nessa parte. Apenas deixamos claro que, assim que a página carregar (load), ou sempre que o usuário rolar (scroll) ou redimensionar (resize) a página, o navegador deverá checar se o elemento está visível.

Nesses três eventos os elementos podem ficar visíveis, e portanto temos que carrega-las. Quando o usuário redimensiona a página, e os itens são reposicionados, pode ser que um elemento `<img>` ou `<picture>` apareça na área do viewport, por exemplo. É claro que não são apenas nesses momentos que as imagens podem ficar visíveis para os usuários, mas pode ser complicado cobrir todos os casos apenas com eventos. Além disso, os eventos `resize` e `scroll` já causam várias chamadas a função callback, o que pode causar algum problema de performance.

#### Instruções para o carregamento lento

``` javascript
var lazyload = function() {
  for (var i = 0; i < lazyImgs.length; i++) {
    // Retorna a coordenada do elemento relativo janela
    var rect = lazyImgs[i].getBoundingClientRect().top;

    // Checa se o elemento está minimamente dentro
    // do viewport e carrega a imagem de acordo
    // com o resultado.
    if (rect < window.innerHeight) {
      if (lazyImgs[i].tagName == 'IMG') {
        var dtSrc = lazyImgs[i].getAttribute('data-src');
        lazyImgs[i].setAttribute('src', dtSrc);
      } else if (lazyImgs[i].tagName == "PICTURE") {
        var sources = lazyImgs[i].querySelectorAll('source');
        sources.forEach(function(source) {
        var dtSrcset = source.getAttribute('data-srcset');
          source.setAttribute('srcset', dtSrcset);
        })
      }
    
      // Remove o elemento desnecessário da lista
      // de elementos monitorados
      lazyImgs[i].classList.remove('lazy');
      lazyImgs = [].slice.call(document.querySelectorAll('.lazy'));
    }
  }
}
```

As instruções para o carregamento das imagens são um pouco mais complicadas que as usadas com o **IntersectionObserver**, que já faz internamente todo o calculo necessário para saber a hora certa de carregar a imagem.

O comando `getBoundingClientRect().top` é usado para retornar, em pixels, a distância que o elemento está do topo do viewport. Então, o topo do viewport é considerado como um "ponto zero", e a partir desse ponto zero é contada a distância do elemento monitorado.

Depois foi preciso comparar o valor obtido com `.top` com a altura do viewoprt, que é basicamente a distância entre o topo do viewport e a sua base. Caso a distância entre o topo do elemento monitorado e o topo do viewport for maior que a altura do viewport, significa que o elemento está visível, e seu conteúdo deve ser carregado. Veja a Figura 6 para melhor compreensão.

{% include post_img.html png="/assets/imgs_posts/webdev/lazyloading/vh-eltop.png"

webp="/assets/imgs_posts/webdev/lazyloading/vh-eltop.webp"

alt="Duas imagens em uma. Do lado esquerdo, a altura do viewport é menor que a distância do elemento para o topo da página. Do lado direito a altura do viewport é menor que a distância entre o top odo elemento monitorado e o topo da página."

caption="Figura 6: Do lado esquerdo, o elemento está fora da área. Do lado direito o elemento está dentro."

align="center"

%}

O tamanho do viewport será comparado com a distância que o elemento está do topo do viewport.

Para os elementos `<img>`s o valor do atributo `data-src` será copiado para o atributo `src`. Mas quando o alvo é um elemento `<picture>` nós pegamos os elementos `<source>`s dentro dele e, para cada um, nós copiamos o valor do atributo `data-srcset` para o atributo `srcset`. Uma vez que o navegador detecta os novos links nos atributos `src` ou `srcset` a imagem será carregada.

Uma vez que o elemento tem sua imagem carregada, paramos de monitora-lo. O elemento será removido da nossa "lista de espera" usando dois comandos: um para remover a classe "lazy" dele e outro para atualizar a lista com os elementos que ainda não tiveram sua imagem carregada.

#### Uma solução longe de ser perfeita

Embora funcional, essa maneira de aplicar o carregamento lento apresenta alguns problemas. A performance não é das melhores, pois sempre que o usuário rola a página ou redimensiona ela, nem que seja por um pixel, a função lazyload será executada.

Além disso alguns casos não são cobertos. Se um usuário for redirencionado para uma seção da página que se encontra na parte de baixo dela, todas as imagens que estiverem nas seções anteriores também serão carregadas, mesmo que o usuário nunca suba a página. Esse problema ainda seria relativamente fácil de resolver, mas esse é apenas um exemplo de situação em que o código acima não seria muito útil.

Talvez você tenha algum problema para que robôs de buscadores consigam ver suas imagens. Para evitar isso dê preferência à ferramentas mais modernas, como as apresentadas abaixo.

Em resumo, não use essa técnica se não for absolutamente necessário.

## Lozad.js

Existem varias bibliotecas JavaScript para auxiliar na implementação do lazy loading. É uma maneira de aproveitar código preparado por outro programador para facilitar seu trabalho. Entre essas bibliotecas está o "lozad.js".

O [lozad.js](https://github.com/ApoorvSaxena/lozad.js){: target="_blank" rel="noreferrer noopener nofollow"} é uma biblioteca JavaScript que diminuí a quantidade de instruções que um programador precisa digitar para usar o IntersectionObserver. Então, basicamente, ele fornece um código pronto para o uso da API. Essa biblioteca suporta `<img>`, `<picture>`, iframes, vídeos, áudios, imagens responsivas, imagens de fundo e várias imagens de fundo etc.

Vamos ver como instalar e usar para carregar as imagens do nosso exemplo.

#### Instalação

**Utilize um CDN**
Você pode carregar essa biblioteca através de uma CDN (Content Delivery Network) incluindo o código abaixo nas suas páginas.

``` html
<script src="https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js"></script>
```

**Baixe e implemente manualmente**
1\.Entre no repositório da ferramenta no Github e clique em "Clone or download -> Download ZIP";
2\.Após o download extraia a pasta "dist" de dentro do arquivo ZIP baixado;
3\.Entre na pasta "dist" e copie o arquivo "lozad.min.js" para o seu projeto;
4\.Enfim referencie esse arquivo em todos os documentos HTML em que queira usar programar o carregamento das imagens.

**Usando o NPM**
Se preferir você pode realizar o download do pacote com o comando `npm install lozad` e importar usando um empacotador de módulos como o Webpack.

#### Utilização

Para uma utilização simples são necessárias três linhas de código apenas.

``` html
const observer = lozad();
observer.observe()
```

Agora, para que essa biblioteca possa nos ajudar, antes nós temos que prepara modificar nosso documento HTML. Por exemplo, o código acima seria o suficiente para conseguir carregar as imagens das tags `<img>` s caso elas estejam escritas da seguinte forma:

``` html
<img class="image lozad" data-src="imgs/2.jpg" alt="..." />
```

Agora, olhe para o trecho acima e compare com a nosso [HTML usado como](#) exemplo. Você vai perceber que a classe que antes era "lazy", agora é "lozad".

Já uma tag `<picture>` deve estar exposta mais ou menos nesse estilo:

``` html 
<!-- Exemplo com Picture -->
<picture class="image-container lozad" data-iesrc="imgs/14.jpg" data-alt="...">
  <source srcset="imgs/14.webp" type="image/webp">  
  <source srcset="imgs/14.jpg" type="image/jpg">
</picture>
```

De novo, compare com a mesma tag no nosso exemplo. Mais uma vez a classe "lazy" foi trocada por "lozad", para que o script do lozad possa encontrar os elementos corretamente.

O elemento `<img>`, que seria um "plano B" para navegadores que não suportam a tag `<picture>` já não existe mais. Esse elemento será criado automaticamente pelo lozad conforme necessário. Você pode usa a tag `<noscript>` para definir uma alternativa caso o JavaScript esteja desativado.

``` html 
<!-- Exemplo com picture -->
<picture class="image-container lozad" data-iesrc="imgs/14.jpg" data-alt="...">
  <source srcset="imgs/14.webp" type="image/webp">  
  <source srcset="imgs/14.jpg" type="image/jpg">
  
  <!-- Alternativa na ausência do JavaScript-->
  <noscript>
    <img src="imgs/14.jpg" alt="..." class="image">
  </noscript>
</picture>
```

Foram inseridos dois novos atributos customizados, o `data-iesrc`, que aponta o endereço da imagem para ser usada no Internet Explore, e o `data-alt;`, que recebe o texto alternativo para a imagem. Além disso a imagem placeholder agora está indisponível.

O lozad também pode ser configurado em alguma medida. Nós podemos definir qual classe ele deve procurar na página, modificar o valor da propriedade marginRoot, mudar o threshold, e definir uma função que será executada logo depois que a imagem for carregada.

``` javascript
const observer = lozad('.lazy', {
    marginRoot: "-200px",
    threshold: 0.5,
    loaded: function(el) { // Será executado quando uma imagem for carregada
        el.classList.add('loaded');
    }
});
```

No trecho acima, configuramos o lozad para procurar por elementos com a classe lazy ao invés do padrão lozad, Também mudamos os limites do elemento `root`para -200, e determinamos que o elemento monitorado deve estar pelo menos metade dentro dos limites do elemento root. O elemento root é o viewport por padrão.

Se preferir, nós temos a opção de modificar apenas a classe que o lozad vai procurar no documento HTML.

``` html
const lazyImgs = document.getElementsByClassName("lazy");
const observer = lozad(lazyImgs);
observer.observe()
```

Agora sim, tudo pronto!. Perceba que você não precisa se preocupar em escrever uma função callback, apenas execute a função `lozad()` passando como parâmetro o que deve ser monitorado, e depois inicie o monitoramento. O código dentro do arquivo "lozad.min.js" faz o resto para você.

Você pode conferir todas as opções e exemplos das possibilidades dessa ferramenta lendo sua [documentação no Github](https://github.com/ApoorvSaxena/lozad.js){: target="_blank" rel="noreferrer nofollow noopener"}.

Visite [nossa demo](https://lazyloadingtest.netlify.app/lozad.html){: target="_blank" rel="noreferrer nofollow noopener"} para ver lozad.js funcionando.

### Suporte

Como essa biblioteca usa o IntersectionObserver para o lazyload ela possuí o mesmo alcance que ele, e da mesma forma, um polyfill pode ser usado para suportar mais navegadores.

### Yall.js

Como o **lozad.js** o **yall.js** diminui o trabalho do desenvolvedor fornecendo um código pronto para utilização do IntersectionObserver.
**Faça o download manualmente**
1\.No [repositório do yall.js](https://github.com/malchata/yall.js/) hospedado no Github clique em "Clone or download -> Download ZIP".;
2\.Extraia is arquivos;
3\.Entre os arquivos e pastas extraídos procure pelo arquivo "yall.min.js", que é o arquivo que você deve incorporar no seu site (até o momento está na pasta "dist");
4\.Uma vez identificado, você pode inclui-lo na página do seu site como faz com os outros scripts.

**Observação**: garanta que o arquivo "yall.min.js" seja carregado na sua página antes do código que usa o yall seja executado.

**Usando o NPM**
Você também pode baixar o pacote com o comando `npm install lozad` e importar o módulo usando um empacotador de módulos como o Webpack.

#### Utilização

Essa biblioteca também um certo padrão especifico na marcação dos elementos. As tags `<img>`s do nosso exemplo estão propriamente formatadas. Mas nossa tag `<picture>` deve ser modificada da seguinte forma:

* A classe lazy deve ser movida para o elemento `<img>`.

``` html
<picture class="image-container">
   <source srcset="placeholder.webp" data-srcset="imgs/14.webp" type="image/webp">
   <source srcset="placeholder.jpg" data-srcset="imgs/14.jpg" type="image/jpg">
   <img src="placeholder.jpg" data-src="imgs/14.jpg" alt="..." class="image lazy" >
</picture>
```

Para acionar o yall.js, nós incluimos o fragmento abaixo antes da tag de fechamento `</body>`.

``` html
<script>
    yall();
</script>
```

Mas não é só isso, também podemos passar um objeto para o inicializador com opções customizadas. São aceitas, até o momento, 9 opções de configuração, e todas podem ser consultadas na [documentação do Yall](https://github.com/malchata/yall.js/blob/master/README.md).

``` html
<script>
yall({
  lazyClass:'.lazy',
  threshold: 100
})
</script>
```

Por padrão o viewport será considerado como o elemento `root`, não sendo possível sua alteração. A opção `rootMargin` também é imutável, sendo respeitado as bordas do viewport. Caso tenha estranhado o valor 100 na opção `threshold`, é porque essa opção, nesse caso, aceita valores inteiros que vão representar, em pixels, quanto que os elementos precisam estar dentro do "quadro de captura" para que a imagem seja carregada. Então, o 100 ali significa que os elementos devem estar 100 pixels dentro do viewport.

Visite [nossa demo](https://lazyloadingtest.netlify.app/yall.html){: target="_blank" rel="noreferrer nofollow noopener"} para ver o algorítimo do yall.js na prática.

#### Suporte

Ele funciona em todos os navegadores modernos incluindo o Internet Explorer 11.

### Outras bibliotecas

Existem muitas outras bibliotecas que você pode testar e escolher a que você acha mais fácil, ou que atende melhor o seu caso, ou qualquer outra coisa.

[**Blazy**](https://github.com/dinbror/blazy){: target="_blank" rel="noreferrer noopener nofollow"}: o Blazy é uma opção leve (com 1,4kb quando minificado e gzipped) que não depende de bibliotecas externas (tipo o JQuery). Ele não utiliza o IntersectionObserver e funciona com navegadores IE7+ sem a necessidade de polyfills. Um ponto fraco que deve ser notado é que a biblioteca suporta apenas a tag `<img>`;

[**Lazysizes**](https://github.com/aFarkas/lazysizes){: target="_blank" rel="noreferrer noopener nofollow"}: uma biblioteca leve que pode fazer o carregamento de imagens e iframes. Seu padrão utiliza a classe "lazyload" para marcar os elementos, que terão o valor do atributo `data-src` ou `data-srcset` copiado para o atributo `src` ou `srcset`, respectivamente. Ele ainda pode ser expandido com a utilização de plug-ins.

[**Lazyload**](https://github.com/verlok/lazyload){: target="_blank" rel="noreferrer noopener nofollow"}: outra biblioteca que usa o poder do IntersectionObserver para o carregamento lento. Ele pode fazer o carregamento lento de imagens, iframes, videos. entre outros.

## JavaScript desativado, e agora?

Todas as soluções, com exceção do atributo `loading`, utilizam JavaScript para a implementação. Porém existem casos em que o usuário mantém a execução do JavaScript bloqueado no navegador, ou simplesmente o código JavaScript falha. Nesses navegadores as imagens não serão carregadas. Por isso é importante manter alguns códigos extras que impedem isso de acontecer. Em HTML temos a tag `<noscript>` que nos permite contornar essa situação. Isso também permite que robôs de buscadores que não executam JavaScript possam ver suas imagens.

Usando a tag `<noscript>` nós podemos determinar uma seção HTML com marcações que serão lidas apenas se o JavaScript estiver indisponível por algum motivo qualquer. Dessa vez, queremos garantir que uma imagem vai ser exibida para o usuário. Então podemos fazer o seguinte:

``` html
<div class="container">
  <img class="image" src="1.jpg" alt="...">

  <img class="image lazy" src="placeholder.jpg" data-src="2.jpg" alt="...">
  <noscript>
  <!-- Oferece alternativa para a tag acima -->
    <img class="image" src="2.jpg" alt="...">
  </noscript>
  
  <img class="image lazy" src="placeholder.jpg" data-src="3.jpg" alt="...">
  <noscript>
    <!-- Oferece alternativa para a tag acima -->
    <img class="image" src="3.jpg" alt="...">
  </noscript>
  
  <img class="image " src="placeholder.jpg" data-src="4.jpg" alt="...">
  <noscript>
    <!-- Oferece alternativa para a tag acima -->
    <img class="image" src="4.jpg" alt="...">
  </noscript>
</div>
```

Quando o navegador não consegue executar o JS para carregar as imagens será carregado o conteúdo envolvido pela tag `<noscript>`.

Mas o código acima tem um problema: além de carregar o que está envolvido pelo elemento `<noscript>` o navegador ainda exibira o placeholder carregado nas outras tags `<img>`s. Para resolver esse problema nós vamos esconder as tags que seriam carregadas usando o método de lazy loading.

``` html 
<head>
  <noscript>
  <style>
    .lazy{
      Display: none
    }
  </style>
  </noscript>
</head>

<body>
  <div class="container">
    <img class="image" src="1.jpg" alt="...">
  
    <img class="image lazy" src="placeholder.jpg" data-src="2.jpg" alt="...">
    <noscript>

      <!-- Oferece alternativa para a tag acima -->
      <img class="image" src="2.jpg" alt="...">
    </noscript>

    <img class="image lazy" src="placeholder.jpg" data-src="3.jpg" alt="...">
    <noscript>
      <!-- Oferece alternativa para a tag acima -->
      <img class="image" src="3.jpg" alt="...">
    </noscript>

    <img class="image " src="placeholder.jpg" data-src="4.jpg" alt="...">
    <noscript>
      <!-- Oferece alternativa para a tag acima -->
      <img class="image" src="4.jpg" alt="...">
    </noscript>

    <picture class="image-container lazy">
      <source srcset="placeholder.jpg" data-srcset="6.webp" type="image/webp">
      <source srcset="placeholder.jpg" data-srcset="6.jpg" type="image/jpg">
      <img src="6.jpg" class="image" alt="...">
    </picture>

    <noscript>
      <picture class="image-container">
        <source srcset="6.webp" type="image/webp">
        <source srcset="6.jpg" type="image/jpg">
        <img src="6.jpg" class="image" alt="...">
      </picture>
    </noscript>
  </div>
</body>
```

Agora, supondo que uma página com o código seja carregada em um navegador sem o JavaScript, serão carregadas as imagens entre `<noscript>` e `</noscript>`. Enquanto que, as tags que precisam do JavaScript para que suas imagens sejam carregadas, serão escondidas.

## Carregar imagens após carregar a Página

Uma alternativa à técnica de lazy loading é o carregamento de imagens depois que o resto da página está pronta. A diferença em relação ao lazy loading é que não importa a posição da imagem em relação ao viewport, todas serão carregadas quando o evento `load` for acionado. É semelhante a opção `eager` do atributo `loading` citado em outra seção.

Podemos fazer isso com um JavaScript puro:

``` html
<script>
window.addEventListener('load', function(){
  // Carrega os elementos alvo.
  const lazies = document.querySelectorAll('.lazy');
  
  // Aciona o carregamento das imagens.
  lazyImgs.forEach(function(lazy){
    if (lazy.tagName.toLowerCase() == "img"){
      lazy.src = lazy.dataset.src;
    } else if(lazy.tagName.toLowerCase() == "picture"){
      lazy.srcset = lazy.dataset.srcset;
    }
  });
});
</script>
```

Esse fragmento deve ser executado depois que os elementos HTML tiverem sido carregados. O código que aciona o carregamento das imagens é semelhante ao que foi apresentado anteriormente, portanto não vou entrar em detalhes.

Vantagens e desvantagens
Entre as vantagens, nós podemos citar:

* O usuário obtêm uma resposta mais rápida ao acessar a página, assim como com o carregamento lento;
* Usuários felizes = buscadores felizes com o seu site;
* Menos código extra nas páginas em comparação com a técnica de carregamento lento;
* Essa técnica pode ser útil em sites de página única, onde todo o conteúdo do site está separado por seções dentro de uma única página. Nesses casos os usuários podem clicar em um link que leva para uma seção da página em que uma imagem ainda não foi carregada, o que é evitado quando as imagens são carregadas imediatamente.

Contras

* Esqueça a economia de largura de banda e outros recursos de processamento usados para baixar e renderizar as imagens;
* Usuários com planos de internet limitada podem perder dinheiro quando o site carrega recursos desnecessários e o donos dos sites também, quando o servidor cobra pelas imagens enviadas;
* Um pequeno atraso até a página ficar interativa, isto é, até que o usuário possa começar a rolar a interagir com a página. Isso acontece porque depois de "pintar" os componentes na página, o navegador vai se ocupar com a análise e execução do nosso código JavaScript executado `onload`.