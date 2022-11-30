---
title: Java - Variáveis
layout: article
permalink: "/java/:title"
description: Aqui falamos tudo que você precisa saber sobre variáveis em Java.
categories: java
tags:
- java
- 'variáveis '
- escopo
date: 2019-01-14T22:00:04.000+00:00
lastUpdated: 2022-08-21T13:39:47.490+00:00
author: Fernando Bonfim
excerpt_separator: "<!--more-->"
sources:
- title: The Java® Language Specification - Oracle
  url: https://docs.oracle.com/javase/specs/jls/se17/jls17.pdf
order: 10
published: false

---
Nessa seção eu vou apresentar a você o conceito de classes e objetos. Vamos aprender a criar uma classe e então instanciar objetos a partir dela, e como declarar propriedades e métodos nas classes e acessar elas.

Algumas convenções são usadas para descrever a sintaxe:

* Tudo entre < e > é um elemento obrigatório.
* Tudo entre \[ e \] é opcional.

## Definição de Variável

Uma <dfn>variável</dfn> é, geralmente, referido como um local nomeado na memória do computador que pode guardar um valor. Para entender melhor, nós podemos fazer uma analogia: imagine a memória do seu computador como um armário com vários compartimentos etiquetados.

{% include post_img.html
png="/assets/imgs_posts/java-history-ptbr/7-representation-1.png"
webp="/assets/imgs_posts/java-history-ptbr/7-representation-1.webp"
alt="Representação da memória e das variáveis como um armário."
caption="Um armário, representando a memória do computador, com alguns compartimentos, que representam as variáveis."
align="center"
%}

Os compartimentos são como as variáveis, e o armário é como a memória RAM do seu computador. A diferença é que uma variável não serve para guardar suas roupas; apenas dados codificados em em forma binária, ou seja, representados com 0s e 1s, podem ser armazenados.

Mas o que varia? Na verdade, variáveis recebem esse nome por que elas podem armazenar diferentes valores ao longo do programa. Desse modo, o que varia é o valor da variável.

A seguir, nós veremos como declarar variáveis, e também vamos detalhar algumas das características fundamentais de uma variável.

## Declaração de Variáveis e Atribuição de Valor

Declarar uma variável é escrever a instrução que cria uma variável em um programa. A atribuição de valor é escrever o dado que deve ser guardado na variável.

Em Java, a estrutura pode variar um pouco a depender de alguns fatores, mas nós vamos começar pela seguinte:

    <tipo da variável> <identificador> = <valor>;

Os trechos <tipo da variável>, <identificador> e <valor> estão ali apenas para informar o que deve fazer parte do comando. <tipo da variável> será substituído por uma palavra-chave que determina qual é o papel da variável; esse "espaço no armário" deve guardar um texto? Um número inteiro? Números decimais? Além disso, o tipo também define o tamanho, em bytes, que o dado armazenado pode ocupar na memória do computador.

<identificador> deve ser substituído por uma palavra que será usada  como o nome da variável. Esse nome será usado para referenciar a variável em outras partes do código, assim nós conseguimos usar o valor que ela armazena.

<valor> será substituído pelo dado que deve ser guardado na variável declarada. Os valores também tem formas diferentes na hora de escrever eles no programa. Além disso, **dependendo de onde no código do programa a variável é criada**, o valor deve, obrigatoriamente, ser definido explicitamente pelo programador. Nesse texto, todas as variáveis requerem a definição explicita de um valor, como veremos em outra seção.

A variável a seguir declara uma variável e guarda um valor nela.

```java
int ano = 2000; 
```

**Observação**: Lembre-se de sempre pontuar as linhas de código com ponto e vírgula para indicar seu fim.

O sinal de = (igual), chamado de sinal de atribuição, é utilizado para atribuir um valor à variável. Nesse caso o número 2000 foi atribuído à variável nomeada ano, que é do tipo `int`.

A declaração de uma variável pode ser feita em uma linha, enquanto a atribuição acontece em outra, sem problemas.

    // Declara a variável.
    int ano; 
    
    // Zero ou mais instruções
    
    // Atribui valor à variável.
    ano = 2000; 

Dessa vez, nós declaramos a variável _ano_ primeiro, e deixamos a atribuição de um valor acontecer em outra parte do código 

Entre a declaração e a atribuição podem haver varias instruções, mas nenhuma pode usar a variável ano. Afinal, entre a declaração e a atribuição a variável _ano_ não tem valor nenhum nela, e ela deve conter alguma informação antes de ser usada. 

O trecho abaixo, por exemplo, incorre em erro de compilação. Isso porque não é possível exibir o conteúdo de uma variável que não tem conteúdo.

    // Declara a variável.
    int ano; 
    
    System.out.println(ano);
    
    // Atribui valor à variável.
    ano = 2000; 

Vamos discutir um pouco mais dos três elementos que compõem uma variável:  o tipo, o identificador e o valor.

### Tipo da Variável

O tipo da variável é um termo que atribui um conjunto de características à variável. Quais características? Basicamente, o intervalo de valores que podem ser armazenados nela, a quantidade de bits (0s e 1s) que serão usados para representar o dado, e quais tipos de operações é possível fazer com o valor.

Em Java nós temos um conjunto de tipos simples chamado de tipos primitivos. Cada tipo desse conjunto é uma classificação básica predefinida na linguagem Java.

A tabela abaixo organiza os tipos primitivos em grupos, informa o espaço que um valor pode ocupar na memória dependendo do tipo escolhido, e quais são os valores válidos.

<div class="table-container">

<table class="table table-model-1">

<thead>

<tr class="row">

     <th class="col">Grupos</th> 
    
     <th class="col">Tipo Primitivo</th> 
    
     <th class="col">Tamanho</th> 
    
     <th class="col">Valores Válidos</th> 

</tr>

</thead>

<tbody>

<tr class="row">

<td class="col" rowspan="4">Números Inteiros</td>

<td class="col">byte</td> <td class="col">1 byte</td>

<td class="col">-128 até 127</td> </tr> <tr class="row">

<td class="col">short</td> <td class="col">2 bytes</td>

<td class="col">-32.768 até 32.767</td> </tr> <tr class="row">

<td class="col">int</td> <td class="col">4 bytes</td>

<td class="col">-2.147.483.648 até 2.147.483.647</td>

</tr>

<tr class="row">

<td class="col">long</td>

<td class="col">8 bytes</td>

<td class="col">-9.223.372.036.854.775.808 até 9.223.372.036.854.775.807</td>

</tr>

<tr class="row">

<td class="col" rowspan="2">Números Racionais</td>

<td class="col">float</td> <td class="col">4 bytes</td>

<td class="col">≈-3,403 x 10<sup>38</sup> até ≈3,403 x 10<sup>38</sup> </td>

</tr>

<tr class="row">

<td class="col">double</td>

<td class="col">8 bytes</td>

<td class="col">≈-1,793 x 10<sup>308</sup> até ≈1,793 x 10<sup>308</sup></td>

</tr> <tr class="row">

<td class="col">Booleanos</td>

<td class="col">boolean</td>

<td class="col">1 byte</td>

<td class="col">true ou false</td>

</tr> <tr class="row">

<td class="col">Caractere (aceita apenas um caractere)</td>

<td class="col">char</td> <td class="col">2 bytes</td>

<td class="col">0 (caracter NUL) até 65.535 (Sem caractere definido)</td> </tr>

</tbody>

</table>

</div>

\* Uma variável do tipo `char` normalmente recebe um único símbolo entre aspas simples, como '/' ou 'a'. Contudo, cada um dos símbolos ganham um nome numérico que pode ser qualquer um de 0 até 65.535.

Logo nós veremos como usar esses tipos na declaração de variáveis. Mas antes, vamos explicar um pouco sobre identificadores, outra característica importante de uma variável.

### Identificador da Variável

O identificador de uma variável é um nome que será utilizado para referenciar uma determinada variável em outras partes do código onde seu valor for necessário.

Podemos colocar qualquer nome, que obedeça algumas restrições, sendo elas:

* O identificador tem que começar com uma letra do alfabeto, underscore (_) ou cifrão ($). Ex: _nome, nome, $nome;
* Após o primeiro caráter, a variável pode conter letras do alfabeto, underscore(_) ou números com dígitos entre 0-9. Ex: i1, idade, idade89 etc;
* Não são permitidos caracteres especiais ou espaço em branco. Ex: nome e sobrenome;
* Não utilize palavras-chaves reservadas do Java. Essas palavras são utilizadas parte da sintaxe do Java, ou seja, o compilador entende como um comando, e como qualquer comando, se ele estiver em um lugar que não faz sentido, vai causar um erro de compilação. Ex: class, true, false, etc;
* Não pode conter acentos;
* Não podemos usar um nome para criar duas variáveis diferentes no mesmo escopo (Veja a seção [Escopo](#escopo) abaixo).

Além das regras obrigatórias mencionadas, nós podemos citar algumas práticas que, geralmente, são consideradas positivas pela comunidade:

* O nome pode ter qualquer quantidade de caracteres, mas é melhor não abusar. Esse nome será usado durante seu programa, e nomes grandes demais podem dificultar a codificação do programa. Ex: numeroDeParticipantes --> participantes;
* Usar o underline para separar palavras em identificadores compostos por mais de uma palavra, ou iniciar cada termo usando uma letra maiúscula. Ex: valor_devido ou valorDevido para métodos e variáveis, ou ValorDevido para classes;
* Podemos escolher qualquer nome para uma variável, desde que obedeça as restrições anteriores. Porém o ideal é escolher nomes que fazem sentido para o dado que será armazenado. Nós podemos, por exemplo, definir “claudio” como nome de uma variável que guarda a idade do usuário, mas isso não faz sentido algum, e pode causar confusão durante todo o processo de desenvolvimento.

Uma vez identificada, nós podemos usar seu nome para acessar ou modificar o valor armazenado em uma variável. Para exibir um valor na tela, por exemplo, colocamos o nome da variável entre parênteses do comando `System.out.println();`.

```java
int var1 = 10;
// exibe o valor da variável var1 na tela.Valor da variável
System.out.println(var1); 
```

O Java é case-sensitive. Em uma linguagem case-sensitive duas palavras formadas pelas mesmas letras são diferentes se uma dessas letras estar em maiúsculo em uma e não na outra. Por exemplo, a variável nome é diferente da variável nomE.

No trecho abaixo, nós mudamos o nome da variável cujo valor deve ser exibido na tela. Como a variável não existe, esse trecho deve incorrer em erro durante a compilação do código.

    int var1 = 10;
    // Erro porque vaR1 não existe.
    System.out.println(vaR1); 

Como pode perceber, uma letrinha incorreta e o as variáveis já não são as mesmas.

### Valor da Variável

O valor se trata da informação que será armazenada na variável. Pode ser o  nome de alguém, uma data de nascimento, uma cor, ou qualquer outro valor.

O valor que será colocado na variável vem depois de um sinal de atribuição, como, por exemplo, o sinal de = (igual). Esse sinal ordena que o valor que está a sua direita seja inserido na variável nomeada a sua esquerda.

O Java, assim como outras linguagens, tem o que é chamado de literais. Um literal é uma notação para representar o valor que você quer armazenar em uma variável. A representação depende do tipo da variável na qual o valor será armazenado. 

* Para o tipo `char`, o valor é colocado entre aspas simples, como o literal 'C', que é como o caráter C é representado.
* Os literais fracionários para o tipo `double` são representados com uma parte inteira, um ponto e a parte decimal do número logo em seguida. O número 3.4 é um literal fracionário, por exemplo. Também é possível usar notação científica. Para isso, adicione a letra "e" no final do literal fracionário, em seguida o expoente. Por exemplo, o valor 3.5e2 é o mesmo que 3.5 x 10<sup>2</sup>;
* Os literais fracionários do tipo `float` incluem o sufixo f ou F depois do componente fracionário. O f ou F meio que diferencia quando o valor é do tipo `float`. Por exemplo, o literal 14.2 é `double`, já 14.2F é `float`;
* Os literais inteiros do tipo `int` são representados como números sem componente fracionário. Por exemplo, os números 100 e -10 são literais inteiros. Apesar de representarem um valor `int` por padrão, esse literal pode ser atribuído a uma variável de qualquer tipo numérico, desde que este seja válido para o tipo alvo. Vamos ver mais sobre isso quando a gente for discutir [conversão entre tipos]().
* Para definir literais inteiros do tipo `long` basta adicionar o sufixo L no final do número inteiro. Isso diferencia um valor do tipo `long` de outro do tipo `int` 10 é um `int`, mas 10L é um valor do tipo `long`.
* Para o tipo `boolean` os valores são limitados a `true` ou `false`.

Exemplos de instruções com valores que obedecem às regras de representação acima.

```java
byte n1 = 100; // n1 recebe 127
short n2 = 200; // n2 recebe 200
int n3 = 40000; // n3 recebe 40000
char car = 'c'; // car recebe o carácter C
long n4 = 3000000000L; // n4 recebe 3000000000
float f1 = 8.7F; // f1 recebe 8.7
double f2 = 1000.48; // f2 recebe 1000.48
boolean b1 = true; // b1 recebe true
```

Dica: podemos usar o underscore como separador de milhares para ajudar na leitura do número, como em `long n4 = 3_000_000_000L;`. Esse sinal é ignorado durante a compilação do valor.

Além de escrever explicitamente o valor que deve ser armazenado na variável, nós podemos usar expressões para gerar o valor que deve ser armazenado. Expressões são instruções ou parte de instruções que precisam ser processadas para produzir um valor.

```java
double salario = 8 * 7 * 20.35; // salario recebe 1139.6
```

No trecho acima, a parte à direita do sinal de igual precisa ser calculada para obter o valor da variável salario. Nesse caso, os valores são multiplicados e o resultado é armazenado na variável salário. 

Observação: o asterisco (*) é o sinal da multiplicação no Java.

Nós podemos usar variáveis no lugar dos números usados na instrução acima, por exemplo. As variáveis serão processada para descobrir seu valor, e esse valor será usado na multiplicação.

```java
// Define as variáveis pertinentes para o cálculo.
int horas = 8;
int dias = 7;
double pagPorHora = 20.35;

// Cálcula e guarda o salário.
double salario = horas * dias * pagPorHora; // Salário recebe 1139.6
```

Para computar a expressão o compilador busca na memória os valores de cada variável envolvida, e então efetua uma multiplicação com esses números. 

### Exemplos

A seguir nós veremos alguns exemplos de variáveis usando cada um desses tipos. Mas para que seja possível criar programas mais interessantes nós vamos precisar aprender como escrever algumas instruções para que o programa possa receber dados do usuário. 

Primeiro

Nesse programa é calculado a distância percorrida pela luz em um determinado número de dias, que é fornecido pelo usuário. A quantidade de dias, segundos e a distância percorrida podem ser enormes, e inclusive ultrapassar o valor máximo que cabe no tipo `int`, então é usado uma variável do tipo `long` para estas variáveis.

Como o resultado é provavelmente enorme, então a distância é salva em uma variável do tipo `long`. Além disso, a quantidade de dias, e de segundos para representar os dias, também podem

    public class TipoDeVariavelDemo1 {
        public static void main(String[] args) {
            // Declaramos 4 variáveis
            int velocidadeDaLuz;
            long dias;
            long segundos;
            long distancia;
            
            // Velocidade aproximada da luz em kilometers por segundo
            velocidadeDaLuz = 186000;
            
            // Específica o número de dias
            dias = 1000; 
            
            // Converte para segundos 
            segundos = dias * 24 * 60 * 60; 
            
            // Cálcula a distância.
            distancia = velocidadeDaLuz * segundos; 
            
            System.out.print("Em " + dias);
            System.out.print(" dias a luz viaja por cerca de ");
            System.out.println(distancia + " km.");
        }
    }

    public class TipoDeVariavelDemo2 {
        public static void main(String[] args) {
            // Declaramos e iniciamos duas variáveis.
            double altura = 3.2;
            double base = 2.0; 
            
            // Cálcula a área do triângulo.
            double area = (base * altura) / 2;
            System.out.println("Área do triângulo: " + area);
        }
    }

## Tipos de Referência

Uma  questão aqui merece a nossa atenção: por que esses tipos são "básicos"? Esses são chamados de básicos para atribuir uma certa simplicidade nesses tipos em relação a outros tipos chamados de tipos de referência.

Quando declaramos uma variável de um dos tipos primitivos, o seu nome é associado com um espaço na memória que deve conter o dado especificado. Com um tipo de referência, o identificador é associado com um ou mais endereços na memória que contém, ao invés do dado, outro endereço na memória. Nós vamos fazer

Além dos tipos primitivos, a linguagem permite o uso dos chamados tipos de referência. Esses tipos são classes que determinam que a variável armazena uma referência a um objeto. Esse assunto é um tanto confuso, ainda mais para quem está iniciando na programação, por isso não vamos abordar esse assunto em profundidade aqui.

### Guardando Palavras e Frases

Temos o tipo `char` para guardar um carácter, mas e se quisermos guardar um nome, endereço, ou uma frase qualquer? Não temos uma variável primitiva que nos permita guardar esse tipo de dado. Para isso, vamos precisar da classe `String`, que é um tipo referencial.

Há duas estruturas utilizada para armazenar palavras e frases:

{% highlight java %}
String identificador = "valor"; // Guarda a palavra valor no objeto referenciado na variável identificador.

String identificador = new String("valor"); // Guarda a palavra valor no objeto referenciado na variável identificador.
{% endhighlight %}

Ambas instruções acima criam uma variável que deve armazenar uma referência para um objeto que é uma instância da classe `String`. Uma classe é um modelo que pode ser usado para criar objeto que contenha certas características. É como se fosse o projeto arquitetônico de uma casa que podemos usar para construir múltiplas casas (que seriam os objetos) que possuem as mesmas características mas com detalhes diferentes. Aprenderemos sobre classes em um em outro post e tudo isso ficará mais claro.

Para guardar o nome Fernando, e sua série favorita, por exemplo, podemos escrever o seguinte:

```java
String nome = "Fernando";
String serie = new String("The Mentalist");
```

Também podemos criar uma `String` em uma linha e atribuir o valor em outra parte do programa. dessa forma:
{% highlight java%}
String nome;
// Uma ou mais linhas depois...
nome = "Fernando";
{% endhighlight %}

Como qualquer outra variável, apenas código no mesmo bloco e depois da atribuição do valor, pode manipular uma String.

Note que `String` se escreve com a primeira letra em maiúsculo. Isso é muito importante, pois estamos lidando com uma classe, e as classes devem sempre conter a primeira letra maiúscula.

## Declaração de Variáveis: Utilizando a Palavra "var"

Podemos declarar uma variável sem especificar qual é o seu tipo utilizando a seguinte sintaxe:
{% highlight java %}
var + identificador = valor; // Cria uma variável e atribui um valor à ela
{% endhighlight %}

A palavra `var` indica que estamos declarando uma variável, mas não especifica qual o seu tipo. Nesse caso, o compilador Java decidirá qual é o tipo da variável dependendo do dado que for atribuída a ela. Por esse motivo, não é possível declarar uma variável sem a atribuição de um valor quando utilizamos o comando `var`.

Esse tipo de declaração pode ser utilizada apenas para variáveis locais, que são variáveis que existem apenas dentro do bloco de código de um método de uma classe.

Outra coisa a se notar é que a palavra var não é uma palavra-chave do Java, ela apenas se comporta como uma dependendo do contexto. Isso significa que ela pode ser utilizada como identificador de métodos, variáveis ou pacotes.
Isso torna coisas desse tipo possível:

{% highlight java %}
int var = 3;
var var = 10;
{% endhighlight %}

Declaração de variáveis dessa maneira pode, em alguns casos, dificultar a identificação do tipo da variável durante a programação.
Também podemos utilizar a palavra var no lugar de um tipo de referencia. No programa abaixo nós declaramos Strings usando esse constructo.

{% highlight java %}
var nome = "Jeff";
var nome = new String ("name");
{% endhighlight %}

## Escopo

Um elemento fundamental do Java é o bloco de código. Um bloco de código é um agrupamento de duas ou mais instruções que funcionam juntas como uma unidade.
Para criar um agrupamento de instruções, usamos chaves/chavetas.

```java
class DemoBloco(){ // Início do bloco da classe
    // Instruções que fazem parte da classe.
    public static void main (String[] args){
        // Instruções que fazem parte do método main.
        System.out.println("Faço parte do método main!!!");
    }
} // fim do bloco da classe
```

No programa acima nós podemos identificar dois blocos de código. O primeiro agrupa instruções que fazem parte da classe, que vão ser sempre instruções que criam variáveis e métodos. O segundo, agrupa todas as linhas de código que fazem parte do método principal.

Variáveis podem ser declaradas e iniciadas dentro de qualquer bloco de código. O bloco do qual uma variável faz parte determina o escopo da variável. O escopo delimita o conjunto de códigos que pode acessar e manipular a variável.
Pegue o código abaixo, por exemplo.

    class DemoBloco(){
        // Instruções da classe DemoBloco.
        public static void main (String[] args){
            // Instruções do método main.
            int n1 = 2;
            System.out.println("O valor de n1 é "" + n1); // Não compila.
        } // Fim do bloco do método main.
    } // Fim do bloco da classe DemoBloco

No trecho acima, nós criamos um bloco “autônomo” dentro do bloco do método main. Nesse bloco, foi definida uma variável n1 do tipo `int`. Depois do bloco, mas ainda dentro do método, nós tentamos usar o código `System.out.println(“O valor de n1 é “ + n1);` para exibir o valor da variável n1. No entanto, ao compilar o código nós recebemos uma mensagem de erro. Se estiver usando o NetBeans, é possível ver uma pequena lâmpada com uma bolinha vermelha em cima do número da linha, que informa que ocorreu algum erro.

Daqui para frente vamos nos referir ao bloco atrelado ao método como escopo externo, e o bloco autônomo como escopo interno.

Nota: para saber como instalar e usar o NetBeans para executar os programas vistos aqui veja nossa página sobre o NetBeans.

{% highlight java %}
class DemoBloco(){
public static void main (String\[\] args){
// Escopo externo
{
// Escopo interno
int n1 = 2;
System.out.println("O valor de n1 é " + n1); // Compila corretamente.
}
}
}
{% endhighlight %}

O mesmo código dentro do mesmo bloco que contém variável deve compilar normalmente.

Também leve em consideração que você deve declarar a variável antes de usá-la. Se movermos o trecho `int n1 = 2`; para depois da linha `System.out.println(“O valor de n1 é “ + n1);`, não vamos conseguir compilar o código.

Agora vamos pensar na situação contrária, e tentar acessar, de dentro do nosso escopo interno, uma variável definida no escopo do método.

{% highlight java %}
class DemoBloco(){
public static void main (String\[\] args){
// Escopo externo.
int n1 = 2;
{
// Escopo interno.
System.out.println("O valor de n1 é " + n1); // Compila.
}
}
}
{% endhighlight %}

Esse programa não apresenta nenhum erro. Isso por causa de uma característica muito importante envolvendo blocos: o código de um escopo interno tem acesso às variáveis do escopo externo que o envolve. Entretanto, se a declaração ocorrer depois da criação do bloco interno, teremos um problema.

{% highlight java %}
class DemoBloco(){
public static void main (String\[\] args){
// Instruções do bloco do método main.
{
// Bloco autônomo.
System.out.println("O valor de n1 é " + n1); // Não Compila.
}
int n1 = 2;
}
}
{% endhighlight %}

No programa acima, o código que exibe o valor de n1 não compila por que a variável ainda não existe.

Variáveis são destruídas quando saímos de seu bloco. Inclusive, é por essa razão que ela não é acessível fora do bloco.

As variáveis declaradas em um escopo interno não pode ter o mesmo identificador de uma variável declarada no escopo externo. Essa restrição é independente do tipo, ou seja, mesmo que elas tenham tipos diferentes, não podemos prosseguir com a declaração. Por causa disso, o trecho abaixo incorre em erro durante a compilação.

{% highlight java %}
class DemoBloco(){
public static void main (String\[\] args){
// Escopo externo
int n1 = 2; // Compila
{
// Escopo interno
int n1 = 2; // Não compila
float n1 = 3F; // Não compila
}
}
}
{% endhighlight %}

É possível ter variáveis com mesmo desde que sejam em blocos diferentes, e um bloco não está dentro do outro.

{% highlight java %}
class DemoBloco(){
public static void main (String\[\] args){
// Escopo externo
{
// Escopo interno
int n1 = 2; // Compila
}
{
// Escopo interno
int n1 = 2; // compila
}
{
// Escopo interno
float n1 = 3F; // compila
}
}
}
{% endhighlight %}

Os blocos criados para ilustrar como as variáveis são afetadas não são úteis na vida real. Geralmente, você vai encontrar um bloco agrupando código em para permitir que outro recurso da linguagem funcione, como por exemplo um método, uma classe, controladores de fluxo (`if...else`, `switch`), estruturas de loop (`for`, `while`),

## Exemplos

A seguir são exibidos alguns exemplos de declarações inválidas, bem como o motivo e a forma correta de acordo com o conteúdo discuto nas seções anteriores.

{% highlight java %}
int 1idade = 32
{% endhighlight %}
Nome de variável não pode começar com números.
Válido int idade1 = 32;

{% highlight java %}
char letr@ = ‘c’
{% endhighlight %}
Não são permitidos caracteres especiais (e.g., @, !) nos nomes.
Válido: `char letra = ‘c’;`

{% highlight java %}
long numerolongo = 13.89883
{% endhighlight %}
É necessário o “L” no final do valor.
Válido: `long numeroLongo = 1389883L;`

{% highlight java %}
double pi = 13,141315
{% endhighlight %}

Na notação americana as vírgulas não são utilizadas para separar decimais, mas sim o ponto.
Toda declaração deve ser encerrada com ponto e vírgula.
Válido: `double pi = 13.141315;`

{% highlight java %}
float número flutuante = 12.12
{% endhighlight %}
Variáveis do tipo float necessitam do prefixo “F” após o valor.
Não é permitido espaços no nome da variável.
Válido: `float numeroFlutuante = 12.12F;`

## Por que Variáveis Estáticas?

A justificativa para ter tipos definidos é que isso ajuda a evitar erros e aumentar a confiabilidade do programa, pois instruções que tentam gravar um dado em um formato não esperado pela variável, ou que tentam fazer uma operação inválida com uma variável, geram um erro no compilador. Desse modo, o código fonte do programa só é gerado se colocamos nas variáveis os dados apropriados e se utilizamos os dados da forma como é permitido.

Mas por que disso? Para que ter um controle como esse? Imagine que você crie uma variável cujo valor será usada em cálculos, e que haja a possibilidade de que ela seja atualizada durante a execução do programa, isto é, enquanto o programa está rodando o valor da variável pode ser alterado. Especificando o tipo da variável nós podemos garantir que toda vez que a variável for atualizada um

durante a execução a variável pode receber valores diferentes. Definindo o tipo da variável nós conseguimos garantir que a variável vai receber um tipo de dado que pode ser

que deve receber o salário de contribuição do usuário, sobre o qual é calculado o valor a ser pago à previdência social, Como um salário, é esperado que o dado seja numérico, e que tenha valor depois da vírgula.

Além disso, essa informação é importante para a utilização mais eficiente da memória do computador; em situações em que precisamos armazenar um tipo de dado o qual sabemos que poderá ser um número de 1 a 100, podemos definir uma variável do tipo `byte` para guardar esses números, ao invés de ocupar mais espaço na memória com uma variável do tipo `short`, por exemplo.

***

Isso é tudo sobre varáveis que temos para hoje. Não deixe de revisar o conteúdo se necessário. Também tente rodar os exemplos usados durante o texto, isso pode ajudar a entender algum aspecto que não ficou tão claro.

Para saber como executar um programa, temos um capítulo que mostra como criar seu primeiro programa \[com o NetBeans\]({% link _java/2019-01-14-java-netbeans-ptbr.md %}) e sem um \[com o Bloco de Notas\]({% link _java/2019-01-14-java-environment-ptbr.md %}).