---
layout: article
title: "NetBeans"
permalink: "/java/:title"
description: "O que é uma IDE e como instalar o NetBeans no Windows 10."
categories: java
tags: java, ide, netbeans, primeiro programa
date: 2019-01-14 22:00:04
lastUpdated: 2021-11-12 01:05:00
sources:
    - title: "Reserved Word - PC Mag"
      url: "https://www.pcmag.com/encyclopedia/term/reserved-word" 
    - title: "IDE - PC Mag"
      url: "https://www.pcmag.com/encyclopedia/term/ide"
    - title: "Managing IDE Windows"
      url: "https://docs.oracle.com/cd/E40938_01/doc.74/e40142/working_nbeans.htm#A1147296"
    - title: "NetBeans - Site Oficial"
      url: "https://NetBeans.apache.org"
---

O desenvolvimento de programas pode ser uma tarefa complicada e demorada, dependendo da complexidade do software. Felizmente podemos contar com uma ferramenta preparada para facilitar e acelerar o processo de desenvolvimento. Nas seções abaixo, nós vamos compreender o que é um IDE e como essa ferramenta é útil na programação. Além disso, vamos instalar o IDE chamado NetBeans, que será usados em posts futuros sobre o Java.

## O que é uma IDE?
Um <dfn>integrated Development Environment (IDE)</dfn> ou Ambiente de Desenvolvimento Integrado é um software que reúne ferramentas necessárias para desenvolver e testar programas sob uma mesma interface gráfica.

Utilizamos diversas ferramentas para escrever, editar e testar nossos códigos. Essas ferramentas geralmente incluem um editor de textos, um compilador ou interpretador, e um ambiente de testes. Sem um IDE nós temos que instalar e gerenciar essas ferramentas separadamente, uma por uma. O ambiente de desenvolvimento integrado é projetado para atuar como um facilitador do processo de desenvolvimento, trazendo todas essas ferramentas em um único ambiente.

Existem diversos IDEs, pagos e gratuitos. A seguir vemos o passo-a-passo para a instalação do NetBeans, um IDE gratuito disponibilizado pela Apache Foundation.

## Instalação do NetBeans
É necessário ter o JDK instalado para seguir as instruções nessa seção. Temos <a href="{% link _posts/2019-01-14-java-environment-ptbr.md %}" target="_self">um texto mostrando como fazer essa instalação</a>.

A maneira mais fácil para configurar o NetBeans no computador é pela utilização um seu instalador. Então vamos baixa esse software.

1 - Acesse o {% include postLink.html url="https://NetBeans.apache.org" text="site do NetBeans Apache"%} e clique em Download no menu de navegação;

2 - Clique no botão Download correspondente a versão que deseja baixar. Nessa janela aparecem apenas as versões mais recentes do programa, que ainda recebem suporte da comunidade. (ainda é possível obter versões anteriores clicando no botão Find out More, localizado abaixo da seção Older Releases);
{% include post_img.html
png="/assets/imgs_posts/java_ide/5-tut-1-step-2.png"
webp="/assets/imgs_posts/java_ide/5-tut-1-step-2.webp"
alt="Download button for NetBeans 12.5."
align="center"
%}

3 - Selecione o link para baixar o instalador compatível com seu sistema operacional. No meu caso eu vou baixar o instalador para o Windows;
{% include post_img.html
png="/assets/imgs_posts/java_ide/5-tut-1-step-3.png"
webp="/assets/imgs_posts/java_ide/5-tut-1-step-3.webp"
alt="Links para baixar os binários ou instalador adequado para Windows, Mac, e sistemas baseados em Linux."
align="center"
%}

4 - Ao clicar no botão, somos redirecionados para uma página com links que podemos utilizar para baixar o NetBeans do servidor que estiver mais próximo. Vamos clicar no primeiro link sugerido pela Apache Software Foundation. Assim que clicar nesse botão, nele o download deverá começar;
{% include post_img.html
png="/assets/imgs_posts/java_ide/5-tut-1-step-4.png"
webp="/assets/imgs_posts/java_ide/5-tut-1-step-4.webp"
alt="Links para escolher de qual servidor baixar o instalador ou os arquivos binários."
align="center"
%}


Será baixado um arquivo .com extensão .exe. Deve-se clicar duas vezes sob esse arquivo para abrir o guia de instalação. As janelas, e as informações e os botões nelas podem variar um pouco dependendo de qual versão foi baixada. Com a versão 12.5 nós seguimos os seguintes passos:

1 - Na janela de boas vindas é exibida uma lista do que será instalado junto com o NetBeans. Nesse momento, vamos deixar configurado do jeito que está, e clicar em Next; (O botão Customize abre uma janela onde podemos incluir ou excluir itens da lista, e ver uma descrição de cada um deles)
{% include post_img.html
png="/assets/imgs_posts/java_ide/5-tut-2-step-1.png"
webp="/assets/imgs_posts/java_ide/5-tut-2-step-1.webp"
alt="Tela de boas vindas do instalador do NetBeans 12.5, no Windows. Uma lista dos itens que serão instalados junto com o NetBeans é exibido."
align="center"
%}

2 - Após ler o acordo de licença, precisamos marcar a caixa de seleção para sinalizar o aceite dos termos. Depois clicamos em Next para prosseguir;
{% include post_img.html
png="/assets/imgs_posts/java_ide/5-tut-2-step-2.png"
webp="/assets/imgs_posts/java_ide/5-tut-2-step-2.webp"
alt="Termos de licença do NetBeans."
align="center"
%}

3 - Selecione o local onde o NetBeans deve ser instalado, e também o local onde o JDK está instalado, ou deixe os valores padrão que geralmente já estão perfeitos. Depois clique em Next;
{% include post_img.html
png="/assets/imgs_posts/java_ide/5-tut-2-step-3.png"
webp="/assets/imgs_posts/java_ide/5-tut-2-step-3.webp"
alt="Campos para indicar a pasta onde os arquivos relacionados ao NetBeans devem ficar, e em qual pasta o JDK está instalado."
align="center"
%}

4 - Deixe a caixa de seleção para opção Check for Updates selecionada caso queira que o NetBeans instale atualizações para seus plugins automaticamente, e então clique em Install para iniciar a instalação de fato;
{% include post_img.html
png="/assets/imgs_posts/java_ide/5-tut-2-step-4.png"
webp="/assets/imgs_posts/java_ide/5-tut-2-step-4.webp"
alt="O instalador nos oferece a opção de atualizar os plugins automaticamente."
align="center"
%}

5 - Clique em Finish na última janela aberta pelo guia de instalação.
{% include post_img.html
png="/assets/imgs_posts/java_ide/5-tut-2-step-5.png"
webp="/assets/imgs_posts/java_ide/5-tut-2-step-5.webp"
alt="Informação sobre a instalação finalizada."
align="center"
%}

## Conhecendo o Terreno
A interface gráfica do NetBeans apresenta, por padrão, componentes que podem ser identificados da seguinte forma:
- Menu principal - Localizado no topo da página, contém todas as ferramentas disponíveis para trabalhar com a IDE, tais como criar um novo projeto, executar o programa, entre outras;
{% include post_img.html 
png="/assets/imgs_posts/java_ide/netbeans_main_menu.png"
webp="/assets/imgs_posts/java_ide/netbeans_main_menu.webp"
alt="Barra de ferramentas do NetBeans 12.5."
align="center"
%}
- Barra de ferramentas - Apresenta algumas opções do menu principal a fim de facilitar o acesso a algumas ferramentas. Clicando com o botão direito sob essa barra é exibida uma lista de opções que podemos remover ou incluir. Desmarque as que não devem estar nessa barra, e marque as opções que convém estarem nessa barra;
{% include post_img.html 
png="/assets/imgs_posts/java_ide/netbeans_tool_bar.png"
webp="/assets/imgs_posts/java_ide/netbeans_tool_bar.webp"
alt="Barra de ferramentas do NetBeans 12.5."
align="center"
%}
- Painéis - São grupos com uma ou mais janelas dispostas como abas. As janelas são áreas criadas para funcionalidades que envolvem a exibição de informações para o usuário. Assim que é instalado, o NetBeans tem dois painéis. Uma delas possui três janelas abertas, sendo elas: Projects, Files e Services. A outra possui apenas a janela Navigator. 
  - Projects - Exibe os componentes lógicos de cada projeto na pasta de projetos do NetBeans. Os componentes são dispostos de forma hierarquizada em uma lista, na qual cada item é “filho” de um item “pai”, exceto o item que representa o projeto em si. Utilizamos o sinal de mais para exibir ou esconder os itens filhos de um item pai. Os elementos nesta janela não refletem exatamente como os arquivos e pastas relacionados ao projeto estão salvos no computador. Essa janela apenas apresenta como o projeto é visto do ponto de vista de desenvolvimento no NetBeans;
  - File - Essa janela mostra as pastas e arquivos que compõem o projeto. Ao contrário do que exibido na janela Projects, a janela Files mostra exatamente como as pastas e arquivos do projeto estão organizados no sistema. A mesma estrutura hierárquica mostrada aqui pode ser visualizada no Explorador de Arquivos do Windows. Para isso, abrimos o Explorador de Arquivos. Para isso, pressionamos a Tecla do Windows + E para abrir o Explorador de Arquivos, e então navegamos para Documentos > NetBeansProjects. Nessa pasta, estão contidos todos os projetos criados através do NetBeans;
  - Services - A janela Services contém uma estrutura lógica de recursos que estão disponíveis no NetBeans para ser usados durante o desenvolvimento de um projeto;
  - Navegação - Está posicionado no painel do lado inferior esquerdo da interface gráfica do NetBeans. Útil para navegar entre elementos dentro de arquivo contendo uma classe;
  {% include post_img.html 
png="/assets/imgs_posts/java_ide/netbeans_panel_one_and_two.png"
webp="/assets/imgs_posts/java_ide/netbeans_panel_one_and_two.webp"
alt="Painéis do NetBeans 12.5."
align="center"
%}
- Área de edição - Inicialmente, ocupa a maior porção da tela, se estendendo do centro até a extremidade direita desta. É nessa área do NetBeans que a maior parte do trabalho será feito. Todos os arquivos sendo editados aparecem nesse local. Na imagem abaixo, podemos ver que existem duas abas, uma chamada Start Page e outra chamada primeiroprograma.java. A start page é uma tela de apresentação do NetBeans. A segunda é efetivamente um arquivo de um projeto que vamos iniciar na próxima seção.
{% include post_img.html 
png="/assets/imgs_posts/java_ide/netbeans_edition_area.png"
webp="/assets/imgs_posts/java_ide/netbeans_edition_area.webp"
alt="Área de edição do NetBeans."
align="center"
%}

É possível ou adicionar novas janelas na interface usando as opções no submenu Window, localizado no menu principal. É possível, por exemplo, incluir uma janela que exibe as propriedades de um arquivo (e.g., Nome, extensão, Tamanho, etc.) indo em Window > IDE Tools > Properties. As propriedades aparecem do lado direito da interface do NetBeans.
{% include post_img.html
png="/assets/imgs_posts/java_ide/netbeans_interface_properties.png"
webp="/assets/imgs_posts/java_ide/netbeans_interface_properties.webp"
alt="Os componentes da interface gráfica do NetBeans incluindo a janela Properties."
align="center"
%}

Podemos reposicionar essa janela para dentro de um dos painéis à esquerda da interface do NetBeans. Basta clicar, segurar e arrastar a aba para o local desejado.

## Primeiro Programa
Há quem argumente que a prática da programação é a melhor maneira de aprender a programar efetivamente. Eu não sei se essa afirmação é cientificamente verificada, mas de qualquer modo vamos colocar a mão na massa e programar nosso primeiro programa.

NNada muito complexo será criado, por enquanto. A ideia aqui é fazer um programa que, geralmente, é ensinado no começo de um curso de uma linguagem de programação qualquer: criar um programa para escrever Olá, Mundo na tela.

Esse é apenas um primeiro contato. Dessa forma, não convém descrever tudo detalhadamente. Em algum momento em postagens futuras, as diversas funções do NetBeans serão devidamente descritas.

1 – Com o NetBeans aberto, pressione ```ctrl + shift + N```, use a opção File > New Project no menu principal, ou clique no ícone amarelo com sinal de mais verde no menu simplificado para criar um novo projeto;
{% include post_img.html
png="/assets/imgs_posts/java_ide/5-tut-3-step-1.png"
webp="/assets/imgs_posts/java_ide/5-tut-3-step-1.webp"
alt="Ícone para a função 'criar um novo projeto'."
align="center"
%}

2 – Na janela New Project, selecione Java with Ant na seção Categories, e depois selecione Java Application na seção Projects e clique em Next;
{% include post_img.html
png="/assets/imgs_posts/java_ide/5-tut-3-step-2.png"
webp="/assets/imgs_posts/java_ide/5-tut-3-step-2.webp"
alt="."
align="center"
%}

3 - A janela New Java Application irá abrir. No campo Project Name, coloque um nome com pelo menos a primeira letra em maiúsculo para o seu projeto, e então clique em Finish;
{% include post_img.html
png="/assets/imgs_posts/java_ide/5-tut-3-step-3.png"
webp="/assets/imgs_posts/java_ide/5-tut-3-step-3.webp"
alt="."
align="center"
%}

Um novo projeto é criado com um primeiro arquivo .java contendo linhas de código básicas para começarmos a programar.

{% highlight java %}
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt
 * to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit
 * this template
 */
package primeiroprograma;
/**
 *
 * @author ferna
 */
public class PrimeiroPrograma {
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
//   TODO code application logic here
    }    
}
{% endhighlight %}

O código acima exige a compreensão de conceitos que não serão explicados neste momento, sendo eles pacotes, comentários, classes e métodos. Por enquanto, vamos nos limitar a área entre ```public static void main(String[] args) {``` e ```}```. Nesse espaço, serão inseridos os comandos que atribuem as funcionalidades da nossa aplicação.

Podemos apagar todos os comentários (parte que está em cinza) já que não serão necessários no momento. Dessa forma, deixamos a tela um pouco mais limpa.

4 – Insira, no espaço mencionado acima, a abreviação sout e então pressione a tecla tab. Isso deve inserir a declaração ```System.out.println("")``` no arquivo, que é um comando responsável por exibir textos na tela. O trecho abaixo mostra como o conteúdo do arquivo deve ficar;

{% highlight java %}
package primeiroprograma;

public class PrimeiroPrograma {
    public static void main(String[] args) {
        System.out.println("");
    }
}
{% endhighlight %}

5 - O que nos resta agora é inserir Olá, Mundo! entre aspas. Depois salvamos o arquivo com ctrl + s;

{% highlight java %}
package primeiroprograma;

public class PrimeiroPrograma {
    public static void main(String[] args) {
        System.out.println("Olá, Mundo!");
    }
}
{% endhighlight %}

6 – Com as instruções definidas, podemos executar o programa usando F6, ou clicando em Run > Run Project.

Se tudo der certo, o seguinte resultado será exibido em uma janela denominada output(saída), que aparece localizada em um painel na parte inferior do NetBeans.
{% include post_img.html
png="/assets/imgs_posts/java_ide/5-tut-3-step-6.png"
webp="/assets/imgs_posts/java_ide/5-tut-3-step-6.webp"
alt="."
align="center"
%}

Caso o resultado esperado não apareça, pressione shift + F11 ou clique em Run > Clean and Build Project. Essa opção faz o NetBeans recompilar todo o projeto. Depois, tente executar o programa novamente.

Com isso, construímos nosso primeiro programa usando a ferramenta NetBeans.

## Funcionalidades do NetBeans
Nos passos mencionados acima já é possível identificar uma capacidade muito útil que muitos IDEs oferecem, que é o recurso de autocompletar. Isso permite escrever código de maneira mais rápida e diminui a ocorrência de erros de digitação. Além disso, pudemos executar o código e verificar seu resultado dentro do próprio ambiente de desenvolvimento.
Algumas das funcionalidades embutidas no NetBeans são explicadas a seguir.

### Realce de sintaxe
É uma funcionalidade que consiste na formatação diferenciada para cada categoria de termos empregada no código fonte do programa. Essa funcionalidade ajuda na detecção de erros de digitação na medida em que termos errados, isto é, termos que não possuem função alguma na linguagem, são marcados de forma diferentes. Também ajuda na leitura do código, já que os diferentes elementos podem ser identificados mais facilmente.
Pegue o trecho do nosso programa, como exemplo:
{% include post_img.html
png="/assets/imgs_posts/java_ide/hello_world_ptbr.png"
webp="/assets/imgs_posts/java_ide/hello_world_ptbr.webp"
alt="."
align="center"
%}

Nesta imagem podemos identificar elementos formatados de diferentes formas. As palavras reservadas, que são palavras que não podem ser usadas como nomes para variáveis, métodos ou interfaces, são apresentadas em azul. Em negrito, estão marcados o nome de uma classe ou método. O verde denota uma propriedade de uma classe. Em laranja, temos um conjunto de caracteres (string). Os métodos, classes, propriedades, strings, identificadores e as palavras reservadas serão tratadas em outras postagens. A ideia aqui é apenas deixar claro do que se trata a funcionalidade de realce de sintaxe.

### Autocompletar
A funcionalidade autocompletar tenta adivinhar o que o desenvolvedor quer digitar. Assim que começamos a algum comando, a funcionalidade de autocompletar do NetBeans entra em ação, analisando o contexto e oferecendo textos alternativos para completar a palavra ou comando sendo escrito.
Digite System. entre public static void main  public static void main(String[] args) { e } e aguarde. Uma lista de opções para completar a declaração será carregada pelo NetBeans.
{% include post_img.html
png="/assets/imgs_posts/java_ide/netbeans_autocomplete.png"
webp="/assets/imgs_posts/java_ide/netbeans_autocomplete.webp"
alt="."
align="center"
%}

Basta clicar em uma das alternativas, que a declaração será completada automaticamente.

### Depurador
Essa ferramenta é usada para encontrar problemas lógicos em um programa. Esses são problemas que não estão relacionados com o uso errado ou a ausência de uma palavra-chave da linguagem, mas com as instruções dadas ao computador, as quais não satisfazem o objetivo desejado.
Por exemplo, se por algum motivo precisamos de um programa para organizar as imagens de uma pasta X, e escrevemos um código que organiza as fotos de uma pasta Y, provavelmente nenhum erro de sintaxe será acusado. É para solucionar esse tipo de mistério que o depurador entra em cena.
Essa ferramenta permite a execução do código de maneira controlada; podemos acompanhar quais linhas de código estão sendo executadas, pausar a execução do programa em uma declaração específica, verificar o valor contido em variáveis em um dado momento da execução, etc. Tudo isso será visto em um futuro post sobre depuração.

---
Então é isso. Espero que esse texto tenha ajudado nos seu primeiro contato com o NetBeans e que a importância de uma ferramenta como essa no processo de desenvolvimento.