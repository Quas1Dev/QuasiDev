---
title: "Jekyll - Introdução "
layout: article
permalink: /webdev/:title
description: Conheça o Jekyll e como usá-lo para criar sites incriveis.
categories:
  - Desenvolvimento Web
tags:
  - jekyll
  - gerador de sites
date: 2022-02-20 19:00:00
lastUpdated: 2022-08-20T08:17:32.052Z
author: Fernando
excerpt_separator: <!--more-->
sources:
  - title: The history of CMS – what has happened? - Enonic
    url: https://enonic.com/blog/the-history-of-cms--what-has-happened
  - title: Documentação do Jekyll
    url: https://jekyllrb.com/docs/
  - title: The Differences Between Static and Dynamic Websites - Plural Sight
    url: https://www.pluralsight.com/blog/creative-professional/static-dynamic-websites-theres-difference
  - title: Package format - Wikipedia
    url: https://en.wikipedia.org/wiki/Package_formatge
  - title: Package manager - Wikipedia
    url: https://en.wikipedia.org/wiki/Package_manager
order: 1
---
De acordo com estimativas da agência [International Telecommunication Union (ITU)](https://www.itu.int/en/mediacentre/Pages/PR-2021-11-29-FactsFigures.aspx#:~:text=New%20data%20from%20the%20International,in%202021%2C%20from%20an%20estimated){: target="_blank" rel="noreferrer noopener nofollow"}, nós chegamos a cerca de 4.9 milhões de pessoas com acesso a internet em 2021, um aumento em relação aos 4.1 milhões estimados em 2019. Como desenvolvedores web, temos que fazer o possível para tornar a experiência do usuário mais agradável, com sites cada vez mais rápidos e seguros, sem perder o poder de criação, customização e velocidade no desenvolvimento. Para atender a essa demanda crescente, são necessárias novas ferramentas que permitam superar as dificuldades que as ferramentas que já utilizamos possuem.

<!--more-->

Esse texto faz parte de uma série em que vamos explorar o Jekyll, o primeiro gerador de sites estáticos a atrair o apoio e se tornar popular. Durante essa série nós vamos entender tudo que é necessário para criar projetos usando essa ferramenta. Nessa primeira parte, nós vamos entender o que é o Jekyll, discutir alguns dos benefícios em usar esses tipo de sistema, e vamos discutir alguns aspectos do Jekyll. Também vamos instalar e criar nosso primeiro projeto com Jekyll.

## O Que é o Jekyll

Sites são conjuntos de páginas relacionadas localizadas sob um mesmo domínio (e.g., amazon.com). Um conjunto desses é considerado estático quando as páginas que fazem parte dele são enviadas pelo servidor de rede do jeito que está. Ou seja, o servidor não precisa construir a página quando o usuário a solicita, o que pode acontecer quando o usuário usa a barra de endereços do navegador ou clicar em um link.

O site onde está lendo isso é um exemplo de site estático. Todos os arquivos .html já estão prontos no servidor, e sempre que você tenta acessar uma de nossas páginas, tudo que o servidor precisa fazer é localizar o documento correspondente em seu sistema de arquivos. 

Isso é diferente de sites dinâmicos. Nesses sites as páginas são geradas quando solicitadas pelo usuário. Por exemplo, toda vez que você entra em alguma página do site [CSS-Tricks](https://css-tricks.com/){: target="_blank" rel="noreferrer noopener nofollow"}, a página é criada pelo servidor e então enviada para o seu navegador.

Um <dfn>gerador de sites estáticos</dfn> é um programa usado para criar sites estáticos de forma automatizada. Ao invés de escrever cada documento HTML a mão, nós podemos criar um template que será combinado com algum conteúdo para criar cada página do nosso site.

Desse modo, o Jekyll é um pouco como um cozinheiro: ele recebe alguns ingredientes e uma receita para gerar um prato delicioso. A receita seria o equivalente aos templates, que são escritos com HTML que determina a estrutura geral que as páginas que usam o template vão ter, e com Liquid que determina como o gerador deve encaixar o conteúdo no template. Os ingredientes é o conteúdo, geralmente escrito em Markdown e, talvez, com um pouco de HTML misturado. O prato preparado seria uma página HTML que contém uma estrutura e conteúdo como se tivesse sido construída do zero. Para o Jekyll, há também um conjunto de configurações que dão informações adicionais que serão úteis na preparação, este seria como um chefe passando instruções que devem ser consideradas além da receita. Claro, a analogia não reflete exatamente a natureza de cada parte do processo, particularmente acho que os templates são melhor compreendidos quando utilizados. Mas não se preocupe, conforme nos aprofundamos no assunto você vai compreender perfeitamente como o Jekyll funciona. 

## Vantagens de um Gerador

No começo da internet, os sites eram construídos e mantidos a mão. Não havia processos automatizados; cada componente tinha que ser escrito linha por linha pelo desenvolvedor ou time de desenvolvedores. Imagina o inferno que era algumas atividades simples como adicionar uma nova página, ou mudar o layout do site. Apenas pessoas com conhecimento avançado de programação eram capazes de colocar conteúdo no ar, enquanto o grande público permanecia apenas consumidor.

Em pouco tempo, viu-se a necessidade de um sistema que pudesse facilitar a criação, implantação e manutenção de websites a longo prazo. Daí começaram a aparecer os primeiros Sistemas de Gerenciamento de Conteúdo (SGC), que são mais conhecidos pelo termo em inglês Content Management Systems (CMS). Primeiro vieram as versões específicas para cada negócio, depois surgiram empresas oferecendo soluções para uso geral. 

Os CMS fornecem funcionalidades que facilitam a vida dos desenvolvedores de sites e criadores que alimentam esse site com conteúdo. Com essas funcionalidades o tempo para colocar um novo blog, e-commerce, ou qualquer outro website online, no ar se tornou uma questão de minutos. Todavia, os CMSs trazem alguns desafios no que diz respeito à segurança, performance, e customização dos projetos. 

Nos sites criados com um sistema desse tipo, as páginas de um site são criadas automaticamente em um servidor a cada pedido do usuário. Para gerar essa página, o CMS precisa carregar os plugins (programas que adicionam novas ferramentas e funcionalidades ao CMS) que foram adicionados ao projeto pelo desenvolvedor. Não é raro um plugin conter vulnerabilidades, e essas vulnerabilidades podem ser aproveitadas por um hacker toda vez que um novo processo de construção é acionado pela visita de um usuário. 

Além de carregar os plugins, o servidor, provavelmente, se conecta a um banco de dados para buscar o conteúdo que será inserido na página. Essa interface entre o servidor e um banco de dados é um alvo frequente para hackers. Não importa se o banco de dados é SQL ou NoSQL.

Para garantir que o ambiente esteja seguro, os desenvolvedores precisam gerenciar e atualizar constantemente todos os plugins usados no projeto, principalmente os mais propensas a serem comprometidos, ao mesmo tempo que toma cuidado para não quebrar todo o site por um efeito colateral das atualizações. E ainda deve se preocupar com a construção do código usado para se comunicar com o banco de dados para mitigar ataques de [injeção de SQL](https://pt.wikipedia.org/wiki/Inje%C3%A7%C3%A3o_de_SQL){: target="_blank" rel="noreferrer noopener nofollow"}.

Acontece que o processo de manter todo o sistema atualizado consome muito tempo. A solução mais fácil encontrada foi a de usar um serviço online que fica responsável pela manutenção do CMS e os plug-ins adicionados (e.g., [Blogger](https://www.blogger.com/about/){: target="_blank" rel="noreferrer noopener nofollow"}, [Wordpress.com](https://wordpress.com/pt-br/){: target="_blank" rel="noreferrer noopener nofollow"}), ao invés de usar o sistema em um servidor local. Nesse caso, a empresa por trás da solução online fica responsável pela manutenção, enquanto seus clientes podem focar em adicionar conteúdo e novas funcionalidades. Mas ter a segurança oferecida por esses serviços muitas vezes significa abrir mão do poder de customização do projeto. Manter um CMS localmente permite alterar detalhes que talvez não seja possível em um serviço como Blogger, por exemplo. Como resultado, algumas otimizações que poderiam ser implementadas no código do site podem não ser possível.

A performance também é um problema. Além de estar limitado em relação a otimização do código usado para construir, estilizar e dinamizar a página, também temos que considerar que criar uma página no momento em que o usuário precisa dela pode impactar bastante o tempo de carregamento da página, principalmente quando o número de plugins aumenta consideravelmente, e como [algumas pesquisas demonstram, tempo é dinheiro](https://wpostats.com/){: target="_blank" rel="noreferrer noopener nofollow"}.

Considerando esses desafios, alguns desenvolvedores começaram a pensar em uma solução que permitisse a customização do produto final, e que fosse possível ter um ambiente seguro sem gastar muito tempo com a manutenção. Geradores de site são frutos desse pensamento. Com essa ferramenta, todas as páginas são construídas somente uma única vez: quando há alguma alteração nos documentos. Ou seja, quando o usuário digita o endereço da página e apertar Enter, ou clica em um link que leva para uma página no seu site, tudo que o servidor precisa fazer é localizar o documento em seu sistema de arquivos e entregá-lo para o usuário. Não há, em grande parte, a necessidade de construção da página sob demanda. O banco de dados existe de forma independente do front-end, e portanto o sistema tem menos pontos que podem ser explorados por usuários mal intencionados e mantém os dados mais seguros.

Ademais, todo o código do site está disponível para fazer qualquer alteração necessária em nível granular. Modificar a marcação do site para se adequar às exigências de um sistema de validação, implementar um recurso recém adicionado ao JavaScript, reduzir os recursos externos usados na página, tudo isso pode ser feito em um projeto com um gerador estático. Você pode aproveitar todo o conhecimento que você tem sobre HTML, CSS, e JS, e alterar o site como quiser.

Pré-construir o site elimina a necessidade de construção de páginas sob demanda. Aliado a isso, distribuir nossas páginas usando uma Content Delivery Network (CDN), que pode ser traduzida para Rede de Distribuição de Conteúdo, ajuda a melhorar ainda mais a performance. Enquanto com sites dinâmicos apenas alguns recursos (como os arquivos JavaScript) são distribuídos por meio dessa rede, com sites estáticos cada documento HTML também pode ser servido pelos servidores de uma rede como esta. Não é atoa que, geralmente, a performance dos sites construídos com um gerador de sites online atingem as maiores pontuações nos testes de performance realizados com ferramentas como o [Pagespeed](https://pagespeed.web.dev/){: target="_blank" rel="noreferrer noopener nofollow"}, [Webpagetest](https://www.webpagetest.org/){: target="_blank" rel="noreferrer noopener nofollow"} ou [GTmetrix](https://gtmetrix.com/){: target="_blank" rel="noreferrer noopener nofollow"}. 

## Aspectos do Jekyll

Cada gerador de sites tem sua particularidade, mas nós podemos identificar alguns componentes comuns entre eles. Nós precisamos discutir esses componentes antes de prosseguir com o curso.

**Linguagem principal**

A linguagem na qual o gerador estático é escrito. Por exemplo, o Jekyll é escrito em Ruby. Apesar de ser escrito em uma linguagem específica, geralmente, não é preciso aprendê-la para desenvolver um site com um gerador em questão. Entretanto, se em algum momento você quiser estender as funcionalidades do gerador, criando um plugin ou colaborando com a atualização do gerador em si, compreender a linguagem em que o sistema foi escrito pode ajudar. 

**[Linguagem de modelo (templating language)](https://pt.wikipedia.org/wiki/Processador_de_modelo)**{: target="_blank" rel="noreferrer noopener nofollow"}

Uma linguagem usada para criar placeholders (marcadores de lugar) em meio a um documento, geralmente, escrito em HTML ou Markdown, que serão substituídos pelo conteúdo apropriado durante o processamento do documento. 

Essa linguagem possibilita a criação de documentos que serão utilizados para construção de várias páginas de forma programática. Por exemplo, no código abaixo o trecho {% raw %} `{{ page.title }}` {% endraw %} será substituído pelo título da página sendo construída, enquanto {% raw %}`{{ page.content }}`{% endraw %} é onde o conteúdo da página será colocado. Essa mesma estrutura poderá ser usada para formar páginas com diferentes títulos e conteúdos. 

{% raw %}

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ page.title }}</title>
</head>
<body>
  {{ page.content }}
</body>
</html>
```

{% endraw %}

As marcações entre {{ e }} são códigos escritos com a linguagem Liquid, que é a usada por padrão em projetos com Jekyll. Esse mesmo documento poderia ser combinado com outros para construir várias páginas com conteúdo diferente. Nós vamos aprender vários comandos durante conforme avançamos essa série.

**[Linguagem de serialização de dados](https://youtu.be/GXQKX7acADc)**{: target="_blank" rel="noreferrer noopener nofollow"}

Para determinar detalhes de configuração sobre o site ou sobre alguma página, muitos geradores utilizam uma linguagem que permite estruturar os dados de forma legível. A linguagem [YAML Ain't  Markup Language (YAML)](https://yaml.org/){: target="_blank" rel="noreferrer noopener nofollow"} é uma das mais utilizadas para esse propósito, e é a linguagem utilizada no Jekyll. 

No trecho abaixo, inserimos código YAML em uma seção no topo de um arquivo escrito em Markdown para fornecer informações específicas para o processamento desses documentos. Nesse caso, nós determinamos qual o layout que será usado junto ao conteúdo do arquivo para gerar uma página, o título da página e o endereço que a página gerada deve ter dentro do site. 

```markdown
--- 
layout: post
title: lorem ipsum
permalink: '/teste/teste.html'
---
# Lorem ipsum

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti 
voluptates natus architecto aliquid provident voluptas enim nisi 
accusantium, veniam perspiciatis consectetur quo corporis 
obcaecati, ipsum, maiores officia suscipit aliquam, incidunt.

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur 
modi, vitae accusamus odit voluptatibus expedita at neque eligendi 
corporis illo consectetur deserunt officia, error maiores? Hic, 
ducimus doloribus quo quibusdam.

Nam autem, cum laborum. Et tempore libero, quam sit suscipit 
consequatur dicta voluptas alias minus, quis debitis fugiat 
vero tempora. Corporis culpa obcaecati facilis voluptas? Optio 
deleniti quisquam quod sapiente.
```

No exemplo acima foi especificado que o layout chamado post será combinado com o arquivo para gerar a página, o título da página será lorem ipsum, E o endereço do arquivo gerado dentro do site será '/teste/teste.html'. Tudo que vem depois dos últimos três traços é considerado o conteúdo da página. Quando combinamos um documento com esse conteúdo e o template criado com Liquid e HTMl anteriormente, obtemos um documento HTML com o seguinte conteúdo:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lorem Ipsum</title> 
</head>
<body>
<h1>Lorem ipsum</h1>

<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti 
voluptates natus architecto aliquid provident voluptas enim nisi 
accusantium, veniam perspiciatis consectetur quo corporis 
obcaecati, ipsum, maiores officia suscipit aliquam, incidunt.</p>

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur 
modi, vitae accusamus odit voluptatibus expedita at neque eligendi 
corporis illo consectetur deserunt officia, error maiores? Hic, 
ducimus doloribus quo quibusdam.</p>

<p>Nam autem, cum laborum. Et tempore libero, quam sit suscipit 
consequatur dicta voluptas alias minus, quis debitis fugiat 
vero tempora. Corporis culpa obcaecati facilis voluptas? Optio 
deleniti quisquam quod sapiente.</p>
</body>
</html>
```

Também vamos discutir essa linguagem quando necessário.

**Plugins**

Um plugin é um programa que estende as funcionalidades de um programa, aprimorando seus recursos. Às vezes precisamos de um capacidade que os desenvolvedores não incluíram no programa por algum motivo, e nesses casos podemos recorrer a plugins feitos pela comunidade construída ao redor do programa. Existem centenas de plugins para o Jekyll. Temos o plugin [jekyll-paginate](https://www.rubydoc.info/gems/jekyll-paginate/1.1.0){: target="_blank" rel="noreferrer noopener nofollow"} para criar um sistema de paginação, o [jekyll-sitemap](https://www.rubydoc.info/gems/jekyll-sitemap/1.4.0){: target="_blank" rel="noreferrer noopener nofollow"} para criar... sitemaps, e uma infinidade de outros plugins. Você pode acessar uma [lista desses plugins](https://rubygems.org/search?query=jekyll-){: target="_blank" rel="noreferrer noopener nofollow"} pesquisando por "jekyll-" no site RubyGems, que armazena programas escritos pela comunidade de programadores em Ruby.

## Alternativas

Mas não mais. Hoje em dia existem [muitos outros geradores](https://jamstack.org/generators/){: target="_blank" rel="noreferrer noopener nofollow"}, escritos com diferentes linguagens e com foco variado. Temos geradores escritos em JavaScript, GO, React JS, PHP, entre outras. Então, se você acha que o Jekyll não se encaixa para você, pode tentar uma das alternativas. 

## Instalação e Primeiro Projeto

A instalação do Jekyll é diferente para cada sistema, e você pode ver tutoriais de como instalar para cada plataforma na [documentação oficial](https://jekyllrb.com/docs/installation/){: target="_blank" rel="noreferrer noopener nofollow"}. Aqui vamos destacar apenas a instalação do Jekyll no Windows. 

1 - Para instalar o Jekyll no Windows nós precisamos obter o Ruby. Entre na [página de downloads](https://rubyinstaller.org/downloads/){: target="_blank" rel="noreferrer noopener nofollow"}, e escolha a versão no painel esquerdo. Atualmente a versão recomendada é Ruby+Devkit 3.1.1-1, mas eu tive problemas com ela. Eu tive que instalar a versão anterior, a Ruby+Devkit 3.0.3-1. para conseguir instalar e usar o Jekyll sem problemas. Você pode instalar a versão mais atual se quiser, e se der algum problema, baixe uma versão anterior como eu fiz.

{% include post_img.html 
png="/assets/imgs_posts/webdev/intro-to-jekyll/downloads-page.png"
webp="/assets/imgs_posts/webdev/intro-to-jekyll/downloads-page.webp"
alt="A página de downloads do Ruby. Painel à esquerda lista as versões disponíveis. Um deles é destacado em negrito."
align="center"
%}

2 - Acione o instalador baixado para iniciar o processo de instalação. Aceite os termos com o botão de seleção, e clique em Next.

{% include post_img.html 
png="/assets/imgs_posts/webdev/intro-to-jekyll/terms.png"
webp="/assets/imgs_posts/webdev/intro-to-jekyll/terms.webp"
alt="Termos de privacidade no instalador."
align="center"
%}

3 - Selecione a pasta onde vai salvar a instalação do Ruby, e clique em Next. 

A opção Add Ruby executables to PATH pode ficar selecionada. Isso vai adicionar o caminho para a pasta onde estão as ferramentas instaladas na variável de ambiente PATH. Assim, será possível usá-las usando um interpretador de linha de comando de dentro de qualquer pasta.

A opção Associate .rb and .rbw files with this Ruby installation configura o seu sistema para usar um aplicativo baixado junto a instalação do Ruby como padrão para executar arquivos com extensão .rb ou .rbw. Desse modo, é possível executar arquivos escritos em Ruby clicando duas vezes sobre ele. Você pode deixar a opção selecionada se quiser. 

{% include post_img.html 
png="/assets/imgs_posts/webdev/intro-to-jekyll/choose-folder.png"
webp="/assets/imgs_posts/webdev/intro-to-jekyll/choose-folder.webp"
alt="Opção para escolher o destino para os arquivos que serão instalados."
align="center"
%}

4 - Na janela "Select Components" deixe como está, e clique em Next.

A opção Ruby RI and HTML Documentation instala a ferramenta Ruby Interactive, que serve para buscar a documentação do Ruby offline. Por exemplo, ao rodar o comando 'ri Array' no CMD, será exibido a documentação dessa classe. Também não vamos precisar disso, mas pode deixar selecionado sem problemas.

A opção MSYS2 development toolchain instala o Minimal System 2 (MSYS2), um conjunto de ferramentas e bibliotecas que compõem um ambiente para construir, instalar e executar programas nativos do Windows. Esse conjunto será necessário para poder executar alguns gems que precisam ser compilados. Gems são programas escritos em Ruby e disponibilizados para que outros desenvolvedores possam utilizá-los na construção de suas próprias aplicações. É o equivalente aos pacotes do Node JS.

{% include post_img.html 
png="/assets/imgs_posts/webdev/intro-to-jekyll/select-components.png"
webp="/assets/imgs_posts/webdev/intro-to-jekyll/select-components.webp"
alt="São oferecidos componentes opcionais."
align="center"
%}

5 - Na próxima janela, deixe Run 'ridk install' to set up MSYS2 and development chain. selecionado para instalar gems com extensões nativas. Clique em Finish.

{% include post_img.html 
png="/assets/imgs_posts/webdev/intro-to-jekyll/run-ridk.png"
webp="/assets/imgs_posts/webdev/intro-to-jekyll/run-ridk.webp"
alt="É informado o que foi instalado; uma opção para executar o comando 'ridk install' automaticamente."
align="center"
%}

6 - O comando será executado em um interpretador de linha de comando e algumas opções vão aparecer na tela. Apenas aperte Enter para continuar a configuração com as opções padrão. Isso vai instalar o básico do sistema MSYS2, procurar por atualizações, e instalar os componentes do MSYS2.

{% include post_img.html 
png="/assets/imgs_posts/webdev/intro-to-jekyll/msys2-config.png"
webp="/assets/imgs_posts/webdev/intro-to-jekyll/msys2-config.webp"
alt="É informado o que foi instalado; uma opção para executar o comando 'ridk install' automaticamente."
align="center"
%}

A instalação não deve demorar muito. Com tudo pronto, você deve ver a mensagem "install MSYS2 and MinGW development toolchain succeeded." Depois disso, pode fechar o interpretador. 

O instalador do Ruby adiciona um gerenciador de pacotes chamado RubyGems, que é usado para automatizar a instalação, atualização, e a remoção de pacotes, usualmente chamados de gems. Os pacotes são como bibliotecas que contém arquivos escritos em Ruby e alguns dados extras sobre eles. Esses gems são escritos por outros programadores, que disponibilizam online em um repositório para permitir que outros desenvolvedores possam baixar e utilizar o código pronto. Desse modo, os programadores podem aproveitar funcionalidades desenvolvidas por outras pessoas sem ter que reinventar a roda. Você pode encontrar gems para vários propósitos em [rubygems.org](https://rubygems.org/){: target="_blank" rel="noreferrer noopener nofollow"}. O Jekyll assim como seus plug-ins são gems. 

Para o nosso primeiro projeto nós vamos usar precisar de dois gems, o jekyll e o bundler. A fim de obter esses pacotes, nós vamos usar o comando `gem install jekyll bundler`. Nós explicaremos para que serve o bundler futuramente. Por enquanto, apenas garanta que ambos estão instalados no seu sistema.

Com as funcionalidades desses pacotes agora disponíveis no nosso computador, nós podemos começar o projeto. Antes de tudo, crie uma pasta para guardar seus projetos, apenas para manter tudo organizado. Depois, siga os passos abaixo:

1 - Abra um interpretador de linha de comando qualquer. Pode ser o Prompt de Comando mesmo. E navegue para  a pasta onde quer colocar seu projeto. 

2 - Use o comando `jekyll new meuprojeto`, em que "meuprojeto" será o nome da pasta onde toda a estrutura de pastas e arquivos do site serão armazenados. 

3 - Nesse ponto você já possui um site. Para vê-lo em funcionamento navegue para a pasta do seu projeto, e então execute o comando `bundle exec jekyll server`.

A esse ponto você já possui um site. Nesse caso, o comando vai criar uma nova pasta chamada meuprojeto com os arquivos iniciais do tema [minima](https://rubygems.org/gems/minima/versions/2.5.1){: target="_blank" rel="noreferrer noopener nofollow"}. Um tema é basicamente um site pronto que podemos preencher com nosso conteúdo e, se necessário, alterar para atender às nossas necessidades. Usar um tema é uma boa maneira de começar um projeto. Aliás, raramente começar o projeto do zero será uma boa ideia, pois essa atividade consome muito tempo, e pode ser bem complexa dependendo do projeto; usar um tema já nos deixa na metade do caminho para obter o produto final. O minima é o tema padrão usado para o site criado com o comando `jekyll new <nome do projeto>`, mas existem muitos outros que podemos usar, e veremos alguns deles futuramente.

Para ver o site em funcionamento, navegue para a pasta do projeto. Você verá uma estrutura de pastas e arquivos como a seguinte:

```
.
├── .jekyll-cache
├── _posts
│   └── 2022-02-16-welcome-to-jekyll.markdown
├── .gitignore
├── _config.yml
├── 404.html
├── about.markdown
├── Gemfile
├── Gemfile.lock
└── index.markdown
```

Dentro da pasta, nós vamos precisar instalar outro gem, o webrick. O Jekyll precisa do webrick para poder criar o servidor local para servir o site localmente. Então, rode o comando `bundle add webrick`. Isso vai adicionar o webrick no projeto atual, que é diferente do que o comando `gem install webrick`, que instala o `gem` globalmente, ou seja, ele fica disponível para todo os projetos do sistema. Por fim, execute o código `bundle exec jekyll serve`. 

{% include post_img.html 
png="/assets/imgs_posts/webdev/intro-to-jekyll/run-minima.png"
webp="/assets/imgs_posts/webdev/intro-to-jekyll/run-minima.webp"
alt="É informado o que foi instalado; uma opção para executar o comando 'ridk install' automaticamente."
align="center"
%}

Isso vai acionar a criação do site e vai servi-lo no endereço http://localhost:4000/ em um navegador. Abra um navegador, como o Google Chrome, digite http://localhost:4000/ na barra de endereço e aperte enter para ver o site.

{% include post_img.html 
png="/assets/imgs_posts/webdev/intro-to-jekyll/minima.png"
webp="/assets/imgs_posts/webdev/intro-to-jekyll/minima.webp"
alt="É informado o que foi instalado; uma opção para executar o comando 'ridk install' automaticamente."
align="center"
%}

Nós podemos editar alguns arquivos para mudar o título do site que aparece na aba do navegador e no topo da página, e modificar o único post do blog. 

O título da página foi determinado usando o arquivo _config.yml. Esse arquivo tem por objetivo guardar informações gerais sobre o site como um todo. Ele é escrito em YAML, dai a extensão .yml. Abra esse arquivo com um editor de texto, como o Bloco de notas, Notepad++, ou Sublime Text 3, e modifique o trecho `title: Your awesome title` para `title: Meu Projeto`. 

Para que a mudança tenha efeito, é preciso reiniciar o servidor, isto é, nós devemos para a execução do comando `bundle exec jekyll serve` e executá-lo outra vez. Para fazer isso, volte para o terminal e aperte CTRL + C. Pode aparecer a mensagem Deseja finalizar o arquivo em lotes (S/N)?, aperte S e pressione a tecla Enter para confirmar.

{% include post_img.html 
png="/assets/imgs_posts/webdev/intro-to-jekyll/stop-serve.png"
webp="/assets/imgs_posts/webdev/intro-to-jekyll/stop-serve.webp"
alt="É informado o que foi instalado; uma opção para executar o comando 'ridk install' automaticamente."
align="center"
%}

Por fim, execute novamente `bundle exec jekyll serve` para iniciar o servidor novamente. Volte para o navegador e atualize a página para ver o que acontece. O título no topo da página e na aba deve ter mudado.

{% include post_img.html 
png="/assets/imgs_posts/webdev/intro-to-jekyll/modified-minima.png"
webp="/assets/imgs_posts/webdev/intro-to-jekyll/modified-minima.webp"
alt="É informado o que foi instalado; uma opção para executar o comando 'ridk install' automaticamente."
align="center"
%}

Perceba que o site já tem um post chamado Welcome to Jekyll!. Vamos modificar esse post mudando o arquivo 2022-02-19-welcome-to-jekyll.markdown, localizado na pasta _posts. Abra o arquivo como o editor de texto de sua escolha.

Para mudar o título, altere a linha de código `title:  "Welcome to Jekyll!"` para `title:  "Meu Primeiro Post"`. Você também pode alterar o conteúdo, basta apagar tudo que estiver depois da segunda sequência de traços (---) e colocar outro conteúdo no lugar. Eu modifiquei o arquivo da seguinte maneira:

```markdown
---
layout: post
title:  "Meu Primeiro Post"
date:   2022-02-19 14:20:31 -0300
categories: jekyll update
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
sed do eiusmodtempor incididunt ut labore et dolore magna a
liqua. Ut enim ad minim veniam,quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodoconsequat. 

Duis aute irure dolor in reprehenderit in voluptate velit 
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
ccaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.
```

Dessa vez, para ver o resultado não precisamos reiniciar o servidor. Basta atualizar a página no navegador.

{% include post_img.html 
png="/assets/imgs_posts/webdev/intro-to-jekyll/modified-post-minima.png"
webp="/assets/imgs_posts/webdev/intro-to-jekyll/modified-post-minima.webp"
alt="É informado o que foi instalado; uma opção para executar o comando 'ridk install' automaticamente."
align="center"
%}

- - -

Nessa primeira parte a gente explorou o que é o Jekyll conceitualmente, assim nós podemos ter uma visão geral de como ele funciona, o que facilita nossa compreensão quando formos nos aprofundar no assunto. Também tivemos um primeiro contato prático com a ferramenta, e pudemos fazer alumas modificações básicas em um tema. Não é esperado que você entenda exatamente o que fez, mas apenas para te mostrar do que o Jekyll é capaz. Nos próximos posts nós vamos entender melhor as tecnologias envolvidas no processo como o Markdown, Liquid e YAML, vamos compreender a estrutura de arquivos e pastas que geralmente compõem um projeto, e muito mais!

Então é isso, espero que tenha gostado, e até a próxima!