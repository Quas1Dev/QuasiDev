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
date: 2022-07-31T10:09:53.179Z
lastUpdated: 2022-07-31T10:09:53.887Z
author: Fernando Bonfim
excerpt_separator: <!--more-->
order: 3
---
Programas são conjuntos de instruções que descrevem o que um computador deve fazer, quais atividades deve realizar. As instruções que compõem um programa depende do seu objetivo, mas geralmente inclui uma ou outra instrução para mostrar alguma mensagem na tela do monitor, ou ler o que o usuário está digitando. 

Em nossos exemplos de código nós geralmente exibimos alguma coisa na tela, e eventualmente pedimos para o usuário digitar a alguma coisa para a gente.  Então, nas seções seguintes serão apresentadas, de forma breve, as declarações que usaremos em nossos futuros exemplos para ler ou mostrar algum texto ou resultado de um processamento para o usuário. 

Tenha em mente que os comandos apresentados só serão compreendidos depois que conceitos como classes, objetos, métodos, e atributos, forem apresentados. Por hora, basta saber qual é o propósito e como usar os comandos apresentados. 

## Saída de Dados

Geralmente, nós vamos usar o comando `System.out.print([mensagem])` ou `System.out.println([mensagem])`.  A diferença entre um e outro é que o primeiro apenas exibe a mensagem, enquanto o último pula uma linha depois de mostrar a mensagem.

O comando será colocado dentro de um método. Os métodos costumam ter um nome seguido de um par de parênteses que podem ou não envolver alguma coisa, como o `main(String[] args)` no fragmento de código abaixo, então você identifica-los dessa meneíra.

A mensagem pode ser um texto (uma string) qualquer, que será colocado entre aspas,

```java
class DemoPrint {
  public static void main (String[] args){
    // Exibe Olá, mundo! na tela
    System.out.println("Olá, mundo!");
  }
}
```

Resultado:

```
Olá, mundo!
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

Resultado:

```
5
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

Resultado:

```
3
```

Não precisa exibido só um texto ou só uma variável.  Nós podemos fazer combinações usando o operador `+`  que,  além de ser vir para somar dois números, também funciona para juntar os dados que serão exibidos;

```java
class DemoPrint3 {
  public static void main (String[] args){
    String nome = "John Doe"
    // Exibe o valor da variável id
    System.out.println("Bem vindo, " + nome + "!");
  }
}
```

Resultado:

```
John Doe
```

No lugar de soma() poderia estar qualquer outra coisa que gere um valor que pode ser impresso na tela par o usuário.

- - -