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

## Classes

Classes são modelos para criação de um ou mais objetos. Cada classe define um conjunto de características e ações que podem ser realizadas com ou pelo o objeto criado com base nela. Nós podemos fazer um paralelo com o planejamento para a fabricação de um carro. 

As you will see, classes are substantially more powerful than the limited ones presented so far. Let’s begin by reviewing the basics. A class is a template that defines the form of an object. It specifies both the data and the code that will operate on that data. Java uses a class specification to construct objects. Objects are instances of a class. Thus, a class is essentially a set of plans that specify how to build an object. It is important to be clear on one issue: a class is a logical abstraction. It is not until an object of that class has been created that a physical representation of that class exists in memory. One other point: Recall that the methods and variables that constitute a class are called members of the class. The data members are also referred to as instance variables.