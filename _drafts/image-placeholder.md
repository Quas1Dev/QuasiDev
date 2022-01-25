---
title: Alterações no layout 
layout: article
---

Talvez você já tenha tido essa experiência: você entra em um site, começa a ler seu conteúdo e de repente o texto muda de lugar. Isso acontece quando o navegador carrega algum recurso que precisa de mais espaço do que aquele disponível, e portanto o que vier depois desse recurso é reposicionado. Quando usamos a técnica de [lazy loading]({% link _posts/2022-01-24-webdev-lazy-loading-ptbr.md %}){: target="_blank" rel="noreferrer noopener nofollow"} para adiar imagens, por exemplo, pode ser que a imagem carregue em um momento inoportuno. Mas é possível evitar isso, como veremos nas seções seguintes

## Usando Placeholders

Uma maneira de resolver isso é colocando uma imagem muito pequena (no sentido de espaço ocupado na memória do computador) para guardar o lugar para a imagem original que será carregada usando uma técnica de lazy loading. Normalmente, nos referimos a essa imagem com o termo placeholder.

When the image loads, the browser will drop it into the screen and reflow the content to fit it. This sudden change in the layout causes other elements to move around and it is called content reflow, or shifting. Michael Scharnagl goes into great depth explaining how this creates an unpleasant user experience.

Essa imagem deve ter as mesmas dimensões (altura e largura) que a imagem original para a qual ela está guardando lugar. Caso ela tenha dimensões diferentes, o navegador vai ter que recalcular todo o layout e reposicionar os outros componentes da página que estiver envolta quando carregar a imagem original.

No artigo escrito por [Rahul Nanwani no CSS Tricks](https://css-tricks.com/the-complete-guide-to-lazy-loadng-images/){: target="_blank" target="noreferrer noopener nofollow"} é sugerido a utilização de placeholders com uma cor dominante da imagem original (como no gif 1) ou uma versão borrada e de baixa qualidade da mesma (como no gif 2). Assim, enquanto a imagem não é carregada o usuário não precisa ficar olhando para uma imagem padrão, ou uma tela em branco.

[GIF]

[GIF]


O placeholder usado pode ter qualquer extensão (e.g., PNG, JPG, etc.), mas pode ser interessante usar um placeholder codificado em base64, o que pode deixar o carregamento da página ainda mais rápido, pois o navegador não terá que baixar nada até a imagem propriamente seja requisitada.

## Gerando Imagens de Baixa Qualidade

Como era de se imaginar, existem pacotes para o Node JS que podem fazer a geração dessas imagens para gente. Você só vai precisar do [Node JS](https://nodejs.org/en/){: target="_blank" rel="noreferrer noopener nofollow"} instalado na sua máquina. Depois é só seguir os passos apresentados abaixo.

1 - Instale o [LQIP](https://www.npmjs.com/package/lqip){: target="_blank" rel="noreferrer noopener nofollow"} usando ```npm install --save-dev lqip``` dentro da pasta do seu projeto.

2 - Salve um arquivo JavaScript, por exemplo "lqip.js", com as seguintes instruções:

~~~ javascript
// Chama o módulo lqip.
const lqip = require('lqip');

const file = 'imgs/1.jpg';

// Gera o placeholder para a imagem.
// A imagem original pode ter as extensões
// JPG ou PNG.
lqip.base64(file).then((res) => {
   console.log(res);
})
~~~

3 - Execute o arquivo digitando ```node nome-do-arquivo.js``` no seu terminal (CMD, Power Shell ou qualquer outro). Exemplo: ```node lqip.js```. 

O trecho acima deve processar a imagem "1.jpg" dentro da pasta "imgs". Será gerado uma imagem em base64 com a extensão JPG ou PNG (dependendo da extensão da imagem original) de baixa qualidade. Se quiser, você pode usar esse código base64 mesmo. É só colocar o texto gerado no atributo ```src``` ou ```srcset``` das tags ```<img>``` ou ```source```, conforme necessário. 

Mas também converter essa imagem gerada para JPG ou PNG

Vou usar o módulo "base64-img" para processar o código em base64 e retornar uma imagem .jpg. Siga os passos a seguir:

1 - Baixe o pacote com o comando ```npm install --save-dev base64-img```.
2 - Modifique o script para usar o base64-img.

~~~ javascript
// Aciona os módulos base64-img e lqip 
const base64Img = require('base64-img');
const lqip = require('lqip');

// Qual arquivo será processado.
const file = 'imgs/1.jpg';

// Onde o arquivo será salvo.
const dest = 'imgs/placeholder/';

// Nome do arquivo final.
const output_name = '1-placeholder';

// Gera o placeholder
lqip.base64(file).then((res) => {

  // Gera uma imagem com o formato
  // PNG ou JPG.
  base64Img.img(res, dest, output_name, (error, filepath) => {});
})
~~~ 

3 - Execute o script usando o Node, e pronto.

Geralmente, a versão final fica com o tamanho menor que 1kb, o que ainda pode impactar no carregamento da sua página, mas com um "estrago" menor, digamos assim. 

O módulo **lqip** não possuí uma forma de processar múltiplos arquivos, mas podemos dar um jeito nisso usando um módulo **fs** que é nativo do Node JS.

~~~ javascript 
// Importa os pacotes necessários
const lqip = require('lqip');
const fs = require('fs');
const path = require('path');

// Qual pasta será verificada.
const dir = 'imgs/'; 

// Onde as imagens serão gravadas.
const dest = 'imgs/placeholders/';

// Lista todo o conteúdo da pasta.
fs.readdir(dir,(err,contents) => {
	// Filtra somente os arquivos de imagem com a 
	// exetenção aceita pelo lqip (PNG e JPG).
	const images = contents.filter((content)=>{
		return path.extname(content).toLowerCase() == '.jpg' ||
		       path.extname(content).toLowerCase() == '.png';
	})
	
	// Cria e salva o placeholder a partir das imagens
	// que passaram na filtragem.
	images.forEach(image =>{
		const filePath = dir+image;
		const outputFileName = image.split('.').shift().toString() + '-placeholder';
        const outputFIleExt = image.split('.').pop().toString();

		const fileFinalDest = dest + outputFileName + outputFileExt;

		lqip.base64(filePath).then(res => {
	         const base64String = res.split(';base64,').pop();

            fs.writeFIle(fileFinalDest, base64String, {encoding: 'base64'}, err=>{
                  console.log('file created!')
			})
		});
	});
});
~~~
A função readdir() lista o nome e extensão (no caso de arquivos) de todo conteúdo de uma pasta, sejam arquivos, outras pastas, ou o que for. O resultado (a lista) é um vetor que é passado como o segundo argumento de uma função callback. Nesse caso, o vetor ```contents``` é que vai conter o nome dos itens encontrados.

Depois, usamos a função ```extname```, que pega o nome da extensão do arquivo, e comparamos esse nome com cada uma das extensões aceitas pelo lqip. O objetivo é separar somente os arquivos válidos para geração do placeholder, isso por que você pode ter algum outro arquivo ou pasta dentro da sua pasta de imagens.

E por fim, será criado para cada uma das imagens da pasta indicada um placeholder, que serão colocados na pasta de destino escolhida no atributo ```dest```. Os arquivos serão salvos com o mesmo nome + o prefixo '-placeholder'.

## Como criar placeholder com a cor dominante da imagem?
Para 

## Usando elementos com dimensões padronizadas
Se esses bytes extras das imagens temporárias ainda te incomodam, você ainda pode optar por manter um elemento com largura e altura definidas. Nesse caso, as imagens carregadas serão configuradas para caber no elemento, e portanto não terá influencia com o conteúdo ao redor da imagem.


Mas não podemos fazer apenas isso ou teremos um problema de proporção: uma imagem de 350px x 600px (largura x altura), seria esticado na horizontal e achatado na vertical se for carregado em um elemento com 600px x 300px como mostrado na imagem abaixo.
(IMAGEM EXEMPLO)
A imagem será achata na vertical e esticada nas laterais para completar o elemento.

(CODEPEN)

Em um primeiro momento você pode pensar em usar a propriedade ```object-fit``` do CSS com o valor ```contain```, que determina que uma imagem deve ser redimensionada dentro do elemento que a envolve (normalmente o ```<img>```) mantendo sua proporção. Considerando de novo aquela  imagem de 350px x 600px e o conteiner de 600px x 300px, a imagem redimensionada teria 174px x 300px, como da para perceber o conteiner acabaria sendo mais largo que a imagem, criando um vão entre as bordas laterais do elemento e a imagem em si.
(IMAGEM EXEMPLO)
Podemos criar um vão entre a imagem e as bordas do elemento caso ele seja responsivo.

(CODEPEN)

Isso pode ser resolvido determinando dimensões padrões para as imagens que serão usadas, e usando proporções pré-estabelecidas para o elemento.