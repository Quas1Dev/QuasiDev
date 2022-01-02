---
title: 'Declarações Condicionais em Java - if e switch Explicados'
layout: article
---
Software - PCMag
https://www.pcmag.com/encyclopedia/term/software
https://pt.wikipedia.org/wiki/Estrutura_de_sele%C3%A7%C3%A3o

Java if-else-if ladder with Examples - Geeks For Geeks
https://www.geeksforgeeks.org/java-if-else-if-ladder-with-examples/

Constant Expressions - Rip Tutorial
https://riptutorial.com/java/example/26261/constant-expressions

Expressions - Oracle
https://docs.oracle.com/javase/specs/jls/se7/html/jls-15.html#jls-15.28

Conditional (Computer Programming) - Wikipedia
https://en.wikipedia.org/wiki/Conditional_(computer_programming)

Compile-time constants and variables - Stack Overflow
https://stackoverflow.com/questions/9082971/compile-time-constants-and-variables
---

Em um programa com mais de uma instrução, normalmente, as instruções são lidas de forma continua, linha por linha. O programinha abaixo tem duas declarações. na primeira duas variáveis são declaradas e atribuídas com um valor numérico. A segunda exibe o resultado do produto entre as duas variáveis.

{% highlight java %}
int n1 = 2, n2 = 5;
System.out.println(n1 * n2);
{% endhighlight %}

Essas declarações são executadas na ordem em que aparecem. Primeiro as declarações, e depois o comando que exibe o resultado na tela.

No entanto, para maioria dos programas é necessário modificar essa dinâmica de leitura em algum momento, fazendo o computador pular um conjunto de instruções, ou executar um conjunto de instruções em detrimento de outro de acordo com alguma condição. Para esse propósito temos as declarações condicionais. 

As <dfn>declarações condicionais</dfn>, também chamadas de estruturas de seleção, estruturas condicionais, entre outros, são comandos usados para lidar com decisões acerca de qual ou quais instruções executar em um determinado instante, durante a execução do programa. 

Em Java nós temos duas declarações desse tipo, o ```if``` e o ```switch```. Nas seções seguintes nós vamos entender um pouco desses dois comandos.

## A Declaração if
A <dfn>declaração ```if```</dfn> é usada para especificar uma condição para a execução de uma ou mais instruções. A condição é uma expressão booleana (equivalente a uma proposição em lógica matemática), ou seja, uma expressão cujo resultado é ```true``` ou ```false```. Sua forma mais simples é a seguinte:

{% highlight java %}
if (exp) instrução;
{% endhighlight %}

Onde exp (expressão), deve ser substituído por uma expressão booleana (e.g., ```n1 == 2```), e instrução deve ser substituído por alguma instrução escrita usando os recursos da linguagem.

Nesse exemplo, vamos exibir uma mensagem na tela se a expressão ```20>18``` for verdadeira.

{% highlight java %}
if (20 > 18) System.out.println("20 é maior que 18");
System.out.println("Próxima linha fora da estrutura if.");
{% endhighlight %}

O trecho acima pode ser lido como "Se '20 é maior que 18' é verdadeiro, então exiba '20 é maior que 18' na tela". Ou seja, apenas com o resultado da expressão sendo ```true``` é que a instrução será executada. Caso a expressão retorne ```false```, o computador pula para a próxima linha após a declaração ```if```.

Frequentemente, a palavra chave ```if``` aparece acompanhada de ```else```. Esse elemento é usado para oferecer um caminho alternativo para o caso em que a expressão seja falsa. 

{% highlight java %}
if (exp) instrução;
else instrução-alternativa;
{% endhighlight %}

No trecho

{% highlight java %}
var idade = 18;
if (idade > 18) System.out.println("É maior de idade!");
else System.out.println("Você é moleque!");
{% endhighlight %}

nós verificamos se "idade é maior que 18" é verdadeiro. Como o resultado é ```false```, o texto "Você é moleque" é exibido na tela.

Perceba que instruções diferentes são executadas para cada possível resultado da expressão booleana, de tal modo que elas nunca serão executadas ao mesmo tempo. Se a instrução de ```if``` for executada, a de ```else``` não é, e vice-versa.

Nos exemplos acima nós executamos apenas uma instrução caso verdadeiro ou falso, mas também podemos definir múltiplas instruções com a ajuda dos blocos de código, conceito que discutimos em [nosso post sobre variáveis]( {%link _posts/2019-01-14-java-variables-ptbr.md %}). Um bloco de código é contido entre por ```{``` e ```}```.

A forma geral do  ```if```, usando blocos de código, é

{% highlight java %}
if (exp){
	Instruções 
} else {
	Instruções-alternativas
}
{% endhighlight %}

Tudo que estiver no primeiro bloco será executado se a expressão booleana retornar ```true```, enquanto que tudo no bloco ```else``` será executado caso a expressão for ```false```.

{% highlight java %}
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
{% endhighlight %}

Perceba que não precisa ter necessariamente mais de uma instrução em cada bloco.

## Declarações if Aninhadas
Um ```if``` aninhado é uma declaração que está dentro de outro bloco ```if``` ou ```else```. É muito comum encontrar ```if```s aninhados. 

{% highlight java %}
byte n1 = 5;

// Checa se o número é diferente de 0
if (n1 != 0){
	// if aninhado - Checa se n1 é divisível por 2
	if (n1 % 2 == 0){
		System.out.println("O número é par.");
	} else {
		System.out.println("O número é impar.");
	}
} else {
	System.out.println("O número é igual á 0.");
}
{% endhighlight %}

No programa acima nós criamos uma variável na primeira linha. Depois checamos se ela é diferente de 0. Caso positivo, nós prosseguimos para testar se o número é par, o que é determinado de acordo com o resto da divisão por 2 (se for 0, é par). Caso positivo, a mensagem "O número é par." é exibida na tela. Por outro lado, se o resultado for negativo, a sentença "O número é impar" é exibida.

## Escada if-else-if

Usando ```if```s aninhados, é possível criar uma estrutura que testa várias condições. Essa estrutura é referida como escada if-else-if, e se parece com isso:

{% highlight java %}
if (exp1){
	Instruções
} else if (exp2){
	Instruções
} else if (exp3){
	Instruções
}
.
.
.
else {
  Instruções
}
{% endhighlight %}

Podemos omitir as chaves caso apenas uma instrução for especificada para cada ```if``` e ```else```. 

{% highlight java %}
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
{% endhighlight %}

Perceba que foi mantido o bloco de código de um dos ```if```s. Isso é apenas para mostrar que é permitido ter blocos de instrução em um ```if``` aninhado, mesmo que os outros elementos na "escada" não tenham.

As expressões condicionais serão avaliadas de cima para baixo. Assim que uma condição verdadeira é encontrada, a declaração associada à ela é executada, e o resto da escada é ignorado. Se nenhuma das condições retornar ```true```, o último ```else``` é executado. Nada acontece se não houver um último ```else```, e nenhuma das condições for verdadeiras.

O programa abaixo demonstra o funcionamento do if-else-if.

{% highlight java %}
// Iniciando n1
int n1 = 10;
  
// Expressão 1
if (n1 < 10)
	System.out.println("n1 é menor que 10");

//     Expressão 2
else if (n1 < 15) 
	System.out.println("n1 é menor que 15");

//     Expressão 3
else if (n1 < 20) 
    System.out.println("n1 é menor que 20");

//    Último else
else
	System.out.println("n1 é maior que ou igual a 20");
{% endhighlight %}

O programa produz o seguinte resultado:

{% highlight console %}
n1 é menor que 15
{% endhighlight %}

## Declaração switch
A <dfn>declaração ```switch```</dfn>, é uma estrutura usada para determinar quais instruções devem ser executadas, dependendo do valor de uma expressão. A escolha é feita da seguinte forma: o resultado de uma expressão, que é chamada de expressão de controle, é comparado com uma série de valores, que estão associados a uma sequência de instruções. Quando uma combinação é encontrada, as instruções associadas com o valor são executadas. 

Esse construto é como uma versão alternativa da estrutura if-else-if discutida na seção anterior. 

A sintaxe geral desse comando é:

{% highlight java %}
switch (expressão) {
	case valor1:
		Instruções
		break;
	case valor2:
		Instruções
		break;
	default:
		Instruções
		break;
}
{% endhighlight %}

O valor da expressão pode ser do tipo ```byte```, ```short```, ```int```, ```char```, uma enumeração, ou ```String```. Geralmente, os valores para cada opção serão literais de algum tipo (e.g., 'c', 8, 2.5), no entanto, qualquer expressão constante pode ser usada. Uma expressão é dita constante quando seu resultado pode ser determinado durante a compilação do código. Por exemplo, no trecho:

{% highlight java %}
byte n1 = 3 + 5;
{% endhighlight %}

a expressão aritmética ```3 + 5``` pode ser resolvida durante o processo de compilação. No final do processo, a expressão é substituída pelo seu resultado, ou seja, a expressão ```3 + 5``` é substituída por 8. Uma expressão constante sempre poderá ser substituída por um valor de algum tipo primitivo ou uma ```String```. 

Esse tipo de expressão pode conter apenas os seguintes elementos:

- Literais de tipos primitivos (e.g., 2, 'c', 2.3) e strings (e.g., "Frank");
- O construto de conversão de tipo;
- Os operadores unários ```+```, ```-```, ```~```, e ```!```;
- Os operadores binários ```*```, ```/```, ```%```, ```+```, ```-```, ```<<```, ```>>```, ```>>>```, ```<```, ```<=```, ```>```, ```>=```, ```==```, ```!=```, ```&```, ```^```,```|```, ```&&``` e ```||```;
- O operador ternário ```?:```;
- Expressões constantes entre parenteses;
- Nomes simples que se referem a constantes;
- Nomes qualificados, na forma ```<TypeName> . <Identifier>``` que se refere a variáveis constantes.

Nada fora da lista pode fazer parte de uma expressão. Por exemplo, o seguinte trecho resulta em erro:

{% highlight java %}
byte n1 = 8;

byte n2 = 3, n3 = 5;

switch (n1){
	case 3 + 5: 
		System.out.println("c1 é b.");
		break;
	case n2 + n3: // Erro 
		System.out.println("c1 é c.");
		break;
}
{% endhiglight %}

A linha que da erro contém uma expressão que envolve variáveis. A presença de variáveis resulta em uma expressão cujo valor não pode ser determinado pelo compilador com absoluta certeza. 

Observação: Alguns dos elementos listados nós ainda não vimos, como as constantes e os nomes qualificados. Esses serão explicados em um futuro próximo. 

Geralmente são usados apenas literais, como 100, "Olá Mundo" , 'c', etc. No fragmento 

{% highlight java %}
char c1 = 'c';

switch (c1){
	case 'b':
		System.out.println("c1 é b.");
		break;
	case 'c':
		System.out.println("c1 é c.");
		break;
}
{% endhighlight %}

nós usamos o ```switch``` para comparar o valor da variável c1 com 'b' e 'c'. Caso o valor de c1 seja igual a 'b', exibimos "c1 é b" na tela. Por outro lado, se for igual a 'c', nós exibimos o texto "c1 é c" na tela. Como não definimos nenhum bloco como padrão (usando ```default```).

Uma expressão constante pode aparecer apenas em uma opção, ou seja, um mesmo valor não pode estar associado a dois blocos de código. Dessa forma, o seguinte fragmento gera um erro:

{% highlight java %}
byte n1 = 2;

switch (n1){
	// case 7
	case 2 + 5:
		System.out.println("c1 é b.");
		break;
	// case 7
	case 10 - 3: // Erro
		System.out.println("c1 é c.");
		break;
}
{% endhighlight %}

Nesse caso, temos o número 7 sendo usado em duas opções, o que é ilegal. Perceba que nós usamos duas expressões aritméticas para gerar o valor de cada opção, e ambas resultam em 7.

O tipo do valor em cada opção deve ser compatível com o tipo do valor da expressão especificada no começo do comando ```switch```.

{% highlight java %}
byte n1 = 15;

// Cria uma variável com valor constante (que não muda)
final long n2 = 15; 

switch (n1){
	case 2:
		System.out.println("n1 é 2.");
		break;
    case n2: // Erro
		System.out.println("n1 e n2 são iguais!");
		break;
{% endhighlight %}

No trecho acima, n2 é do tipo ```long```. Uma variável desse tipo não pode ser armazenada em uma variável de tipo menor de forma implícita. 

Apesar do literal 2 ser do tipo ```int```, a primeira opção não da erro, pois literais inteiros podem ser implicitamente convertidos para um tipo menor que ```int```, como é o tipo ```byte```, desde que ele possa ser representado pelo tipo menor.

Perceba que nesse trecho nós usamos um novo construto, o modificador ```final```. Nós veremos mais sobre modificadores futuramente, mas por hora basta saber que ```final``` pode ser usado para declarar variáveis cujo valor não pode variar; em outras palavras, podemos criar uma constante. Nesse caso, foi importante usar esse construto, já que variáveis não são aceitas como valores no ```switch```.

Podemos definir um bloco que será executado caso nenhuma opção tenha sido escolhida usando a palavra chave ```default```.


---
The default statement sequence is executed if no case constant matches the expression. The default is optional; if it is not present, no action takes place if all matches fail. When a match is found, the statements associated with that case are executed until the break is encountered or, in the case of default or the last case, until the end of the switch is reached. The following program demonstrates the switch:

Use switch to specify many alternative blocks of code to be executed
The if Statement