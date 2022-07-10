---
title: Variáveis de Ambiente
layout: article
permalink: /batch/:title
description: Entenda o que são variáveis de ambiente, sua diferença das
  variáveis em outras linguagens de programação, e como podem ser criadas e
  acessadas em Batch.
categories:
  - Batch
tags:
  - variáveis.
date: 2022-07-09T23:29:23.409Z
lastUpdated: 2022-07-09T23:29:24.067Z
author: Fernando Bonfim
excerpt_separator: <!--more-->
sources:
  - url: https://www.pcmag.com/encyclopedia/term/environment
    title: environment - PC Mag
  - url: https://www.merriam-webster.com/dictionary/environment
    title: Environment - Merriam Webster
  - url: https://hermit.cc/it/dos/envar.htm#:~:text=Definition,environmental%20variables%2C%20or%20environmental%20strings.
    title: The DOS Environment - Hermit's Free Library
  - url: https://en.wikipedia.org/wiki/Environment_variable#Design
    title: Environment variable - Wikipedia
  - url: https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.2
    title: About Environment Variables - Microsoft
  - url: https://www.google.com.br/books/edition/DOS_the_Easy_Way/vrsSflB2o5sC?hl=en&gbpv=1&dq=DOS&pg=PA125&printsec=frontcover
    title: DOS the Easy Way
order: 3
---
Para entender o que são variáveis de ambiente precisamos ficar confortáveis com esses dois termos, então vamos explicar de forma resumida o que cada um significa.

## O que significa "variável" e "ambiente"?

Environment block: memory store where programas may store a set of strings in the form 

Environment (also colled Master Environment Block): area of the memory used by DOS to store data related to ongoing activity.

Master environment: all I know is that we save environment variables there when using setx command.

Process Environment block: is a data structure in the Windows NT operating system family. 

Dizer que é um espaço implica em uma delimitação clara.

Ambiente é um espaço na memória principal do computador que é usado para armazenar dados e informações. Geralmente, esses dados e informações são sobre alguma configuração do sistema operacional, do hardware do computador em si, e os softwares que estão instalados nele. Considere que o hardware, sistema operacional e os softwares instalados constituem o ambiente para um programa em execução, e o espaço denominado ambiente guarda dados e informações associadas a esse ambiente,

Não há limites para a quantidade de dados que podem ser armazenados no ambiente.

Os dados são armazenados em variáveis, que são espaços nomeados na memória.

O ambiente pode ser dividido em espaços menores para receber cada dado ou informação armazenado. Esses espaços são as variáveis. Cada uma recebe um nome e um dado (e.g., como o endereço para uma pasta no sistema) para armazenar.

Variável é um espaço nomeado da memória do computador.

Os dados e informações nesse espaço são armazenados em variáveis,

A grosso modo, ambiente é o que está em torno de algo. Por exemplo, o ambiente em que você está é constituído por todos os objetos que estão ao seu redor, as condições do clima, as relações hierárquicas, etc. Nesse caso, o ambiente em um computador pode ser considerado o sistema operacional e os programas que estão instalados, considerando um programa em execução como referencial. Por exemplo, o  

ambiente é o termo usado para identificar um espaço na memória principal do computador que, em teoria, serve para armazenar dados sobre o sistema operacional e talvez sobre outros softwares instalados no computador, que são componentes que foram o ambiente 

sobre o contexto onde um programa está envolvido.

se refere ao contexto em que um software está inserido, que é constituído pelo 

A grosso modo, ambiente é o que está em torno de algo. Por exemplo, o ambiente em que você está é constituído por todos os objetos que estão ao seu redor, as condições do clima, as relações hierárquicas, etc. Nesse caso, o ambiente em um computador pode ser considerado o sistema operacional e os programas que estão instalados, considerando um programa em execução como referencial. Por exemplo, o  

## Variáveis de Ambiente de Sessão

São variáveis que duram desde o momento de sua criação até o fim da sessão atual e estão disponíveis apenas para o processo que criou essas variáveis.  Uma sessão compreende o mento de inicio de uma atividade, nesse caso o inicio de um processo, até o seu encerramento. Um processo consiste em um programa em execução. 

Por exemplo, quando você abre o CMD pela primeira vez, um novo processo é iniciado, o que é percebido facilmente pela presença de uma janela na tela do computador. O tempo que você passa com esse processo presente no seu computador é a sessão. Assim que você encerra o processo, fechando a janela, aquela sessão é encerrada. Nesse ponto, qualquer variável de sessão criada naquele processo desaparece.

Esse tipo de variável de ambiente pode ser muito útil para guardar dados temporários que servem para um script em particular, mas não precisam ficar disponíveis para outros processos, ou para outro momento.

### Usando o Comando SET

A linguagem Batch possuí o comando `SET` para criar, acessar, modificar e deletar variáveis para a sessão atual. Desse modo, deletar ou modificar uma variável de ambiente com o comando `SET` não é uma ação permanente. Se você tiver duas instâncias do CMD sendo executadas ao mesmo tempo, e em uma delas você usa o comando `SET` para excluir a variável de ambiente PATH, nada será afetada na outra.

Para guardar qualquer texto usamos a forma `SET [nome da variável]=[valor/dado]`, Com essa estrutura, nós podemos criar variáveis capazes de armazenar qualquer conjunto com um ou mais caracteres (String). Sendo assim, podemos armazenar nomes, endereços, algarismos, frases completas, etc.

```
@ECHO OFF
:: Declara uma variável nomeada _val.
SET _val=Um valor Qualquer
ECHO %_val%
PAUSE
```

O valor de uma variável pode ser copiado para outra. Nesse caso, ao invés de especificar o valor do lado direito do sinal de atribuição, nós indicamos a variável cujo valor deve ser copiada, inserindo porcentagem antes de depois do identificador da variável.

```console
@ECHO OFF
SET _val=Um valor Qualquer

:: _val2 recebe o valor de _val.
SET _val2=%_val%

ECHO %_val2%
PAUSE
```

Múltiplas variáveis podem ser atribuídas a uma variável. Nesse caso, elas serão combinadas em uma única string.

```console
@ECHO OFF
SET _val=Uma
SET _val2=Frase
SET _val3=Qualquer

:: Junta todas as strings acima em uma só
SET _frase=%_val% %_val2% %_val3%

ECHO %_frase%
PAUSE
```

Cada variável de ambiente possuí um **limite de 32.767 caracteres**, incluindo o nome, o sinal de igual e o valor da variável, mas na prática esse limite é restringido pelo meio utilizado para criar a variável que, neste caso, é o CMD.  Nós podemos digitar até 1.890 caracteres no CMD, e toda a declaração `SET [nome da variável]=[texto]` deve estar dentro desse limite. Tirando o comando `SET` e o espaço que vem logo após ele, que juntos ocupam 4 caracteres, ficamos com 1.886 caracteres de espaço disponíveis para o **nome, sinal de igual e valor da variável**. 

### Armazenar Resultados de Operações em Variáveis

A opção /A do comando `SET` nos permite criar variáveis que recebem resultados de um cálculo matemático. A sintaxe mais comum `SET /A "[nome da variável]=[expressão aritmética]"`.

Observação: As aspas somente são obrigatórias se os operadores &, |, ^, << e >> forem usados, mas é recomendado sempre inclui-las.

A expressão aritmética vai conter números/operandos (ou variáveis que guardem números) e algum operador que informa como eles devem ser manipulados, ou seja, qual operação deve ser feita. O calculo pode ser tão curto quanto 2 + 2, ou tão grande quanto 2 *(22/4) ^ 3 +23-300%3. 

```
SET /A _soma=2+5
```

Podemos ler a declaração acima como “crie uma variável com nome _soma e armazene a soma entre 2 e 5”, ou seja, “_soma” recebe 7.

A soma não é a única operação possível. Todas as quatro operações fundamentais da  matemática são aplicáveis a partir da escolha do sinal apropriado. Além disso há outros tipos de operações que podem ser realizadas além das quatro fundamentais.

## Variáveis de Ambiente do Sistema

Nesse grupo estão as variáveis que podem ser acessadas por programas iniciados por qualquer usuário que fizer login no computador. O que quer dizer que qualquer alteração persistente no nome ou valor das variáveis do sistema afeta **todos usuários de um computador**, independente de terem login e senha diferentes. 

Alterações persistentes são aquelas que não estão restritos à uma instância em particular do interpretador sendo usado, e que continua mesmo depois que o programa é fechado ou mesmo depois do computador ser reiniciado. O comando `SETX` pode ser usado nesses casos, mas é necessário ter privilégio de administrador, como veremos mais adiante.

As variáveis do sistema podem ser encontradas no registro HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment.

## Variáveis de Ambiente do Usuário

Esse grupo engloba as variáveis que são especificas para o usuário logo e, portanto, só podem ser acessadas pelos programas cuja execução foi iniciada por ele. Em um computador que é usado por mais de uma pessoa, e cada usuário tem seu próprio login e senha, eles terão individualmente um conjunto de variáveis do usuário, de forma que a alteração realizada em uma dessas variáveis para um usuário não afeta o outro. 

Como as variáveis do sistema, as variáveis do usuário permanecem mesmo quando o computador é desligado ou quando o programa que as criaram é fechado. Então se criarmos uma nova variável do usuário como o CMD.EXE, mesmo que o programa seja fechado a variável continua disponível.

As variáveis do usuário podem ser encontradas no registro em HKEY_CURRENT_USER\Environment.

É possível que existam variáveis com mesmo nome e valor em ambos os grupos, como você verá mais abaixo.

### Como Acessar Variáveis de Ambiente

Para ver algumas das variáveis de ambiente do sistema e usuário no Windows clique no menu iniciar -> Digite variáveis -> clique em “Editar variáveis de ambiente do sistema” -> Variáveis de ambiente. Uma janela como a seguinte deve aparecer:

Na parte de cima da janela tem uma seção com as variáveis especificas do usuário atual e na parte de baixo estão as variáveis do sistema (pelo menos até o Windows 10). 

No meu caso, as variáveis de usuários existentes são:

* OneDrive
* Path
* Temp
* Tmp

Já as do sistema são:

* Path
* Temp
* Tmp
* CLASSPATH
* ComSpec
* DriverData
* JAVA_HOME
* NUMBER_OF_PROCESSORS
* OS
* PATHEXT
* PROCESSOR_ARCHITECTURE
* PROCESSOR_IDENTIFIER
* PROCESSOR_LEVEL
* PROCESSOR_REVISION
* PSModulePath
* USERNAME
* windir

Existem várias outras variáveis que, por algum motivo, não são exibidas nessa janela. Uma lista maior, porém, ainda incompleta, pode ser vista no terminal usando o comando `SET` no terminal. 

### Variáveis de Ambiente da Instância Atual

Toda vez que um programa é executado ele herda as variáveis de ambiente do programa que o executou, o programa pai; é como uma cópia de todas as variáveis de ambiente do programa pai. Nesse caso, quando nós abrimos o CMD.EXE, ele recebe uma lista de todas as variáveis disponíveis para o Windows. Da mesma forma os programas abertos por esse processador de comandos herdaram as variáveis de ambiente do mesmo. 

As variáveis do sistema são lidas antes das variáveis do usuário. Então se houver variáveis do usuário e do sistema com mesmo nome, o valor da variável do usuário será considerado. A variável PATH é uma exceção, já que o valor final será gerado a partir da junção entre o valor da variável do sistema com a variável do usuário separados por ponto e vírgula (

;). Considere as seguintes variáveis do usuário:

PATH=C:\Program Files\Java\jdk-11.0.1\bin
TEMP=C:\Users\fer\AppData\Local\Temp
Considere as seguintes variáveis do sistema:
PATH=C:\Users\fer\AppData\Local\Programs\Python\Python38
TEMP=C:\WINDOWS\TEMP
Ao abrir o CMD ele recebera as seguintes variáveis:
PATH=C:\Users\Fer\AppData\Local\Programs\Python\Python38;C:\Program Files\Java\jdk-11.0.1\bin
TEMP=C:\Users\fer\AppData\Local\Temp

O programa pode ler e modificar essas variáveis além de adicionar novas variáveis a lista, sem que essa manipulação afete as variáveis do ambiente do programa pai. No CMD, por exemplo, podemos usar o comando `SET` para manipular as variáveis de ambiente de forma que o resultado afete apenas a.

Environment variables are local to the process in which they were set. If two shell processes are spawned and the value of an environment variable is changed in one, that change will not be seen by the other.
When a child process is created, it inherits all the environment variables and their values from the parent process. Usually, when a program calls another program, it first creates a child process by forking, then the child adjusts the environment as needed and lastly the child replaces itself with the program to be called. This procedure gives the calling program control over the environment of the called program.