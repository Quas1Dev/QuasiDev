---
layout: article
categories:
  - Jekyll
tags:
  - ' Linguagem de Modelo'
  - Molde
lastUpdated: '2022-09-11T08:42:53.000Z'
excerpt_separator: <!--more-->
order: 3
title: Jekyll - Liquid
description: >-
  Nesse capitulo nós abordaremos o básico das três linguagens que formam a base
  para qualquer projeto Jekyll.
permalink: '/webdev/:title'
date: '2022-09-19T03:00:00.000Z'
author: Fernando Bonfim
sources: []
secondary_sources:
  - title: 'Repleo: a Syntax-Safe Template Engine'
    url: 'https://sci-hub.se/https://doi.org/10.1145/1289971.1289977'
  - title: >-
      Design and Implementation of an Efficient Approach for Custom-fields and
      Formulas with SAP HANA
    url: >-
      https://wwwiti.cs.uni-magdeburg.de/iti_db/publikationen/ps/auto/thesisKindakli15.pdf
  - title: Enforcing Strict Model-View Separation in Template Engines
    url: 'https://www.cs.usfca.edu/~parrt/papers/mvc.templates.pdf'
  - title: >-
      THE DESIGN OF A TEMPLATING LANGUAGE TO EMBED DATABASE QUERIES INTO
      DOCUMENTS 
    url: 'https://www.iasj.net/iasj/download/a6efea71fa2a7cdc'
published: false
---

Além da tríade HTML, CSS e JavaScript, a construção de um site usando o Jekyll requer o conhecimento de pelo menos outras duas linguagens: o Liquid e o \<abbr title="YAML Ain't a Markup Language">YAML\</abbr>. Além dessas, conhecer uma terceira linguagem, o Markdown, pode ser necessário dependendo do tipo de conteúdo do site e também da preferência de quem produz esse conteúdo.

O Liquid é usado na criação dos templates usados no site. O YAML fornece uma maneira de apresentação de informações de modo estruturado para munir o Jekyll dos dados que ele precisa para montar nossas páginas. O Markdown substitui o HTML na estruturação do conteúdo textual da página, Nas seções seguintes nós estudamos cada uma dessas tecnologias.

## Liquid e templates

O principal objetivo do Jekyll é **automatizar a criação de todas as páginas que fazem parte de um website antes que o usuário tente acessar qualquer uma delas**. Ele permite a criação de websites enormes sem que o desenvolvedor precise codificar manualmente cada uma de suas páginas. Para esse propósito, o uso de templates é fundamental.

\<dfn>Template\</dfn> é uma palavra do idioma inglês que denota uma **forma**, **molde, modelo ou padrão** usado como um guia para fazer alguma coisa, como a página de um site nesse caso.

**Observação**: Durante esse texto estaremos usando as palavras template e modelo como iguais.

No contexto de desenvolvimento web, eu gosto de pensar no template como uma descrição de como deve ser uma página. Essa descrição detalha as partes que **devem obrigatoriamente** estar presentes na página, e também as partes que **podem variar** (são dinâmicas) de acordo com a página sendo criada, ou de acordo com algum outro parâmetro como uma configuração geral do site.

Essa descrição é então usada para criar uma série de documentos similares. Afinal, todas as páginas criadas conforme é descrito, compartilharam elementos em comum, o que **pode** ser como um menu de navegação, um cabeçalho, etc. Desse modo, o template garante consistência entre as páginas.

Além disso, elas também terão partes diferentes, como o conteúdo da página, ou a ausência de uma opção no menu do site, ou talvez alguns ícones diferentes, por exemplo. Desse modo, o template garante flexibilidade na construção das páginas.

O conteúdo que será consumido pelo usuário  (e.g., um tutorial de como criar uma máquina virtual), que é exclusivo de cada página, fica em **arquivo próprio** ou em um **banco de dados**.

Tendo uma descrição e o conteúdo das páginas separados, nós podemos estabelecer um processo para construção do site. Nesse processo, a descrição é usada para gerar um documento HTML que contém a parte obrigatória, e que remove a parte dinâmica com o conteúdo necessário.

Usa-se um programa, chamado \<dfn>processador de ,modelo\</dfn> ou processador de template, que fica responsável por executar esse processo. Esse programa entende uma linguagem denominada linguagem de modelos ou linguagem de templates (do inglês templating language), que é usada para adicionar anotações em um documento. Essas anotações marcam as partes que serão modificadas durante a construção da página, além de orientar o processador em como fazer isso, determinando a ação que deve ser tomada por ele. É essa linguagem que marca a parte dinâmica.

Seguindo essa orientação, é decidido como o conteúdo será inserido no template para criar cada página, e também como outras partes dinâmicas do template serão tratados para gerar o produto final.

\[GIF/VIDEO]

Em Jekyll, um template toma forma de um arquivo que mistura elementos do HTML e do Liquid. Você provavelmente já está familiarizado com o HTML. Essa é a linguagem de marcação usada para adicionar anotações no documento de forma a comunicar a o significado de cada parte da página.

Em meio a marcação HTML nós inserimos trechos de código escritos em Liquid, que vai guiar o preenchimento do template.

Com o Liquid nós podemos descrever um raciocínio para a exclusão ou inclusão de elementos em um template (e.g., incluir um link para uma página de contato apenas se essa página existir no site), ou apenas marcar pontos onde o inserir um determinado conteúdo.

Vamos ver um exemplo disso a seguir considerando um blog como o nosso projeto. Em um blog nós podemos ter diversas postagens, cada uma em sua própria página. Apesar de cada postagem ter um texto diferente tratando de assuntos diversos, todas elas podem compartilhar alguns elementos que são iguais. Os exemplos mais evidentes nesse contexto seriam o rodapé e o cabeçalho do site, que geralmente não mudam de uma página para a outra. Esses componentes do site podem ser definidos em um template.

O template usado nesse blog hipotético pode ser definido mais ou menos como o exibido abaixo:

{% raw %}

```liquid
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{ page.title }}</title>
</head>
<body>
  <main>
    <h1>{{ page.title }}</h1>
    {{ page.content }}
  </main>
</body>
</html>
```

{% endraw %}

Nós usamos Liquid para fazer algumas anotações no documento. Nós podemos facilmente enxergar elas quando vemos escritas com {% raw %} `{{ <alguma coisa aqui> }}` ou `{% alguma coisa aqui%} `{% endraw %}.

Segundo essas anotações, o texto da postagem é envolto em um elemento do HTML chamado `<main>` , como informa o trecho {% raw %}`{{ page.content }}`{% endraw %}. Já o titulo do texto é colocado dentro do elemento  `<title>` e também no elemento `<h1>`, como indicado pela presença do trecho {% raw %}`{{ page.title }}`{% endraw %} em duas partes do template.

**Nota**: os termos page, title e content são palavras em inglês para página, titulo e conteúdo respectivamente. No código, os termos title e content são usados como uma referencia à atributos de um objeto chamado page. Depois analisaremos isso melhor.

Esse modelo pode ser usado para criar varias páginas diferentes, Como esta:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title> Padrões de Design </title>
</head>
<body>
  <main>
    <h1>Padrões de Design</h1>
    Um conjunto de práticas definidos por um programador 
    ou grupo de programadores, que é difundido como 
    uma biblioteca de soluções para problemas comuns 
    na programação.
  
    Apesar de serem espalhados como se o impacto da aplicação
    dessas práticas fosse comprovado, esses princípios carecem de
    estudos que possam fundamentar essa afirmação. A confiança 
    nessas práticas advem e é mantida a partir de experiência 
    anedótica dos seus utilizadores.
  </main>
</body>
</html>
```

Ou esta:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title> James Webb </title>
</head>
<body>
  <main>
    <h1>James Webb</h1>
    O James Webb é um telescópio espacial usado para 
    observar objetos captando ondas eletromagnéticas 
    no espectro infravermelho. 
  </main>
</body>
</html>
```

Claro que uma página pode ter mais conteúdo que a outra, mas se elas compartilham a mesma estrutura HTML em alguma medida, elas podem ser criadas usando o mesmo template.

Em outro momento nós vamos ver de onde o Jekyll tira o conteúdo que será colocado em cada ponto do template. Mas antes, nós vamos discutir um pouco mais sobre Liquid e seus componentes: tags, objetos e filtros.

### Liquid

\<dfn>Liquid\</dfn> é uma **linguagem de modelo** criada pela Shopify para escrever os templates usados na criação de sites de compra em sua plataforma. Apesar de ser pensada para os sites desenvolvidos na plataforma da Shopify, o processador que entende essa linguagem é [disponibilizado como um projeto de código](https://github.com/Shopify/liquid "") aberto no GitHub. Isso permite que ele seja adaptado e utilizado em outros projetos que pretender usar o Liquid em seu sistema de templates, como o Jekyll.

Como uma linguagem, o Liquid possui um conjunto de símbolos e palavras, bem como sua própria sintaxe. Esses recursos comunicativos permitem montar instruções para comunicar ao processador o que deve ser feito. Essas instruções podem variar de algo simples, como "insira o conteúdo da página aqui", a algo mais complexo, como "acessar uma lista de posts, filtrar aqueles que fazem parte de uma categoria específica e mostrar os que passarem pelo filtro".

Esses recursos podem ser categorizados em tags, objetos e filtros e são combinados e inseridos nos modelos para orientar o preenchimento deles de forma dinâmica. Nas próximas seções, vamos discutir esses recursos em mais detalhes

## Objetos

Você deve estar familiarizado com objetos no seu dia-a-dia. Eles podem ser definidos como coisas que podemos perceber através dos nossos sentidos. Para possibilitar nossa comunicação, essas coisas recebem um nome que os identificam. Uma mesa, um computador, um carro, são todos exemplos de objetos; mencionado um desses nomes, a imagem do que você associa a ele vem a sua mente.

Os objetos, geralmente, têm um conjunto de características relacionados à eles; um carro pode ser da cor vermelha, ter quatro portas, ser automático, etc.  O conjunto de características atuais de um objeto representa o **estado** dele.

Em Liquid, o conceito de objeto é usado é bem útil quando precisamos representar uma coleção de características de alguma coisa. Por exemplo, quando o processador de molde está gerando uma página, ele precisa saber qual será o endereço daquela página ou qual o template usar para a página, entre outras informações. Essas informações são

para estruturas de dados que carregam informações de algum componente.do site.

Agora, voltando à programação, este é um processo que se dedica a escrever um conjunto de passos que serão seguidos por um computador para realização de alguma tarefa. Os programadores têm maneiras diferentes para escrever essas soluções usando uma linguagem de programação. Uma dessas maneiras, a programação orientada a objetos, envolve o conceito de objetos que reflete a ideia de objetos da vida real em um programa de computador.

Os objetos em programação são conceitualmente similares aos da vida real: eles tem um nome, e um estado.

e comportamentos relacionados a eles. O estado de um objeto é representado por um conjunto de variáveis que armazenam dados. As variáveis são como os nomes das características de um objeto, e os valores .

Cada objeto tem um conjunto de variáveis que armazenam dados, As variáveis são como nomes das características de um objeto.

O estado de um objeto é mantido em variáveis que fazem parte do objeto em questão.

Usamos esse conceito para representar os elementos que podemos identificar em uma situação problema. Por exemplo,

O comportamento do objeto é possível através de funções que operam nessas variáveis.

Em Liquid, os objetos disponibilizados apresentam apenas seus atributos.

e comportamentos relacionados com eles. O estado é o conjunto de características desse objeto, e os comportamentos são resultados de interações com ele. Por exemplo, um carro pode ser vermelho, ter 4 portas, entre outras características que compõem o seu estado; ainda um carro pode adotar o comportamento de ligar, acelerar, frear, entre outros comportamentos.

Os objetos em Liquid representam um conceito relacionado ao site. Por exemplo, nós temos o objeto chamado *site*, que guarda variáveis com dados relacionados ao site como um todo.

### Tags

Uma linguagem de modelo é, em essência, uma linguagem de marcação que tem como finalidade automatizar a criação de documentos. O Liquid, assim como o HTML, utiliza tags (etiquetas) para marcar um documento. No entanto, ao contrário do HTML, o Liquid e outras linguagens de modelo são específicos para guiar um processador de modelo no preenchimento de um template.

Existem dois tipos principais de tags no Liquid: tags de controle e tags de saída. As tags de controle representam raciocínio lógico dentro de um modelo e determinam coisas como a inclusão ou não de um trecho do template, a repetição de um determinado trecho do template e a atribuição de um valor a uma variável. Uma linguagem de modelo é, em essência, uma linguagem de marcação que tem como finalidade automatizar a criação de documentos. O Liquid, assim como o HTML, utiliza tags (etiquetas) para marcar um documento. No entanto, ao contrário do HTML, que é interpretado pelo navegador para exibir o documento, o Liquid é interpretado pelo processador de modelo, que dita como o documento deve ser preenchido dinamicamente.

Existem dois tipos principais de tags no Liquid: tags de controle e tags de saída. As tags de controle representam raciocínio lógico dentro de um modelo e determinam coisas como a inclusão ou não de um trecho do template, a repetição de um determinado trecho do template e a atribuição de um valor a uma variável. Já as tags de saída são usadas para exibir o conteúdo de uma variável ou o resultado de uma expressão.

As tags do Liquid são semelhantes a comandos em linguagens de programação, como o JavaScript. Na verdade, elas correspondem a comandos que o processador de templates usa para executar ações. Por exemplo, se quisermos que as informações do autor de um texto sejam exibidas somente se a página tiver um autor definido, podemos usar a tag if para verificar se a variável "page.author" possui um valor. Se a variável tiver um valor, o conteúdo dentro da tag será exibido, caso contrário, será ignorado. Nesse caso a tage if seria usada assim:

{% raw %}

```liquid
{% if page.author %}
  <div class="author_info">
    <!-- Código que será exibido caso page.author retorne algum valor -->
    <img src="avatar.jpg" alt="Imagem genérica para todos os autores"/>
    {{ page.author }}
    {{ page.author-description }}
  </div>
{% endif %}

```

{% endraw %}

Todas as tags são envolvidas com {% e %}. Algumas delas, como no caso do if acima, são compostas por uma parte que inicia a tag e outra que finaliza. Nesse caso, {% if page.author %} inicia a tag e {% endif %} finaliza ela. Esse tipo de construção da tag é usada para aquelas que precisam envolver algum conteúdo, exatamente como o if.

Nas seções abaixo, falamos das tags (pelo menos a maioria delas) atualmente disponíveis para uso no Jekyll.

As tags podem ser divididas em quatro categorias, dependendo do tipo de controle que elas descrevem: tags de decisão, iteração, templates e atribuição de variáveis.

#### Tags de decisão

Nessa categoria estão as tags que permitem o processador de modelos determinar qual bloco de código deve ser avaliado e em qual ordem. Estão incluídas nesse conjunto as tags if, elsif, else, unless, case e when. Algumas tags trabalham em conjunto com outra. elsif e else formam uma parceria com a if. Já when é usado junto com case e else.

Tags que definem blocos possuem uma tag de abertura e uma de fechamento. Por exemplo, a tag if possuí a tag correspondente endif. As tags de fechamento tem sempre a mesma composição, com a palavra end seguida do nome da tag.

A tag if condiciona a avaliação de um trecho no molde a uma condição ser verdadeira. A condição é, geralmente, uma comparação entre o valor de uma variável com um valor especifico, mas pode ser qualquer coisa que pode ser determinada como falsa ou verdadeira.

A sintaxe básica é a seguinte:

```
{% raw %}
{% if <condição> %}
Bloco de código ou texto que será executado/exíbido se a condição for verdadeira.
{% endif %}
{% endraw %}
```

Onde \<condição> deve ser substituído por alguma coisa que pode ser determinada falsa ou verdadeira.

Se a condição for verdadeira, isto é, se page.type retornar o valor "post", o que está entre {% raw %}`{% if page.type == "post" %}`{% endraw %} e {% raw %}`{% endif %}`{% endraw %} é avaliado. Caso contrário, o que está entre {% raw %}`{% if page.type == "post" %}`{% endraw %} e {% raw %}`{% endif %}`{% endraw %} será ignorado.

O que está entre {% raw %}`{% if page.type == "post" %}`{% endraw %} e {% raw %}`{% endif %}`{% endraw %} pode ser um código HTML, que será incluído ou não no molde (depende do resultado da avaliação da condição), ou outro código Liquid que  será executado ou não (depende do resultado da avaliação da condição).

Considere o fragmento

{% raw %}

```liquid
{% if page.type == "post" %}
  <link rel="stylesheet" href="post.min.css">
{% endif %}
```

{% endraw %}

como exemplo. Nele, `page.type == "post"` é a condição da tag `if`. A condição descrita, nesse caso, se trata de uma comparação entre dois valores: o da variável acessada com page.type, que presumidamente indica o tipo da página, e o texto "post". page.type é usado para acessar a variável **type** do objeto **page**. O objeto page representa a página sendo gerada no momento. Falaremos de objetos e variáveis na seção seguinte.

O importante a se notar no trecho acima é que o link para folha de estilo **post.min.css** é incluído no documento HTML final apenas se a `page.type` retornar um texto igual a **"post"**.

Para especificar outros casos que devem ser considerados se a condição especificada na tag `if` for falsa, nós usamos as tags `elseif` e `else`.

{% raw %}

```liquid
<!-- Inclui link se a página for do tipo post -->
{% if page.type == "post" %}
  <link rel="stylesheet" href="post.min.css">
{% elsif page.type == "produto" %} <!-- Inclui link se a página for do tipo produto -->
  <link rel="stylesheet" href="produto.min.css">
{% else %} <!-- Inclui link se a página não for do tipo post ou produto -->
  <link rel="stylesheet" href="resto.min.css"> 
{% endif %}
```

{% endraw %}

Se a condição na tag `if` não for verdadeira, a condição especificada na tag `elsif` será avaliada. Ou seja, se o valor de `page.type` não for igual à "post", será verificado se `page.type` retorna "produto". A tag `else` indica um link que será incluído caso nenhuma das alternativas anteriores sejam escolhidas. Se a página não for do tipo produto ou post, um link para a folha de estilo resto.min.css será incluído no documento.

Agora nós vamos tratar das tags `case` e `when`. Essas duas tags trabalham em conjunto para construir uma estrutura lógica de decisão com múltiplas condições alternativas. Podemos considerar essa estrutura como uma alternativa à utilização da combinação `if` + `elsif`.

A sintaxe a seguinte:

{% raw %}

```
{% case <variável> %}
  {% when <valor1> %}
   Bloco de código ou texto a ser executado/exíbido
  {% when <valor2> %}
   Bloco de código ou texto a ser executado/exíbido
  ...
  {% when <valorN> %}
   Bloco de código ou texto a ser executado/exíbido
{% endcase %}
```

{% endraw %}

Onde `case` inicia a estrutura identificando uma variável cujo valorestá sendo avaliada. já a tag when é usada para definir o que deve acontecer se o valor for igual a um determinado valor.

Usando essa estrutura para carregar os arquivos post.min.css ou produto.min.css alternativamente, baseado no valor da variável page.type, nós obtemos o seguinte:

{% raw %}

```liquid
{% case page.type %}
  {% when "post" %} 
   <link rel="stylesheet" href="post.min.css">
  {% when "produto" %}
   <link rel="stylesheet" href="produto.min.css">
{% endcase %}
```

{% endraw %}

Nós também podemos incluir a tag `else` no fim para especificar o bloco de código ou texto que será avaliado se nenhuma das condições forem atendidas.

{% raw %}

```liquid
{% case page.type %}
  {% when "post" %} 
   <link rel="stylesheet" href="post.min.css">
  {% when "produto" %}
   <link rel="stylesheet" href="produto.min.css">
  {% else %}
   <link rel="stylesheet" href="resto.min.css">
{% endcase %}
```

{% endraw %}

A última tag que nós vamos discutir é a `unless`. Ao contrário da tag `if`, a `unless` condiciona a avaliação do trecho do template à uma condição **não ser atendida**. Ou seja, para um bloco de código ser executado, ou um texto ser incluido na versão final do HTML, a condição deve ser falsa.

A sintaxe é a seguinte:

{% raw %}

```
{% unless <condição> %} 
    Bloco de código ou texto que será executado/exíbido se a condição for falsa.
{% endunless %} 
```

{% endraw %}

#### Tags de iteração

Antes de mergulhar nas tags de iteração em Liquid, é importante entender o que é uma iteração. Iteração é simplesmente o processo de repetir uma determinada operação várias vezes. No contexto de desenvolvimento web, a iteração é usada para percorrer estruturas de dados, como listas, dicionários e matrizes.

Em Liquid, existem várias tags de iteração disponíveis, cada uma com seu próprio conjunto de recursos. As mais comuns incluem a tag for, tablerow, cycle, increment e capture. Vamos dar uma olhada em cada uma delas e como você pode usá-las.

Nessa categoria estão as tags que permitem o Jekyll determinar a repetição de um bloco de código. Estão incluídas nesse conjunto as tags `for`, `break` e `continue`.

A tag `for` é a permite que você itere sobre uma lista. Você pode usar a tag `for` para executar uma ação para cada item na lista, como exibir um título de postagem ou criar uma lista de links.

A tag `for` repete um bloco de código para cada item em uma lista com um ou mais itens. Sua sintaxe é a seguinte:

{% raw %}

```
{% for <item> in <lista> %}
Bloco de código ou texto que será repetido
{% endfor %}
```

{% endraw %}

`<item>` é o nome que você quer dar a cada item na lista. \<lista> é a lista sobre a qual você está iterando

Aqui a gente itera sobre uma lista simples em Liquid:

```liquid
{% for autor in site.autores %}
{{ author.nome }}
{% endfor %}
```

Neste exemplo, a tag for começa com {% raw %}{% for autor in site.autores %}{% endraw %}, onde autor é o nome que você deseja dar a cada item na lista e site.autores é a lista que você está iterando. Dentro do loop, você pode exibir cada item com a sintaxe {% raw %}{{ item }}{% endraw %}. Por fim, o loop é encerrado com a tag endfor.

Nota: na verdade, site.autores é uma declaração de acesso ao valor da variável autores do objeto site. Nesse caso, o valor é uma lista, o que é obrigatório no caso do comando `for`.

No exemplo a seguir nós vamos roubar um pouquinho e usar uma tag e filtros que ainda não foram explicados para criar uma lista de frutas:

```liquid
{% assign frutas = "maçãs, bananas, morangos" | split: ", " %}
```

A lista  com três  frutas foi armazenada em uma variável como nome frutas. Agora nós podemos executar um código para cada um dos itens.

```liquid
<ul>
  {% for fruta in frutas %}
  <li>{{ fruta }}</li>
  {% endfor %}
</ul>
```

Este código criará uma lista HTML que exibe cada uma das frutas na lista frutas.


Este trecho de código nos permite percorrer cada um dos autores e obter seu nome. Se há a necessidade de fazer o iterador parar, ou impedi-lo de seguir em frente, nós precisamos de uma condição, e das tags `break` ou `continue`. 

A tag continue  é usada para pular uma iteração do loop atual e ir para a próxima. Por exemplo, suponha que estamos iterando sobre uma lista de posts, e queremos pular aqueles que não estão publicados (ou seja, se a data de publicação for no futuro). Podemos usar a tag continue para ignorar a iteração desse post.

Veja um exemplo de código:

```liquid
{<ul>
  {% for post in site.posts %}
    {% if post.date > site.time %}
      {% continue %}
    {% endif %}
    <li>{{ post.title }} - {{ post.date }}</li>
  {% endfor %}
</ul>

```


Neste exemplo, usamos a tag if para verificar se a data de publicação do post é maior que a data atual do site (ou seja, se o post ainda não foi publicado). Se a condição for verdadeira, usamos a tag continue para pular a iteração e passar para o próximo post. Mais uma vez, nós aprenderemos 

Nota: post e site são objetos em Jekyll e nós discutiremos eles mais adiante. 


Para finalizar essas seção nós vamos falar da tag break. A tag break é usada para interromper uma estrutura de repetição. Suponha que, em nosso exemplo anterior, queremos exibir apenas os dois posts mais recentes. Podemos usar a tag break para interromper a iteração depois de exibir os dois primeiros posts.

Veja um exemplo de código:

```javascript
<ul>
  {% for post in site.posts %}
    {% if forloop.index > 2 %}
      {% break %}
    {% endif %}
    <li>{{ post.title }} - {{ post.date }}</li>
  {% endfor %}
</ul>

```

Neste exemplo, usamos a variável forloop.index{ para verificar se a iteração atual é maior que 2 (ou seja, se já exibimos os dois primeiros posts). Se a condição for verdadeira, usamos a tag break para interromper a iteração.


#### Tags de Variáveis

As tags de variáveis nos permitem associar um nome a um dado, de forma que esse nome pode ser usado sempre que for necessário recuperar o dado. Isso é especialmente útil quando você deseja armazenar um valor que será usado várias vezes em diferentes partes do seu template. A mais utilizada tag desse grupo é a `assign`, mostrada no exemplo abaixo.


{% raw %}

```liquid
{% assign minha_variavel = false %}
{% if minha_variavel = true %}
    Aeeeh
{% endif %}
```

{% endraw %}

No fragmento acima, a variável *minha\_variavel* foi associada ao [valor booleano false](https://developer.mozilla.org/pt-BR/docs/Glossary/Boolean#:~:text=Um%20booleano%2C%20em%20ci%C3%AAncia%20da,c%C3%B3digo%20ser%C3%A3o%20executados%20ou%20repetidas. "") A tag `if` verifica o valor da variável e decide se o texto "Aeeeh" deve ser parte do documento HTML ou não. Nesse  caso, como é testado se o valor da variável é true (verdadeiro), mas o valor é false (falso), o texto é ignorado.

#### Outras tags

Aqui eu vou citar duas tags que não se encaixam bem em um grupo que é a `include` e a `raw`. 

A tag `include` nos permite "invocar" o conteúdo de outro arquivo. Sempre que o processador de modelos encontra essa tag, ele procura uma arquivo em uma pasta especifica dentro do projeto Jekyll chamada \_includes. Uma vez que ele encontra esse arquivo, o seu conteúdo é copiado para o arquivo onde a tag include está. Em outras palavras, essa tag nos permite inserir o conteúdo de um arquivo da pasta [ \_*includes*](https://tecnologiaeinformacao.netlify.app/webdev/webdev-jekyll-folder-structure "") dentro de qualquer outro arquivo que faz parte do projeto. Isso é muito útil para reutilizar códigos em vários documentos.

Para usar a tag "include", basta usar o seguinte formato:

```
{% include nome_do_arquivo %}
```

Onde "nome\_do\_arquivo" é o nome do arquivo que você deseja incluir. Note que o arquivo deve estar na mesma pasta do arquivo que está fazendo a inclusão.

Esse recurso é fundamental para possibilitar o trabalho com modularização, em que o sistema é dividido em partes menores, chamados de módulos, e então combinados da maneira que for necessário para compor o produto final. Nesse caso, o que dividimos são os templates. Nós fazemos vários arquivos com templates que podem ser combinados da forma como for necessário.

Por exemplo, em um blog nós podemos ter um template com a estrutura e conteúdo do rodapé do site. Esse template pode ser salvo com o nome footer.html e deve ser colocado em um arquivo dentro da pasta \_*includes* do projeto.

{% raw %}

```liquid
<!-- page footer -->
<footer id="pg-footer">
	 <nav>
	   <ul>
	     <li><a href="{{ 'common-pages/terms.html' | relative_url }} ">Termos</a></li>
	     <li><a href="{{ 'common-pages/privacy-policy.html' | relative_url }}">Política de Prívacidade</a></li>
	   </ul>
	 </nav>
	 <span class="copyright">Copyright &copy; | Tecnologia e Informação</span>
</footer>
<!-- end page footer -->
```

{% endraw %}

Dentro de um layout o rodapé pode ser inserido usando a tag `include`.

{% raw %}

```liquid
{% include footer.html %}
```

{% endraw %}

Logo veremos isso aplicado na prática.

## Filtros

Os filtros são funções que permite transformar um dado. Eles aparecem entre  {% raw %}{{ e }}{% endraw %},  e é separado  do dado que será manipulado por uma barra |.

{% raw %}

```liquid
{{ "/my/fancy/url" | append: ".html" }}
```

{% endraw %}

O dado "/my/fancy/url" é transformado pelo filtro `append` em "/my/fancy/url.html".

O dado que será manipulado pode vir a partir do acesso a variável de um objeto.
{% raw %}

```liquid
{{ site.time | date_to_string }}
```

{% endraw %}

No trecho acima, nós acessamos a variável time do objeto site e transformamos o dado retornado com o filtro `date_to_string`. A variável time armazena uma data e  hora do momento exato quando o site foi criado pelo Jekyll. Essas informações são salvas em um formato como esse 2022-12-15 08:39:20 -0300 . O filtro `date_to_string` modifica esse formato, deixando essa data assim 15 Dec 2022.

***

***

Previous

Centralizando a estrutura comum em um template, e descrevendo o conteúdo especifico de cada página em arquivos próprios, nós podemos estabelecer um processo de construção do site que consiste em pegar o conteúdo especifico de cada página e combinar com uma cópia do template, gerando uma série de documentos HTML prontos para serem distribuídos e processados pelo navegador do usuário.

O template contém os elementos que devem ser iguais em um grupo de páginas, de modo que, quando esses elementos são alterados, a alteração deve aparecer em todas as páginas do grupo. Por exemplo, o menu. ou a logo do site.

Além disso, os templates podem ser combinados com outros templates. Assim, é possível criar um "super" template mais complexo a partir de moldes menores. Essa capacidade facilita a reutilização de códigos que devem ser compartilhados por múltiplos moldes usados na criação do site.
