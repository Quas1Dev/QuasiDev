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
---
Você já deve ter visto o comando `break`sendo usado com o comando `switch`. Naquele contexto ele indica o fim dos comandos associados com cada `case`. Mas essa não é a única utilidade desse comando como vamos descobrir a seguir. Além de discutir sobre o comando break, nós vamos conhecer o comando continue.

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

Perceba que assim que `cont`passa a armazenar o valor 20 o teste da estrutura de decisão `if` da verdadeiro e então o comando `break` é lido. O loop para, e o comando `System.out.println`, que está logo após o loop, é executado. 

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

O comando `break `que é parte de uma estrutura `switch `que por algum motivo esteja dentro de uma estrutura de repetição **afeta** **apenas** a declaração switch, e o `loop `continua normalmente.  Como no trecho abaixo:

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



## Pulando Voltas com o continue