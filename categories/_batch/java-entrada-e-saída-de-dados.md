---
title: Java - Entrada e Saída de Dados
layout: articles
permalink: /java/:title
description: É comum a necessidade de ler dados que o usuário digita ou mostrar
  dados para o usuário. Nesse texto nós vamos explorar como fazer isso usando a
  linguagem Java.
categories:
  - Java
tags:
  - entrada
  - saida
  - dados
date: 2022-07-30T12:59:50.693Z
lastUpdated: 2022-07-30T13:08:03.317Z
author: Fernando Bonfim
excerpt_separator: <!--more-->
order: 3
---
Estrutura básica

output - Textos - Variáveis - Variáveis e textos

\- Qual é o comando para exibir dados na tela;

Input - Scanner

* Qual é o comando para ler algum dado digitado pelo usuário

Saida de Dados

Nesse curso nós vamos frequentemente precisar exibir alguma informação para o usuário. Geralmente, nós vamos usar o comando `System.out.print(<mensagem>)` ou `System.out.println(<mensagem>)`.  A diferença entre um e outro é que o primeiro apenas exibe a mensagem, enquanto o último exibe a mensagem e pula para a linha seguinte.

A mensagem pode ser um texto qualquer, que será colocado entre aspas:

```java
class DemoPrint {
  public static void main (String[] args){
    // Exibe Olá, mundo! na tela
    System.out.println("Olá, mundo!");
  }
}
```

Além de um texto entre aspas, a mensagem pode ser definida de outras formas. Como o resultado de uma operação matemática, como a soma ou a subtração:

```java
class DemoPrint2 {
  public static void main (String[] args){
    // Exibe o resultado de 2 + 3 na tela
    System.out.println(2 + 3);
  }
}
```