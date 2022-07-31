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

O comando será colocado dentro de um método, que terá uma estrutura parecida com public static void main ()

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

Um outro componente da linguagem Java que vamos estudar é o método. Esse é usado para agrupar instruções que executam alguma funcionalidade especifica, e pode retornar um valor como resultado. O valor retornado também pode ser exibido com o System.out.println().

```java
class DemoPrint3 {
  static int soma() {
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
  static int soma() {
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

Além de exibir dados para o usuário, também é possível receber dados.