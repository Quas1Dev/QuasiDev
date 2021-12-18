---
layout: article
permalink: 'java/:title'
title: "Operadores em Java"
description: "Conheça todos os operadores disponíveis na linguagem Java. Desde os operadores aritméticos, quanto os operadores lógicos binários"
categories: java
tags: java, operadores, bitwise, unário, ternário, binário
order: 8 

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
  - title: 'Statement (logic) - Wikipedia'
    url: 'https://en.wikipedia.org/wiki/Statement_(logic)'
  - title: 'Propositions - Math - Libretexts'
    url: 'https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/A_Spiral_Workbook_for_Discrete_Mathematics_(Kwong)/02%3A_Logic/2.01%3A_Propositions'
  - title: 'Boolean Expression - Wikipedia'
    url: 'https://en.wikipedia.org/wiki/Boolean_expression'
  - title: 'Expressions - Wikipedia'
    url: 'https://en.wikipedia.org/wiki/Expression_(computer_science)'
  - title: 'Proposição - Dicio'
    url: 'https://www.dicio.com.br/proposicao/'
  - title: 'Valor de Verdade - Wikipedia'
    url: 'https://pt.wikipedia.org/wiki/Valor_de_verdade'
  - title: 'Negation - Stanford'
    url: 'https://plato.stanford.edu/entries/negation/#NegNatLanMarAsy'
  - title: 'Logical operation - Computer Hope'
    url: 'https://www.computerhope.com/jargon/l/logioper.htm'
---

Os <dfn>operadores</dfn> são símbolos usados em {% include postLink.html text="expressões" url="https://en.wikipedia.org/wiki/Expression_(computer_science)" %} como um indicador de qual ação o computador deve executar **para gerar um valor**. Além do(s) operador(es), uma expressão também é composta por um ou mais operandos, que são valores iniciais que de alguma forma participam da ação especificada pelo operando. 

No exemplo abaixo, nós usamos o operador + (mais) para fazer uma soma entre dois números inteiros:

{% highlight java %}
int n1 = 2 + 5;
{% endhighlight %}

O operador + informa a ação que deve ser feita, que é combinar dois valores a fim de obter um total. Os literais 2 e 5 são os valores que serão combinados.

Os operadores do Java podem ser divididos em 5 grupos:

- Operadores aritméticos
- Operadores de comparação
- Operadores lógicos
- Operadores de atribuição
- Operadores bitwise

No Java também temos operadores adicionais que são usados em situações especiais. Nas seções seguintes nós vamos examinar os operadores aritméticos, de comparação, lógicos, de atribuição, e bitwise.

## Operadores Aritméticos 

<dfn>Operadores aritméticos</dfn> são símbolos usados para ordenar a execução de operações matemáticas básicas. O Java possuí os seguintes operadores aritméticos:

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

Os operadores ```+```, ```-```, ```*```, e ```/``` funcionam em Java da mesma forma que eles funcionam na matemática que estamos acostumados. Apesar desses operadores serem frequentemente usados com dois literais, como 5, 3.4, 'a', eles também podem ser usados com duas variáveis, ou com uma variável e um valor.

O operador de módulo ```%``` retorna o resto da divisão e não o resultado. Para relembrar das aulas de matemática, o resto é o valor que sobra em uma divisão **para que o quociente/resultado continue sendo um inteiro**. Por exemplo, a divisão entre 10 e 3 terá quociente 3 e resto 1, como mostra a imagem abaixo.  

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
x++;
System.out.println(x); // Exibe o valor de x que é 3
{% endhighlight %}

No exemplo acima, o uso dos operadores como prefixo ou sufixo não faz diferença. Contudo, em expressões mais complexas, como 2 + x++, existe um detalhe muito importante que deve ser considerado. Quando um operador de incremento ou decremento vem antes do operando, o compilador primeiro adiciona ou remove uma unidade e depois recupera o valor do operando para usar no resto da operação. Se o operador vier depois do operando, o valor da variável é recuperado primeiro, e depois o resto da operação é executada.

Por exemplo, considere o trecho a seguir:

{% highlight java %}
int x = 10;
int y = ++x; // y recebe o valor de x que é 11
{% endhighlight %}

No trecho acima, o compilador primeiro adiciona 1 a variável x, e depois ele recupera o valor para atribuir à variável y. Agora, substituindo ++x por x++, nós obtemos um resultado diferente, como mostrado no fragmento abaixo.

{% highlight java %}
int x = 10;
int y = x++; // y recebe o valor atual de x que é 10.
{% endhighlight %}

O valor de x que será usado no resto da operação é recuperado antes que a incrementação seja realizada. Ou seja, quando o compilador busca o valor de x que será atribuído a y ele ainda é 10. Só depois o valor de x aumenta uma unidade. No final da execução e y vale 10 e x vale 11.

Os operandos envolvidos em uma declaração com esses operadores aritméticos podem ser de qualquer tipo numérico. E eles também funcionam com o tipo ```char```.  Com esse tipo, entretanto, é necessário ter em mente que o valor que representa um dado caráter no {% include postLink.html text='padrão Unicode' url='https://www.ime.usp.br/~pf/algoritmos/apend/unicode.html' %} será usado, e não o caráter em si. Por exemplo, no trecho

{% highlight java %}
char c1 = '2';
int n1 = 1 + c1;
int n2 = ++c1;
{% endhighlight %}

o valor de n1 e n2 será 51 porque o caráter 2 é representado pelo número 50 de acordo com o padrão Unicode.

## Operadores de Comparação 

Os <dfn>operadores de comparação</dfn>, também chamados de operadores relacionais, são símbolos usados para instruir o computador a testar se uma proposição que classifica um valor em relação a outro é verdadeira ou falsa. Por exemplo, na expressão ```2 > 5```, ```>``` (chamado de 'maior que') é um operador de comparação que instrui o computador a verificar, nesse caso, se a proposição "2 é maior que 5" é verdadeira ou falsa. Note que o valor 2 é classificado como "maior" em relação a 5.

Observação: aqui nós estamos considerando uma proposição qualquer sentença declarativa que pode ser verdadeira ou falsa.

O computador gera o valor booleano ```true``` para classificar uma proposição como verdadeira, e  ```false``` para uma proposição falsa. No exemplo anterior, ```2 > 5``` deve gerar o valor ```false```, pois 2 não é maior que 5, o que tornando a proposição falsa.

Os <dfn>operadores de comparação</dfn>, ou operadores relacionais, de forma simples, são operadores que comparam dois operando, que são os valores sendo comparados. Uma expressão relacional tem dois operandos e um operador relacional. 

No entanto, nós podemos definir de forma mais precisa, e também mais complexa. Nesse caso, os operadores de comparação são símbolos usados para instruir o computador a testar se uma proposição que classifica um valor em relação a outro é verdadeira ou falsa. Por exemplo, na expressão ```2 > 5```, ```>``` (chamado de 'maior que') é um operador de comparação que instrui o computador a verificar, nesse caso, se a proposição "2 é maior que 5" é verdadeira ou falsa. Note que o valor 2 é classificado como "maior" em relação a 5. 

Dessa forma a instrução ```2 > 5``` passa para o computador pode interpretada como, "Computador, verifique para mim se '2 é maior que 5' é uma afirmação verdadeira".


Geralmente, é dito que dois valores estão sendo comparados para determinar se eles são iguais, um é maior que o outro, ou eles são diferentes. 

Em Java, os seguintes operadores são disponibilizados:
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
      <td>Retorna true se o operando à esquerda for maior ou igual ao da direita</td>
    </tr>
  </tbody>
</table>
</div>

Exemplo de uso:

{% highlight java %}
int n1 = 2;
boolean maiorQue = n1 > 3; // Retorna false, já que 2 não é maior que 3.
{% endhighlight %}

Valores numéricos podem ser comparados uns com os outros, e com o tipo ```char```. Quando um valor do tipo ```char``` está sendo comparado com um valor numérico, o ponto de código correspondente ao caráter é considerado, e não o caráter em si.

Considere:

{% highlight java %}
boolean saoIguais = '2' == 2;
{% endhighlight %}

O valor de ```saoIguais``` é ```false```, já que o ponto de código do caráter 2 é 50. Já a instrução abaixo deve retornar ```true```.

{% highlight java %}
boolean saoIguais = '2' == 50;
{% endhighlight %}

Em Java, podemos determina a igualdade ou desigualdade entre valores de qualquer tipo usando ```==``` ou ```!=``` respectivamente. Porém, os operadores de comparação, ```<```, ```>```, ```<=```, ou ```>=```, podem ser usados apenas com valores de tipos que permitem o ranqueamento de alguma forma. Ou seja, se é possível determinar que um valor é maior ou menor que o outro. Portanto, todos os operadores relacionais podem ser usados com qualquer tipo numérico e o tipo ```char```. Entretanto, valores do tipo ```boolean ``` podem ser comparados apenas para determinar a igualdade ou desigualdade entre eles, pois ```true``` e ```false``` não são ordenados. Por exemplo, ```true``` > ```false``` não tem significado em Java.   

Dois valores do tipo ```String``` podem ser comparados para determinar a igualdade ou desigualdade entre eles utilizando o ```==``` ou ```!=``` respectivamente. Contudo, é necessário notar que esses operadores só terão o resultado desejado se as variáveis envolvidas foram declaradas no formato ```String identificador = "valor"```. As variáveis declaradas com a estrutura ```String identificador = new String("valor")``` sempre serão diferentes. 

## Operadores Lógicos 
Os <dfn>operadores lógicos</dfn> são símbolos usados para formar uma proposição, a partir de um ou dois valores booleanos (```true``` ou ```false```) ou proposições menores (que geram valores valores booleanos no fim das contas), que será avaliada para determinar sua veracidade. 

Por exemplo, na expressão ```2 > 1 && 'f' != 'd'```, o simbolo && é um operador lógico que liga as proposições ```2 > 1``` e ```'f' != 'd'```, formando a proposição "2 é maior que 1 e f é diferente de d". 

A proposição formada tem seus componentes analisados para determinar se o todo é verdadeiro ou não. Nós podemos ver que a parte que afirma que 2 é maior que 1 é verdadeira. Da mesma forma, é possível constatar que f é diferente de d. Dessa forma, toda proposição é declarada verdadeira.

Os <dfn>operadores lógicos</dfn> são símbolos usados para formar uma proposição composta a qual podemos definir como falsa ou verdadeira, de acordo com o valor verdade das proposições menores que a compõem, ou negar uma proposição.

Os <dfn>operadores lógicos</dfn> são símbolos usados para ordenar a execução de uma operação lógica que consiste em avaliar a veracidade de uma proposição composta

formar uma proposição composta a qual podemos definir como falsa ou verdadeira, de acordo com o valor verdade das proposições menores que a compõem, ou negar uma proposição.

Por exemplo, na declaração 2 > 1 && 'f' != 'd', o simbolo && é um operador lógico que liga as proposições 2 > 1 e 'f' != 'd', formando a proposição 2 é maior que 1 e f é diferente de d.

Os <dfn>operadores lógicos</dfn> são símbolos usados para ordenar uma racionalização sobre dois valores lógicos.

Os <dfn>operadores lógicos</dfn> são símbolos usados para combinar proposições, ou para negar uma proposição. 


{% highlight java %}
2 > 5 && 3 < 10
{% endhighlight %}

o operador lógico && forma uma proposição usando duas proposições menores. Esses componentes são as operações relacionais 2 > 5 e 3 < 10, que retornam false e true, respectivamente.

A proposição formada por && é "Essa afirmação é verdadeira se 2 > 5 e 3 < 10 forem ambos verdadeiros." Nesse caso, apenas uma das expressões relacionais é verdadeira, que é o componente que afirma que o 3 é menor que 10.

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

## Operadores de Atribuição

Operadores de atribuição são usados para atribuir valores à variáveis.

No exemplo abaixo, nós usamos o operador de atribuição (=) para atribuir o valor 10 à uma variável x:

int x = 10;

O operador de atribuição-soma adiciona um valor á variável:

Uma lista de operadores de atribuição:

---