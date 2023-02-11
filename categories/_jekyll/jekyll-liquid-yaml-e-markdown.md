---
layout: article
categories:
- Jekyll
tags:
- " Linguagem de Modelo"
- Molde
lastUpdated: 2022-09-11T08:42:53.000+00:00
excerpt_separator: "<!--more-->"
order: 3
title: Jekyll - Liquid, YAML e Markdown
description: Nesse capitulo nós abordaremos o básico das três linguagens que formam
  a base para qualquer site escrito em Jekyll.
permalink: " jekyll/:title"
date: 2022-09-19T03:00:00.000+00:00
author: Fernando Bonfim
sources: []
secondary_sources:
- title: 'Repleo: a Syntax-Safe Template Engine'
  url: https://sci-hub.se/https://doi.org/10.1145/1289971.1289977
- title: Design and Implementation of an Efficient Approach for Custom-fields and
    Formulas with SAP HANA
  url: https://wwwiti.cs.uni-magdeburg.de/iti_db/publikationen/ps/auto/thesisKindakli15.pdf
- title: Enforcing Strict Model-View Separation in Template Engines
  url: https://www.cs.usfca.edu/~parrt/papers/mvc.templates.pdf
- title: 'THE DESIGN OF A TEMPLATING LANGUAGE TO EMBED DATABASE QUERIES INTO DOCUMENTS '
  url: https://www.iasj.net/iasj/download/a6efea71fa2a7cdc
published: false

---
Além da tríade HTML, CSS e JavaScript, a construção de um site usando o Jekyll requer o conhecimento de pelo menos outras duas linguagens: o Liquid e o <abbr title="YAML Ain't a Markup Language">YAML</abbr>. Além dessas, conhecer uma terceira linguagem, o Markdown, pode ser necessário dependendo do tipo de conteúdo do site e também da preferência de quem produz esse conteúdo.

O Liquid é usado na criação dos templates usados no site. O YAML fornece uma maneira de apresentação de informações de modo estruturado para munir o Jekyll dos dados que ele precisa para montar nossas páginas. O Markdown substitui o HTML na estruturação do conteúdo textual da página, Nas seções seguintes nós estudamos cada uma dessas tecnologias..

## Liquid e templates

O principal objetivo do Jekyll é **automatizar a criação de todas as páginas que fazem parte de um website antes que o usuário tente acessar qualquer uma delas**. Ele permite a criação de websites enormes sem que o desenvolvedor precise codificar manualmente cada uma de suas páginas. Para esse propósito, o uso de templates é fundamental.

<dfn>Template</dfn> é uma palavra do idioma inglês que denota uma **forma**, **molde ou padrão** usado como um guia para fazer alguma coisa, como a página de um site nesse caso.

**Observação**: Durante esse texto estaremos usando as palavras template e molde como iguais.

Geralmente, o template contém os elementos que devem ser iguais em um grupo de páginas, de modo que, quando esses elementos são alterados, a alteração deve aparecer em todas as páginas do grupo. Já o conteúdo que será consumido pelo usuário, que é exclusivo de cada página, fica em arquivos próprios (ou em um banco de dados), separados da parte comum.

Centralizando a estrutura comum em um template, e descrevendo o conteúdo especifico de cada página em arquivos próprios, nós podemos estabelecer um processo de construção de páginas que faz várias cópias do template e combina-os com cada um dos arquivos com conteúdo especifico, gerando documentos HTML prontos para serem distribuídos para os usuários.

Além disso, moldes podem ser combinados com outros moldes. Assim, é possível criar um molde mais complexo a partir de moldes menores. Essa capacidade facilita a reutilização de códigos que devem ser compartilhados por múltiplos moldes usados na criação do site.

Usa-se um programa, chamado de <dfn>processador de molde</dfn>, para combinar um molde com os dados para gerar uma página. Esse programa entende uma linguagem denominada linguagem de molde (do inglês templating language), que é usada para adicionar anotações em um documento, que orientam o processador no preenchimento do molde.

Seguindo essa orientação, é decidido como o template é combinado com os dados específicos para gerar cada página.

\[GIF/VIDEO\]

Em Jekyll, um molde toma forma de um arquivo que mistura elementos do HTML e do Liquid. O HTML é parte que é comum em todas as páginas que usam um determinado template. Em meio a marcação HTML nós inserimos trechos de código escritos em Liquid, que é a linguagem que vai guiar o preenchimento do molde.

Com o Liquid nós podemos descrever um raciocínio para a exclusão ou inclusão de elementos em um template (e.g., incluir um link para uma página de contato apenas se essa página existir no site), ou apenas indicar pontos onde o inserir um determinado conteúdo.

Em um blog nós podemos ter diversas postagens, cada uma em sua própria página. Apesar de cada postagem ter um texto diferente tratando de assuntos diversos, todas elas podem compartilhar alguns elementos que são iguais. Os exemplos mais evidentes nesse contexto seriam o rodapé e o cabeçalho do site, que geralmente não mudam para cada página do site. Esses componentes do site podem ser definidos em um template, enquanto os textos específicos para cada página são mantidos em arquivos separados.

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

Segundo esse template, o texto da postagem é envolto em um elemento do HTML chamado `<main>` , como informa o trecho {% raw %}`{{ page.content }}`{% endraw %}. Já o titulo do texto é colocado dentro do elemento  `<title>` e também no elemento `<h1>`, como indicado pela presença do trecho {% raw %}`{{ page.title }}`{% endraw %} em duas partes do template.

**Nota**: os termos page, title e content são palavras em inglês para página, titulo e conteúdo respectivamente. No código, os termos title e content são usados como uma referencia à atributos de um objeto chamado page. Depois analisaremos isso melhor.

Esse molde pode ser usado para criar varias páginas diferentes, Como esta:

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

<dfn>Liquid</dfn> é uma **linguagem de molde** criada pela Shopify para escrever os moldes usados na criação de sites de compra em sua plataforma. Apesar de ser pensada para os sites desenvolvidos na plataforma da Shopify, o processador de molde que entende essa linguagem é [disponibilizado como um projeto de código](https://github.com/Shopify/liquid) aberto no GitHub. Isso permite que esse processador seja adaptado e utilizado em outros projetos que pretender usar o Liquid em seu sistema de templates, como o Jekyll.

Como uma linguagem, ela possui um conjunto de símbolos e palavras e sua própria sintaxe (regras para combinar as palavra e os símbolos, formando os recursos da linguagem). Os recursos são os elementos comunicativos da linguagem; eles nos permitem montar instruções para comunicar ao processador o que deve ser feito. A instrução pode ser algo simples como "insira o conteúdo da página aqui", ou algo mais complexo como "acesse acesse uma lista de posts, filtre aqueles que fazem parte de uma categoria especifica, e mostre os que passarem pelo filtro".

Os recursos podem ser categorizados em tags, objetos e filtros. Esses recursos são combinados e inseridos nos moldes para guiar o preenchimento deles de forma dinâmica. Nas próximas seções, nós vamos discutir um pouco desses recursos.

### Tags

Assim como o HTML, uma linguagem de molde é também uma linguagem de marcação. Uma linguagem de marcação

mas especifica para automação da criação de documentos. Assim como o HTML, o Liquid contém usa tags, ou etiquetas, para marcar um documento. Do mesmo modo que o navegador lê as marcações em HTML para decidir e (levando em conta as regras definidas em CSS), decide como o documento será exibido, a linguagem de molde também é interpretada, mas pelo processador de molde, e com o objetivo de ditar

Tags de controle e tags de saida

As <dfn>tags</dfn>, de acordo com a documentação do Liquid, são os construtos da linguagem que descrevem/representam algum raciocínio lógico dentro de um molde. O raciocínio empregado pode determinar coisas como a inclusão ou não de um trecho do template, a repetição de um determinado trecho do template e a atribuição de um valor a uma variável.

As tags do Liquid são muito parecidas com os comandos em linguagens de programação, como o JavaScript. Bom, de certo modo eles são comandos, afinal, o gerador de templates toma ações de acordo com essas tags.

Por exemplo, se queremos que as informações do autor de um texto sejam exibidas somente se a página tiver um autor definido, nós podemos usar a tag `if`, como no trecho abaixo

{% raw %}

```liquid
{% if page.author %}
  <div class="author_info">
    <!-- Código que será exíbido caso page.author retorne algum valor -->
    <img src="avatar.jpg" alt="Imagem genérica para todos os autores"/>
    {{ page.author }}
    {{ page.author-description }}
  </div>
{% endif %}
```

{% endraw %}

Logo veremos que para determinar se a página tem um autor definido, o Jekyll verifica as informações sobre o arquivo descritas usando YAML.

Todas as tags são envolvidas com {% raw %}`{%` e `%}`{% endraw %}. Algumas delas, como no caso do `if` acima, são compostas por uma parte que inicia a tag e outra que à finaliza. Nesse caso {% raw %} `{% if page.author %}` {% endraw %} inicia a tag e  {% raw %} `{% endif %}` {% endraw %} finaliza ela. Esse tipo de construção da tag é usada para aquelas que precisam envolver algum conteúdo, exatamente como o `if`.

Nas seções abaixo nós falamos das tags (pelo menos a maioria delas) atualmente disponíveis para uso em Jekyll.

As tags podem ser dividas em quatro categorias, a depender do tipo de controle que elas descrevem: tags de decisão, iteração, templates, e atribuição de variáveis.

#### Tags de decisão

Nessa categoria estão as tags que permitem o Jekyll determinar qual bloco de código deve ser avaliado e em qual ordem. Estão incluídas nesse conjunto as tags `if`, `elsif`, `else`, `unless`, `case` e `when`. Algumas tags trabalham em conjunto com outra. `elsif` e `else` formam uma parceria com a `if`. Já `when` é usado junto com `case` e `else`.

Tags que definem blocos possuem uma tag de abertura e uma de fechamento. Por exemplo, a tag `if` possuí a tag correspondente `endif`. As tags de fechamento tem sempre a mesma composição, com a palavra end seguida do nome da tag.

A tag `if` condiciona a avaliação de um trecho no molde a uma condição ser verdadeira. A condição é, geralmente, uma comparação entre o valor de uma variável com um valor especifico.

A sintaxe básica é a seguinte:
{% raw %}
{% if <condição> %}
Bloco de código que será executado se a condição for verdadeira
{% endif %}
{% endraw %}

Onde <condição> deve ser substituído por alguma coisa que pode ser determinada falsa ou verdadeira.

Considere o fragmento

{% raw %}

```liquid
{% if page.type == "post" %}
  <link rel="stylesheet" href="post.min.css">
{% endif %}
```

{% endraw %}

como exemplo. Nele, page.type == "post" é a condição da tag `if`. A condição descrita, nesse caso, se trata de uma comparação entre dois valores: o da variável acessada com page.type, que presumidamente indica o tipo da página, e o texto "post". page.type é usado para acessar a variável **type** do objeto **page**. O objeto page representa a página sendo gerada no momento. Falaremos de objetos e variáveis na seção seguinte.

Se a condição for verdadeira, se page.type retornar o valor "post", o que está sendo envolvido por {% raw %}`{% if page.type == "post" %}`{% endraw %} e {% raw %}`{% endif %}`{% endraw %} avaliado. Se for falso, se page.type não retornar o valor "post", o que está sendo envolvido por {% raw %}`{% if page.type == "post" %}`{% endraw %} e {% raw %}`{% endif %}`{% endraw %} será ignorado. O que está entre {% raw %}`{% if page.type == "post" %}`{% endraw %} e {% raw %}`{% endif %}`{% endraw %} pode ser um código HTML, que será incluído ou não no molde (depende do resultado da avaliação da condição), ou outro código Liquid que  será executado ou não (depende do resultado da avaliação da condição).

O importante a se notar no trecho acima é que o link para folha de estilo **post.min.css** é incluído no molde apenas se a `page.type` retornar um texto igual á **"post"**.

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

Se a condição na tag `if` não for verdadeira, a condição especificada na tag `elsif` será avaliada. Ou seja, se o valor de `page.type` **não** for igual à "post", será verificado se `page.type` retorna "produto". A tag `else` indica um link que será incluído caso nenhuma das alternativas anteriores sejam escolhidas. Se a página não for do tipo produto ou post, um link para a folha de estilo resto.min.cssserá incluído no documento.

Agora nós vamos tratar das tags `case` e `when`. Essas duas tags trabalham em conjunto para construir uma estrutura lógica de decisão com múltiplas condições alternativas. Podemos considerar essa estrutura como uma alternativa à utilização da combinação `if` + `elsif`.

A sintaxe a seguinte:

{% raw %}

    {% case <variável> %}
      {% when <valor1> %}
       Bloco de código a ser avaliado
      {% when <valor2> %}
       Bloco de código a ser avaliado
      ...
      {% when <valorN> %}
       Bloco de código a ser avaliado
    {% endcase %}

{% endraw %}

`case` inicia a estrutura identificando uma variável cujo valor será comparado com o valor em cada tag `when`. Caso a comparação retorne verdadeiro,

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

Nós também podemos incluir a tag `else` no fim para especificar o bloco de código que será avaliado se nenhuma das condições forem atendidas.

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

A última tag que nós vamos discutir é a `unless`. Ao contrário da tag `if`, a `unless` condiciona a avaliação de um trecho do template à uma condição não ser atendida.

A sintaxe é a seguinte:

{% raw %}

``` 
{% unless <condição> %} 
    Bloco de código que será executado se a condição for atendida 
{% endunless %} 
```

{% endraw %}

#### Tags de iteração

Nessa categoria estão as tags que permitem o Jekyll determinar a repetição de um bloco de código. Estão incluídas nesse conjunto as tags `for`, `break` e `continue`.

A tag for repete um bloco de código para cada item em um vetor. Um vetor, nesse caso, é uma lista com um ou mais itens.

A sintaxe do comando for é a seguinte:

{% raw %}

    {% for <variável> in <vetor> %}
    Bloco de código que será repetido
    {% endfor %}

{% endraw %}

`<variável>` é o nome da variável que recebe cada item do vetor a cada volta.

{% raw %}

``` liquid
{% for autor in site.autores %}
{{ author.nome }}
{% endfor %}
```

{% endraw %}

Este trecho de código nos permite percorrer cada um dos autores e obter seu nome. Entretanto, a tag `for` é não discriminante. Se há a necessidade de fazer o loop parar, ou impedi-lo de seguir em frente, nós precisamos de uma condição, e das tags `break` ou `continue`.

#### Tags de Variáveis

São tags que nos permite associar um nome a um dado, de forma que esse nome pode ser usado no lugar do dado em outras tags. A mais utilizada tag desse grupo é a `assign`, mostrada no exemplo abaixo.

```liquid
{% assign minha_variavel = false %}
{% if minha_variavel = true %}
    Aeeeh
{% endif %}
```

No fragmento acima, a variável _minha_variavel_ foi associado ao [valor booleano false](https://developer.mozilla.org/pt-BR/docs/Glossary/Boolean#:\~:text=Um%20booleano%2C%20em%20ci%C3%AAncia%20da,c%C3%B3digo%20ser%C3%A3o%20executados%20ou%20repetidas.) A tag if verifica esse valor e decide se o que está dentro dela lido ou ignorado. Nesse  caso, como é testado se o valor da variável é true (verdadeiro), mas o valor é false, o conteúdo da tag é ignorado.

#### Tags de Temas/Templates

Nosso ultimo conjunto é o de tags de tema. Aqui entram as tags que não se encaixam bem em outras categorias, mas que dão apoio a criação de templates que compõem o tema.

Para fim de completude da informação, um **tema** é um site completo, que inclui coisas como um conjunto de cores, tipografia, cabeçalho e rodapé, organização dos elementos nas páginas, e que é usado como base para outros sites. Um tema pode ser composto por vários templates.

Voltando ao assunto dessa seção, uma das tags mais utilizadas desse grupo é a `include`. A tag include (incluir, em português) nos permite invocar o conteúdo de um arquivo para dentro de outro.

Geralmente, o conteúdo do arquivo que será incluído se trata de um template relativamente pequeno. Mais especificamente, essa tag nos permite inserir o conteúdo de um arquivo da pasta [ __includes_](https://tecnologiaeinformacao.netlify.app/webdev/webdev-jekyll-folder-structure) dentro de qualquer outro arquivo que faz parte do projeto.

Esse recurso é fundamental para possibilitar o trabalho com modularização, em que o sistema é dividido em partes menores, chamados de módulos, e então combinados da maneira que for necessário para compor o sistema. Nesse caso, o que dividimos são os templates. Nós fazemos vários arquivos com templates que podem ser combinados da forma como for necessário.

Por exemplo, em um blog nós podemos ter um template com a estrutura e conteúdo do rodapé do site. Esse template pode ser salvo com o nome footer.html e deve ser colocado em um arquivo dentro da pasta __includes_ do projeto.

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

Dentro de um layout o rodapé pode ser inserido usando a tag `include`.

```liquid
{% include footer.html %}
```

Logo veremos isso aplicado na prática.

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

Os objetos em Liquid representam um conceito relacionado ao site. Por exemplo, nós temos o objeto chamado _site_, que guarda variáveis com dados relacionados ao site como um todo.

## Filtros

Os filtros são funções que permite transformar um dado. Eles aparecem entre  {%raw%}{{ e }}{% endraw%},  e é separado  do dado que será manipulado por uma barra |.

```liquid
{{ "/my/fancy/url" | append: ".html" }}
```

O dado "/my/fancy/url" é transformado pelo filtro `append` em "/my/fancy/url.html".

O dado que será manipulado pode vir a partir do acesso a variável de um objeto.

```liquid
{{ site.time | date_to_string }}
```

No trecho acima, nós acessamos a variável time do objeto site e transformamos o dado retornado com o filtro `date_to_string`. A variável time armazena uma data e  hora do momento exato quando o site foi criado pelo Jekyll. Essas informações são salvas em um formato como esse 2022-12-15 08:39:20 -0300 . O filtro `date_to_string` modifica esse formato, deixando essa data assim 15 Dec 2022.

***