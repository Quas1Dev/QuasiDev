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
  - url: https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_psmodulepath?view=powershell-7.2
    title: About_PSModulePath - Microsoft
  - url: https://docs.microsoft.com/en-us/windows-hardware/drivers/develop/driver-isolation
    title: Driver package isolation - Microsoft
order: 3
---
Para entender o que são variáveis de ambiente precisamos ficar confortáveis com esses dois termos, então vamos explicar de forma resumida o que cada um significa.

## O que significa "variável" e "ambiente"?

Environment block: memory store where programas may store a set of strings in the form nome=valor. 

Null-terminated block of null-terminated strings. Each string is on the form 

Environment (also colled Master Environment Block): area of the memory used by DOS to store data related to ongoing activity.

Master environment: all I know is that we save environment variables there when using setx command.

Process Environment block: is a data structure in the Windows NT operating system family. 

Dizer que é um espaço implica em uma delimitação clara. Parece que o limite do bloco não é uma quantidade de bits, mas por dois bytes null

Each process has an environment block associated with it.Theenvironment block consists of a null-terminated block of null-terminated strings (meaning therearetwo null bytes at theend of the block), whereeach string is in theform:

Ambiente é um conjunto de strings terminado

um espaço na memória principal do computador que é usado para armazenar dados e informações. Geralmente, esses dados e informações são sobre alguma configuração do sistema operacional, do hardware do computador em si, e os softwares que estão instalados nele. Considere que o hardware, sistema operacional e os softwares instalados constituem o ambiente para um programa em execução, e o espaço denominado ambiente guarda dados e informações associadas a esse ambiente,

Não há limites para a quantidade de dados que podem ser armazenados no ambiente.

Os dados são armazenados em variáveis, que são espaços nomeados na memória.

O ambiente pode ser dividido em espaços menores para receber cada dado ou informação armazenado. Esses espaços são as variáveis. Cada uma recebe um nome e um dado (e.g., como o endereço para uma pasta no sistema) para armazenar.

Variável é um espaço nomeado da memória do computador.

Os dados e informações nesse espaço são armazenados em variáveis,

A grosso modo, ambiente é o que está em torno de algo. Por exemplo, o ambiente em que você está é constituído por todos os objetos que estão ao seu redor, as condições do clima, as relações hierárquicas, etc. Nesse caso, o ambiente em um computador pode ser considerado o sistema operacional e os programas que estão instalados, considerando um programa em execução como referencial.

Variáveis de ambiente estão incluídas em conjunto chamado bloco de ambiente. Uma cópia do bloco de ambiente de um processo pai é recebido por todo processo filho. Processo pai é aquele que chama outro processo. Ao abrir um programa X no Windows, ele recebe o bloco de ambiente desse sistema. Nesse cenário, X é o programa filho, e o Windows é o programa pai. Os programas iniciados pelo processador de comando herdam as variáveis de ambiente do processador de comando.

É importante notar que o bloco herdado recebe pode receber novas variáveis.

As variáveis contidas no bloco inicial podem ser divididas entre variáveis de ambiente do sistema e variáveis de ambiente do usuário.

## Variáveis de Ambiente do Sistema

Nesse grupo estão as variáveis que podem ser acessadas por programas iniciados por qualquer usuário que fizer login no computador. O que quer dizer que qualquer alteração **persistente** no nome ou valor das variáveis do sistema afeta **todos usuários de um computador**, independente de terem login e senha diferentes. 

Alterações persistentes são aquelas que não estão restritos à uma sessão em particular do interpretador sendo usado, e que continua mesmo depois que o programa é fechado ou mesmo depois do computador ser reiniciado. O comando `SETX` pode ser usado nesses casos, mas é necessário ter privilégio de administrador, como veremos mais adiante.

As variáveis do sistema podem ser encontradas no registro do Windows. Digite "editor do registro" na caixa de pesquisa do Windows e clique em Editor do Registro. Com o programa aberto, use o painel de navegação a esquerda para navegar para HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment. Lá você deve encontrar todas as variáveis de ambiente do sistema.

Observação: não é recomendado fazer qualquer alteração no registro do Windows, a menos que saiba exatamente o que está fazendo.

## Variáveis de Ambiente do Usuário

Esse grupo engloba as variáveis que são especificas para o usuário conectado e, portanto, só podem ser acessadas pelos programas cuja execução foi iniciada por  Em um computador que é usado por mais de uma pessoa, e cada usuário tem seu próprio nome de usuário e senha, eles terão individualmente um conjunto de variáveis do usuário, de forma que a alteração realizada em uma dessas variáveis para um usuário não afeta o outro. 

As variáveis do usuário podem ser encontradas no registro do Windows. Digite "editor do registro" na caixa de pesquisa do Windows e clique em Editor do Registro. Com o programa aberto, use o painel de navegação a esquerda para navegar para HKEY_CURRENT_USER\Environment. Lá você deve encontrar todas as variáveis de ambiente do sistema.

É possível que existam variáveis com mesmo nome em ambos os grupos. Nessa situação, a variável do usuário prevalece. Uma exceção é a variável path, que será combinada com qualquer outra variável path definida.

## Variáveis de Ambiente e Alterações Temporárias

Uma vez que um programa em execução recebe uma **cópia do bloco de ambiente**,ele pode usar ou modificar as variáveis e também adicionar novas variáveis à seu bloco.  As alterações realizadas no bloco herdado por um processo dura até que ele seja terminado, clicando no x para fechar a janela do CMD, por exemplo. Variáveis criadas são destruídas, os valores modificados nunca serão visíveis por outro processo. Isso vale inclusive para processos de um mesmo programa. Por exemplo, se abrirmos duas instâncias do CMD, e em uma delas nós mudamos sua cópia da variável path, nada acontece com a cópia da variável path da outra instância.

Esse tipo de variável de ambiente pode ser muito útil para guardar dados temporários que servem para um script em particular, mas não precisam ficar disponíveis para outros processos, ou para outro momento. 

Apesar do propósito ser guardar informações do ambiente, as modificações são livres. Qualquer dado (que possa ser representado com até 32.767 caráteres) pode ser colocado em uma variável de ambiente.  Os dados não têm que representar um fato importante sobre o ambiente de fato.

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
@ECHO OFF
SET /A _soma=2+5
PAUSE
```

Podemos ler a declaração acima como “crie uma variável com nome _soma e armazene a soma entre 2 e 5”, ou seja, “_soma” recebe 7.

A soma não é a única operação possível. Todas as quatro operações fundamentais da  matemática são aplicáveis a partir da escolha do sinal apropriado. Além disso há outros tipos de operações que podem ser realizadas além das quatro fundamentais.

## Como Acessar Variáveis de Ambiente

Para ver as variáveis de ambiente do sistema e usuário o Windows disponibiliza uma interface gráfica. Para acessa-la pesquise variáveis na caixa de pesquisa do Windows, e depois clique em Editar as variáveis de ambiente do sistema. Então clique em Variáveis de ambiente, e uma janela com as variáveis será exibida:

\[image]

Na parte de cima da janela tem uma seção com as variáveis especificas do usuário atual e na parte de baixo estão as variáveis do sistema (pelo menos até o Windows 10). 

No meu caso, as variáveis de usuários existentes são:

ONEDRIVE

Caminho para a pasta sincronizada com o OneDrive. Só aparece para quem tem o OneDrive instalado no computador.

PATH 

Contém uma lista de caminhos para pastas onde o interpretador de comandos pode buscar os programas com as instruções para execução de um comando externo. 

Quando digitamos um comando, o CMD primeiro procura pelo programa na pasta em que está aberto, e caso não encontre ele vai procurar nas pastas apontadas nessa variável. Outros programas também podem procurar por programas nessas pastas.

Na interface gráfica, você pode verificar quais as pastas na lista de forma mais organizada clicando no botão Editar com a variável PATH selecionada. 

Essa lista é apensada a especificada na variável de ambiente do sistema PATH.

TEMP

Indica onde programas podem armazenar programas temporários.  Seu valor sobrepõe o especificado na variável de ambiente do sistema.

TMP

O mesmo que temp indica onde programas podem armazenar programas temporários. Seu valor sobrepõe o especificado na variável de ambiente do sistema.

Já as do sistema são:

PATH

Contém uma lista de caminhos para pastas onde o interpretador de comandos pode buscar os programas com as instruções para execução de um comando externo. 

Quando digitamos um comando, o CMD primeiro procura pelo programa na pasta em que está aberto, e caso não encontre ele vai procurar nas pastas apontadas nessa variável. Outros programas também podem procurar por programas nessas pastas.

Na interface gráfica, você pode verificar quais as pastas na lista de forma mais organizada clicando no botão Editar com a variável PATH selecionada. 

Essa lista é apensada a especificada na variável de ambiente do usuário PATH.

TEMP

Indica onde programas podem armazenar programas temporários.  Seu valor é sobreposto pela sua contraparte no 

TMP

Indica onde programas podem armazenar programas temporários.

COMSPAC

Aponta pra o interpretador de comandos atual, o que geralmente é o CMD.

DRIVERDATA

Um local para armazenar arquivos temporários relacionados a um dispositivo que devem ser compartilhados com outros componentes.

OS

Informa qual o sistema base do sistema operacional instalado na máquina. No caso do Windows 10, o valor mostra Windows NT.

PATHEXT 

Contém um conjunto de extensões separadas por ponto e vírgula. Quando digitamos um comando externo o CMD procura pelo arquivo com o mesmo nome do comando em questão, e que tenha uma das extensões listadas aqui.  Por padrão, essa variável contém o valor  .COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC. 

Significa que se você tentar executar qualquer comando externo ou abrir qualquer programa sem especificar a extensão a extensão do arquivo, então cada um dos valores de PATHEXT será anexado, um de cada vez, até que o nome completo do programa ,  incluindo a extensão, seja encontrada. Por exemplo, para executar o comando MeuComando.exe, basta digitar MeuComando e CMD vai tentar encontrar MeuComando.com, MeuComando.exe, MeuComando.bat, etc., em todas as pastas especificadas na variável PATH.

PROCESSOR_ARCHITECTURE

Informa a arquitetura do processador da máquina. O valor é geralmente x86 (para processadores de 32-bits) ou AMD64 (para processadores 64-bits).

PSMODULEPATH

Contém uma lista de pastas onde encontrar módulos e recursos para o PowerShell.

USERNAME

Nome do usuário conectado na máquina.

WINDIR

Caminho para o diretório que contém os arquivos do Windows.

NUMBER_OF_PROCESSORS

Quantidade de processadores na máquina. Cada núcleo é contado como um processador.

PROCESSOR_LEVEL

Informa o número do modelo do processador 

PROCESSOR_IDENTIFIER

O identificador do processador da computador.

PROCESSOR_REVISION

Versão do processador da máquina.

Sua interface de usuário pode mostrar mais variáveis do que a minha. Isso depende dos programas instalados na sua máquina, de alterações que tenha feito anteriormente, e da versão do Windows. 

Programas abertos no Windows receberão um bloco de ambiente composto pela combinação dessas variáveis, mas com algumas adições. No CMD, digite `set` e pressione a tecla Enter para exibir as variáveis de ambiente disponíveis. Compare com a lista na interface gráfica anterior, e deve perceber que o comando lista mais variáveis do que existem na lista da interface.



As variáveis ​​de ambiente são acessadas envolvendo seus nomes, por ambos os lados, com o símbolo de porcentagem “%”, assim:

Environment variables are local to the process in which they were set. If two shell processes are spawned and the value of an environment variable is changed in one, that change will not be seen by the other.
When a child process is created, it inherits all the environment variables and their values from the parent process. Usually, when a program calls another program, it first creates a child process by forking, then the child adjusts the environment as needed and lastly the child replaces itself with the program to be called. This procedure gives the calling program control over the environment of the called program.