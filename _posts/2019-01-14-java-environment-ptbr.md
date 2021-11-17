---
layout: article
title: "Configurando o Ambiente Java"
permalink: "/java/:title"
description: "Aprenda a instalar o Java em sua máquina e configurar o ambiente necessário para o desenvolvimento de seus projetos em Java."
categories: "java"
date: 2019-01-14 22:00:03
lastUpdated: 2021-11-04 12:39:00
author: "Fernando"
order: 4
sources: 
  - title: "Java SE 17 Archive Downloads - Oracle"
    url: "https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html"
  - title: "The Java® Language Specification: Java SE 17 Edition"
    url: "https://docs.oracle.com/javase/specs/jls/se17/jls17.pdf"
  - title: "Text Editor - PC Mag"
    url: "https://www.pcmag.com/encyclopedia/term/text-editor"
  - title: "Word Processing - PC Mag"
    url: "https://www.pcmag.com/encyclopedia/term/word-processing"
images: "/assets/imgs_posts/java_environment/"
---

No capítulo anterior nós discutimos o que é um JDK, JRE e uma JVM. Agora nós vamos aprender como trazer esses componentes para o computador. Mais especificamente, nós vamos fazer o download e instalação do JDK, que incorpora os outros dois pacotes.

Nós também desenvolvemos nosso primeiro programa usando a linguagem Java. E ainda aproveitamos para entender um pouco da estrutura do código fonte.
 
Como utilizo o Windows 10 no momento, esse tutorial é focado para esta plataforma. A seguir estão os passos necessários para a configuração do ambiente.

## Download e Instalação do JDK

Nosso primeiro passo será realizar o download do Java Development Kit (JDK), que foi <a href="/java/java-jre-and-jdk-ptbr.html" target="_self">discutido em um outro post</a>.

Nós vamos usar o JDK disponibilizado pela Oracle, mas você pode encontrar outras organizações que oferecem sua própria versão deste pacote. A versão que vamos utilizar é o JDK 17, mas você pode usar a versão mais recente se precisar.

1 – Entre na página de {% include postLink.html text="download do JDK 17" url="https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html" %}, e desce um pouco a barra de rolagem até chegar em uma tabela que exibe uma lista de versões disponíveis para diversos sistemas operacionais. Eu vou baixar o Windows x64 Installer, que funciona no Windows 64-bit. Infelizmente não existe uma versão para sistemas de x86.

{% include post_img.html 
png="4-tut-1-step-1.png"
webp="4-tut-1-step-1.webp"
alt="Tabela de versões do JDK por Sistema Operacional disponibilizadas pela Oracle."
align="center"
%}

2 - Assim que terminar o download clique no arquivo executável para abrir o guia de instalação. Geralmente, a configuração é o suficiente, então basta clicar em Next em todas as janelas que aparecer.
 
Para checar se o pacote foi instalado corretamente, abra um terminal e digite o comando ```java --version```. Esse comando exibe informações quanto a versão do JDK. Deve aparecer o texto abaixo na tela:
 
{% highlight console %}
java 17.0.1 2021-10-19 LTS
Java(TM) SE Runtime Environment (build 17.0.1+12-LTS-39)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.1+12-LTS-39, mixed mode, sharing)
{% endhighlight %}

Tudo pronto, agora já podemos começar a programar usando o Java!

## Primeiro programa

Na seção anterior, nós fizemos o download do JDK 17 para obter acesso às ferramentas desse pacote. É importante que você tenha instalado o JDK corretamente, caso contrário, não vai conseguir realizar o passo-a-passo descrito abaixo.
 
Nós não vamos desenvolver um programa sofisticado nesse momento. A ideia desse post é oferecer um primeiro contato com a linguagem, e para isso vamos criar um programa que escreve "Olá, mundo!" na tela. Também nós vamos analisar superficialmente o código usado no programa.

### Mão na Massa

Primeiro, nós precisamos de um editor de textos para escrever o código Java. Não pode ser um processador de texto, como o Microsoft Word, já que esses programas geralmente armazenam informações sobre a formatação do texto, o que pode confundir o compilador do Java.

O Windows já vem com um editor de texto embutido chamado Bloco de Notas, então é ele que vamos usar.

1 - Clique no botão iniciar e digite “bloco de notas” e clique sobre o programa Bloco de Notas.

{% include post_img.html 
png="4-tut-3-step-1.png"
webp="4-tut-3-step-1.webp"
alt=""
align="center"
%}

2 - Em seguida escreva o código que aparece abaixo:
{% highlight java %}
public class PrimeiroPrograma{
  public static void main (String []args){
    System.out.println("Olá, Mundo!");
  }
}
{% endhighlight %}


3 – Salve o arquivo como primeiroprograma.java no seu computador. Este é o arquivo com o código fonte do nosso programa. É bom criar uma pasta para colocar este arquivo. Eu vou salvar o meu na pasta Programas criada na área de trabalho.

{% include post_img.html 
png="4-tut-3-step-3.png"
webp="4-tut-3-step-3.webp"
alt="Arquivo sendo salvo na pasta"
align="center"
%}

4 – Agora vamos compilar o nosso programa, o transformando em bytecode. Para isso vamos abrir o CMD, e navegar até a pasta em que nosso código fonte está. No meu caso o programa está na pasta Programas dentro do desktop (área de trabalho). Caso não saiba como navegar no computador usando o CMD leia esse artigo sobre Como abrir e navegar entre pastas com o Prompt de Comandos do Windows 10.

{% include post_img.html 
png="4-tut-3-step-4.png"
webp="4-tut-3-step-3.webp"
alt="Caminho até a pasta onde se localiza o código fonte."
align="center"
%}

5 – Agora vamos chamar o compilador do Java (javac) para compilar nosso programa. Para isso escrevemos ```javac primeiroprograma.java```, e então pressionamos enter.

{% include post_img.html 
png="4-tut-3-step-5.png"
alt="Compilação do código fonte."
align="center"
%}

Caso o comando não funcione check se você instalou o JDK, e se o terminal está aberto na pasta onde o arquivo .java foi salvo. 

Se o comando executou normalmente, um arquivo contendo o bytecode do nosso programa deve ter sido criado dentro da mesma pasta onde o código fonte foi colocado.

{% include post_img.html 
png="4-tut-3-step-5.1.png"
webp="4-tut-3-step-3.webp"
alt="Pasta 'Programas' com o código fonte e bytecode do nosso programa."
align="center"
%}

6 – Por último, precisamos chamar uma JVM para traduzir o bytecode para o computador. Para isso vamos utilizar o comando ```java primeiroprograma```.

{% include post_img.html 
png="4-tut-3-step-6.png"
alt="Programa executado."
align="center"
%}

Como podemos ver, foi escrito “Olá, Mundo!” na tela e logo depois o programa foi encerrado. Isso é exatamente o propósito do nosso programa. Caso não tenha funcionado para você, refaça os passos anteriores.

Para alterar algo dentro do programa, é preciso fazer as mudanças dentro do código fonte e então compilar novamente. Depois é necessário chamar uma Máquina Virtual do Java para executar o programa novamente.

### Linha por Linha do Programa

Na seção anterior nós criamos um programa demasiado curto, mas que apresenta algumas características e elementos fundamentais na sua estrutura, os quais são muito comuns em todos os programas que vamos desenvolver nos próximos capítulos. Portanto, convém fazer uma análise, mesmo que superficial, das partes mais importantes para o andamento das atividades.

Para não ter que retornar ao código da seção anterior, aqui está o código fonte que vamos analisar:
{% highlight java %}
public class PrimeiroPrograma{
  public static void main (String []args){
    System.out.println("Olá, Mundo!");
  }
}
{% endhighlight %}

O programa começa com a seguinte linha:

{% highlight java %}
public class PrimeiroPrograma {
{% endhighlight %}

O comando ```class``` está sendo usado para criar uma classe chamada PrimeiroPrograma. Nos próximos capítulos você vai ver que a classe é como um projeto para construção de alguma coisa. A classe define características e funções que objetos criados com base nela devem ter.
 
O nome do arquivo deve sempre ser igual ao nome da classe que ele contém. Por isso, salvamos o arquivo como PrimeiroPrograma.java. Caso esteja usando um ambiente de desenvolvimento integrado (como o NetBeans que veremos mais para frente), você não precisa se preocupar quanto ao nome do arquivo .java. Isso porque as IDEs geralmente gerenciam o nome do arquivo por você.
 
O corpo da classe começa com { abre chaves e termina com }. Os elementos entre chaves são chamados de membros da classe. O único membro dessa classe é o método chamado main, cuja definição aparece na linha seguinte.

{% highlight java %}
public static void main(String[] args) { 
{% endhighlight %}

Essa linha inicia o método chamado main. Todo o código que de fato implementa as funcionalidades do programa vai estar dentro de um método. O método ```main```, em particular, é o método principal do programa. Isso porque a execução de um programa começa invocando o método ```main``` desta linha. O significado de cada um desses termos não pode ser apresentado agora, já que requer uma compreensão mais aprofundada das características do Java, Vamos explicando aos poucos cada um deles ao longo do curso.
 
Por último, nós temos a linha que diz o que o programa deve fazer.
{% highlight java %}
System.out.println("Olá, Mundo!");
{% endhighlight %}

Esse é o comando responsável por informar que queremos a frase Olá, Mundo! na tela e pular uma linha. Note que a frase deve estar entre aspas e dentro dos parênteses.
 
O mais importante aqui é compreender a hierarquia presente no documento, que se repete para em todos os programas: nós temos métodos que fazem parte de uma classe, e que por sua vez faz parte de um pacote. O código que efetivamente implementa o que o programa faz é localizado dentro de um método.

Caso esteja usando o NetBeans, assim que um novo projeto é criado, um arquivo com essa estrutura básica é criado automaticamente. Além disso, esse ambiente integrado oferece várias outras vantagens que ajudam o programador a poupar tempo no desenvolvimento do sistema. Nós vamos ver o que é e como instalar o NetBeans no próximo capítulo.

---
Então é isso. Nós preparamos o ambiente para permitir o desenvolvimento usando o linguagem Java, e criamos nosso primeiro programa.