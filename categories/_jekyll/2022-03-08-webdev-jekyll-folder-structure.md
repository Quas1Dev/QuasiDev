---
title: Jekyll - Organização do Projeto
layout: article
permalink: /webdev/:title
description: >
  Entenda como um projeto Jekyll é organizado e construído e compreenda melhor
  os príncipios o fazem funcionar.
categories:
  - Desenvolvimento Web
tags:
  - jekyll
  - estrutura do projeto
  - organização
  - conhecendo o ambiente
date: 2022-03-08 07:20:00
lastUpdated: 2022-08-20T08:19:52.551Z
author: Fernando Bonfim
excerpt_separator: <!--more-->
sources:
  - title: Documentação do Jekyll
    url: https://jekyllrb.com/
order: 2
---
Todo projeto é composto por um conjunto de arquivos que são organizados em pastas. Os arquivos que fazem parte do projeto, e como eles são organizados pode variar para cada projeto, mas tende a seguir certas convenções de acordo com as tecnologias usadas. Nesse texto, nós vamos nos aprofundar na estrutura comumente encontrada em projetos desenvolvidos com Jekyll. Uma vez que essa estrutura é compreendida, é esperado que você consiga determinar, de maneira geral, o propósito de cada parte da estrutura. 

<!--more-->

## Pastas e Arquivos do Projeto

Organização é essencial durante o desenvolvimento de um projeto de qualquer envergadura. Definir um modo para disposição dos arquivos que dão forma ao projeto ajuda a agilizar o desenvolvimento, na integração de novos membros a equipe de desenvolvimento, permite que a equipe tenha uma visão mais clara do projeto e facilita a automatização de partes do processo. 

A organização pode ser realizada de diversas maneiras a depender do projeto. Dependendo da tecnologia utilizada, você terá mais ou menos pontos que podem ser escolhidos. Projetos que usam o Jekyll como base têm uma estrutura base definida para permitir que as funcionalidades que automatizam a criação de páginas funcionem. Desse modo, apesar de ter pequenas diferenças entre um projeto e outro, projetos desenvolvidos com Jekyll compartilham uma estrutura bem similar. Estudar o que há de comum nessa estrutura vai nos ajudar a entender como o Jekyll funciona. 

A estrutura que vamos estudar é a seguinte:

```
.
├── _drafts
│  └── my-trip-to-grindelwald.md
├── _Includes
│  └── footer.html
│  └── sidebar.html
│  └── header.html
├── _layouts
│  └── default.html
│  └── post.html
├── _posts
│  └── 2022-03-01-why-to-adopt-a-pet.md
│  └── 2022-03-02-science-is-the-best.md
├── _data
│  └── authors.yml
├── _sass
│  └── base.scss
├── _site
│  └── index.html.
├── .jekyll-cache
├── .jekyll-metadata
├── index.html
└── _config.yml
```

### Drafts

Vamos começar do primeiro item na cadeia exibida. A pasta _drafts pode ser usada para qualquer objetivo, mas geralmente ela serve como um repositório de ideias. Se você pensa em um novo post que seria legal incluir no seu site, pode criar um arquivo nessa pasta e voltar depois para terminá-lo.

### Includes

Seguimos para a pasta _includes. Nela nós armazenamos blocos de código modular, isto é, ela contém códigos - salvos em arquivos com extensão apropriada - que podem ser reutilizados em diferentes contextos. Cada bloco está dentro de um arquivo, e pode ser de qualquer natureza. Pode ser um arquivo com código HTML que determina a estrutura do rodapé da página, ou código JavaScript que deve ser incluído em determinadas situações etc. Eles são, geralmente, usados como blocos de construção para um layout/template, mas podem ser usados de forma individual, como veremos futuramente. 

Essa pasta nos permite desenvolver componentes do site separadamente, e depois juntá-los de maneira apropriada. Os arquivos na pasta _includes são chamados usando uma tag da linguagem Liquid: {% raw %}`{% include [nome-do-arquivo.html] %}`{% endraw %}, onde \[nome-do-arquivo] deve ser substituído pelo nome do arquivo que contém o bloco de código que se pretende utilizar. Existem restrições sobre onde a tag `include`  pode ser utilizada, mas vamos deixar para especificar essas restrições quando formos falar das tags do Liquid.

### Layouts/templates

A próxima pasta se chama _layouts, que contém os códigos que serão usados em páginas que devem compartilhar uma estrutura em comum. Um layout (ou template) é essencialmente uma mistura de HTML, e talvez com um pouco de CSS e JavaScript, com Liquid. O código Liquid embutido na página permite determinar o conteúdo que deve ser incluído na estrutura durante a construção da página.

Na estrutura de pastas e arquivos apresentada, nós temos um leiaute nomeado default.html. É muito comum encontrar um leiaute com esse nome em temas desenvolvidos e distribuídos pela comunidade que se criou em volta do Jekyll. Ele é usado normalmente para determinar uma estrutura que será comum nos outros leiautes, mas também pode ser usado individualmente. Colocar uma estrutura comum em um arquivo separado ajuda a evitar repetições manuais.

O conteúdo do leiaute default.html pode ser parecido com isso:

{% raw %}

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 
        Incluí o título da página de acordo com as informações no
        documento 
    -->
    <title>{{ page.title }}</title>
</head>
<body>

<!-- Propriedade Liquid - Incluí o conteúdo do arquivo que usar esse layout -->
{{ content }}

</body>
</html>
```

{% endraw %}

No leiaute em post.html podemos comunicar que queremos usar o leiaute default com outra linguagem chamada YAML. Com o atributo `layout: default` nós podemos fazer essa especificação, como no código abaixo.

{% raw %}

```html
---
# Especifica o leiaute a ser usado com o documento
layout: default
---

<div class="container">

<main>
<!-- Aqui é inserido o conteúdo do arquivo que invoca esse layout -->
{{ page.content }}
</main>

</div>
```

{% endraw %}

Agora, considere um terceiro documento, que dessa vez é programado para usar o leiaute post.

```markdown
---
layout: post
title: Lorem ipsum dolor 
---

Lorem ipsum dolor sit amet consectetur adipisicing 
elit. Sapiente, at deleniti, beatae eligendi cum 
provident distinctio doloribus cumque fuga enim nisi 
ipsam mollitia, corporis labore consequuntur 
asperiores modi sunt eius!


Lorem ipsum dolor sit amet consectetur adipisicing 
elit. Quae mollitia quidem nobis sint animi commodi 
ipsam, maxime corrupti, numquam, cupiditate, minima 
nulla temporibus repudiandae! Autem, eligendi culpa 
dolore nemo veniam!
```

Durante a construção do site, o Jekyll vai combinar os leiautes default e post para gerar a estrutura na qual o conteúdo do documento acima será inserido. Como resultado, nós obtemos o seguinte documento na pasta _site:

{% raw %}

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lorem ipsum dolor </title>
</head>
<body>

    <div class="container">

    <main>
        <!-- Aqui é inserido o conteúdo do arquivo que invoca esse layout -->
        Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Sapiente, at deleniti, beatae eligendi cum 
        provident distinctio doloribus cumque fuga enim nisi 
        ipsam mollitia, corporis labore consequuntur 
        asperiores modi sunt eius!

        Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Quae mollitia quidem nobis sint animi commodi 
        ipsam, maxime corrupti, numquam, cupiditate, minima 
        nulla temporibus repudiandae! Autem, eligendi culpa 
        dolore nemo veniam!
    </main>

    </div>
</body>
</html>
```

{% endraw %}

Note que os conteúdos dos três documentos envolvidos foram misturados. Esse resultado foi alcançado utilizando os recursos do Liquid. 

O leiaute default é o lugar perfeito para inserir código que deve ser aplicado globalmente, isto é, por todo o site.

### Posts

Depois da pasta _layouts, temos a pasta _posts. Essa pasta contém arquivos de texto, normalmente escritos em Markdown e YAML, mas é comum ter um pouco de HTML e Liquid também. Os arquivos nessa pasta geralmente definem o conteúdo exclusivo da página. Os arquivos na pasta _layouts e _includes servem para montar as páginas que devem conter esse conteúdo exclusivo. 

A criação de uma nova página envolve incluir um arquivo com extensão .md nessa pasta, e esse arquivo é então combinado com um leiaute pelo Jekyll, gerando uma página completa. Todos os arquivos nessa pasta são nomeados na forma ano-mês-data-nome_do_arquivo.md, como por exemplo 2022-03-04-mypost.md. Se uma parte do nome não estiver presente, o arquivo não será processado.

O leiaute escolhido será o que estiver especificado no arquivo, e não precisa ser um chamado posts, apesar do nome da pasta conter essa palavra. De qualquer forma, o leiaute indicado deve existir na pasta _layouts.

É importante notar, porém, que esse não é o único local em que podemos definir o conteúdo de páginas para o site. Também podemos definir coleções, que servem para agrupar arquivos que normalmente estariam nessa pasta de acordo com algum critério. Pode ser que queremos todos os arquivos com o conteúdo de um curso sendo desenvolvido esteja em uma pasta separada dos demais conteúdos do site, por exemplo. Teremos uma postagem dedicada as coleções futuramente.

## Data e Config

Normalmente, nós guardamos informações globais (que abrange o site como um todo) que são relevantes durante a construção do site no arquivo chamado _config.yml. De certa forma, o que é colocado nesse arquivo configura o trabalho do Jekyll e define aspectos gerais do site. Por exemplo, nós podemos especificar um título e uma descrição para o site, determinar qual ferramenta o Jekyll vai usar para converter os arquivos escritos em Markdown em HTMl etc. Em um projeto que usa o tema minima, como o que é criado com o comando `bundle exec Jekyll new [nome do arquivo]`, nós temos o seguinte conteúdo no _config.yml:

```yaml
title: Your awesome title
email: your-email@example.com
description: >- # this means to ignore newlines until "baseurl:"
  Write an awesome description for your new site here. You can edit this
  line in _config.yml. It will appear in your document head meta (for
  Google search results) and in your feed.xml site description.
baseurl: "" # the subpath of your site, e.g. /blog
url: "" # the base hostname & protocol for your site, e.g. http://example.com
twitter_username: jekyllrb
github_username:  jekyll

# Build settings
theme: minima
plugins:
  - jekyll-feed
```

Nele é definido qual o tema usado para o site (indicado por theme), qual ou quais plug-ins devem ser carregados pelo Jekyll antes de começar a montar o site (indicado por plugins), o titulo/nome do site (indicado por title), descrição (indicado por description), e e-mail do site (indicado por email), entre outras coisas que serão explicadas em oportuno. O conteúdo varia entre projetos, mas seguem mais ou menos a mesma linha. 

Além do arquivo _config nós podemos armazenar e separar informações sobre o site em diversos arquivos dentro da pasta _data. Podemos ter um arquivo só com informações sobre os autores que escrevem artigos para o site, por exemplo.

As informações podem ser estruturadas usando YAML Ain't Markup Language (YAML), JavaScript Object Notation (JSON), Tab-separated Values (TSV) ou Comma-separated Values (CSV), e estarão acessíveis usando o objeto da linguagem Liquid {% raw %}`{{ site.data }}`{% endraw %}. Nesse curso, nós vamos usar, majoritariamente, a YAML.

### Index

Nosso próximo item é o arquivo index.html. Como em todo o site, existe uma página que é sua porta de entrada, aquela que é acessada sempre que entramos com o endereço do site.  Essa página é codificada dentro do arquivo index.html. 

### Sass

A algum tempo, desenvolvedores vêm adotando pré-processadores para gerar suas folhas de estilo, ao invés de codificar a aparência das páginas diretamente em CSS. Essas ferramentas pegam uma folha de estilo escrita usando uma linguagem própria para o pré-processador, e geram o documento CSS propriamente.  A pasta _sass armazena folhas de estilo escritas com a linguagem Sass. O Jekyll, usa o pré-processador para gerar os arquivos em CSS propriamente. 

O Sass traz algumas funcionalidades que não estão disponíveis ou bem definidas no CSS. Uma dessas funcionalidades é a possibilidade de separar o estilo em vários arquivos menores e mais gerenciáveis: os módulos. Posteriormente, esses módulos podem ser combinados em um único arquivo, conforme necessário, para gerar o CSS final. 

Você pode estar se perguntando, mas isso não é possível com o comando `@import` nativo do CSS? Bom, sim. O problema dessa solução é que os arquivos somente são combinados quando o site é carregado no navegador do usuário. Por exemplo, em um documento .css com o trecho

```css
@import url("reset.css");
@import url("header.css");

[...]
```

os documentos reset.css e header.css serão incluídos pelo navegador do usuário, ou seja, depois que o navegador carrega o documento ele precisa carregar mais outros dois.

Usando sass, aquele mesmo trecho seria escrito assim:

```sass
@import reset
@import header

[...]
```

Dessa vez, o conteúdo dos arquivos reset.css e header.css serão incluídos no documento pelo pré-processador usado para gerar o arquivo CSS com base na linguagem Sass. Desse modo, um arquivo contendo o conteúdo de ambos os documentos é criado e pode ser disponibilizado para o usuário.

Os diferentes módulos são inseridos na pasta _sass. Eles são combinados em um arquivo único usando o comando `@import`{: target="_blank" rel="noreferrer noopener nofollow"}. Esse arquivo é lido e então o arquivo .css é gerado durante a construção do site. O arquivo que junta esses módulos pode estar em qualquer outra pasta do projeto, por exemplo `./assets/css`. 

Não se preocupe se não entendeu absolutamente nada do que foi dito nessa seção. Só tenha em mente que o propósito da pasta é guardar módulos Sass.

### Jekyll Metadata e Jekyll Cache

A pasta .jekyll-cache e o arquivo .jekyll-metadata são criados automaticamente pelo sistema Jekyll quando necessário. O .jekyll-metadata ajuda o Jekyll a rastrear quais arquivos foram modificados desde a última construção do site. Os dados nele contido são essenciais para usar a função [incremental do jekyll](https://jekyllrb.com/docs/configuration/incremental-regeneration/){: target="_blank" rel="noreferrer noopener nofollow"}, que pode ser ativada incluindo `--incremental` no comando usado para iniciar o processo de construção do site, como em `bundle exec jekyll serve --incremental`. Quando ativada, somente as páginas afetadas por alguma mudança nos arquivos envolvidos em sua criação são reconstruídas. Esse arquivo não é processado durante a geração do site, e portanto não aparece na versão final dentro da pasta _site.

A pasta .jekyll-cache armazena cópias de alguns arquivos para agilizar a construção do site. Ele é criado automaticamente quando o sistema do Jekyll inicia a construção do site. Você pode desativar o uso desse arquivo incluindo o parâmetro `--disable-disk-cache` no comando que inicia a criação do site, ou incluir uma nova linha no arquivo _config.yml com `disable_disk_cache: true`. 

### Site

Quando o Jekyll é acionado, ele processa os arquivos incluídos no projeto para gerar o site. Todos os arquivos são armazenados e organizados dentro da pasta site. 

Uma vez criada, o conteúdo dessa pasta pode ser distribuído para os usuários da forma que está. Ou seja, uma vez que uma solicitação é enviada para o servidor que hospeda o site, ele apenas retorna a página solicitada, sem a necessidade de montar alguma parte da página. Já no navegador do usuário, pode ser que uma solicitação seja feita a algum servidor para gerar uma parte especifica da página que não pôde ser construída de antemão.

## Flexibilidade da Estrutura

No geral, a organização e composição da pasta de um projeto Jekyll é bem flexível. Seu projeto não precisa incluir todos os itens descritos nas seções anteriores. Na realidade, você poderia muito bem usar apenas a pasta _posts, _layouts, e o arquivo config.yml se essas forem as únicas coisas de que seu site precisa. Desse modo, é comum encontrar projetos completos e temas com diferentes composições. Considere nossa análise acima apenas como um guia para você não ficar totalmente perdido sem saber o que fica onde.

Além disso, dependendo de como você quer usar um tema é normal que alguns arquivos e pastas estejam "escondidos". Por exemplo, quando utilizamos o  comando  `jekyll new [nome do projeto]` para iniciar um novo projeto que usa Jekyll, alguns componentes do site são colocados na pasta .\vendor\bundle\ruby\3.0.0\gems\minima-2.5.1, onde `.` deve ser substituído pelo caminho para a pasta do seu projeto. 

- - -

Nesse texto nós discutimos a estrutura de um projeto Jekyll. Nós entendemos o papel de boa parte dos arquivos e pastas que convencionou-se fazer parte da estrutura de um projeto em Jekyll. O conteúdo apresentado aqui pode parecer bem confuso por enquanto, mas deve ficar mais claro conforme avançamos em nosso estudo.

Nosso próximo passo seria discutir as tecnologias usadas para escrever os diversos arquivos que fazem parte da estrutura do projeto, principalmente YAML, Markdown e Liquid. Essas linguagens são fundamentais em projetos Jekyll, e portanto precisamos gastar um tempo para entender pelo menos o básico delas.

Então é isso por enquanto, espero que tenha aproveitado o conteúdo, e até a próxima!