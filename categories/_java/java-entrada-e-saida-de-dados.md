---
layout: article
categories: []
tags: []
lastUpdated: 2022-09-11 08:42:53 +0000
excerpt_separator: "<!--more-->"
order: 6
title: Java - Entrada e Saída de Dados
description: É comum a necessidade de ler dados que o usuário digita ou mostrar dados
  para o usuário. Nesse texto nós vamos explorar como fazer isso usando a linguagem
  Java.
permalink: "/java/:title"
date: 2022-07-31 16:55:00 +0000
author: Fernando Bonfim
sources:
- url: https://docs.oracle.com/javase/specs/jls/se18/jls18.pdf
  title: The Java® Language Specification Java SE 18 Edition
secondary_sources: []
published: false

---
Programas são conjuntos de instruções que descrevem o que um computador deve fazer, quais atividades deve realizar. As instruções que compõem um programa dependem do seu objetivo, mas geralmente inclui uma ou outra instrução para mostrar alguma mensagem na tela para o usuário.

Na seção seguinte vamos abordar superficialmente os métodos `print()` e `println()`. A intenção é somente entender o que esperar quando eles são encontrados em um exemplo.

## Saída de Dados

Ambos os métodos `print()` e `println()` são usados para exibir alguma mensagem na tela. A declaração completa para usar esses métodos é `System.out.print([mensagem])` e`System.out.println([mensagem])` respectivamente. A diferença entre um e outro é que o primeiro apenas exibe a mensagem, enquanto o último ainda pula uma linha depois de mostrar a mensagem.

A mensagem pode ser um texto qualquer, como no fragmento a seguir.

```java
class DemoPrint {
  public static void main (String[] args){
    // Exibe Olá, mundo! na tela
    System.out.print("Olá, mundo!");
  }
}
```

Resultado:

    Olá, mundo!

Note que o texto é colocado entre aspas.

Além de um texto, a mensagem pode ser definida de outras formas. Por exemplo, a mensagem pode ser o resultado de uma operação matemática, como a soma ou a subtração

```java
class DemoPrint2 {
  public static void main (String[] args){
    // Exibe o resultado de 2 + 3 na tela
    System.out.print(2 + 3);
  }
}
```

Resultado:

    5

Como veremos em outro texto, valores podem ser armazenados no que chamamos de variáveis. As variáveis nos permitem "nomear um dado". Usamos esse nome/identificador para acessar o dado e, se necessário, exibi-lo na tela. Para exibir o valor de uma variável, nós incluímos seu nome entre o par de parênteses do método print ou println, assim como no trecho a seguir.

```java
class DemoPrint3 {
  public static void main (String[] args){
    // Cria uma variável que guarda o número 3
    int id = 3;
    // Exibe o valor da variável id
    System.out.print(id);
  }
}
```

Resultado:

    3

Se a mensagem precisar incluir um texto junto com o valor da variável, nós usamos o sinal de mais (+) para separar a variável do texto.

```java
class DemoPrint4 {
  public static void main (String[] args){
    // Cria uma variável que guarda o número 3
    int idade = 22;
    // Exibe o valor da variável idade com um texto
    System.out.print("Você tem " + idade + " anos!");
  }
}
```

Resultado:

``` 
Idade: 22
```

Note que o sinal de mais não está somando os dois valores. O Java, assim como outra linguagens, pode reaproveitar um ou outro simbolo para diferentes propósitos.

Até o momento nós só usamos o comando System.out.print(). Isso não nos trouxe nenhum problema já que apenas um valor é exibido, mas se precisamos mostrar mais de um valor em sequência, é interessante usar o comando System.out.println(). O "ln" no fim do nome do método, antes do par de parenteses, vem de "line". Isso é para indicar que o comando pretende pular uma linha assim que exibir a mensagem na tela.

```java
class DemoPrint4 {
  public static void main (String[] args){
  	  // Exibe duas mensagens em linhas diferentes
      System.out.println("Bem vindo!");
      System.out.println("Sinta-se à vontde!");
  }
}
```

Resultado:

    Bem vindo!
    Sinta-se à vontde!

Se o `System.out.print()` tivesse sido utilizado, as duas frases estariam na mesma linha.

```java
class DemoPrint5 {
  public static void main (String[] args){
      System.out.print("Bem vindo!");
      System.out.print("Sinta-se à vontde!");
  }
}
```

Resultado:

    Bem vindo!Sinta-se à vontde

Os métodos `print()` e `println()` podem receber uma mensagem de outras formas, mas vamos parar por aqui. O importante a se entender nesse inicio é o comportamento que esperamos ao usar esses dois métodos. As outras formas para especificar a mensagem serão vistas em outros momentos.

***

Nessa seção nós apresentamos o comando `System.out.print()` e o `System.out.println()`. Vimos que ambos são usados para mostrar alguma coisa para o usuário, mas o segundo adiciona uma nova linha.

Tenha em mente que os comandos apresentados só serão compreendidos depois que conceitos como classes, objetos, métodos, e atributos, forem apresentados. Você aprender, por exemplo, que `System` é uma classe, `out` é uma variável de classe que armazena um objeto, e `println()` é um dos métodos desse objeto. Mas não se preocupe com isso nesse momento. Por ora, basta saber qual é o propósito e como usar os comandos apresentados.

***

O comando será colocado dentro de um método. Os métodos costumam ter um nome seguido de um par de parênteses que podem ou não envolver alguma coisa, como o `main(String[] args)` no fragmento de código abaixo, então você identificar um método quando ver uma estrutura parecida. O exato significado de cada parte da definição de um método, e como você pode criar seus próprios métodos, será discutido em outro texto.