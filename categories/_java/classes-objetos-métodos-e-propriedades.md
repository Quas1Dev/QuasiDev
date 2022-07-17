---
title: Classes, Objetos, Métodos e Propriedades
layout: article
permalink: /java/:title
description: Tudo que você precisa saber sobre os conceitos centrais da
  programação orientada a objetos (POO).
categories:
  - Java
tags:
  - objetos
  - classes
  - propriedades
  - métodos
date: 2022-07-17T15:09:08.540Z
lastUpdated: 2022-07-17T15:09:09.139Z
author: Fernando Bonfim
excerpt_separator: <!--more-->
sources:
  - url: https://docs.oracle.com/javase/specs/jls/se18/jls18.pdf
    title: The Java® Language Specification Java SE 18 Edition
order: 10
---
Know the fundamentals of the 

class Understand how objects are created 

Understand how reference variables are assigned 

Create methods, return values,and use parameters 

Use the return keyword Return a value from a method 

Add parameters to a method 

Utilize constructors 

Create parameterized constructors 

Understand new 

Understand garbage collection 

Use the this keyword]

Nessa seção eu vou apresentar a você o conceito de classes e objetos. Vamos aprender a criar uma classe e então intanciar objetos a partir dela, como declarar propriedades e métodos nas classes e acessar elas, e como se livrar de objetos quando eles não forem mais necessários.

## Declarando Classes

Classes são modelos para criação de um ou mais objetos. Cada classe generaliza as características de entidades (algo que existe) do mundo real, e os objetos são manifestações especificas, ou instâncias, dessa entidade no software. Você pode pensar em classes como esses moldes para doces, que permitem delinear um formato especifico para um doce. Os objetos, nesse caso, são como os doces que são formados com o mesmo molde. Essa analogia, é claro, tem suas limitações, já que nenhuma ação é definida pelo molde, mas você pegou o espirito. 

Cada classe define um conjunto de propriedades e ações que podem ser realizadas com ou pelo o objeto criado com base nela. As **propriedades**, também chamadas de **campos ou atributos**, são **variáveis** que armazenam um valor que pode ser o mesmo para todos os objetos formados pela classe, ou pode variar para cada objeto formado pela classe. Entidades do mundo real têm propriedades. Por exemplo, um carro pode ter uma cor específica, pode ser de diversas marcas, consegue percorrer uma certa distância com um litro de combustível,  etc. Se definirmos uma classe carro, podemos incluir variáveis que guardam os valores para cada uma dessas propriedades.

As ações são **métodos** (conjuntos de instruções nomeadas) que determinam o passo a passo para um objeto fazer alguma coisa ou alguma coisa ser feita com o objeto. Discutimos métodos em outra seção. Assim com propriedades, os objetos da vida real também podem sofrer alguma ação ou fazer alguma coisa. Um carro pode ser acelerado, ser abastecido, ser ligado, trocar de marcha etc. Se definirmos uma classe carro, métodos podem ser usados para descrever os passos para cda uma dessas ações.

Os diversos métodos e atributos que fazem parte de uma classe são chamados de membros.

Uma classe precisa ser declarada antes de ser usada para definir um objeto.  A sintaxe mais simples para declaração de uma classe é:

```
class <nome da classe> {
  // Membros da classe
}
```

A declaração é formada por um cabeçalho e um corpo. O cabeçalho é formado pela palavra reservada `class` que é seguida por um nome que identifica a classe (assim ela pode ser referenciada por todo o código fonte). O corpo é um tudo que está entre `{` e `}`. 

Por convenção o primeiro caráter do nome de uma classe deve estar em maiúsculo. Além disso, outras palavras que fazem parte do nome de uma variável também terão a primeira letra maiúsculo.

```java
class Pessoa {
   // Membros da classe pessoa
}
```

O fragmento acima declara uma classe com nome Pessoa, que presumivelmente descreve características de uma pessoa. 

É importante notar que uma classe é apenas uma abstração. Uma entidade real pode ter centenas de milhares de propriedades e ações relacionadas com ele, mas apenas as que importam para o objetivo do projeto são selecionados. Para representar um cliente, por exemplo, sua aplicação pode precisar do nome, CPF, endereço, e-mail, e data de nascimento, mas pode deixar de fora o tipo sanguíneo, ou a comida preferida.

Apesar de não haver regras que impeçam, não é adequado ter membros de entidades diferentes em uma mesma classe. Se uma classe é utilizada para descrever características de funcionários, não deve ser usada descrever o mercado de ações. Todos os membros de uma classe precisam estar logicamente conectadas. Caso contrário, o código pode se tornar difícil de ler.

## Incluindo Atributos

Os atributos são variáveis que armazenam informações, ou dados, sobre um objeto. Para uma pessoa, esses atributos podem ser seu  nome, e-mail, telefone, CPF, etc.

 No fragmento abaixo nós continuamos a declaração da classe Pessoa iniciada na seção anterior.

```java
class Pessoa
{
  // foram definidos dois atributos para a classe Pessoa.
  String nome;
  String email;
}
```

Uma vez que os atributos são definidos, todos os objetos criados usando a classe terão essas características.



## Usando new Para Instanciar Objetos

Classes são, geralmente, usadas para criar/instanciar objetos. Os objetos são criados com o operador `new`. e são referenciados por uma variável do mesmo tipo do objeto.

```java
// Declara uma variável do tipo Pessoa
// e armazena o endereço par aum objeto do tipo Pessoa nela.
Pessoa p1 = new Pessoa();
```

No centro nós temos o sinal de igualdade que indica o que está direita será armazenado na variável a esquerda. O   nome da classe aparece antes do nome da variável para definir o seu tipo. Do lado direito do sinal de igualdade inserimos a palavra chave `new` seguida de um construtor. 

O operador `new` aloca memória dinamicamente (i.e., durante a execução do programa) para um objeto. Depois de alocar a memória, o construtor Pessoa() é invocado. O construtor é um método especial em Java que serve para criar um objeto e iniciar ele de alguma maneira. O objeto é colocado no espaço da memória alocado pelo `new` e então uma referencia para esse objeto é retornada para a variável. Essa referência é o endereço do espaço na memória onde o objeto instanciado está armazenado. 

Todas as classes têm um construtor, que pode ser definido pelo programador ou criado automaticamente pelo compilador do Java. Nossa classe Pessoas não tem um construtor declarado explicitamente, então o Java criou um  construtor padrão para ele. 

O objeto é armazenado em uma região da memória conhecida como heap &#8212; uma parte da memória principal que foi alocada para a máquina virtual do Java.

Nós podemos quebrar a declaração da variável Pessoa acima em duas. 

```java
Pessoa p1;
p1 = new Pessoa();
```

Na primeira linha declaramos uma variável que pode referenciar um objeto do tipo Pessoa. Na linha seguinte,  foi criado um novo objeto do tipo Pessoa uma referência para ele é armazenado na variável `p1`

Note que a variável apenas armazena uma referência para o objeto e não o objeto em si. 



You explicitly declare a constructor within a class’s body by specifying the name of the class
followed by a parameter list, which is a round bracket-delimited and comma-separated list of zero
or more parameter declarations. A parameter is a constructor or method variable that receives an
expression value passed to the constructor or method when it is called. This expression value is
known as an argument.
Listing 3-2 enhances Listing 3-1’s Image class by declaring three constructors with parameter lists
that declare zero, one, or two parameters and a main() method for testing this class.
Listing 3-2. Declaring an Image Class with Three Constructors and a main() Method
public class Image
{
Image()
{
System.out.println("Image() called");
}
Image(String filename)
{
this(filename, null);
System.out.println("Image(String filename) called");
}
Image(String filename, String imageType)
{
System.out.println("Image(String filename, String imageType) called");
if (filename != null)
{
System.out.println("reading " + filename);
if (imageType != null)
System.out.println("interpreting " + filename + " as storing a " +
imageType + " image");
}

## A Classe Príncipal e o Método main

## Extends