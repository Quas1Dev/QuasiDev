---
layout: article
title: "Estruturas de Repetição em Java"
permalink: "/java/:title"
description: "Entenda o que são estruturas de repetição, como escrever uma em Java, e como elas funcionam."
categories: java
tags: [java, estruturas de repetição, comando while, comando do-while, comando for]
date: 2022-02-28 00:27:00
lastUpdated: 2022-02-28 00:27:00
author: "Fernando Bonfim"
order: 10
sources:
    - title: 'The Java® Language Specification: Java SE 17 Edition'
      url: 'https://docs.oracle.com/javase/specs/jls/se17/jls17.pdf'
---

Uma estrutura de repetição/iteração/loop é qualquer declaração que permite a execução de um conjunto de declarações mais de uma vez. Essas estruturas são essenciais na programação. Sem um meio para repetir instruções, cada uma que devem ser executadas pelo computador por mais de uma vez, dependendo de um parâmetro, teriam que ser escritas manualmente, a programação de qualquer software útil seria tediosa e mais demorada, e o produto final ocuparia um espaço enorme em disco e seriam inflexíveis.

O Java possui dois comandos para criar loops, o ```for```,  ```while``` e o ```do-while```. Ambos ```for``` e ```while``` serão úteis para criar o mesmo tipo de repetição, embora haja recomendações acerca de quando usar um em detrimento do outro. Já o ```do-while``` é mais diferentão. Mas hoje eu quero focar no loop ```for```, cujas informações já são bem extensas. 

## O Comando ```for```

Considerando o modo mais tradicional de usar esse comando, a estrutura para básica com apenas uma declaração é:

``` java
for ([iniciação]; [condição]; [passo]) declaração;
```

Para repetir um conjunto com mais de um elemento temos que incluir um bloco de códigos na estrutura acima.

``` java
for ([iniciação]; [condição]; [passo]) {
    declarações;
}
```

A \[iniciação\] é substituída pela atribuição de um valor a uma variável de controle, a qual serve como um contador para o loop. Essa atribuição ocorre apenas uma única vez, antes da primeira execução do corpo do loop.

A \[condição\] é substituída por uma expressão booleana, cuja resolução determina se as declarações associadas ao loop serão executadas. Essa resolução ocorre antes de cada execução do corpo do loop, isso inclui a primeira passagem. 

Enquanto que \[passo\] é substituído por uma expressão que incrementa ou decrementa o valor da variável de controle. Essa expressão determina a que passo a variável de controle muda para cada loop. Essa incrementação ocorre após o final de cada volta na repetição.

O corpo de uma estrutura de repetição compreende tudo entre ```{``` e ```}``` ou entre ``` )```  e ```;```. O corpo pode conter uma declaração, múltiplas declarações ou nenhuma declaração. Elas serão executadas enquanto a condição definida for verdadeira.

Para ilustrar, considere a repetição uma repetição que exibe uma lista com os números de 1 a 5 para o usuário.

``` java
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
No exemplo acima, uma variável identificada, com i, é iniciada com o valor 1. Essa será a variável de controle do loop. A condição para que o bloco de código seja executado é que i seja menor ou igual a 5. A variável i é incrementada uma unidade no final de cada execução do corpo da repetição. No corpo do loop nós temos apenas uma única declaração , que consiste em uma instrução para imprimir o valor atual no terminal padrão do usuário, que pode ser o CMD por exemplo.

Essa única instrução é executada se a condição i é maior que 5 é verdadeira. O teste é realizado logo no início, tanto na primeira vez que o loop é executado quanto nas voltas subsequentes. 

A incrementação de uma unidade ocorre no final de cada volta no loop. Então, enquanto na primeira volta i vale 1, na segunda ele vale 2, na terceira vale 3, e assim em diante até o valor de i passar de 5. Quando isso acontece, o loop se encerra e a execução do programa contínua da linha que imprime "O loop terminou!" na tela.

É importante notar que a expressão condicional sempre é testada no começo de cada rodada de execução. Isso significa que o corpo da estrutura pode nunca ser executado para começo de conversa. 

``` java
int count;

for (i = 10; i < 5; i++){
    System.out.println("Essa linha nunca será executada!")
}
```

No fragmento acima, a declaração que exibe "Essa linha nunca será executada!" de fato nunca será executada. Isso ocorre porque o valor da variável de controle, identificada por i nesse caso, é maior que 5 mesmo na primeira execução do comando loop. Por esse motivo, o teste ```i < 5``` retorna ```false``` desde o início, e portanto nem mesmo a uma primeira execução do loop acontece.

### A Flexibilidade do Loop ```for```

A forma apresentada anteriormente é a mais comum de se utilizar essa estrutura. No entanto, o comando ```for```  não está preso a essa forma, pois o comando é bem flexível e permite diferentes composições. 

A primeira e a terceira parte dos parâmetros que compõem a definição do loop, nas quais geralmente colocamos expressões que iniciam e o passo como visto acima, aceitam múltiplas expressões, isso significa que você pode ter múltiplas variáveis de controle, e múltiplas expressões aritméticas alterando os valores dessas variáveis. Quando usamos mais de uma expressão, uma vírgula deve ser usada para separar cada uma delas.

``` java
int i, j;

for (i = 0, j = 10; i < j; i++, j--) {
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
```
A condição que usamos para controlar a repetição deve ser única, mas pode ser de qualquer tipo. Se houver mais de uma expressão booleana, elas devem compor expressão booleana maior, situação que só acontece com o uso de conectivos como ```&``` ou ```|```, por exemplo.

``` java
int i, j;

// Loop com uma condição composta
for (i = 0, j = 10; i < 3 | j < 2; i++, j--) {
    System.out.println("i =" + i + " J = " + j);
}
```
Resultado:

``` console
i = 0 J = 10
i = 1 J = 9
i = 2 J = 8
```

Todas as expressões do loop ```for``` são opcionais. Na ausência de uma expressão booleana na condição, um valor ```true``` é considerado. Esse fato ajuda na criação de loops potencialmente infinitos, já que a condição que determina sua continuação é sempre verdadeira. 

``` java
// Loop infinito - Mostra um valor crescente para sempre
for (int i = 0 ; ; i++ ) System.out.println(i); 
```
Se as expressões na área de inicialização e/ou passo estão ausentes, nenhuma suposição é feita. Por exemplo, se as expressões de inicialização estão ausentes, apenas consideramos que nenhuma iniciação é realizada. 

Perceba que, mesmo se todas as expressões forem suprimidas da definição do loop, os dois pontos que separam os grupos de expressões devem permanecer. Um exemplo de loop infinito é definido abaixo:

``` java
for ( ; ; ) System.out.println("Essa linha é executada para sempre!");
```

A condição não precisa incluir uma variável de controle. Qualquer expressão que retorne um valor booleano (```true``` ou ```false```) pode ser usada sem problemas. 

O corpo do loop também pode estar vazio, ou seja, é possível ter um loop sem nenhuma declaração para ser repetida. Geralmente, o corpo do loop é omitido quando as expressões em sua definição já são suficientes. No trecho 

``` java
int i, sum;

// Soma todos os números de 1 a 5
for ( i = 1, sum = 0; i <= 5 ; sum += i, i++)  ; // Não há um corpo aqui

System.out.println("Resultado da soma: " + sum)
```
nós usamos apenas a definição do comando ```for``` para produzir o resultado desejado, que é a soma de todos os números de 1 até 5. Toda a soma necessária é resolvida pelas expressões especificadas como parâmetros para o loop ```for```.

Até o momento, nós declaramos as variáveis fora do loop, e então iniciamos na estrutura do loop. Contudo, nós podemos declarar as variáveis dentro do próprio loop. 

``` java
// Declaramos uma variável dentro do loop
for ( int i = 1; i <= 5 ; i++) System.out.println(i); 
```

Note que a variável i foi declarada dentro da própria estrutura do loop. 

Essa abordagem tem uma consequência importante com relação ao escopo da variável, isto é, com a parte do programa onde ela está disponível para ser acessada ou modificada.

Cada variável está disponível para qualquer código que vem depois de sua declaração e está no mesmo [bloco](https://tecnologiaeinformacao.netlify.app/java/java-variables-ptbr/#escopo), que é delimitado por ```{``` e ```}```. No caso das variáveis declaradas na porção de inicialização, apesar de não estar dentro do bloco que agrupa as declarações associadas ao loop, é considerado parte do mesmo. Desse modo, as variáveis declaradas na estrutura do loop podem ser acessadas e modificadas apenas pelas declarações que estão no corpo do loop. A variável é implicitamente declarada, uma única vez, dentro do loop ```for``` quando sua execução é iniciada e implicitamente destruída depois que o loop termina.

É importante se atentar a esse detalhe para decidir quando faz sentido criar uma variável dessa forma. Caso for necessário acessar a variável de controle em outras partes do programa, você terá que declará-la fora do loop.

## O Comando ```while```

O ```while``` é outro comando usado para criar uma estrutura de repetição. Sua estrutura geral para apenas uma declaração:

``` java
while (condição) declaração;
```

Para múltiplas declarações nós usamos um bloco de códigos:

``` java
while (condição) {
    declarações
}
```
Esse construto é relativamente mais simples que o construto ```for``` que vimos anteriormente. Nós temos uma condição entre parênteses, que deve ser uma expressão booleana, a qual vai determinar se a(s) declaração(ões) associada(s) com o ```while``` correspondente serão executadas. Caso a expressão retorne ```true```, as instruções serão executadas, caso contrário a execução do programa continua a partir da primeira linha que segue o constructo.

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
No trecho acima nós calculamos o fatorial do valor na variável n1 com a ajuda do comando ```while```. Esse constructo está sendo usado para subtrair uma unidade do valor de n1 até que seja igual a 0, e multiplicar cada valor obtido em subsequentes subtrações com o valor contido na variável fact. Assim, nós conseguimos multiplicar o valor de n1 com todos os valores menores que n1, obtendo o fatorial.

Resultado: 

``` console
O fatorial de 5 é: 120
```

Como acontece com o ```for```, o comando ```while``` testa a condição no antes de executar o corpo do loop a cada volta, incluindo a primeira. Por esse motivo, o corpo pode nunca ser executado. 

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
Diferente do que acontece com o ```for```  e o ```while```, nos quais a condição que controla quando o corpo é executado é testada antes de cada execução, a condição aqui é testada no final depois que a execução acontece. Isso significa que as instruções associadas com um determinado constructo  ```do-while``` será executado pelo menos uma vez.

Veja o exemplo abaixo
``` java
int x = 11;

do {
    System.out.println("Esse texto é exibido uma vez.");
} while ( x < 10);
```
No fragmento acima, apesar da variável x nunca ser menor que 10, a declaração no corpo da estrutura é executada uma vez. Depois a condição é testada, e ao descobrir que x é maior que 10, o computador pula para a próxima linha abaixo do constructo.

Resultado:

```console
Esse texto é exibido uma vez.
```

Apesar de não ser necessário usar a chaveta caso uma única declaração seja associada ao construto, ela é frequentemente usada para facilitar a leitura do código. Como acontece com ```while``` e ```for```, o corpo da estrutura é executado enquanto a condição retornar ```true```. Caso retorne ```false``` a execução do programa continua na primeira linha após o comando  ```do-while```.



## Loops Aninhados

Nós podemos definir uma estrutura de repetição dentro de uma outra. Ter loops aninhados são essenciais na programação, sendo úteis em várias situações. Desse modo, convém ver um exemplo de loop aninhado.

``` java 
// O loop mais externo 
for (int i = 0; i <= 3; i++){
    System.out.println("i: " + i);

    // Um loop mais interno
    for(int j = 0; j <= 5; j++){
        System.out.println(" j: " + j);
    }

    // Pula uma linha depois de cada iteração
    System.out.println("");
}
}
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

Apesar dos comandos ```while``` e ```for``` podem ser usados para atingir basicamente os mesmos resultados, o ```for``` é usado, geralmente, quando se sabe quantas vezes um comando ou grupo de comandos devem ser executados. 

O ```while``` é mais adequado quando o momento em que a condição que mantém o loop funcionando retorna ```false``` não é determinado com certeza. Por exemplo, quando a condição depende de alguma entrada de texto do usuário. 

Já o ```do-while``` é adequado quando você precisa executar um conjunto de instruções pelo menos uma vez.