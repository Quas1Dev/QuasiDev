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
Know the fundamentals of the class - Done

Understand how reference variables are assigned - Done

Understand how objects are created - Done

Create methods, return values, and use parameters 

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
  String estadoCivil;
}
```

Uma vez que os atributos são definidos, todos os objetos criados usando a classe terão esses atributos. Apesar disso, os valores de cada variável pode ser diferente para cada objeto, a depender do modo como atribuímos valores aos atributos.

Variáveis vazias são recebem um valor padrão, que pode ser false,, '\u000',  0, 0L, 0.0, 0.0F ou null &#8212 depende do tipo da variável. Desse modo, do jeito que está 

Se definirmos o valor de cada variável manualmente, todos s objetos terão os mesmos valores para cada um de seus atributos. Se declararmos como no fragmento

```java
class Pessoa
{
  // foram definidos dois atributos para a classe Pessoa.
  String nome = "John";
  String email = "john@dominio.com";
  String estadoCivil = "Solteiro";
}
```

todas as instâncias dessa classe criadas terão o nome John, o e-mail john@dominio.com, e o estado civil de Solteiro. Um maneira mais utilizada para iniciar essas variáveis é através da definição de um método construtor.

## Métodos

Como dito anteriormente, classes podem ter atributos e métodos. Nossa classe Pessoa tem atributos mas não tem métodos. Não há nada de errado em ter uma classe só com atributos, mas geralmente existe um ou mais métodos. 

Os métodos são, basicamente, coleções nomeadas de instruções. Normalmente, as instruções são para a realização de uma tarefa especifica, como calcular as combinações possíveis dos itens em um conjunto, ou recuperar no banco de dados os dados de um usuário. Elas podem ou não manipular os atributos da classe que a envolve, mas normalmente isso acontece. 

A forma mais simples de um método é:

```
<tipo de dado> <nome do método>([parâmetros]){
  // Declarações
  [return <valor de retorno>]
}
```

O `<tipo de dado>` define o tipo do valor que será retornado uma vez que todas as declarações contidas no métodos forem finalizadas. Pode ser um [tipo primitivo](https://tecnologiaeinformacao.netlify.app/java/java-variables-ptbr), como `int` ou `double`, mas também pode ser uma classe. Se o método não retornar nenhum valor, o tipo deve ser `void`.

O nome do método pode ser qualquer identificador válido no Java. Por convenção, a primeira letra deve estar em minúsculo. Além disso, nomes de métodos com múltiplas palavras, cada uma é apresentada com a primeira letra em maiúsculo, como  filtrarValores, ordenarDados. 

O nome do método é seguido por `()`. Dentro desses parênteses podem ser colocados parâmetros. Os parâmetros    é uma lista de variáveis que devem receber um valor quando o método for invocado. Os itens na lista são separados por vírgula, e cada item é formado pelo tipo da variável e um identificador, como `String nm`, ou `String ec`. Se o método não tiver nenhum parâmetro, nada será incluído entre parênteses.

No corpo/bloco do método, delimitado por `{` e `}` são colocadas as instruções necessárias para cumprir o propósito do método em questão. 

O comando `return` retorna um valor para o usuário. O tipo do valor retornado deve ser igual ao tipo especificado lá no cabeçalho do método. Se nenhum valor tiver que ser retornado, quando `<tipo de dado>` é `void`, comando `return` não precisa ser inserido na estrutura. 

O método no fragmento

```java
// Calcula a área com o comprimento da base e da altura
double calculaAreaTriangulo(double b, double a){
  double a = (b * a) / 2
  
  return a
}
```

é nomeada `calculaAreaTriangulo` 

### Adicionando Métodos a Classe Pessoa



## Usando new Para Instanciar Objetos

Classes são, geralmente, usadas para criar/instanciar objetos. Os objetos são criados com o operador `new`. e são referenciados por uma variável do mesmo tipo do objeto.

```java
// Declara uma variável do tipo Pessoa
// e armazena o endereço par aum objeto do tipo Pessoa nela.
Pessoa p1 = new Pessoa();
```

No centro nós temos o sinal de igualdade que indica o que está direita será armazenado na variável a esquerda. O   nome da classe aparece antes do nome da variável para definir o seu tipo. Do lado direito do sinal de igualdade inserimos a palavra chave `new` seguida de um construtor. 

O operador `new` aloca memória dinamicamente (i.e., durante a execução do programa) para um objeto. Depois de alocar a memória, o construtor Pessoa() é invocado. O construtor é um método especial em Java que serve para criar um objeto e iniciar ele de alguma maneira. O objeto é colocado no espaço da memória alocado por `new` e então uma referencia para esse objeto é retornada para a variável. Essa referência é o endereço do espaço na memória onde o objeto instanciado está armazenado. 

Todas as classes têm um construtor, que pode ser definido pelo programador ou criado automaticamente pelo compilador do Java. Nossa classe Pessoas não tem um construtor declarado explicitamente, então o Java criou um  construtor padrão para ele. 

O objeto é armazenado em uma região da memória conhecida como heap &#8212; uma parte da memória principal que foi alocada para a máquina virtual do Java.

Nós podemos quebrar a declaração da variável Pessoa acima em duas. 

```java
Pessoa p1;
p1 = new Pessoa();
```

Na primeira linha declaramos uma variável que pode referenciar um objeto do tipo Pessoa. Na linha seguinte,  foi criado um novo objeto do tipo Pessoa uma referência para ele é armazenado na variável `p1`. É comum nos referirmos a variável como se fosse o objeto, tipo 'o objeto p1', mas a variável a  variável apenas armazena uma referência para o objeto e não o objeto em si. Vamos ver uma consequência prática desse fato em breve.

Para acessar os

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

## O Que é this

## A Classe Príncipal e o Método main

## Extends