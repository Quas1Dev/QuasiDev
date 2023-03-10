---
title: Java - Break e Continue
layout: article
permalink: "/java/:title"
description: Entenda tudo o que você precisa sobre os comandos break e continue.
categories:
- Java
tags:
- continue
- break
- repetição
- mudança de fluxo
date: 2022-07-02T09:01:48.695+00:00
lastUpdated: 2022-08-21T14:07:58.333+00:00
author: Fernando Bonfim
excerpt_separator: "<!--more-->"
sources:
- url: https://docs.oracle.com/javase/specs/jls/se18/jls18.pdf
  title: 'The Java® Language Specification: Java SE 18 Edition'
order: 15

---
Você já deve ter visto o comando `break` sendo usado com o comando `switch`. Naquele contexto ele indica o fim do conjunto de comandos associados com cada `case`, fazendo a execução do programa continuar da próxima linha após a estrutura de decisão `switch`. Mas esse comando também pode ser usado para sair fora de estruturas de repetição, como vamos ver a seguir. Além de discutir sobre o comando `break`, vamos conhecer o comando `continue`.

Nota: para compreender esse tutorial é necessário já estar familiarizado com as [estruturas de repetição](https://tecnologiaeinformacao.netlify.app/java/java-loop-structures) em Java.

## Interrompendo Repetições com break

É possível interromper a execução de uma estrutura de repetição a força, ignorando completamente qualquer código remanescente ou mesmo a condição que controla quando o loop termina, usando o comando `break`. Sempre que o comando `break` é encontrado, o loop é finalizado e a execução do programa continua da próxima linha após a estrutura de repetição em questão. 

O programa abaixo deveria exibir todos os números entre 0 e 100 pulando de 2 em 2. Contudo, assim que a variável `cont` chegar a 20 nós usamos o comando `break` para parar a execução daquele loop imediatamente.

```java
for (int cont = 0; cont <= 100; cont += 2){
  System.out.print(cont + " ");
  
  // Para o loop quando cont = 20
  if (cont == 20) break;
}

System.out.println("- Estamos fora do loop!");
```

Resultado:

```console
0 2 4 6 8 10 12 14 16 18 20 - Estamos fora do loop
```

Perceba que assim que `cont` passa a armazenar o valor 20 o teste da estrutura de decisão `if` da verdadeiro e então o comando `break` é lido. O loop para, e o comando `System.out.println`, que está logo após o loop, é executado.  

É importante notar que, em caso de loops aninhados apenas o mais interno é finalizado. Como no fragmento abaixo:

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

```console
Contador do loop externo: 0
    Contador do loop interno: 0 2 4 6 8 10 12 14 16 18 20 
Contador do loop externo: 1
    Contador do loop interno: 0 2 4 6 8 10 12 14 16 18 20 
Contador do loop externo: 2
    Contador do loop interno: 0 2 4 6 8 10 12 14 16 18 20 
Loop finalizado!
```

O comando `break` pode ser usado com qualquer estrutura de repetição, seja o `for`, `do-while` ou `while`. O comportamento é o mesmo com qualquer uma das opções: o loop atual é interrompido e o programa continua a ser executado da próxima linha.

O comando `break` que é parte de uma estrutura `switch` que, por algum motivo. esteja dentro de uma estrutura de repetição afeta **apenas** a declaração switch, e o loop continua normalmente. Como no trecho abaixo:

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

```console
i é 0
i é 1
i é 2
Loop finalizado!
```

A cada volta do loop o valor de `i` é checado contra uma série de constantes. Quando há uma correspondência entre os valores comparados, as instruções associadas com a constante são executadas. Cada conjunto de instruções é delimitado com o comando `break`, que é necessário para impedir a execução das instruções associadas a outras constantes. Note que o comando `break` é encontrado duas vezes antes da última volta, mas isso não afeta o andamento da execução do loop.

O comando `break` pode aparecer mais de uma vez dentro de um mesmo loop. mas é melhor não exagerar para não deixar o programa difícil de entender.

## Usando break com Rótulos

Em algumas linguagens de programação existe um comando chamado `goto`. Esse comando serve para indicar que parte do código fonte deve ser executado a seguir. Sua forma usual é `goto <rótulo>`, onde `<rótulo>` deve ser substituído por um identificador válido na linguagem. Esse identificador deve estar sendo usado para marcar um ponto especifico no código fonte do programa. Uma vez que o `goto <rótulo>` é encontrado, a execução do programa continua a partir do ponto marcado pelo rótulo. Podemos olhar um código curtinho em Batch só para ilustrar do que estamos falando:

``` batchfile
@echo off

ECHO Um Programa em Batch.

GOTO continuacao

ECHO Essa linha não será executada.

:continuacao

ECHO Oi! Eu sou um programa escrito em Batch.

PAUSE
```

Vamos analisar um pouco esse código. ignorando o comando `@echo off` que não vem ao caso explicar aqui, Esse programa serve basicamente para imprimir algumas frases na tela para o usuário usando o comando `echo`. A primeira linha que começa com `echo` exibe a frase "Um Programa em Batch," na tela. 

Logo em seguida, existe o comando `goto continuacao` que aponta usando para o trecho do programa marcado com o identificador `continuacao`. Ao executar essa linha o computador sabe que os próximos passos serão determinados pelas declarações após o local onde esse rótulo aparece no código. Assim, ele chega até o comando que imprime "Oi! Eu sou um programa escrito em Batch.".

Perceba que nada entre o `goto continuacao` e :`continucao` é executado.

Resultado:

```console
Um Programa em Batch.
Oi! Eu sou um programa escrito em Batch.
```

Se quiser estudar a linguagem Batch, nós estamos preparando uma [série de tutoriais sobre essa linguagem](https://tecnologiaeinformacao.netlify.app/batch/batch-intro-to-batch-ptbr).

Voltando para o Java, não existe o comando `goto`. A ausência desse comando na linguagem é, geralmente, justificada com o argumento de que seu uso em demasia resulta em um programa difícil de entender e manter. Contudo, o Java oferece uma forma estendida do comando `break` que possuí um comportamento similar, mas que foi pensado para evitar os problemas levantados. 

A forma estendida é `break <rótulo>`, onde `<rótulo>` deve ser substituído por uma sequência de caracteres que identifica um bloco de código ou uma estrutura de repetição. Quando esse comando é executado, o computador continua a execução do programa a partir da primeira instrução que vem depois do bloco ou estrutura indicada.

Nota: estrutura aqui eu estou considerando desde o comando, que pode ser o for por exemplo, até o símbolo `}`,que marca o final do corpo da estrutura de repetição.

É importante destacar que o bloco de código, que é delimitado por `{` e `}`, deve englobar o comando break, mesmo que não diretamente. Por esse motivo, a forma estendida do `break` pode ser usada para sair de um ou mais blocos aninhados (que estão um dentro do outro), como veremos em nosso exemplo.  

```java
for (int i = 1; i <= 2; i++) {
  System.out.println("\n i é " + i);
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

No fragmento acima temos uma estrutura de repetição que conta de 1 a 2. Dentro dessa repetição nós temos dois blocos, que foram rotulados com os nomes um e dois. Dentro do bloco dois existe temos duas estruturas de decisão `if`, que determinam, nesse caso, para fora de qual bloco a execução do programa deve seguir, 

O primeiro `if` compara o valor de `i` com 1, e caso haja uma correspondência a execução pula para fora do bloco um. Nesse caso, o a instrução que imprime "Depois do bloco um." na tela é executada. 

O segundo `if` compara o valor de `i` com 2 e, caso haja correspondência, o comando `break dois` é executado, fazendo o computador sair do bloco com rótulo dois. Ao sair do bloco dois, a próxima instrução imprime "Depois do bloco dois." na tela. Depois dessa execução, todas as instruções do bloco um estão finalizadas, então o andamento do programa continua da próxima linha logo após o bloco um, que se trata da instrução que imprime "Depois do bloco um." .

Resultado:

```console
 i é 1
Depois do bloco um.

 i é 2
Depois do bloco dois.
Depois do bloco um.
```

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

Em ambos os casos o texto "i = 1 e j = 1" não é exibido. Mas no segundo o computador continua as próximas iterações do loop. Tome um tempo para analisar  o código e o resultado.

Resultado:

```console
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
```

Essa forma do break é útil quando é necessário alterar o fluxo de dentro de estruturas aninhadas. Com esse uso restrito a essas situações, onde a mudança brusca no fluxo é realmente necessária, o impacto na leitura do código é reduzida as situações que realmente precisam dessa funcionalidade.

## Próximo! - O Comando continue

O `continue`, assim como o break, influência a progressão de uma estrutura de repetição.  Quando o `continue` é encontrado no bloco do loop, todas as declarações seguintes (que ainda estão dentro do bloco) são ignoradas, e a próxima iteração é iniciada.

```java
for( int i = 1; i <= 10; i++){
  if (i == 5) continue; // Começa a próxima iteração.
  System.out.print(i + " "); // Será ignorado quando i = 5
}
```

Normalmente, o loop no fragmento acima exibiria todos os números de 1 até 10. Contudo, quando i contém 5, o comando `continue` é executado, o que finaliza a iteração atual e inicia a próxima. É importante notar que os parâmetros do loop ainda são respeitados, de modo que a próxima iteração somente acontece se a condição for satisfeita. Se por acaso a iteração for a última, então o loop é terminado, e a execução do programa continua da linha após a declaração.

Resultado:

```console
1 2 3 4 6 7 8 9 10
```

## Usando continue com Rótulos

Também podemos usar rótulos com o comando continue, Ele é útil para sair de loops aninhados enquanto mantem a execução do loop rotulado. O resultado é praticamente o mesmo que o do comando `break` quando este é colocado antes do bloco de uma estrutura de repetição.

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

Quando ambos `i` e `j` são 1 a execução do programa deve continuar da próxima iteração do `loop1`,

Resultado: 

```console
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
```

- - -

Nesse tutorial nós discutimos os comandos `break`e `continue`. Vimos que o comando `break` serve, principalmente, para encerrar uma repetição.  O `continue`, por outro lado, é usado para iniciar a próxima iteração do loop.  Nós também entendemos como utilizar esses comando junto com um rótulo, que nos permite apontar para uma declaração especifica que sofrerá o efeito do comando em questão.