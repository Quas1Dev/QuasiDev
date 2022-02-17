---
title: "Introdução ao Jekyll - Static Site Generator"
layout: article
permalink: '/webdev/:title'
sources:
  - title: 'The history of CMS – what has happened? - Enonic'
    url: https://enonic.com/blog/the-history-of-cms--what-has-happened 
  - title: 'O que é CMS (Content Management System)? - Canaltech'
    url: 'https://canaltech.com.br/software/o-que-e-cms-content-management-system/'
  - title: 'What is a Static Website?'
    url: 'https://www.sanity.io/what-is-a-static-site'
  - title: 'WordPress.com vs WordPress.org – Which is Better? (Comparison Chart)'
    url: 'https://www.wpbeginner.com/beginners-guide/self-hosted-wordpress-org-vs-free-wordpress-com-infograph/'
  - title: '7 Best WordPress CDN Services in 2022 (Compared) - Wp'
    url: 'https://www.wpbeginner.com/showcase/best-wordpress-cdn-services/#:~:text=Content%20Delivery%20Network%20or%20CDN,geographic%20location%20of%20the%20user.&text=A%20CDN%20is%20not%20a,service%20to%20build%20your%20website.'
  - title: 'The Differences Between Static and Dynamic Websites - Plural Sight'
    url: 'https://www.pluralsight.com/blog/creative-professional/static-dynamic-websites-theres-difference'
  - title: 'What do these RubyInstaller 2.4 components do? - Stack Overflow'
    url: 'https://stackoverflow.com/questions/44229081/what-do-these-rubyinstaller-2-4-components-do'
  - title: 'Up and Running With Ruby Interactive (ri) - Samuel Mullen'
    url: 'https://samuelmullen.com/2012/01/up-and-running-with-ruby-interactive-ri/#:~:text=ri%20stands%20for%20%E2%80%9CRuby%20Interactive,with%20irb%20(Interactive%20RuBy).'
  - title: 'Install Ruby on Windows: Everything You Need to Get Going - Stackify'
    url: 'https://stackify.com/install-ruby-on-windows-everything-you-need-to-get-going/#:~:text=The%20Devkit%20versions%20install%20the,install%20RubyGems%20that%20require%20compilation.&text=If%20you%20want%20to%20work,so%20you%20need%20the%20Devkit.'
---

O que é Jekyll
- Introdução
- Definição formal
- Por que Jekyll? - Done
- Os três componentes de um gerador de sites
- Workflow básico com jekyll
- Outros geradores
- HTML - Predominant

De acordo com estimativas da agência [International Telecommunication Union (ITU)](https://www.itu.int/en/mediacentre/Pages/PR-2021-11-29-FactsFigures.aspx#:~:text=New%20data%20from%20the%20International,in%202021%2C%20from%20an%20estimated){: target="_blank" rel="noreferrer noopener nofollow"}, nós chegamos a cerca de 4.9 milhões de pessoas com acesso a internet em 2021, um aumento em relação aos 4.1 milhões estimados em 2019. Como desenvolvedores web, temos que fazer o possível para tornar a experiência do usuário mais agradável, com sites cada vez mais rápidos e seguros, sem perder em poder de criação, customização e velocidade no desenvolvimento. Para atender à essa demanda crescente, são necessárias novas ferramentas que permitam dificultar as dificuldades que as ferramentas que já utilizamos possuem.

Esse texto faz parte de uma série em que vamos explorar o Jekyll, o primeiro gerador de sites estáticos a atrair o apoio e se tornar popular. Durante essa série nós vamos entender tudo que é necessário para criar projetos usando essa ferramenta. Nessa primeira parte, nós vamos entender o que são geradores de sites, discutir alguns dos benefícios em usar esses tipo de sistema, e vamos discutir algumas características gerais dessas ferramentas e os aspectos particulares do Jekyll. 

## Geradores de Sites Estáticos

Sites são conjuntos de páginas relacionadas localizadas sob um mesmo domínio (e.g., amazon.com). Um conjunto desses é considerado estático quando as páginas que fazem parte dele são enviadas pelo servidor de rede do jeito que está. Ou seja, o servidor não precisa construir a página quando o usuário a solicita, o que pode acontecer quando o usuário usa a barra de endereços do navegador ou clica em um link.

O site onde está lendo isso é um exemplo de site estático. Todos os arquivos .html já estão prontos no servidor, e sempre que você tenta acessar uma de nossas páginas, tudo que o servidor precisa fazer é localizar o documento correspondente em seu sistema de arquivos. 

Isso é diferente de sites dinâmicos. Nesses sites as páginas são geradas quando solicitadas pelo usuário. Por exemplo, toda vez que você entra em alguma página do site [CSS-Tricks](https://pagespeed.web.dev/report?url=https%3A%2F%2Fcss-tricks.com%2F){: target="_blank" rel="noreferrer noopener nofollow"}, a página é criada pelo servidor e então enviada para o seu navegador.

Um <dfn>gerador de sites estáticos</dfn> é um programa usado para criar sites estáticos de forma automatizada. Ao invés de escrever cada documento HTML a mão, nós podemos criar um arquivo um template que será combinado com algum conteúdo para criar cada página do nosso site (mais detalhes na seção [Aspectos de um Gerador de Sites](#aspectos-de-um-gerador-de-sites)).

## Vantagens de um Gerador

No começo da internet, os sites eram construídos e mantidos a mão. Não havia processos automatizados; cada componente tinha que ser escrito linha por lina pelo desenvolvedor ou time de desenvolvedores. Imagina o inferno que era algumas atividades simples como adicionar uma nova página, ou mudar o layout do site. Apenas pessoas com conhecimento avançado de programação eram capazes de colocar conteúdo no ar, enquanto o grande público permanecia apenas consumidor.

Em pouco tempo, viu-se a necessidade de um sistema que pudesse facilitar a criação, implantação e manutenção de websites a longo prazo. Dai começaram a aparecer os primeiros Sistemas de Gerenciamento de Conteúdo (SGC), que são mais conhecidos pelo termo em inglês Content Management Systems (CMS). Primeiro vieram as versões especificas para cada negócio, depois surgiram empresas oferecendo soluções para uso geral. 

Os CMS fornecem funcionalidades que facilitam a vida dos desenvolvedores de sites e criadores que alimentam esse site com conteúdo. Com essas funcionalidades o tempo para colocar um novo blog, e-commerce, ou qualquer outro website online, no ar se tornou uma questão de minutos. Todavia, os CMSs trazem alguns desafios no que diz respeito à segurança, performance, e customização dos projetos. 

Nos sites criados com um sistema desse tipo, as páginas de um site são criadas automaticamente em um servidor a cada pedido do usuário. Para gerar essa página, o CMS precisa carregar os plugins (programas que adicionam novas ferramentas e funcionalidades ao CMS) que foram adicionados ao projeto pelo desenvolvedor. Não é raro um plugin conter vulnerabilidades, e essas vulnerabilidades podem ser aproveitadas por um hacker toda vez que um novo processo de construção é acionado pela visita de um usuário. 

Além de carregar os plugins, o servidor, provavelmente, se conecta à um banco de dados para buscar o conteúdo que será inserido na página. Essa interface entre o servidor e um banco de dados é um alvo frequente para hackers. Não importa se o banco de dados é SQL ou NoSQL.

Para garantir que o ambiente esteja seguro, os desenvolvedores precisam gerenciar e atualizar constantemente todos os plugins usados no projeto, principalmente os mais propensas a serem comprometidos, ao mesmo tempo que toma cuidado para não quebrar todo o site por um efeito colateral das atualizações. E ainda deve se preocupar com a construção do código usado para se comunicar com o banco de dados para mitigar ataques de [injeção de SQL](https://pt.wikipedia.org/wiki/Inje%C3%A7%C3%A3o_de_SQL){: target="_blank" rel="noreferrer noopener nofollow"}.

Acontece que o processo de manter todo o sistema atualizado consome muito tempo. A solução mais fácil encontrada foi a de usar um serviço online que fica responsável pela manutenção do CMS e os plug-ins adicionados (e.g., [Blogger](https://www.blogger.com/about/){: target="_blank" rel="noreferrer noopener nofollow"}, [Wordpress.com](https://wordpress.com/pt-br/){: target="_blank" rel="noreferrer noopener nofollow"}), ao invés de usar o sistema em um servidor local. Nesse caso, a empresa por traz da solução online fica responsável pela manutenção, enquanto seus clientes podem focar em adicionar conteúdo e novas funcionalidades. Mas ter a segurança oferecida por esses serviços muitas vezes significa abrir mão do poder de customização do projeto. Manter um CMS localmente permite alterar detalhes que talvez não seja possível em um serviço como Blogger, por exemplo. Como resultado, algumas otimizações que poderiam ser implementadas no código do site pode não ser possível.

A performance também é um problema. Além de estar limitado em relação a otimização do código usado para construir, estilizar e dinamizar a página, também temos que considerar que criar uma página no momento em que o usuário precisa dela pode impactar bastante o tempo de carregamento da página, principalmente quando o número de plugins aumenta consideravelmente, e como [algumas pesquisas demonstram, tempo é dinheiro](https://wpostats.com/){: target="_blank" rel="noreferrer noopener nofollow"}.

Considerando esses desafios, alguns desenvolvedores começaram a pensar em uma solução que permitisse a customização do produto final, e que fosse possível ter um ambiente seguro sem gastar muito tempo com a manutenção. Geradores de site são frutos desse pensamento. Com essa ferramenta, todas as páginas são construídas somente uma única vez: quando há alguma alteração nos documentos. Ou seja, quando o usuário digita o endereço da página e aperta Enter, ou clica em um link que leva para uma página no seu site, tudo que o servidor precisa fazer é localizar o documento em seu sistema de arquivos e entrega-lo para o usuário. Não há, em grande parte, a necessidade de construção da página sob demanda. O banco de dados existe de forma independente do front-end, e portanto o sistema tem menos pontos que podem ser explorados por usuários mal intencionados e mantém os dados mais seguros.

Ademais, todo o código do site está disponível para fazer qualquer alteração necessária em nível granular. Modificar a marcação do site para se adequar as exigências de um sistema de validação, implementar um recurso recém adicionado ao JavaScript, reduzir os recursos externos usados na página, tudo isso pode ser feito em um projeto com um gerador estático. Você pode aproveitar todo o conhecimento que você tem sobre HTML, CSS, e JS, e alterar o site como quiser.

Pré-construir o site elimina a necessidade de construção de páginas sob demanda. Aliado a isso, distribuir nossas páginas usando uma Content Delivery Network (CDN), que pode ser traduzida para Rede de Distribuição de Conteúdo, ajuda a melhorar ainda mais a performance. Enquanto com sites dinâmicos apenas alguns recursos (como os arquivos JavaSscript) são distribuídos por meio dessa rede, com sites estáticos cada documento HTML também podem ser servidos pelos servidores de uma rede como esta. Não é atoa que, geralmente, a performance dos sites construídos com um gerador de sites online atingem as maiores pontuações nos testes de performance realizados com ferramentas como o [Pagespeed](https://pagespeed.web.dev/){: target="_blank" rel="noreferrer noopener nofollow"}, [Webpagetest](https://www.webpagetest.org/){: target="_blank" rel="noreferrer noopener nofollow"} ou [GTmetrix](https://gtmetrix.com/){: target="_blank" rel="noreferrer noopener nofollow"}. 


## Aspectos de um Gerador de Sites

Cada gerador de sites tem sua particularidade, mas nós podemos identificar alguns componentes comuns entre eles. Nós precisamos discutir esses componentes antes de prosseguir com o curso.

**Linguagem principal**

A linguagem na qual o gerador estático é escrito. Por exemplo, o Jekyll é escrito em Ruby. Apesar de ser escrito em uma linguagem especifica, geralmente, não é preciso aprende-la para desenvolver um site com um gerador em questão. Entretanto, se em algum momento você quiser estender as funcionalidades do gerador, criando um plugin ou colaborando com a atualização do gerador em si, compreender a linguagem em que o sistema foi escrito pode ajudar. 

**Linguagem de modelo (templating language)** 

Uma linguagem usada para criar placeholders (marcadores de lugar) em meio a um documento, geralmente, escrito em HTML ou Markdown, que serão substituídos pelo conteúdo apropriado durante o processamento do documento. 

Essa linguagem possibilita a criação de documentos que serão utilizados para construção de varias páginas de forma programática. Por exemplo, no código abaixo o trecho {% raw %} ```{{ page.title }}``` {% endraw %} será substituído pelo titulo da página sendo construída, enquanto {% raw %}```{{ page.content }}```{% endraw %} é onde o conteúdo da página será colocado. Essa mesma estrutura poderá ser usada para formar páginas com diferentes títulos e conteúdos. Em Jekyll, nós usamos a linguagem Liquid, desenvolvida pela Shopify.

{% raw %}
~~~ html
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
~~~
{% endraw %}

**Plugins**

Plugins são programas que adicionam mais funcionalidades ao gerador de sites estáticos que os desenvolvedores não pensaram antes. Esses programas permitem criar soluções customizadas para solucionar um problema. 

O Jekyll já tem centenas de plugins criados. Temos o plugin [jekyll-paginate](https://www.rubydoc.info/gems/jekyll-paginate/1.1.0){: target="_blank" rel="noreferrer noopener nofollow"} para criar um sistema de paginação, o [jekyll-sitemap](https://www.rubydoc.info/gems/jekyll-sitemap/1.4.0){: target="_blank" rel="noreferrer noopener nofollow"} para criar... sitemaps, e uma infinidade de outros plugins. Você pode acessar uma [lista desses plugins](https://rubygems.org/search?query=jekyll-){: target="_blank" rel="noreferrer noopener nofollow"} pesquisando por "jekyll-" no site RubyGems, que armazena programas escritos pela comunidade de programadores em Ruby.

[**Linguagem de serialização de dados**](https://youtu.be/GXQKX7acADc){: target="_blank" rel="noreferrer noopener nofollow"}

Para determinar detalhes de configuração sobre o site ou sobre alguma página, muitos geradores utilizam uma linguagem que permite estruturar os dados de forma legível. A linguagem [YAML Ain't  Markup Language (YAML)](https://yaml.org/){: target="_blank" rel="noreferrer noopener nofollow"} é uma das mais utilizadas para esse propósito, e é a linguagem utilizada no Jekyll. 

No trecho abaixo, inserimos código YAML em uma seção no topo de um arquivo escrito em Markdown para fornecer informações especificas para o processamento desses documento. Nesse caso, nós determinamos qual o layout que será usado junto ao conteúdo do arquivo para gerar uma página, e o endereço que a página gerada deve ter dentro do site.

~~~ markdown
--- 
layout: post
permalink: '/teste/teste.html'
---
# Lorem ipsum

Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
Deleniti voluptates natus architecto aliquid provident 
voluptas enim nisi accusantium, veniam perspiciatis 
consectetur quo corporis obcaecati, ipsum, maiores officia 
suscipit aliquam, incidunt.

Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Pariatur modi, vitae accusamus odit voluptatibus expedita at 
neque eligendi corporis illo consectetur deserunt officia, 
error maiores? Hic, ducimus doloribus quo quibusdam.

Nam autem, cum laborum. Et tempore libero, quam sit suscipit 
consequatur dicta voluptas alias minus, quis debitis fugiat 
vero tempora. Corporis culpa obcaecati facilis voluptas? 
Optio deleniti quisquam quod sapiente.
~~~

No exemplo acima foi especificado que o layout post será combinado com o arquivo para gerar a página. E o endereço do arquivo gerado dentro do site será '/teste/teste.html'.

## Alternativas

Há algum tempo gerador de sites estáticos era como um sinônimo para Jekyll. Mas não mais. Hoje em dia existem [muitos outros geradores](https://jamstack.org/generators/){: target="_blank" rel="noreferrer noopener nofollow"}, escritos com diferentes linguagens e com foco variado. Temos geradores escritos em JavaScript, GO, React JS, PHP, entre outras. Então, se você acha que o Jekyll não se encaixa para você, pode tentar uma das alternativas. 

Nessa seção nós vamos falar das alternativas mais populares. Mas antes disso vamos discutir um pouco sobre licenças. Todos os geradores de sites tem uma licença que determina regras para a utilização, reprodução e distribuição do mesmo. A licença protege o desenvolvedor do projeto do envolvimento em problemas legais e também sua reputação. As licenças mais comuns entre os geradores são [MIT](https://directory.fsf.org/wiki/License:Expat){: target="_blank" rel="noreferrer noopener nofollow"}MIT, [BSD-3-clause](https://opensource.org/licenses/BSD-3-Clause){: target="_blank" rel="noreferrer noopener nofollow"}, [GPL](https://www.gnu.org/licenses/gpl-3.0.html){: target="_blank" rel="noreferrer noopener nofollow"} e [Apache-2.0](https://www.gnu.org/licenses/gpl-3.0.html){: target="_blank" rel="noreferrer noopener nofollow"}. Funcionalmente, as licenças MIT, BSD e Apache-2.0 permitem que outro desenvolvedor possa distribuir derivações do projeto original sob outras licença, incluindo projetos de código fechado. Por outro lado, a licença GPL exige que derivações do software seja de código aberto.  

Ambas MIT, BSD-3-clause e Apache-2.0 são bem permissivas, mas a Apache-2.0 é mais longa e complicada de ler. Além disso, a licença apache-2.0 adiciona algumas restrições com relação a modificações, que devem ser todas listadas. Para saber mais,

The BSD license has a few interesting provisions making it attractive to developers, such as the nonendorsement clause that, along with the nonadvertisement clause, allows the project to not be slandered while being advertised publicly, preserving the integrity and the online identity of the developers. Interestingly, there have been several derivatives of these licenses themselves that tackle issues of how to deal with code libraries and APIs, but we do not spend much time on those

## Instalação e Primeiro Projeto

A instalação do Jekyll é diferente para cada sistema, e você pode ver tutoriais de como instalar par cad plataforma na [documentação oficial](https://jekyllrb.com/docs/installation/){: target="_blank" rel="noreferrer noopener nofollow"}. Aqui vamos destacar apenas a instalação do Jekyll no Windows. 

1 - Para instalar o Jekyll no Windows nós precisamos obter o Ruby. Entre na [página de downloads](https://rubyinstaller.org/downloads/){: target="_blank" rel="noreferrer noopener nofollow"}página de downloads, e no painel esquerdo selecione a versão marcada em negrito.

{% include post_img.html 
png="/assets/imgs_posts/webdev/jekyll-intro/downlod-page.png"
webp="/assets/imgs_posts/webdev/jekyll-intro/downlod-page.webp"
alt="A páginad downloads do Ruby. Painel à esquerda lista as versões disponíveis. Um deles é destacado em negrito."
align="center"
%}

2 - Acione o instalador baixado para iniciar o processo de instalação. Aceite os termos com o botão de seleção, e clique em next.

{% include post_img.html 
png="/assets/imgs_posts/webdev/jekyll-intro/terms.png"
webp="/assets/imgs_posts/webdev/jekyll-intro/tems.webp"
alt="Termos de privacidade no instalador."
align="center"
%}

3 - Selecione a pasta onde vai salvar a instalação do Ruby, e clique em Next. 

A opção Add Ruby executables to PATH pode ficar selecionada. Isso vai adicionar o caminho para a pasta onde estão as ferramentas instaladas na variável de ambiente PATH. Assim, será possível usa-las usando um interpretador de linha de comando de dentro de qualquer pasta.

A opção Associate .rb and .rbw files with this Ruby installation configura o seu sistema para usar um aplicativo baixado junto a instalação do Ruby como padrão para executar arquivos com extensão .rb ou .rbw. Desse modo, é possível executar arquivos escritos em Ruby clicando duas vezes sobre ele. Você pode deixar selecionado se quiser. 

{% include post_img.html 
png="/assets/imgs_posts/webdev/jekyll-intro/select-folder.png"
webp="/assets/imgs_posts/webdev/jekyll-intro/select-folder.webp"
alt="Opção para escolher o destino para os arquivos que serão instalados."
align="center"
%}

4 - Na janela "Select Components" deixe como está, e clique em Next.

A opção Ruby RI and HTML Documentation instala a ferramenta Ruby Interactive, que serve para buscar a documentação do Ruby offline. Por exemplo, ao rodar o comando 'ri Array' no CMD, será exibido a documentação dessa classe. Também não vamos precisar disso, mas pode deixar selecionado sem problemas.

A opção MSYS2 development toolchain instala o Minimal System 2 (MSYS2), um conjunto de ferramentas e bibliotecas que compõem um ambiente para construir, instalar e executar programas nativos do Windows. Esse conjunto será necessário para poder executar algumas gems que precisam ser compiladas. Gems são programas escritos em Ruby e disponibilizados para que outros desenvolvedores possam utiliza-los na construção de suas próprias aplicações. É o equivalente aos pacotes do Node JS.

{% include post_img.html 
png="/assets/imgs_posts/webdev/jekyll-intro/select-components.png"
webp="/assets/imgs_posts/webdev/jekyll-intro/select-components.webp"
alt="São oferecidos componentes opcionais."
align="center"
%}

5 - Na próxima janela, deixe Run 'ridk install' to set up MSYS2 and development chain. selecionado para instalar gems com extensões nativas. Clique em Finish.

{% include post_img.html 
png="/assets/imgs_posts/webdev/jekyll-intro/run-ridk.png"
webp="/assets/imgs_posts/webdev/jekyll-intro/run-ridk.webp"
alt="É informado o que foi instalado; uma opção para executar o comando 'ridk install' automaticamente."
align="center"
%}

6 - O comando será executado em um interpretador de linha de comando e algumas opções vão aparecer na tela. Apenas aperte Enter para continuar a configuração com as opções padrão. Isso vai instalar o básico do sistema MSYS2, procurar por atualizações, e instalar os componentes do MSYS2.

{% include post_img.html 
png="/assets/imgs_posts/webdev/jekyll-intro/running-ridk.png"
webp="/assets/imgs_posts/webdev/jekyll-intro/running-ridk.webp"
alt="É informado o que foi instalado; uma opção para executar o comando 'ridk install' automaticamente."
align="center"
%}

A instalação não deve demorar muito. Com tudo pronto, você deve ver a mensagem "install MSYS2 and MinGW development toolchain succeeded." Quando estiver tudo pronto apenas feche o interpretador. 

Agora precisamos instalar o Jekyll. Esse programa pode ser instalado com o gerenciador de pacotes RubyGems com o comando ```gem install jekyll```. Nós também vamos precisar instalar um outro programa chamado bundle com o comando ```gem install bundle```. O Jekyll é efetivamente o gerador que vamos usar para gerar o site, o bundle é um programa usado para gerenciar os programas dos quais o projeto é dependente. Com essas ferramenta instalada, nós podemos criar nosso primeiro projeto.

Abra um interpretador de linha de comando qualquer. Pode ser o Prompt de Comando mesmo. Crie uma pasta para guardar seus projeto, e navegue com o interpretador para essa pasta. Use o comando ```jekyll new meuprojeto```, em que "meuprojeto" será o nome da pasta onde toda a estrutura de pastas e arquivos do site serão armazenados. Nesse caso, o comando vai criar uma nova pasta chamada meuprojeto com os arquivos iniciais do tema [minima](https://rubygems.org/gems/minima/versions/2.5.1){: target="_blank" rel="noreferrer noopener nofollow"}. Um tema é basicamente um site pronto que podemos preencher com nosso conteúdo e, se necessário, alterar para atender as nossas necessidades. Usar um tema é uma boa maneira de começar um projeto. Aliás, raramente começar o projeto do zero será uma boa ideia, pois essa atividade consome muito tempo, e pode ser bem complexo dependendo do projeto; usar um tema já deixa na metade do caminho para obter o produto final. O minima é o tema padrão usado para o site criado com o comando ```jekyll new```, mas existem muitos outros que podemos usar e veremos alguns deles ao longo dessa série de postagens.

Uma vez que o projeto é criado, navegue para a pasta do projeto usando os comandos apropriados para o interpretador de comando escolhido. No Prompt de Comando nós usamos o comando ```cd meuprojeto``` para entrar na pasta meuprojeto. Você verá uma estrutura como essa

```
.
├── .jekyll-cache
├── _posts
│   └── 2022-02-16-welcome-to-jekyll.markdown
├── _site
├── .gitignore
├── _config.yml
├── 404.html
├── about.markdown
├── Gemfile
├── Gemfile.lock
└── index.markdown
```

Agora vamos visualizar o site que nós temos até o momento. Para isso, use o comando ```jekyll serve``` ou ```bundle exec jekyll serve```. Esses comandos inicializamo a criação do site, e criam um servidor local para que você consiga acessar o site usando seu navegador. Quando finalizado, você poderá acessar o site usando um navegador de sua escolha usando o endereço localhost:4000. A figura X mostra mostra o que mostra o site aberto no Google Chrome.

[IMAGE]

Os dois comandos servem para o mesmo objetivo, mas ainda assim são diferentes. Usando o RubyGems, nós podemos adicionar pacotes de modo global ou por projeto. Programas adicionados globalmente estão disponíveis para usar em qualquer projeto, já os programas por projeto estão disponíveis para o projeto em que foram instalados.

De dentro da pasta, vamos adicionar o primeiro programa usando ```bundle add webrick```. O webrick é necessário para que a gente consiga visualizar o site construído. Uma vez que o webrick é adicionado ao projeto, rode o comando ```bundle exec jekyll serve```. Depois de executado você pode ver a página criada digitando http:\/\/localhost:4000\/ na barra de endereços de algum navegador.

[IMAGEM]



