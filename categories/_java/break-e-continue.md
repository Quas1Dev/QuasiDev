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
order: 11
---
Você já deve ter visto o comando `break` sendo usado com o comando `switch`. Naquele contexto ele indica o fim dos comandos associados com cada `case`. Mas essa não é a única utilidade desse comando como vamos descobrir a seguir. Além de discutir sobre o comando break, nós vamos conhecer o comando continue.

Nota: para compreender esse tutorial é necessário já estar familiarizado com as estruturas de repetição em Java.

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
for (int i = 0; i < 3; i++) {
  System.out.println("Contador do loop externo: " + i);
  System.out.print("    Contador do loop interno: ");

  for (int j = 0; j <= 100; j += 2) {
    System.out.print(j + " ");
    
    // Finaliza o Loop se j = 20
    if (j == 20) break;
  
  }
  System.out.println(); // Apenas pula uma linha
}
        
System.out.println("Loop finalizado!");
```

Resultado:

\~\~~ console

Contador do loop externo: 0
    Contador do loop interno: 0 2 4 6 8 10 12 14 16 18 20 
Contador do loop externo: 1
    Contador do loop interno: 0 2 4 6 8 10 12 14 16 18 20 
Contador do loop externo: 2
    Contador do loop interno: 0 2 4 6 8 10 12 14 16 18 20 
Loop finalizado!

\~\~~

O comando `break` pode ser usado com qualquer estrutura de repetição, seja o `for`, `do-while` ou `while`. O comportamento é o mesmo com qualquer uma das opções: o loop atual é interrompido e o programa continua a ser executado da próxima linha.

O comando `break` que é parte de uma estrutura `switch` que por algum motivo esteja dentro de uma estrutura de repetição **afeta apenas** a declaração switch, e o `loop` continua normalmente. Como no trecho abaixo:

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

A cada volta do loop o valor de `i` é checado contra uma série de constantes. Quando há uma correspondência entre os valores comparados, as instruções associadas com a constante são executadas. Cada conjunto de instrução é finalizada com o comando `break`, que é necessário para impedir a execução das instruções associadas a outras constantes. Note que o comando `break`é encontrado duas vezes antes da última volta, mas isso não afeta o andamento da execução do loop.

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

Voltando para o Java, não existe o comando `goto`. A ausência desse comando na linguagem é, geralmente, justificada com o argumento de que seu uso em demasia resulta em um programa difícil de entender e manter. Contudo, o Java oferece uma forma estendida do comando `break` que possuí um comportamento similar, mas que foi pensado para evitar os problemas levantados. 

A forma estendida é `break <rótulo>`, onde <rótulo> deve ser substituido por uma sequência de caracteres que identifica um **bloco de código**. Quando esse comando é executado, o computador continua a execução do programa a partir da primeira instrução que vem depois do bloco indicado.

É importante destacar que o bloco de código, que é delimitado por `{` e `}`, deve englobar o comando break, mesmo que não diretamente. Por esse motivo, a forma estendida do `break` pode ser usada para sair de um ou mais blocos aninhados (que estão um dentro do outro), como veremos em nosso exemplo.  

```java
for (int i = 1; i <= 2; i++) {
  System.out.println("\n i é "+ i);
  um: { 
    dois: {
      if (i == 1) break um; // Retorna para o bloco rotulado um
      if (i == 2) break dois; // Volta para o bloco rotulado dois
      
      // A instrução abaixo não será executada.
      System.out.println("Não será executada.");
    }
    // A linha abaixo está dentro do bloco um.
    System.out.println("Depois do bloco dois.");
  }
  System.out.println("Depois do bloco um.");
}
```

Resultado:

\~\~~ console

 i é 1
Depois do bloco um.

 i é 2
Depois do bloco dois.
Depois do bloco um.

\~\~~

No fragmento acima temos uma estrutura de repetição que conta de 1 a 2. Dentro dessa repetição nós temos dois blocos, que foram rotulados com o nome um e dois. Dentro do bloco dois existe temos duas estruturas de decisão `if`, que determinam, nesse caso, para fora de qual bloco a execução do programa deve seguir, 

O primeiro `if` compara o valor de i com 1, e caso haja uma correspondência a execução pula para fora do bloco um. Nesse caso, o a instrução que imprime "Depois do bloco um." na tela é executada. 

O segundo `if` compara o valor de i com 2 e, caso haja correspondência, o comando `break dois` é executado, fazendo o computador sair do bloco com rótulo dois. Ao sair do bloco dois, a próxima instrução imprime "Depois do bloco dois." na tela. Depois sessa execução, todas as instruções do bloco um estão finalizadas, então o andamento do programa continua da próxima linha logo após o bloco um, que se trata da instrução que imprime "Depois do bloco um." .

O rótulo pode identificar um bloco independente, como os usados no exemplo anterior, ou um bloco que faz parte da estrutura de um comando, como o `while` por exemplo. O rótulo pode estar antes do comando ou antes do bloco, como mostra o fragmento a seguir.

```java
// Rótulo aparece antes da declaração
loop1: 
for (int i = 0; i <= 3; i++) {
  for (int j = 0; j <= 2; j++) {
    if (i == 1 && j == 1) break loop1; // Pula para fora do loop.
    System.out.println("i = " + i + " e j = " + j);
  }
}
        
System.out.println();
System.out.println("Depois do loop1.");
System.out.println();
        
// Rótulo aparece antes da declaração
for (int i = 0; i <= 3; i++)
loop2: {
  for (int j = 0; j <= 2; j++) {
    if (i == 1 && j == 1) break loop2; // Pula para fora do loop.
                
    System.out.println("i = " + i + " e j = " + j);
  }
}
         
System.out.println();
System.out.println("Depois do loop2.");
System.out.println();
```

Nesse programa existe duas partes que possuem mais ou menos a mesma estrutura, com exceção da localização do rótulo. No primeiro conjunto de `for`s aninhados o rótulo foi localizado antes do comando. Com essa organização, quando o comando `break loop1` é executado todas as iterações do loop1 são ignoradas e a execução do programa continua da próxima linha após o loop.

No segundo conjunto de `for`s aninhados o rótulo foi localizado antes do bloco. Com essa organização, quando o comando `break loop2` é lido a iteração atual do loop2 é finalizada, e a próxima é iniciada. 

Em ambos os casos o texto "i = 1 e j = 1" não é exibido. Mas no segundo o computador continua executando o loop uma vez que a variável i é acrescida uma unidade, passando a armazenar 2. Tome um tempo para analisar  o código e o resultado.

Resultado:

\~\~~ console

i = 0 e j = 0
i = 0 e j = 1
i = 0 e j = 2
i = 1 e j = 0

Depois do loop1.

i = 0 e j = 0
i = 0 e j = 1
i = 0 e j = 2
i = 1 e j = 0
i = 2 e j = 0
i = 2 e j = 1
i = 2 e j = 2
i = 3 e j = 0
i = 3 e j = 1
i = 3 e j = 2

Depois do loop2.

\~\~~

Essa forma do break é útil quando é necessário alterar o fluxo de dentro de estruturas aninhadas. Com esse uso restrito a essas situações, onde a mudança brusca no fluxo é realmente necessária

## Próximo! - O Comando continue

O `continue`, assim como o break, influência a progressão de uma estrutura de repetição.  Quando o `continue` é encontrado no bloco do loop, todas as declarações seguintes (que ainda estão dentro do bloco) são ignoradas. Assim, a próxima iteração é iniciada.

```java
for( int i = 1; i <= 10; i++){
  if (i == 5) continue; // Começa a próxima iteração.
  System.out.print(i + " "); // Será ignorado quando i = 5
}
```

Normalmente, o loop no fragmento acima exibiria todos os números de 1 até 10. Contudo, quando i contém 5, o comando continue é executado, o que finaliza a iteração atual e inicia a próxima. É importante notar que os parâmetros do loop ainda são respeitados, de modo que a próxima iteração somente acontece se a condição for satisfeita.

Resultado:

\~\~~ console

1 2 3 4 6 7 8 9 10

\~\~~

Se por acaso a iteração for a última, então o loop é terminado, e a execução do programa continua da linha após a declaração.

## Usando continue com Rótulos

Também podemos usar rótulos com o comando continue, Ele é útil para sair de loops aninhados enquanto mantem a execução do loop rotulado. O resultado é praticamente o mesmo que o do comando break quando este é colocado antes do bloco.

```java
// Rótulo aparece antes da declaração
loop1: 
for (int i = 0; i <= 3; i++) {
  for (int j = 0; j <= 2; j++) {
    if (i == 1 && j == 1) continue loop1; // Pula para a próxima iteração do loop1
      System.out.println("i = " + i + " e j = " + j);
    }
  }
}
```

Quando ambos i e j são 1 a execução do programa deve continuar da próxima iteração do loop1,

Resultado: 

\~\~~ console

i = 0 e j = 0
i = 0 e j = 1
i = 0 e j = 2
i = 1 e j = 0
i = 2 e j = 0
i = 2 e j = 1
i = 2 e j = 2
i = 3 e j = 0
i = 3 e j = 1
i = 3 e j = 2

\~\~~

Com

\---