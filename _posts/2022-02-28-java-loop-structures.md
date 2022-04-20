---
layout: article
title: "Estruturas de Repetição em Java"
permalink: "/java/:title"
description: "Entenda o que são estruturas de repetição, como escrever uma em Java, e como elas funcionam."
categories: java
tags: [java, estruturas de repetição, comando while, comando do-while, comando for]
date: 2022-02-28 00:27:00
lastUpdated: 2022-04-19
author: "Fernando Bonfim"
order: 10
sources:
    - title: 'The Java® Language Specification: Java SE 17 Edition'
      url: 'https://docs.oracle.com/javase/specs/jls/se17/jls17.pdf'
---

Nesse texto, nós fazer uma análise da sintaxe e do funcionamento dos comandos de repetição incluídos no Java, identificando qual é mais recomendada para a solução de um problema.

## O que e por quê?
Uma estrutura de repetição, iteração ou loop é qualquer declaração de uma linguagem de programação que permite a execução de um conjunto de instruções mais de uma vez. 
Estruturas de repetição são essenciais na programação. Sem um meio para repetir instruções, o código a repetido deverá ser inserido manualmente no programa pelo número de vezes necessário. Considere uma situação em que queremos três vezes na tela a palavra "Vender". Para fazer essa impressão, nós podemos repetir o código escreve na tela três vezes, como em 

~~~ java
System.out.println("Vender!");
System.out.println("Vender!");
System.out.println("Vender!");
~~~

Agora imagine se ao invés de três vezes, fosse 50. Nesse caso, teríamos que digitar o mesmo código 50 vezes. Para facilitar esse tipo de situação é que as estruturas de repetição foram incluídas nas linguagens de programação. Elas permitem instruir o computador a repetir o mesmo conjunto de código o quanto for necessário. Para obter o mesmo resultado do trecho mostrado acima, nós podemos usar o comando ```for```:

~~~ java
// O trecho entre { e } será executado três vezes
for (int c = 1; c <= 3; c++){
    System.out.println("Vender!");
}
~~~

Dessa vez, o código que imprime "Vender!" na tela foi incluído apenas uma vez na tela, e o comando ```for``` fez o computador repeti-la três vezes. Vamos tratar do comando ```for``` na seção seguinte.

De fato, esse exemplo não é útil, mas já podemos começar a perceber a função desse comando dentro de um código. Sem elementos desse tipo em uma linguagem, a programação de qualquer programa relevante seria tediosa e mais demorada, e o produto ocuparia um espaço enorme em disco e seria inflexível.

O Java possui três comandos para criar loops: ```for```,  ```while``` e o ```do-while```. Ambos ```for``` e ```while``` podem criar o mesmo tipo de repetição, embora sejam indicados para casos diferentes, embora existam recomendações acerca de quando usar um em detrimento do outro. Já o ```do-while``` é o mais diferente. Vamos entender cada um deles, e aprender a utilizá-los.

## O Comando ```for```

Considerando o modo mais tradicional de usar esse comando, a estrutura básica, que repete apenas uma declaração, é:

``` java
for ([iniciação]; [condição]; [passo]) declaração;
```

Para repetir um conjunto com mais de um elemento, temos que incluir um [bloco de códigos](link){: target="_blank" rel="noreferrer noopener nofollow"} na estrutura acima.

``` java
for ([iniciação]; [condição]; [passo]) {
    declarações;
}
```
Primeiro, vem a palavra-chave ```for```. Entre parênteses, vem algumas expressões, cujo objetivo é configurar o comando, definindo até quando a repetição deve continuar. Então incluímos bloco de código (tudo entre ```{``` e ```}```), também chamado de corpo do loop, ou a instrução única que será executada. Após o fim da execução do loop, o programa contínua da primeira linha que vem após o comando ```for```.

A parte de \[iniciação\] é substituída por uma expressão de atribuição (e.g., ```c = 1```). A variável com valor atribuído nessa parte será a variável de controle da repetição, ou seja, seu valor será usado para determinar quando a repetição continua. Qualquer atribuição feita nessa parte será executada **apenas uma única vez**, e será antes da primeira execução do corpo do loop.

A \[condição\] é substituída por uma expressão booleana, cuja resolução determina se as declarações associadas ao loop serão executadas. Geralmente, essa condição se constituí de uma comparação do valor da variável de controle com outro valor. Essa resolução ocorre antes de cada execução do corpo do loop, e isso inclui a primeira passagem. 

Enquanto \[passo\] é substituído por uma expressão que incrementa ou decrementa o valor da variável de controle. Essa expressão determina a que passo a variável de controle muda para cada loop. Essa incrementação ocorre após o final de cada volta na repetição.

O corpo de uma estrutura de repetição compreende tudo entre ```{``` e ```}``` ou entre ``` )``` e ```;```. O corpo pode conter uma declaração, múltiplas declarações ou até nenhuma declaração. Elas serão executadas enquanto a condição definida for verdadeira.

Para ilustrar, considere a repetição que exibe uma lista com os números de 1 a 5 para o usuário.

``` java
// declaração da variável que será atribuída 
// no loop.
int i;

// Lista todos os números de 1 a 5
for (i = 1; i <= 5; i++) System.out.println(i);

System.out.println("O loop terminou!");
```

Resultado no terminal:

``` console
1
2
3
4
5
O loop terminou!
``` 
No exemplo acima, uma variável identificada com i, é iniciada com o valor 1. Essa será a variável de controle do loop. A condição para que o bloco de código seja executado é que i seja menor ou igual a 5. A variável i é incrementada uma unidade no final de cada execução do corpo da repetição. No corpo do loop nós temos apenas uma única declaração, que consiste em uma instrução para imprimir o valor atual da variável de controle no terminal padrão do usuário, que pode ser o CMD por exemplo.

Essa única instrução é executada se a condição "i é maior que 5" é verdadeira. O teste é realizado logo no início, tanto na primeira vez que o loop é executado quanto nas voltas subsequentes. 

A incrementação de uma unidade ocorre no final de cada volta no loop. Então, enquanto na primeira volta i vale 1, na segunda ele vale 2, na terceira vale 3, e assim em diante até o valor de i passar de 5. Quando isso acontece, o loop se encerra e a execução do programa contínua da primeira linha após o loop, que nesse caso imprime "O loop terminou!" na tela.

É importante notar que a expressão condicional sempre é testada no começo de cada rodada de execução. Isso significa que o corpo da estrutura pode nunca ser executado para começo de conversa. 

``` java
int i;

for (i = 10; i < 5; i++){
    System.out.println("Essa linha nunca será executada!")
}
```

No fragmento acima, a declaração que exibe "Essa linha nunca será executada!" de fato nunca será executada. Isso ocorre porque o valor da variável de controle, mais uma vez identificada por i nesse caso, é maior que 5 mesmo na primeira execução do comando loop. Ao resolver a expressão ```i < 5``` , o resultado é ```false```, e a repetição é interrompida antes mesmo de começar.

### A Flexibilidade do Loop ```for```

A forma apresentada anteriormente é a forma mais comum de utilização dessa estrutura. No entanto, o comando ```for``` não está preso a essa forma, pois o comando é bem flexível e permite diferentes composições. 

Na primeira parte, nós geralmente atribuímos um valor à uma variável de controle. Contudo, nós podemos inserir múltiplas atribuições nesse local, ou até mesmo deixar vazio.

No trecho abaixo, duas variáveis são iniciadas, mas poderíamos definir mais se fosse necessário:

``` java
// Declaração das variáveis
int i, j;

for (i = 0, j = 10; i < j; i++) {
    System.out.println("i = " + i);
}
```
Resultado:

``` console
i = 0 
i = 1 
i = 2 
i = 3 
i = 4 
i = 5 
i = 6 
i = 7 
i = 8
i = 9 
i = 10 
```

Repare que as duas foram incluídas na formação da condição do loop, mas isso não é necessário. Na verdade, não é obrigatório a inclusão de nenhuma variável de controle na condição. Como no trecho a seguir, que utiliza uma variável declarada e atribuída antes da estrutura de repetição:

~~~ java
int c = 0;

for (i = 0; c <= 10; c++) System.out.println(c);
~~~

Na terceira parte dos parâmetros, na qual colocamos uma expressão aritmética que altera o valor da variável de controle, nós podemos incluir múltiplas expressões aritméticas.

``` java
int i, j;

for (i = 0, j = 10; i < j; i++, j--) {
    System.out.println("i = " + i + " J = " + j);
}
```

Resultado:

``` console
i = 0 J = 10
i = 1 J = 9
i = 2 J = 8
i = 3 J = 7
i = 4 J = 6
```

A segunda parte, onde colocamos a condição, difere um pouco das outras duas. Nela teremos apenas uma expressão booleana, mas ela pode ser simples ou composta - usando os operadores lógicos como o ```&``` ou o ```||```.

``` java
int i, j;

for (i = 0, j = 10; i < 5 || j == 5; i++, j--) {
    System.out.println("i =" + i + " J = " + j);
}
```
Resultado:

``` console
i = 0 J = 10
i = 1 J = 9
i = 2 J = 8
i = 3 J = 7
i = 4 J = 6
i = 5 J = 5
``` 

Deixar um espaço vazio é valido em todas as posições, mas o ponto e vírgula deve ser mantido. Se as expressões na primeira e na terceira partes estão ausentes, nenhuma suposição é feita. Contudo, se a condição estiver vazia, um valor ```true ``` será considerado, criando, potencialmente, uma repetição infinita.

~~~ java
// Repetição infinita 
for ( ; ; ) System.out.println("Isso será executado para sempre");
~~~

Perceba que, mesmo se todas as expressões forem suprimidas da definição do loop, os dois pontos que separam as separam devem permanecer. 
O corpo do loop também pode estar vazio, ou seja, é possível ter um loop sem nenhuma declaração para ser repetida. Geralmente, o corpo do loop é omitido quando as expressões em sua definição já são suficientes. No trecho 

``` java
int i, sum;

// Loop sem corpo - 
for ( i = 1, sum = 0; i <= 5; sum += i, i++)  ; 

System.out.println("Resultado da soma: " + sum)
```
nós usamos apenas a definição do comando ```for``` para somar todos os números de 1 até 5.

Até o momento, nós declaramos as variáveis fora do loop, e então iniciamos na estrutura do loop. Contudo, nós podemos fazer as duas coisas dentro do próprio loop. 

``` java
// Declaramos uma variável dentro do loop
for ( int i = 1; i <= 5 ; i++) System.out.println(i); 
```

Note que a variável i foi declarada dentro da própria estrutura do loop. 

Essa abordagem tem uma consequência importante com relação ao escopo da variável, que é a parte do programa onde ela está disponível para ser acessada ou modificada.

Cada variável está disponível para qualquer código que vem depois de sua declaração e está no mesmo [bloco](https://tecnologiaeinformacao.netlify.app/java/java-variables-ptbr/#escopo), que é delimitado por ```{``` e ```}```. No caso das variáveis iniciadas na construção da repetição, apesar de não estar dentro do corpo do loop, é considerado parte dele. Desse modo, as variáveis declaradas na estrutura do loop podem ser acessadas e modificadas apenas pelas declarações que estão no corpo do loop. A variável é implicitamente declarada, uma única vez, dentro do loop ```for``` quando sua execução é iniciada e implicitamente destruída depois que o loop termina.

~~~ java 
for (int i = 0 ; i <= 5; i++) ;

// Esse código resulta em erro, 
// pois a variável i não existe fora do loop
System.out.println(i);
~~~

É importante se atentar a esse detalhe para decidir quando faz sentido criar uma variável dessa forma. Caso for necessário acessar a variável de controle em outras partes do programa, você terá que declará-la fora do loop, mais precisamente antes dele.

## O Comando ```while```

O ```while``` é outro comando usado para criar uma estrutura de repetição. Sua estrutura geral para apenas uma declaração:

``` java
while (condição) declaração;
```

Para múltiplas declarações nós usamos um bloco de código:

``` java
while (condição) {
    declarações
}
```

Esse construto é relativamente mais simples que o construto ```for``` que vimos anteriormente. Nós temos uma condição entre parênteses, que deve ser uma expressão booleana, a qual vai determinar se as instruções associadas com o ```while``` correspondente serão executadas. Caso a expressão retorne ```true```, as instruções serão executadas, caso contrário a execução do programa continua a partir da primeira linha que segue o construto.

Exemplo:

``` java 
int n1 = 5;
int ncopia = n1;
int fact = 1;

// Calcula o fatorial
while (n1 > 0){
    fact *= n1;
    n1--;
}

System.out.println("O fatorial de " + ncopia + " é: " + fact);
```

No trecho acima nós calculamos o [fatorial do valor](todamateria.com.br/fatorial/#:~:text=Fatorial%20é%20um%20número%20natural,até%20chegar%20ao%20número%201.){: target="_blank" rel="noreferrer noopener nofollow"} na variável n1 com a ajuda do comando ```while```. Esse construto está sendo usado para subtrair uma unidade do valor de n1 até que seja igual a 0, enquanto multiplica cada valor obtido em subsequentes subtrações com o valor contido na variável fact. Assim, nós conseguimos multiplicar o valor de n1 com todos os valores menores que n1, obtendo o fatorial.

Resultado: 

``` console
O fatorial de 5 é: 120
```

Como acontece com o ```for```, o comando ```while``` testa a condição antes de executar o corpo do loop em cada volta, incluindo a primeira. Por esse motivo, o corpo pode nunca ser executado. 
## O Comando do-while
A última estrutura de repetição da qual vamos falar é a  ```do-while```. A forma geral do loop ```do-while``` para uma declaração é 
``` java
do declaração; while (condição);
```

Para múltiplas declarações, nós temos:

``` java
do { 
    declaração
} while (condição);
```
Diferente do que acontece com o ```for```  e o ```while```, nos quais a condição que controla quando o corpo é executado é testada antes de cada execução, a condição aqui é testada no final, depois que a execução acontece. Isso significa que as instruções associadas com um determinado construto  ```do-while``` será executado pelo menos uma vez.

Veja o exemplo abaixo
``` java
int x = 11;

do {
    System.out.println("Esse texto é exibido uma vez.");
} while ( x < 10);
```
No fragmento acima, apesar da variável x nunca ser menor que 10, a declaração no corpo da estrutura é executada uma vez. Depois a condição é testada e, ao descobrir que x é maior que 10, o computador pula para a próxima linha abaixo do construto.

Resultado:

```console
Esse texto é exibido uma vez.
```

Apesar de não ser necessário usar a chaveta (```{ }```), caso uma única declaração seja associada ao construto, ela é frequentemente usada para facilitar a leitura do código. 

Como acontece com ```while``` e ```for```, o corpo da estrutura é executado enquanto a condição retornar ```true```. Caso retorne ```false``` a execução do programa continua na primeira linha após o comando  ```do-while```.

## Loops Aninhados

Nós podemos definir uma estrutura de repetição dentro de outra. Ter a possibilidade de incluir loops aninhados em programa é essencial na programação, sendo útil em várias situações. Desse modo, convém ver um exemplo de loop aninhado.

``` java 
// O loop mais externo 
for (int i = 0; i <= 3; i++){
    System.out.println("i: " + i);

    // Um loop mais interno
    for (int j = 0; j <= 5; j++){
        System.out.println(" j: " + j);
    }

    // Pula uma linha depois de cada iteração
    System.out.println("");
}}
```
No fragmento acima nós temos dois loops, estando um dentro do outro. O primeiro loop, que envolve o segundo, vai se repetir enquanto a variável de controle, i, não for maior que 3. O segundo loop vai se repetir enquanto a variável de controle, j, não for maior que 5. Uma nova execução do segundo loop é iniciada para cada repetição do primeiro loop.
Resultado:

``` console
i: 1
  j: 1
  j: 2
  j: 3
  j: 4
  j: 5

i: 2
  j: 1
  j: 2
  j: 3
  j: 4
  j: 5

i: 3
  j: 1
  j: 2
  j: 3
  j: 4
  j: 5

```

## Quando Usar Cada Estrutura?

Os comandos  ```while``` e ```for``` podem ser usados para atingir basicamente os mesmos resultados, contudo o ```for``` é usado, geralmente, quando se sabe quantas vezes um comando ou grupo de comandos devem ser executados. Isso provavelmente tem a ver com a estrutura que ele oferece, que favorece a construção de um loop com uma variável de controle que funciona como um contador.

O ```while``` é mais adequado quando o momento em que a condição que mantém o loop funcionando retorna ```false``` não é determinado com certeza. Por exemplo, quando a condição depende de alguma entrada de texto do usuário. 

Já o ```do-while``` é adequado quando você precisa executar um conjunto de instruções pelo menos uma vez.

---

Conhecemos as três estruturas de repetição disponíveis na linguagem Java. Ambas podem ser usadas, indiscriminadamente, em todo problema que requer a execução de instruções mais de uma vez. De todo modo, sempre a estrutura mais adequada, conforme a especificidade do problema.