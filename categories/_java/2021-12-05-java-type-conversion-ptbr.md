---
layout: article
title: "Conversão Entre Tipos"
permalink: "/java/:title"
description: "Quase tudo sobre conversão implícita e explicita entre tipos usando a linguagem Java. E entenda porque os sufixos L e F são usados."
categories: "java"
tags: java, tipo, conversão explicita, conversão implícita
lastUpdated: 2021-11-05 04:30:00
author: "Fernando"
order: 7
sources: 
  - title: 'Unicode e UTF-8 - Instituto de Matemática e Estatística'
    url: 'https://www.ime.usp.br/~pf/algoritmos/apend/unicode.html'
  - title: 'List of Unicode characters - Wikipedia'
    url: 'https://en.wikipedia.org/wiki/List_of_Unicode_characters'
  - title: 'The Unicode Standard, Version 14.0 - Unicode.org'
    url: 'https://www.unicode.org/charts/PDF/UFFF0.pdf'
  - title: 'The Java® Language Specification: Java SE 17 Edition - Oracle'
    url: 'https://docs.oracle.com/javase/specs/jls/se17/jls17.pdf'
images: "/assets/imgs_posts/java_environment/"
---

Em programação é comum a necessidade de atribuição de um valor de uma variável em uma variável de outro tipo. As seções seguintes são dedicadas a explicar as restrições envolvidas de acordo com os tipos envolvidos, e como fazer essas atribuições.

## Conversão Implícita
A transição de um valor entre tipos pode ocorrer de maneira implícita ou explícita. Quando essa transformação ocorre de maneira implícita, o programador nem percebe; qualquer ação necessária para adequar o valor à nova variável de um determinado tipo ocorre de forma automática.
 
A conversão implícita ocorre sempre em conversões de alargamento (widening conversion), onde os dois tipos são compatíveis e o tipo que recebe o dado é maior que o tipo da variável referenciada. Por exemplo, no trecho abaixo um valor do tipo ```int``` é atribuído a um valor do tipo ```double```.

{% highlight java %}
int var1 = 10;
double var2 = var1; // atribui int para uma variável double.
{% endhighlight %}

A instrução ```double var2 = var1;``` funciona por que os tipos envolvidos são compatíveis e ```double``` é maior que ```int```.

Nesse contexto, um tipo é maior que o outro quando ela comporta um intervalo maior de valores válidos. Esses limites foram apresentados em [nossa postagem sobre variáveis]({%  link _java/2019-01-14-java-variables-ptbr.md %}), mas para relembrar, deixo uma lista abaixo com os tipos e os intervalos determinados para cada um.

byte: -128 até 127
short: -32.768 até 32.767
int: -2.147.483.648 até 2.147.483.647
long: -9.223.372.036.854.775.808 até 9.223.372.036.854.775.807
float: ≈ ≈ -3,403 x 10<sup>38</sup> até ≈ 3,403 x 10<sup>38</sup>
double: ≈ ≈ -1,793 x 10<sup>308</sup> até ≈ 1,793 x 10<sup>308</sup>
boolean: true ou false
char: 0 (caractere NUL) até 65.535 (caráter indefinido)

No trecho demonstrado no início, o valor de n1 é convertido para o tipo ```double``` automaticamente. Isso é possível porque ambos são tipos numéricos, portanto compatíveis, e o tipo ```double``` aceita um intervalo maior de valores que o tipo ```int```.

Todos tipos numéricos (inteiros e decimais) são compatíveis uns com os outros. Então ```byte```, ```short```, ```int```, ```long```, ```float```, e ```double``` são compatíveis entre si. A ordem crescente (do menor para o maior intervalo) desses tipos é ```byte``` > ```short``` > ```int``` > ```long``` > ```float``` > ```double```. Essa ordem sugere que o tipo ```byte``` pode ser implicitamente convertido para os tipos ```short```, ```int```, ```long```, ```float``` e ```double```. Já o tipo ```short```, é convertido automaticamente para o tipo ```int```, ```long```, ```float```, e ```double```. Segue-se esse raciocínio para todos os outros tipos.

{% highlight java %}
long n1 = 8;
double n2 = n1; // int atribuído à uma variável double.
byte n3 = 100;
short n4 = n3; // byte atribuído à uma variável short.
short n5 = 100;
int n6 = n5; // short atribuído a uma variável int.
{% endhighlight %}

Nesse tipo de conversão, quase sempre, a precisão do valor é preservada, isto é, o valor não sofre alteração. O número 2 em uma variável do tipo ```byte``` continua sendo 2 em uma variável do tipo ```int```, por exemplo. No entanto, existem sim situações em que o valor é modificado por consequência do processamento realizado em cima dele, diminuindo a precisão.

Considere o programa abaixo:

{% highlight java %}
long n1 = 1_999_999_999;
float n2 = n1; // n2 recebe o valor 2.000.000.000
{% endhighlight %}

A variável n1 armazena o valor 1.999.999.999, enquanto a variável ```float``` recebe o valor 2.000.000.000. Esse resultado tem a ver com a forma de representação dos números em uma variável do tipo ```float```. Essa mecânica é um pouco complicada, então não vamos falar sobre ela em detalhes por enquanto. No entanto, é preciso notar que, apesar de perder a precisão, o compilador não aponta nenhum erro, então tome cuidado quando estiver lidando com números muito grandes como o mostrado no exemplo.

Observação: o _ (“underline”) é, atualmente, o único caractere especial permitido no meio de literais numéricos. Como mostrado acima, uma utilidade dessa característica é a possibilidade de usar esse símbolo para separar casas de milhares.

## Conversão Explícita
Uma conversão é explícita quando é necessário determinar de forma explícita, por meio de uma estrutura, que ela deve acontecer. Para isso, nós inserimos o tipo entre parênteses antes do literal ou expressão. A sintaxe é ```tipo identificador = (tipo-alvo) valor```. Onde tipo-alvo especifica para qual tipo converter a expressão especificada.

A conversão explícita ocorre, quase sempre, em conversões de estreitamento (narrowing conversions), onde o tipo que recebe o valor é menor que o tipo da variável referenciada. A título de exemplo, o trecho abaixo converte um valor de  ```double``` para  ```int```.

{% highlight java %}
double n1 = 32.4;
int n2 = (int) n1; // Converte o valor de n1 para double e insere em n2.
{% endhighlight %}

O comando que atribui o valor do tipo ```double``` na variável do tipo ```int``` só funciona porque determinamos de forma explícita, por meio do constructo (```int```), que a conversão deve acontecer. Esse mecanismo pode ser usado em operações que envolvam qualquer tipo de variável compatível.

Esse mecanismo é exigido em uma conversão de estreitamento, pois esse processo tende a gerar perda de informação. Apesar desse problema também estar presente na conversão de alargamento discutida anteriormente, aqui ele aparece com mais força.

No caso anterior a precisão do valor é prejudicada quando um valor demasiado alto é atribuído a uma variável ```int``` ou ```long``` e então convertido para o tipo ```float``` ou ```double```.

Por outro lado, na operação discutida nesta seção, mesmo valores nem tão grandes podem perder precisão.

{% highlight java %}
int n1 = 200;
byte n2 = (byte) 200; // n2 recebe 100, apesar de n1 ser 200.
{% endhighlight %}

No caso acima, o valor 200 não cabe em uma variável do tipo ```byte```. Contudo nós informamos para o compilador que ele deve realizar a conversão. Por consequência, o valor é modificado para caber na variável.

Esse é apenas um exemplo que valida a precaução que a especificação do Java impõe para fazer a conversão de um tipo maior para um tipo menor. Outra situação que deixa claro a necessidade de ter mais cautela é a conversão de tipos com casas decimais para tipos inteiros. Nessa operação, o número armazenado perde as casas decimais.

Por exemplo:
{% highlight java %}
double n1 = 13.5;
Int n2 = n1; // n2 recebe 13.
float n3 = 2.5;
byte n4 = n3; // n4 recebe 2.
{% endhighlight %}

## Mas e o Tipo Char e Boolean?
O tipo ```boolean``` só recebe como valor as palavras chaves ```true``` ou ```false```. Nenhum outro tipo de dado pode ser convertido para ```true``` ou ```false```, e ```true``` ou ```false``` não pode ser modificado para um número. Portanto, não há conversão envolvendo uma variável do tipo ```boolean```.

O ```char``` é especial nesse contexto. Esse tipo pode ser convertido implicitamente para qualquer tipo numérico maior. Ou seja, para os tipos ```int```, ```long```, ```float``` ou ```double``` a conversão é automática.

Por exemplo:

{% highlight java %}
char c1 = 'f';
int n1 = c1; // char convertido para int.
long n2 = c1; // char convertido para long.
float n3 = c1; // char convertido para float.
double n4 = c1; // char convertido para double.
{% endhighlight %}

Observação: as variáveis n1 - n4 recebem o valor 102. Nós explicamos de onde vem esse valor mais adiante.

No entanto, nenhum outro tipo pode ser convertido de forma implícita para o tipo ```char```. Dessa forma, a instrução abaixo vai falhar:

{% highlight java %}
byte n1 = 48;
char c1 = n1; // byte para char não é possível.
{% endhighlight %}

Contudo, nós podemos definir a conversão de forma explícita usando ```(char)``` antes do valor. Assim, o programa acima pode ser reescrito da seguinte forma:

{% highlight java %}
byte n1 = 48;
char c1 = (char) n1; // c1 recebe o caracter 0.
{% endhighlight %}

Nesse caso, c1 recebe o caractere 0. Esse 0, no entanto, não pode participar de nenhuma operação aritmética, pois não é tratado como um número, mas como texto.
Vejamos outro exemplo:

{% highlight java %}
byte n1 = 47;
char c1 = (char) a; // a recebe ‘/’
{% endhighlight %}

O c1 agora recebe o caráter /. Como podemos ver nesses exemplos envolvendo o tipo ```char```, o número armazenado corresponde a algum símbolo. O {% include postLink.html url="https://www.ime.usp.br/~pf/algoritmos/apend/unicode.html" text="padrão Unicode" %} é o responsável por mapear cada símbolo para um número inteiro específico, que é chamado de point code. Quando inserimos o valor 47 na variável ```char```, estamos na verdade referenciando o caráter chamado 47 de acordo com o padrão Unicode.

No movimento contrário, quando inserimos um caráter em uma variável numérica, o seu nome numérico é considerado. Por exemplo, o caráter 'f' tem o nome 102 de acordo com o padrão Unicode, então sempre que convertermos o caráter f para um tipo numérico, este é o valor armazenado.

Uma lista de caráters e seus code points pode ser encontrada na {%include postLink.html url='https://en.wikipedia.org/wiki/List_of_Unicode_characters' text='List of Unicode Characters - Wikipedia' %}.

Caso o valor especificado não representa nenhum valor no padrão Unicode, ou representar um símbolo que não pode ser exibido por algum motivo, ele será convertido para um espaço em branco ou um quadrado vazio.

## Literais int e double
Um valor numérico é considerado ```int``` ou ```double``` por padrão. Caso o número não tenha casas decimais, ele é do tipo ```int```, se tiver é ```double```. É como se o compilador criasse uma variável temporária para o valor, até que ele descubra o que o programador pretende fazer com o dado.

Considere as instruções abaixo:

{% highlight java %}
int n1 = 3;
double n2 = 4.2;
{% endhighlight %}

O número 3 é do tipo ```int```, e o número 4.2 é do tipo ```double```. Nesse caso, o valor e a variável são do mesmo tipo: uma variável ```int``` recebe um valor inicialmente do tipo ```int```, e uma variável ```double``` recebe um valor do tipo ```double```. Nesse cenário, o compilador só precisa adicionar o valor à variável, mas quando os tipos são diferentes, é necessário que aconteça uma conversão.

Como vimos, esse processo pode ser explícito ou implícito. No contexto de uma atribuição que envolve um literal, o número do tipo ```int``` (qualquer número inteiro) pode ser armazenado em uma variável de tipo menor (```short``` ou ```byte```), desde que o número em questão não esteja fora do intervalo permitido para o tipo alvo, ou seja, na conversão de estreitamento às vezes é permitido de forma explícita.

Dessa forma, a instrução ```byte n1 = 126;``` compila sem problemas, pois 126, apesar de ser de um tipo maior (```int```, no caso) que ```byte```, ele está dentro do intervalo que compreende os números inteiros de -128 até 127; o valor é implicitamente convertido para o tipo ```byte```. Se no lugar do número fosse uma variável que contém o valor 126, entretanto, seria necessário explicitar a conversão, conforme explicado nas seções anteriores.

{% highlight java %}
int n1 = 126;
byte n2 = n1; // Não funciona
byte n3 = (int) n1; // Funciona
{% endhighlight %}

Do mesmo modo, a declaração ```short n1 = -32_768;``` não apresentará problemas, já que o valor está dentro dos limites estabelecidos para o tipo ```short```, que vai de -32.768 até 32.767. Mais uma vez, se o valor -32_768 desse lugar a uma variável, seria necessário explicitar a conversão usando ```(short)``` antes do identificador da variável.

{% highlight java %}
int n1 = -32_768;
short n2 = n1; // Não compila
short n3 = (int) n1; // Compila
{% endhighlight %}

Agora, considere o trecho a seguir:
{% highlight java %}
long n1 = -2_147_483_648; // Compila
long n2 = -2_147_483_649; // Não compila
{% endhighlight %}

A primeira linha do trecho acima é compilada sem problemas. Isso porque o valor -2.147.483.648 está dentro do intervalo permitido para o tipo ```int```, que é tipo inicialmente considerado para o número.

No entanto, se o número for menor que -2.147.483.648 ou maior que 2.147.483.647, um erro é detectado. Isso por que tal número é ilegal para o tipo ```int```. Desse modo, o compilador simplesmente falha quando tenta interpretá-lo dessa maneira. Isso é o que acontece com o valor -2_147_483_649 usado na segunda operação. Esse número inteiro negativo é menor que o menor número aceito para o tipo ```int```, portanto mesmo que ele caiba na variável do tipo ```long```, o compilador acusa um erro durante a compilação.

Para resolver o problema apontado, nós podemos adicionar o sufixo l ou L no final do número para indicar que ele deve ser tratado como ```long```, e não ```int```, possibilitando a atribuição sem erros. A versão maiúscula é preferível pois pode ser facilmente confundida com o dígito 1 dependendo da fonte utilizada no editor de textos ou IDE.

{% highlight java %}
long n2 = -2_147_483_649L;
{% endhighlight %}

Nesse caso, colocar o tipo entre parênteses à esquerda do valor não impede o erro, pois isso não impede que o compilador leia o número como tipo ```int```.
Para os números com casas depois do separador de decimais, que são considerados do tipo ```double```, as coisas são mais simples. Esses literais só podem ser armazenados implicitamente em uma variável de mesmo tipo, como em:

{% highlight java %}
double n1 = 2.5;
{% endhighlight %}

Para qualquer outra classificação, sempre é exigido uma conversão explícita, mesmo que seja para um tipo ```float```. Por exemplo, as duas instruções abaixo são válidas:

{% highlight java %}
float n1 = (float) 5.2;
byte n2 = (byte) 5.2;
{% endhighlight %}

Note que armazenar um valor ```double``` em um tipo inteiro ocasiona a perda de todos os dígitos depois da vírgula. Assim, o valor de n2 será 5, e não 5.2.
Nós também temos o sufixo f ou F que pode ser adicionado no final de um número para criar um literal ```float```, possibilitando a atribuição em variáveis do tipo ```float```, sem erros.

## Expressões Aritméticas
Em expressões é comum misturar valores de dois ou mais tipos diferentes. Por exemplo, um valor ```int``` pode ser somado a um valor do tipo ```long```. Todos os valores envolvidos em uma expressão são convertidos para o mesmo tipo enquanto a expressão é computada. Isso é feito de acordo com as regras de promoção de tipo do Java.

Todos os valores do tipo ```byte```, ```short``` e ```char``` são promovidos para int. No caso de um dos operandos for um ```long```, todos serão do tipo ```long```. Se um dos termos é ```float```, então todos serão ```float```. Se qualquer operando for ```double```, o resultado é ```double```. Dessa forma, no trecho

{% highlight java %}
float f1 = 3;
int n1 = 3;
float f2 = f1 + n1;
{% endhighlight %}

o valor de n1 é promovido para o tipo ```float``` e então adicionado à f1. Contudo, é importante notar que o tipo é modificado somente durante a execução da expressão. Então, fora da expressão, n1 continua sendo do tipo ```int```.

O resultado será do mesmo tipo para o qual os operandos foram promovidos. No exemplo acima, f1 + n1 gera um resultado do tipo ```float```. Isso pode gerar um comportamento inesperado. Considere o fragmento a seguir:

{% highlight java %}
byte n1 = 3;
byte n2 = 6;
byte n3 = n1 + n2;
{% endhighlight %}

A expressão n1 + n2 gera um ```int```. Para armazenar esse valor em uma variável do tipo ```byte``` é necessário deixar explícito que a conversão deve ocorrer, usando o construto ```(tipo)```. Então, podemos reescrever aquela expressão como

{% highlight java %}
byte n3 = (byte) (n1 + n2);
{% endhighlight %}

Se a expressão envolver apenas literais inteiros, que serão todos do tipo ```int``` por padrão, o resultado pode ser convertido para ```short``` ou ```byte``` implicitamente, desde que o valor não seja ilegal para o tipo.
Por exemplo:

{% highlight java %}
byte n1 = 2 + 2;
{% endhighlight %}

Os literais 2 são do tipo ```int```, e o resultado também. Com base nisso, o esperado é que aquela atribuição seja ilegal, e que o construto ```(byte)``` é necessário. Porém, nesse caso, a operação ocorre de forma automática. Já a instrução abaixo não vai funcionar.

{% highlight java %}
byte n2 = 100 + 80;
{% endhighlight %}

O resultado da instrução é 180, que é um número inválido para o tipo ```byte```, então a conversão deve ser explícita, ou o compilador para de executar o programa e acusa um erro.

Para consertar o erro, nós podemos fazer o seguinte:
{% highlight java %}
byte n2 = (byte) (100+80); // Converte o resultado e então armazena o valor.
{% endhighlight %}

No trecho acima, o resultado da operação colocada entre parênteses será convertido para ```byte```. É necessário envolver a expressão aritmética entre parênteses para garantir que o resultado será convertido. Caso contrário o compilador primeiro converte o número que vem a seguir, que no caso é o 100, e então resolve a operação para gerar o valor que será finalmente guardado na variável.

---  
Aqui encerramos nossa discussão sobre conversão entre tipos em Java. Internalizar os detalhes desse conceito pode ajudar muito a evitar dor de cabeça durante o processo de programação. Então, não deixe de revisar o conteúdo, e testar os exemplos na prática.