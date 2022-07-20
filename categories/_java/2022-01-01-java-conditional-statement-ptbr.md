---
title: Declarações Condicionais em Java (if e switch)
layout: article
permalink: java/:title
description: Aprenda finalmente o que são as declarações condicionais if e
  switch e como usá-los.
categories: java
tags: if, while, java, break
date: 2022-01-01T03:00:00.000Z
lastUpdated: 2022-04-21
author: Fernando
excerpt_separator: <!--more-->
sources:
  - title: Software - PCMag
    url: https://www.pcmag.com/encyclopedia/term/software
  - title: Estrutura de seleção - Wikipedia
    url: https://pt.wikipedia.org/wiki/Estrutura_de_sele%C3%A7%C3%A3o
  - title: "The Java® Language Specification: Java SE 17 Edition"
    url: https://docs.oracle.com/javase/specs/jls/se17/jls17.pdf
  - title: Switch Expressions - Oracle
    url: https://docs.oracle.com/en/java/javase/13/language/switch-expressions.html
order: 16
---

Aqui vamos entender as estruturas de decisão, e analisar as que estão disponíveis na linguagem Java, a fim de criar aplicações robustas e eficientes.
<!--more-->

## O que e Por que?

Em um programa com mais de uma instrução, normalmente, as instruções são lidas de forma contínua, linha por linha. O programinha abaixo tem duas declarações. Na primeira, duas variáveis são declaradas e atribuídas com um valor numérico. Na segunda, exibimos o resultado do produto entre as duas variáveis.
 
~~~ java
int n1 = 2, n2 = 5;
System.out.println(n1 * n2);
~~~

Essas declarações são executadas na ordem em que aparecem. Primeiro as variáveis são criadas e atribuídas, depois o resultado da multiplicação entre as duas variáveis é imprimido na tela.

No entanto, para maioria dos programas é necessário modificar essa dinâmica de leitura em algum momento, fazendo o computador pular um conjunto de instruções, ou executar um conjunto de instruções em detrimento de outro, de acordo com alguma condição. Para esse propósito temos as declarações condicionais. 
 
As <dfn>declarações condicionais</dfn>, também chamadas de estruturas de seleção, estruturas condicionais, entre outros, são comandos usados para lidar com decisões acerca de qual ou quais instruções executar em um determinado instante, durante a execução do programa. 
 
Em Java nós temos duas declarações desse tipo, o ```if``` e o ```switch```. Nas seções seguintes nós vamos entender um pouco desses dois comandos.
 
## A Declaração if
A <dfn>declaração ```if```</dfn> é usada para especificar uma condição para a execução de uma ou mais instruções. A condição é uma expressão booleana (equivalente a uma proposição em lógica matemática), ou seja, uma expressão cujo resultado é verdadeiro (```true```)ou falso(```false```). Sua forma mais simples é a seguinte:
 
~~~
if (condição) instrução;
~~~  
 
Onde o trecho condição, deve ser substituído por uma expressão booleana (e.g., ```n1 == 2```), e instrução deve ser substituído por algum comando válido na linguagem.
 
Nesse exemplo, vamos exibir uma mensagem na tela se a expressão ```20>18``` for verdadeira, ou seja, retornar ```true```.
 
~~~ java
// Se 20 for maior que 18, imprima 20 é maior que 18
if (20 > 18) System.out.println("20 é maior que 18.");

System.out.println("Próxima linha fora da estrutura if.");
~~~
 
O trecho acima pode ser lido como "Se '20 é maior que 18' é verdadeiro, então imprima "20 é maior que 18." na tela". Ou seja, apenas com o resultado da expressão sendo ```true``` é que a instrução será executada. Caso a expressão retorne ```false```, o computador pula para a próxima linha após a declaração ```if```.
 
Frequentemente, a palavra-chave ```if``` aparece acompanhada de ```else```. Esse elemento é usado para oferecer um caminho alternativo para o caso em que a expressão seja falsa. De forma geral, nós usamos o ```if..else```  da seguinte forma:
 
~~~
if (exp) // instrução
else // instrução alternativa
~~~

Em que instrução será substituída pelo comando que deve ser executado a expressão seja verdadeira, e instrução alternativa será substituída pelo comando que deve ser executado caso a expressão seja falsa. 

No trecho
 
~~~ java
var idade = 16;
if (idade >= 18) System.out.println("É maior de idade!");
else System.out.println("Você é moleque!");
~~~
 
nós verificamos se "idade é maior que 18" é verdadeiro. Com o valor armazenado na variável é 16, que é menor que 18. Como o resultado é ```false```, o texto "Você é moleque!" é exibido na tela. 

O resultado é o seguinte:

~~~
É maior de idade!
~~~

Depois de passar pela declaração ```if..else```, o computador continua da linha de código que aparece logo abaixo. Mudando o valor da variável para um valor maior ou igual a 18, a instrução ligada ao ```if``` será executada.

~~~ java
var idade = 18;
if (idade >= 18) System.out.println("É maior de idade!");
else System.out.println("Você é moleque!");

System.out.println('Fora da declaração if.');
~~~

Resultado:

~~~ 
É maior de idade!
Fora da declaração if.
~~~

Perceba que as instruções do ```if``` e do ```else``` são executadas para resultados diferentes da expressão booleana, de tal modo que elas nunca serão executadas ao mesmo tempo; se a instrução de ```if``` for executada, a de ```else``` não é, e vice-versa.
 
Nos exemplos acima nós executamos apenas uma instrução, mas também podemos definir múltiplas instruções com a ajuda dos blocos de código, conceito que discutimos em [nosso post sobre variáveis]( {% link _java/2019-01-14-java-variables-ptbr.md %}). Um bloco de código é formado com ```{```  e  ```}```.
 
A forma geral do  ```if```, usando blocos de código, é
  
~~~
if (condição){
  // Instruções 
} else {
  // Instruções alternativas
}
~~~
 
Tudo que estiver no primeiro bloco será executado se a expressão booleana retornar ```true```, enquanto tudo no bloco ```else``` será executado caso a expressão for ```false```.
 
~~~ java
byte n1 = 15;
 
// Detecta se o número é igual a 0, impedindo uma
// divisão por 0.
if (n1 != 0){
  System.out.println("O número é diferente de 0");
  n1 /= 3; // divide o número por 3
  System.out.println("O número é " + n1);
} else {
  System.out.println("O número é igual a 0");
}
~~~
 
Perceba que não é preciso ter necessariamente mais de uma instrução em cada bloco.
 
## Declarações if Aninhadas
Um ```if``` aninhado é uma declaração que está dentro de outro bloco ```if``` ou ```else```. É muito comum encontrar ```if```s aninhados. 
 
~~~ java
byte n1 = 5;
 
// Checa se o número é diferente de 0
if (n1 != 0){
  // if aninhado - Checa se n1 é divisível por 2
  if (n1 % 2 == 0){
    System.out.println("O número é par.");
  } else {
    System.out.println("O número é ímpar.");
  }
} else {
    System.out.println("O número é igual a 0.");
}
~~~
 
No programa acima nós criamos uma variável na primeira linha. Depois checamos se ela é diferente de 0. Caso positivo, nós prosseguimos para testar se o número é par, o que é determinado de acordo com o resto da divisão por 2 (se for 0, é par). Caso positivo, a mensagem "O número é par." é exibida na tela. Por outro lado, se o resultado for negativo, a sentença "O número é ímpar" é exibida. Se no ```if``` externo for determinado que n1 não é diferente de 0 (i.e., n1 é 0), então será executado o ```println``` que exibe "O número é igual a 0." na tela.
 
## Escada if-else-if
 
Usando ```if```s aninhados, é possível criar uma estrutura que testa várias condições. Essa estrutura é referida como escada ```if-else-if```, e se parece com isso:
 
~~~
if (condição1){
  Instruções
} else if (condição2){
  Instruções
} else if (condição3){
  Instruções
}
.
.
.
else {
  Instruções
}
~~~
 
Podemos omitir as chaves caso apenas uma instrução for especificada para cada ```if``` e ```else```. 
 
~~~ java
if (exp1)
  Instrução
else if (exp2)
  Instrução
else if (exp2){
  Instruções
}
.
.
.
else 
  Instrução
~~~
 
Perceba que foi mantido o bloco de código de um dos ```if```s. Isso é apenas para mostrar que é permitido ter blocos de instrução em um ```if``` aninhado, mesmo que os outros elementos na "escada" não tenham.
 
As expressões condicionais serão avaliadas de cima para baixo. Assim que uma condição verdadeira é encontrada, a declaração associada a ela é executada, e o resto da escada é ignorado. Se nenhuma das condições retornar ```true```, o último ```else``` é executado. Nada acontece se não houver um último ```else``` e nenhuma das condições forem verdadeiras.
 
O programa abaixo demonstra o funcionamento do if-else-if.
 
~~~ java
// Iniciando n1
int n1 = 10;
  
if (n1 < 10)
  System.out.println("n1 é menor que 10.");
 
else if (n1 < 15) 
  System.out.println("n1 é menor que 15.");

else if (n1 < 20) 
  System.out.println("n1 é menor que 20.");

else
  System.out.println("n1 é maior que ou igual a 20.");

~~~
 
O programa produz o seguinte resultado:
 
~~~
n1 é menor que 15.
~~~
 
## Declaração switch
A <dfn>declaração ```switch```</dfn>, é uma estrutura usada para determinar quais instruções devem ser executadas, dependendo do valor de uma expressão. A escolha é feita da seguinte forma: o resultado de uma expressão, que é chamada de expressão de controle, é comparado com uma série de constantes, que estão associados a uma sequência de instruções. Quando uma combinação é encontrada, as instruções associadas com a constante são executadas. 
 
Esse construto é como uma versão alternativa da estrutura if-else-if discutida na seção anterior. 
 
A sintaxe geral desse comando é:
 
~~~
switch (expressão) {
  case constante1:
    Instruções
    break;
  case constante2:
    Instruções
    break;
  default:
    Instruções
    break;
}
~~~
 
As constantes que são comparadas com o valor da expressão (chamada de expressão de controle) são acompanhadas da palavra-chave ```case```. A ideia é que cada constante representa uma possível situação do valor da variável. Como em "Pode ser o caso de a expressão ter o valor 2". As expressões que serão executadas quando um caso é selecionado são apresentadas após o sinal de dois-pontos. O comando ```break``` indica o fim do conjunto de instruções associados ao caso.  O caso é selecionado quando é identificada uma correspondência entre o valor da expressão de controle e uma constante, ou seja, quando é identificado que eles são iguais.

O valor da expressão pode ser do tipo ```byte```, ```short```, ```int```, ```char```, ```String```, ou uma enumeração (será discutido em um futuro post). Frequentemente, a expressão de controle é apenas uma variável, ao invés de um arranjo de operadores e operandos.

Geralmente, as constantes são um literal do tipo ```int``` (e.g., 2) ou ```char``` (e.g., 'c'), no entanto, qualquer expressão constante, cujo resultado não seja um valor do tipo ```float``` ou ```double```, pode ser usada. 

Nesse momento, nós precisamos definir o que é uma constante. Uma constante é uma um literal ou expressão, cujo resultado pode ser determinado durante a compilação do código, quando o bytecode é gerado. Por exemplo, no trecho
 
~~~ java
byte n1 = 3 + 5;
~~~
 
a expressão aritmética ```3 + 5``` pode ser resolvida durante o processo de compilação. No final do processo, a expressão é substituída pelo seu resultado, ou seja, a expressão ```3 + 5``` é trocada por 8. Uma expressão constante sempre poderá ser substituída por um valor de algum tipo primitivo ou uma ```String```. 
 
Esse tipo de expressão pode conter apenas os seguintes elementos:
 
- Literais de tipos primitivos (e.g., 2, 'c') e strings (e.g., "Frank");
- O operador para conversão de tipo, ```(tipo)```;
- Os operadores unários ```+```, ```-```, ```~```, e ```!```;
- Os operadores binários ```*```, ```/```, ```%```, ```+```, ```-```, ```<<```, ```>>```, ```>>>```, ```<```, ```<=```, ```>```, ```>=```, ```==```, ```!=```, ```&```, ```^```,```|```, ```&&``` e ```||```;
- O operador ternário ```?:```;
- Expressões constantes entre parênteses;
- Nomes simples que se referem a constantes;
- Nomes qualificados, na forma ```<TypeName> . <Identifier>``` que se refere a variáveis constantes.

Contudo, considere que a expressão não pode resultar em um valor do tipo ```double``` ou ```float```, mesmo que esse valor possa ser determinado durante a compilação. Desse modo, A declaração abaixo é inválida:

~~~ java
// Esse código gera um erro de compilação
switch (n1){
  case 10 / 3: // Erro
    System.out.println("Esse texto não é exibido.");
    break;
  case 1.3: // Erro
    System.out.println("Esse texto não é exibido.");
    break;
}
~~~

Nada fora da lista pode fazer parte de uma expressão constante. Por exemplo, o seguinte trecho resulta em erro:
 
~~~ java
byte n1 = 8;
 
byte n2 = 3, n3 = 5;

switch (n1){
  case 3 : 
    System.out.println("n1 é igual a 3.");
    break;
  case n2 + n3: // Erro 
    System.out.println("n1 é igual a 8.");
    break;
}
~~~
 
A linha que dá erro contém uma expressão que envolve variáveis. A presença de variáveis resulta em uma expressão cujo valor não pode ser determinado pelo compilador com absoluta certeza. Portanto, ela não pode ser considerada uma constante.
 
Observação: Nós ainda não vimos alguns dos elementos listados, como os nomes qualificados e os nomes simples que se referem a constantes. Esses serão explicados em breve. 
 
Frequentemente, são usados apenas literais em cada ```case```, ao invés de uma expressão mais longa. No fragmento 
 
~~~ java
char c1 = 'c';
 
switch (c1){
  case 'b':
    System.out.println("O valor de c1 é b.");
    break;
  case 'c':
    System.out.println("O valor de c1 é c.");
    break;
}
~~~
 
nós usamos o ```switch``` para comparar o valor da variável c1 com 'b' e 'c'. Caso o valor de c1 for igual a 'b', exibimos "O valor de c1 é b." na tela. Por outro lado, se for igual a 'c', nós mostramos o texto "O valor de c1 é c.". 

Dois ou mais casos não podem ter o mesmo valor. Caso contrário ocorre um erro de compilação. Dessa forma, o seguinte fragmento gera um erro:
 
~~~ java
byte n1 = 7;
 
switch (n1){
  // case 7
  case 2 + 5:
    System.out.println("O valor de c1 é 7.");
    break;
  // case 7
  case 10 - 3: // Erro
    System.out.println("O valor de c1 é 7.");
    break;
}
~~~
 
No trecho acima temos uma estrutura ```switch``` com dois casos. Em ambos uma expressão aritmética gera o valor que será comparado com o valor da expressão de controle. Como as expressões aritméticas geram o mesmo valor, que é 7, um erro de compilação é gerado.
 
Além de não ser repetido, o tipo do valor em cada ```case``` deve ser compatível com o tipo do valor da expressão de controle.
 
~~~ java
// Inicializa a variável que será a expressão de controle
byte n1 = 15;
 
switch (n1){
  case 2:
    System.out.println("n1 é 2.");
    break;
  case (long) 3: // Erro
    System.out.println("n1 e n2 são iguais!");
    break;
}
~~~
 
No trecho acima, o segundo case possui um valor constante que foi convertido para o tipo ```long```, usando o comando ```(long)```. Como o valor da expressão de controle é do tipo ```byte```, o segundo ```case``` gera um erro de compilação. 
 
No primeiro caso, apesar do literal 2 ser do tipo ```int```, nenhum erro é gerado. Isso acontece porque os literais inteiros podem ser implicitamente convertidos para um tipo menor que ```int```, como é o tipo ```byte```, desde que ele possa ser representado pelo tipo menor sem risco de perder informação. 2 pode ser armazenado no tipo ```byte``` sem problemas, então ele pode ser comparado como valor da expressão de controle.
 
Podemos definir um bloco que será executado caso nenhum ```case``` tenha correspondido ao valor da expressão de controle. Para isso, nós usamos o comando ```default```. Esse comando é opcional. A única consequência de sua ausência é que não nenhum bloco de código é definido para situações em que nenhum caso é selecionado.
 
~~~ java
int n1 = 5;
 
switch(n1){
  case 0:
    System.out.println("n1 é igual a 0.");
    break;
  case 1: 
    System.out.println("n1 é igual a 1.");
    break;
  case 2:
    System.out.println("n1 é igual a 2.");
    break;
  default:
    System.out.println("n1 é maior que 2 ou menor que 0.");
}
~~~
 
Resultado:
~~~ 
n1 é maior que 2 ou menor que 0.
~~~
 
No trecho acima as instruções associadas ao comando ```default``` são executadas já que o valor de n1 não equivale a nenhuma das opções.
 
Perceba que não há necessidade de incluir o comando ```break``` para sinalizar o fim do bloco ```default```. A execução termina quando o fim do corpo do ```switch``` é encontrado. Mas é imperativo a presença dele nos casos.
 
Se removermos o comando ```break``` dos casos, o computador vai executar tanto as instruções associadas com o ```case``` correspondente, quanto as instruções de todos os ```case```s que vem logo em seguida, até que um comando ```break``` ou o final do ```switch``` seja encontrado, como no exemplo abaixo:
 
~~~ java
int n1 = 1;
 
switch(n1){
  case 0:
    System.out.println("n1 é igual a 0.");
  case 1: 
    System.out.println("n1 é igual a 1.");
  case 2:
    System.out.println("n1 é igual a 2.");
  default:
    System.out.println("n1 é maior que 2 ou menor que 0.");
}
~~~
 
Resultado:
 
~~~
n1 é igual a 1.
n1 é igual a 2.
n1 é maior que 2 ou menor que 0.
~~~
 
Agora, o código associado ao ```case 1```, ```case 2``` e ao ```default``` são executados. 
 
```case```s vazios também são permitidos. No fragmento abaixo, uma mesma frase é exibida na tela caso o valor da expressão de controle for 0, 1, ou 2.
 
~~~ java
int n1 = 2;
 
switch(n1){
  case 0:
  case 1: 
  case 2:
    System.out.println("n1 é 0, 1 ou 2.");
    break;
  default:
    System.out.println("n1 é maior que 2 ou menor que 0.");
}
~~~
 
O programa acima gera o seguinte resultado:
 
~~~ 
n1 é 0, 1 ou 2.
~~~
 
Essa estrutura é muito comum quando múltiplas opções devem acionar o mesmo comportamento.

## O Construto ->
A partir do Java SE 12, nós podemos usar ```->``` no lugar de ```:``` nos ```case```s de um ```switch```. Por exemplo:

~~~
switch (expressão) {
case constante1, constante2, ..., constanteN -> instrução;
}
~~~ 

Nós podemos reescrever nosso último exemplo da seção anterior usando a seta no lugar dos dois pontos:

~~~ java
int n1 = 2;
 
switch(n1){
  case 0, 1, 2 -> System.out.println("n1 é 0, 1 ou 2.");
  default -> System.out.println("n1 é maior que 2 ou menor que 0.");
}
~~~

Resultado:
 
~~~ 
n1 é 0, 1 ou 2.
~~~

Note que não foi necessário incluir o comando ```break```. Essa é uma das vantagens desse construto: apenas o código do lado direito da seta é executado, as instruções das outras opções são ignoradas. Dessa forma, não dependemos do comando ```break``` para impedir que instruções desnecessárias sejam executadas em um bloco ```switch```. Também é interessante notar a concisão da declaração escrita dessa forma.

Também é possível usar um bloco de códigos para possibilitar mais de uma instrução para o ```case```.

~~~ java
int n1 = 0

switch (n1){
  case 0, 1, 2 -> {
    System.out.println("n1 pode ser 0.");
    System.out.println("n1 pode ser 1.");
    System.out.println("n1 pode ser 2.");
  }

  default -> {
    System.out.println("n1 é maior que 2 ou menor que 0.");
  }
}
~~~

Resultado:
~~~
n1 pode ser 0.
n1 pode ser 1.
n1 pode ser 2.
~~~

## switch Aninhado
 
Assim como podemos ter um comando ```if``` dentro de outro, também é possível "aninhar" o ```switch```, i.e., podemos incluir uma declaração ```switch``` como parte da sequência de instruções associadas a um ```case``` de outro ```switch```. 
 
Como cada ```switch``` tem o seu próprio bloco, não ocorrem conflitos entre as constantes do ```switch``` interno e do ```switch``` externo. Desse modo, o fragmento abaixo é completamente válido:

~~~ java
// Inicializa controladores
int n1 = 2;
int n2 = 1;
 
// Inicia switch externo
switch (n1){
  case 1:
    System.out.println("Opção 1 do switch externo.");
    break;
  case 2:
//  Inicia switch interno
    switch (n2){
      case 1: 
        System.out.println("Opção 1 do switch interno.");
        break;
      case 2:
        System.out.println("Opção 2 do switch interno.");
        break;
      default:
        System.out.println("Opção padrão do switch interno.")
    }
  default:
    System.out.println("Opção padrão do switch externo.");
}
~~~ 

Resultado:

~~~
Opção 1 do switch interno.
~~~

## Expressões switch
<dfn>Expressões ```switch```</dfn> são estruturas ```switch``` que, ao serem resolvidas, podem retornar um valor.

~~~ java
char c1 = 'J';
int n1;

n1 = switch (c1){
  case 'g' -> 20;
  case 'J' -> 21 + 5;
  case 'L' -> 252 * 5;
  default -> 0;
};

System.out.println(n1);
~~~

Resultado:

~~~ 
26
~~~

No trecho acima, a variável n1 recebe o valor gerado pela expressão ```switch```. Nesse caso, a instrução associada ao ```case 'J'``` foi executada. Com símbolo ```->```, se a instrução que estiver do lado direito for uma expressão, seu valor é retornado. 

Expressões ```switch``` precisam cobrir todos os possíveis valores da expressão de controle. Para isso contamos é inevitável o uso do comando ```default``` para cobrir casos não especificados. No exemplo anterior, nós especificamos qual valor deve ser retornado apenas para os casos em que c1 guarda os caracteres 'G', 'J', e 'L', para todos os outros casos é retornado o que está especificado no ```default```.

Como essa expressão está fazendo parte de uma instrução, que nesse caso é uma atribuição, foi necessário incluir o ponto e vírgula no final.

Ainda é possível usar a forma tradicional de escrever os rótulos como ```case constante:``` em expressões ```switch```. Contudo, será necessário usar o comando ```yield``` para especificar qual valor uma opção deve retornar. Vamos reescrever o nosso último exemplo usando essa convenção:

~~~ java
char c1 = 'J';
int n1;

n1 = switch (c1){
  case 'g': 
    yield 20;
  case 'J':
    yield 21 + 5;
  case 'L': 
    yield 252 * 5;
  default : 
    yield 0;
};

System.out.println(n1);
~~~

Resultado:

~~~ 
26
~~~

Como pode ver, o resultado é o mesmo que a versão anterior. 

O comando ```yield``` também deve ser empregado quando estamos usando  ```case valor ->``` com um bloco de códigos. Blocos de códigos podem ser úteis quando precisamos de múltiplas declarações para um ```case```.

No fragmento 

~~~ java
char c1 = 'J';
int n1;

// Determina o valor de n1
n1 = switch (c1){
  case 'G'-> {
    char retVal = (char) (c1 + 6);
    yield retVal;
  }
  case 'J' -> {
    char retVal = (char) (c1 + 3);
    yield retVal;
  }
  case 'L' -> {
    char retVal = (char) (c1 + 1);
    yield retVal;
  }
  default -> {
    yield c1;
  }
};

// Exibe o valor de n1
System.out.println(n1);
~~~

o ```yield``` foi usado para especificar o valor retornado por cada opção porque um bloco de código (tudo desde ```{``` até ```}```) foi usado.

Expressões ```switch``` não servem apenas para decidir qual valor armazenar em uma variável; elas podem ser usadas em qualquer lugar em que uma expressão é aceita.

Por exemplo:

~~~ java
int n1 = 2;

// switch usado para gerar a expressão de controle
// de outro switch
switch ( switch (n1) {  
           case 1 -> 'a'; 
           case 2 -> 'b';
           default -> '0';
         }){
// Imprime uma frase conforme o valor da expressão switch 
  case 'a' -> System.out.println("Switch retornou a.");
  case 'b' -> System.out.println("Switch retornou b.");
}
~~~

## Quando usar switch ou o if-else-if?
 
A declaração ```switch``` pode oferecer maior performance, mas outras características devem ser levadas em conta na hora de escolher entre os dois construtos.
 
A legibilidade do código é um fator importante a se considerar. Implemente a solução que parecer mais limpa e fácil de manter. Essa percepção é bem subjetiva, de todo modo. 
 
Não é possível usar valores do tipo ```float``` ou ```double``` em declarações ```switch```, então deve-se preferir o ```if``` nesse caso.
 
O ```switch```, geralmente, é usado quando temos um conjunto de valores possíveis para a expressão de controle bem definido. 

---

Aprendemos como usar as estruturas de decisão ```if``` e ```switch``` para definir rumos diferentes de acordo com a situação no momento. Entendemos o comportamento deles quando são aninhados, isto é, colocados em outras estruturas de decisão. E por fim, discutimos de forma breve qual delas usar em determinadas situações. 

As estruturas de decisão fazem parte de uma categoria maior, chamada estruturas de controle. Dessa categoria também fazem parte as estruturas de repetição, das quais falaremos no próximo texto sobre o Java.