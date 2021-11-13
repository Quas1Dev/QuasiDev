---
layout: article
title: "Configurando o Ambiente Java"
permalink: "/java/:title"
description: "Aprenda a instalar o Java em sua máquina e configurar o ambiente necessário para o desenvolvimento de seus projetos em Java."
categories: "java"
date: 2019-01-14 22:00:03
lastUpdated: 2021-11-04 12:39:00

---

Essa seção orientará você na tarefa de fazer o download, instalação e configuração do Java em seu computador. Também vamos escrever nosso primeiro programa. Como utilizo o Windows 10 no momento, esse tutorial é focado para esta plataforma. A seguir estão os passos necessários para configuração do ambiente.

## Fazendo o download do JDK

Nosso primeiro passo será realizar o download do Java Development Kit (JDK), que foi <a href="{% post_url /java/java-jre-jdk-ptbr.html %}" target="_self">discutido em um outro post</a>.

1 – Vamos precisar realizar o download do JDK, mais especificamente da edição JavaSE, que já vai nos fornecer o que precisamos para o desenvolvimento de nossos programas. O JavaSE é disponibilizado gratuitamente no site da Oracle. Já na página vamos clicar no botão azul escrito download.

{% include post_img.html 
baseimg="{/assets/imgs_posts/java_environment/4-tut-1-step-1.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-1-step-1.jpg"
alt="Botão de download do JDK no site da Oracle."
align="center"
%}

2 - Após clicar no botão, seremos redirecionados para a página de download do JDK. Descendo um pouco na página, vamos encontrar as versões para cada sistema operacional. Concorde com os termos de licença, e depois escolha a versão de acordo com seu sistema operacional e clique para baixar.

{% include post_img.html 
baseimg="../assets/imgs_posts/java_environment/4-tut-1-step-2.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-1-step-2.jpg"
alt="Tabela de versões do JDK no site da Oracle."
align="center"
%}

3 – Assim que terminar o download clique no arquivo executável e siga o guia de instalação.

Obs: Anote o local de instalação do Java pois vamos precisar dessa informação logo mais.

Configurando as variáveis de ambiente no Windows 10
1 - Clique na caixa de pesquisa do Windows e digite “editar”, e em seguida selecione Editar Variáveis de Ambiente do Sistema.

{% include post_img.html 
baseimg="../assets/imgs_posts/java_environment/4-tut-2-step-1.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-1-step-2.jpg"
alt="Caminho para o programa 'Editar as variáveis de ambiente do sistema."
align="center"
%}

2 - Clique na aba "Avançado" e depois selecione "Variáveis de Ambiente".

Alt: Guia para opção 'Variáveis de ambiente' dentro da aba 'Avançado' na janela 'Propriedades do sistema'

3 - Abaixo da lista "Variáveis do Sistema" clique em "Novo" para criar uma nova variável.

{% include post_img.html 
baseimg="../assets/imgs_posts/java_environment/4-tut-2-step-3-and-5.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-2-step-3-and-5.jpg"
alt="O botão 'Novo' logo abaixo da lista de 'Variáveis do Sistema."
align="center"
%}

4 - Em “Nome da Variável” digite JAVA_HOME e, no campo “Valor da Variável”, digite o caminho de instalação do JDK (a pasta onde o jdk está). Depois clique em “ok”.

{% include post_img.html 
baseimg="../assets/imgs_posts/java_environment/4-tut-2-step-4.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-2-step-4.jpg"
alt="Campos 'Nome da Variável' e 'Valor da Variável' que devem ser preenchidos.' logo abaixo da lista de 'Variáveis do Sistema'."
align="center"
%}

5 - Clique novamente em “Novo”.

{% include post_img.html 
baseimg="../assets/imgs_posts/java_environment/4-tut-2-step-3-and-5.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-2-step-3-and-5.jpg"
alt="O botão 'Novo' logo abaixo da lista de 'Variáveis do Sistema'."
align="center"
%}

6 - Agora em “Nome da Variável” digite CLASSPATH e, em “Valor da Variável”, coloque um . (um ponto) e então clique em “ok”.

{% include post_img.html 
baseimg="../assets/imgs_posts/java_environment/4-tut-2-step-6.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-2-step-6.jpg"
alt="Campos 'Nome da Variável' e 'Valor da Variável' que devem ser preenchidos."
align="center"
%}

7 - Agora vamos alterar a variável “path” ou “PATH” (dá no mesmo). Selecione a variável e clique em “Editar”.
{% include post_img.html 
baseimg="../assets/imgs_posts/java_environment/4-tut-2-step-7.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-2-step-7.jpg"
alt="A variável PATH que precisamos editar."
align="center"
%}

8 - Selecione “Novo” e digite %JAVA_HOME%\bin no novo campo. Em seguida clique em Ok.
{% include post_img.html 
baseimg="../assets/imgs_posts/java_environment/4-tut-2-step-8.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-2-step-8.jpg"
alt="Botão 'Novo' acionado para criar um campo em que devemos escrever  %JAVA_HOME%bin."
align="center"
%}

9 - Clique em Ok para fechar a janela de Variáveis de Ambiente. 
{% include post_img.html 
baseimg="../assets/imgs_posts/java_environment/4-tut-2-step-9.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-2-step-9.jpg"
alt="Botão Ok na parte inferior da janela 'Variáveis do Ambiente'."
align="center"
%}

10 - Clique em Ok novamente, para salvar as alterações.
{% include post_img.html 
baseimg="../assets/imgs_posts/java_environment/4-tut-2-step-10.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-2-step-10.jpg"
alt="Botão Ok na parte inferior da janela 'Propriedades do Sistema'."
align="center"
%}

11 - Na caixa de pesquisa, digite CMD, e clique no programa Prompt de Comando que deve aparecer na lista de resultados.
{% include post_img.html 
baseimg="../assets/imgs_posts/java_environment/4-tut-2-step-11.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-2-step-11.jpg"
alt="Caminho para o Prompt de Comando utilizando a busca pelo termo CMD no botão iniciar."
align="center"
%}

12 - Na janela do CMD, digite javac -version e pressione enter. Isso deve mostrar a versão do javac (Java Compiler ou Compilador Java). Caso isso não aconteça, reveja os passos anteriores.
{% include post_img.html 
baseimg="../assets/imgs_posts/java_environment/4-tut-2-step-12.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-2-step-12.jpg"
alt="Versão do Kit de Desenvolvimento Java (JDK) instalado."
align="center"
%}

Tudo pronto, agora já podemos começar a programar usando o Java!

## Primeiro programa

Vamos codificar um programa simples para escrever “Olá, mundo!” no console. Para isso vamos usar um editor de textos simples chamado de Bloco de Notas.

1 - Clique no botão iniciar e digite “bloco de notas” e clique sobre o programa Bloco de Notas.

{% include post_img.html 
baseimg="../assets/imgs_posts/java_environment/4-tut-3-step-1.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-3-step-1.jpg"
alt="Clique em iniciar, digite bloco de notas, e então selecione o bloco de notas."
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
baseimg="../assets/imgs_posts/java_environment/4-tut-3-step-3.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-3-step-3.jpg"
alt="Arquivo sendo salvo na pasta"
align="center"
%}

4 – Agora vamos compilar o nosso programa, o transformando em bytecode. Para isso vamos abrir o CMD, e navegar até a pasta em que nosso código fonte está. No meu caso o programa está na pasta Programas dentro do desktop (área de trabalho). Caso não saiba como navegar no computador usando o CMD leia esse artigo sobre Como abrir e navegar entre pastas com o Prompt de Comandos do Windows 10.

{% include post_img.html 
baseimg="../assets/imgs_posts/java_environment/4-tut-3-step-4.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-3-step-4.jpg"
alt="Caminho até a pasta onde se localiza o código fonte."
align="center"
%}

5 – Agora vamos chamar o compilador do Java (javac) para compilar nosso programa. Para isso escrevemos ```javac primeiroprograma.java```, e então pressionamos enter.
{% include post_img.html 
baseimg="../assets/imgs_posts/java_environment/4-tut-3-step-5.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-3-step-5.jpg"
alt="Compilação do código fonte."
align="center"
%}

Obs: Tenha certeza de que está dentro da pasta onde o programa foi salvo. Caso contrário o comando não funcionará.

Nesse momento foi criado um arquivo contendo o bytecode do nosso programa dentro da mesma pasta em que nosso código fonte está.

{% include post_img.html 
baseimg="../assets/imgs_posts/java_environment/4-tut-3-step-5.1.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-3-step-5.1.jpg"
alt="Pasta 'Programas' com o código fonte e bytecode do nosso programa."
align="center"
%}

6 – Por último, precisamos chamar uma JVM para traduzir o bytecode para o computador. Para isso vamos utilizar o comando ```java primeiroprograma```.

{% include post_img.html 
baseimg="../assets/imgs_posts/java_environment/4-tut-3-step-6.jpg" 
jpg="../assets/imgs_posts/java_environment/4-tut-3-step-6.jpg"
alt="Programa executado."
align="center"
%}

Como podemos ver, foi escrito “Olá, Mundo!” na tela e logo depois o programa foi encerrado. Isso é exatamente o propósito do nosso programa. Caso não tenha funcionado para você, refaça os passos anteriores.

Para alterar algo dentro do programa, é preciso fazer as mudanças dentro do código fonte e então compilar novamente. Depois é necessário chamar uma Máquina Virtual do Java para executar o programa novamente.

## Linha por Linha do Programa

Na seção anterior nós criamos um programa demasiado curto, mas que apresenta algumas características e elementos fundamentais na sua estrutura, os quais são muito comuns em todos os programa s que vamos desenvolver nos próximos capítulos. Portanto, convém fazer uma análise, mesmo que superficial, das partes mais importantes para o andamento das atividades.

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

O comando class está sendo usado para criar uma classe que é chamada PrimeiroPrograma. Nos próximos capítulos você vai ver que a classe é como um projeto para construção de alguma coisa. A classe define características e funções que objetos criados com base nela devem ter. 

O nome do arquivo deve sempre ser igual ao nome da classe que ele contém. Por isso salvamos o arquivo como PrimeiroPrograma.java. Caso esteja usando um ambiente de desenvolvimento integrado (como o NetBeans que veremos mais para frente), você não precisa se preocupar quanto ao nome do arquivo .java. Isso por que as IDEs geralmente gerência o nome do arquivo por você.

O corpo da classe começa com { abre chaves e termina com }. Os elementos entre chaves são chamados de membros da classe. O único membro dessa classe é o método chamado main, cuja definição aparece na linha seguinte.

{% highlight java %}
public static void main(String[] args) { 
{% endhighlight %}

Essa linha inicia o método chamado main. Todo o código que de fato implementa as funcionalidades do programa vai estar dentro de um método. O método main, em particular, é o método principal do programa. Isso porque a execução de um programa começa invocando o método main desta linha. O significado de cada um desses termos não pode ser apresentado agora, já que requer uma compreensão mais aprofundada das características do Java, Vamos explicando aos poucos cada um deles ao longo do curso.

Por último nós temos a linha que diz o que o programa deve fazer. 
{% highlight java %}
System.out.println("Olá, Mundo!");
{% endhighlight %}

Esse é o comando responsável por informar que queremos a frase Olá, Mundo! na tela e pular uma linha. Note que a frase deve estar entre aspas e dentro dos parênteses.
 
O mais importante aqui é compreender a hierarquia presente no documento, que se repete para em todos os programas: nós temos métodos que fazem parte de uma classe, e que por sua vez faz parte de um pacote. O código que efetivamente implementa o que o programa faz é localizado dentro de um método.

Caso esteja usando o NetBeans, assim que um novo projeto é criado, um arquivo com essa estrutura básica é criado automaticamente. Além disso, esse ambiente integrado oferece várias outras vantagens que ajudam o programador a poupar tempo no desenvolvimento do sistema. Nós vamos ver o que é e como instalar o NetBeans no próximo capítulo.

---
Então é isso, configuramos o nosso ambiente, e criamos nosso primeiro programa. No próximo artigo vamos entender o que é uma IDE, e como esse software pode facilitar todo o processo de desenvolvimento de programas.