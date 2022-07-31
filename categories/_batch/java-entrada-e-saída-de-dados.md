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
date: 2022-07-31T12:30:34.588Z
lastUpdated: 2022-07-31T12:30:35.282Z
author: Fernando Bonfim
excerpt_separator: <!--more-->
order: 3
---
Programas são conjuntos de instruções que descrevem o que um computador deve fazer, quais atividades deve realizar. As instruções que compõem um programa depende do seu objetivo, mas geralmente inclui uma ou outra instrução para mostrar alguma mensagem na tela do monitor, ou ler o que o usuário está digitando. 

Os programas que apresentamos como exemplo de uso de um comando geralmente exibe alguma coisa na tela para o usuário.  Então, na seção seguinte serão apresentadas, de forma breve, as declarações que usaremos em no para mostrar alguma coisa para o usuário. 

## Saída de Dados

Geralmente, nós vamos usar o comando `System.out.print([mensagem])` ou `System.out.println([mensagem])`.  A diferença entre um e outro é que o primeiro apenas exibe a mensagem, enquanto o último pula uma linha depois de mostrar a mensagem.

O comando será colocado dentro de um método. Os métodos costumam ter um nome seguido de um par de parênteses que podem ou não envolver alguma coisa, como o `main(String[] args)` no fragmento de código abaixo, então você identificar um método quando ver uma estrutura parecida. O exato significado de cada parte da definição de um método, e como você pode criar seus próprios métodos, será discutido em outro texto. 

A mensagem pode ser um texto (uma string) qualquer, que será colocado entre aspas,

```java
class DemoPrint {
  public static void main (String[] args){
    // Exibe Olá, mundo! na tela
    System.out.print("Olá, mundo!");
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
    System.out.print(2 + 3);
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
    System.out.print(id);
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
    System.out.print("Bem vindo, " + nome + "!");
  }
}
```

Resultado:

```
John Doe
```

No lugar de soma() poderia estar qualquer outra coisa que gere um valor que pode ser impresso na tela par o usuário.

Até o momento nós só usamos o comando `System.out.print()`. Isso não nos trouxe nenhum problema já que apenas um valor é exibido, Mas se precisamos mostrar mais de um valor em sequência, é interessante usar o comando `System.out.println()`, como no fragmento a seguir:

```
class DemoPrint4 {
  public static void main (String[] args){
      System.out.println("Bem vindo!");
      System.out.println("");
  }
}
```

- - -

Nessa seção nós apresentamos o comando System.out.print() e o System.out.println(). Vimos que ambos são usados para mostrar alguma coisa para o usuário, mas o segundo adiciona uma nova linha. 

Tenha em mente que os comandos apresentados só serão compreendidos depois que conceitos como classes, objetos, métodos, e atributos, forem apresentados. Você aprender, por exemplo, que `System` é uma classe, `out` é uma variável de classe que armazena um objeto, e `println()` é um dos métodos desse objeto. Mas não se preocupe com isso nesse momento, por hora, basta saber qual é o propósito e como usar os comandos apresentados.