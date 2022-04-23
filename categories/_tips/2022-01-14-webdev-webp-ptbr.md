---
title: 'WebP: O que é e Como Usar?'
layout: article
permalink: '/web-dev/:title'
description: 'Entenda de uma vez o que é WebP e como aproveitar esse formato para acelerar seu site.'
categories: ["Desenvolvimento Web"]
tags: imagem, otimização, web, pagespeed
date: 2022-01-14 00:00:00
lastUpdated: 2022-01-14 21:50:00
author: "Fernando"
excerpt_separator: <!--more-->
sources:
  - title: 'WebP, a new image format for the Web - Google Code Blog'
    url: 'http://googlecode.blogspot.com/2010/09/webp-new-image-format-for-web.html ' 
  - title: 'Perguntas frequentes - WebP'
    url: 'https://developers.google.com/speed/webp/faq#how_can_i_detect_browser_support_for_webp'
  - title: 'Getting Started - WebP'
    url: 'https://developers.google.com/speed/webp/docs/using '
  - title: 'Work with webP files in Photoshop - Photoshop'
    url: 'https://helpx.adobe.com/photoshop/kb/support-webp-image-format.html '
  - title: 'cwebp - documentação'
    url: 'https://developers.google.com/speed/webp/docs/cwebp'
  - title: 'Lossy and Lossless (RLE) Compression - 
MrBrownCS - YouTube'
    url: 'https://youtu.be/v1u-vY6NEmM'
  - title: 'Imagemin-mozjpeg'
    url: 'https://www.npmjs.com/package/imagemin-mozjpeg'
  - title: 'Jpegsr9'
    url: 'https://www.ijg.org'
  - title: 'Pngcrush'
    url: 'https://pmt.sourceforge.io/pngcrush/'
  - title: 'imagemin-pngquant'
    url: 'https://www.npmjs.com/package/imagemin-pngquant'
  - title: 'Image Classification using SSIM - Medium'
    url: 'https://towardsdatascience.com/image-classification-using-ssim-34e549ec6e12'
---

As imagens são recursos muito expressivos, e podem ser usadas para representar conceitos de forma visual, fazer propaganda de um produto ou deixar a página visualmente mais agradável para o usuário. É realmente difícil encontrar um site ou uma página de um site que utilize zero imagens. 
<!--more-->

O problema surge quando essas imagens são realmente enormes. Quando estamos com uma internet mais lenta ou instável, podemos até ver a imagem sendo carregada lentamente, se "desenrolando" de cima para baixo. Usuários com internet móvel, que geralmente é limitada, são muito prejudicados, pois imagens maiores significam mais bytes para baixar, e o uso de mais recursos para decodificação das imagens. O desafio é equilibrar o tamanho do arquivo e a qualidade que a imagem deve possuir.
 
Esse problema não se resolve com uma única técnica. Existem muitas técnicas para diminuir o tamanho de imagens, e diminuir o impacto delas no carregamento da página. Esse tema pode ter facilmente um livro inteiro dedicado a discuti-lo, mas aqui vamos focar no método de compressão WebP, e em como utilizar ele para conseguir boas imagens e ainda sim salvar algum bytes.
 
## O que é o WebP?
O WebP é um método de compressão {% include postLink.html text="lançado pela Google no dia 30 de setembro de 2010" url="http://googlecode.blogspot.com/2010/09/webp-new-image-format-for-web.html " %}. Ele é um derivado dos algoritmos de compressão VP8, que são utilizados no formato de vídeos WebM. Enquanto o WebM é para vídeos, o WebP é para imagens.
 
Esse formato permite a compressão {% include postLink.html text="lossy e lossless" url="https://youtu.be/v1u-vY6NEmM" %} de forma mais eficiente que os formatos de imagens mais comuns,  promovendo imagens com a mesma qualidade que podemos conseguir comprimindo com outros métodos, porém ocupando menos espaço.
 
Com essas propriedades o formato objetiva deixar a web mais rápida sem abrir mão da qualidade das imagens. Afinal uma imagem menor leva menos tempo para o download, beneficiando principalmente os usuários com internet limitada ou de baixa qualidade.
 
É importante mencionar que o método WebP ainda não é um substituto definitivo para os outros formatos. Você ainda precisa manter uma versão da imagem original em formatos mais antigos, como o JPG, para que esta seja carregada em navegadores que não suportam WebP. Durante o artigo vamos ver como podemos servir as imagens de acordo com o suporte do navegador.

## Comparações
A Google, criadora do formato, constatou que uma imagem WebP é{% include postLink.html text="25 a 34%" url="https://developers.google.com/speed/webp/docs/webp_study" %} menor que uma imagem com qualidade equivalente em JPG, e {% include postLink.html text="26% menor" url="https://developers.google.com/speed/webp/docs/webp_lossless_alpha_study" %} que uma imagem PNG.
 
Eu rodei um teste simples para verificar a efetividade. Para fazer isso, foram selecionadas 20 imagens (10 JPGs e 10 PNGs) aleatórias na internet. Cada uma dessas imagens foram convertidas para WebP. As mesmas imagens ainda foram processadas usando ferramentas de compressão JPG e PNG, assim podemos comparar as versões mais otimizadas desses formatos com as versões comprimidas para WebP.
 
Mas antes uma observação precisa ser feita: o objetivo do teste não é substituir qualquer pesquisa mais aprofundada, mas sim verificar como o WebP se sai em situações comuns.

## JPG x WebP
Foram selecionadas 10 imagens JPG, com tamanho e dimensões variáveis. O tamanho total de todos os arquivos é de 1.31Mb e o tamanho médio dos arquivos é de 134,33 Kb.
 
Foram usadas as seguintes ferramentas:
 
{% include postLink.html text="cwebp" url="https://developers.google.com/speed/webp/docs/cwebp" %} - Para compressão para o formato WebP. Vamos usar o cwebp com as opções -q 80 -m 6 e os valores padrões para as outras opções.
 
{% include postLink.html text="compress-or-die" url="https://compress-or-die.com/jpg" %}- Para compressão JPG. As opções de compressão serão ajustadas para que o resultado tenha a mesma qualidade das imagens comprimidas para WebP.
 
Para a verificação da qualidade da imagem, usamos um {% include postLink.html text="programinha feito em python" url="https://ourcodeworld.com/articles/read/991/how-to-calculate-the-structural-similarity-index-ssim-between-two-images-with-python" %} que faz a comparação das imagens, e então atribui um {% include postLink.html text="índice SSIM" url="https://en.wikipedia.org/wiki/Structural_similarity" %} de acordo com o resultado. O índice SSIM é um número que varia entre 0 e 1, em que 0 indica que a imagem é completamente diferente do original, e 1 indica que a imagem é idêntica ao arquivo original. É como se fosse uma nota para a imagem comprimida - uma nota que avalia o quão ela é parecida com a imagem original.
 
O processo foi o seguinte:
 
1 - As imagens originais foram comprimidas para WebP usando o comando ```cwebp -q 80 -m 6```;
2 - Os arquivos resultantes tiveram sua qualidade medida;
3 - E por fim, as imagens JPG originais foram otimizadas usando a ferramenta de compressão JPG disponível no site compress-or-die. As opções foram aplicadas de forma que o índice SSIM dessas imagens otimizadas fosse 1 quando comparadas com as imagens otimizadas em WebP.
 
O resultado da compressão WebP e JPG foi é resumido na tabela:

<div class="table-container">
<table class="table table-model-1">
<thead>
  <tr>
    <th>Formato</th>
    <th>Tamanho médio dos arquivos </th>
    <th>SSIM médio (Comparação com original)</th>
    <th>Tamanho da pasta</th>
    <th>Armazenamento salvo em %</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Originais</td>
    <td>134,144Kb</td>
    <td>-</td>
    <td>1.341,44Kb</td>
    <td>-</td>
  </tr>
  <tr>
    <td>JPG</td>
    <td>50,11Kb</td>
    <td>0,95467</td>
    <td>501Kb</td>
    <td>62,65%</td>
  </tr>
  <tr>
    <td>WebP</td>
    <td>40,93Kb</td>
    <td>0,95467</td>
    <td>410Kb</td>
    <td>69.44%</td>
  </tr>
</tbody>
</table>
</div>
**Nota**: Os dados dos arquivos originais foram adicionados para melhor comparação. O tamanho da pasta dos arquivos foi convertido para Kb multiplicando por 1.024, ao invés de 1.000.

## WebP x PNG
Selecionamos 10 imagens PNG aleatórias na internet, com dimensões e tamanho variados. O tamanho total de todos os arquivos é de 1.15Mb, e o tamanho médio dos arquivos é de 117,63Kb. Vamos verificar o quanto conseguimos reduzir usando três ferramentas:
 
{% include postLink.html text="**cwebp**" url="https://developers.google.com/speed/webp/docs/cwebp" %}: Para compressão WebP sem perdas (lossless). Foi utilizado com o comando ```-lossless -q 100 -m 6```.
 
{% include postLink.html text="**TinyPNG**" url="https://tinypng.com" %}: Para otimização com perdas(lossy) dos arquivos PNG originais. Essa ferramenta passa a imagem por um processo de [quantização de cor](https://en.wikipedia.org/wiki/Color_quantization), que consiste no descarte seletivo de informações de cores, reduzindo o tamanho do arquivo.
 
{% include postLink.html text="**PNGGauntlet**" url="https://pnggauntlet.com" %}: Para otimização sem perdas (lossless) dos arquivos PNG originais. Essa ferramenta utiliza métodos de otimização que reduzem o tamanho do arquivo sem perda alguma de informação. Ou pelo menos tenta.
 
Os resultados foram o seguinte:

<div class="table-container">
<table class="table table-model-1">
<thead>
  <tr>
    <th>Ferramenta</th>
    <th>Tamanho médio dos arquivos</th>
    <th>SSIM médio (Comparado com os originais)</th>
    <th>Tamanho da pasta</th>
    <th>Armazenamento salvo em %</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Originais</td>
    <td>117,76</td>
    <td>-</td>
    <td>1.177.6kb</td>
    <td>-</td>
  </tr>
  <tr>
    <td>PNGGauntlet</td>
    <td>92,07Kb</td>
    <td>1</td>
    <td>922Kb</td>
    <td>21,71%</td>
  </tr>
  <tr>
    <td>cwebp</td>
    <td>52,64Kb</td>
    <td>1</td>
    <td>568Kb</td>
    <td>51,76%</td>
  </tr>
  <tr>
    <td>TinyPNG</td>
    <td>36,70Kb</td>
    <td>0,99640</td>
    <td>368Kb</td>
    <td>68,75%</td>
  </tr>
</tbody>
</table>
</div>

A ferramenta TinyPNG se saiu melhor nessa comparação. Isso ocorre, muito provavelmente, porque o TinyPNG não se preocupa tanto em manter todas as informações da imagem. Seu propósito é pegar uma {% include postLink.html text="imagem de 24-bits" url="https://pt.wikipedia.org/wiki/Profundidade_de_cor" %} (uma imagem que utiliza 24 bits para representar uma cor em um pixel) e reconstruir essa mesma imagem  com, no máximo, 256 cores da imagem original. Esse valor máximo permite que uma imagem seja exibida usando apenas 8 bits por pixel e, portanto, ocupar menos espaço. Dessa forma, o tamanho reduzido é resultado de um processo que destrói um pouco de informação de cores da imagem, mas sem mexer com a forma dos objetos que ela retrata.
 
Já o PNGGauntlet combina as ferramentas PNGOUT, OptiPNG e DeflOpt para encontrar o melhor método para otimização da imagem, de forma a manter todas as cores e a forma dos objetos presentes. O cwebp (com a opção ```-lossless```) aplica um ou mais métodos na imagem de acordo com suas características, mas também tenta manter a qualidade da imagem.
 
Nós podemos diminuir ainda mais o tamanho das imagens geradas pelo TinyPNG, passando elas por um processo de otimização sem perda, como o executado pelo PNGGauntlet. Dessa forma, podemos obter uma versão mais compacta desses arquivos de 8-bits.
 
E foi isso que fizemos: pegamos as imagens resultantes do processo aplicado pela ferramenta TinyPNG e otimizamos com as ferramentas PNGGauntlet e cwebp, e o resultado foi o seguinte:

<div class="table-container">
<table class="table table-model-1">
<thead>
  <tr>
    <th>Ferramenta</th>
    <th>Tamanho médio dos arquivos</th>
    <th>SSIM médio (Comparado com as imagens Tinyficadas)</th>
    <th>Tamanho da pasta</th>
    <th>Armazenamento salvo em % (Comparado com imagens Tinyficadas)</th>
    <th>Armazenamento Salvo em % em relação aos arquivos originais</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Imagens "tinyficadas"</td>
    <td>36,70Kb</td>
    <td>-</td>
    <td>368Kb</td>
    <td>-</td>
    <td>68%</td>
  </tr>
  <tr>
    <td>PNGGauntlet</td>
    <td>35,68Kb</td>
    <td>1</td>
    <td>357Kb</td>
    <td>2.98%</td>
    <td>69,68%</td>
  </tr>
  <tr>
    <td>cwebp</td>
    <td>31,14Kb</td>
    <td>1</td>
    <td>311Kb</td>
    <td>-15,48%</td>
    <td>73,59%</td>
  </tr>
</tbody>
</table>
</div>

Perceba que os arquivos permanecem iguais (como indicado pelo SSIM = 1) aos arquivos "tinyficados".

## Resultado
Na comparação WebP x JPG conseguimos reduzir o tamanho total dos arquivos em 69,44% em relação ao tamanho total dos arquivos em JPG, mantendo uma qualidade similar. Esse resultado supera o ganho obtido com a ferramenta de compressão JPG em 6,79%.
 
Já na comparação PNG x WebP, os arquivos WebP ficaram 51,76% menores que as imagens originais sem perda de qualidade, e 73,59% menores que as originais após a compressão das imagens transformadas com o TinyPNG.
 
De acordo com os números obtidos nesses testes, o WebP realmente possui uma superioridade em relação aos outros formatos. Seu método de compressão acabou superando o resultado de muitos métodos de otimização que estão a mais tempo no mercado.

Podemos observar que a compressão para WebP pode ser uma solução rápida para compactação de arquivos de imagem, e ainda supera o resultado de outros métodos de otimização que estão a mais tempo no mercado.
 
Apesar dos bons resultados, nós devemos levar em conta que a amostra usada no teste é muito pequena, e portanto não é possível definir exatamente qual seria o resultado com muitas imagens, e as imagens não passaram por nenhum tratamento prévio. Os experimentos do Google são mais completos, feito por quem entende muito bem do assunto, e seus resultados são mais cautelosos, mas ainda muito bons. Enfim, vale ao menos a sua atenção para um teste de acordo com o que precisar.
 
## Como converter imagens para WebP?
Temos várias ferramentas para conversão de imagens para WebP, veja abaixo algumas delas.

### Ferramentas Online
Existem várias ferramentas online que permitem a conversão de arquivos, tais como o [Squoosh](https://squoosh.app){: rel="noreferrer nofollow noopener" target="_blank"}, [Online-convert](www.online-convert.com){: rel="noreferrer nofollow noopener" target="_blank"} e o [Convertio](https://convertio.co/pt/){: rel="noreferrer nofollow noopener" target="_blank"}. Cada uma dessas ferramentas tem suas limitações. Teste cada uma e veja qual atende melhor às suas necessidades.

### Ferramentas de Linha de Comando
O cwebp é uma ferramenta de linha de comando que nos permite utilizar o terminal (e.g., PowerShell, Prompt de Comando, etc.) para compressão de imagens para o formato WebP.
 
**Nota**: com ele você pode comprimir uma imagem de cada vez. Se você precisa comprimir múltiplas imagens, de forma rápida, precisara criar um script que executa a ferramenta para cada imagem de forma automática. Porém, para o processamento de múltiplas imagens, existem opções mais simples das quais falaremos em outra seção.
 
Você pode fazer o download dessa ferramenta acessando a [página de download](https://developers.google.com/speed/webp/download){: rel="noreferrer nofollow noopener" target="_blank"} no site oficial do WebP. Basta escolher uma opção entre "download for Windows", "download for Linux" e "download for MacOS X". Se preferir é possível encontrar todas as versões no [repositório de versões](https://storage.googleapis.com/downloads.webmproject.org/releases/webp/index.html){: rel="noreferrer nofollow noopener" target="_blank"}(as versões mais atuais estão na parte inferior da página).
 
Na verdade o que você vai baixar se trata de uma biblioteca, a libwebp, que possui o cwebp e mais algumas outras ferramentas como o dwebp (decodificador de imagens WebP) e o vwebp (Visualizador de imagens WebP).

#### Como utilizar o cwebp?
Após o download, descompacte o arquivo em alguma pasta. Eu vou colocar os arquivos em uma pasta com nome "libwebp" criada dentro da pasta "Arquivos de Programas". Após a descompactação, dentro da pasta "libwebp", teremos a pasta "bin" que contém o cwebp.exe e outras ferramentas.

{% include post_img.html 
png="/assets/imgs_posts/webdev/webp/libwebp-bin.png"
webp="/assets/imgs_posts/webdev/webp/libwebp-bin.webp"
alt="A pasta libwebp com todas as ferramentas do pacote libwebp."
align="center"
%}

Agora procure uma imagem qualquer que deseja transformar em WebP. Usando o terminal, [navegue até a pasta](https://medium.com/@adsonrocha/como-abrir-e-navegar-entre-pastas-com-o-prompt-de-comandos-do-windows-10-68750eae8f47){: rel="noreferrer nofollow noopener" target="_blank"} em que a imagem está e execute o comando ```cwebp -q 72 nome-da-imagem.jpg -o nome-da-imagem.webp```.
 
**Nota**: esse comando pressupõe que sua imagem tenha a extensão .jpg, mas você também pode converter imagens .png, .tiff, .webp e .ycbcr.
 
Usando o Prompt de Comando, o resultado deverá ser o erro: 'cwebp' não é reconhecido como um comando interno. Outros programas, como o PowerShell, Git bash, podem apresentar erros similares. Isso acontece porque o cwebp não está disponível globalmente (por todo o sistema), mas apenas dentro da pasta em que foi salvo.
 
Para que o comando funcione, coloque a imagem dentro da mesma pasta que o cwebp está. Como exemplo, eu salvei uma imagem qualquer com o nome "\_img".

{% include post_img.html 
png="/assets/imgs_posts/webdev/webp/libwebp-bin-with-img.png"
webp="/assets/imgs_posts/webdev/webp/libwebp-bin-with-img.webp"
alt="A pasta libwebp com todas as ferramentas do pacote libwebp."
align="center"
%}

Agora, abra o terminal e navegue até essa pasta, e execute novamente o comando ```cwebp -q 72 nome-da-imagem.jpg -o nome-da-imagem.webp```. No meu caso, o comando foi o seguinte:

~~~ console
cwebp -q 72 _img.jpg -o _img.webp
~~~

O código acima vai comprimir a imagem em formato JPG para o formato WebP aplicando uma compressão lossy (veja [Lossy vs Lossless](https://youtu.be/v1u-vY6NEmM){: rel="noreferrer nofollow noopener" target="_blank" }. Troque \_img.jpg pelo nome da imagem (com a extensão) que escolheu, e também pode trocar \_img.webp para um nome mais adequado se quiser, mas mantenha a extensão .webp. A imagem será salva no mesmo diretório que a imagem original, ou seja, será salva na pasta libwebp.

O comando em si executa a ferramenta **cwebp** com algumas opções básicas, tipo a qualidade desejada (que no caso é 72), e o nome do arquivo resultante (que será img.webp). Existem várias outras opções que podem ser utilizadas para configurar a compressão, e você pode encontrá-las na [documentação da ferramenta](https://developers.google.com/speed/webp/docs/cwebp){: rel="noreferrer noopener nofollow" target="_blank"}.

#### Como executar o cwebp globalmente?
Como foi dito anteriormente, o comando cwebp não está disponível globalmente. Sendo assim não podemos executá-la de dentro de qualquer outra pasta, já que o terminal não sabe onde ela está, Comandos como o ```ipconfig``` ```cd```, ```ipconfig```, ```mkdir```, etc., são padrão no Windows e têm suas localizações marcadas na variável do sistema chamada Path (caminho) e, portanto, podemos executar eles estando com o terminal aberto em qualquer pasta.
 
A variável Path armazena caminhos para pastas onde o CMD, e outros terminais instalados no Windows, procura por executáveis sempre que digitamos um comando. Quando baixamos uma nova ferramenta para linha de comando, o caminho para ela não é armazenado na variável Path e, portanto, o CMD não consegue encontrá-la. É isso que acontece com o **cwebp**. Essa ferramenta está em um local do computador que não foi indicado para o CMD. Mas felizmente nós podemos fazer essa indicação manualmente seguindo os passos abaixo:
 
**Nota**: para alguns softwares, o instalador faz o trabalho de colocar o caminho para o executável na variável Path, mas nem todos os instaladores fazem isso, e nem todos os programas são instalados. O cwebp, por exemplo, não é instalado.
 
Para indicar manualmente o local do arquivo executável cwebp.exe, você pode seguir os passos abaixo:

1 - Digite "variáveis" na caixa de pesquisa da barra de tarefas do Windows, e selecione "Editar as variáveis de ambiente do sistema";
2 - Na aba "Avançado" clique em "Variáveis de Ambiente";
3 - Na seção de "Variáveis do sistema" selecione a variável "Path" e clique em editar;
4 - Clique em "novo" e digite o endereço do diretório do **cwebp** no novo campo;
5 - Confirme as alterações clicando em "ok" em cada uma das janelas abertas.
 
Feito isso, você já pode converter imagens estando dentro de qualquer pasta, usando o comando que citamos mais acima.

### Utilizando o Node.js

Também gerar imagens WebP através do [Node.js](https://nodejs.org/en/){: rel="noreferrer noopener nofollow" target="_blank"} e pacotes disponíveis no repositório NPM, mais especificamente os pacotes imagemin e imagemin-webp. 

De forma resumida:
**Node.JS**: é um interpretador JavaScript que nos permite rodar programas escritos com essa linguagem fora do navegador.
 
**NPM (Node Package Manager ou Gerenciador de Pacotes do Node)**: faz referência a um [site](https://npmjs.com/){: rel="noreferrer noopener nofollow" target="_blank"} e a uma ferramenta que vem junto com a instalação do Node.js. O site é onde programadores de todo mundo podem disponibilizar programinhas feitos em JavaScript, os chamados pacotes (como o imagemin e o imagemin-webp). A ferramenta NPM é utilizada para baixar e instalar esses pacotes, gerenciar as versões deles e suas dependências (pacotes necessários para o funcionamento adequado de outro pacote).
 
Primeiro você precisará [baixar e instalar o Node.js](https://youtu.be/QYH-vX_7Cfo){: rel="noreferrer noopener nofollow" target="_blank"} na sua máquina. Após a instalação siga o passo-a-passo a seguir.
 
1 - Abra o terminal e navegue até a raiz do seu projeto. De lá, use o **npm** para instalar os pacotes necessários para fazer a conversão.

~~~ console
npm install imagemin imagemin-webp 
~~~ 
 
2 - Crie um arquivo chamado "webp.js" na pasta do seu projeto, com o seguinte script:

~~~ javascript
// Importa os módulos necessários
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
 
// Determina de onde tirar as imagens
const sourceFolder = "./imgs/";
 
// Determina onde salvar as imagens
const destinationFolder = "./imagensOtimizadas/";
 
// Seleciona e processa todas as imagens JPG
imagemin( [sourceFolder + '*.jpg'],{
	destination: destinationFolder,
	plugins: [
		imageminWebp({
          quality: 75,
          method: 6
        }) // Retorna um Objeto Promise<Buffer> com as imagens otimizadas
	]
})
 
// Seleciona e processa todas as imagens PNG
imagemin([sourceFolder + '*.png'], {
	destination: destinationFolder,
	plugins: [
		imageminWebp({ // Usa o imagemin-webp para definir as opções
          lossless: true,
          quality: 100,
          method: 6
        })
	]
})
~~~

Esse script processa todas as imagens PNG e JPG dentro da pasta "imgs", e salva as imagens WebP geradas na pasta imagensOtimizadas. O ./ antes do nome da pasta indica que ela está no diretório atualmente aberto.
 
Para conversão das imagens JPG definimos as opções:
 
```qualidade: 75``` - Determina o fator de compressão. Em caso de compressão com perdas (lossy), um fator pequeno produz um arquivo menor com qualidade inferior. A melhor qualidade é alcançada usando um valor de 100.
 
```method: 6``` - Controla o equilíbrio entre a velocidade de codificação e a qualidade e tamanho do arquivo comprimido. Quando valores mais altos são usados, o compressor vai gastar mais tempo procurando por possibilidades de compressão adicionais e decidir sobre o ganho de qualidade. Valores mais baixos podem resultar em um tempo de processamento mais rápido à custa de um arquivo maior e de uma qualidade de compressão mais baixa.
 
Para a conversão das imagens PNG nós configuramos as opções:
 
```lossless: true``` - Ativa o modo de compressão sem perdas;
 
```quality: 100``` - Determina o fator de compressão. No caso de compressão sem perdas (lossless), um fator pequeno permite maior velocidade de compressão, mas produz um arquivo maior. A compactação máxima é alcançada usando um valor de 100;
 
```method: 6``` - Controla o equilíbrio entre a velocidade de codificação e tamanho do arquivo comprimido. Quando valores mais altos são usados, o compressor vai gastar mais tempo procurando por possibilidades de compressão adicionais. Valores mais baixos podem resultar em um tempo de processamento mais rápido à custa de um arquivo maior.
 
Se as imagens do seu projeto não estiverem em uma pasta com nome "imgs", basta especificar o caminho primeiro argumento da função imagemin. Caso não queira salvar os resultados na pasta imgs basta indicar o local desejado na opção destination.

### Editores de imagens
Atualmente o software de edição de imagem [Gimp](https://www.gimp.org){: rel="noreferrer noopener nofollow" target="_blank"} tem suporte nativo ao formato. Já para o [Photoshop](https://www.adobe.com/br/products/photoshop/free-trial-download.html){: rel="noreferrer noopener nofollow" target="_blank"} você vai precisar de um [plug-in](http://telegraphics.com.au/sw/product/WebPFormat#webpformat){: rel="noreferrer noopener nofollow" target="_blank"} específico, e ele está disponível apenas para Mac e Windows.

### Programas para Download
O programa [XnConvert](https://www.xnview.com/en/xnconvert/){: rel="noreferrer noopener nofollow" target="_blank"} permite comprimir um conjunto massivo de imagens, que podem estar em diferentes formatos. Ao todo são mais de 500 formatos de imagens suportadas, e ele pode exportar para 70 formatos diferentes. O programa ainda possui 80 ações que podem ser aplicadas às imagens, além das opções específicas de cada formato que são escolhidas para conversão.
 
O XnConvert está disponível para os sistemas Windows, Mac e algumas distros Linux. Ele também possui tradução para mais de 20 idiomas, entre eles o português BR, é claro. E além disso ele é gratuito para usuários comuns e organizações educativas sem fins lucrativos, mas você precisará pagar por uma licença se quiser usar em uma empresa privada. Essas características tornam esse software bem acessível para a maioria dos usuários.

## Implantação
Nos navegadores que possuem suporte, podemos incluir a imagem no formato WebP normalmente utilizando o atributo src da tag ```<img>```.
 
O problema é que nem todos os navegadores suportam esse formato, e nesses navegadores nenhuma imagem será carregada utilizando o código acima, possivelmente prejudicando a experiência do usuário. Para contornar esse problema nós temos algumas alternativas, e irei mostrar duas delas abaixo.

### Utilizando a Tag &lt;picture&gt;
Para que navegadores que não dão suporte a esse formato ainda possam carregar as imagens, podemos deixar opções da mesma imagem em diferentes formatos, dessa forma a que estiver em um formato aceito será escolhida pelo navegador. Fazemos isso utilizando as tags ```<picture>``` e ```<source>``` disponíveis desde a 5ª versão do HTML.
~~~ html
<picture>
  <source srcset="img.webp" type="image/webp" alt="..."/>
  <source srcset="img..jpg" type="image/jpg" alt="..."/>
  <img src="img.jpg" alt="..."/>
</picture>
~~~
A tag <dfn>```<picture>```</dfn>  funciona como um contêiner para opções de imagens alternativas, representadas pelas tags ```<source>```, das quais o navegador escolhe apenas uma, baseado no valor contido no atributo type, e ignora as outras.

A tag ```<img>```, nesse caso, serve como uma garantia, e será escolhida apenas se nenhuma das opções forem aceitas, ou se o navegador em questão não suportar as tags ```<picture>``` e ```<source>```. Dessa forma é importante que essa tag sempre aponte para uma imagem com formato aceito na maioria dos navegadores (i.e: PNG ou JPG).

### Modernizr
O <dfn>Modernizr</dfn> é uma biblioteca JavaScript utilizada para identificação de recursos de um navegador. De acordo com o resultado dessa verificação, nós podemos determinar um comportamento específico. Nesse caso, vamos utilizar essa biblioteca para determinar se um navegador tem suporte ao WebP.
 
Primeiro vamos definir uma tag ```<img>``` com duas ou mais opções de imagens:
~~~ html
<img src="placeholder.jpg" data-original-image="rain.jpg" data-webp-img="rain.webp" alt="Texto alternativo...">
~~~

Dessa vez as opções foram colocadas, cada uma, como valor de um [atributo customizado](http://html5doctor.com/html5-custom-data-attributes/){: rel="noreferrer noopener nofollow" target="_blank"} (todo atributo começando com "data-"). O atributo data-original-img recebe o caminho para a imagem no formato original da imagem, que será PNG ou JPG. Já o atributo data-webp-img recebe o endereço da imagem já processada, que estará no formato WebP.
 
Agora acesse a página de downloads no site da Modernizr e selecione a ferramenta que deseja verificar se os navegadores possuem. Neste caso precisamos verificar apenas o suporte ao formato WebP, então basta procurar pela ferramenta na página, clicar no sinal de + (mais) do lado da ferramenta e então clicar em "build".

{% include post_img.html 
png="/assets/imgs_posts/webdev/webp/modernizr-tools.png"
webp="/assets/imgs_posts/webdev/webp/modernizr-tools.webp"
alt="Lista de ferramentas que o Modernizr pode detectar."
align="center"
%}

Apareceram algumas opções para baixar, vamos clicar no botão de download relacionado a opção "build".
{% include post_img.html 
png="/assets/imgs_posts/webdev/webp/modernizr-download-options.png"
webp="/assets/imgs_posts/webdev/webp/modernizr-download-options.webp"
alt="Opções de download do script que checa se o navegador suporta o WebP."
align="center"
%}

Será baixado um arquivo JavaScript com o código que testa o navegador quanto ao formato WebP, é ele que vamos utilizar nas páginas que precisam desse recurso. O código abaixo importa o arquivo baixado anteriormente e em seguida determina o que acontece caso o navegador possua o recurso e caso não possua.

~~~ html 
<script src="modernizr-custom.js"></script>
<script>
// Busca todas as tags <img> da página
let images = Array.from(document.getElementsByTagName('img'));
      
// Checa se o WebP é suportado, e escolhe entre a imagem em
// data-webp-img e data-original-img.
Modernizr.on('webp',(result)=>{
if (result) { // Caso verdadeiro, src = data-webp-img
  images.forEach((image)=>{
    image.setAttribute('src',image.getAttribute('data-webp-img'));
  })
} else { // Caso falso, src = data-original-img
  images.forEach((image)=>{
    image.setAttribute('src',image.getAttribute('data-original-img'));
  })
}
});
</script>
~~~

O que o código faz é definir o valor do atributo ```src``` de todas as tags ```<img>``` presentes no documento baseado no resultado da verificação. Se o navegador tem suporte a imagens WebP, o valor será o mesmo do atributo data-webp-img, caso contrário o valor será o mesmo do atributo data-original-img. A imagem será carregada assim que o novo valor para o atributo ```src``` for definido.
 
Tanto a invocação do arquivo modernizr-custom.js quanto a definição do código que escolhe a imagem devem ser executados depois que as tags ```<img>``` tenham sido carregadas. Para garantir que isso aconteça, nós podemos colocar a invocação e o trecho antes da tag de fechamento ```</body>```. Por exemplo:

~~~ html
<!DOCTYPE html>
<html lang="en">
 
<head>
  <title> Modernizr </title>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    
</head>
 
<body>
    <img src="placeholder.jpg" data-original-image="rain.jpg" data-webp-img="rain.webp" alt="Texto alternativo..." />
 
    <script src="modernizr-custom.js"></script>
    <script>
    // Busca todas as tags <img> da página
    let images = Array.from(document.getElementsByTagName('img'));
 
    // Checa se o WebP é suportado, e escolhe entre a imagem em
    // data-webp-img e data-original-img.
    Modernizr.on('webp', (result) => {
        if (result) { // Caso verdadeiro, src = data-webp-img
            images.forEach((image) => {
                image.setAttribute('src', image.getAttribute('data-webp-img'));
            })
        } else { // Caso falso, src = data-original-img
            images.forEach((image) => {
                image.setAttribute('src', image.getAttribute('data-original-img'));
            })
        }
    });
    </script>
</body>
</html>
~~~

## Suporte ao formato 
Os navegadores Google Chrome, Firefox, Edge, Opera, [entre outros](https://caniuse.com/#search=webp){: rel="noreferrer noopener nofollow" target="_blank"} aceitam o formato nativamente. Mas ainda assim existem alguns navegadores que aceitam apenas os formatos mais antigos como o JPG e o PNG.
 
Como dito, o Gimp já possui suporte ao formato, sendo assim você pode abrir e editar seus arquivos WebP normalmente. Já no Photoshop você precisa fazer o download e instalação de um plug-in para conseguir abrir e salvar esse formato. Você ainda pode converter uma imagem WebP para outro formato, editar no seu programa favorito, e então converter para WebP novamente.
 
Se quiser, você pode utilizar qualquer navegador compatível para visualizar imagens nesse formato, ou usar uma ferramenta disponibilizada no pacote libwebp chamada vwebp utilizando comando ```vwebp nome-da-imagem.webp```.