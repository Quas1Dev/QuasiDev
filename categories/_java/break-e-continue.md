---
title: Break e Continue
layout: article
permalink: /java/:title
description: Break e continue são dois construtos muito úteis.
categories:
  - Java
tags:
  - continue
  - java
  - controle-de-loops
date: 2022-06-28T07:29:13.008Z
lastUpdated: 2022-06-28T07:29:12.328Z
author: Fernando Bonfim
excerpt_separator: <!--Fernando-->
sources:
  - url: https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf
    title: Inductive reasoning - Wikipedia
---
Você já deve ter visto o comando `break` sendo usado com o comando `switch`. Naquele contexto ele indica o fim dos comandos associados com cada `case`. Mas essa não é a única utilidade desse comando como vamos descobrir a seguir. Além de discutir sobre o comando break, nós vamos conhecer o comando continue.

## Interrompendo Repetições com break

É possível interromper a execução de uma estrutura de repetição a força, ignorando completamente qualquer código remanescente ou mesmo a condição que controla quando o loop termina, usando o comando `break`. Sempre que o comando `break` é encontrado, o loop é finalizado e a execução do programa continua da próxima linha após a estrutura de repetição em questão. 

O programa abaixo deveria exibir todos os números entre 0 e 100 pulando de 2 em 2. Contudo, assim que a variável `cont` chegar a 20 nós usamos o comando `break` para parar a execução imediatamente.

```java
for (int cont = 0; cont <= 100; cont += 2){
  System.out.print(cont + " ");
  
  // Para o loop quando cont = 20
  if (cont == 20) break;
}

System.out.println("- Estamos fora do loop!");
```

Resultado:

\~\~~ console

0 2 4 6 8 10 12 14 16 18 20 - Estamos fora do loop

\~\~~

Perceba que assim que `cont` passa a armazenar o valor 20 o teste da estrutura de decisão `if` da verdadeiro e então o comando `break` é lido. O loop para, e o comando `System.out.println`, que está logo após o loop, é executado. 

Em caso de loops aninhados apenas o mais interno é finalizado. Como no fragmento abaixo:

```java
for (int i = 0; i < 3; i++){
  System.out.println("Contador do loop externo: " + i);
  System.out.println("    Contador do loop interno: ");
  
  for(int j = 0; j <= 100; j += 2 ){
    System.out.print(j + " ");
    
    // Finaliza o Loop se j = 20
    if (j == 20) break; 
  }
}

System.out.println("Loop finalizado!");
```

Resultado:

\~\~~ console

Contador do loop externo: 0

\    Contador do loop interno: 0 2 4 6 8 10 12 14 16 18 20

Contador do loop externo: 1

\    Contador do loop interno: 0 2 4 6 8 10 12 14 16 18 20

Contador do loop externo: 2

\    Contador do loop interno: 0 2 4 6 8 10 12 14 16 18 20

Loop finalizado!

\~\~~

O comando `break` pode ser usado com qualquer estrutura de repetição, seja o `for`, `do-while` ou `while`. O comportamento é o mesmo com qualquer uma das opções: o loop atual é interrompido e o programa continua a ser executado da próxima linha.

O comando `break`que é parte de uma estrutura `switch`que por algum motivo esteja dentro de uma estrutura de repetição **afeta** **apenas** a declaração switch, e o `loop`continua normalmente.  Como no trecho abaixo:

```java
for (int i = 0 ; i < 3; i++){
  switch (i) {
    case 0:
      System.out.println("i é 0");
      break;
    case 1:
      System.out.println("i é 1");
      break;
    case 2:
      System.out.println("i é 2");
      break;
  }
}
System.out.println("Loop finalizado!");
```

Resultado:

\~\~~ console

i é 0

i é 1

i é 2

Loop finalizado!

\~\~~

A cada volta do loop o valor de `i` é checado contra uma série de constantes. Quando há uma correspondência entre os valores comparados, as instruções associadas com a constante são executadas. Cada conjunto de instrução é finalizada com o comando break. que é necessário para impedir a execução das instruções associadas a outras constantes. Note que o comando `break`é encontrado duas vezes antes da última volta, mas isso não afeta o andamento da execução do loop.

O comando break pode aparecer mais de uma vez dentro de um mesmo loop. mas é melhor não exagerar para não deixar o programa difícil de entender.

## Usando break Com Rótulos

Em algumas linguagens de programação existe um comando chamado `goto`. Esse comando serve para indicar que parte do código fonte deve ser executado a seguir. Sua forma usual é `goto <rótulo>`, onde <rótulo> deve ser substituido por um rótulo. Um rótulo é uma marcação em um ponto do código fonte. Uma vez que o comando é executado, a execução do programa continua a partir do ponto marcado pelo rótulo. Podemos olhar um código curtinho em Batch só para ilustrar do que estamos falando:

\~\~~ console

@echo off

ECHO Um Programa em Batch

GOTO continuacao

ECHO Essa linha não será executada.

:continuacao

ECHO Ola! Eu sou um programa escrito em Batch.

PAUSE

\~\~~

Resultado:

\~\~~ console

Um Programa em Batch
Ola! Eu sou um programa escrito em Batch.

\~\~~  

O programa apenas imprime duas frases na tela para o usuário. Se quiser estudar a linguagem Batch, nós estamos preparando uma [série de tutoriais sobre essa linguagem](https://tecnologiaeinformacao.netlify.app/batch/batch-intro-to-batch-ptbr).

Voltando para o Java, não existe o comando `goto`. A não inclusão desse comando na linguagem é, geralmente, justificada com o argumento de que seu uso em demasia resulta em um programa difícil de entender e manter. Contudo, o Java oferece uma forma estendida do comando `break` que possuí um comportamento similar, mas que foi pensado para evitar os problemas levantados. 

A forma estendida é `break <rótulo>`, onde <rótulo> deve ser substituido por uma sequência de caracteres que identifica um **bloco de código**.  Perceba que não é qualquer ponto do código que pode ser rotulada; apenas os blocos de código que podem.

In addition to its uses with the switch statement and loops, the break statement can be employed by itself to provide a “civilized” form of the goto statement. Java does not have a goto statement, because it provides an unstructured way to alter the flow of program execution. Programs that make extensive use of the goto are usually hard to understand and hard to maintain. There are, however, a few places where the goto is a useful and legitimate device. For example, the goto can be helpful when exiting from a deeply nested set of loops. To handle such situations, Java defines an expanded form of the break statement. By using this form of break, you can, for example, break out of one or more blocks of code. These blocks need not be part of a loop or a switch. They can be any block. Further, you can specify precisely where execution will resume, because this form of break works with a label. As you will see, break gives you the benefits of a goto without its problems. The general form of the labeled break statement is shown here:

## Pulando Voltas com o continue