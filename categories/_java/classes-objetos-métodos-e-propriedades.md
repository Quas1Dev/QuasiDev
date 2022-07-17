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

Cada classe define um conjunto de propriedades e  ações que podem ser realizadas com ou pelo o objeto criado com base nela. As **propriedades**, também chamadas de **campos**, são variáveis que armazenam um valor que pode ser o mesmo para todos os objetos formados pela classe, ou pode variar para cada objeto formado pela classe. Objetos da vida real têm propriedades. Por exemplo, um carro pode ter uma cor específica, pode ser de diversas marcas, consegue percorrer uma certa distância com um litro de combustível,  etc. Se definirmos uma classe carro, podemos incluir variáveis que guardam os valores para cada uma dessas propriedades.

As ações são métodos (conjuntos de instruções nomeadas) que determinam o passo a passo para um objeto fazer alguma coisa ou alguma coisa ser feita com o objeto. Assim com propriedades, os objetos da vida real também podem sofrer alguma ação ou fazer alguma coisa. Um carro pode ser acelerado, ser abastecido, ser ligado, trocar de marcha etc. Se definirmos uma classe carro, métodos podem ser usados para descrever os passos para cda uma dessas ações.

Uma classe precisa ser declarada antes de ser usada para definir um objeto.  A sintaxe para declaração de uma classe é:

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

## Usando new Para Instanciar Objetos 

Usando