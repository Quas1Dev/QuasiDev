---
layout: article
title: "O que é um JRE, JDK e uma JVM?"
description: "Entenda o que são o JDK e o JRE, quais são seus componentes e compreenda a diferença entre os dois."
permalink: "/java/:title"
categories: java
tags: java, jdk, jre, jvm, código fonte
date: 2019-01-14 22:00:02
lastUpdated: 2021-09-27 12:38:00
author: "Fernando"
order: 3
sources:
  - title: "Java® Development Kit Version 17 Tool Specifications - Oracle"
    url: "https://docs.oracle.com/en/java/javase/17/docs/specs/man/index"
  - title: "About the Java Technology - Oracle"
    url: "https://docs.oracle.com/javase/tutorial/getStarted/intro/definition.html"
  - title: "Class library - PC Mag"
    url: "https://www.pcmag.com/encyclopedia/term/class-library"
  - title: "Java Client Roadmap Update - Oracle"
    url: "https://www.oracle.com/technetwork/java/javase/javaclientroadmapupdatev2020may-6548840.pdf"
  - title: "JDK - PC Mag"
    url: "pcmag.com/encyclopedia/term/jdk"
  - title: "Java Virtual Machine - PC Mag"
    url: "https://www.pcmag.com/encyclopedia/term/java-virtual-machine "
  - title: "JVM: Introduction to Java's Architecture - Author"
    url: "https://www.artima.com/insidejvm/ed2/introarch2.html
      Fontes"
  - title: "JRE - Azul"
    url: "https://www.azul.com/downloads/?package=jre"
  - title: "JRE - AdoptOpenJDK"
    url: "https://adoptopenjdk.net/nightly.html?variant=openjdk11&jvmVariant=openj9"
  - title: "Jpackage - InfoQ"
    url: "https://www.infoq.com/br/news/2019/03/jep-343-jpackage/"
  - title: "Guide to jlink - Baeldung"
    url: "https://www.baeldung.com/jlink"
---
 
Para começar a programar em qualquer linguagem, é necessário que o dispositivo usado durante o desenvolvimento, que geralmente é um computador, esteja preparado com programas que permitam o processo de programação. Nesse sentido, o JDK é um componente fundamental na programação em Java, pois este nos permite realizar tarefas como a geração o <span>bytecode</span>, executar o programa e buscar por erros no código fonte.
 
Nas seções abaixo vamos entender o que é o JDK, e também vamos abordar duas outras siglas, JRE e JVM, que são muito recorrentes em textos sobre o Java.
 
## Java Runtime Environment
O <dfn lang="en">Java Runtime Environment</dfn> (JRE) ou Ambiente de Execução do Java pode visto como um pacote que contém uma Java Virtual Machine (JVM) ou Máquina Virtual do Java e as bibliotecas de classes do Java, que são componentes essenciais para execução dos programas construídos com a linguagem Java.
 
A máquina virtual é melhor explicada na seção seguinte. Mas a princípio, ela é uma camada entre o sistema operacional (SO) e o programa, responsável por traduzir as instruções de <span lang="en">bytecode</span> para um código binário adequado para o sistema operacional e gerenciar a memória RAM necessária para a execução do programa.
 
As bibliotecas são coleções de arquivos com código pronto que podemos usar em projetos baseados em Java. Para construir uma casa, geralmente, vamos nos preocupar com tarefas como fazer a fundação, assentar os tijolos no lugar, rebocar, mas as portas e janelas são compradas e então incorporadas no produto final. Nesse mesmo raciocínio, durante a construção do programa, nós podemos focar nosso esforço na implementação de funcionalidades específicas para o software, e usar os componentes da biblioteca para para as outras funcionalidades. No código do programa, apenas especificamos que um determinado arquivo da biblioteca deve ser usado, e este é carregado pela JVM durante a execução do programa.
 
Os componentes do JRE juntos (JVM + Bibliotecas) formam a plataforma de execução, que é necessária para a execução de todos os programas feitos em Java. Por esse motivo, a Oracle, atual dona do Java, costumava disponibilizar esse software para ser instalado no computador dos usuários que queriam rodar programas escritos em Java. A partir do Java 11, no entanto, a empresa encerrou a distribuição desse ambiente, e passou a recomendar que os desenvolvedores utilizem de outros meios para garantir que seus programas possam ser usados. 

Ferramentas como o jlink e o jpackage (incluídas no JDK da Oracle) podem ser usados para incluir uma JRE customizada com o software que será distribuído. Com essa medida, a vantagem de manter uma só versão do programa que pode ser executada em todos os sistemas já não é mais tão aparente. Agora, se quiser que seu programa Java rode no Windows e MacOS, será necessário manter duas versões do mesmo programa. Uma contendo a plataforma de execução para o MacOS. A outra, com a plataforma de execução para o Windows.

Além disso, talvez ainda seja possível encontrar JREs fornecidas por outras empresas e comunidades, como a Azul, e o AdoptOpenJDK. Uma discussão muito interessante no {% include postLink.html url="https://stackoverflow.com/questions/53111921/how-can-i-get-java-11-run-time-environment-working-since-there-is-no-more-jre-11/53112096#53112096" text="Stack Overflow" %} sobre isso. 

## Java Virtual Machine (JVM)
A <dfn lang="en">Java Virtual Machine (JVM)</dfn> ou Máquina Virtual do Java é um programa que simula um computador físico real. Esse computador tem memória, processador, placa de rede, ou qualquer outro recurso que um programa escrito em Java possa precisar eventualmente. Ele cria um ambiente isolado do resto do SO para o programa.
 
Quando iniciada, a JVM vai traduzir o <span lang="en">bytecode</en> dos arquivos relacionados ao programa para uma linguagem binária compatível com a máquina que hospeda a JVM, para que o programa possa ser executado, e também controlar sua execução.
 
Diferente da aplicação que escrevemos em Java, a JVM precisa ser adequada ao sistema operacional hospedeiro. Assim, existe uma JVM específica para cada plataforma (e.g., Windows, Mac OS, Android), porém todas com a capacidade de entender e interpretar o mesmo bytecode. Isso significa que um programa transformado em bytecode no Windows pode ser executado em qualquer outra plataforma, desde que uma JVM específica para o sistema operacional esteja disponível para fazer essa comunicação entre a aplicação e o sistema operacional em questão, tornando a linguagem Java independente da plataforma.
A JVM contém vários componentes. Vamos citar aqui os principais:
 
- Carregador de Classes (Class Loader): Localiza, carrega e inicia o <span lang="en">bytecode</span> do programa, bem como o <span lang="en">bytecode</span>relacionado a uma funcionalidade importada das Bibliotecas Java que são necessários para execução do programa;
- Verificador (<span lang="en">verifier</span>): Verifica se o bytecode está ok, checa se não apresenta códigos que podem comprometer o fluxo do programa ou violar as restrições de acesso;
- Coletor de Lixo (<span lang="en">Garbage Collector</span>): Administra a memória da JVM, fazendo a coleta do que não será mais necessário;
- Motor de execução (<span lang="en">Execution Engine</span>): Parte responsável por traduzir o bytecode para a linguagem de máquina. O mecanismo usado pode variar de acordo com a implementação da JVM:
  - Utilizando apenas um interpretador: O mecanismo de execução apenas interpreta os bytecodes um por vez conforme o programa é executado;
  - Utilizando o Compilador em Tempo Real (<span lang="en">Just in Time Compiler</span> ou <span lang="en">JIT Compiler</span>): Nesse tipo de mecanismo um compilador (JIT Compiler) é utilizado para compilar o <span lang="en">bytecode</span> para código de máquina, e armazenar o código compilado em cache. Isto é feito na primeira vez que o método é chamado, e o código em cache é reutilizado sempre que o método é invocado;
  - Utilizando um otimizador adaptativo: É como uma junção do interpretador com o JIT. Em um primeiro momento o <span lang="en">bytecode</span> é apenas interpretado, isto é, traduzido na medida em que o programa é executado. Porém a JVM fica monitorando o programa em execução a fim de identificar os trechos de códigos mais utilizados. Apenas esses trechos serão compilados para linguagem de máquina usando o compilador JIT, e o resto será interpretado.
 
Como dito na seção anterior, até o Java 11 a Oracle disponibilizava diferentes versões do JRE (que inclui a JVM) para diferentes sistemas. Havia a JRE para o Windows, outra para o MacOS, entre outros. Cada JRE vinha com uma versão da JVM compatível com o sistema em questão. Para que o programa pudesse ser executado, era necessário orientar o usuário para fazer o download e instalação da JRE - caso ele não tivesse com esse programa já instalado na máquina. Nós vamos verificar meios de implantação em um post futuro.
 
## Java Development Kit
Para programar em Java nós precisamos mais do que ser capaz de executar os programas. Nós precisamos de um programa que gere o byte code, por exemplo. As ferramentas necessárias são concentradas em um pacote chamado <dfn>Java Development Kit (JDK)</dfn> ou Kit de Desenvolvimento Java.
 
Além do ambiente de execução (JRE), esse pacote incluí as seguintes ferramentas:

- javac: É o software responsável por transformar o código Java do programa em bytecode;
- Java: Utilizado para executar uma aplicação Java. Toda vez que essa ferramenta é utilizada, uma JVM é criada para o programa sendo executado;
- jdb: O <span lang="en">Java Debugger</span> ou Depurador Java é uma ferramenta para auxiliar a depuração (processo de encontrar e resolver erros) na estrutura sintática do código;
- jar: O <span lang="en">Java Archive</span> ou Arquivador Java é usado para a agregar todos os componentes de uma aplicação Java em um único arquivo comprimido;
- javap: <span lang="en">Java Print</span> ou (em tradução livre) Explorador Java é uma ferramenta com o propósito de descobrir o conteúdo de um arquivo .class (que armazena instruções em bytecode). É possível visualizar atributos privados e públicos, e métodos das classes;
- javadoc: O <span lang="en">Java Documentation</span> ou Documentação Java transforma os comentários entre /** e */ contidos no código fonte em uma documentação organizada que é formatada e exibida em uma página HTML.
- jlink: O <dpsn lang="en">Java link</dpsn> é um software que é usado para gerar um ambiente de execução customizado que contém apenas os módulos requisitados pela aplicação;
- jpackage: O <span lang="en">Java Pacage</span> junta um programa e um ambiente de execução para gerar um programa que possuí tudo que precisa para ser executado. Essa ferramenta gera um produto final compatível com o sistema operacional em que foi executado. Por exemplo, se usar o jpackage no Windows, o programa será executável apenas nesse sistema.
 
Outras ferramentas podem ser encontradas no site da Oracle.
 
Cada um dos programas contidos no kit podem ser utilizados através de um interpretador de linha de comando, também chamado de terminal. Por exemplo, para compilar um programa usando o javac, podemos abrir o Prompt de Comando (CMD) no Windows, digitar ```javac nome-do-programa.java``` e apertar enter. Um arquivo .class como mesmo nome do arquivo .java será criado. No entanto, hoje em dia é comum a utilização de ambientes de desenvolvimento integrado (IDE), que são programas com uma interface gráfica que nos permitem interagir com essas ferramentas usando ícones e botões.

## Resumo
O JRE é um programa que fornece uma plataforma de execução para programas escritos em Java. Nesse são incluídos a JVM, que é uma máquina virtual responsável por traduzir os arquivos relacionados para linguagem de máquina e controlar a execução, e as bibliotecas Java, que são coleções de programas escritos em Java e que podem ser necessários para o programa sendo executado.

O JDK engloba a JRE e outras ferramentas necessárias para o desenvolvimento com a linguagem Java, tais como um compilador, ou o depurador. A Oracle forneceu o JRE separado JDK até o lançamento do Java 11. Agora precisamos recorrer a outras fontes para obter a JRE ou criar nossa própria versão usando a ferramenta jlink.

---
O mais importante para entender aqui é que vamos precisar ter o JDK para programar em Java, independente da escolha entre IDE ou interpretador de linha de comando. Então é o que faremos no próximo post.