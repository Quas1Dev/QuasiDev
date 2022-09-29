---
layout: article
title: C
description: Aprenda a criar placeholders mais eficientes com pacotes do Node JS.
permalink: "/webdev/:title"
categories:
- Desenvolvimento Web
tags:
- lqip
- placeholder
- cor dominante
- lazy loading
- desenvolvimento web
date: 2022-01-29T14:30:00.000+00:00
lastUpdated: 2022-02-28
author: Fernando Bonfim
excerpt_separator: "<!--more-->"
published: false

---
Quando aplicamos uma técnica de técnica de [lazy loading]({% link _tips/2022-01-24-webdev-lazy-loading-ptbr.md %}), é comum, e até mais fácil, deixar espaços vazios no documento HTML bem onde as imagens serão carregadas.
<!--more-->

Mas nós podemos fazer melhor. Ao invés de nada, nós podemos carregar inicialmente uma imagem mais leve, que servirá como um placeholder (marcador de lugar) até que as imagens reais do site sejam carregadas. Isso ajuda a promover uma experiência mais agradável para o visitante da página.

## Gerando imagens de baixa qualidade

<dfn>Low Quality Image Placeholder</dfn> (Em tradução livre "Imagem provisória de baixa qualidade"), é uma versão de baixa qualidade de uma imagem, que é usada enquanto a imagem original não é carregada.

Como era de se imaginar, existem pacotes para o Node JS que podem fazer a geração dessas imagens para a gente. Você só vai precisar do [Node JS](https://nodejs.org/en/){: target="_blank" rel="noreferrer noopener nofollow"} instalado na sua máquina, e criar iniciar um projeto NodeJS.

1. Para iniciar um novo projeto, abra um interpretador de comandos (e.g., prompt de comando);
2. Navegue até a pasta que pretende guardar os arquivos do projeto;
3. Rode o comando `npm init -y`.

Você pode [ler a documentação](https://docs.npmjs.com/cli/v8/commands/npm-init){: target="_blank" rel="noreferrer noopener nofollow"} para saber mais sobre o comando mencionado.

Agora, nós vamos instalar um pacote. Pacotes, em Node JS, são programas escritos com JavaScript pela comunidade que utiliza o NodeJS e é disponibilizado para qualquer um que deseja utilizá-lo para em seu próprio projeto. O pacote que vamos instalar se chama [LQIP](https://www.npmjs.com/package/lqip){: target="_blank" rel="noreferrer noopener nofollow"}, é só seguir os passos apresentados abaixo.

1 - Instale o LQIP usando o comando `npm install --save-dev lqip` dentro da pasta do seu projeto. Esse comando utiliza a ferramenta npm para instalar o LQIP.

2 - Salve um arquivo JavaScript, por exemplo "lqip.js", com as seguintes instruções:

``` javascript
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
```

3 - Execute o arquivo digitando `node nome-do-arquivo.js`. Exemplo: `node lqip.js`.

O trecho acima deve processar a imagem 1.jpg dentro da pasta imgs. É usada a função `base64()` que está contido pacote lqip. Esse método recebe o caminho para a imagem, [base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64){: target="_blank" rel="noreferrer noopener nofollow"} com a extensão JPG ou PNG (dependendo da extensão da imagem original) de baixa qualidade, e retorna a sequência de caracteres (string) `data:[tipo MIME];base64,[Código Base64]`. O tipo MIME será `image/jpeg` ou `image/jpg` para imagens jpg, ou `image/png` para imagens PNG, e Código Base64 será substituído pela representação da imagem em base64.

Se quiser, você pode usar esse código base64 mesmo. É só colocar o texto gerado no atributo `src` ou `srcset` das tags `<img>` ou `<source>`, conforme necessário.

``` html
<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAcACgMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APw1+DukfsnfEvwR431zWNH+IukXPhWSxGjtoXhzw7riazHdraWhgaTVfGnhRork6t/a0kS3NpY2yaXZwzNeLdTR6W3wufeImKymtgcqhkixOIxtSpT9usVSpUsOoU5zdWu5Oc/ZvljCCw9OvV9rUipU40lOrD9M4e4J/trDY/MI5h7HD4KMVODo81Srzv3VSipKPtHaV3UlTgor4pSaT+er7Vv2Xbe+vLddJ+JrLBdXEIZ9I8MxsRFM6AsieIpURiFyUWWVVOQsjgBjMc24onGM1hsnSklJJ4vGNpSV0m1g0m1e2iS7HFLK+H4SlHnzF8snG/sqCvZ2vb2ztsf/2Q==" data-src="night-sky.jpg" alt="Texto descritivo da imagem" class="lazy">
```

No entanto, se não quiser abarrotar seu documento HTML com essa mistura de letras e número, nós podemos converter essa imagem gerada para JPG ou PNG. Eu vou usar o pacote [base64-img](https://github.com/douzi8/base64-img){: target="_blank" rel="noreferrer noopener nofollow"} para processar o código em base64 e retornar uma imagem .jpg/.png. Siga os passos a seguir:

1 - Baixe o pacote com o comando `npm install --save-dev base64-img`.

2 - Modifique o script para usar o base64-img.

``` javascript
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
```

3 - Execute o script usando o Node, e pronto.

O código é praticamente o mesmo que o anterior, mas agora usamos a função `img()` do pacote base64 para transformar o código gerado em uma imagem de fato. Essa função recebe como argumentos, na ordem apresentada, o código base64 que foi gerado anteriormente, o caminho para a pasta onde deve-se salvar o resultado, o nome para a imagem gerada, e uma função de retorno que será executada depois que a imagem é gerada. Todos são parâmetros obrigatórios. A função de retorno, nesse caso, está sendo usada apenas para definir o que acontece caso haja algum erro. Caso um erro ocorra, nós vamos exibi-lo na tela.

Geralmente, a versão final fica com o tamanho menor que 1kb, o que ainda pode impactar no carregamento da sua página, mas bem menos que a imagem original.

O que fazer se precisamos trabalhar com mais de um arquivo? O módulo **lqip** não possui uma forma de processar múltiplos arquivos, mas podemos dar um jeito nisso usando um módulo [**fs**](https://nodejs.org/api/fs.html){: target="_blank" rel="noreferrer noopener nofollow"} que é nativo do NodeJS, e portanto não precisamos baixa-lo. Também vamos usar um pacote para nos ajudar a detectar a extensão dos arquivos chamado path. Isso vai ajudar a filtrar apenas os arquivos com extensões suportadas pela ferramenta lqip, o que, até o momento, se restringe às imagens com a extensão .jpg ou .png.

``` javascript 
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
```

A função `readdir()` lista o nome e extensão (no caso de arquivos) de todo conteúdo de uma pasta, sejam arquivos, outras pastas, ou o que for. O resultado (a lista) é um [vetor](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array){: target="_blank" rel="noreferrer noopener nofollow"} contendo o nome dos items. Esse vetor é passado como segundo argumento para a função de retorno `(err, items) => {...}`. Dentro do vetor, o identificador  `tems` será usado para referenciar a lista dos itens encontrados na pasta.

Nós criamos uma nova variável chamada images, na qual vamos inserir somente os itens do vetor `items` que tenham uma extensão JPG ou PNG. Para isso nós usamos a função `filter()`, que recebe uma função de retorno na qual definimos uma operação que verifica a igualdade entre a extensão da imagem, que é extraído do item usando a função `extname()`, e os termos ".jpg" e ".png". Se houver correspondência, o item é retornado para a função `filter()`, que por sua vez adiciona ao vetor que será retornado para a variável `images`.

Verificar a extensão é importante pois 1) será retornado qualquer item que estiver na pasta indicada e 2) Apenas imagens PNG e JPG são aceitas pelo pacote lqip (até o momento). Isso pode ser um problema se você utiliza formatos mais novos e eficientes como o [WebP]({% link _tips/2022-01-14-webdev-webp-ptbr.md %}) ou o AVIF. No final, a variável `images` terá apenas os itens válidos para geração do placeholder.

Depois, a gente itera sobre todas as imagens no vetor `images` usando a função `forEach()`, que recebe como parâmetro uma função de retorno que será executada para cada uma delas. No início, nós recuperamos o caminho completo para a imagem, que consiste no endereço da pasta que o contém e o seu nome. O endereço da pasta foi indicado na variável `dir`, e o nome do arquivo está no parâmetro `image` , que foi passado para a função de retorno. O caminho completo para a imagem é exigido pelo método `base64()`.

O resto do processamento segue o que foi discutido nos exemplos anteriores. Há apenas uma diferença: nós usamos o método `replace()` para retornar o valor de `image`, que é o nome da imagem sendo processada, sem a extensão. Isso evita que a imagem final gerada tenha a extensão no nome. Sem isso, o resultado do processamento de uma arquivo cat.jpg, poderia ser salvo como cat.jpg.jpg. Além disso, nós adicionamos ao início do nome de cada imagem gerada com o termo "placeholder-"; Isso é para identificar melhor a imagem.

## Placeholder usando uma cor predominante

O pacote lqip também expõe a função `palette` para identificar cores predominantes em uma imagem. Com essa informação, nós podemos criar um placeholder com a cor mais presente na imagem.

Usaremos o pacote jimp para criar a imagem. Para instalar esse pacote, rode o comando `npm install jimp --save-dev`. O código utilizado é apresentado abaixo

``` javascript
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
    // com o mesmo nome dos arquivos originais prefixados com
    // 'placeholder-'.
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
```

Dessa vez, ao invés da função `base64()`, nós usamos a função `palette()`. Ela deve gerar um vetor com algumas as 6 cores, em formato hexadecimal (e.g., #ffffff),que predominam na imagem.

A primeira cor é então usada para pintar uma imagem 10x10 que foi criada com o construtor do Jimp. Geralmente, essa imagem terá menos de 1kb. Caso queira, você pode escolher dimensões diferentes para a imagem.

Como as imagens geradas são apenas um bloco com uma cor contínua, é interessante salvá-las como .png. Você ainda pode conseguir salvar alguns bytes usando alguma ferramenta para otimização de imagens.

Se preferir, você pode pular a geração de uma nova imagem para servir de placeholder com a cor dominante, e apenas usar o código hexadecimal gerado como a cor de fundo do elemento que carrega a imagem. Desse modo, será poupado uma visita ao servidor e o carregamento da imagem.

## Usando os placeholders

Tenha em mente que as imagens geradas são pequenas versões das originais, e geralmente não possuem a mesma proporção. Portanto, você vai precisar ajusta-las para não ficar esquisito na página. Nós queremos um resultado como o mostrado abaixo:

<video loop autoplay repeat muted preload="none">
<source src="{% link /assets/midia/image-placeholder/placeholder-demo.webm %}" type="video/webm">
<source src="{% link /assets/midia/image-placeholder/placeholder-demo.ogg %}" type="video/ogg">
<source src="{% link /assets/midia/image-placeholder/placeholder-demo.mp4 %}" type="video/mp4">
Your browser does not support the video tag.
</video>

Esse é o código HTML no `<body>` da página no exemplo acima:

``` html
<div class="container">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio expedita, sunt impedit veniam! Expedita quasi nostrum assumenda nihil numquam tempore, fugit repudiandae distinctio dolor totam corporis eligendi omnis consequuntur.</p>

  <div class="aspect-ratio-box">
    <img src="placeholder-night-sky.jpg" data-src="imgs/night-sky.jpg" alt="Alternative text" id="image">
  </div>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio expedita, sunt impedit veniam! Expedita quasi nostrum assumenda nihil numquam tempore, fugit repudiandae distinctio dolor totam corporis eligendi omnis consequuntur.</p>
</div>
```

E o CSS:

``` css
.container {
  max-width: 640px;
  margin: auto;
  border: 1px solid black;
}

.aspect-ratio-box{
  position: relative;
  padding-bottom: 65.54%;
}

#image{
  width: 100%;
  height: 100%;
  position: absolute;
}
```

Vamos analisar as instruções em cada regra de cima para baixo. Nós criamos um contêiner envolta do conteúdo da página e adicionamos as seguintes propriedades:

**max-width: 640px** - Define uma largura máxima para o elemento. Assim, ele só pode ter a largura menor ou igual ao valor definido para esse parâmetro.

**margin: auto** - Ajuda a centralizar o elemento.

**border: 1px solid #000** - Apenas cria uma borda em volta do elemento.

Agora, vamos analisar as propriedades definidas para o contêiner da imagem com a classe aspect-radio-box.

**position: relative** - Para o nosso propósito, essa propriedade garante que todos os elementos filhos serão posicionados em relação a esse contêiner.

**padding-bottom: 65.42%** - Essa declaração define uma altura para o elemento. A porcentagem é em relação a **_largura do elemento pai_**, que nesse caso é o elemento que envolve o conteúdo da página. Desse modo, quando o elemento `.container` tem sua largura redimensionada, a altura do elemento `.aspect-ratio-box` também é modificada.

A altura foi definida dessa forma para que o elemento mantenha a mesma proporção quando for redimensionado. O valor foi escolhido especificamente para a imagem. Considerando suas dimensões, foi realizado o seguinte o cálculo largura / altura * 100%.

Por último, vamos considerar o estilo da nossa imagem com a classe `.image`:

**position: absolute** - Isso permite que o elemento não fique preso ao tamanho do elemento pai. Dessa forma, ele pode ser posicionado sobre a área do `padding`.

**width: 100%** - Estica a imagem para preencher a largura de seu contêiner. Dessa forma, o placeholder e a imagem original terão a mesma largura.

**height: 100%** - Estica a imagem para preencher a altura de seu contêiner. Dessa forma, o placeholder e a imagem original terão a mesma altura.

Você pode explorar [nossa demo]({% link /demos/image-placeholder/placeholder-demo.html %}) usando as [ferramentas do desenvolvedor](https://developer.chrome.com/docs/devtools/overview/){: target="_blank" rel="noreferrer noopener nofollow"} para entender melhor.