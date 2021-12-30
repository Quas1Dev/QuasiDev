---
layout: article
permalink: 'java/:title'
title: "Operadores em Java"
description: "Conheça todos os operadores disponíveis na linguagem Java. Desde os operadores aritméticos, quanto os operadores lógicos binários"
categories: java
tags: java, operadores, bitwise, unário, ternário, binário
order: 8 

sources:
  - title: 'The Java® Language Specification - Java SE 17 Edition'
    url: 'https://docs.oracle.com/javase/specs/jls/se17/jls17.pdf'
  - title: 'O resto da divisão - Brasil Escola'
    url: 'https://brasilescola.uol.com.br/matematica/o-resto-divisao.htm'
  - title: 'Avaliação de curto-circuito'
    url: 'https://pt.wikipedia.org/wiki/Avalia%C3%A7%C3%A3o_de_curto-circuito'
  - title: 'Ponto de Código - Wikipedia'
    url: 'https://pt.wikipedia.org/wiki/Ponto_de_c%C3%B3digo'
  - title: 'Operator - Britannica'
    url: 'https://www.britannica.com/topic/operator'
  - title: 'Operators - Oracle'
    url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/operators.html'
  - title: 'Logic & Propositions - MIT'
    url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp2-2/'
  - title: 'CHAPTER 2 - Logic'
    url: 'https://www.math.fsu.edu/~pkirby/mad2104/SlideShow/s2_1.pdf'
  - title: 'Propositional Logic and the Algebra of Boole | MathFoundations273 | N J Wildberger - Insights into Mathematics - You Tube'
    url: 'https://www.youtube.com/watch?v=Dynnj_TbURw&ab_channel=InsightsintoMathematics'
  - title: 'Propositions - Math - Libretexts'
    url: 'https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/A_Spiral_Workbook_for_Discrete_Mathematics_(Kwong)/02%3A_Logic/2.01%3A_Propositions'
  - title: 'Boolean Expression - Wikipedia'
    url: 'https://en.wikipedia.org/wiki/Boolean_expression'
  - title: 'Expressions - Wikipedia'
    url: 'https://en.wikipedia.org/wiki/Expression_(computer_science)'
  - title: 'Valor de Verdade - Wikipedia'
    url: 'https://pt.wikipedia.org/wiki/Valor_de_verdade'
  - title: 'Logical operation - Computer Hope'
    url: 'https://www.computerhope.com/jargon/l/logioper.htm'
  - title: 'Relational Operator - Wikipedia'
    url: 'https://en.wikipedia.org/wiki/Relational_operator'
---

Os <dfn>operadores</dfn> são símbolos usados em {% include postLink.html text="expressões" url="https://en.wikipedia.org/wiki/Expression_(computer_science)" %} como um indicador de qual ação o computador deve executar **para gerar um valor**. Além do(s) operador(es), uma expressão também é composta por um ou mais operandos, que são valores iniciais que, de alguma forma, participam da ação especificada pelo operando. 

Um operador pode ser unário, o que significa que tem um único operando, binário, o que significa que tem dois operandos, ou ternário, o que significa que tem três operandos. Contudo, os operadores ```+``` e ```-``` podem ser usados tanto como operadores unários quanto binários, será mostrado mais adiante.

No exemplo abaixo, nós usamos o operador + (mais) para fazer uma soma entre dois números inteiros:

{% highlight java %}
int n1 = 2 + 5;
{% endhighlight %}

O operador ```+``` informa a ação que deve ser feita, que é combinar dois valores a fim de obter um total. Os literais 2 e 5 são os valores que serão combinados. Nesse caso o operador de mais está sendo um operador binário, já que são usados dois valores.

Os operadores do Java podem ser divididos em 5 grupos:

- Operadores aritméticos
- Operadores de comparação
- Operadores lógicos
- Operadores de atribuição
- Operadores bit a bit
- Operador Ternário

No Java também temos operadores adicionais que são usados em situações especiais. Nas seções seguintes nós vamos examinar os operadores aritméticos, de comparação, lógicos, de atribuição, e bit a bit.

## Operadores Aritméticos 
<dfn>Operadores aritméticos</dfn> são símbolos usados para ordenar a execução de operações matemáticas básicas. O Java possui os seguintes operadores aritméticos:

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

Os operadores ```+```, ```-```, ```*```, e ```/``` são binários, e funcionam em Java da mesma forma que eles funcionam na matemática que estamos acostumados. Apesar desses operadores serem frequentemente usados com dois literais, como 5, 3.4, 'a', eles também podem ser usados com duas variáveis, ou com uma variável e um valor.

Os operadores ```+``` e ```-``` também podem ser usados como operadores unários, ou seja, podem ser aplicados à um único valor. O  ```+``` unário é praticamente inútil, mas o ```-``` unário pode ser usado para gerar um número negativo (como já usamos varias vezes), ou inverter o sinal de um valor. 

{% highlight java %}
byte n1 = -1; // n1 recebe -1
byte n2 = -n1; // n2 recebe 1
{% endhighlight %}

Como em muitas outras linguagens de programação, o Java usa o sinal de ```+``` como um concatenador de textos (strings). Concatenar duas strings é juntar as duas em uma só, como no trecho abaixo

{% highlight java %}
String str1 = "Meteu", str2 = "essa", str3 = "?!";
String concatStr = str1 + " " + str2 + str3;
{% endhighlight %}

O conteúdo de concatStr é o texto Meteu essa?!.

O operador de módulo ```%``` retorna o resto da divisão e não o resultado. Para relembrar das aulas de matemática, o resto é o valor que sobra em uma divisão **para que o quociente/resultado continue sendo um inteiro**. Por exemplo, a divisão entre 10 e 3 terá quociente 3 e resto 1, como mostra a imagem abaixo.  

{% include post_img.html 
png="/assets/imgs_posts/java-operators/remainder.png"
webp="/assets/imgs_posts/java-operators/remainder.png"
align="center"
alt="A divisão de 10 por 3 que para antes do resultado ficar com casas decimais."
%}

O operador de incremento (```++```) adiciona 1 ao operando, e o operador de decremento (```--```) subtraí 1. Dessa forma, a operação ```n1 = n1 - 1``` equivale à ```n1--``` ou ```--n1```, ao mesmo passo que ```n1 = n1 + 1``` equivale a ```n1++``` ou ```++n1```. 

{% highlight java %}
int n1 = 1;
n1++;
System.out.println(x); // Exibe o valor de n1 que é 2
{% endhighlight %}

Eles podem ser posicionados tanto antes (prefixo) quanto depois (sufixo) de uma variável como em n1++ e ++n1 ou n1-- e --n1.  

{% highlight java %}
int n1 = 1;
++n1;
System.out.println(x); // Exibe o valor de n1 que é 2
n1++;
System.out.println(x); // Exibe o valor de n1 que é 3
{% endhighlight %}

No exemplo acima, o uso dos operadores como prefixo ou sufixo não faz diferença. Contudo, em expressões mais complexas, como 2 + n1++, existe um detalhe muito importante que deve ser considerado. Quando um operador de incremento ou decremento vem antes do operando, o compilador primeiro adiciona ou remove uma unidade e depois recupera o valor do operando para usar no resto da operação. Se o operador vier depois do operando, o valor da variável é recuperado primeiro, e depois o resto da operação é executada.

Por exemplo, considere o trecho a seguir:

{% highlight java %}
int n1 = 10;
int n2 = ++n1; // y recebe o valor de n1 que é 11
{% endhighlight %}

No trecho acima, o compilador primeiro adiciona 1 a variável n1, e depois ele recupera o valor para atribuir à variável n2. Agora, substituindo ++n1 por n1++, nós obtemos um resultado diferente, como mostrado no fragmento abaixo.

{% highlight java %}
int n1 = 10;
int n2 = n1++; // y recebe o valor atual de n1 que é 10.
{% endhighlight %}

O valor de n1 que será usado no resto da operação é recuperado antes que a incrementação seja realizada. Ou seja, quando o compilador busca o valor de n1 que será atribuído a n2 ele ainda é 10. Só depois o valor de n1 aumenta uma unidade. No final da execução e n2 vale 10 e n1 vale 11.

Os operandos envolvidos em uma declaração com esses operadores aritméticos podem ser de qualquer tipo numérico. E eles também funcionam com o tipo ```char```.  Com esse tipo, entretanto, é necessário ter em mente que o valor que representa um dado caráter no {% include postLink.html text='padrão Unicode' url='https://www.ime.usp.br/~pf/algoritmos/apend/unicode.html' %} será usado, e não o caráter em si. Por exemplo, no trecho

{% highlight java %}
char c1 = '2';
int n1 = 1 + c1;
int n2 = ++c1;
{% endhighlight %}

o valor de n1 e n2 será 51 porque o caráter 2 é representado pelo número 50 de acordo com o padrão Unicode.

## Operadores de Comparação 

Os <dfn>operadores de comparação</dfn>, também chamados de operadores relacionais, são símbolos usados para instruir o computador a testar se uma proposição que classifica um valor em relação a outro é verdadeira ou falsa. Por exemplo, na expressão ```2 > 5```, o ```>``` (chamado de 'maior que') é um operador de comparação que instrui o computador a verificar, nesse caso, se a proposição "2 é maior que 5" é verdadeira ou falsa. Note que o valor 2 é classificado como "maior" em relação a 5.

Dessa forma, passar a instrução ```2 > 5```  para o computador é como dizer " Computador, verifique para mim se '2 é maior que 5' é uma afirmação verdadeira ou falsa".

Observação: aqui nós estamos considerando uma proposição qualquer sentença declarativa que pode ser verdadeira ou falsa.

O computador gera o valor booleano ```true``` para classificar uma proposição como verdadeira, e  ```false``` para uma proposição falsa. No exemplo anterior, ```2 > 5``` deve gerar o valor ```false```, pois 2 não é maior que 5, o que torna a proposição falsa.

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
boolean b1 = n1 > 3; // b1 recebe false, já que 2 não é maior que 3.
{% endhighlight %}

Valores numéricos podem ser comparados uns com os outros, e com o tipo ```char```. Quando um valor do tipo ```char``` está sendo comparado com um valor numérico, o ponto de código correspondente ao caráter é considerado, e não o caráter em si.

Considere:

{% highlight java %}
boolean b1 = '2' == 2;
{% endhighlight %}

O valor de ```b1``` é ```false```, já que o ponto de código do caráter 2 é 50. Já a instrução abaixo deve retornar ```true```.

{% highlight java %}
boolean b1 = '2' == 50;
{% endhighlight %}

Em Java, podemos determina a igualdade ou desigualdade entre valores de qualquer tipo usando ```==``` ou ```!=``` respectivamente. Porém, os operadores de comparação, ```<```, ```>```, ```<=```, ou ```>=```, podem ser usados apenas com valores de tipos que permitem o ranqueamento de alguma forma. Ou seja, se é possível determinar que um valor é maior ou menor que o outro. Portanto, todos os operadores relacionais podem ser usados com qualquer tipo numérico e o tipo ```char```. Entretanto, valores do tipo ```boolean``` podem ser comparados apenas para determinar a igualdade ou desigualdade entre eles, pois ```true``` e ```false``` não são ordenados. Por exemplo, ```true``` > ```false``` não tem significado em Java.   

Dois valores do tipo ```String``` podem ser comparados para determinar a igualdade ou desigualdade entre eles utilizando o ```==``` ou ```!=``` respectivamente. Contudo, é necessário notar que esses operadores só terão o resultado desejado se as variáveis envolvidas foram declaradas no formato ```String identificador = "valor"```. As variáveis declaradas com a estrutura ```String identificador = new String("valor")``` sempre serão diferentes. 

## Operadores Lógicos 

Um <dfn>operador lógico</dfn> é um simbolo ou palavra usada para ordenar que o computador verifique a veracidade de uma proposição composta, ou da negação de uma proposição. 

Uma proposição composta combina duas proposições mais simples, e de quebra faz alguma afirmação a cerca do valor verdade de cada uma. É essa afirmação que o computador vai verificar e atribuir um valor verdade à ela. Por exemplo, na declaração

{% highlight java %}
boolean b1 = 2 > 1 && 3 == 3; // b1 recebe true
{% endhighlight %}

o operador ```&&``` (chamado de E lógico) é um operador lógico que instrui o computador a verificar se a proposição composta "2 é maior que 1 e 3 é igual à 3", que é formada duas proposições menores "2 é maior que 1" e "3 é igual à 3", é verdadeira ou falsa. 

Note que a proposição composta, nesse caso, implica que as duas sentenças menores são verdadeiras (como é indicado pelo conectivo "e"), de modo que se uma delas for falsa &#8213; se 2 não for maior que 1 ou 3 não for igual a 3 &#8213;, a proposição composta também é falsa. Para que ela seja verdadeira, ambos componentes devem ser verdadeiros. 

A negação de uma proposição é uma nova proposição que, caso verdadeira, significa que a proposição original é falsa, e vice-versa. Por exemplo, a expressão ```(5 > 2)``` pode ser lida como "5 é maior que 2", e a sua negação pode ser "5 não é maior que 2". 

Na prática, quando instruímos o computador a testar se a negação de uma proposição é verdadeira ou falsa, estamos apenas invertendo o resultado da avaliação da proposição original. Verificando se "5 é maior que 2" retorna ```true```, enquanto "5 não é maior que 2" retorna ```false```. 

Na tabela abaixo, nós listamos todos os operadores lógicos disponíveis, e as condições em que ```true``` ou ```false``` é retornado de acordo com o operador usado.

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
    <td>Retorna true se ambos operandos forem verdadeiros.</td>
  </tr>
  <tr>
    <td>|</td>
    <td>OU lógico</td>
    <td>Retorna true se pelo menos um dos operandos for verdadeiro.</td>
  </tr>
  <tr>
    <td>^</td>
    <td>XOR (OU exclusivo)</td>
    <td>Retorna true se apenas um dos operandos for verdadeiro.</td>
  </tr>
  <tr>
    <td>&amp;&amp;</td>
    <td>E lógico em curto-circuito</td>
    <td>Retorna true se ambos os operandos forem verdadeiros.</td>
  </tr>
  <tr>
    <td>||</td>
    <td>OU lógico em curto circuito</td>
    <td>Retorna true se pelo menos um dos operandos for verdadeiro.</td>
  </tr>
  <tr>
    <td>!</td>
    <td>NÃO lógico</td>
    <td> Retorna false caso o operando seja avaliado como verdadeiro, ou true se for falso.</td>
  </tr>
</tbody>
</table>
</div>

O operador ```&``` (E lógico) forma uma proposição composta que assume que ambas proposições que a compõem são verdadeiras. A expressão ```2 == 3 & 1 < 2```, pode ser lida como "2 é igual à 3 e 1 é menor que 2". O conectivo "e" assume que ambas afirmações são verdadeiras, de tal maneira que a avaliação dessa proposição retorna ```true``` se e somente se as duas proposições forem verdadeiras. Caso contrário, é retornado ```false```.

O operador ```|``` (OU lógico) forma uma proposição composta que assume que pelo menos uma das proposições simples é verdadeira. A expressão ```2 == 3 | 1 < 2``` pode ser lida como "2 é igual à 3 ou 1 é menor que 2". O conectivo "ou" assume que uma ou as duas afirmações são verdadeiras. Se esse for o caso, é retornado ```true```, caso contrário é retornado ```false```.

O operador ```^``` (OU exclusivo), forma uma proposição composta que assume que apenas uma das proposições que a compõem é verdadeira, enquanto a outra é necessariamente falsa. A expressão ```2 == 3 ^ 1 < 2```, pode ser lida como "Ou 2 é igual à 3 ou 1 é menor que 2, mas não os dois.". O conectivo "ou", nesse caso, exclui a possibilidade que ambos sejam verdadeiros. Desse modo, a avaliação dessa proposição retorna ```true``` se e somente se apenas uma das proposições menores forem verdadeiras.

Os operadores ```!```  (NÃO lógico) é usado para negar uma proposição. Por exemplo, a expressão ```!(2 == 2)```, pode ser lida como "2 não é igual à 2". Como dito anteriormente, a negação de uma proposição tem o valor verdade oposto da proposição original. Se "2 não é igual à 2" é uma afirmação falsa, então "2 é igual à 2" é verdadeira. Na prática, o operador apenas inverte o valor verdade da proposição original. Nesse caso,  ```2 == 2``` retorna ```true```, e este valor é então convertido para ```false```.

Os possíveis resultados para cada operando podem ser visualizados com a ajuda de uma tabela-verdade. Essa tabela mostra qual será o valor verdade da proposição composta, baseado no valor verdade das proposições menores que a compõe, e o operador usado.

Considere p e q como as proposições que são combinadas.

<div class="table-container">
<table class="table table-model-1">
<thead>
  <tr>
    <th>p</th>
    <th>q</th>
    <th>p &amp; q</th>
    <th>p | q</th>
    <th>p ^ q</th>
    <th>|p</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>true</td>
    <td>true</td>
    <td>true</td>
    <td>true</td>
    <td>false</td>
    <td>false</td>
  </tr>
  <tr>
    <td>false</td>
    <td>true</td>
    <td>false</td>
    <td>true</td>
    <td>true</td>
    <td>true</td>
  </tr>
  <tr>
    <td>true</td>
    <td>false</td>
    <td>false</td>
    <td>true</td>
    <td>true</td>
    <td>false</td>
  </tr>
  <tr>
    <td>false</td>
    <td>false</td>
    <td>false</td>
    <td>false</td>
    <td>false</td>
    <td>true</td>
  </tr>
</tbody>
</table>
</div>

Perceba como apenas o operador de negação trabalha com apenas um operando (é um operador unário), e o valor verdade deste é invertido.

No lugar de uma expressão usando os operadores relacionais, é possível utilizar os literais booleanos ou uma variável contendo um valor booleano, como no fragmento abaixo.

{% highlight java %}
boolean b1, b2;
b1 = b2 = true;
boolean b3 = b1 & b2; // b3 recebe true
boolean b4 = true & false; // b3 recebe true
{% endhighlight %}

É como combinar duas proposições que já são verdadeiras ou falsas.

### Operadores Lógicos de Curto-Circuito

O Java oferece versões alternativas dos operadores E e OU lógicos que podem ser usados para produzir código mais eficiente.

Para entender o porquê, vamos analisar o que acontece na expressão ```(a >= 0) & (b < 10)```. Para determinar o valor verdade dessa proposição, o computador primeiro avalia se a variável a é maior ou igual à 0, e depois testa se b é menor que 10. Aqui nós podemos identificar um desperdício de tempo e processamento: se o primeiro operando é falso, o resultado da avaliação é ```false```, independente do valor verdade do segundo operando. De forma similar, a expressão ```(a >= 0) | (b < 10)``` sempre retorna ```true``` se o primeiro operando for verdadeiro. 

Para essa situação nós temos os operadores ```&&``` e ```||``` podem ser usados no lugar de ```&```e ```|```, respectivamente. Esses são chamados de operadores de curto-circuito. Eles são diferentes de suas contrapartes normais na medida em que o segundo operando só é avaliado quando necessário. Ao usar o operador E lógico de curto-circuito em ```(a >= 0) && (b < 10)```, o computador vai analisar o segundo operando "b é menor que 10" apenas se o primeiro for verdadeiro. Com o OU lógico de curto-circuito ```(a >= 0) || (b < 10)``` o segundo operando só é avaliado se o primeiro for falso.

## Operadores Bit a Bit

Os <dfn>operadores bit a bit</dfn>, ou operadores binários, são símbolos usados para indicar operações que devem acontecer entre os bits dos operandos envolvidos. 

Eles são os seguintes:
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
    <td>E lógico bit a bit</td>
    <td>
      Especifica uma operação E lógico entre os bits em posições correspondentes de dois operandos. O resultado dessa operação será uma nova sequência binária. Para cada posição da nova sequência binária será gerado um bit 1 sempre que ambos bits dos operandos envolvidos, em posição correspondente, for 1. Caso contrário, será gerado o valor 0.
    </td>
  </tr>
  <tr>
    <td>|</td>
    <td>OU lógico bit a bit</td>
    <td> Especifica uma operação OU Lógico entre os bits em posições correspondentes de dois operandos. O resultado dessa operação será uma nova sequência binária. Para cada posição da nova sequência binária será gerado um bit 1 sempre que pelo menos um dos bits dos operandos envolvidos, em posição correspondente, for 1. Caso contrário, será gerado o valor 0.</td>
  </tr>
  <tr>
    <td>^</td>
    <td>OU lógico exclusivo bit a bit</td>
    <td>Especifica uma operação OU Exclusivo entre os bits em posições correspondentes de dois operandos. O resultado dessa operação será uma nova sequência binária. Para cada posição da nova sequência binária será gerado um bit 1 sempre que apenas um dos bits dos operandos envolvidos, em posição correspondente, for 1. Caso contrário, será gerado o valor 0.</td>
  </tr>
  <tr>
    <td>~</td>
    <td>NÃO lógico bit a bit (ou operador de complemento)</td>
    <td> 
      Especifica uma operação nega cada bit de um operando. O resultado dessa operação será outra sequência binária. Para cada posição da sequência binária resultante, será gerado o valor 1 se o bit do operando em posição correspondente for 0, e vice-versa.
    </td>
  </tr>
  <tr>
    <td>&gt;&gt;</td>
    <td>Operador de deslocamento para direia</td>
    <td>Desloca todos os bits de um valor um número de posições para direita, preenchendo os espaços vazios com o valor do bit que indica o sinal do número. </td>
  </tr>
  <tr>
    <td>&gt;&gt;&gt;</td>
    <td>Operador de deslocamento para direita sem sinal</td>
    <td>Desloca todos os bits de um valor um número de posições para direita, preenchendo os espaços vazios com o 0s.</td>
  </tr>
  <tr>
    <td>&lt;&lt;</td>
    <td>Operador de deslocamento para esquerda</td>
    <td>Desloca todos os bits de um valor um número de posições para esquerda, preenchendo os espaços vazios com 0s. </td>
  </tr>
</tbody>
</table>
</div>

Entender a função de cada um se baseando apenas na descrição do que fazem pode ser complicado. Então vamos ver um exemplo com cada operador.

Você já viu os operadores ```&```, ```|```, e ```^``` anteriormente sendo usados para gerar um valor booleano ```true``` ou ```false``` dependendo do valor verdade dos operandos envolvidos. Quando esses operadores são usados com valores numéricos do tipo ```byte```, ```short```, ```char```, ```int```, ou ```long```, uma operação parecida ocorre entre os bits da sequência binária que representa dois operandos. 

No fragmento

{% highlight java %}
var n1 = 5 & 6; // n1 recebe 4
var n2 = 5 | 6; // n2 recebe 7
var n3 = 5 ^ 6; // n3 recebe 1
{% endhighlight %}

os números 5 e 6 são representados pelas sequências binárias 0000 0000 0000 0000 0000 0000 0000 0101 e 0000 0000 0000 0000 0000 0000 0000 0110, respectivamente. Essas duas sequências têm o mesmo número de bits, embora com diferentes combinações de 1s e 0s. Na primeira casa da direita do 5 binário nós temos o valor 1, enquanto temos o 0 na mesma posição do 6 binário. Com base nesses dois valores, o computador cria um novo bit para a mesma posição em uma nova sequência binária. O mesmo se repete para os bits nas outras posições.

Considerando apenas os 4 primeiros bits (0101 e 0110), o número binário 0100 (4 em base 10), é gerado como resultado da operação ```5 & 6```. Compare os bits em cada posição de cada número binário envolvido com o binário resultante. O único bit 1 do binário resultante aparece na segunda casa.

Olhando da direita para esquerda, o único bit 1 do binário resultante aparece na terceira posição. Isso acontece porque apenas nessa posição nós temos 1 em ambos os operandos. A imagem abaixo ilustra bem essa expressão.

{% include post_img.html 
webp="/assets/imgs_posts/java-operators/bitwise-logical-and.webp"
png="/assets/imgs_posts/java-operators/bitwise-logical-and.png"
align="center"
alt="Operação E lógico bit a bit entre 5 e 6."
%}

Na operação ```5 | 6```, foi gerado 0111 (7 em base 10). Nesse caso, sempre que em **pelo menos** um dos operandos tem um bit 1 em uma dada posição, é gerado um bit 1 na mesma posição do binário resultante, como mostra a imagem.

{% include post_img.html 
webp="/assets/imgs_posts/java-operators/bitwise-logical-or.webp"
png="/assets/imgs_posts/java-operators/bitwise-logical-or.png"
align="center"
alt="Operação OU lógico bit a bit entre 5 e 6."
%}

Note que o último bit dos operandos 0101 e 0110, existe o 1 no primeiro operando e o 0 no segundo. Como existe o 1 pelo menos no primeiro operando, o último bit do binário 0111 é 1. O mesmo raciocínio se repete para os outros bits.

Na terceira linha, o binário 0011 (3 em base 10) é obtido com a expressão ```5 ^ 6```. Nesse caso, o bit 1 é gerado sempre que **apenas um dos operandos** tem o bit 1 em uma determinada posição, como é ilustrado na imagem.

{% include post_img.html 
webp="/assets/imgs_posts/java-operators/bitwise-logical-or-exclusive.webp"
png="/assets/imgs_posts/java-operators/bitwise-logical-or-exclusive.png"
align="center"
alt="Operação OU lógico exclusivo bit a bit entre 5 e 6."
%}

Perceba que na segunda posição de cada operando nós temos o bit 1. Como nós temos 1 em ambos operandos nessa posição, o segundo bit da sequência 0011 é 0.

O operador ```~``` (NÃO Lógico bit a bit) faz uma operação bem parecida com o ```!``` (N O Lógico), mas ao invés de inverter o valor verdade do operando, ele inverte os bits do mesmo. Desse modo, na declaração 

{% highlight java %}
var n5 = ~5; 
{% endhighlight %}

a expressão ```~n1``` gera uma nova sequência binária cujo bit em cada posição é o inverso do bit na mesma posição no operando. A imagem abaixo ilustra essa operação.

{% include post_img.html 
webp="/assets/imgs_posts/java-operators/bitwise-logical-not.webp"
png="/assets/imgs_posts/java-operators/bitwise-logical-not.png"
align="center"
alt="Operação NÃO lógico bit a bit sobre o número 5."
%}

Note que todos os bits na sequência de bits gerada, cada bit é o inverso do bit em posição equivalente na sequência binária que representa o número 5. A sequência de bits final representa o número -6.

Podemos criar uma espécie de "tabela verdade" para apresentar o resultado de cada operação, com cada combinação de 1 e 0.
<div class="table-container">
<table class="table table-model-1">
<thead>
  <tr>
    <th>p</th>
    <th>q</th>
    <th>p &amp; q</th>
    <th>p | q</th>
    <th>p ^ q</th>
    <th>~p</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>1 </td>
    <td>1</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
    <td>0 </td>
    <td>1</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>
</tbody>
</table>
</div>

Os operadores de deslocamento para esquerda (```<<```) e para direita (```>>>``` e ```>>```) são usados para movimentar os bits uma ou mais casas para esquerda ou para a direita. Ou seja, esses operadores trocam as posições dos bits na sequência. 

Nesse processo, alguns bits são empurrados para fora da sequência em uma ponta, enquanto outros são inseridos na sequência na outra ponta, onde foi aberto espaço. Dessa forma, podemos dizer que esse processo ocorre em duas etapas:

1 - Os bits são movidos um número de casas para direita ou para esquerda;
2 - Novos bits são inseridos na sequência para ocupar o espaço aberto com o passo anterior.

Por exemplo,  considere trecho abaixo:

{% highlight java %}
var n1 = -2147483628 << 2; // n1 recebe 20
var n2 = -2147483628 >> 2; // n2 recebe -536.870.911
var n3 = -2147483628 >>> 2; // n3 recebe 536.870.913
{% endhighlight %}

O número que terá os bits movidos fica à esquerda do operador, e a quantidade de casas que serão deslocadas à direita. 

Na expressão ```-2147483628 << 2```, todos os bits do número binário que equivale ao número -2.147.483.628 decimal são movidos duas casas para esquerda. Os espaços deixados para traz, nesse caso, são preenchidos com 0s, como ilustra a imagem abaixo. 

{% include post_img.html
png="/assets/imgs_posts/java-operators/shift-left.png"
webp="/assets/imgs_posts/java-operators/shift-left.webp"
align="center"
alt="Operação de deslocamento de bits para direita."
%}

Observação: os bits empurrados para fora da sequência são perdidos, e não podem ser recuperados.

Em ```-2147483628 >> 2```, todos os bits da forma binária do número -2.147.483.628 são movidos duas casas para direita, e o bit que indica o sinal do número é usado pra preencher as casas vazias deixadas para trás.

{% include post_img.html
png="/assets/imgs_posts/java-operators/shift-right.png"
webp="/assets/imgs_posts/java-operators/shift-right.webp"
align="center"
alt="Operação de deslocamento de bits para direita."
%}

Observação: O sinal é indicado pelo primeiro bit da sequência binária, sendo 1 para negativo e 0 para positivo.

A operação descrita acima é diferente de ```-2147483628 >>> 2```, na medida em que os espaços são preenchidos por 0. Ou seja, o valor do sinal não é considerado. Na prática, essa operação sempre gera um valor positivo, pois um 0 sempre vai aparecer na primeira casa, como ilustrado na imagem abaixo.

{% include post_img.html
png="/assets/imgs_posts/java-operators/shift-right-zero-fill.png"
webp="/assets/imgs_posts/java-operators/shift-right-zero-fill.webp"
align="center"
alt="Operação de deslocamento de bits para direita."
%}

É necessário tomar cuidado quando usar o operador ```>>>``` com valores negativos. Essa operação sempre gera um valor muito grande para caber em uma variável do tipo ```byte``` ou ```short```. 

Considere o trecho de código abaixo: 

{% highlight java %}
byte n1 = -6 >> 1; // Ok
byte n2 = -6 >>> 1; // Erro
{% endhighlight %}

Em ambas as variáveis n1 e n2 nós pretendemos guardar o valor que obtemos ao deslocar os bits do número -6 uma vez para a direita. As duas expressões usadas geram um valor do tipo ```int```, mas a conversão implícita ocorre apenas na primeira linha de código.

Esse comportamento é justificado pela escolha do bit que vai preencher as casas vazias após o deslocamento. No primeiro caso, o bit escolhido é aquele que representa o sinal do número. O bit do sinal é o primeiro na sequência binária 1111 1111 1111 1111 1111 1111 1111 1010 (decimal -6), ou seja, é o bit 1. Como resultado, nós obtemos o número binário 1111 1111 1111 1111 1111 1111 1111 1111 na primeira linha. Esse número é a representação do número -1.

No segundo caso, o sinal do número é completamente irrelevante. Um bit 0 será usado para preencher todas as casas que ficam vazias. Portanto, na segunda linha nós obtemos 0111 1111 1111 1111 1111 1111 1111 1111. Essa sequência binária é a representação do número 2.147.483.647.

Para entender como os números são representados vale a pena ler um pouco sobre complemento de dois (two's complement), que, geralmente, é o método usado para representar números binários considerando seus sinais. O canal do YouTube {% include postLink.html text="Computerphile" url="https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA" %} tem um ótimo vídeo (em inglês) sobre isso, o qual você pode assistir abaixo:

<div class="article-video">
  <iframe width="853" height="480" src="https://www.youtube.com/embed/lKTsv6iVxV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Operadores de Atribuição

<dfn>Operadores de atribuição</dfn> são usados para atribuir valores à variáveis. Você esteve usando o sinal de = único  até este momento. Esse operador funciona como em qualquer outra linguagem de programação: o valor à direita é guardado na variável identificada à esquerda. 

Uma característica interessante desse operador, é a possibilidade de criação de uma cadeia de atribuições. Como exemplo, considere esse fragmento:

{% highlight java %}
int n1, n2, n3;
n1 = n2 = n3 = 5; // n1, n2, e n3 recebe 5
{% endhighlight %}
 
Usando apenas uma linha de código, nós definimos 5 como valor de n1, n2 e n3. Usar uma cadeia de atribuição é uma maneira mais simples de configurar um conjunto de variáveis com um valor comum.

A linguagem Java também possui por outros sinais de atribuição, que funcionam como uma abreviação que simplifica a codificação de algumas declarações de atribuição. Comecemos com um exemplo. O fragmento

{% highlight java %}
int n1 = 5;
n1 = (int) (n1 + 5);
{% endhighlight %}

pode ser reescrita, usando um operador de atribuição especial que combina o sinal de ```+``` como sinal de ```=```, como 

{% highlight java %}
int n1 = 5;
n1 += 5;
{% endhighlight %}

O operador += atribui à n1 o valor de n1 + 5. Mais que isso, o resultado já convertido para o tipo adequado para evitar qualquer erro. Um outro exemplo, dessa vez usando uma abreviação para subtração, temos que 

{% highlight java %}
char c1 = 'b';
c1 = (char) (c1 - 1); 
{% endhighlight %}

produz o mesmo resultado que

{% highlight java %}
char c1 = 'b';
c1 -= 1;
{% endhighlight %}

Para todos os operadores que trabalham com dois operandos existe uma abreviação como as utilizadas acima. Abaixo temos uma tabela com as abreviações possíveis:

<div class="table-container">
<table class='table table-model-1'>
<thead>
  <tr>
    <th>Operador</th>
    <th>Descrição</th>
    <th>Exemplo</th>
    <th>Declaração Equivalente</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>+=</td>
    <td>Soma o valor atual da variável à esquerda com o valor que estiver à direita, e então atualiza a variável.</td>
    <td>x += 1</td>
    <td>x = n1 + 1</td>
  </tr>
  <tr>
    <td>-=</td>
    <td>Subtraí do valor atual da variável à esquerda o valor que estiver à direita, e então atualiza a variável.</td>
    <td>x -= 3</td>
    <td>x = n1 - 3</td>
  </tr>
  <tr>
    <td>*=</td>
    <td>Multiplica o valor atual da variável à esquerda pelo valor que estiver à direita, e então atualiza a variável.</td>
    <td>x *= 2</td>
    <td>x = n1 * 2</td>
  </tr>
  <tr>
    <td>/=</td>
    <td>Divide do valor atual da variável à esquerda pelo valor que estiver à direita, e então atualiza a variável.</td>
    <td>x /= 5</td>
    <td>x = n1 / 5</td>
  </tr>
  <tr>
    <td>%=</td>
    <td>Produz o módulo da divisão do valor atual da variável à esquerda pelo valor que estiver à direita, e então atualiza a variável.</td>
    <td>x %= 4</td>
    <td>x = n1 % 4</td>
  </tr>
  <tr>
    <td>&amp;=</td>
    <td>Faz a operação bitwise E, entre o valor da variável à esquerda e o valor à direita, e então atualiza a variável.</td>
    <td>x &amp;= 3</td>
    <td>x = n1 &amp; 3</td>
  </tr>
  <tr>
    <td>|=</td>
    <td>Faz a operação bitwise OU, entre o valor da variável à esquerda e o valor à direita, e então atualiza a variável.</td>
    <td>x |= 3</td>
    <td>x = n1 | 3</td>
  </tr>
  <tr>
    <td>^=</td>
    <td>Faz a operação bitwise OU exclusivo, entre o valor da variável à esquerda e o valor à direita, e então atualiza a variável.</td>
    <td>x ^= 3</td>
    <td>x = n1 ^ 3</td>
  </tr>
  <tr>
    <td>&gt;&gt;=</td>
    <td>Desloca os bits do valor da variável para direita pelo número de casas especificado à direita.</td>
    <td>x &gt;&gt;= 1</td>
    <td>x = n1 &gt;&gt; 1</td>
  </tr>
  <tr>
    <td>&lt;&lt;=</td>
    <td>Desloca os bits do valor da variável para esquerda pelo número de casas especificado à direita.</td>
    <td>x &lt;&lt;= 1</td>
    <td>x = n1 &lt;&lt; 1</td>
  </tr>
</tbody>
</table>
</div>

Como esses operadores combinam uma operação com uma atribuição, eles são formalmente chamados de operadores de atribuição compostos. São dois os benefícios que obtemos ao usar esses operadores. Primeiro, eles permitem a criação de instruções mais compactas. Segundo, em alguns casos, eles são mais eficientes, pois a variável atualizada é lida apenas uma vez. Desse modo, é comum ver esses operadores em programas profissionais escritos em Java.

## Operador Ternário (?:)
O operador ternário é usado para 

O ```?:``` é o único operador do Java que requer três operadores. Por esse motivo, ele é chamado de operador ternário. 

Sua forma geral é exp1 ? exp2 : exp3. Onde exp1 é deve ser uma expressão booleana, e exp2 e exp3 são expressões de qualquer tipo. O tipo de exp2 e exp3 devem ser iguais. 

O valor da expressão é determinado da seguinte forma:exp1 é resolvida. Caso o resultado se ```true```, então exp2 é resolvida e o resultado é o valor de toda expressão. Se exp1 retorna ```false```, exp3 é resolvida e seu resultado é o valor de toda a expressão.

Na expressão
{% highlight java %}
boolean meiaEntrada = true;
String preco = meiaEntrada ? "R$ 15,00" : "R$ 40,00";
{% endhighlight %}

o resultado da expressão com o operador ternário é "R$ 15,00", pois meiaEntrada retorna ```true```. 

{% highlight java %}
boolean meiaEntrada = false;
String preco = meiaEntrada ? "R$ 15,00" : "R$ 40,00";
{% endhighlight %}

Agora meiaEntrada retorna ```false```, portanto, o valor da expressão é "R$ 40,00". 

## Regras de Precedência e Associatividade 

Expressões podem envolver mais de uma operação. Nesse caso, o computador precisa saber o que deve ser feito primeiro, considerando que a ordem das operações podem modificar o resultado final esperado. 

Na expressão 2 + 3 * 5, o que deve ser feito primeiro? Se fizermos a conta da esquerda para a direita (a soma primeiro e então a multiplicação), nós obtemos 25, mas se começarmos pela multiplicação o resultado muda para 17. Para determinar a ordem de resolução das operações envolvidas em uma expressão, as linguagens de programação possuem regras de precedência e associatividade. 

As regras de precedência separam os operadores em níveis de prioridade. Quanto maior o nível, maior a propriedade do operador, e consequentemente a operação indicada por ele é resolvida primeiro. A tabela abaixo mostra a ordem de precedência para todos os operadores disponíveis em Java, do maior para o menor.

<table class="table table-model-1">
<thead>
  <tr>
    <th>Nível</th>
    <th>Operador(es)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>++ (sufixo)&nbsp;&nbsp;&nbsp;-- (sufixo)</td>
  </tr>
  <tr>
    <td>2</td>
    <td>++ (prefixo)   -- (prefixo)  ~   !&nbsp;&nbsp;&nbsp;+ (unário)&nbsp;&nbsp;- (unário)</td>
  </tr>
  <tr>
    <td>3</td>
    <td>*&nbsp;&nbsp;/&nbsp;&nbsp;%</td>
  </tr>
  <tr>
    <td>4</td>
    <td>+&nbsp;&nbsp;-&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>5</td>
    <td>&gt;&gt;&nbsp;&nbsp;&gt;&gt;&gt;&nbsp;&nbsp;&lt;&lt;</td>
  </tr>
  <tr>
    <td>6</td>
    <td>&gt;&nbsp;&nbsp;&gt;=&nbsp;&nbsp;&lt;&nbsp;&nbsp;&lt;=&nbsp;&nbsp;instanceof</td>
  </tr>
  <tr>
    <td>7</td>
    <td>==&nbsp;&nbsp;!=</td>
  </tr>
  <tr>
    <td>8</td>
    <td>&amp;</td>
  </tr>
  <tr>
    <td>9</td>
    <td>^</td>
  </tr>
  <tr>
    <td>10</td>
    <td>| </td>
  </tr>
  <tr>
    <td>11</td>
    <td>&amp;&amp;</td>
  </tr>
  <tr>
    <td>12</td>
    <td>||</td>
  </tr>
  <tr>
    <td>13</td>
    <td>?:</td>
  </tr>
  <tr>
    <td>14</td>
    <td>=&nbsp;&nbsp;&lt;operador&gt;= (sinal de atribuição composto)</td>
  </tr>
</tbody>
</table>

Seguindo a tabela acima, na expressão

{% highlight java %}
int n1 = 2 + 3 * 5; // n1 recebe 17
{% endhighlight %}
 
a multiplicação deve acontecer primeiro, depois a soma e então a atribuição.

Nós podemos usar parênteses para mudar a prioridade de alguma operação. Nós podemos fazer a operação 2 + 3 ser executada primeiro, por exemplo.

{% highlight java %}
int n1 = (2 + 3) * 5; // n1 recebe 25
{% endhighlight %}

Quando operadores com a mesma precedência aparecem em uma expressão, as regras de associatividade entram em cena. Todos os operadores binários são lidos da esquerda para direita, com exceção dos operadores de atribuição. Dessa forma, no texto:

{% highlight java %}
int n1 = 2 + 3 - 5; // n1 recebe 0
{% endhighlight %}

2 e 3 são somados primeiros, e do resultado é subtraído o valor 5.

E na atribuição 

{% highlight java %}
byte n1, n2, n3 = 4;
n1 = n2 = n3 += 6; // n1, n2, e n3 recebem 10
{% endhighlight %}

a operação ocorre da direita para esquerda.

---
Nessa postagem nós cobrimos a maioria dos operadores disponíveis na linguagem Java. Os operadores ```instanceof```, e ```->```, que ficaram de fora por enquanto, serão explicados no momento oportuno. 

Nossa abordagem foi bem simples, e não construímos nada complicado de fato, mas próximos posts nós vamos aprender novos construtos que podemos usar para dar maior utilidade ao conteúdo visto até o momento. Até apróxima.