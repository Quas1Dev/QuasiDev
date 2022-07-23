---
title: Classe, Objeto, Método e Atributo em Java - Parte 1
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

Utilize constructors - Done

Create parameterized constructors - Done

Understand new - Done

Create methods, return values, and use parameters 

Use the return keyword Return a value from a method 

Add parameters to a method 

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
class Cliente {
   // Membros da classe Cliente
}
```

O fragmento acima declara uma classe com nome Cliente, que presumivelmente descreve características de um cliente. 

É importante notar que uma classe é apenas uma abstração. Uma entidade real pode ter centenas de milhares de propriedades e ações relacionadas com ele, mas apenas as que importam para o objetivo do projeto são selecionados. Para representar um cliente, por exemplo, sua aplicação pode precisar do nome, CPF, endereço, e-mail, e data de nascimento, mas pode deixar de fora o tipo sanguíneo, ou a comida preferida.

Apesar de não haver regras que impeçam, não é adequado ter membros de entidades diferentes em uma mesma classe. Se uma classe é utilizada para descrever características de funcionários, não deve ser usada descrever o mercado de ações. Todos os membros de uma classe precisam estar logicamente conectadas. Caso contrário, o código pode se tornar difícil de ler.

## Incluindo Atributos

Os atributos são variáveis que armazenam informações, ou dados, sobre um objeto. Para o cliente, esses atributos podem ser seu  nome, e-mail, gênero, telefone, CPF, etc.

 No fragmento abaixo nós continuamos a declaração da classe Cliente iniciada na seção anterior.

```java
class Cliente {
  // foram definidos dois atributos para a classe Cliente
  String nacionalidade = "Brasileiro(a)";
  String nome;
  String email;
  char genero;
  String estadoCivil;
}
```

Uma vez que os atributos são definidos, todos os objetos criados usando a classe terão uma cópia deles. As cópias da mesma variável pode assumir valores diferentes de objeto para objeto. Mesmo a variável nacionalidade  terá uma cópia para cada objeto. Apesar de inicialmente ter o valor "Brasileiro(a)", esse valor poderá ser modificado para cada objeto. Como cada objeto tem uma cópia exclusiva desses atributos, eles são chamados de campos de instância.

## Métodos

Os métodos são, basicamente, coleções nomeadas de instruções. Normalmente, as instruções são para a realização de uma tarefa especifica, como calcular as combinações possíveis dos itens em um conjunto, ou recuperar no banco de dados os dados de um usuário. Elas podem ou não manipular os atributos da classe que a envolve, mas normalmente isso acontece. 

A forma mais simples de um método é:

```
<tipo de dado> <nome do método>([parâmetros]){
  // Declarações
  [return <valor de retorno>]
}
```

O `<tipo de dado>` define o tipo do valor que será retornado uma vez que todas as declarações contidas no métodos forem finalizadas. Pode ser um [tipo primitivo](https://tecnologiaeinformacao.netlify.app/java/java-variables-ptbr), como `int` ou `double`, mas também pode ser uma classe. Se o método não retornar nenhum valor, o tipo deve ser `void`.

O nome do método pode ser qualquer identificador válido no Java, **exceto o termo main** que é reservado para o método que inicia a execução do programa (veja [A Classe Principal e o Método main](#a-classe-principal-e-o-metodo-main)[](#a-classe-principal-e-o-metodo-main)). Por convenção, a primeira letra deve estar em minúsculo. Além disso, os outros termos em um nome composto por mais de uma palavra, cada uma é apresentada com a primeira letra em maiúsculo, como  filtrarValores, ordenarDados. 

O nome do método é seguido por `()`. Dentro desses parênteses podem ser colocados parâmetros. Os parâmetros    é uma lista de variáveis que devem receber um valor quando o método for invocado. Os itens na lista são separados por vírgula, e cada item é formado pelo tipo da variável e um identificador, como `String nm`, ou `String ec`. Se o método não tiver nenhum parâmetro, nada será incluído entre parênteses.

No corpo/bloco do método, delimitado por `{` e `}` são colocadas as instruções necessárias para cumprir o propósito do método em questão. 

O comando `return` retorna um valor para o usuário. O tipo do valor retornado deve ser igual ao tipo especificado lá no cabeçalho do método. Se nenhum valor tiver que ser retornado, quando `<tipo de dado>` é `void`, comando `return` não precisa ser inserido na estrutura. 

No fragmento

```java
// Calcula a área com o comprimento da base e da altura
double calculaAreaTriangulo (double b, double a){
  double area = (b * a) / 2;
  return area;
}
```

o método é nomeado `calculaAreaTriangulo`. Entre parênteses temos dois parâmetros, ambos do tipo `double`, o quer dizer que esse método deve receber dois valores do tipo `double` quando for invocado. No seu corpo, criamos a variável `a` que recebe o resultado da expressão `(b * a) / 2`. Por fim, o valor de `a` é retornado pelo método. Perceba que o tipo da variável retornada e o tipo definido lá no cabeçalho são o mesmo.

O fragmento abaixo faz a mesma coisa, mas não retorna o resultado do cálculo, apenas o exibe para o usuário.

```java
// Calcula a área de um triângulo e exibe o resultado
void calculaAreaTriangulo (double b, double a) {
  double area = (b * a) / 2;
  System.out.println("A área do triângulo é: " + area);
}
```

### Adicionando Métodos

Como dito anteriormente, classes podem ter atributos e métodos. Nossa classe Cliente tem atributos mas não tem métodos. Não há nada de errado em ter uma classe só com atributos, mas geralmente existe um ou mais métodos.  

Nesse caso, vamos incluir um método em Cliente. A esse método daremos o nome de apresentarCliente; ele responsável por exibir um texto que apresenta os dados do cliente. Ela não recebe nenhum valor, portanto, não tem parâmetros. Também não retorna nenhum resultado, então não inclui o comando `return`.

```java
class Cliente {
  /* === ATRIBUTOS === */
  String nacionalidade = "Brasileiro(a)";
  String nome;
  String email;
  char genero;
  String estadoCivil;
  
  /* === MÉTODOS === */
  // Exibe daos do cliente
  void apresentarCliente(){
    System.out.println("Nome: " + nome);
    System.out.println("Email: " + email);
    System.out.println("Genero: " + genero);
    System.out.println("Estado cívil: " + estadoCivil);
    System.out.println("Nacionalidade: " + nacionalidade);
  }
}
```

## Adicionando Construtores

O construtor é um "método" especial em Java que serve para criar um objeto e iniciar ele de alguma maneira. Todas as classes têm um construtor, que pode ser definido explicitamente pelo programador ou criado automaticamente pelo compilador do Java. 

Você declara o construtor dentro do corpo da classe colocando o nome da classe seguido por um par de parênteses `()` envolvendo uma lista de parâmetros separados por vírgula. O parâmetro é uma variável de um método ou construtor que recebe o valor de uma expressão passado para o construtor ou método pelo código que invoca o método ou classe.

Pode haver mais de um construtor por classe, mas cada um deve ter uma quantidade diferente de parâmetros na lista. Para exemplificar nós vamos criar dois construtores para a classe Cliente. Uma delas não recebe nenhum parâmetro, enquanto a outra recebe os valores que devem ser atribuídos aos atributos do objeto.

```java
class Cliente {
  /* === ATRIBUTOS === */
  String nacionalidade = "Brasileiro(a)";
  String nome;
  String email;
  char genero;
  String estadoCivil;
  
  /* === CONSTRUTORES === */
  // Esse construtor apenas imprime uma mensagem 
  // na tela
  Cliente () {
    System.out.println("Objeto criado com sucesso!");
  }
  
  // Esse construtor atribuí valores as variáveis
  // e exibe uma menssagem na tela.
  Cliente (String n, String e, char g, String ec) {
    // Usa os parâmetros para iniciar as variáveis
    nome = n;
    email = e;
    genero = g;
    estadoCivil = ec;
    System.out.println("Objeto criado com sucesso!");
  }
  
  /* === MÉTODOS === */
  void apresentarCliente (){
    // Exibe os dados do cliente
    System.out.println("Dados do Cliente: ");
    System.out.println("Nome: " + nome);
    System.out.println("Email: " + email);
    System.out.println("Genero: " + genero);
    System.out.println("Estado cívil: " + estadoCivil);
    System.out.println("Nacionalidade: " + nacionalidade);
  }
  
  boolean enviarEmail (String mensagem){
    boolean mensagemEnviada = false;
    
    if (mensagem != null){
       // Inserir código para enviar mensagem aqui      
       mensagemEnviada = true;
    } 

    return mensagemEnviada;
  }
}
```

Os construtores devem vir antes de qualquer método da classe.

## Usando new Para Instanciar Objetos

Classes são, geralmente, usadas para criar/instanciar objetos. Um objeto é criado com o operador `new`, e seu endereço e uma referência a ele é colocada em uma variável do mesmo tipo do objeto. A sintaxe básica é:

```
<classe> c1 = new <classe([parâmetros])>
```

No centro nós temos o sinal de igualdade que indica que o que está direita será armazenado na variável a esquerda. O  nome da classe aparece antes do nome da variável para definir o seu tipo. Do lado direito do sinal de igualdade inserimos a palavra chave `new` seguida do construtor da classe que pode receber uma lista de ou não. 

Um argumento é qualquer coisa cujo valor pode ser determinado, como uma expressão matemática ou uma variável, por exemplo.

Aqui está um programa que inicia um objeto do tipo Cliente:

```java
// Declara uma variável do tipo Cliente
// e armazena o endereço para um objeto do tipo Cliente nela.
Cliente c1 = new Cliente();
```

O operador `new` aloca memória dinamicamente (i.e., durante a execução do programa) para um objeto. Depois de alocar a memória, o construtor Cliente() é invocado para criar o objeto. Nossa classe Cliente tem dois construtores declarados explicitamente por nós, um com parâmetros e outro sem. Como não inserimos nenhum argumento, o construtor sem parâmetros é utilizado. O objeto é colocado no espaço da memória alocado por `new` e então uma referencia para esse objeto é retornada para a variável. Essa referência é o endereço do local na memória onde o objeto está localizado.  O objeto é armazenado em uma região da memória conhecida como heap &#8212; uma parte da memória principal que foi alocada para a máquina virtual do Java.

Uma declaração usando o outro construtor pode ser escrita como no fragmento abaixo:

```java
// Declara uma variável do tipo Cliente
// e armazena o endereço para um objeto do tipo Cliente nela.
Cliente c1 = new Cliente("John Doe", "john@dominio.com", 'M', "Casado");
```

Dessa vez foram incluídos 4 argumentos, então o construtor com 4 quatro parâmetros será usado para criar o objeto. Perceba que cada argumento será inserido no parâmetro em posição correspondente a sua: `John Doe` será armazenado no parâmetro `n`, `john@dominio.com` será colocado no parâmetro e, `M` ficará no parâmetro `g`, e `Casado` será colocado no parâmetro `ec`. Desse modo, cada argumento deve ser do mesmo tipo do parâmetro em posição correspondente na definição do construtor.

Nós podemos quebrar a declaração da variável Cliente acima em duas. 

```java
Cliente c1;
c1 = new Cliente("John Doe", "john@dominio.com", 'M', "Casado");
```

Na primeira linha declaramos uma variável que pode referenciar um objeto do tipo Cliente. Na linha seguinte,  foi criado um novo objeto do tipo Cliente e uma referência à ele é armazenada na variável c`1`. É comum nos referirmos a variável como se fosse o objeto, tipo 'o objeto c1', mas a variável apenas armazena uma referência para o objeto e não o objeto em si. Vamos ver uma consequência prática desse fato em breve. 

## Acessando os Atributos e Métodos do objeto

Os atributos e métodos de um objeto são acessados usando um ponto (.) seguido do nome do atributo ou método. No caso de um método também é inserido um par de parênteses, que deve envolver a lista de parâmetros caso eles existam.

Para acessar o atributo nome do objeto c1, nós escrevemos `c1.nome`.e para acessar seu método apresentarCliente nós usamos `c1.apresentarCliente()`.

Aqui está um programa completo que cria um objeto da classe  Cliente.

```java
class Cliente {
  /* === ATRIBUTOS === */
  String nacionalidade = "Brasileiro(a)";
  String nome;
  String email;
  char genero;
  String estadoCivil;
  
  /* === CONSTRUTORES === */
  // Esse construtor apenas imprime uma mensagem 
  // na tela
  Cliente () {
    System.out.println("Objeto criado com sucesso!");
  }
  
  // Esse construtor atribuí valores as variáveis
  // e exibe uma menssagem na tela.
  Cliente (String n, String e, char g, String ec) {
    // Usa os parâmetros para iniciar as variáveis
    nome = n;
    email = e;
    genero = g;
    estadoCivil = ec;
    System.out.println("Objeto criado com sucesso!");
  }
  
  /* === MÉTODOS === */
  void apresentarCliente (){
    // Exibe os dados do cliente
    System.out.println("Dados do Cliente: ");
    System.out.println("Nome: " + nome);
    System.out.println("Email: " + email);
    System.out.println("Genero: " + genero);
    System.out.println("Estado cívil: " + estadoCivil);
    System.out.println("Nacionalidade: " + nacionalidade);
  }
  
  boolean enviarEmail (String mensagem){
    boolean mensagemEnviada = false;
    
    if (mensagem != null){
       // Inserir código para enviar mensagem aqui      
       mensagemEnviada = true;
    } 

    return mensagemEnviada;
  }
}

classe ClienteDemo {
  public static void main (String[] args) {
    System.out.println("CLIENTE 1");
   
    // Instancia um objeto do tipo Cliente.
    Cliente c1 = new Cliente();
    
    // Determina os valores para os atributos de c1.
    c1.nome = "Nemo Alicunde";
    c1.email = "nemo@dominio.com";
    c1.genero = 'M';
    c1.estadoCivil = "casado" ;
    
    // Exibe os dados do objeto c1. 
    c1.apresentarCliente();
  }
}
```

Você pode salvar um arquivo ClienteDemo.java com o conteúdo do fragmento acima. Usando um processador de texto aberto na mesma pasta que o programa está, execute o comando `java ClienteDemo.java`. Dois arquivos .class serão criados, cada um com o bytecode de uma das classes. 

Nota: você não precisa salvar as as duas classes no mesmo arquivo .java. 

No processador de textos, use o comando `javac ClienteDemo.class` para executar o progrma. O arquivo .class deve conter o método `main()`, que é por onde o Java começa a executar o programa.

É necessário deixar claro um fato importante: cada objeto tem sua própria cópia dos atributos definidos em uma classe. Desse modo, o conteúdo das variáveis em um um objeto pode ser diferente dos conteúdos das variáveis em outro. Não há nada que conecte os dois objetos, a não ser pelo fato dos dois serem do mesmo tipo. Por exemplo, se você define dois objetos, c1 e c2, cada um dos dois terá sua própria cópia de nacionalidade, nome, email, genero, estadoCivil, e o conteúdo delas pode ser diferente para cada um dos objetos. 

```java
Cliente c1;
c1 = new Cliente("John Doe", "john@dominio.com", 'M', "Casado");

// Exibe o valor de nome do objeto c1.
System.out.println(c1.nome);

Systen.out.println(); // Pula uma linha

// Executa o método apresentarCliente() do objeto c1.
System.out.println(c1.apresentarCliente());
```

Perceba que para acessar o método é necessário incluir o par de parênteses `()` logo após o nome do método.

Se colocado no local adequado, e for executado, esse código deve imprimir o seguinte na tela:

```
John Doe

Dados do Cliente: 
Nome: John Doe
Email: john@dominio.com
Genero: M
Estado cívil: Casado
Nacionalidade: Brasileiro(a)
```

É necessário deixar claro um fato importante: cada objeto tem sua própria cópia dos atributos definidos em uma classe. Desse modo, o conteúdo das variáveis em um um objeto pode ser diferente dos conteúdos das variáveis em outro. Não há nada que conecte os dois objetos, a não ser pelo fato dos dois serem do mesmo tipo. Por exemplo, se você define dois objetos, c1 e c2, cada um dos dois terá sua própria cópia de nacionalidade, nome, email, genero, estadoCivil, e o conteúdo delas pode ser diferente para cada um dos objetos. 

```java
// Cria um objeto Cliente com seus próprios atributos e métodos
Cliente c1 = new Cliente("John Doe", "john@dominio.com", 'M', "Casado");
System.out.println("Nome do cliente 1: " + c1.nome);

// Cria outro objeto Cliente com seus próprios atributos e métodos
Cliente c2 = new Cliente("Nemo Alicunde", "nemo@dominio.com", 'M', "Casado");
System.out.println("Nome do cliente 2: " + c2.nome);
```

Se colocado no local adequado, e for executado, esse código deve imprimir o seguinte na tela:

```
Nome do cliente 1: John Doe
Nome do cliente 2: Nemo Alicunde
```

Aqui está um programa que inicia um objeto Cliente e exibe seus dados. 

## O Que é this



## O Método main

## Extends