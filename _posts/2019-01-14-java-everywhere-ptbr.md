---
layout: article
title: "Java em Todo Lugar"
description: "Uma breve explicação sobre o funcionamento do Java."
permalink: "/java/:title"
categories: java
tags: java, compilador, interpretador, código fonte, bytecode
date: 2019-01-14 22:00:01
lastUpdated: 2021-11-04 12:37:00
author: "Fernando"
order: 2
sources:
    - title: "Sun Microsystems Inc. - Britannica"
      url: "https://www.britannica.com/topic/Sun-Microsystems-Inc"
    - title: "Java - Britannica"
      url: "https://www.britannica.com/technology/Java-computer-programming-language"
    - title: "Programming Language - PC Mag"
      url: "https://www.pcmag.com/encyclopedia/term/programming-language"
    - title: "About the Java Technology – Oracle"
      url: "https://docs.oracle.com/javase/tutorial/getStarted/intro/definition.html"
    - title: "The Challenges and Opportunities of Networks – Artima"
      url: "https://www.artima.com/insidejvm/ed2/introarch.html"
    - title: "The Java® Virtual Machine Specification Java SE 17 Edition - Oracle"
      url: "https://docs.oracle.com/javase/specs/jvms/se17/jvms17.pdf"
---

O <dfn>Java</dfn> é uma linguagem de programação, que por sua vez é um sistema estruturado usado para instruir um computador para realizar alguma tarefa. Ela foi desenvolvida em 1991 por James Gosling enquanto ele trabalhava na Sun Microsystems, que era uma empresa que produzia computadores e programas naquela época.

Sua criação teve o propósito de servir para criação de programas para rodar em diferentes dispositivos eletrônicos. Era possível fazer isso com outras linguagens da época, como o C e C++, mas o programador James Gosling e sua equipe resolveram criar uma nova linguagem que não tivesse alguns elementos indesejados que essas linguagens continham.

Contudo, criar uma linguagem nova não é o que vai garantir que um programa seja independente da plataforma. Para isso, é necessário pensar no processo de implantação do programa.

Nas seções abaixo nós discutimos algumas estratégias de implantação disponíveis, incluindo a escolhida para para implantar programas feitos em Java. Com isso vamos entender por que o que influenciou a adoção do Java.

## Código Fonte 

Antes de qualquer coisa, é necessário entender um conceito importante que vai estar presente em todas as seções seguintes, o código fonte.

O <dfn>código fonte</dfn> é um conjunto de instruções escritas com uma linguagem de programação, como o VB.NET, Python, Go Lang, Java, etc. Essas instruções são comandos que determinam como o programa deve funcionar, e quais funcionalidades estão disponíveis dentro dele.

As instruções para o computador escrever “Olá, Mundo!” na tela usando a linguagem C ficará assim:

{% highlight c linenos %}
#include <stdio.h>
void main() {
    // Exibe Olá, Mundo! na tela.
    printf("Olá, Mundo!");
}
{% endhighlight %}

No Java usamos temos uma estrutura e termos diferentes:

{% highlight java linenos %}
package primeiroprograma;
 
public class PrimeiroPrograma {
    public static void main(String[] args) {
        // Exibe Olá, Mundo! na tela.
        System.out.println("Olá, Mundo!");
    }
}
{% endhighlight %}
 
Mas aqui temos um problema: o computador não entende nada que não esteja em código binário. Dessa forma, para que ele consiga executar o programa, precisamos traduzir esse código fonte para o que chamamos de linguagem de máquina.

Existem softwares que executam essa função de transformar o código fonte em algo legível para o computador. Essas ferramentas podem entrar em cena em diferentes momentos no processo de implantação, e dependendo desse momento podemos ter vantagens e desvantagens.

## Compilando o Código Fonte 
Nessa abordagem, nós usamos um software, que chamamos de compilador, para gerar um programa executável a partir de um arquivo com código fonte antes de distribuí-lo.

O processo é mais ou menos o seguinte:
1 - O código fonte é escrito com a linguagem escolhida; (Esse código fonte será diferente de acordo com a linguagem, e o sistema para o qual a aplicação está sendo desenvolvida)
2 - Uma vez que o arquivo é finalizado, usamos o compilador para reescrever as mesmas instruções, mas dessa vez usando uma linguagem que o computador pode compreender. Pense da seguinte forma: se alguém te entregar uma receita de bolo totalmente em Latim agora, é provável que não consiga seguir as instruções. Contudo, se alguém tiver providenciado uma versão traduzida para sua língua, você pode comprar essa versão e preparar o bolo seguindo o passo-a-passo. Pense no compilador como o tradutor que produziu uma versão da receita na sua língua;
3 - O arquivo executável pode ser distribuído para os usuários que querem usar as funcionalidades codificadas.

A imagem abaixo ajuda na visualização do processo.
{% include post_img.html 
png="/assets/imgs_posts/java_operation/2-compile-flow.png"
webp="/assets/imgs_posts/java_operation/2-compile-flow.webp"
align="center"
alt="Representação do processo de implantação descrito anteriormente."
caption="Processo de implantação de programas escritos com linguagens tipicamente compiladas."
%}
 
Uma vantagem dessa abordagem pode ser o tempo de execução da aplicação. Como o software chega pronto para ser executado no computador do cliente, a máquina dele não precisa realizar nenhum processo para iniciá-lo.
 
Uma desvantagem é que o executável gerado vai funcionar em máquinas apenas com um sistema operacional específico. Sendo assim, um programa gerado com o compilador para o Windows vai funcionar em computadores com Windows.
 
Com algum esforço é possível usar esse processo quando estiver produzindo em qualquer linguagem de programação. Entretanto, há linguagens de programação que, geralmente, são usadas para desenvolver programas que passaram pelo método acima mencionado, tais como C, C++, Ada, Go Lang, entre outras. Esse processo é tão comum quando trabalhamos algumas linguagens de programação que chamamos elas de linguagens compiladas.
 
Mas é importante deixar claro que não é por que chamamos o C , ou qualquer outra linguagem, de linguagem compilada, que qualquer programa desenvolvido com ela deve obrigatoriamente passar pelo mesmo método de implantação.

## Distribuir e Traduzir Durante a Execução
Ao contrário do método anterior, usando essa abordagem o programador só precisa escrever o arquivo(s) com o código fonte, e enviar para os indivíduos interessados no programa. Para executar esse programa, o computador do usuário precisa de um interpretador para traduzir linha por linha conforme necessário.
 
O processo é mais um menos o seguinte:
 
1 - O código fonte será escrito utilizando os comandos da linguagem escolhida;
2 - Uma vez finalizado, o arquivo fonte é enviado para o cliente que deverá ter um programa instalado na máquina dele, que seja capaz de traduzir as instruções do código fonte, uma por uma, em tempo real. Usando a analogia da seção anterior, ao invés de comprar uma versão traduzida do livro de receitas, você pode pedir a ajuda de um amigo que entende Latim para ler a receita enquanto prepara o bolo.
Perceba que em nenhum momento foi gerado um arquivo com código de máquina pronto para ser lido diretamente pelo computador. Ao invés disso, o interpretador lê o código, e manda para o computador a instrução em linguagem de máquina (apenas quando a instrução for requisitada).

{% include post_img.html 
png="/assets/imgs_posts/java_operation/2-interpreting-flow.png"
webp="/assets/imgs_posts/java_operation/2-interpreting-flow.webp"
align="center"
alt="Representação do processo de implantação usando um interpretador descrito anteriormente."
caption="Processo de implantação de programas escritos com linguagens tipicamente interpretadas."
%}                                                                 

As linguagens JavaScript e PHP são exemplos de linguagens tipicamente interpretadas. Assim como no caso das linguagens tipicamente compiladas, essa definição diz respeito ao método mais comum de implantação, mas não significa que é o único possível para programas escritos com essas linguagens.

A flexibilidade encontrada em linguagens tipicamente interpretadas, bem como a independência dos programas em relação ao sistema operacional, são vantagens do uso dessas linguagens do uso desse tipo de linguagem.

Como desvantagem, podemos citar a velocidade de execução dos programas, a qual é reduzida devido ao processamento adicional que deve ocorrer antes de executar uma instrução do código fonte.

## Bytecode e a JVM
Para os programas feitos em Java foi escolhido um caminho ligeiramente diferente dos métodos discutido nas seções anteriores: o código fonte não é convertido diretamente para linguagem de máquina, e tampouco distribuído diretamente para os clientes. Ao invés disso, o código fonte é traduzido para um código intermediário que é armazenado em um arquivo, e esse arquivo com o código intermediário é distribuído para os usuários.

O processo pensado na época foi mais ou menos o seguinte:
1 - O código fonte será escrito utilizando os comandos do Java;
2 - O código fonte será compilado para um código intermediário entre o código fonte e o código de máquina, chamado de bytecode;
3 - O arquivo com o bytecode é distribuído para os clientes;
4 - Para executar o programa o computador do usuário usa uma JVM, que deve estar instalado no computador, ou vir junto com o software a ser executado.

A imagem abaixo ilustra o todo o processo:

{% include post_img.html 
png="/assets/imgs_posts/java_operation/2-half-interpreted.png"
webp="/assets/imgs_posts/java_operation/2-half-interpreted.webp"
align="center"
alt="Ilustração do processo descrito acima."
caption="Típico processo de implantação adotado para programas feitos em Java."
%}

O passo adicional compreendendo a criação do bytecode, traz algumas características que favorecem a utilização desse mecanismo. Por exemplo, esse código é mais compacto que o código fonte; ele não inclui muitos dos elementos do código fonte que são usados apenas para facilitar a leitura do programador. A ausência desses detalhes facilita a tradução do bytecode para a linguagem de máquina, o que acelera o processo de execução.
 
Existem organizações que disponibilizam um pacote com a JVM e bibliotecas Java para diversos sistemas operacionais. Temos pacotes para o Windows, Mac e Linux. Por esse motivo, os programas compilados para bytecode são independentes em relação ao sistema operacional; um mesmo bytecode pode rodar em qualquer sistema que tenha uma JVM.
 
A <span lang="en">Sun Microsystems</span> (empresa onde o Java nasceu) usou o termo WORA (<span lang="en">Write Once Run Anywhere</span> ou Escreva uma vez, rode em qualquer lugar) para fazer propaganda dessa vantagem do Java, que rapidamente entrou no gosto de programadores de todo o mundo. 

Como essa é apenas mais uma maneira de implantar um programa, podemos fazer o mesmo exercício com programas escritos com outras linguagens além do Java. Atualmente existem várias linguagens que são tipicamente traduzidas para bytecode, como Clojure.

---
Isso é tudo por hoje. Espero que tenha compreendido as diversas maneiras de fazer o caminho entre o programa finalizado do ponto de vista da programação e o programa pronto para rodar, em especial o método escolhido para fazer do Java uma linguagem reconhecida por ser multiplataforma.