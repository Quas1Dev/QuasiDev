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
lastUpdated: 2022-07-24T17:07:20.762+00:00
author: Fernando Bonfim
excerpt_separator: "<!--more-->"
sources:
- url: https://docs.oracle.com/javase/specs/jls/se18/jls18.pdf
  title: The Java® Language Specification Java SE 18 Edition
order: 19
published: false

---
Nessa seção eu vou apresentar a você o conceito de classes e objetos. Vamos aprender a criar uma classe e então intanciar objetos a partir dela, e como declarar propriedades e métodos nas classes e acessar elas.

Algumas convenções são usadas para descrever a sintaxe:

* Tudo entre < e > é um elemento obrigatório.
* Tudo entre \[ e \] é opcional.

## Geral Sobre Classes

Classes são coleções nomeadas de variáveis e métodos. As variáveis armazenam valores, e os métodos agrupam instruções para um fim especifico. Assim, a classe será usada sempre que houver necessidade de acessar algum de seus dados, ou quando um de seus métodos for necessário.

Tipicamente, as classes generalizam as características de entidades (algo que existe) do mundo real; elas descrevem no programa a nossa visão de alguma coisa física ou ideia que existe, incluindo detalhes de alguma forma relevantes na aplicação. Por exemplo, em uma loja de automóveis nós podemos ter um software que incluí uma classe que representa o conceito de carro. Nesse exemplo, classe é a entidade que estamos representando no programa.

A partir de uma generalização, ou descrição geral se preferir, os programadores criam objetos, que são manifestações especificas da entidade representada por meio de uma classe.

Os objetos também são chamados de **instâncias**. Pense em uma instância como uma ocorrência especifica daquilo que uma classe descreve. Por exemplo, a instância de uma classe Carro pode ser um carro do modelo Fiat Uno Attractive, que percorre 11,6 km com 1 litro de gasolina, ou um Renault Logan. que percorre 13,2 km por litro de gasolina. Como outro exemplo, nós podemos citar uma classe Animal que pode ser usada para instanciar um animal preto, de calda longa, e que pertence a espécie Canis lupus familiaris, ou um animal pequeno, branco de orelhas pontudas que pertence a espécie Oryctolagus cuniculus.

Você pode pensar em classes como esses moldes, que permitem delinear um formato especifico para um doce. Os objetos, nesse caso, são como os doces que são formados com o molde.

Para servir de modelo para um objeto, uma classe descreve as **propriedades** e as **ações** que podem ser realizadas com, pelo ou através do objeto. As propriedades, também chamadas de **campos ou atributos**, são na verdade **variáveis** que armazenam um valor que pode ser o mesmo para todos os objetos formados com base na classe, ou pode variar para cada objeto. A coleção de atributos de um objeto representa o seu **estado**,

Entidades do mundo real têm propriedades. Por exemplo, um carro pode ter uma cor específica, pode ser de diversas marcas, consegue percorrer uma certa distância com um litro de combustível, tem um dono etc. Se definirmos uma classe Carro, podemos incluir variáveis que guardam cada uma dessas propriedades. Por exemplo, uma variável pode guardar o nome da marca do carro.

As ações são representadas por **métodos** (conjuntos de instruções nomeadas) que determinam o passo a passo para um objeto fazer alguma coisa ou alguma coisa ser feita com o objeto (Discutimos métodos em outra seção).

Assim como cada entidade tem propriedades, eles também podem sofrer alguma ação ou fazer alguma coisa. Um carro pode ser acelerado, ser abastecido, ser ligado, trocar de marcha etc. Se definirmos uma classe que descreve a entidade Carro, os métodos  nessa classe podem ser usados para informar o passo-a-passo para cada uma dessas ações.

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

    Cliente cliente  = new Cliente();

A instanciação de objetos tem sua própria seção nesse texto, onde discutimos a estrutura um pouco melhor.

## Incluindo Atributos

Já vimos como uma classe é criada, agora veremos como incluir os atributos nela.

Recapitulando, os atributos são variáveis que armazenam fatos sobre um objeto. Para uma classe que junta dados e ações relacionadas que representam o que seria um cliente para uma empresa que oferece uma plataforma para a procura de emprego, esses dados podem ser o nome, e-mail, gênero, telefone, CPF, etc.

No fragmento abaixo nós continuamos a declaração da classe Cliente iniciada na seção anterior.

```java
class Cliente {
  // Esses atributos serão usadas para armazenar dados
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

Como cada objeto tem uma cópia exclusiva desses atributos, eles são chamados de variáveis do objeto. Esse tipo de variável só pode ser acessada especificando a cópia de qual objeto você quer acessar.  Existe uma maneira de declarar variáveis da classe usando modificadores de acesso, mas esse será o tema para outra postagem

## Métodos

Um método é. basicamente, um conjunto nomeado de instruções, tal como o método **main()** que está presente em todos os programas feitos em Java e nomeia o conjunto de instruções pelo qual a <abbr title="Java Virtual Machine">JVM</abbr> começa a executar um programa. As instruções podem ou não usar ou modificar os atributos da classe que a envolve, mas normalmente isso acontece.

Observação: perceba que nós nos referimos a métodos usando o nome do método seguido de um par de parênteses. Isso tem a ver com a forma como os métodos são invocados,

A sintaxe mais simples de um método é essa:

    <tipo do retorno> <nome do método>([parâmetros])
    {
      // Declarações
      [return <valor de retorno>]
    }

Nós podemos separar essa estrutura em duas partes, o cabeçalho e o corpo.  Vamos dar uma olhada mais de perto no cabeçalho.

### Cabeçalho

O cabeçalho compreende os elementos que aparecem logo no início da declaração o método. Na sintaxe apresentada anteriormente, eles são os seguintes:

    <tipo do retorno> <nome do método>([parâmetros])

O cabeçalho define varias coisas com relação ao método em si.  **Deve** ser informado o tipo de retorno, o nome do método, e a lista de parâmetros (que pode estar vazia). Além desses elementos obrigatórios, **pode** ser incluído outros detalhes como modificadores de acesso (`public`, `protected`, `private`) para definir onde o método pode ser usado, ou a palavra reservada `static` para definir o método como estático, por exemplo. Nesse momento serão tratados apenas os elementos obrigatórios, pois esses já são muita coisa para aprender de uma vez, a meu ver. 

Agora vamos fazer uma análise dos elementos presentes cabeçalho. O `<tipo do retorno>` define o tipo do valor que será retornado pelo método. o qual é indicado pelo comando `return`.  Ele pode ser um [tipo primitivo](https://tecnologiaeinformacao.netlify.app/java/java-variables-ptbr), como o `int` ou o `double`, mas também pode ser um tipo referência (uma classe qualquer), como String ou Integer (ambas são classes que vem por padrão no Java). Se o método não retornar nenhum valor, o tipo deve ser `void`. Voltaremos nisso mais adiante.

Na listagem abaixo temos três métodos dentro de uma classe, Um deles retorna um número do tipo int, outro retorna uma referência para um objeto do tipo String, e outro não retorna nada.

    class CabecalhoDemo1{
    	// Esse método retorna um dado do tipo int
    	int retornaInteiro(){
        	int numero = 7;
            
            // Perceba que o tipo da variável numero é o mesmo
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

Daqui a pouco nós veremos para onde o dado é retornado, e também vamos entender o comando `return`. 

O `<nome do método>` pode ser qualquer **identificador válido** no Java, **exceto o termo main** que é reservado para o método que inicia a execução do programa (veja [A Classe Principal e o Método main](#a-classe-principal-e-o-metodo-main)). 

Um identificador válido em Java **não pode** ser igual a nenhum dos termos que tem algum significado na linguagem. Por exemplo, não é possível criar um método com nome `int`, porque o termo `int` é usado para especificar o tipo de um dado. 

Além disso, identificadores **não podem** começar com um número, Depois do primeiro caráter você pode usar números sem problemas. Então você não pode usar nomes como 4no, mas outros, como m4rcador, podem ser usados tranquilamente.

A mesma convenção seguida na montagem de nomes para variáveis se aplica ao identificador dos métodos. A primeira letra da primeira palavra que compõe o identificador tem que estar em minúsculo. Em identificadores compostos por múltiplas palavras, a primeira letra de cada palavra a partir da segunda deve aparecer em maiúsculo. 

Retomando o fragmento de código anterior, você pode ver que a convenção foi seguida nele, Perceba como o identificador de cada método foi escrito.

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

Vale lembrar que uma convenção não é uma regra que faz parte da linguagem. O compilador não vai te impedir de criar um método com um identificador que não segue a convenção. Isso é uma coisa que parte da comunidade que usa o Java, talvez para ajudar na legibilidade do código.

Esse nome será usado para chamar o método durante o programa. como veremos daqui a pouco.

O nome do método é seguido por um par de parênteses `()`. Dentro desses parênteses podem ser colocados os parâmetros. Os parâmetros são um conjunto de variáveis que devem receber um valor quando o método for invocado. Os itens na lista são separados por vírgula, e cada item é formado pelo tipo da variável e um identificador, como `String args`, ou `String nome`. 

    class CabecalhoDemo2{
    	// Esse método calcula a área de um circulo
        // considerando o valor armazenado no parâmetro raio,
        // que presumivelmente deve receber o valor da área do 
        // circulo.
    	double areaDoCirculo (double raio){
        	double area = (3.14 * (raio * raio));
        	return area;
        }
    }

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

Quando todas as instruções de um método são completadas, a execução do programa continua a partir do ponto no código do programa onde a instrução que invocou o método se encontra.

O exemplo de programa abaixo demonstra isso de forma mais clara.

    class MetodoDemo1 {
       // Método main; esse método é por onde a Máquina 
       // virtual do Java começa a rodar o programa.
       public static void main(String[] args){
           System.out.println("Antes de dizer 'Olá,mundo'");
           // O código abaixo invoca o método dizerOlaMundo
           dizerOlaMundo();
           System.out.println("Depois de dizer 'Olá,mundo'");
       } 
       
       private static void dizerOlaMundo(){
           System.out.println("Olá, mundo");
       }
    }

Como dito a execução do programa começa pelo método `main`.  A primeira instrução executada é  `System.out.println("Antes de dizer 'Olá,mundo'")`, que imprime `Antes de dizer 'Olá,mundo'`na tela.  Depois o método `dizerOlaMundo()` é chamado, então a execução continua a partir da primeira  e única instrução dentro do método, que imprime `Olá, mundo` na tela. Não há mais nada dentro do método além dessa instrução, então o método é finalizado, e a execução continua a partir da linha onde `dizerOlaMundo()` se encontra.

Perceba a maneira como invocamos o método. Nós colocamos o nome do método seguido de um par de parênteses. Por essa razão, nós geralmente nos referimos a métodos usando o nome do método seguido de parênteses.

Quando um método chega ao fim do bloco, o controle do programa é retornado para o ponto no código onde o método foi chamado. O controle, nesse caso, é o poder de influenciar o comportamento do programa, ou seja, definir a próxima ação que será executada pelo computador. A execução do programa continua a partir do ponto para o qual o controle foi retornado.

O comando `return` tem três efeitos importantes: ele encerra o método, retorna o controle para o ponto no código em que o método foi invocado e especifica um valor de retorno. A ideia de encerrar o método é bem simples. Basicamente, nada que

O tipo do valor retornado deve ser igual ao tipo especificado lá no cabeçalho do método. Se um método foi definido como `int calcula()`. o tipo do valor que ele retorna deve ser `int`. Se nenhum valor tiver que ser retornado — quando `<tipo de dado>` é `void` — comando `return` não precisa ser inserido na estrutura.

No fragmento

```java
// Cálcula a área com o comprimento da base e da altura
double calculaAreaTriangulo (double b, double a){
  double area = (b * a) / 2;
  return area;
}
```

o método é nomeado `calculaAreaTriangulo`. Entre parênteses temos dois parâmetros, ambos do tipo `double`, o quer dizer que esse método **deve** receber dois valores do tipo `double` quando for invocado (veremos como fazer isso em outra seção). No seu corpo, criamos a variável `a` que recebe o resultado da expressão `(b * a) / 2`. Por fim, o valor de `a` é retornado pelo método para . Perceba que o tipo da variável retornada e o tipo definido lá no cabeçalho são o mesmo. O valor retornado pode ser capturado por uma variável.

Ao invés de armazenar o resultado da expressão em uma variável, nós podemos colocar a expressão diretamente como o que será retornado pelo comando `return`.

A expressão poderia ser indicada diretamente, ao invés de ser colocada em uma variável:

```java
// Calcula a área com o comprimento da base e da altura
double calculaAreaTriangulo (double b, double a){
  return (b * a) / 2;
}
```

O fragmento abaixo faz a mesma coisa, mas não retorna o resultado do cálculo, apenas o exibe para o usuário.

```java
// Calcula a área de um triângulo e exibe o resultado
void calculaAreaTriangulo (double b, double a) {
  double area = (b * a) / 2;
  System.out.println("A área do triângulo é: " + area);
}
```

Na forma em que estão escritos, os métodos também são copiados para cada objeto criado a partir da classe que a envolve. Desse modo, elas também estão presas ao contexto do objeto, e portanto só podem ser acessados através deles. Nessa condição, se nenhuma instância da classe é criada, o método não poderá ser usado.

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

## A funcionalidade do método

Costuma-se agrupar em métodos instruções necessárias para resolver um problema especifico. Por exemplo, para calcular as combinações possíveis dos itens em um conjunto, nós podemos criar um método calculaCombinacoes() com as contas necessárias. Geralmente, o problema não é tão pequeno que possa ser resolvido com uma instrução apenas, mas nada impeça algo desse tipo.

A ideia de em "problema especifico" é bem vaga, de fato. Suponhamos que você esteja codificando uma funcionalidade de login. Para esse sistema, você percebe que existe a necessidade de criar uma variável para armazenar o nome, e outra para armazenar a senha do usuário. De certo modo, a necessidade de criação de uma variável para o nome constitui um problema, a necessidade de criação de uma variável para a senha constitui outro problema.

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

Os construtores devem vir antes de qualquer método da classe e não podem retornar um valor.

## Usando new Para Instanciar Objetos

Classes são, geralmente, usadas para criar/instanciar objetos. Um objeto é criado com o operador `new`, e uma referência a ele é colocada em uma variável do mesmo tipo do objeto.

A sintaxe básica para instanciação é a seguinte:

    <classe> c1 = new <classe([argumentos])>

No centro nós temos o sinal de igualdade que indica que o que está direita será armazenado na variável a esquerda. O  nome da classe aparece antes do nome da variável para definir o seu tipo. Do lado direito do sinal de igualdade inserimos a palavra chave `new` seguida do construtor da classe que pode receber uma lista de argumentos ou não.

Um argumento é qualquer valor que será enviado para o construtor da classe. Cada argumento na lista será inserido no parâmetro em posição correspondente no cabeçalho do construtor.

Aqui está um programa que inicia um objeto do tipo Cliente:

    // Declara uma variável do tipo Cliente
    // e armazena o endereço para um objeto do tipo Cliente nela.
    Cliente c1 = new Cliente();

O operador `new` aloca memória dinamicamente (i.e., durante a execução do programa) para um objeto. Depois de alocar a memória, o construtor Cliente() é invocado para criar o objeto. Nossa classe Cliente tem dois construtores declarados explicitamente por nós, um com parâmetros e outro sem. Como não inserimos nenhum argumento, o construtor sem parâmetros é utilizado. O objeto é colocado no espaço da memória alocado por `new` e então uma referencia para esse objeto é retornada para a variável. Essa referência é o endereço do local na memória onde o objeto está localizado.  O objeto é armazenado em uma região da memória conhecida como heap — uma parte da memória principal que foi alocada para a máquina virtual do Java.

Uma declaração usando o outro construtor pode ser escrita como no fragmento abaixo:

    // Declara uma variável do tipo Cliente
    // e armazena o endereço para um objeto do tipo Cliente nela.
    Cliente c1 = new Cliente("John Doe", "john@dominio.com", 'M', "Casado");

Dessa vez foram incluídos 4 argumentos, então o construtor com 4 quatro parâmetros será usado para criar o objeto. Perceba que cada argumento será inserido no parâmetro em posição correspondente a sua: `John Doe` será armazenado no parâmetro `n`, `john@dominio.com` será colocado no parâmetro e, `M` ficará no parâmetro `g`, e `Casado` será colocado no parâmetro `ec`. Desse modo, cada argumento deve ser do mesmo tipo do parâmetro em posição correspondente na definição do construtor.

Nós podemos quebrar a declaração da variável Cliente acima em duas.

    Cliente c1;
    c1 = new Cliente("John Doe", "john@dominio.com", 'M', "Casado");

Na primeira linha declaramos uma variável que pode referenciar um objeto do tipo Cliente. Na linha seguinte,  foi criado um novo objeto do tipo Cliente e uma referência à ele é armazenada na variável c`1`. É comum nos referirmos a variável como se fosse o objeto, tipo 'o objeto c1', mas a variável apenas armazena uma referência para o objeto e não o objeto em si. Vamos ver uma consequência prática desse fato em breve

## Acessando os Atributos e Métodos do objeto

Os atributos e métodos de um objeto são acessados usando um ponto (.) seguido do nome do atributo ou método. No caso de um método também é inserido um par de parênteses que deve envolver a lista de argumentam caso o método tenha parâmetros.

Para acessar o atributo nome do objeto c1, nós escrevemos `c1.nome`.e para acessar seu método apresentarCliente nós usamos `c1.apresentarCliente()`.

Aqui está um programa completo que cria um objeto da classe  Cliente.

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
  
  Cliente (String n, String e, char g, String ec){
    nome = n;
    email = e;
    genero = g;
    estadoCivil = ec;
    System.out.println("Objeto criado com sucesso!");
  }
  
  void apresentarCliente(){
    System.out.println("Nome: " + nome);
    System.out.println("Email: " + email);
    System.out.println("Genero: " + genero);
    System.out.println("Estado Cívil: " + estadoCivil);
    System.out.println("Nacionalidade: " + nacionalidade);
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

classe ClienteDemo {
  public static void main (String[] args) {
    System.out.println("CLIENTE 1");
    Cliente c1 = new Cliente();
    System.out.println("Atributos do c1 antes de iniciar as variáveis");
    c1.apresentarCliente();
        
    System.out.println();
               
    c1.nome = "Nemo Alicunde";
    c1.email = "nemo@dominio.com";
    c1.genero = 'M';
    c1.estadoCivil = "casado" ;
        
    System.out.println("Atributos do c1 depois de iniciar as variáveis.");   
    c1.apresentarCliente();
        
    System.out.println("");
        
    System.out.println("CLIENTE 2");
    Cliente c2 = new Cliente("John Doe", "john@dominio.com", 'M', "Casado");
    c2.apresentarCliente();
    System.out.println(c2.enviarEmail("A minha mensagem é Busque Conhecimento"));
  }
}
```

Você pode salvar um arquivo ClienteDemo.java com o conteúdo do fragmento acima. Usando um processador de texto aberto na mesma pasta que o programa está, execute o comando `java ClienteDemo.java`. Dois arquivos .class serão criados, cada um com o bytecode de uma das classes.

Nota: você não precisa salvar as duas classes no mesmo arquivo .java, mas ambas precisam ser compiladas.

Para rodar o programa, digite `java ClienteDemo` no CMD ealgo como o seguinte deve aparecer na tela.

Resultado:

    CLIENTE 1
    Objeto criado com sucesso!
    Atributos do c1 antes de iniciar as variáveis
    Nome: null
    Email: null
    Genero: 
    Estado Cívil: null
    Nacionalidade: Brasileiro(a)
    
    Atributos do c1 depois de iniciar as variáveis.
    Nome: Nemo Alicunde
    Email: nemo@dominio.com
    Genero: M
    Estado Cívil: casado
    Nacionalidade: Brasileiro(a)
    
    CLIENTE 2
    Objeto criado com sucesso!
    Nome: John Doe
    Email: john@dominio.com
    Genero: M
    Estado Cívil: Casado
    Nacionalidade: Brasileiro(a)
    true

Nesse programa podemos notar algumas coisas:

\- Quando as variáveis não são iniciadas, isto é, quando nada foi atribuído a elas, um valor padrão é atribuído a elas automaticamente.

\- Cada objeto da classe Cliente tem um estado diferente, ou seja, apresentam atributos com valores diferente. É muito importante reconhecer que uma instância não interfere na outra, nesse caso que incluí apenas variáveis de instâncias.

\- Como o primeiro construtor especificado não continha uma lista de argumentos o construtor sem parâmetros foi usado para construir o objeto de c1. Já para o segundo objeto foi usado o construtor que tem 4 parâmetros, já que 4 argumentos foram especificados entre parênteses.

\-  O comando `return` retorna o valor da variável `mensagemEnviada` que é exibida para o usuário com o comando `System.out.println`.

\- O tipo de cada argumento no chamado do método é igual a do parâmetro em posição correspondente no cabeçalho do método. Por exemplo, o terceiro item na lista de argumentos em `Cliente c2 = new Cliente("John Doe", "john@dominio.com", 'M', "Casado");` é um literal do tipo caráter, o mesmo tipo do terceiro item na lista de parâmetros em `Cliente (String n, String e, char g, String ec){`.

## O Comando this

Quando um método  de instância é criado, um argumento implícito (escondido) é passado com uma referencia para o objeto no qual o método é invocado. Ele é representado pelo no código fonte pela palavra reservada `this`. Esse comando pode ser muito útil quando um método ou construtor tem um parâmetro com o mesmo nome de uma variável de instância ou de classe. Para distinguir entre o parâmetro e a variável de instância, prefixamos o nome da variável com `this.`.

Para entender onde o comando `this` seria útil, vejamos um exemplo:

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

Para resolver isso, podemos deixar explicito que queremos atualizar o valor do atributo do objeto usando o comando usando o comando `this`. O código acima ficaria assim:

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

O código no fragmento acima insere corretamente os valores dos parâmetros nos atributos da classe.

***

Nós estudamos o que são classes e objetos. Vimos que as classes agrupam métodos e variáveis, e são usadas principalmente para instanciar objetos que devem apresentar tais métodos e variáveis.  Abordamos o uso do operador `new` para criar, alocar memória, e retornar uma referência para um objeto. Depois entendemos como acessar seus atributos e métodos. Por fim, finalizamos com a apresentação do comando `this` como um representante do objeto atual.

Existe mais conteúdo sobre classes métodos e variáveis quando introduzimos usamos modificadores para alterar ao escopo desses elementos. Por exemplo, usando o modificador `static` é possível criar uma variável que é compartilhada por todos os objeto de uma classe, ao invés de ser copiada para cada um. Mas isso vamos deixar para outro momento.

## A Classe Principal e o Método main