---
layout: article 
title: "LQIP e Placeholder com Cor Dominante"    
description: "Aprenda a criar placeholders mais eficientes com pacotes do Node JS."
permalink: '/webdev/:title'
categories: ['lqip', 'placeholder', 'cor dominante', 'lazy loading']
tags: ['lqip', 'placeholder', 'Cor dominante', 'lazy loading', 'desenvolvimento web']
date: 2022-01-29 14:10:00
lastUpdated: 2022-01-29 14:10:00
author: 'Fernando Bonfim'
excerpt_separator: <!--more-->
--- 
Quando aplicamos uma técnica de técnica de [lazy loading]({% link _posts/2022-01-24-webdev-lazy-loading-ptbr.md %}){: target="_blank" rel="noreferrer noopener nofollow"}, é comum, e até mais fácil, deixar espaços vazios no documento HTML bem onde as imagens serão carregadas. 
<!--more-->

Mas nós podemos fazer melhor. Ao invés de nada, nós podemos carregar inicialmente uma imagem mais leve, que servirá como um placeholder (marcador de lugar) até que as imagens reais do site sejam carregadas. Uma imagem padrão e minúscula já deve bastar. Veja a nossa demo para ver essa técnica em funcionamento.

Melhor ainda, nós podemos criar uma versão bem mais leve da imagem, ou uma imagem com a cor predominante da imagem original. Isso ajuda a promover uma experiência mais agradável para o visitante da página.

## Gerando Imagens de Baixa Qualidade

<dfn>Low Quality Image Placeholder</dfn> (Em tradução livre "Imagem provisória de baixa qualidade"), é uma versão de baixa qualidade de uma imagem, que é usada enquanto a imagem original não é carregada.

Como era de se imaginar, existem pacotes para o Node JS que podem fazer a geração dessas imagens para a gente. Você só vai precisar do [Node JS](https://nodejs.org/en/){: target="_blank" rel="noreferrer noopener nofollow"} instalado na sua máquina, e criar iniciar um projeto NodeJS. 

1. Para iniciar um novo projeto, abra um interpretador de comandos (e.g., prompt de comando);
2. Navegue até a pasta que pretende guardar os arquivos do projeto;
3. Rode o comando ```npm init -y```.

Você pode [ler a documentação](https://docs.npmjs.com/cli/v8/commands/npm-init){: target="_blank" rel="noreferrer noopener nofollow"} para saber mais sobre o comando mencionado.

Agora, nós vamos instalar um pacote. Pacotes, em Node JS, são programas escritos com JavaScript pela comunidade que utiliza o NodeJS e é disponibilizado para qualquer um que deseja utilizá-lo para em seu próprio projeto. O pacote que vamos instalar se chama [LQIP](https://www.npmjs.com/package/lqip){: target="_blank" rel="noreferrer noopener nofollow"}, é só seguir os passos apresentados abaixo.

1 - Instale o LQIP usando o comando ```npm install --save-dev lqip``` dentro da pasta do seu projeto. Esse comando utiliza a ferramenta npm para instalar o LQIP.

2 - Salve um arquivo JavaScript, por exemplo "lqip.js", com as seguintes instruções:

~~~ javascript
// Chama o módulo lqip.
const lqip = require('lqip');

// Caminho para o arquivo à ser manipulado
const filepath = 'imgs/1.jpg';

// Gera o placeholder para a imagem.
// A imagem original pode ter as extensões
// JPG ou PNG.
lqip.base64(filepath).then((res) => {
   console.log(res);
})
~~~

3 - Execute o arquivo digitando ```node nome-do-arquivo.js```. Exemplo: ```node lqip.js```. 

O trecho acima deve processar a imagem 1.jpg dentro da pasta imgs. É usada a função ```base64()``` que está contido pacote lqip. Esse método recebe o caminho para a imagem, [base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64){: target="_blank" rel="noreferrer noopener nofollow"} com a extensão JPG ou PNG (dependendo da extensão da imagem original) de baixa qualidade, e retorna a sequência de caracteres (string) ```data:[tipo MIME];base64,[Código Base64]```. O tipo MIME será ```image/jpeg``` ou ```image/jpg``` para imagens jpg, ou ```image/png``` para imagens PNG, e Código Base64 será substituído pela representação da imagem em base64. 

Se quiser, você pode usar esse código base64 mesmo. É só colocar o texto gerado no atributo ```src``` ou ```srcset``` das tags ```<img>``` ou ```<source>```, conforme necessário.

~~~ html
<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAcACgMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APw1+DukfsnfEvwR431zWNH+IukXPhWSxGjtoXhzw7riazHdraWhgaTVfGnhRork6t/a0kS3NpY2yaXZwzNeLdTR6W3wufeImKymtgcqhkixOIxtSpT9usVSpUsOoU5zdWu5Oc/ZvljCCw9OvV9rUipU40lOrD9M4e4J/trDY/MI5h7HD4KMVODo81Srzv3VSipKPtHaV3UlTgor4pSaT+er7Vv2Xbe+vLddJ+JrLBdXEIZ9I8MxsRFM6AsieIpURiFyUWWVVOQsjgBjMc24onGM1hsnSklJJ4vGNpSV0m1g0m1e2iS7HFLK+H4SlHnzF8snG/sqCvZ2vb2ztsf/2Q==" data-src="night-sky.jpg" alt="Texto descritivo da imagem" class="lazy">
~~~ 

No entanto, se não quiser abarrotar seu documento HTML com essa mistura de letras e número, nós podemos converter essa imagem gerada para JPG ou PNG. Eu vou usar o pacote [base64-img](https://github.com/douzi8/base64-img){: target="_blank" rel="noreferrer noopener nofollow"} para processar o código em base64 e retornar uma imagem .jpg/.png. Siga os passos a seguir:

1 - Baixe o pacote com o comando ```npm install --save-dev base64-img```.

2 - Modifique o script para usar o base64-img.

~~~ javascript
// Aciona os  base64-img e lqip 
const base64Img = require('base64-img');
const lqip = require('lqip');

// Qual arquivo será processado.
const filepath = 'imgs/1.jpg';

// Onde o arquivo será salvo.
const dest = 'imgs/placeholder/';

// Nome do arquivo final.
const output_name = 'placeholder-1';

// Gera o placeholder
lqip.base64(filepath).then((res) => {

  // Gera uma imagem com o formato PNG ou JPG.
  base64Img.img(res, dest, output_name, (error, filepath) => { 
    if (error) { throw err }
  });
});
~~~ 

3 - Execute o script usando o Node, e pronto.

O código é praticamente o mesmo que o anterior, mas agora usamos a função ```img()``` do pacote base64 para transformar o código gerado em uma imagem de fato. Essa função recebe como argumentos, na ordem apresentada, o código base64 que foi gerado anteriormente, o caminho para a pasta onde deve-se salvar o resultado, o nome para a imagem gerada, e uma função de retorno que será executada depois que a imagem é gerada. Todos são parâmetros obrigatórios. A função de retorno, nesse caso, está sendo usada apenas para definir o que acontece caso haja algum erro. Caso um erro ocorra, nós vamos exibi-lo na tela.

Geralmente, a versão final fica com o tamanho menor que 1kb, o que ainda pode impactar no carregamento da sua página, mas bem menos que a imagem original. 

O que fazer se precisamos trabalhar com mais de um arquivo? O módulo **lqip** não possui uma forma de processar múltiplos arquivos, mas podemos dar um jeito nisso usando um módulo [**fs**](https://nodejs.org/api/fs.html){: target="_blank" rel="noreferrer noopener nofollow"} que é nativo do NodeJS, e portanto não precisamos baixa-lo. Também vamos usar um pacote para nos ajudar a detectar a extensão dos arquivos chamado path. Isso vai ajudar a filtrar apenas os arquivos com extensões suportadas pela ferramenta lqip, o que, até o momento, se restringe às imagens com a extensão .jpg ou .png.

~~~ javascript 
// Importando os pacotes necessários.
const lqip = require('lqip');
const fs = require('fs');
const path = require('path');

// Qual pasta será verificada.
const dir = 'imgs/'; 

// Onde as imagens serão gravadas.
const dest = 'imgs/placeholders/';

// Lista todo o conteúdo da pasta.
fs.readdir(dir, (err, items) => {
    // Filtra somente os arquivos de imagem com a 
    // extensão aceita pelo lqip (PNG e JPG).
    const images = items.filter((item)=>{
        return path.extname(content).toLowerCase() === '.jpg' ||
               path.extname(content).toLowerCase() === '.png';
    })
    
    // Cria e salva o placeholder a partir das imagens
    // que passaram na filtragem.
    images.forEach(image =>{
        // Monta o endereço do arquivo usando o nome
        // da pasta onde os arquivos foram encontrados
        // e o nome do arquivo sendo processado.
        const filePath = dir + image; 

        lqip.base64(filePath).then((res) => {

        // Convert base64 to an image file
        base64Img.img(res, dest, image.replace(/.jpg|.png/, ''),
            (error, filepath) => {
               if (error) {
                   throw error;
               }
               // files.push(filepath);
            });
        });
    });
});
~~~

A função ```readdir()``` lista o nome e extensão (no caso de arquivos) de todo conteúdo de uma pasta, sejam arquivos, outras pastas, ou o que for. O resultado (a lista) é um [vetor](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array){: target="_blank" rel="noreferrer noopener nofollow"} contendo o nome dos items. Esse vetor é passado como segundo argumento para a função de retorno ```(err, items) => {...}```. Dentro do vetor, o identificador  ```tems``` será usado para referenciar a lista dos itens encontrados na pasta. 

Nós criamos uma nova variável chamada images, na qual vamos inserir somente os itens do vetor ```items``` que tenham uma extensão JPG ou PNG. Para isso nós usamos a função ```filter()```, que recebe uma função de retorno na qual definimos uma operação que verifica a igualdade entre a extensão da imagem, que é extraído do item usando a função ```extname()```, e os termos ".jpg" e ".png". Se houver correspondência, o item é retornado para a função ```filter()```, que por sua vez adiciona ao vetor que será retornado para a variável ```images```.

Verificar a extensão é importante pois 1) será retornado qualquer item que estiver na pasta indicada e 2) Apenas imagens PNG e JPG são aceitas pelo pacote lqip (até o momento). Isso pode ser um problema se você utiliza formatos mais novos e eficientes como o [WebP]({% link _posts/2022-01-14-webdev-webp-ptbr.md %}) ou o AVIF. No final, a variável ```images``` terá apenas os itens válidos para geração do placeholder.

Depois, a gente itera sobre todas as imagens no vetor ```images``` usando a função ```forEach()```, que recebe como parâmetro uma função de retorno que será executada para cada uma delas. No início, nós recuperamos o caminho completo para a imagem, que consiste no endereço da pasta que o contém e o seu nome. O endereço da pasta foi indicado na variável ```dir```, e o nome do arquivo está no parâmetro ``` image``` , que foi passado para a função de retorno. O caminho completo para a imagem é exigido pelo método ```base64()```. 

O resto do processamento segue o que foi discutido nos exemplos anteriores. Há apenas uma diferença: nós usamos o método ```replace()``` para retornar o valor de ```image```, que é o nome da imagem sendo processada, sem a extensão. Isso evita que a imagem final gerada tenha a extensão no nome. Sem isso, o resultado do processamento de uma arquivo cat.jpg, poderia ser salvo como cat.jpg.jpg. Além disso, nós adicionamos ao início do nome de cada imagem gerada com o termo "placeholder-"; Isso é para identificar melhor a imagem.

## Placeholder Usando uma Cor Predominante

O pacote lqip também expõe a função ```palette``` para identificar cores predominantes em uma imagem. Com essa informação, nós podemos criar um placeholder com a cor mais presente na imagem. 

Usaremos o pacote jimp para criar a imagem. Para instalar esse pacote, rode o comando ```npm install jimp --save-dev```. O código utilizado é apresentado abaixo

~~~ javascript
const lqip = require('lqip');
const base64Img = require('base64-img');
const fs = require('fs');
const jimp = require('jimp');

let dir = './imgs/'; // -> Origem.
let dest = './optimized/'; // -> Pasta destino.

// Busca todos os nomes dos arquivos dentro da pasta.
fs.readdir(dir, { withFileType: true }, (err, files) => {
    if (err) { throw err }

    // Filtra os arquivos para pegar apenas os que possuem
    // a extensão .jpg ou .png.
    files = files.filter((file) => {
        let extension = file.split('.').pop();
        return extension.toLowerCase() === 'jpg' || extension.toLowerCase() === 'png';
    })

    // Cria um placeholder para cada arquivo e salva cada um
    // com o mesmo nome dos arquivos originais.
    files.forEach((file) => {
        let filepath = dir + file;
        let dominant = getDominant(filepath);

        dominant.then((res)=>{
            let placeholder = genPlaceholder(res[0]);
            placeholder.write('placeholder-' + file);
        })
    })
})

// Gera um vetor com as cores mais presentes na imagem.
function getDominant(filepath) {
    return lqip.palette(filepath);
}

// Cria uma imagem com a cor mais presente na imagem.
function genPlaceholder(dominant) {
    return new jimp(10, 10, dominant, (err, image) => {
        if (err) { throw err }
    })
}
~~~

Dessa vez, ao invés da função ```base64()```, nós usamos a função ```palette()```. Ela deve gerar um vetor com algumas as 6 cores, em formato hexadecimal (e.g., #ffffff),que predominam na imagem. 

A primeira cor é então usada para pintar uma imagem 10x10 que foi criada com o construtor do jimp. Geralmente, essa imagem terá menos de 1kb. Caso queira, você pode escolher dimensões diferentes para a imagem. 

Como as imagens geradas são apenas um bloco com uma cor contínua, é interessante salvá-las como .png. Você ainda pode conseguir salvar alguns bytes usando alguma ferramenta para otimização de imagens.

## Usando Placeholders
É hora de adicionar os placeholders gerados em uma página. Nosso objetivo é usar essa imagem até que a original seja carregada pelo navegador com base em um algoritmo escrito em JavaScript, como mostrado no nosso post sobre [lazy loading]({% link _posts/2022-01-24-webdev-lazy-loading-ptbr.md %}). Nós podemos fazer isso com o seguinte código HTML:

~~~ html
<img src="placeholder.jpg" data-src="original.jpg" alt="Texto descritivo" class="lazy">
~~~

Mas temos que considerar as diferenças nas dimensões entre as duas imagens e como o elas vão afetar um aspecto importante de todas as páginas o deslocamento de layout (layout shift). 

A imagem gerada pelo lqip é minuscula. Durante o processamento, a largura da imagem é diminuída para 10px, e a altura diminui na mesma proporção. Esse redimensionamento é feito para que o resultado tenha menos de 1kb. Carregar uma imagem tão pequena, e depois trocar ela por outra muito maior não gera um efeito agradável para o usuário. 

Você pode acessar nossa demo para ver o resultado de tal implementação. Nessa demo, carregamos a imagem original 3 segundos depois que a página é carregada. Até que isso aconteça, um placeholder é usado para ocupar o lugar da imagem. Perceba que a troca entre as duas imagens é agressiva, digamos assim. Em um segundo você tem uma imagem que ocupa uma fração minuscula da área da tela, e no outro temos uma imagem enorme ocupando quase todo espaço disponível. Além disso, é possível ver o texto sendo deslocado quando a imagem original é carregada.

Podemos tentar resolver o problema definindo explicitamente a largura da imagem. Altura será definida pelo navegador automaticamente. Definindo 800px para a largura da imagem, nós obtemos o resultado (veja a demo online).

[VIDEO]

No entanto, ainda existe uma diferença na altura das duas imagens. Essa diferença não é tão gritante como antes, mas ainda atrapalha a transição entre as imagens, e o deslocamento do layout ainda é perceptível. Ademais, devido a essa modificação nossa imagem não é mais responsiva, i.e., ela não se adapta bem a alterações nas dimensões do viewport. Tente redimensionar o navegador para ver o que acontece.

[VIDEO]

Para configurar a página de modo que as imagens fiquem com as mesma dimensões, sejam responsivas e o deslocamento de layout não aconteça, nós podemos envolver a tag ```img``` com duas ```div```s. 

A primeira ```div```determina a largura e a altura que a imagem vai ocupar. Vamos configurar um valor fixo para a largura dela. A altura será definida de acordo com a largura da segunda ```div```. 






























Talvez você já tenha tido essa experiência: você entra em um site, começa a ler seu conteúdo e de repente o texto muda de lugar. Isso acontece quando o navegador carrega algum recurso que precisa de mais espaço do que aquele disponível, e portanto o que vier depois desse recurso é reposicionado. Isso é chamado de layout shift (deslocamento de layout).

Quando usamos a técnica de [lazy loading]({% link _posts/2022-01-24-webdev-lazy-loading-ptbr.md %}){: target="_blank" rel="noreferrer noopener nofollow"} para adiar imagens, por exemplo, pode ser que a imagem carregue em um momento inoportuno, por exemplo quando estamos lendo uma parte do texto. Nessa situação, o texto é empurrado para baixo ou puxado para cima, tirando nossa concentração, e atrapalhando nosso fluxo de leitura. 

Isso pode ser *evitado* com a definição da largura e da altura da imagem no elemento que invoca a imagem. Se o elemento já está ocupando o mesmo espaço que a imagem, então não haverá necessidade de mover nada quando ela for finalmente carregada. 

No entanto, nem sempre da para definir os mesmos valores para as dimensões do elemento e da imagem. Frequentemente, a área disponível para o recurso tem uma largura menor, por exemplo. A solução nesse caso é escolher valores para os elementos que sejam proporcionais as dimensões da imagem. Por exemplo, uma imagem de 800 x 400 (800px de largura por 400px altura) pode ser colocada em um elemento com dimensões 600 x 300, sem que o redimensionamento (mudança nas dimensões) da imagem distorçam seu conteúdo. E é isso que vamos fazer na seção seguinte.

## Definindo a Largura e Altura da Imagem

Para o nosso exemplo, nós vamos usar uma imagem 1280 x 839, e a área disponível tem 640px. A [imagem está disponível para download no Pixabay](https://pixabay.com/photos/milky-way-night-stars-person-man-4006343/){: target="_blank" rel="noreferrer noopener nofollow"}download no Pixabay.

O conteúdo do corpo da nossa página é:

~~~ html
<div class="container">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio expedita, sunt impedit veniam! Expedita quasi nostrum assumenda nihil numquam tempore, fugit repudiandae distinctio dolor totam corporis eligendi omnis consequuntur.</p>

    <div class="prevent-reflow">
        <img data-src="night-sky.jpg" alt="Alternative text" id="image">
    </div>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio expedita, sunt impedit veniam! Expedita quasi nostrum assumenda nihil numquam tempore, fugit repudiandae distinctio dolor totam corporis eligendi omnis consequuntur.</p>
</div>
~~~ 

Nós queremos que o navegador não carregue a imagem de inicio. Para isso, nós removemos o endereço da imagem do atributo ```src``` para o atributo customizado ```data-src```. Para carregar a imagem, nós vamos usar uma função que será executada 3 segundos depois que a página é carregada, usando para isso a função ```setTimeOut())```, que recebe como argumentos uma função e o tempo que deve esperar em milisegundos.

~~~ javascript
window.onload = function() {
    // Carrega a imagem depois de 3 segundos
    setTimeout(function(){
        let element = document.getElementById("image");
        // Move o valor de data-src para src
        element.src = element.dataset.src;
    }, 3000);
}
~~~

Dessa maneira, nós conseguimos demonstrar como o deslocamento de layout pode afetar a experiência do usuário que visita uma página com esse problema.

Também vamos usar um documento CSS para estilizar a página. Inicialmente, o documento possuí apenas o estilo para a nossa ```<div class="container">```.

~~~ css
.container {
    max-width: 640px;
    margin: auto;
}
~~~

Vamos começar definindo a largura e a altura para nossa imagem usando para isso as propriedades ```width``` e ```height``` do CSS. A mídia deve ocupar toda a largura do elemento, então definimos o valor 100% para o ```width```. Assim, quando o ```.container``` for tiver a largura alterada, isso vai refletir na largura da imagem.

A altura, por outro lado, exige um pouco mais de trabalho. Primeiro, é preciso fazer um calculo. Se a dimensão da imagem é 1280 x 839, qual deve ser a altura dela quando a largura é 640? Podemos resolver com a famosa [regra de três](https://brasilescola.uol.com.br/matematica/regra-tres-simples.htm){: target="_blank" rel="noreferrer noopener nofollow"}. Considerando X a altura da imagem quando a largura é 640, podemos responder essa pergunta da seguinte forma:

/[\frac{1280}{640}=\frac{839}{x}\rightarrow 1280x=839\cdot 640\rightarrow x= \frac {536.960}{1280}\rightarrow x=419,5/]

Portanto, as dimensões da imagem na página será 640 x 419. Nós vamos arredondar pois não é possível definir um valor fracionário para a propriedade ```height``` ao definir o comprimento em px (pixels). O resultado no CSS é:

~~~ css
#image{
    width: 100%;
    height: 419px;
}
~~~

Uma maneira de resolver isso é colocando uma imagem muito pequena (no sentido de espaço ocupado na memória do computador) para guardar o lugar para a imagem original que será carregada usando uma técnica de lazy loading. Normalmente, nos referimos a essa imagem com o termo placeholder.

Essa imagem deve ter as mesmas dimensões (altura e largura) que a imagem original para a qual ela está guardando lugar. Caso ela tenha dimensões diferentes, o navegador vai ter que recalcular todo o layout e reposicionar os outros componentes da página que estiver envolta quando carregar a imagem original.

No artigo escrito por [Rahul Nanwani no CSS Tricks](https://css-tricks.com/the-complete-guide-to-lazy-loadng-images/){: target="_blank" target="noreferrer noopener nofollow"} é sugerido a utilização de placeholders com uma cor dominante da imagem original (como no gif 1) ou uma versão borrada e de baixa qualidade da mesma (como no gif 2). Assim, enquanto a imagem não é carregada o usuário não precisa ficar olhando para uma imagem padrão, ou uma tela em branco.

[GIF]

[GIF]


O placeholder usado pode ter qualquer extensão (e.g., PNG, JPG, etc.), mas pode ser interessante usar um placeholder codificado em base64, o que pode deixar o carregamento da página ainda mais rápido, pois o navegador não terá que baixar nada até a imagem propriamente seja requisitada.

O XnConvert é um programa muito versátil, que nos permite converter e comprimir imagens, e fornece uma porrada opções para manipular a imagem gerada com o que é chamado de Ações.


XnConvert is a fast, powerful and free cross-platform batch image converter. It allows to automate editing of your photo collections: you can rotate, convert and compress your images, photos and pictures easily, and apply over 80 actions (like resize, crop, color adjustments, filter, ...). All common picture and graphics formats are supported (JPEG, TIFF, PNG, GIF, WebP, PSD, JPEG2000, JPEG-XL, OpenEXR, camera RAW, HEIC, PDF, DNG, CR2). You can save and re-use your presets for another batch image conversion.
    