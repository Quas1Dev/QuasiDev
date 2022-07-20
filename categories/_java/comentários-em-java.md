---
title: Comentários em Java
layout: articles
permalink: /java/:title
description: Comentários são uteis para facilitar a leitura de um programa. Aqui
  nós discutimos duas das maneiras disponíveis para comentar em Java.
categories:
  - Java
tags:
  - comentários
  - documentação
  - legibilidade
date: 2022-07-20T20:59:15.833Z
lastUpdated: 2022-07-20T20:59:16.497Z
author: Fernando Bonfim
excerpt_separator: <!--more-->
sources:
  - url: https://docs.oracle.com/javase/specs/jls/se18/jls18.pdf
    title: The Java® Language Specification Java SE 18 Edition
order: 4
---
Conforme um programa se expande em tamanho e complexidade, fica cada vez mais complicado entende-lo e saber o que cada parte faz. Para amenizar esse problema, é comum incluir comentários no código explicando brevemente o que faz algumas partes do código. Nessa seção, nós vamos discutir como incluir comentários em um programa escrito em Java.

## O que são Comentários?

Comentários são textos inseridos em um código fonte que não instrui o computador a fazer alguma coisa. Esse texto é completamente ignorado na hora de gerar as instruções de máquina ou o bytecode no caso do Java. Isso faz dos comentários uma ótima ferramenta para inserir informações importantes para o programador lidando com o programa no próprio código fonte.

## Comentário em Linha Única

Muitas linguagens de programação oferecem uma maneira de escrever comentários que se expandem por mais de uma linha, e outra para comentários em uma única linha. 

Para escrever um comentário em uma única linha em Java usamos um par de barra `//` seguido do comentário que se deseja fazer.

```java
class ComentarioDemo1 {
  public static void main (String[] args) {
    // Esse é um comentário qualquer - Será ignorado pelo compilador Java
    System.out.println("Olá, Mundo!");
  }
}
```

Apenas o que está na mesma linha e vem depois do par de barras é ignorado. Desse modo, podemos incluir comentários depois de uma instrução.

```java
class ComentarioDemo2 {
  public static void main (String[] args) {
    System.out.println("Olá, Mundo!"); // Comentário qualquer - Será ignorado pelo compilador Java
  }
}
```

## Comentário em Múltiplas Linhas

Comentários mais longos ou que precisam de múltiplas linhas, podem ser incluídos entre `/*` e `*/`. 

```java
class ComentarioDemo3 {
  public static void main (String[] args) {
    /*
      Outro comentário qualquer.
      Pode ser qualquer coisa mesmo.

              ,----------------,               ,---------,
          ,-----------------------,          ,"        ,"|
        ,"                      ,"|        ,"        ,"  |
       +-----------------------+  |      ,"        ,"    |
       |  .-----------------.  |  |     +---------+      |
       |  |                 |  |  |     | -==----'|      |
       |  |  Amo código que |  |  |     |         |      |
       |  |  funciona       |  |  |-----|`---=    |      |
       |  |  C:\>_          |  |  |   ,/|==== ooo |      ;
       |  |                 |  |  |  // |(((( [33]|    ,"
       |  `-----------------'  |," .;'| |((((     |  ,"
       +-----------------------+  ;;  | |         |,"
          /_)______________(_/  //'   | +---------+
     ___________________________/___  `,
    /  oooooooooooooooo  .o.  oooo /,   \,"-----------
   / ==ooooooooooooooo==.o.  ooo= //   ,`\--{)B     ,"
  /_==__==========__==_ooo__ooo=_/'   /___________,"
 
    */
    System.out.println("Olá, Mundo!");
  }
}
```

Arte copiada de {% import postLink.html text="30+ Piece of Art Code Comment People Ever Wrote in Code" url="https://javascript.plainenglish.io/17-piece-of-art-code-comment-people-wrote-in-code-60a4284e0d92" %}.

Os comentários são pensados para informar algo que tenha alguma utilidade.

- - -

Essas são as maneiras de se comentar um código em Java. De inicio pode não parecer tão importante, mas conforme avança no desenvolvimento de um programa você perceber que comentários são fundamentais para manter o código inteligível. 

Existe uma outra categoria de comentários usada junto a ferramenta javadoc para documentar classes, métodos e atributos, mas essa categoria será apresentada depois que forem apresentados a esses conceitos.