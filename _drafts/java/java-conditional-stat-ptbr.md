---
title: 'Declarações de Seleção'

Software - PCMag
https://www.pcmag.com/encyclopedia/term/software
https://pt.wikipedia.org/wiki/Estrutura_de_sele%C3%A7%C3%A3o
https://www.geeksforgeeks.org/java-if-else-if-ladder-with-examples/
---

Em um programa com mais de uma instrução, normalmente, as instruções são lidas de forma continua, linha por linha. O programinha abaixo tem duas declarações. na primeira duas variáveis são declaradas e atribuídas com um valor numérico. A segunda exibe o resultado do produto entre as duas variáveis.

{% highlight java %}
int n1 = 2, n2 = 5;
System.out.println(n1 * n2);
{% endhighlight %}

Essas declarações são executadas na ordem em que aparecem. Primeiro as declarações, e depois o comando que exibe o resultado na tela.

No entanto, para maioria dos programas é necessário modificar essa dinâmica de leitura em algum momento, fazendo o computador pular um conjunto de instruções, ou executar um conjunto de instruções em detrimento de outro, de acordo com alguma condição. Para esse propósito temos as declarações de seleção. 

As <dfn>declarações de seleção</dfn> são construtos que fornecem um meio de escolher entre dois ou mais caminhos de execução em um programa, i.e, com eles é possível determinar quais conjuntos de instruções serão executadas em um determinado momento. Tais declarações são partes essenciais de todas as linguagens de programação.

Em Java nós temos duas declarações desse tipo, o if e o Switch. O if é o 

Declarações de seleção podem ser divididos em duas categorias: duas-maneiras e n-maneiras, ou múltipla escolha. 

## A Declaração if
A <dfn>declaração ```if```</dfn> é usada para especificar um bloco de código que deve ser executado se uma condição for verdadeira. A condição é uma expressão booleana, ou seja, uma operação que retorna ```true``` ou ```false```. Para usar essa declaração com apenas uma instrução, temos a seguinte forma

{% highlight java %} 
if (exp1) // declaração;
{% endhighlight %}

Nesse exemplo, vamos exibir uma mensagem na tela se a expressão ```20>18``` for verdadeira.

{% highlight java %}
if (20 > 18) System.out.println("20 é maior que 18");
{% endhighlight %}

O trecho acima pode ser lido como "Se '20 é maior que 18' é verdadeiro, então exiba '20 é maior que 18' na tela". Caso a expressão retorne ```false```, o computador pula para a próxima linha após a declaração ```if```.

Geralmente, a palavra chave ```if``` aparece acompanhada de ```else```. Esse elemento é usado para oferecer um caminho alternativo para o caso em que a expressão seja falsa. 

{% highlight java %}
if (exp1) declaração;
else declaração-alternativa;
{% endhiglight %}

No trecho

{% highlight java %}
var idade = 18;
if (idade > 18) System.out.println("É maior de idade!");
else System.out.println("Você é moleque!");
{% endhighlight %}

Nós verificamos se "idade é maior que 18" é verdadeiro. Como o resultado é ```false```, o texto "Você é moleque" é exibido na tela.

Perceba que instruções diferentes são executadas para cada possível resultado da expressão booleana, de tal modo que elas nunca serão executadas ao mesmo tempo. 

Nos exemplos acima nós executamos apenas uma instrução caso verdadeiro ou falso, mas também podemos definir múltiplas instruções com a ajuda dos blocos de código, conceito que discutimos em [nosso post sobre variáveis]( {%link _posts/2019-01-14-java-variables-ptbr.md %}). A forma geral do  ```if```, usando blocos de código, é

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

## Declarações if Aninhadas
Um ```if``` aninhado é uma declaração que está dentro de outro bloco ```if``` ou ```else```. É muito comum encontrar ```if```s aninhados. 

{% highlight java %}
byte n1 = 5;

// Checa se o número é diferente de 0
if (n1 != 0){
	// if aninhado
	if (n1 % 2 == 0){
		System.out.println("O número é par.");
	} else {
		System.out.println("O número é impar.");
	}
} else {
	System.out.println("O número é igual á 0.");
}
{% endhighlight %}

No programa acima nós criamos uma variável na primeira linha. Depois checamos se ela é diferente de 0. Caso positivo, nós prosseguimos para testar se o número é par, o que é determinado de acordo com o resto da divisão por 2 (se for 0, é par). Caso positivo, a mensagem "O número é par." é exibida na tela. Por outro lado, se o resulado for negativo, a sentença "O número é impar" é exibida.

Uma coisa que vale a 

## Escada if-else-if

Usando ```if```s aninhados, é possível criar uma estrutura que testa várias condições. Essa estrutura é referida como escada if-else-if, e se parece com isso:

<pre>
if (exp1){
	Instruções
} else if (exp2){
	Instruções
} else if (exp2){
	Instruções
}
.
.
.
else {
  Instruções
}
{% endhighlight %}
</pre>

Podemos omitir as chaves caso apenas uma instrução for especificada para cada ```if``` e ```else```. 

<pre>
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
  Instruções
{% endhighlight %}
</pre>

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
	System.out.println("i is greater than "
                               + "or equal to 20");
{% endhighlight %}

O programa produz o seguinte resultado:

{% highlight console %}
n1 é menor que 15
{% endhighlight %}

## Declaração switch
A declaração ```switch``` é usada para fornecer opções de blocos de código, dos quais um será escolhido. A escolha é feita da seguinte forma: o resultado de uma expressão é comparado com uma série de valores que estão associados à um bloco de código especifico. Quando uma combinação perfeita é encontrada, as instruções associadas com o valor são executadas. 

A sintaxe do desse comando é:

<pre>
switch(exp){
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
</pre>

O valor da expressão pode ser do tipo ```byte```, ```short```, ```int```, ```char```, uma enumeração, ou ```String```. Geralmente, a expressão é apenas uma variável, ao invés de um arranjo de operadores com operandos.

Os valores para cada opção deve ser uma expressão constante, que é uma expressão cujo valor pode ser resolvida durante a compilação. Esse tipo de expressão pode incluir:

- Literais de tipos primitivos e strings;
- O construto de conversão de tipo;
- Os operadores unários ```+```, ```-```, ```~```, e ```!```;
- Os operadores binários ```*```, ```/```, ```%```, ```+```, ```-```, ```<<```, ```>>```, ```>>>```, ```<```, ```<=```, ```>```, ```>=```, ```==```, ```!=```, ```&```, ```^```,```|```, ```&&``` e ```||```;
- O operador ternário ```?:```;
- Expressões constantes entre parenteses;
- Nomes simples que se referem a constantes (constantes são variáveis declaradas usando o modificador de acesso ```final```);
- Nomes qualificados, na forma NomeDoTipo . Identificador que se refere a variáveis constantes.

Geralmente são usados apenas literais, como 100, "Olá Mundo" , 'c', etc. Comono exemplo abaixo:

No fragmento 

{% highlight java %}
char c1 = 'c';

switch ('c'){
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

{%%}

---
The default statement sequence is executed if no case constant matches the expression. The default is optional; if it is not present, no action takes place if all matches fail. When a match is found, the statements associated with that case are executed until the break is encountered or, in the case of default or the last case, until the end of the switch is reached. The following program demonstrates the switch:

Use switch to specify many alternative blocks of code to be executed
The if Statement