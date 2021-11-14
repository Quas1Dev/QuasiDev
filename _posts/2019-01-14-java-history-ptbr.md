---
layout: article
title: "A História do Java"
permalink: "/java/:title"
description: "A história da linguagem Java, desde a sua criação, até sua situação atual no mercado. A origem de uma das principais linguagens de programação."
categories: java
tags: java
date: 2019-01-14 22:00:00
lastUpdated: 2021-11-04 12:36:00
author: "Fernando"
order: 1
sources:
  - title: HAPPY 3rd BIRTHDAY! - Sun Microsystem
    url: https://web.archive.org/web/20090126223342/http://java.sun.com:80/features/1998/05/birthday.html

  - title: A brief history of the Green Project
    url: https://web.archive.org/web/20070127143602/http://today.java.net:80/jag/old/green/

  - title: The inside story - Sun World Online
    url: https://web.archive.org/web/19990504080050/http://sunsite.uakom.sk:80/sunworldonline/swol-07-1995/swol-07-java.html

  - title: Eric Schmidt - Sun Microsystems - 1995 - Java Programming Language
    url: https://archive.org/details/Schmidt1995

  - title: Duke, the Java Mascot - Oracle
    url: https://www.oracle.com/java/duke.html

  - title: An Interview with James Gosling "Why It Named Java"
    url: https://youtu.be/uUKDTai2zOE?list=FLDc_u6uxCafikXhUhy-KByQ

  - title: So why did they decide to call it Java? - JavaWorld
    url: https://www.javaworld.com/article/2077265/core-java/so-why-did-they-decide-to-call-it-java-.html

  - title: Oracle Buys Sun - Oracle press release
    url: https://www.oracle.com/corporate/pressrelease/oracle-buys-sun-042009.html

  - title: Oracle's takeover of Sun Microsystems comes as surprise to software industry - The Guardian
    url: https://www.theguardian.com/business/2009/apr/20/sun-microsystems-oracle-takeover

  - title: Oracle buys Sun, becomes hardware company - CNET
    url: https://www.cnet.com/news/oracle-buys-sun-becomes-hardware-company/
---

<p>
  Vamos conhecer a história de uma das linguagens de programação mais utilizadas do mundo para o desenvolvimento de aplicativos para celulares, softwares para computador, sistema para chips, entre outros. Conheça a história do Java.
</p>

<h2 class="title title-lv-2">O Green Team</h2>
<p>
  Tudo começa com criação do projeto “green” em 5 de dezembro de 1990 por Patrick Naughton, Mike Sheridan e James Gosling. A ideia inicial não era a criação de uma nova linguagem de programação
</p>

<p>
  O grupo de engenheiros da Sun Microsystems, nomeado como Green Team (brincadeira com o time de basquete da época), tinha a missão de, nada mais nada menos, antecipar a próxima onda na área da tecnologia. Juntos chegaram à conclusão de que havia uma tendência em termos redes interligando dispositivos heterogêneos que poderiam conversar entre si e de forma interativa, uma convergência entre dispositivos controlados digitalmente e computadores.
</p>

<h2 class="title title-lv-2">A linguagem Oak</h2>
<p>
  Para conseguir criar um sistema que permitisse essa comunicação entre dispositivos diferentes, o Green Team teve que desenvolver uma linguagem de programação nova, já que o c++ não seria o suficiente para isso.
</p>

<p>
 O projeto para criação dessa nova linguagem se iniciou em 1 de fevereiro de 1991, e ficou a cargo de James Gosling sua idealização. Essa linguagem foi, inicialmente, batizada de Oak (carvalho), ela ganhou esse nome devido à um carvalho que ficava em frente a janela do escritório de Gosling, a qual ele avistou enquanto criava o diretório para nova linguagem.
</p>

<p>Com a nova linguagem criada, agora era o momento de utiliza-la para seu propósito> a criação de um sistema que permitisse a comunicação entre diferentes dispositivos.</p>

<h2 class="title title-lv-2"> Star Seven</h2>

{% include post_img.html baseimg="../assets/imgs_posts/java_history/1-star7_small.jpg" webp="../assets/imgs_posts/java_history/1-star7_small.webp" alt="A versão demo do Star Seven." align="left" caption="A versão demo do Star Seven criado pelo Green Team." %}

<p>
  Em 8 de abril de 1991 eles se mudaram para um escritório anónimo localizado em Menlo Park na California, para dar início ao desenvolvimento do novo sistema que seria desenvolvido com a linguagem criada por Gosling.
</p>

<p>
  Em 4 de setembro de 1992 eles apareceram com uma versão de demonstração do *7 (Star Seven, ou em português Estrela Sete). Ele era um dispositivo interativo, portátil, animado e touchscreen que funcionava como um controlador de outros dispositivos de entretenimento doméstico, como a TV, por exemplo. Esse foi o primeiro projeto feito com a linguagem Oak. Ele servia para demonstrar o que o time via como um possível futuro para a computação.
</p>

<p> 
  O vídeo a seguir mostra a versão de demonstração do Star Seven:
</p>

<div class="article-video">
  <iframe width="704" height="480" src="https://www.youtube.com/embed/1CsTH9S79qI" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="extra-box-01">
  <h1 class="title extra-box-title">De onde o nome *7 vem?</h1>
  <p>
    Enquanto trabalhavam no Star Seven no escritório em Melon Park, era comum que os membros estivessem muito ocupados. Quando o telefone tocasse, poderia ser atendido de qualquer outro aparelho bastando apertar as teclas “*” e “7”. Então, sempre que um membro estava ocupado e não pudesse atender o telefone, ele gritava “Star Seven!” Para que alguém atendesse por ele. Quando a equipe estava para escolher o nome do dispositivo sendo criado, a frase “Star Seven!” estava sendo muito utilizada, então à usaram como o nome do dispositivo.
  </p>
</div>

{% include post_img.html baseimg="../assets/imgs_posts/java_history/1-duke.png" 
png="../assets/imgs_posts/java_history/1-duke.png" 
webp="../assets/imgs_posts/java_history/1-duke.webp" 
alt="O mascote do Java, seu nome é Duke" 
align="left" 
caption="Duke, o mascote do Java." %}

<p>
  Junto ao *7 foi criado, por Joe Palrang, o Duke, que seria a personificação do software, realizando tarefas para o usuário e ajudando durante a navegação no disposivo. O Duke se tornou o mascote do Java, marcando presença nas conferência de desenvolvedores JavaOne.
</p>

<h2 class="title title-lv-2">O RFP da Time-Warner</h2>

<p>
  Em 15 de março de 1993 a equipe, que foi incorporada como FirstPerson Inc., agora procurava uma aplicação para a tecnologia. Foi quando eles ficaram cientes de um RFP (Request For Proposal, pi e, ´português Pedido por Proposta) da Time-Warner que pedia propostas de um sistema operacional para decodificadores (set-top box) e uma tecnologia para vídeos sob demanda.
</p>

<div class="extra-box-02">
  <h1 class="title extra-box-title">Decodificadores e vídeos sob demanda?</h1>
  <dl>
    <dt>Decodificadores:</dt>
    <dd>Um equipamento que converte sinais de uma fonte externa em algo que possa ser exibido na tela.</dd>
    <dt>Videos sob demanda:</dt>
    <dd>Uma solução que permite o usuário pode acessar qualquer conteúdo quando quiser, sem ter que esperar por uma programação. Por exemplo, se quisermos assistir um filme, não precisamos esperar um determinado horário para assisti-lo, podemos acessar quando quisermos.</dd>
  </dl>
</div>

<p>
  A equipe, que agora contava com 70 integrantes, desenvolveu uma nova demo chamada MovieWood para demonstrar o que a tecnologia oferecia. A ideia era que usuários pudessem interagir um pouco mais com os serviços oferecidos pela empresa, mas ela não se interessou. Eles continuaram tentando entrar nesse mercado até o começo de 1994, mas infelizmente para o time da Sun o mercado de TV a cabo estava em seus primórdios e procurando um modelo de negócio viável, então o projeto foi descontinuado. A FirstPerson foi dissolvida, e metade de seus integrantes foram trabalhar em outros projetos, restando apenas alguns que ainda acreditavam na tecnologia.
</p>

<h2 class="title title-lv-2"> Colocando o Java na web</h2>

<p>
  Eles voltaram a procurar alternativas para utilização da tecnologia. Naquela época a internet crescia como uma maneira de compartilhar conteúdos entre diversos dispositivos heterogêneos. A linguagem Oak foi projetada para mover conteúdo em uma rede com diferentes dispositivos, e ainda tinha o adicional de permitir conteúdos mais dinâmicos, algo que o HTML não podia fazer sozinho. Foi então que, na metade de 94, depois de 3 dias pensando muito, a FirstPerson decidiu entrar no mundo da internet, criando o navegador WebRunner<sup>TM</sup> (uma brincadeira com o filme Blade Runner). O navegador serviria como um palco para demonstração das possibilidades que a linguagem Oak oferecia.
</p>

<p>
  Ainda nessa época a equipe teve que renomear a linguagem, já que o nome Oak era utilizada por outra companhia. Foi aí que colocaram o nome de Java na linguagem, um termo utilizado por muitos estadunidenses para se referir ao café forte.
</p>

<p>
   O WebRunner<sup>TM</sup>, que mais tarde seria conhecido como HotJava<sup>TM</sup>, trazia toda a interatividade, dinamicidade e animação que a linguagem Java permitia para dentro de um navegador.
</p>

<h2 class="title title-lv-2">Lançando o HotJava para o mundo</h2>
<p>
  Depois de uma demonstração bem-sucedida do navegador em uma conferência em 1995, uma versão “1.0a” foi disponibilizada via e-mail para amigos e alguns desenvolvedores testarem.
</p>

<p>
   Em março de 1995 a equipe disponibilizou uma versão alpha, a 1.0a2, do código fonte para que desenvolvedores do mundo todo pudessem baixar gratuitamente. Essa maneira seria a mais rápida para popularizar o navegador e ter a ajuda da comunidade para encontrar possíveis bugs na tecnologia.
</p>

<p>
  Foram milhares de downloads por programadores de todas as partes do mundo. O time da Sun chegava a receber 8 mil e-mails por dia com perguntas técnicas. Com o tempo a largura de banda já não era o suficiente para aguentar a demanda de downloads dos desenvolvedores.
</p>

<p>
  Em 23 de março de 1995 o jornal San Jose Mercury News escreveu uma meteria sobre a as maravilhas que o Java trazia para o novo navegador que seria lançado ao público em breve. A matéria ainda continha o endereço do novo site da Sun (java.sun.com).
</p>

{% include post_img.html baseimg="../assets/imgs_posts/java_history/1-jornal.webp" 
jpg="../assets/imgs_posts/java_history/1-jornal.jpg" 
webp="../assets/imgs_posts/java_history/1-jornal.webp" 
alt="O mascote do Java, seu nome é Duke" 
align="center" 
caption="Capa do jornal San Jose Mercury News de 1995." %}

{% include post_img.html baseimg="../assets/imgs_posts/java_history/1-jornal.webp" 
jpg="../assets/imgs_posts/java_history/1-homepage-sun.jpg" 
webp="../assets/imgs_posts/java_history/1-homepage-sun.webp" 
alt="Primeira página do site da Sun, colocado no ar em 1995" 
align="right" 
caption="Primeira página do site da Sun, colocado no ar em 1995." %}

<p>
   A matéria na primeira página do site posicionava a tecnologia Java como a próxima grande onda, e informava a data do evento em que seria anunciado. Com isso o Java já começou a atrair os olhares dos públicos comuns.
</p>

<p>
  Em 23 de maio de 1995 no evento Sun World Conference em que o navegador HotJava e a linguagem Java seriam anunciados aconteceu algo que surpreendeu a todos, foi anunciado, inesperadamente, que o Navigator, navegador da empresa Netscape, agora daria suporte ao Java da Sun Microsystems, isso aumentou o público que consumiria tecnologias Java, já que o Navigator era um dos maiores navegadores da época.
</p>

  <h2 class="title title-lv-2">O Java atualmente</h2>

<p>
  A estratégia de mercado da Sun era ter aplicações Java em diversas áreas, aumentando a preferência do público médio em geral, consequentemente tornando a linguagem comum no mercado. Esse processo de popularização levou a disponibilização do Java como código aberto, o que possibilita que ele seja baixado e utilizado gratuitamente por quem quiser.
</p>

<p>
  Em 2009 a Oracle fechou um acordo pela compra da Sun Microsystems por cerca de 7,4 bilhões de dólares. Apenas em 2010 a Oracle finalizou a compra, e desde então o Java passou ser controlado pela mesma.
</p>

<p>
  Atualmente, o Java está presente em nosso dia-a-dia, em aplicativos para celular, sistemas de home banking, programa de declaração de imposto de renda, leitores de blue-ray, cartões SIM, diversos televisores e muito mais. É indiscutível o sucesso da tecnologia.
</p>

---
No próximo artigo, falaremos um pouco sobre o método de implantação escolhido pela Sun Microsystems para programas feitos em Java.