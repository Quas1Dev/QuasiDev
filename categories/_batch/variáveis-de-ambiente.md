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
date: 2022-07-14T04:11:57.615Z
lastUpdated: 2022-07-14T04:11:56.316Z
author: Fernando Bonfim
excerpt_separator: <!--more-->
sources:
  - url: https://www.pcmag.com/encyclopedia/term/environment
    title: environment - PC Mag
  - url: https://www.merriam-webster.com/dictionary/environment
    title: Environment - Merriam Webster
  - url: https://en.wikipedia.org/wiki/Environment_variable#Design
    title: Environment variable - Wikipedia
  - url: https://hermit.cc/it/dos/envar.htm#:~:text=Definition,environmental%20variables%2C%20or%20environmental%20strings.
    title: The DOS Environment - Hermit's Free Library
  - url: https://www.google.com.br/books/edition/DOS_the_Easy_Way/vrsSflB2o5sC?hl=en&gbpv=1&dq=DOS&pg=PA125&printsec=frontcover
    title: DOS the Easy Way
  - url: https://superuser.com/questions/909310/why-does-the-set-command-display-more-environment-variables-than-the-environment
    title: Why does the set command display more environment variables than the
      environment variables gui? - Microsoft
  - url: https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.2
    title: About Environment Variables - Microsoft
  - title: "How-to: Windows Environment Variables - SS64"
    url: https://ss64.com/nt/syntax-variables.html
  - url: https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_psmodulepath?view=powershell-7.2
    title: About_PSModulePath - Microsoft
  - url: https://docs.microsoft.com/en-us/windows-hardware/drivers/develop/driver-isolation
    title: Driver package isolation - Microsoft
  - url: https://docs.microsoft.com/en-us/windows/deployment/usmt/usmt-recognized-environment-variables
    title: Recognized Environment Variables - Microsoft
  - url: https://docs.microsoft.com/en-us/windows/win32/shell/user-environment-variables
    title: User Environment Variables - Microsoft
  - url: https://docs.microsoft.com/en-us/windows/win32/shell/csidl?redirectedfrom=MSDN
    title: CSIDL - Microsoft
  - url: https://devblogs.microsoft.com/oldnewthing/20220329-00/?p=106404
    title: Why are there separate Program Files and Program Files (x86) directories?
      - Microsoft
  - url: https://docs.microsoft.com/en-us/windows/win32/api/userenv/nf-userenv-getallusersprofiledirectorya
    title: GetAllUsersProfileDirectoryA function (userenv.h) - Microsoft
  - url: https://docs.microsoft.com/en-us/windows/win32/winprog64/wow64-implementation-details
    title: WOW64 Implementation Details - Microsoft
order: 3
---
Para entender o que são variáveis de ambiente precisamos ficar confortáveis com esses dois termos, então vamos explicar de forma resumida o que cada um significa.

## O que significa "variável" e "ambiente"?

Ambiente é o que está em torno de algo. Por exemplo, o ambiente em que você está é constituído por todos os objetos que estão ao seu redor, as condições do clima, as relações hierárquicas, etc. Em um computador o ambiente pode ser considerado o sistema operacional, os programas que estão instalados, e as configurações, que juntos compõem o cenário onde os programas são executados.

As variáveis são espaços nomeados na memória que podem receber um dado. Elas geralmente são apresentadas na forma \[nome da variável]=\[valor], onde \[nome da variável] é o nome que identifica um espaço na memória, e \[valor] é o dado que é armazenado no espaço indicado. O sinal de igual faz a ligação entre o valor e a variável. Desse modo, as variáveis de ambiente são espaços nomeados na memória do computador que armazenam dados e informações sobre o sistema operacional, os programas utilitários instalados na máquina, o hardware, etc.

Variáveis de ambiente estão incluídas em conjunto chamado bloco de ambiente. Uma cópia do bloco de ambiente de um processo pai é recebido por todo processo filho. Processo pai é aquele que chama outro processo. Ao abrir um programa X no Windows, ele recebe o bloco de ambiente desse sistema. Nesse cenário, X é o programa filho, e o Windows é o programa pai. Os programas iniciados pelo processador de comando herdam as variáveis de ambiente do processador de comando.

É importante notar que o bloco herdado pode receber novas variáveis.

As variáveis contidas no bloco inicial podem ser divididas entre variáveis de ambiente do sistema e variáveis de ambiente do usuário.

## Variáveis de Ambiente do Sistema

Nesse grupo estão as variáveis que podem ser acessadas por programas iniciados por qualquer usuário que fizer login no computador. O que quer dizer que qualquer alteração **persistente** no nome ou valor das variáveis do sistema afeta **todos usuários de um computador**, independente de terem login e senha diferentes. 

Alterações persistentes são aquelas que não estão restritos à uma sessão em particular do interpretador sendo usado, e que continua mesmo depois que o programa é fechado ou mesmo depois do computador ser reiniciado. O comando `SETX` pode ser usado nesses casos, mas é necessário ter privilégio de administrador, como veremos mais adiante.

As variáveis do sistema podem ser encontradas no registro do Windows. Digite "editor do registro" na caixa de pesquisa do Windows e clique em Editor do Registro. Com o programa aberto, use o painel de navegação a esquerda para navegar para HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment. Lá você deve encontrar todas as variáveis de ambiente do sistema.

Observação: não é recomendado fazer qualquer alteração no registro do Windows, a menos que saiba exatamente o que está fazendo.

## Variáveis de Ambiente do Usuário

Esse grupo engloba as variáveis que são especificas para o usuário conectado e, portanto, só podem ser acessadas pelos programas cuja execução foi iniciada por  Em um computador que é usado por mais de uma pessoa, e cada usuário tem seu próprio nome de usuário e senha, eles terão individualmente um conjunto de variáveis do usuário, de forma que a alteração realizada em uma dessas variáveis para um usuário não afeta o outro. 

As variáveis do usuário podem ser encontradas no registro do Windows. Digite "editor do registro" na caixa de pesquisa do Windows e clique em Editor do Registro. Com o programa aberto, use o painel de navegação a esquerda para navegar para HKEY_CURRENT_USER\Environment. 

É possível que existam variáveis com mesmo nome em ambos os grupos. Nessa situação, a variável do usuário prevalece. Uma exceção é a variável path, que será combinada com qualquer outra variável path definida.

## Variáveis de Ambiente e Alterações Temporárias

Uma vez que um programa em execução recebe uma **cópia do bloco de ambiente** ele pode usar ou modificar as variáveis e também adicionar novas variáveis à seu bloco.  As alterações realizadas no bloco herdado por um processo dura até que ele seja terminado, clicando no x para fechar a janela do CMD, por exemplo. Variáveis criadas são destruídas, os valores modificados nunca serão visíveis por outro processo. Isso vale inclusive para processos de um mesmo programa. Por exemplo, se abrirmos duas instâncias do CMD, e em uma delas nós mudamos sua cópia da variável path, nada acontece com a cópia da variável path da outra instância.

Esse tipo de variável de ambiente pode ser muito útil para guardar dados temporários que servem para um script em particular, mas não precisam ficar disponíveis para outros processos, ou para outro momento. 

Apesar do propósito ser guardar informações do ambiente, as modificações são livres. Qualquer dado (que possa ser representado com até 32.767 caráteres) pode ser colocado em uma variável de ambiente.  Os dados não têm que representar um fato importante sobre o ambiente de fato.

### Usando o Comando SET

A linguagem Batch possuí o comando `SET` para criar, acessar, modificar e deletar variáveis para a sessão atual. Desse modo, deletar ou modificar uma variável de ambiente com o comando `SET` não é uma ação permanente. Se você tiver duas instâncias do CMD sendo executadas ao mesmo tempo, e em uma delas você usa o comando `SET` para excluir a variável de ambiente PATH, nada será afetada na outra.

Para guardar qualquer texto usamos a forma `SET [nome da variável]=[valor/dado]`, Com essa estrutura, nós podemos criar variáveis capazes de armazenar qualquer conjunto com um ou mais caracteres (String). Sendo assim, podemos armazenar nomes, endereços, algarismos, frases completas, etc.

```console
@ECHO OFF

:: Declara uma variável nomeada _val.
SET _val=Um valor Qualquer

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

A troca no valor da variável também pode ser feita com o comando `SET`. Use a mesma estrutura  `SET [nome da variável]=[texto]` , mas dessa vez o nome da variável deve ser o nome da variável que a ser modificada.

Para deletar uma variável nós apenas digitamos SET \[nome da variável]=, onde \[nome da variável] identifica a variável que deve ser excluída. O comando `SET path=` exclui a variável Path.

Ao atribuir valor que incluí símbolos reservados da linguagem Batch a uma variável de ambiente, é necessário usar o caráter de escape (^), que será pré-fixado ao símbolo. Os símbolos reservados possuem um significado especial na linguagem, e incluem &, <, >, ^ e |. O caráter de espace torna o símbolo um caráter qualquer. 

```
@ECHO OFF
SET var=coluna1 ^| coluna2
PAUSE

```

A variável no fragmento guarda o valor coluna1 | coluna2.

### Armazenar Resultados de Operações em Variáveis

A opção /A do comando `SET` nos permite criar variáveis que recebem resultados de um cálculo matemático. A sintaxe mais comum `SET /A "[nome da variável]=[expressão aritmética]"`.

Observação: As aspas somente são obrigatórias se os operadores &, |, ^, << e >> forem usados, mas é recomendado sempre inclui-las.

A expressão aritmética vai conter números/operandos (ou variáveis que guardem números) e algum operador que informa como eles devem ser manipulados, ou seja, qual operação deve ser feita. O calculo pode ser tão curto quanto 2 + 2, ou tão grande quanto 2 *(22/4) ^ 3 +23-300%3. 

```console
@ECHO OFF
SET /A _soma=2+5
PAUSE
```

Podemos ler a declaração acima como “crie uma variável com nome _soma e armazene a soma entre 2 e 5”, ou seja, “_soma” recebe 7.

A soma não é a única operação possível. Todas as quatro operações fundamentais da  matemática são aplicáveis a partir da escolha do sinal apropriado. Além disso há outros tipos de operações que podem ser realizadas além das quatro fundamentais.

## Como Acessar Variáveis de Ambiente

Para ver as variáveis de ambiente do sistema e usuário o Windows disponibiliza uma interface gráfica. Para acessa-la, pesquise por "variáveis" na caixa de pesquisa do Windows, e depois clique em Editar as variáveis de ambiente do sistema.  Clique em Variáveis de ambiente, e uma janela com as variáveis será exibida:

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
O mesmo que TEMP indica onde programas podem armazenar programas temporários. Seu valor sobrepõe o especificado na variável de ambiente do sistema.

Já as do sistema são:

PATH
Contém uma lista de caminhos para pastas onde o interpretador de comandos pode buscar os programas com as instruções para execução de um comando externo. 

Quando digitamos um comando, o CMD primeiro procura pelo programa na pasta em que está aberto, e caso não encontre ele vai procurar nas pastas apontadas nessa variável. Outros programas também podem procurar por programas nessas pastas.

Na interface gráfica, você pode verificar quais as pastas na lista de forma mais organizada clicando no botão Editar com a variável PATH selecionada. 

Essa lista é apensada a especificada na variável de ambiente do usuário PATH.

TEMP
A pasta onde programas podem armazenar programas temporários.  Seu valor é sobreposto pela sua contraparte no 

TMP
O mesmo que TEMP, a pasta onde programas podem armazenar programas temporários.

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

Programas abertos no Windows receberão um bloco de ambiente composto pela combinação dessas variáveis, mas com algumas adições. No CMD, digite `set` e pressione a tecla Enter para exibir as variáveis de ambiente disponíveis. Compare os itens que são mostrados na interface gráfica anterior, e deve perceber que a lista montada por esse comando é maior.

ALLUSERSPROFILE
O mesmo que PROGRAMDATA. A pasta usada para armazenar dados de softwares para todos os usuários. Geralmente é C:\ProgramData.

APPDATA
O caminho um diretório onde desenvolvedores podem armazenar dados e configurações do programa que são especificos para um usuário, e precisam estar disponívels para um perfil roaming (um perfil armazenado em um servidor; o servidor disponíbiliza o perfil para qualquer máquina conectado a rede onde o usuário faça login). Por exemplo, o tamanho da fonte que o usuário configurou no programa. O endereço geralmente é C:\Users<usuário>\AppData\Roaming

PROGRAMFILES
Pasta onde os arquivos de programas 64-bit são instalados. 

PROGRAMFILES(x86)
Pasta onde os arquivos de programas 32-bit são instalados.

PROGRAMW6432

COMMONPROGRAMFILES
Uma pasta para componentes que são compartilhados entre dois ou mais programas 64-bit. Geralmente, o caminho é C:\Program Files\Common.

COMMONPROGRAMFILES(x86)
Uma pasta para componentes que são compartilhados por programas em sistemas 32-bits. Geralmente, a pasta é C:\Program Files (x86)\Common Files.

COMMONPROGRAM6432
O mesmo que COMMONPROGRAMFILES.

COMPUTERNAME
O nome do computador. Identifica a máquina na rede.

HOMEDRIVE
Mostra a letra que identifica o dispositivo onde o sistema operacional está instalado, que por padrão é o C:.

HOMEPATH
Caminho para a pasta com os arquivos do usuário atual.

LOCALAPPDATA
Aponta para a pasta C:\Users<usuário>\AppData\Local, onde <usuário> deve ser substituído pelo nome que identifica o usuário logado. Essa pasta é usada por programas para armazenar dados e configurações  do usuário que não precisam ser disponibilizadas por um perfil roaming ( um perfil armazenado em um servidor; o servidor disponibiliza o perfil para qualquer computador conectado a rede no qual o usuário se conecte).

LOGONSERVER
Mostra o {% include postLink.html text="Controlador de Domínio" url="https://en.wikipedia.org/wiki/Domain_controller" %} que permitiu o acesso do usuário. O Controlador de Domínio é um servidor que controla o acesso dos usuários.

PROGRAMDATA
Geralmente, se um programa armazena seus dados e configurações especificos para um usuário na pasta C:\Users<usuário>\AppData, talvez na pasta C:\Users<úsuário>\documents, ou ainda na pasta onde os arquivos do programa se localizam. Contudo, para dados e configurações do programa que não são especificos para um usuário, o programa armazena na pasta indicada por essa variável, que geralmente é C:\Program Data.

PROMPT
Mostra o código que determina o texto que indica que o programa está pronto para o próximo. Esse texto é chamado de prompt. Por padrão o valor é $P$G, que coloca o caminho para a pasta atual como o prompt.

PUBLIC
A pasta pública do sistema. Qualquer arquivo nessa pasta ou em uma de suas subpastas estão disponíveis para qualquer usuário que logar na máquina.

SESSIONNAME

SYSTEMDRIVE
O mesmo que HOMEDRIVE, mostra a letra que identifica o dispositivo ou partição onde o Windows está instalado.

SYSTEMROOT
O diretório principal do Windows, que geralmente é  C:\Windows.

USERDOMAIN
O nome de domínio do usuário logado.

USERDOMAIN_ROAMINGPROFILE

USERNAME
O nome de usuário do usuário logado.

USERPROFILE

A pasta do perfil do usuário atual. Nessa pasta, você pode encontrar pastas como Downloads, Documentos, Área de Trabalho, e outras pasta com dados relacionados ao usuário atual.

Infelizmente eu não consegui determinar o propósito das variáveis FPS_BROWSER_APP_PROFILE_STRING, FPS_BROWSER_USER_PROFILE_STRING.

Algumas variáveis dinâmicas são deixadas de fora de ambas as listas. Variáveis dinâmicas tem seu valor gerado automaticamente pelo sistema quando são invocadas. Por essa característica, essas variáveis são inerentemente somente para leitura, isto é, elas não podem ter seu valor modificado. Nesse grupo nós podemos incluir as seguintes variáveis:

RANDOM
Gera um número aleatório entre 0 e 32.767

TIME
Retorna a hora atual do sistema.

DATE
Retorna a data atual do sistema.

CD
Guarda o endereço da pasta em que o processador de comandos está aberto.

Outra maneira de visualizar a lista de variáveis do ambiente é o programa {% include postLink.html text="Process Explorer" url="https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer" %}. Baixe o arquivo .zip e extraia o seu conteúdo para uma pasta de sua preferencia. Os arquivos extraidos incluem:

EULA:  O acordo de licença.

procexp.chm: É um manual para te ajudar com instruções para a utilização do programa.

procexp.exe: Uma versão de 32-bits do programa com uma interface gráfica. Pode ser executada no Windows de 32 bits em uma máquina com processador x86, x86-64 (x64) ou ARM.

procexp64: Uma versão de 64-bits do programa com uma interface gráfica.  Pode ser executada no Windows de 64 bits em uma máquina com processador x64 ou ARM64.

procexp64a: Uma versão de 64-bits do programa com uma interface gráfica. Pode ser executada no Windows de 64 bits em uma máquina com processador ARM64.

A melhor correspondência para um computador pode ser determinada verificando a versão do Windows (32 ou 64 bits) e a arquitetura da CPU (x86, x64 ou ARM). Essas informações podem ser encontradas em Configurações > Sistemas > Sobre. Procure a entrada Tipo de sistema. Lá podemos encontrar o sistema operacional e a versão do processador. Com essas informações, agora podemos identificar a versão do arquivo que melhor se adéqua à nossa máquina.

Abra o aplicativo que melhor se adequa as configurações do seu computador. Na janela que se abrir você encontra uma tabela com informações sobre os programas em execução no momento. Clique sobre uma das entradas na tabela com o botão direito do mouse e selecione Properties. Seleciona  a aba Environment e você deve receber uma lista com cada variável de ambiente do bloco de ambiente do processo.

Para retornar o valor de uma variável individual, nós envolvemos seu nome, por ambos os lados, com o símbolo de porcentagem "%", assim:

```
@ECHO OFF
SET nome=Fernando

:: Exibe o conteúdo da variável nome.
ECHO %nome%
PAUSE
```

No fragmento nós definimos uma variável chamada nome usando `set nome=Fernando` e logo em seguida exibimos o valor da variável usando a instrução `ECHO %nome%`. 

Resultado

```
Fernando
Pressione qualquer tecla para continuar. . .
```

As variáveis são case-insensitive, o que significa que não a diferença entre o nome da variável em maíúsculo e minúsculo.

```
@ECHO OFF
SET nome=Fernando

:: Exibe o conteúdo da variável nome.
ECHO %NOME%
PAUSE
```

Esse fragmento tem exatamente a mesma função que o anterior, e funciona da mesma forma. Perceba que o nome da variável entre % está todo em maiúsculo, mas isso não faz diferença para o resultado final.

Resultado:

```
Fernando
Pressione qualquer tecla para continuar. . .
```

As variáveis podem ser usadas em qualquer lugar do programa escrito em Batch.  Pode inclusive ser usada como um alvo dinâmico para o comando `GOTO`, O comando `GOTO` é usado para modificar o fluxo de execução, fazendo o computador pular para uma parte especifica do arquivo, marcado por um rótulo na forma (:\[rótulo]), e continuar a execução a partir de lá.

```
@ECHO OFF
SET alvo=segundaparte

:: Pula para a parte do arquivo marcada com dado armazenado em alvo
GOTO %alvo%
ECHO Esse texto não será exibido.

:primeiraparte
ECHO Esse trecho será ignorado.

:segundaparte
ECHO O programa continua a partir dessa linha.

PAUSE
```

No fragmento acima nós declaramos uma variável e instruímos o computador a continuar a execução do programa a partir do rótulo cujo nome é idêntico ao valor dessa variável.  

Resultado:

```console
O programa continua a partir dessalinha.
Pressione qualquer tecla para continuar. . .
```

As variáveis podem até ser usadas como um comando.

```
@ECHO OFF
SET comando=dir /b

:: %comando% é substituido por dir /b
:: Como dir /b corresponde a um comando, ele é executado.
%comando%
PAUSE
```

Uma variável tem como seu valor o comando `dir /b`, Quando a linha com %comando% é lida, o valor da variável comando é recuperado, e então o comando é executado. O comando `dir` com o parâmetro `/b` exibe o nome dos arquivos da pasta atual.

Outra forma de exibir o valor de uma variável é usando `set [nome da variável]` (sem = e sem %) vai exibir o nome e o valor da variável indicada. Na verdade, ele mostra todas as variáveis que comecem com o nome indicado.



Usually, when a program calls another program, it first creates a child process by forking, then the child adjusts the environment as needed and lastly the child replaces itself with the program to be called. This procedure gives the calling program control over the environment of the called program.