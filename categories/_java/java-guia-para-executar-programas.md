---
layout: article
categories:
- java
tags:
- Guia
- Java
- Linha de Comando
- NetBeans
date: 2022-11-14 13:07:02 +0000
lastUpdated: 2022-11-14 13:07:02 +0000
excerpt_separator: "<!--more-->"
order: 10
title: Java - Guia para executar programas
description: 'Esse é apenas guia de apoio para ser usado como referência durante o
  curso. '
permalink: "/java/:title"
author: 'Fernando Bonfim '
sources: []
secondary_sources: []
published: false

---
Esse texto deve servir como um guia para a execução dos exemplos usados durante nos capítulos desse curso.

## Apenas uma classe

Para criar um programa simples usando apenas processador de texto como o Bloco de Notas, siga os passos descritos abaixo.

1 - Clique na caixa de pesquisa do Windows, e digite Bloco de Notas;

2 - Digite o código do programa. Nesse caso, eu vou executar o programa descrito a seguir:

    class OlaMundo {
    	public static void main(String[] args){
        	System.out.println("Olá, mundo!");
        }
    }

Você pode substituir esse código pelo programa que você precisa executar.

3 - Salve o arquivo em uma pasta qualquer na sua máquina, mas lembre-se de anotar o caminho para a pasta escolhida pois nós vamos precisar. Nesse caso, eu vou salvar meu arquivo dentro da pasta olá mundo, que será encontrada em documentos > projetos > olamundo.

O nome do arquivo deve ser igual a da classe contida no arquivo, o que vem lógo após a palavra `class` e antes de `{`. Então, nesse caso, eu vou salvar o arquivo como OlaMundo.java.

\[IMAGEM\]

4 - Abra o CMD (ou outro interpretador de comandos), digite o comando `cd` e o caminho para a pasta que você escolheu no passo anterior.

\[IMAGEM\]

5 - Use o comando `javac OlaMundo.java`, substituindo OlaMundo pelo nome do seu arquivo. Será gerado um arquivo .class, que contém as mesmas instruções que estão no arquivo .java, mas escritas em bytecode.

\[IMAGEM\]

6 - Agora, execute o programa com o comando `java OlaMundo.class`.

\[IMAGEM\]

## Múltiplas Classes

Para executar um programa composto de mais de uma classe 