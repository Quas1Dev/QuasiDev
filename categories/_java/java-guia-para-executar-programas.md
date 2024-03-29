---
layout: article
categories:
  - java
tags:
  - Guia
  - Java
  - Linha de Comando
  - NetBeans
date: '2022-12-08 13:07:02 +0000'
lastUpdated: '2022-12-08 13:07:02 +0000'
excerpt_separator: <!--more-->
order: 9
title: Java - Guia para Rodar os Programas
description: 'Esse é apenas guia de apoio para ser usado como referência durante o curso. '
permalink: '/java/:title'
author: 'Fernando Bonfim '
sources: []
secondary_sources: []
_template: site_content_post
---















Esse texto deve servir como um guia para a execução dos exemplos usados durante nos capítulos desse curso.

## Apenas uma classe

Para criar um programa simples usando apenas processador de texto como o Bloco de Notas, siga os passos descritos abaixo.

1 - Clique na caixa de pesquisa do Windows, e digite Bloco de Notas;

2 - Digite o código do programa. Nesse caso, eu vou executar o programa descrito a seguir:

```java
class OlaMundo {
 public static void main(String[] args){
     System.out.println("Olá, mundo!");
    }
}
```

Você pode substituir esse código pelo programa que você precisa executar.

3 - Salve o arquivo em uma pasta qualquer na sua máquina, mas lembre-se de anotar o caminho para a pasta escolhida pois nós vamos precisar a seguir.

Nesse caso, eu vou salvar meu arquivo dentro da pasta olamundo, que será encontrada em documentos > projetos > olamundo.

O nome do arquivo deve ser igual a da classe contida no arquivo, o que vem logo após a palavra-chave `class` e antes de `{`. Então eu vou salvar o arquivo como OlaMundo.java.

4 - Abra o CMD (ou outro interpretador de comandos), digite o comando `cd` e o caminho para a pasta que você escolheu no passo anterior.

{% include post_img.html

png="../assets/imgs_posts/t1-s3-salvando-codigo-fonte.png"

webp="../assets/imgs_posts/t1-s3-salvando-codigo-fonte.webp"

align="center"

%}

5 - Use o comando `javac OlaMundo.java`, substituindo OlaMundo pelo nome do seu arquivo.

{% include post_img.html

png="../assets/imgs_posts/t1-s5-compilando-com-javac.png"

webp="../assets/imgs_posts/t1-s5-compilando-com-javac.webp"

align="center"

%}

Será gerado um arquivo .class, que contém as mesmas instruções que estão no arquivo .java, mas escritas em bytecode.

{% include post_img.html

png="../assets/imgs_posts/t1-s5-versao-class-criada.png"

webp="../assets/imgs_posts/t1-s5-versao-class-criada.webp"

align="center"

%}

6 - Agora, execute o programa com o comando `java OlaMundo`.

{% include post_img.html

png="../assets/imgs_posts/t1-s6-programa-executado.png"

webp="../assets/imgs_posts/t1-s6-programa-executado.webp"

align="center"

%}

## Múltiplas classes - apenas um arquivo

Em Java também é possível ter múltiplas classes em um único arquivo. Para executar um programa composto de mais de uma classe, mas com todas elas em um mesmo arquivo, siga os passos abaixo:

Para criar um programa simples usando apenas processador de texto como o Bloco de Notas, siga os passos descritos abaixo.

1 - Clique na caixa de pesquisa do Windows, e digite Bloco de Notas;

2 - Digite o código do programa. Nesse caso, eu vou executar o programa descrito a seguir:

```java
 class Loja {
     public static void main(String[] args){
      Cliente c1 = new Cliente("João","joao@dominio.com");
         c1.mostrarInfo();
     }
 }
    
 class Cliente {
   // foram definidos dois atributos para a classe Cliente
   String nacionalidade = "Brasileiro(a)";
   String nome;
   String email;
      
   Cliente (String nm, String em){
     nome = nm;
     email = em;
     System.out.println("Objeto criado com sucesso!");
   }
      
   void mostrarInfo(){
     System.out.println("Nome: " + nome);
     System.out.println("Email: " + email);
     System.out.println("Nacionalidade: " + nacionalidade);
   }
     
 }
```

Você pode substituir esse código pelo programa que você precisa executar.

3 - Salve o arquivo em uma pasta qualquer na sua máquina, mas lembre-se de anotar o caminho para a pasta escolhida pois nós vamos precisar. Nesse caso, eu vou salvar meu arquivo dentro da pasta loja, que será encontrada em documentos > projetos > loja.

O nome do arquivo deve ser igual o da classe que contém o método main no arquivo. A assinatura do método _main_ é `public static void main(String[] args){`, o nome da classe que envolve essa assinatura ve ser o nome do arquivo. Aqui o arquivo vai ser chamado Loja.java.

{% include post_img.html

png="../assets/imgs_posts/t2-s3-salvando-codigo-fonte.png"

webp="../assets/imgs_posts/t2-s3-salvando-codigo-fonte.webp"

align="center"

%}

4 - Abra o CMD (ou outro interpretador de comandos), digite o comando `cd` e o caminho para a pasta que você escolheu no passo anterior.

{% include post_img.html

png="../assets/imgs_post/t2-s4-navegando-para-pasta-do-projeto-loja.png"

webp="../assets/imgs_posts/t2-s4-navegando-para-pasta-do-projeto-loja.webp"

align="center"

%}

5 - Use o comando `javac Loja.java`, substituindo Loja pelo nome do seu arquivo.

{% include post_img.html

png="../assets/imgs_posts/t2-s5-compilando-o-projeto-java.png"

webp="../assets/imgs_posts/t2-s5-compilando-o-projeto-java.webp"

align="center"

%}

Será gerado um arquivo .class para cada classe dentro do arquivo. Cada arquivo .class contém um bytecode, que é o que será traduzido para  linguagem de máquina pela máquina virtual do Java.

{% include post_img.html

png="../assets/imgs_posts/t2-s5-versoes-class-criadas.png"

webp="../assets/imgs_posts/t2-s5-versoes-class-criadas.webp"

align="center"

%}

6 - Agora, execute o programa com o comando `java Loja`. O nome do programa é o mesmo nome da classe que tem o método `main`

{% include post_img.html

png="../assets/imgs_posts/t2-s6-programa-loja-executado.png"

webp="../assets/imgs_posts/t2-s6-programa-loja-executado.webp"

align="center"

%}

Lembre-se de que você não pode incluir a extensão ,class para executar o programa com o comando Java.

***

Aqui nós acabamos de ver como executar o código de um programa, Esses tutoriais serão úteis para conseguir rodar os exemplos que nós veremos ao longo do curso, então volte aqui sempre que precisar.
