---
layout: article
permalink: 'java/:title'
title: "Operadores em Java"
description: "Conheça todos os operadores disponíveis na linguagem Java. Desde os operadores aritméticos, quanto os operadores lógicos binários"
categories: java
tags: java, operadores, bitwise, unário, ternário, binário

sources:
  - title: "Java Operators - W3Schools"
    url: 'https://www.w3schools.com/java/java_operators.asp'
  - title: 'O resto da divisão - Brasil Escola'
    url: 'https://brasilescola.uol.com.br/matematica/o-resto-divisao.htm'
  - title: 'Avaliação de curto-circuito'
    url: 'https://pt.wikipedia.org/wiki/Avalia%C3%A7%C3%A3o_de_curto-circuito'
  - title: 'Is it possible to declare a variable without using "new" like "String" class - Respondido por Eran - Stack Overflow'
    url: 'https://stackoverflow.com/questions/29726984/is-it-possible-to-declare-a-variable-without-using-new-like-string-class'
  - title: 'Ponto de Código - Wikipedia'
    url: 'https://pt.wikipedia.org/wiki/Ponto_de_c%C3%B3digo'
  - titile: 'How Do I Compare Strings in Java? - DZone'
    url: 'https://dzone.com/articles/how-do-i-compare-strings-in-java#:~:text=In%20String%2C%20the%20%3D%3D%20operator,Otherwise%2C%20it%20will%20return%20false%20.'
  - title: 'How "==" operator compare references? mean internal working of "==" operator - Respondido por christopher - Stack Overflow'
    url: 'https://stackoverflow.com/questions/26742042/how-operator-compare-references-mean-internal-working-of-operator'
  - title: 'Operator - Britannica'
    url: 'https://www.britannica.com/topic/operator'
  - title: 'Logic & Propositions - MIT'
    url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp2-2/'
  - title: 'CHAPTER 2 - Logic'
    url: 'https://www.math.fsu.edu/~pkirby/mad2104/SlideShow/s2_1.pdf'
  - title: 'Dr. Penelope Kirby - Library'
    url: 'https://www.math.fsu.edu/~pkirby/mad2104/SlideShow/?C=M;O=A'
  - title: 'Propositional Logic and the Algebra of Boole | MathFoundations273 | N J Wildberger - Insights into Mathematics - You Tube'
    url: 'https://www.youtube.com/watch?v=Dynnj_TbURw&ab_channel=InsightsintoMathematics'
---

Os operadores são usados para executar operações em variáveis e valores.

No exemplo abaixo, nós usamos o operador + para somar dois valores:

Apesar do operador de adição ser frequentemente usado para adicionar dois valores, como no exemplo mencionado, ele também pode ser usado para adicionar duas variáveis, ou uma variável e um valor.

O Java divide os operadores nos seguintes grupos:

Operadores aritméticos
Operadores de atribuição
Operadores de comparação
Operadores lógicos
Operadores bitwise


## Operadores Aritméticos 

<dfn>Operadores aritméticos</dfn> são símbolos usados para executar operações matemáticas comuns.

O Java possuí os seguintes operadores aritméticos:
<div class="table-container">
<table class="table table-model-1">
<thead>
  <tr>
    <th>Operador</th>
    <th>Nome</th>
    <th>Descrição</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>+</td>
    <td>Mais </td>
    <td>Denota uma soma entre dois valores</td>
  </tr>
  <tr>
    <td>-</td>
    <td>Menos</td>
    <td>Especifica uma subtração entre dois valores</td>
  </tr>
  <tr>
    <td>*</td>
    <td>Vezes</td>
    <td>Efetua a multiplicação entre dois valores</td>
  </tr>
  <tr>
    <td>/</td>
    <td>Dividido por</td>
    <td>Determina uma divisão entre dois valores </td>
  </tr>
  <tr>
    <td>++</td>
    <td>Operador de Incremento</td>
    <td>Adiciona uma unidade ao valor de uma variável</td>
  </tr>
  <tr>
    <td>--</td>
    <td>Operador de Decremento</td>
    <td>Diminui uma unidade do valor de uma unidade</td>
  </tr>
</tbody>
</table>
</div>

Os operadores ```+```, ```-```, ```*```, e ```/``` funcionam em Java da mesma forma que eles funcionam na matemática que estamos acostumados. 

O operador de módulo ```%``` retorna o resto da divisão e não o resultado. Para relembrar, o resto é o valor que sobra em uma divisão **para que o quociente/resultado continue um inteiro**. Por exemplo, a divisão entre 10 e 3 terá quociente 3 e resto 1, como mostra a imagem abaixo.  

[IMAGEM]

O operador de incremento (```++```) subtrai 1 do seu operando, e o operador de decremento (```--```) subtraí 1. Dessa forma, a operação x = x - 1 equivale à x--, ao mesmo passo que x = x + 1 equivale a x++. 

{% highlight java %}
int x = 1;
x++;
System.out.println(x); // Exibe o valor de x que é 2
{% endhighlight %}

Eles pode ser posicionados tanto antes (prefixo) quanto depois (sufixo) de uma variável como em x++ e ++x ou x-- e --x.  

{% highlight java %}
int x = 1;
++x;
System.out.println(x); // Exibe o valor de x que é 2
{% endhighlight %}

No exemplo acima, o uso dos operadores como prefixo ou sufixo não faz diferença. Contudo, em expressões mais complexas, como 2 + x++, existe um detalhe muito importante que deve ser considerado. Quando um operador de incremento ou decremento vem antes do operando, o compilador primeiro adiciona ou remove uma unidade e depois recupera o valor do operando para usar no resto da uma operação. Se o operador vier depois do operando, o compilador primeiro recupera seu valor, e depois executa a operação especificada.

Por exemplo, considere o trecho a seguir:

{% highlight java %}
int x = 10;
int y = ++x; // y recebe o valor de x que é 11
{% endhighlight %}

No trecho acima, o compilador primeiro adiciona 1 a variável x, e depois ele recupera o valor para atribuir à variável y. 

{% highlight java %}
int x = 10;
int y = x++; // y recebe o valor atual de x que é 10.
{% endhighlight %}

O valor de x á ser usado no resto da operação é recuperado antes que a incrementação seja realizada. Ou seja, quando o compilador busca o valor de x que será atribuído á y ele ainda é 10, só depois o valor de x aumenta uma unidade. No final da execução x vale 11 e y vale 10.

Os operandos envolvidos em uma declaração com esses operadores aritméticos podem ser de qualquer tipo numérico. E eles também funcionam com o tipo ```char```.  Com esse tipo, entretanto, é necessário ter em mente que o valor que representa um dado caráter no padrão Unicode será usado, e não o caráter em si. Por exemplo, no trecho

{% highlight java %}
char c1 = '2';
int n1 = 1 + c1;
int n2 = ++c1;
{% endhighlight %}

o valor de n1 e n2 será 51 porque o caráter 2 é representado pelo número 50 de acordo com o padrão Unicode.

## Operadores de Comparação 

Os operadores de comparação, também chamados de operadores relacionais, são construtos que servem para avaliar as características de dois valores, a fim de verificar se uma afirmação pode ser feitas sobre eles. Por exemplo, o operador < (menor que) ordena que o computador verifique se podemos dizer que o valor do operando a direita é menor que o operando á esquerda.

Em Java, os seguintes operadores são disponibilizados:
<div class="table-container">
<table>
  <thead>
    <tr>
      <th>Operador</th>
      <th>Nome</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>==</td>
      <td>Igual á</td>
      <td>Retorna true se os operandos forem iguais</td>
    </tr>
    <tr>
      <td>!=</td>
      <td>Diferente de </td>
      <td>Retorna true se os operandos são diferentes</td>
    </tr>
    <tr>
      <td>&gt;</td>
      <td>Maior que</td>
      <td>Retorna true se o operando à esquerda for maior que o da direita</td>
    </tr>
    <tr>
      <td>&lt;</td>
      <td>Menor que </td>
      <td>Retorna true se o operando à esquerda for menor que o da direita</td>
    </tr>
    <tr>
      <td>&lt;=</td>
      <td>Menor ou igual á</td>
      <td>Retorna true se o operando à esquerda for menor ou igual ao da direita</td>
    </tr>
    <tr>
      <td>&gt;=</td>
      <td>Maior ou igual à </td>
      <td>Retorna true se o operando à equerda for maior ou igual ao da direita</td>
    </tr>
  </tbody>
</table>
</div>

O resultado de qualquer operação de comparação será um valor booleano, ou seja, é retornado true (verdadeiro) ou false (falso). 

Por exemplo:

{% highlight java %}
int n1 = 2;
boolean maiorQueTres = n1 > 3; // Retorna false, já que 2 não é maior que 3.
{% endhighlight %}

Valores numéricos podem ser comparados uns com os outros, e com o tipo ```char```. Quando um valor do tipo ```char``` está sendo comparado com um valor numérico, o ponto de código correspondente ao caráter é considerado, e não o caráter em si.

Considere:

{% highlight java %}
boolean saoIguais = '2' == 2;
{% endhighlight %}

O valor de ```saoIguais``` é ```false```, já que o ponto de código do caráter 2 é 50. Já a instrução abaixo deve retornar true.

{% highlight java %}
boolean saoIguais = '2' == 50;
{% endhighlight %}

Em Java, podemos determina a igualdade ou desigualdade entre valores de qualquer tipo usando ```==``` ou ```!=``` respectivamente. Porém, os operadores de comparação, <, >, <=, ou >=, podem ser usados apenas com valores de tipos que permitem o ranqueamento de alguma forma. Ou seja, se é possível determinar que um valor é maior ou menor que o outro. Portanto, todos os operadores relacionais podem ser usados com qualquer tipo numérico e o tipo ```char```. Entretanto, valores do tipo ```boolean ``` podem ser comparados apenas para determinar a igualdade ou desigualdade entre eles, pois ```true``` e ```false``` não são ordenados. Por exemplo, ```true``` > ```false``` não tem significado em Java.   

Dois valores do tipo ```String``` podem ser comparados para determinar a igualdade ou desigualdade entre eles utilizando o ```==``` ou ```!=``` respectivamente. Contudo, é necessário notar que esses operadores só terão o resultado desejado se as variáveis envolvidas foram declaradas no formato ```String identificador = "valor"```. As variáveis declaradas com a estrutura ```String identificador = new String("valor")``` sempre serão diferentes. 

## Operadores Lógicos 
Os <dfn>operadores lógicos</dfn> são símbolos usados para formar uma proposição/boolean expression a partir de um ou mais valores booleanos ou proposições menores (que geram valores valores booleanos no fim das contas).
 Por exemplo, na expressão 

{% highlight java %}
2 > 5 && 3 < 10
{% endhighlight %}

o operador lógico && forma uma proposição usando duas proposições menores. Esses componentes são operações relacionais, que também 
checa se é possível afirmar que ambas as operações relacionais 2> 5 e 3 < 10 retornam verdadeiro.

<div class="table-container">
<table>
<thead>
  <tr>
    <th>Operador</th>
    <th>Nome</th>
    <th>Descrição</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>&amp;</td>
    <td>E lógico</td>
    <td>Retorna true se ambos os valores forem verdadeiros.</td>
  </tr>
  <tr>
    <td>|</td>
    <td>OU lógico</td>
    <td>Retorna true se pelo menos um dos valores for verdadeiro.</td>
  </tr>
  <tr>
    <td>^</td>
    <td>XOR (OU exclusivo)</td>
    <td>Retorna true se apenas um dos valores for verdadeiro.</td>
  </tr>
  <tr>
    <td>&amp;&amp;</td>
    <td>E lógico em curto-circuito</td>
    <td>Retorna true se ambos os valores forem verdadeiros.</td>
  </tr>
  <tr>
    <td>||</td>
    <td>OU lógico em curto circuito</td>
    <td>Retorna true se pelo menos um dos valores for verdadeiro.</td>
  </tr>
  <tr>
    <td>!</td>
    <td>NÃO lógico</td>
    <td>Retorna true se o valor for false, ou false se o valor for true.</td>
  </tr>
</tbody>
</table>
</div>

## Operadores de atribuição

Operadores de atribuição são usados para atribuir valores à variáveis.

No exemplo abaixo, nós usamos o operador de atribuição (=) para atribuir o valor 10 à uma variável x:

O operador de atribuição-soma adiciona um valor á variável:

Uma lista de operadores de atribuição:
---