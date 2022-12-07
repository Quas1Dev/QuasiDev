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
A programação serve, em grande parte para manipulação de dados. Um programa lê dados, move dado, cria dados, atualiza dados, combina dados, etc. Desse modo, as linguagens de programação precisam de algum elemento que nos permita usar esses dados no programa sendo desenvolvido. Esse mecanismo são as variáveis, o conceito que será estudado nesse texto.

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

```
<tipo da variável> <identificador> = <valor>;
```

Os trechos &lt;tipo da variável&gt;, &lt;identificador&gt; e &lt;valor&gt; estão ali apenas para informar o que deve fazer parte do comando. &lt;tipo da variável&gt; será substituído por uma palavra-chave que determina qual é o papel da variável; esse "espaço no armário" deve guardar um texto? Um número inteiro? Números decimais? Além disso, o tipo também define o tamanho, em bytes, que o dado armazenado pode ocupar na memória do computador.

&lt;identificador&gt; deve ser substituído por uma palavra que será usada  como o nome da variável. Esse nome será usado para referenciar a variável em outras partes do código, assim nós conseguimos usar o valor que ela armazena.

&lt;valor&gt; será substituído pelo dado que deve ser guardado na variável declarada. Os valores também tem formas diferentes na hora de escrever eles no programa. Além disso, **dependendo de onde no código do programa a variável é criada**, o valor deve, obrigatoriamente, ser definido explicitamente pelo programador. Nesse texto, todas as variáveis requerem a definição explicita de um valor, como veremos em outra seção.

A variável a seguir declara uma variável e guarda um valor nela.

```java
int ano = 2000; 
```

**Observação**: Lembre-se de sempre pontuar as linhas de código com ponto e vírgula para indicar seu fim.

O sinal de = (igual), chamado de sinal de atribuição, é utilizado para atribuir um valor à variável. Nesse caso o número 2000 foi atribuído à variável nomeada ano, que é do tipo `int`.

A declaração de uma variável pode ser feita em uma linha, enquanto a atribuição acontece em outra, sem problemas.
  
```java 
// Declara a variável.
int ano; 
    
// Zero ou mais instruções
    
// Atribui valor à variável.
ano = 2000; 
```
  
Dessa vez, nós declaramos a variável _ano_ primeiro, e deixamos a atribuição de um valor acontecer em outra parte do código

Entre a declaração e a atribuição podem haver varias instruções, mas nenhuma pode usar a variável ano. Afinal, entre a declaração e a atribuição a variável _ano_ não tem valor nenhum nela, e ela deve conter alguma informação antes de ser usada.

O trecho abaixo, por exemplo, incorre em erro de compilação. Isso porque não é possível exibir o conteúdo de uma variável que não tem conteúdo.

```java
// Declara a variável.
int ano; 
    
System.out.println(ano);
    
// Atribui valor à variável.
ano = 2000; 
``` 
  
Vamos discutir um pouco mais dos três elementos que compõem uma variável:  o tipo, o identificador e o valor.

### Tipo de Dado

O tipo de dado ou tipo de variável é um termo que define o intervalo de valores que podem ser armazenados na variável e quais tipos de operações é possível fazer com o valor.

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

```java 
int var1 = 10;
// Erro porque vaR1 não existe.
System.out.println(vaR1); 
```

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

Dica: podemos usar o underscore como separador de milhares para ajudar na leitura do número, como em \``long n4 =`3_000_000_000. O underscore é ignorado durante a compilação do valor. É como se ele não existisse alí.

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
double salario = horas * dias * pagPorHora; // Salário recebe 1139.6.
```

Para computar a expressão o compilador busca na memória os valores de cada variável envolvida, e então efetua uma multiplicação com esses números.

### Múltiplas Variáveis

É possível declarar mais de uma variável na mesma linha de comando, caso elas sejam do mesmo tipo. Usamos uma vírgula para separar os identificadores de cada variável declarada.

```java
int var1, var2, var3; // Declaração multipla sem definir valor.
byte var4 = 2, var5, var6 = 4; // Declaração múltipla definindo o valor para algumas variáveis.
```

No trecho acima, _var1_, _var2_, e _var3_ foram declaradas na mesma linha de comando. Elas são do tipo int, que é uma das 4 palavras-chaves usadas para determinar que uma variável guarda um valor numérico, sem casas decimais. Perceba também que nenhuma delas recebeu qualquer valor. A atribuição pode ser feito posteriormente com uma declaração de atribuição.

Na segunda instrução, criamos mais três variáveis, mas dessa vez todas são do tipo byte. Outra diferença para a linha anterior, é que duas dessas variáveis têm seus valores definidos; _var4_ armazena o valor 2, e _var6_ armazena o valor 4.

O tipo da variável não muda durante o programa. var1, var2, e var3 no trecho acima são e sempre serão do tipo int. Contudo, os valores contidos nelas pode sim mudar.

int var1;

var1 = 5;

System.out.println(var1); // Exibe o valor 5.

var1 = 10;

System.out.println(var1); // Exibe o valor 10.

Na primeira linha do código fonte acima, nós criamos uma variável chamada var1 na primeira linha. Logo depois, nós iniciamos essa variável com o valor 5. O valor da variável, ou seja, o número 5, é então exibido na tela usando o comando System.out.println(); — perceba que o nome da variável cujo valor será exibido não é envolvido em aspas no comando System.out.println(), como acontece quando queremos exibir um texto. Nas duas últimas linhas nós alteramos o valor de var1 e exibimos seu conteúdo novamente, que agora é 10.

### Exemplos

A seguir nós veremos alguns exemplos de variáveis usando cada um desses tipos.  Nós vamos usar algumas operações aritméticas, então fique sabendo que * é o sinal de multiplicação, + é o sinal de some e / é o sinal usado para divisão na linguagem Java.

Nesse programa é calculado a distância percorrida pela luz em um determinado número de dias, que é fornecido pelo usuário. A quantidade de dias, segundos e a distância percorrida podem ser enormes, e inclusive podem ultrapassar o valor máximo que cabe no tipo `int`, então é usado uma variável do tipo `long` para estas variáveis. A do tipo int

```java 
public class TipoDeVariavelDemo1 {
    public static void main(String[] args) {
        int velocidadeDaLuz;
        long dias;
        long segundos;
        long distancia;
            
        // Velocidade aproximada da luz em kilometros por segundo
        velocidadeDaLuz = 299792;
            
        // Específica o número de dias.
        dias = 1000; 
            
        // Converte dias para segundos. 
        segundos = dias * 24 * 60 * 60; 
            
        // Cálcula a distância.
        distancia = velocidadeDaLuz * segundos; 
            
        // Exíbe o resultado do cálculo.
        System.out.print("Em " + dias);
        System.out.print(" dias a luz viaja por cerca de ");
        System.out.println(distancia + "km.");
    }
}
```

Resultado:

```java
Em 1000 dias a luz viaja por cerca de 25902028800000km.
```

Em outro post nós vamos entender o porquê de não precisarmos usar o sufixo L quando especificamos o valor da variável.

O próximo programa calcula a área de um triângulo dado sua base e altura. Para ter mais precisão no resultado, com mais casas depois da vírgula, nós usamos o tipo `double`, e também usamos o mesmo para a própria base e a altura.

```java
public class TipoDeVariavelDemo2 {
    public static void main(String[] args) {
        // Dimensões do triângulo em centimetros.
        double altura = 3.2;
        double base = 2.0;

        // Área do triângulo.
        double area = (base * altura) / 2;

        System.out.println("Área do triângulo: " + area + " metros quadrados.");
    }
}
```

Resultado:

    Área do triângulo: 3.2 metros quadrados.

O próximo programa apenas armazena e exibe o caráter em uma variável do tipo `char`.
```java
    public class TipoDeVariavelDemo3 {
    
        public static void main(String[] args) {
            char c1, c2;
    
            // O número 88 é o código para X em unicode.
            c1 = 88;
    
            c2 = 'Y';
    
            System.out.println("c1: " + c1);
            System.out.println("c2: " + c2);
        }
    
    }
```

Resultado:

```java
c1: X
c2: Y
```

O programa abaixo calcula o índice de massa corporal (IMC). Para a altura e o peso o tipo `float` deve bastar.

```java
class TipoDeVariavelDemo4 {
    public static void main(String[] args) {
        float peso = 85F;
        float alturaEmMetros = 1.64F;

        float imc = peso / (alturaEmMetros * alturaEmMetros);
        System.out.println("O seu IMC é de " + imc + ".");
    }
}
```

Resultado:

    O seu IMC é de 31.603212.

Para o tipo `boolean` nós vamos apenas declarar algumas variáveis e mostrar o valor delas para o usuário.

```java
public class TipoDeVariavelDemo5 {
    public static void main(String[] args) {
        boolean b;
        b = false;
        System.out.println("b é " + b);
        b = true;
        System.out.println("b é " + b);
    }
}
```

Resultado:

    b é false
    b é true

## Tipos de Referência

Quando declaramos uma variável de um dos tipos primitivos, o seu nome é associado com um espaço na memória que deve conter o dado especificado. Desse modo,a variável de um tipo primitivo guarda diretamente um valor.

Mas em Java nós também encontramos os tipos de referência. Com um tipo de referência, o identificador é associado com um endereço de memória que, por sua vez, faz refêrencia para o local onde está o que chamamos de objeto. 

Tipos de referência tem tudo a ver com classes. Nós vamos discutir classes e objetos em outro texto, mas aqui nós vamos citar um tipo de referência que é um dos mais utilizados, o tipo `String`.

### Guardando Palavras e Frases

Temos o tipo `char` para guardar um carácter, mas e se quisermos guardar um nome, um endereço, ou uma frase qualquer? Não temos uma variável primitiva que nos permita guardar esse tipo de dado. Para isso, vamos precisar da classe `String`, que é um tipo referencial.

Há duas estruturas utilizada para armazenar palavras e frases:

```java
String identificador = "valor"; // Guarda a palavra valor no objeto referenciado na variável identificador.

String identificador = new String("valor"); // Guarda a palavra valor no objeto referenciado na variável identificador.
```
Na primeira fo

Ambas instruções acima criam uma variável que deve armazenar uma referência para um objeto que é uma instância da classe `String`. Uma classe é um modelo que pode ser usado para criar objeto que contenha certas características. É como se fosse o projeto arquitetônico de uma casa que podemos usar para construir múltiplas casas (que seriam os objetos) que possuem as mesmas características mas com detalhes diferentes. Aprenderemos sobre classes em um em outro post e tudo isso ficará mais claro.

Para guardar o nome Fernando, e sua série favorita, por exemplo, podemos escrever o seguinte:

```java
String nome = "Fernando";
String serie = new String("The Mentalist");
```

Também podemos criar uma `String` em uma linha e atribuir o valor em outra parte do programa. dessa forma:

```java
String nome;
// Uma ou mais linhas depois...
nome = "Fernando";
```

Como qualquer outra variável, apenas código no mesmo bloco e depois da atribuição do valor, pode manipular uma String.

Note que `String` se escreve com a primeira letra em maiúsculo. Isso é muito importante, pois estamos lidando com uma classe, e as classes devem sempre conter a primeira letra maiúscula.

## Declaração de Variáveis: Utilizando a Palavra "var"

Podemos declarar uma variável sem especificar qual é o seu tipo utilizando a seguinte sintaxe:

```java
var + <identificador> = <valor>; 
```

A palavra `var` indica que estamos declarando uma variável, mas não especifica qual o seu tipo. Nesse caso, o compilador do Java decidirá qual é o tipo da variável dependendo do dado que for atribuído a ela. Por esse motivo, não é possível declarar uma variável sem a atribuição de um valor quando utilizamos o comando `var`.

Esse tipo de declaração pode ser utilizada apenas para variáveis locais, que são variáveis que existem apenas dentro de um método de uma classe. O conceito de método será abordado em outro texto, mas um exemplo deles é o método nomeado _main_ que estivemos usando em todos os exemplos.

```java
public class VarDemo5 {
    // Método main abaixo
    public static void main(String[] args) {
        // As variáveis aqui podem ser declaradas
        // com o comando var.
        var b = false;
        System.out.println("b é " + b);
        b = true;
        System.out.println("b é " + b);
    }
}
```

Outra coisa a se notar é que a palavra `var` não é uma palavra-chave mas não é reservada no Java. Essa palavra tem um significado especial no Java em um contexto especifico, que é quando ela vem antes de uma expressão na forma identificador = valor. Isso significa que ela pode ser utilizada como identificador de métodos, variáveis ou pacotes. Isso torna coisas desse tipo possível:

```java
int var = 3;
var var = 10;
```

Declaração de variáveis dessa maneira pode, em alguns casos, dificultar a identificação do tipo da variável durante a programação.

Também podemos utilizar a palavra `var` no lugar de um tipo de referencia. No programa abaixo nós declaramos `Strings` usando esse constructo.

```java
var nome = "Jeff";
var nome = new String ("name");
```

## Escopo

Um elemento fundamental do Java é o bloco de código. Um bloco de código é um agrupamento de duas ou mais instruções.

Para criar um agrupamento de instruções, usamos chaves/chavetas.

```java
class BlocoDemo1(){ // Início do bloco da classe
    // Instruções que fazem parte da classe.
    public static void main (String[] args){
        // Instruções que fazem parte do método main.
        System.out.println("Faço parte do método main!!!");
    }
} // fim do bloco da classe
```
Resultado:
```
Faço parte do método main!!!
```
No programa acima nós podemos identificar dois blocos de código. O primeiro agrupa instruções que fazem parte da classe (criada com a palavra-chave `class`), que vão ser sempre instruções que criam variáveis e métodos. O segundo, agrupa todas as linhas de código que fazem parte do método principal.

Variáveis podem ser declaradas e iniciadas dentro de qualquer bloco de código. O bloco do qual uma variável faz parte determina o escopo da variável. O escopo delimita o conjunto de códigos que pode acessar e manipular a variável.

Pegue o código abaixo, por exemplo.

```java
class BlocoDemo2(){
    // Instruções da classe BlocoDemo2.
    public static void main (String[] args){
        // Instruções do método main.
        int n1 = 2;
        System.out.println("O valor de n1 é " + n1); // Não compila.
    } // Fim do bloco do método main.
} // Fim do bloco da classe BlocoDemo2.
```
Resultado:
```
O valor de n1 é 2
```

No trecho acima, nós criamos um bloco “autônomo” dentro do bloco do método _main_. Nesse bloco, foi definida uma variável *n1* do tipo `int`. Depois do bloco, mas ainda dentro do método, nós tentamos usar o código `System.out.println(“O valor de n1 é “ + n1);` para exibir o valor da variável n1. No entanto, ao compilar o código nós recebemos uma mensagem de erro. Se estiver usando o NetBeans, é possível ver uma pequena lâmpada com uma bolinha vermelha em cima do número da linha, que informa que ocorreu algum erro.

Daqui para frente vamos nos referir ao bloco atrelado ao método como escopo externo, e o bloco autônomo como escopo interno.

Nota: para saber como instalar e usar o NetBeans para executar os programas vistos aqui veja nossa página sobre o NetBeans.

```java
class DemoBloco3 {
public static void main(String[] args) {
// Escopo externo
        {
// Escopo interno
            int n1 = 2;
            System.out.println("O valor de n1 é " + n1); // Compila corretamente.
        }
    }
}
```
Resultado:
```
O valor de n1 é 2
```
O mesmo código dentro do mesmo bloco que contém variável deve compilar normalmente.

Também leve em consideração que você deve declarar a variável antes de usá-la. Se movermos o trecho `int n1 = 2`; para depois da linha `System.out.println(“O valor de n1 é “ + n1);`, não vamos conseguir compilar o código.

Agora vamos pensar na situação contrária, e tentar acessar, de dentro do nosso escopo interno, uma variável definida no escopo do método.

```java
class BlocoDemo4 {
    public static void main(String[] args) {
        // Escopo externo.
        int n1 = 2;
        {
            // Escopo interno.
            System.out.println("O valor de n1 é " + n1); // Compila.
        }
    }
}
```

Resultado:
``` 
O valor de n1 é 2
```
Esse programa não apresenta nenhum erro. Isso por causa de uma característica muito importante envolvendo blocos: o código de um escopo interno tem acesso às variáveis do escopo externo que o envolve. Entretanto, se a declaração ocorrer depois da criação do bloco interno, teremos um problema.

```java
class BlocoDemo5 {
    public static void main(String[] args) {
        // Instruções do bloco do método main.
        int n1 = 2;
        {
            // Bloco autônomo.
            System.out.println("O valor de n1 é " + n1); // Não Compila.
        }
 
    }
}
```
O programa acima não compila, porque a instrução `System.out.println("O valor de n1 é " + n1);` não tem acesso à variável *n1*.

Variáveis são destruídas quando saímos do bloco que a envolve.

As variáveis declaradas em um escopo interno não pode ter o mesmo identificador de uma variável declarada no escopo externo. Essa restrição é independente do tipo, ou seja, mesmo que elas tenham tipos diferentes, não podemos prosseguir com a declaração. Por causa disso, o trecho abaixo incorre em erro durante a compilação.

```java
class BlocoDemo6 {
    public static void main(String[] args) {
// Escopo externo
        int n1 = 2; // Compila
        {
// Escopo interno
            int n1 = 2; // Não compila
            float n1 = 3F; // Não compila
        }
    }
```

É possível ter variáveis com mesmo desde que sejam em blocos diferentes, e um bloco não está dentro do outro.

```java
classBlocoDemo7 {
    public static void main(String[] args) {
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
 
```

Os blocos criados para ilustrar como as variáveis são afetadas não são úteis na vida real. Geralmente, você vai encontrar um bloco agrupando instruções para outro mecanismo da linguagem, como os métodos, as classes, as estruturas de decisão (`if...else`, `switch`), e as estruturas de loop (`for`, `while`) entre outras estruturas da lingaugem.

## Exemplos

A seguir são exibidos alguns exemplos de declarações inválidas, bem como o(s) motivo(s) e a forma correta de acordo com o conteúdo discutido nas seções anteriores.

Trecho inválido:

```java
int 1idade = 32
```

Motivo(s):

Nome de variável não pode começar com números.

Forma válida:

```java
int idade1 = 32;
```

Trecho inválido:

```java
char letr@ = ‘c’;
```

Motivo(s):

Não são permitidos caracteres especiais (e.g., @, !) nos nomes.

Forma válida:

```java
 char letra = ‘c’;
```

Trecho inválido:

```java
long numerolongo = 13.89883;
```

Motivo(s):

É necessário o “L” no final do valor.

Forma válida:

```java
long numeroLongo = 1389883L;
```

Trecho inválido:

```java
double pi = 13,141315
```

Motivo(s):

O literal do tipo double requer um . (ponto) para separar as casas decimais, e não uma virgula, seguindo os moldes da notação americana.

Toda declaração deve ser encerrada com ponto e vírgula.

Válido:

```java
double pi = 13.141315;
```

Trecho inválido:

```java
float número flutuante = 12.12
```

Motivo(s):

Variáveis do tipo `float` necessitam do prefixo “F” após o valor. Não é permitido espaços no nome da variável.

Trecho inválido:

```java
float numeroFlutuante = 12.12F;
```

## Valor Implicito

Toda variável deve ter um valor antes de ser usada. Nos exemplos usados até aqui, esse valor foi **definido explicitamente**, mas existe um caso em que as variáveis não precisam ter um valor definido pelo programador antes de ser usada.

Quando uma variável é declarada **fora de um método** sem a atribuição de um valor, o compilador se encarrega de armazenar alguma coisa nela. Como dito anteriormente, métodos serão discutidos em outro texto, mas só para ilustrar o que estou dizendo tente rodar o programa abaixo:

```java
public class ValorImplicitoDemo1 {
    // Variável recebe um valor do compilador.
    static int teste; 
    
    public static void main(String[] args) {
        System.out.println(teste);
    }
    
}
``` 
A variável *teste* guarda o valor 0, apesar disso nunca ter sido explicitamente definido. 

Note que nós adicionamos o comando `static` antes da variável. Esse comando foi necessário para fazer o programa funcionar, nesse caso. `static` nos permite usar a variável detro de métodos que também usam o comando `static` (como o método `main`) e que estão na mesma classe que a variável está, que no caso é a classe *ValorImplicitoDemo1*.

## Variáveis Estáticas

Em Java, os tipos são estáticos. Isso significa que o tipo é definido antes da execução do programa e continua o mesmo até o fim da execução. No processo de desenvolvimento em Java, isso ocorre no momento em que o bytecode é criado, ou seja, durante o processo de compilação.

Para relembrar, o bytecode é um código intermediário entre o programa que é escrito usando as palavras-chave e regras do Java, e a linguagem que o computador de fato entende. Nesse código intermediário o tipo de toda e qualquer variável deve estar definido.

Agora, vejamos um exemplo. A variável nome abaixo é do tipo `String` e continua sendo, durante a execução do programa, Desse modo, se alguma instrução tenta atribuir um valor que não é compatível com o tipo `String`, como um valor do tipo `int`, por exemplo, um erro será apontado ainda durante a compilação.

```
String nome = "Fernando";
nome = 13; // Erro - Tipos incompatíveis
```

Isso é diferente de outras linguagens em que os tipos são dinâmicos, como na linguagem JavaScript (JS). O tipo dinâmico pode ser alterado durante a execução do programa. Em JS, o seguinte código roda sem problemas:

```javascript
let nome = "Fernando";
nome = 13; // Roda sem erros
```

No programa acima, o tipo da variável nome é definido de acordo com o tipo do dado que estamos tentando guardar na variável durante a execução do programa. Quando colocamos o valor "Fernando" a variável é do tipo string, mas quando o valor é o número 13, o tipo associado a variável é alterado para um tipo numérico.

O tipo estático é justificado por defensores dessa característica com diversos argumentos, mas talvez o mais substancial deles é que ter os tipos definidos antes da execução facilita a detecção de erros resultantes de atribuições equivocadas  por parte do programador.

Por exemplo, imagine que um programa tenha duas variáveis do tipo `int`, _i_ e _j_ e também uma terceira variável _k_ do tipo `String`. Além disso, imagine que o programa precise de uma operação de atribuição:

```
i = j; 
```

mas por um erro de digitação você atribui a  variável errada:

```i = k;```

Se o tipo é dinâmico, a atribuição de _k_ à variável a não vai incorrer em um erro. Mas durante a execução do programa, nós podemos ter instruções que fazem alguma coisa com a variável _i_ que só podem ser feitas com o tipo `int`. Assim  que o computador executar qualquer uma dessas instruções teremos um erro de execução,

Se o tipo é estático, o compilador que gera o programa consegue detectar o erro, e simplesmente não compila o código.

Agora observe o programa a seguir:

```java
public class TipoEstaticoDemo1 {
    
    public static void main(String[] args) {
        int comeco = 4; // Dia de início do evento
        int fim = 10; // Dia do fim do evento
    
        int duracao = (fim - comeco);
        System.out.println("O evento 1 vai durar " + duracao + " dia(s).");
    
        // Cálculo do total de dias de duração para outro evento
        comeco = "4"; // Erro - Tipos incompatíveis
        fim = 8;
    
        duracao = (fim - comeco); // Erro - Nem chega a ser executado.
    
        System.out.println("O evento 2 vai durar " + duracao + " dia(s).");
    }
    
}
```
Esse programa calcula o total de dias da duração de dois eventos, o evento 1 e o evento 2. Para o evento 1 foi foram usadas duas variáveis que guardam o dia do mês em que o evento começa e o dia em que terminam. Para o segundo, nós reutilizamos as mesma variáveis para o mesmo propósito, mas "sem quere" especificamos o dia de início do evento no formato errado.  Por esse motivo, o compilador não compila o código.

Um código equivalente em JavaScript pode ser escrito da forma a seguir:

```javascript
let comeco = 4; // Dia de início do evento
let fim = 10; // Dia do fim do evento

let duracao = (fim - comeco);
console.log("O evento 1 vai durar", duracao, "dia(s).");

// Cálculo do total de dias de duração para outro evento
comeco = "4"; // Roda sem problemas
fim = 8;

duracao = (fim - comeco); // Erro - Nem chega a ser executado.

console.log("O evento 2 vai durar", duracao, "dia(s).");
```

Em JS o comando `let`  apenas indica a criação de uma variável, sem especifica o tipo dela. O tipo é determinado pelo valor sendo guardado nessas variáveis. Inicialmente, o tipo da variável _comeco_ é `double`, o único tipo numérico do JS, Com um valor desse tipo, a conta fim - comeco ocorre normalmente.

Depois, com a expressão `comeco = "4";` o tipo da variável é modificado para o tipo `string`, A partir desse momento, a expressão fim - comeco que vem depois não funciona mais. Como esse tipo de erro não é identificado durante um processo de compilação, ele passa despercebido até o momento em que o software é executado.

Em Java, como visto anteriormente, nós usamos a palavra-chave `var` para criar uma variável sem especificar o tipo, que é definido de acordo com o valor sendo armazenado na variável. Isso difere da tripagem dinâmica porque, ainda que de forma automática, o tipo é definido antes da execução do programa.

***

Isso é tudo sobre varáveis que temos para hoje. Não deixe de revisar o conteúdo se necessário. Também tente rodar os exemplos usados durante o texto, isso pode ajudar a entender algum aspecto que não ficou tão claro.

Para saber como executar um programa, temos um capítulo que mostra como criar seu primeiro programa \[com o NetBeans\]({% link _java/2019-01-14-java-netbeans-ptbr.md %}) e sem um \[com o Bloco de Notas\]({% link _java/2019-01-14-java-environment-ptbr.md %}).