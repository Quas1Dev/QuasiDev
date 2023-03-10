---
title: Java - Modificadores de Acesso
layout: article
permalink: "/java/:title"
description: O escopo de um objeto, classe ou método são definidos pode ser alterado
  pelos modificadores de acesso.
categories:
- Java
tags:
- Modificadores de Acesso
- Encapsulamento
- Controle de Acesso
date: 2022-07-24T11:32:24.207+00:00
lastUpdated: 2022-07-24T11:32:23.591+00:00
author: Fernando Bonfim
excerpt_separator: "<!--more-->"
order: 17
sources:
- title: The Java® Language Specification - Oracle
  url: https://docs.oracle.com/javase/specs/jls/se18/jls18.pdf
published: false

---
Existe uma maneira de declarar variáveis que pertencem a classe em si. Dependendo de como foi escrita, a variável a classe pode ser modificada, mas seu valor será o mesmo para todos os objetos. Ou seja, as alterações provocadas por um objeto será compartilhada com todos os outros. Além disso, essas variáveis podem ser acessadas usando uma referência a própria classe.