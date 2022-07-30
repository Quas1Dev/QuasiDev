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

## Saída de Dados

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

 Como veremos em outro post, valores podem ser armazenados em variáveis, e as varáveis também podem ter seus valores exibidos com essa declaração. Para isso, seu identificador é incluído sem colocá-lo entre aspas.

```java
class DemoPrint3 {
  public static void main (String[] args){
    int id = 3;
    // Exibe o valor da variável id
    System.out.println(id);
  }
}
```

Um outro componente da linguagem Java que vamos estudar é o método. Esse é usado para agrupar instruções que executam alguma funcionalidade especifica, e pode retornar um valor como resultado. O valor retornado também pode ser exibido com o System.out.println().

```java
class DemoPrint3 {
  static int soma(id) {
    // Retorna o resultado da soma de 2 e 2.
    return 2 + 2;
  }
  
  public static void main (String[] args){
    // Exibe o valor da variável id
    System.out.println(soma());
  }
}
```

No fragmento acima, o comando `System.out.println()` exibe qualquer valor que for retornado pelo método soma(). Esse método retorna o resultado da soma entre 2 + 2, portanto, o resultado exibido na tela será 4. Na realidade, os métodos podem ser usados para funcionalidades muito mais complexas e úteis que isso, mas vamos parar por aqui por enquanto.

Não precisa exibido só um texto ou só uma variável.  Nós podemos fazer combinações usando o operador `+`  que,  além de ser vir para somar dois números, também funciona para juntar os dados que serão exibidos;

```java
class DemoPrint4 {
  static int soma(id) {
    // Retorna o resultado da soma de 2 e 2.
    return 2 + 2;
  }
  
  public static void main (String[] args){
    // Exibe o valor da variável id
    System.out.println("soma() retorna: " + soma());
  }
}
```

No lugar de soma() poderia estar qualquer outra coisa que gere um valor que pode ser impresso na tela par o usuário.

## Entrada de Dados