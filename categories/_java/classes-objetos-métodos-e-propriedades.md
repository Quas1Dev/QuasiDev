---
title: Java - Introdução a Classes e Objetos
layout: article
permalink: "/java/:title"
description: Tudo que você precisa saber sobre os conceitos centrais da programação
  orientada a objetos (POO).
categories:
- Java
tags:
- objetos
- classes
- propriedades
- métodos
date: 2022-07-24T17:07:21.319+00:00
lastUpdated: 2022-11-20 17:40:00 +0000
author: Fernando Bonfim
excerpt_separator: "<!--more-->"
sources:
- url: https://docs.oracle.com/javase/specs/jls/se18/jls18.pdf
  title: The Java® Language Specification Java SE 18 Edition
order: 19

---
Nessa seção eu vou apresentar a você o conceito de classes e objetos. Vamos aprender a criar uma classe e então instanciar objetos a partir dela, e como declarar propriedades e métodos nas classes e acessar elas.

Algumas convenções são usadas para descrever a sintaxe:

* Tudo entre < e > é um elemento obrigatório.
* Tudo entre \[ e \] é opcional.

## Geral Sobre Classes

Classes são coleções nomeadas de variáveis e métodos. As variáveis armazenam valores, e os métodos agrupam instruções para um fim específico. Assim, a classe será usada sempre que houver necessidade de acessar algum de seus dados, ou quando um de seus métodos for necessário.

Tipicamente, as classes generalizam as características de entidades (algo que existe) do mundo real; elas descrevem no programa a nossa visão de alguma coisa física ou ideia que existe, incluindo detalhes de alguma forma relevantes na aplicação. Por exemplo, em uma loja de automóveis nós podemos ter um software que incluí uma classe que representa o conceito de carro. Nesse exemplo, classe é a entidade que estamos representando no programa.

A partir de uma generalização, ou descrição geral se preferir, os programadores criam objetos, que são manifestações especificas da entidade representada por meio de uma classe.

Os objetos também são chamados de **instâncias**. Pense em uma instância como uma ocorrência especifica daquilo que uma classe descreve. Por exemplo, a instância de uma classe Carro pode ser um carro do modelo Fiat Uno Attractive, que percorre 11,6 km com 1 litro de gasolina, ou um Renault Logan. que percorre 13,2 km por litro de gasolina. Como outro exemplo, nós podemos citar uma classe Animal que pode ser usada para instanciar um animal preto, de calda longa, e que pertence a espécie Canis lupus familiaris, ou um animal pequeno, branco de orelhas pontudas que pertence a espécie Oryctolagus cuniculus.

Você pode pensar em classes como esses moldes, que permitem delinear um formato específico para um doce. Os objetos, nesse caso, são como os doces que são formados com o molde.

Para servir de modelo para um objeto, uma classe descreve as **propriedades** e as **ações** que podem ser realizadas com, pelo ou através do objeto. As propriedades, também chamadas de **campos ou atributos**, são na verdade **variáveis** que armazenam um valor que pode ser o mesmo para todos os objetos formados com base na classe, ou pode variar para cada objeto. A coleção de atributos de um objeto representa o seu **estado**,

Entidades do mundo real têm propriedades. Por exemplo, um carro pode ter uma cor específica, pode ser de diversas marcas, consegue percorrer uma certa distância com um litro de combustível, tem um dono etc. Se definirmos uma classe Carro, podemos incluir variáveis que guardam cada uma dessas propriedades. Por exemplo, uma variável pode guardar o nome da marca do carro.

As ações são representadas por **métodos** (conjuntos de instruções nomeadas) que determinam o passo a passo para um objeto fazer alguma coisa ou alguma coisa ser feita com o objeto (Discutimos métodos em outra seção).

Assim como cada entidade tem propriedades, eles também podem sofrer alguma ação ou fazer alguma coisa. Um carro pode ser acelerado, ser abastecido, ser ligado, trocar de marcha etc. Se definirmos uma classe que descreve a entidade Carro, os métodos nessa classe podem ser usados para informar o passo-a-passo para cada uma dessas ações.

## Declarando Classes

Uma classe precisa ser declarada antes de ser usada para criar um ou mais objetos. A sintaxe mais simples para declaração de uma classe é a seguinte:

    class <nome da classe> 
    {
      // Membros da classe
    }

A declaração é formada por um cabeçalho e um corpo. O cabeçalho é formado pela palavra reservada `class`, que é seguida por um nome que identifica a classe (assim ela pode ser referenciada em outras partes do programa). O corpo é tudo que está entre `{` e `}`, e nele são contidos os métodos e variáveis definidos para a classe, que são chamados coletivamente de membros da classe.

Por convenção o primeiro caráter no nome de uma classe deve estar em maiúsculo. Além disso, outras palavras que fazem parte do nome de uma classe também terão a primeira letra em maiúsculo.

```java
class Cliente {
   // Membros da classe Cliente
}
```

O fragmento acima declara uma classe com nome Cliente, que presumivelmente descreve características de um cliente.

É importante notar que uma classe é apenas uma abstração. Uma entidade real pode ter centenas de milhares de propriedades e ações relacionadas com ela, mas apenas as que importam para o objetivo do projeto são selecionados. Para representar um cliente, por exemplo, sua aplicação pode precisar do nome, CPF, endereço, e-mail, e data de nascimento, mas pode deixar de fora o tipo sanguíneo, ou a comida preferida.

Apesar de não haver regras que impeçam, não é adequado ter membros de entidades diferentes em uma mesma classe. Se uma classe é utilizada para representar a entidade funcionários em um programa, ela não deve ser usada para coisas relacionadas à produtos, por exemplo. Todos os membros de uma classe precisam estar logicamente conectados, caso contrário, o código pode se tornar difícil de ler.

Para criar um objeto da classe Cliente definida acima, nós usamos o código abaixo:

``` java
Cliente cliente  = new Cliente();
```

A instanciação de objetos tem sua própria seção nesse texto, onde discutimos a estrutura um pouco melhor.

## Incluindo Atributos

Já vimos como uma classe é criada, agora veremos como incluir os atributos nela.

Recapitulando, os atributos são variáveis que armazenam fatos sobre um objeto. Para uma classe que junta dados e ações relacionadas que representam o que seria um cliente para uma empresa que oferece uma plataforma para a procura de emprego, esses dados podem ser o nome, e-mail, gênero, telefone, CPF etc.

No fragmento abaixo nós continuamos a declaração da classe Cliente iniciada na seção anterior.

```java
class Cliente {
  // Esses atributos serão usados para armazenar dados
  // que consideramos relevantes para representar o cliente
  // no programa.
  String nacionalidade = "Brasileiro(a)";
  String nome;
  String email;
  char genero;
  String estadoCivil;
}
```

Uma vez que os atributos são definidos, todos os objetos criados usando a classe terão uma cópia deles. As cópias de uma mesma variável podem assumir valores diferentes para cada objeto. Mesmo a variável nacionalidade terá uma cópia para cada objeto. Apesar de inicialmente ter o valor "Brasileiro(a)", esse valor poderá ser modificado para cada objeto. Nós veremos como criar objetos a partir dessa classe em outra seção.

Como cada objeto tem uma cópia exclusiva desses atributos, eles são chamados de variáveis do objeto. Esse tipo de variável só pode ser acessado especificando a cópia de qual objeto você quer acessar.  Existe uma maneira de declarar variáveis da classe usando modificadores de acesso, mas esse será o tema para outra postagem

## Métodos

Um método é. basicamente, um conjunto nomeado de instruções, tal como o método **main()** que está presente em todos os programas feitos em Java e nomeia o conjunto de instruções pelo qual a <abbr title="Java Virtual Machine">JVM</abbr> começa a executar um programa. As instruções podem ou não usar ou modificar os atributos da classe que a envolve, mas normalmente isso acontece.

Observação: perceba que nós nos referimos a métodos usando o nome do método seguido de um par de parênteses. Isso tem a ver com a forma como os métodos são invocados,

A sintaxe mais simples de um método é essa:

``` 
<tipo do retorno> <nome do método>([parâmetros])
{
  // Declarações
  [return <valor de retorno>]
}
```

Nós podemos separar essa estrutura em duas partes, o cabeçalho e o corpo.  Vamos dar uma olhada mais de perto no cabeçalho.

### Cabeçalho

O cabeçalho compreende os elementos que aparecem logo no início da declaração o método. Na sintaxe apresentada anteriormente, eles são os seguintes:

    <tipo do retorno> <nome do método>([parâmetros])

O cabeçalho define várias coisas com relação ao método em si.  **Deve** ser informado o tipo de retorno, o nome do método, e a lista de parâmetros (que pode estar vazia). Além desses elementos obrigatórios, **pode** ser incluído outros detalhes como modificadores de acesso (`public`, `protected`, `private`) para definir onde o método pode ser usado, ou a palavra reservada `static` para definir o método como estático, por exemplo. Nesse momento serão tratados apenas os elementos obrigatórios, pois esses já são muita coisa para aprender de uma vez, a meu ver.

Agora vamos fazer uma análise dos elementos presentes cabeçalho. O `<tipo do retorno>` define o tipo do valor que será retornado pelo método. que é indicado pelo comando `return`.  Ele pode ser um [tipo primitivo](https://tecnologiaeinformacao.netlify.app/java/java-variables-ptbr), como o `int` ou o `double`, mas também pode ser um tipo referência (uma classe qualquer), como String ou Integer (ambas são classes que vem por padrão no Java). Se o método não retornar nenhum valor, o tipo deve ser `void`. Voltaremos nisso mais adiante.

Na listagem abaixo temos três métodos dentro de uma classe. Um deles retorna um número do tipo int, outro retorna uma referência para um objeto do tipo String, e outro não retorna nada.

``` java
 class CabecalhoDemo1{
    // Esse método retorna um dado do tipo int
    int retornaInteiro(){
        int numero = 7;
            
        // Perceba que o tipo da variável número é o mesmo
        // do tipo do retorno especificado no cabeçalho
        return numero;  
    }
        
    // Esse método retorna um dado do tipo String
    String retornaUmaString(){
        String nome = new String("Fernando");
            
        // Perceba que o tipo da variável nome é o mesmo
        // do tipo do retorno especificado no cabeçalho
        return nome;
    }
        
   // Esse método não retorna dado
   void semRetorno(){
       System.out.println("Nada é retornado por esse método.");
   }
 }
```

Daqui a pouco nós veremos para onde o dado é retornado, e vamos entender o comando `return`.

O `<nome do método>` pode ser qualquer **identificador válido** no Java, **exceto o termo main** que é reservado para o método que inicia a execução do programa (veja [A Classe Principal e o Método main](#a-classe-principal-e-o-método-main)).

Um identificador válido em Java **não pode** ser igual a nenhum dos termos que tem algum significado na linguagem. Por exemplo, não é possível criar um método com nome `int`, porque o termo `int` é usado para especificar o tipo de um dado.

Além disso, identificadores **não podem** começar com um número, Depois do primeiro caráter você pode usar números sem problemas. Então você não pode usar nomes como 4no, mas outros, como m4rcador, podem ser usados tranquilamente.

A mesma convenção seguida na montagem de nomes para variáveis se aplica ao identificador dos métodos. A primeira letra da primeira palavra que compõe o identificador tem que estar em minúsculo. Em identificadores compostos por múltiplas palavras, a primeira letra de cada palavra a partir da segunda deve aparecer em maiúsculo.

Retomando o fragmento de código anterior, você pode ver que a convenção foi seguida nele, Perceba como o identificador de cada método foi escrito.

``` java
 class CabecalhoDemo1{
  // Esse método retorna um dado do tipo int
  int retornaInteiro(){
      int numero = 7;
      return numero;
     }
        
     // Esse método retorna um dado do tipo String
     String retornaUmaString(){
      String nome = new String("Fernando");
         return nome;
     }
        
     // Esse método não retorna dado
   void semRetorno(){
      System.out.println("Nada é retornado por esse método.");
     }
 }
```

Vale lembrar que uma convenção não é uma regra que faz parte da linguagem. O compilador não vai te impedir de criar um método com um identificador que não segue a convenção. Isso é uma coisa que parte da comunidade que usa o Java, talvez para ajudar na legibilidade do código.

Esse nome será usado para chamar o método durante o programa. como veremos daqui a pouco.

O nome do método é seguido por um par de parênteses `()`. Dentro desses parênteses podem ser colocados os parâmetros. Os parâmetros são um conjunto de variáveis que devem receber um valor quando o método for invocado. Os itens na lista são separados por vírgula, e cada item é formado pelo tipo da variável e um identificador, como `String args`, ou `String nome`.

```java
class CabecalhoDemo2{
    // Esse método calcula a área de um círculo
    // considerando o valor armazenado no parâmetro raio,
    // que presumivelmente deve receber o valor da área do 
    // circulo.
    double areaDoCirculo (double raio){
     double area = (3.14 * (raio * raio));
     return area;
    }
}
```

O valor que a variável raio recebe é especificado quando o método é invocado. Nós veremos como isso acontece depois.

Se o método não tiver nenhum parâmetro nada será incluído entre parênteses. Mas os parênteses devem ser mantidos, mesmo que vazios.

Essas variáveis podem ser usadas apenas pelas instruções de dentro do método. Uma vez que o método é finalizado, quando sua última instrução é executada ou quando o comando `return` é encontrado, as variáveis deixam de existir,

Os parâmetros são os elementos que nos permite enviar dados para o método. Uma vez que os valores são recebidos nos parâmetros, as instruções nos métodos podem utilizá-los para algum fim.

### Corpo do método

Agora nós podemos discutir o corpo do método, que também é chamado de bloco do método. O corpo do método contém todas as instruções que são executadas toda vez que o método é invocado. Ele é delimitado por `{` e `}`.

    {
      // Declarações
      [return <valor de retorno>]
    }

A execução de um método começa a partir da primeira instrução e termina com a execução da última instrução dentro do bloco, ou quando o comando `return` é encontrado.

Quando todas as instruções de um método são completadas, a execução do programa continua a partir do ponto onde a instrução que invocou o método se encontra.

O exemplo de programa abaixo demonstra isso de forma mais clara.

``` java
class MetodoDemo2 {
   public static void main(String[] args){
       // Esse trecho é exibido antes que o método
       // dizOlaMundo() termina.
       System.out.println("Antes do método!");
           
       // O código abaixo invoca o método que exibe 
       // Olá, mundo! na tela.
       dizOlaMundo(3);
           
       // Esse trecho é executado depois que o método 
       // dizOlaMundo() termina.
       System.out.println("Depois do método!");
   } 
       
   // Essa função engloba apenas uma instrução, que imprime
   // um valor na tela para o usuário.
   private static void dizOlaMundo(){
       System.out.println("Olá, mundo!");
   }
}
```

Como dito lá no início, a execução de um programa Java começa pelo método _main()._ A primeira instrução executada é  `System.out.println("Antes de dizer 'Olá, mundo'")`, que imprime `Antes de dizer 'Olá, mundo'` na tela.  Depois o método `dizerOlaMundo()` é chamado, então a execução continua a partir da primeira  e única instrução dentro do método, que imprime `Olá, mundo` na tela. Não há mais nada dentro do método além dessa instrução, então o método é finalizado, e a execução continua a partir da linha onde _dizerOlaMundo()_ se encontra.

Perceba a maneira como invocamos o método. Nós colocamos o nome do método seguido de um par de parênteses. Por essa razão, nós geralmente nos referimos a um método usando o nome do método seguido de parênteses. Por exemplo, para falar do método dizerOlaMundo, nós geralmente escrevemos dizerOlaMundo(). Isso deixa claro que estamos falando de um método.

Essa transição no andamento da execução do programa é, geralmente, referida como uma transferência de controle. Após finalizar com um método, o controle do programa é transferido de volta para o ponto onde o método foi chamado. O controle, nesse caso, é o poder de influenciar o comportamento do programa, ou seja, definir a próxima ação que será executada pelo computador.

O comando `return` especifica um valor que substitui o código que invocou o método. Esse valor pode ser armazenado em uma variável, ou ser manipulado de alguma maneira.

``` java
class MetodoDemo2 {
   public static void main(String[] args){
       // O código abaixo invoca o método areaDoCirculo()
       // e armazena o valor retornado em resultado.
       double resultado = areaDoCirculo(3);
           
       // Exíbe o resultado na tela.
       System.out.println("A área do círculo é: " + resultado);
   } 
       
   // Cálcula a área de um círculo baseado no valor do raio
   private static double areaDoCirculo(double raio){
       double area = 3.14 * (raio * raio);
       return area;
   }
}
```

No fragmento acima, o método _areaDoCirculo()_ é invocada para calcular a área de um círculo com raio 3 (não importa a unidade de medida usada). O resultado é então armazenado na variável _resultado_. Depois, nós exibimos o resultado na tela.

Dessa vez nós colocamos o valor 3 dentro dos parênteses usados na hora de invocar o método. Esse valor é armazenado no parâmetro raio do método _areaDoCirculo()_. Nós veremos isso cm mais calma depois, mas é assim que enviamos valores para os parâmetros,

Perceba que o tipo do valor retornado deve ser igual ao tipo especificado lá no cabeçalho do método. Se um método foi definido como `int calcula()`. o tipo do valor que ele retorna deve ser `int`. Se nenhum valor tiver que ser retornado — quando `<tipo de dado>` é `void` — comando `return` não precisa ser inserido na estrutura.

No fragmento

```java
class MetodoDemo3 {
   public static void main(String[] args){
       // O código abaixo invoca o método calculaAreaTriangulo()
       // e armazena o valor retornado em resultado.
       double resultado = calculaAreaTriangulo(3, 4);
       
       // Exíbe o resultado na tela.
       System.out.println("A área do círculo é: " + resultado);
   } 
   
   // Cálcula a área com o comprimento da base e da altura
   double calculaAreaTriangulo (double base, double altura){
     double area = (base * altura) / 2;
     return area;
   }
}
```

o método _calculaAreaTriangulo()_ tem dois parâmetros, ambos do tipo `double`, o quer dizer que esse método **deve** receber dois valores do tipo `double` quando for invocado. No seu corpo, nós criamos a variável _a_ que recebe o resultado da expressão (b * a) / 2. Por fim, o valor de _a_ é retornado pelo método para o ponto no código onde ele foi chamado.

Ao invés de armazenar o resultado da expressão em uma variável, nós podemos colocar a expressão ao lado do `return`.

```java
// Cálcula a área com o comprimento da base e da altura
double calculaAreaTriangulo (double b, double a){
  return (b * a) / 2;
}
```

Tudo que está do lado direito do `return` será calculado primeiro.

Na forma em que estão escritos, os métodos também são copiados para cada objeto criado a partir da classe que à envolve. Ou seja, se forem criados 3 objetos do tipo Cliente, os três irão manter a própria cópia desses métodos. Desse modo, elas também estão presas ao contexto do objeto e, portanto, só podem ser acessados através deles. Nessa condição, se nenhuma instância da classe é criada, o método não poderá ser usado. Por esse motivo, eles são chamados de métodos de instância.

### Adicionando Métodos

Como dito anteriormente, classes podem ter atributos e métodos. Nossa classe Cliente tem atributos, mas não tem métodos. Não há nada de errado em ter uma classe só com atributos, mas geralmente existe um ou mais métodos.

Nesse caso, nós vamos incluir um método na classe Cliente, o _apresentarCliente()_; ele responsável por exibir um texto que apresenta os dados do cliente. O método trabalha apenas com as  variáveis internas da classe, de tal modo que não é necessário definir parâmetros para o método. O método também não retorna nenhum resultado, então não inclui o comando `return`.

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
    System.out.println("Gênero: " + genero);
    System.out.println("Estado civil: " + estadoCivil);
    System.out.println("Nacionalidade: " + nacionalidade);
    
    // Apenas pula uma linha.
    System.out.println();
  }
}
```

## A Funcionalidade do Método

Costuma-se agrupar em métodos as instruções necessárias para resolver um problema específico. Por exemplo, para calcular as combinações possíveis dos itens em um conjunto, nós podemos criar um método _calculaCombinacoes()_ com as instruções necessárias.

## Adicionando Construtores

O construtor é um "método" especial em Java, Ele tem mesmo nome que a classe, e serve para criar um objeto e iniciar ele de alguma maneira.

Geralmente, é no construtor que os valores iniciais para os atributos  que são definidos na classe.

Todas as classes têm um construtor, que pode ser definido explicitamente pelo programador ou criado automaticamente pelo compilador do Java.

Você declara o construtor dentro do corpo da classe colocando o nome da classe seguido por um par de parênteses `()` envolvendo uma lista de parâmetros separados por vírgula.

Os parâmetros, assim como no caso dos métodos, recebem os valores que são passados para o construtor pelo código que chama ele.

Pode haver mais de um construtor por classe, mas cada um deve ter uma quantidade diferente de parâmetros na lista. Para exemplificar nós vamos criar dois construtores para a classe Cliente. Uma delas não recebe parâmetros, enquanto a outra recebe os valores que devem ser inseridos aos atributos do objeto.

```java
class Cliente {
  // foram definidos dois atributos para a classe Cliente
  String nacionalidade = "Brasileiro(a)";
  String nome;
  String email;
  char genero;
  String estadoCivil;
  
  Cliente (){
    System.out.println("Objeto criado com sucesso!");
  }
  
  Cliente (String nm, String em, char gn, String ec){
    nome = nm;
    email = em;
    genero = gn;
    estadoCivil = ec;
    System.out.println("Objeto criado com sucesso!");
  }
  
  void apresentarCliente(){
    System.out.println("Nome: " + nome);
    System.out.println("Email: " + email);
    System.out.println("Gênero: " + genero);
    System.out.println("Estado civil: " + estadoCivil);
    System.out.println("Nacionalidade: " + nacionalidade);
    
    // Apenas pula uma linha.
    System.out.println();
  }
  
  boolean enviarEmail(String mensagem){
    boolean mensagemEnviada = false;
    
    if (mensagem != null){
       // Inserir código para enviar mensagem aqui.
       mensagemEnviada = true;
    } 
    return mensagemEnviada;
  }
}
```

Os construtores devem vir antes de qualquer método da classe e não podem retornar um valor.

## Usando new Para Instanciar Objetos

Classes são, geralmente, usadas para criar/instanciar objetos. Um objeto é criado com o operador `new`, e uma referência a ele é colocada em uma variável do mesmo tipo do objeto.

A sintaxe básica para instanciação é a seguinte:

``` java
<classe> c1 = new <classe([argumentos])>
```

No centro, nós temos o sinal de igualdade que indica que aquilo que está à direita será armazenado na variável a esquerda. O nome da classe aparece antes do nome da variável para definir o seu tipo. Do lado direito do sinal de igualdade inserimos a palavra-chave `new` seguida do construtor da classe, que pode receber uma lista de argumentos separados por vírgula ou ficar vazio.

Um argumento é qualquer valor que será enviado para o construtor da classe. Cada argumento na lista será inserido no parâmetro em posição correspondente no cabeçalho do construtor.

Nossa classe cliente possuí dois construtores. Um deles não tem parâmetros, o outro tem uma série deles.

Aqui está um programa que inicia um objeto do tipo Cliente usando o construtor vazio:

``` java
// Declara uma variável do tipo Cliente
// e armazena o endereço para um objeto do tipo Cliente nela.
Cliente c1 = new Cliente();
```

O operador `new` aloca memória dinamicamente (i.e., durante a execução do programa) para um objeto. Depois de alocar a memória, o construtor Cliente() é invocado para criar o objeto. Nossa classe Cliente tem dois construtores declarados explicitamente por nós, um com parâmetros e outro sem.

Como não inserimos nenhum argumento, o construtor sem parâmetros é utilizado. O objeto é colocado no espaço da memória alocado por `new` e então uma referência para esse objeto é retornada para a variável _c1_. Essa referência é o endereço do local na memória onde o objeto está localizado.  O objeto é armazenado em uma região da memória conhecida como heap — uma parte da memória principal que foi alocada para a máquina virtual do Java.

Uma declaração usando o construtor com parâmetros pode ser escrita como no fragmento abaixo:

``` java
// Declara uma variável do tipo Cliente
// e armazena o endereço para um objeto do tipo Cliente nela.
Cliente c1 = new Cliente("John Doe", "john@dominio.com", 'M', "Casado");
```

Dessa vez foram incluídos 4 argumentos, então o construtor com 4 quatro parâmetros será usado para criar o objeto. Perceba que cada argumento será inserido no parâmetro em posição correspondente a sua: John Doe será armazenado no parâmetro _nm_, `john@dominio.com` será colocado no parâmetro e, _m_ ficará no parâmetro _gm_, e `Casado` será colocado no parâmetro _ec_. Desse modo, cada argumento deve ser do mesmo tipo do parâmetro em posição correspondente na definição do construtor.

{% include post_img.html

png="../assets/imgs_posts/java-classes-and-objects/java-classes-and-objects-arg-param-correspondence.png"

webp="../assets/imgs_posts/java-classes-and-objects/java-classes-and-objects-arg-param-correspondence.webp"

alt="Conecta os argumentos passados durante a chamada do método com os respectivos parâmetros usando setas."

align="center"

%}

Nós podemos quebrar a declaração da variável _c1_ acima em duas.

```java
Cliente c1;
c1 = new Cliente("John Doe", "john@dominio.com", 'M', "Casado");
```

Na primeira linha declaramos uma variável que pode referenciar um objeto do tipo Cliente. Na linha seguinte, foi criado um outro objeto do tipo Cliente e uma referência a ele é armazenada na variável _c1_.

É comum nos referirmos a variável como se fosse o objeto, tipo 'o objeto c1', mas a variável apenas armazena uma referência para o objeto e não o objeto em si. Vamos ver uma consequência prática desse fato em breve

## Acessando os Atributos e Métodos do objeto

Os atributos e métodos de um objeto são acessados usando um . (ponto), chamado de assessor, seguido do nome do atributo ou método. No caso de um método também é inserido um par de parênteses que deve envolver a lista de argumentos, caso o método tenha parâmetros.

Para acessar o atributo nome do objeto _c1_, nós escrevemos _c1.nome_ e para acessar seu método _apresentarCliente()_ nós usamos _c1.apresentarCliente()_.

Aqui está um programa completo que cria um objeto da classe Cliente, e acessa as suas informações.

```java
class ClienteDemo {
  public static void main (String[] args) {
    
    System.out.println("*** CLIENTE 1 ***"); 
    
    // Instancia um objeto Cliente.
    Cliente c1 = new Cliente(); 
    System.out.println("Atributos do c1 antes de iniciar as variáveis\n");
    c1.apresentarCliente();
    
    // Definindo os atributos do objeto c1.
    c1.nome = "Nemo Alicunde";
    c1.email = "nemo@dominio.com";
    c1.genero = 'M';
    c1.estadoCivil = "casado" ;
    
    System.out.println("Atributos do c1 depois de iniciar as variáveis.");   
    
    // Exibe os detalhes do objeto c1.
    c1.apresentarCliente();
    
    // Trabalhando com outro objeto.
    System.out.println("*** CLIENTE 2 ***");
    
    // Instancia um novo objeto;
    Cliente c2 = new Cliente("John Doe", "john@dominio.com", 'M', "Casado");
    c2.apresentarCliente();
    
    // Mostra o valor retornado pelo método enviarEmail().
    boolean mensagemEnviada = c2.enviarEmail("A minha mensagem é Busque Conhecimento");
    if (mensagemEnviada) 
        System.out.println( "A mensagem foi enviada!");
    else 
        System.out.println("A mensagem não foi enviada!");
  }
}

class Cliente {
  // foram definidos dois atributos para a classe Cliente
  String nacionalidade = "Brasileiro(a)";
  String nome;
  String email;
  char genero;
  String estadoCivil;
  
  Cliente (){
    System.out.println("Objeto criado com sucesso!");
  }
  
  Cliente (String nm, String em, char gn, String ec){
    nome = nm;
    email = em;
    genero = gn;
    estadoCivil = ec;
    System.out.println("Objeto criado com sucesso!");
  }
  
  void apresentarCliente(){
    System.out.println("Nome: " + nome);
    System.out.println("Email: " + email);
    System.out.println("Gênero: " + genero);
    System.out.println("Estado civil: " + estadoCivil);
    System.out.println("Nacionalidade: " + nacionalidade);
    
    // Apenas pula uma linha.
    System.out.println();
  }
  
  boolean enviarEmail(String mensagem){
    boolean mensagemEnviada = false;
    
    if (mensagem != null){
       // Inserir código para enviar mensagem aqui 
       mensagemEnviada = true;
    } 
    return mensagemEnviada;
  }
}
```

Você pode salvar um arquivo ClienteDemo.java com o conteúdo do fragmento acima. Usando um interpretador de comandos aberto na mesma pasta que o programa está, execute o comando `java ClienteDemo.java`. Dois arquivos .class serão criados, cada um com o bytecode de uma das classes.

Nota: você não precisa salvar as duas classes no mesmo arquivo .java, mas ambas precisam ser compiladas.

Para rodar o programa, digite `java ClienteDemo` no CMD e algo como o seguinte deve aparecer na tela.

Resultado:

    *** CLIENTE 1 ***
    Objeto criado com sucesso!
    Atributos do c1 antes de iniciar as variáveis
        
    Nome: null
    Email: null
    Gênero: 
    Estado civil: null
    Nacionalidade: Brasileiro(a)
        
    Atributos do c1 depois de iniciar as variáveis.
    Nome: Nemo Alicunde
    Email: nemo@dominio.com
    Gênero: M
    Estado civil: casado
    Nacionalidade: Brasileiro(a)
        
    *** CLIENTE 2 ***
    Objeto criado com sucesso!
    Nome: John Doe
    Email: john@dominio.com
    Gênero: M
    Estado civil: Casado
    Nacionalidade: Brasileiro(a)
        
    A mensagem foi enviada!

Nesse programa podemos notar algumas coisas:

\- Quando as variáveis não são iniciadas, isto é, quando nada for atribuído a elas, existe um valor padrão, que depende do tipo. Se é  um tipo referencial, o valor padrão é _null_, por exemplo.

\- Cada objeto da classe Cliente tem um estado diferente, ou seja, apresentam atributos com valores diferentes. É muito importante reconhecer que uma instância não interfere na outra.

\- Como o primeiro construtor especificado não continha uma lista de argumentos o construtor sem parâmetros foi usado para construir o objeto de _c1_. Já para o segundo objeto foi usado o construtor que tem 4 parâmetros, já que 4 argumentos foram especificados entre parênteses.

\-  O comando `return` retorna o valor da variável mensagemEnviada() que é verificada, e uma mensagem é exibida para o usuário com base no resultado dessa verificação.

\- O tipo de cada argumento na chamada do método é igual a de cada parâmetro, em posição correspondente, no cabeçalho do método. Por exemplo, o terceiro item na lista de argumentos em `Cliente c2 = new Cliente("John Doe", "john@dominio.com", 'M', "Casado");` é um literal do tipo `char`, o mesmo tipo do terceiro item na lista de parâmetros em `Cliente (String n, String e, char g, String ec)`.

## Modificando Atributos

A modificação dos atributos de uma classe também é permitida por padrão.  Para mudar o atributo nome do objeto c1. nós usamos o seguinte código:

    c1.nome = "John";

Normalmente, programadores constroem classes de modo que uma modificação direta como a mostrada acima não é permitida. Mas isso nós veremos quando modificadores de acesso forem explicados.

## O Comando this

Cabe aqui explicar também o papel de um outro comando, o comando `this`.

Imagine que você precise acessar o objeto _c1_ criado nos exemplos anteriores de dentro do próprio objeto, como você faria isso? É justamente esse problema que o comando `this` foi criado. Ele é uma referência ao próprio objeto no qual ele foi usado.

Como foi explicado no texto sobre variáveis, em Java é ilegal declarar duas variáveis com mesmo nome no mesmo escopo. Mas o interessante é que os métodos podem ter variáveis locais, incluindo os parâmetros formais, que tem o mesmo nome dos atributos de instância do objeto.

O seguinte fragmento é completamente válido.

```java
class Televisao {
    String tipo = "LCD";
        
    void mostrarTipo(){
        // Apesar do nome ser igual a variável de instância,
        // essa linha de código é válida.
        String tipo = "LED";
        System.out.println("O tipo da TV é: " + tipo);
    }
}
```

Entretanto, quando isso acontece, o atributo de instância é escondido pela variável local. Quando _mostrarTipo()_ é chamado, o tipo da televisão é diferente daquele definido na variável fora do método.

```java
class Televisao {
    String tipo = "LCD";
        
    void mostrarTipo(){
        // Apesar do nome ser igual a variável de instância,
        // essa linha de código é válida.
        String tipo = "LED";
        System.out.println("O tipo da TV é: " + tipo);
    }
}
     class ThisDemo1 {
    public static void main(String[] args){
        Televisao tv = new Televisao();
        tv.mostrarTipo();
    }
}
```

O resultado é o seguinte:

    O tipo da TV é: LED

É por esse motivo que os parâmetros no construtor do da nossa classe Cliente têm aqueles nomes esquisitos. Vamos dar uma olhada novamente no código.

```java
class Cliente {
  // foram definidos dois atributos para a classe Cliente
  String nacionalidade = "Brasileiro(a)";
  String nome;
  String email;
  char genero;
  String estadoCivil;
      
  Cliente (){
    System.out.println("Objeto criado com sucesso!");
  }
      
  // Perceba como os parâmetros foram identificados
  Cliente (String nm, String em, char gn, String ec){
    nome = nm;
    email = em;
    genero = gn;
    estadoCivil = ec;
    System.out.println("Objeto criado com sucesso!");
  }
      
 /*
  Trecho removido por razões de brevidade.
 */
}
```

Perceba que o parâmetro que recebe o nome do cliente foi identificado com _nm_. Isso foi necessário para que fosse possível transferir o valor dessa variável à variável de instância _nome_. Caso a gente usasse o mesmo nome, o compilador não ia conseguir identificar que o que nós queremos é atribuir valor as variáveis de fora do método.

Mas há outra maneira de contornar esse problema. Para isso, nós acessamos o atributo de instância do objeto través do comando `this` no momento da atribuição.

O código ficaria assim:

```java 
class Cliente {
  // foram definidos dois atributos para a classe Cliente
  String nacionalidade = "Brasileiro(a)";
  String nome;
  String email;
  char genero;
  String estadoCivil;
      
  Cliente (){
    System.out.println("Objeto criado com sucesso!");
  }
      
  // Os parâmetros do construtor estão modificados nesse exemplo.
  Cliente (String nome, String email, char genero, String estadoCivil){
    // As variáveis de instância são acessadas usando o this.
    this.nome = nome;
    this.email = email;
    this.genero = genero;
    this.estadoCivil = eestadoCivil;
    System.out.println("Objeto criado com sucesso!");
  }
      
 /*
  Trecho removido por razões de brevidade.
 */
}
```

Dessa vez, nós prefixamos o nome das variáveis de instância com o `this`, e assim elas são diferenciadas das variáveis do construtor.

Para entender onde o comando `this` seria útil, vejamos um outro exemplo:

```java
public class Estudante {
    String nome;  
    int idade;
    String turma;  
    
    Estudante (int idade, String nome, String turma){  
        idade = idade;  
        nome = nome;  
        turma = turma;
    }   
}
```

Note que existem parâmetros com o mesmo nome que as variáveis de instância definidas na classe. Dentro do corpo do construtor os parâmetros são os reis (isso também acontece com métodos). São eles que serão referenciados, e não as variáveis de instância com nomes iguais. No corpo do método, `idade` se refere apenas ao parâmetro `idade` não a variável de instância `idade`, por exemplo,

Para resolver isso, nós podemos deixar explicito que queremos atualizar o valor do atributo do objeto usando o comando `this`. O código acima ficaria assim:

```java
public class Estudante {
    String nome;  
    int idade;
    String turma;  
    
    Estudante (int idade, String nome, String turma){  
        this.idade = idade;  
        this.nome = nome;  
        this.turma = turma;
    }   
}
```

Em métodos ou construtores que não especificam parâmetros, ou cujos parâmetros têm nomes distintos das variáveis de instância, não é necessário usar o comando `this`.

```java
public class Estudante {
    String nome;  
    int idade;
    String turma;  
    
    Estudante (int i, String n, String t){  
        idade = i;  
        nome = n;  
        turma = t;
    }   
}
```

O código no fragmento acima insere corretamente os valores dos parâmetros nos atributos.

## A Classe Principal e o Método main

É comum ter programas feitos em Java que possuem uma classe com um método _main()_. Esse método é por onde a execução do programa começa de fato.

Essa é a estrutura dele:

```java
public static void main(String[] args){
```

Os dois primeiros comandos, `public` e `static`. serão abordados em outro texto. Mas cabe citar a função sintática de cada um deles, mesmo que brevemente, pois esse método está presente na maior parte dos exemplos.  A palavra-chave `public` permite que um membro de classe, como o _main()_, possa ser acessado por código fora de sua classe. O método _main()_ precisa ser executado por código fora de sua classe, então ele deve ser precedido do modificador de acesso `public`.

A palavra reservada `static` permite que o método main() seja chamado sem que seja necessário criar uma instância da classe que contém esse método. Esse tipo de método é chamado de método de classe, já que ele não está ligado a nenhum objeto específico. Esse é um requisito obrigatório porque a JVM chama o método main() antes  que qualquer objeto seja criado.

Os outros elementos você deve saber do que se trata. _void_ especifica que o método não retorna um valor, _main_ é o nome do método e (_String\[\] args)_ é uma lista de parâmetros, com apenas um item nesse caso.

O parâmetro em questão, tem um pequeno detalhe que nós não vimos até o momento, que é o par de colchetes `[]` . Esse par de colchetes sinaliza a criação de um vetor (array em inglês). Vetores são coleções de valores de um mesmo tipo. Nesse caso, args pode receber uma coleção de valores do tipo `String`. É nessa coleção que qualquer valor enviado através do interpretador de comando é colocado.

Salve um arquivo MetodoMainDemo1.java com o seguinte conteúdo.

```java
class MetodoMainDemo1{
    public static void main(String[] args){
        // Exibe o primeiro argumento armazenado na coleção
        // args.
        System.out.println("O primeiro elemento em args é:" + args[0]);
    }
}
```

Em um interpretador de comandos, use o comando `javac MetodoMainDemo1.java` para compilar o programa. Depois rode o comando `java MetodoMainDemo1.class oi`.

O resultado na tela será o seguinte:

    O primeiro elemento em args é: oi

Execute o programa mais uma vez, mas com o comando `java MetodoMainDemo1.class tchau`.

E o resultado será:

    O primeiro elemento em args é: tchau

Como pode observar, o que mudou entre um comando e outro é que em um nós incluimos a palavra oi e no outro nós incluímos a palavra tchau. Esses são argumentos que nós estamos colocando na coleção args. Ele é acessado usando args\[0\], que significa algo como "acesse o primeiro elemento da coleção args.".

## Copiando Objetos por Atribuição

Quando instanciamos um objeto, apenas uma referência a ele é armazenada em uma variável. Como mencionado anteriormente, esse fato tem uma consequência prática importante quando tentamos copiar um objeto.

Variáveis podem ser atribuídas à outras variáveis. Nesse cenário o valor contido em uma variável é armazenado em outra. Desse modo, se uma variável X guarda o número 4, e á atribuída a uma variável Y, o valor de Y também deve ser 4.

``` java
class CopiaDemo {
 public static void main (String[] args){
        int x = 4;
        int y = x;
        System.out.println("O valor de x é ", x, " e o valor de y é ", y );
    }
}
```

Resultado:

``` java
O valor de x é 4 e o valor de y é 4
```

Normalmente, essa é a primeira abordagem em que nós pensamos quando queremos a cópia, também, de um objeto, que consiste em um novo objeto que apresenta o mesmo conjunto de membros (métodos e atributos). Afinal, a criação de um objeto é idêntica a criação de uma variável primitiva, se distinguindo apenas pelo tipo ser uma classe.

Na listagem abaixo nós criamos uma variável do tipo Cliente, que armazena uma referência à um objeto do tipo Cliente, e então especificamos essa variável como o valor para outra.

``` java
 class CopiaDemo2 {
    
     public static void main(String[] args) {
         Cliente c1 = new Cliente("Fernando", "fernando@dominio.com", 'M', "Solteiro");
    
         // Tenta copiar o objeto c1.
         Cliente c2 = c1;
    
         // Mostra detalhes do objeto c1
         System.out.println("Detalhes de c1: ");
         c1.apresentarCliente();
    
         // Mostra detalhes do objeto c2
         System.out.println("Detalhes de c2: ");
         c2.apresentarCliente();
     }
 }
    
 class Cliente {
     // foram definidos dois atributos para a classe Cliente
    
     String nacionalidade = "Brasileiro(a)";
     String nome;
     String email;
     char genero;
     String estadoCivil;
    
     Cliente() {
         System.out.println("Objeto criado com sucesso!");
     }
    
     Cliente(String nm, String em, char gn, String ec) {
         nome = nm;
         email = em;
         genero = gn;
         estadoCivil = ec;
         System.out.println("Objeto criado com sucesso!");
     }
    
     void apresentarCliente() {
         System.out.println("Nome: " + nome);
         System.out.println("Email: " + email);
         System.out.println("Gênero: " + genero);
         System.out.println("Estado Cívil: " + estadoCivil);
         System.out.println("Nacionalidade: " + nacionalidade);
    
         // Apenas pula uma linha.
         System.out.println();
     }
    
     boolean enviarEmail(String mensagem) {
         boolean mensagemEnviada = false;
    
         if (mensagem != null) {
             // Inserir código para enviar mensagem aqui 
             mensagemEnviada = true;
         }
         return mensagemEnviada;
     }
 }
```

Resultado:

    Objeto criado com sucesso!
        
    Detalhes de c1: 
    Nome: Fernando
    Email: fernando@dominio.com
    Gênero: M
    Estado Cívil: Solteiro
    Nacionalidade: Brasileiro(a)
        
    Detalhes de c2: 
    Nome: Fernando
    Email: fernando@dominio.com
    Gênero: M
    Estado Cívil: Solteiro
    Nacionalidade: Brasileiro(a)

Pode parecer que nós atingimos o nosso objetivo de fazer a cópia de um objeto. Mas, na verdade, c1 e c2 são o mesmo objeto. Para ser mais preciso, as variáveis c1 e c2 contém a referência para o mesmo objeto.

Aparentemente, nós atingimos nosso objetivo: a cópia de um objeto. Nesse caso, a modificação em dos objetos não deve afetar o outro. Afinal, eles são idênticos, mas não o mesmo. Com isso em mente, veja o que acontece quando alteramos o campo de um dos objetos.

``` java
class CopiaDemo2 {

    public static void main(String[] args) {
        Cliente c1 = new Cliente("Fernando", "fernando@dominio.com", 'M', "Solteiro");

        // Tenta copiar o objeto c1.
        Cliente c2 = c1;
        
        // Apenas adiciona uma nova linha.
        System.out.println();
        
          // Altera o atributo nome de c2 antes demostrar os 
        // detalhes dos objetos c1 e c2.
        c2.nome = "John";
        
        // Mostra detalhes do objeto c1
        System.out.println("Detalhes de c1: ");
        c1.apresentarCliente();

        // Mostra detalhes do objeto c2
        System.out.println("Detalhes de c2: ");
        c2.apresentarCliente();
    }
}

class Cliente {
    // foram definidos dois atributos para a classe Cliente

    String nacionalidade = "Brasileiro(a)";
    String nome;
    String email;
    char genero;
    String estadoCivil;

    Cliente() {
        System.out.println("Objeto criado com sucesso!");
    }

    Cliente(String nm, String em, char gn, String ec) {
        nome = nm;
        email = em;
        genero = gn;
        estadoCivil = ec;
        System.out.println("Objeto criado com sucesso!");
    }

    void apresentarCliente() {
        System.out.println("Nome: " + nome);
        System.out.println("Email: " + email);
        System.out.println("Gênero: " + genero);
        System.out.println("Estado Cívil: " + estadoCivil);
        System.out.println("Nacionalidade: " + nacionalidade);

        // Apenas pula uma linha.
        System.out.println();
    }

    boolean enviarEmail(String mensagem) {
        boolean mensagemEnviada = false;

        if (mensagem != null) {
            // Inserir código para enviar mensagem aqui 
            mensagemEnviada = true;
        }
        return mensagemEnviada;
    }
}
```

Resultado:

    Objeto criado com sucesso!
        
    Detalhes de c1: 
    Nome: John
    Email: fernando@dominio.com
    Gênero: M
    Estado Cívil: Solteiro
    Nacionalidade: Brasileiro(a)
        
    Detalhes de c2: 
    Nome: John
    Email: fernando@dominio.com
    Gênero: M
    Estado Cívil: Solteiro
    Nacionalidade: Brasileiro(a)

Dessa vez, antes de exibir a informação dos objetos, nós alteramos o nome o atributo nome através de _c2_; nós mudamos o nome de Fernando para John.

Agora, perceba como o resultado se apresentou para nós. O nome John aparece tanto para _c1_ quanto para _c2_. Mas por que isso acontece? Lembre-se que _c1_ não armazena o objeto diretamente. Na verdade, apenas a referência (endereço) para um objeto é contida nessa variável. Desse modo, ao copiar _c1_ para _c2_, estamos copiando uma referência. Como, após essa operação, as referências contidas em c1 e c2 são iguais, elas apontam para o mesmo objeto, de modo que a alteração de um atributo em _c1_ afeta também _c2_.  Na prática nós apenas criamos um novo nome para um mesmo objeto.

***

Nós estudamos o que são classes e objetos. Vimos que as classes agrupam métodos e variáveis, e são usadas principalmente para instanciar objetos que devem apresentar tais métodos e variáveis.  Abordamos o uso do operador `new` para criar, alocar memória, e retornar uma referência para um objeto. Depois entendemos como acessar seus atributos e métodos. Por fim, finalizamos com a apresentação do comando `this` como um representante do objeto atual.

Existe mais conteúdo sobre classes métodos e variáveis quando introduzimos usamos modificadores para alterar ao escopo desses elementos. Por exemplo, usando o modificador `static` é possível criar uma variável que é compartilhada por todos os objetos de uma classe, ao invés de ser copiada para cada um. Mas isso vamos deixar para outro momento.