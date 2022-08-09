---
title: Batch - Variáveis de Ambiente
layout: article
permalink: /batch/:title
description: Entenda o que são variáveis de ambiente, sua diferença das
  variáveis em outras linguagens de programação, e como podem ser criadas e
  acessadas em Batch.
categories:
  - Batch
tags:
  - variáveis.
date: 2022-07-14T22:33:07.120Z
lastUpdated: 2022-08-09T21:25:12.470Z
author: Fernando Bonfim
excerpt_separator: <!--more-->
sources:
  - url: https://en.wikipedia.org/wiki/Environment_variable#Design
    title: Environment variable - Wikipedia
  - url: https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.2
    title: About Environment Variables - Microsoft
  - title: "How-to: Windows Environment Variables - SS64"
    url: https://ss64.com/nt/syntax-variables.html
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
secondary-sources:
  - title: DOS the Easy Way
    url: https://www.google.com.br/books/edition/DOS_the_Easy_Way/vrsSflB2o5sC?hl=en&gbpv=1&dq=DOS&pg=PA125&printsec=frontcover
  - title: About_PSModulePath - Microsoft
    url: https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_psmodulepath?view=powershell-7.2
  - title: environment - PC Mag
    url: https://www.pcmag.com/encyclopedia/term/environment
  - title: Environment - Merriam Webster
    url: https://www.merriam-webster.com/dictionary/environment
  - title: The DOS Environment - Hermit's Free Library
    url: https://hermit.cc/it/dos/envar.htm#:~:text=Definition,environmental%20variables%2C%20or%20environmental%20strings.
  - url: https://superuser.com/questions/909310/why-does-the-set-command-display-more-environment-variables-than-the-environment
    title: Why does the set command display more environment variables than the
      environment variables gui? - Microsoft
order: 3
---
Para entender o que são variáveis de ambiente nós podemos começar pelos termos que compõem esse termo composto. Então vamos explicar de forma resumida o que cada um significa.

## O que significa "variável" e "ambiente"?

Ambiente é o que está em torno de algo. Por exemplo, o ambiente em que você está é constituído por todos os objetos que estão ao seu redor, as condições do clima,  etc. Em um computador o ambiente pode ser considerado o sistema operacional, os programas que estão instalados, e as configurações, que juntos compõem o cenário onde os programas são executados.

As variáveis são espaços nomeados na memória que podem receber um dado. Elas geralmente são apresentadas na forma \[nome da variável]=\[valor], onde \[nome da variável] é o nome que identifica um espaço na memória, e \[valor] é o dado que é armazenado no espaço indicado. O sinal de igual faz a ligação entre o valor e a variável. Desse modo, as variáveis de ambiente são espaços nomeados na memória do computador que armazenam dados e informações sobre o sistema operacional, os programas instalados na máquina, o hardware, etc.

Variáveis de ambiente estão incluídas em conjunto chamado **bloco de ambiente**. Uma cópia do bloco de ambiente de um processo pai é recebido por todo processo filho. Um processo é um programa em execução. Ele é pai quando inicia outro processo, ou seja, quando um programa é invocado através dele. Ao abrir um programa X no Windows, ele recebe o bloco de ambiente deste sistema. Nesse cenário, X é o processo filho, e o Windows é o processo pai. Os programas iniciados pelo processador de comando herdam o bloco de ambiente do processador de comando.

É importante notar que o bloco herdado pode receber novas variáveis que são criadas automaticamente pelo sistema. De modo que o bloco de ambiente de um processo filho pode não ser exatamente igual a de um processo pai.

As variáveis contidas no bloco inicial podem ser divididas entre variáveis de ambiente do sistema e variáveis de ambiente do usuário.

## Variáveis de Ambiente do Sistema

Nesse grupo estão as variáveis que podem ser acessadas por programas iniciados por qualquer usuário que fizer login no computador. O que quer dizer que qualquer alteração **persistente** no valor das variáveis do sistema afeta **todos usuários de um computador**, independente de terem login e senha diferentes. 

Estamos considerando alterações persistentes como aquelas que não estão restritas à um processo especifico, de modo que continuam mesmo depois do processo que fez tais alterações ser finalizado. O comando `SETX` da linguagem Batch pode ser usado para persistir uma alteração. Qualquer manipulação de variáveis feitas com esse comando é mantida mesmo depois do processador de comandos fechar.

As variáveis do sistema podem ser encontradas no registro do Windows. Digite "editor do registro" na caixa de pesquisa do Windows e clique em Editor do Registro. Com o programa aberto, use o painel de navegação a esquerda para navegar para HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment. Lá você deve encontrar todas as variáveis de ambiente do sistema.

Observação: não é recomendado fazer qualquer alteração no registro do Windows, a menos que saiba exatamente o que está fazendo. Um passo em falso, e não terá outra escolha a não ser formatar o computador.

## Variáveis de Ambiente do Usuário

Esse grupo engloba as variáveis que são especificas para o usuário conectado e, portanto, só podem ser acessadas pelos programas cuja execução foi iniciada por ele. Em um computador que é usado por mais de uma pessoa, e cada usuário tem seu próprio nome de usuário e senha, eles terão individualmente um conjunto de variáveis do usuário, de forma que a alteração realizada em uma dessas variáveis para um usuário não afeta o outro. 

As variáveis do usuário podem ser encontradas no registro do Windows. Digite "editor do registro" na caixa de pesquisa do Windows e clique em Editor do Registro. Com o programa aberto, use o painel de navegação a esquerda para navegar para HKEY_CURRENT_USER\Environment. 

É possível que existam variáveis com mesmo nome em ambos os grupos. Nessa situação, a variável do usuário prevalece. Uma exceção é a variável path, que será combinada com qualquer outra variável path definida.

## Variáveis de Ambiente e Alterações Temporárias

Uma vez que um programa em execução recebe uma **cópia do bloco de ambiente** ele pode usar ou modificar as variáveis e também adicionar novas variáveis nesse bloco.  As alterações realizadas no bloco herdado por um processo dura até que ele seja terminado, clicando no x para fechar a janela do CMD, por exemplo. Variáveis criadas são destruídas, os valores modificados nunca serão visíveis por outro processo. Isso vale inclusive para processos de um mesmo programa. Por exemplo, se abrirmos duas janelas do CMD, e em uma delas nós mudamos sua cópia da variável path, nada acontece com a cópia da variável path da outra instância.

Esse tipo de variável de ambiente pode ser muito útil para guardar dados temporários que servem para um script em particular, mas não precisam ficar disponíveis para outros processos, ou para outro momento. 

Apesar do propósito ser guardar informações do ambiente, as modificações são livres. Qualquer dado (que possa ser representado com até 32.767 caráteres) pode ser colocado em uma variável de ambiente.  Os dados não têm que representar um fato importante sobre o ambiente de fato.

## Usando o Comando SET

A linguagem Batch possuí o comando `SET` para criar, acessar, modificar e deletar variáveis para a sessão atual, ou seja, para alterar a cópia do bloco de ambiente recebida pelo CMD. Desse modo, deletar ou modificar uma variável de ambiente com o comando `SET` não é uma ação permanente. Se você abrir o CMD, usar o comando `SET` para excluir a variável de ambiente path, essa variável ainda estará disponível para outros processos iniciados posteriormente; em outra janela do CMD ainda podemos acessar a variável path.

Para testar isso, abra o CMD e digite `SET`. Você deverá ver uma lista da maior parte das variáveis de ambiente que fazem parte do bloco de ambiente recebido pelo processo que acabou de iniciar. Procure por uma variável chamada path. Agora, nós vamos deletar essa variável com o comando `SET path =`. Digite `SET` novamente para ver que a variável path já não existe mais no bloco de ambiente do processo. Por fim, abra outra janela do CMD (sem fechar a que já tinha aberto) e digite `SET`. Você ainda deve perceber que a variável ainda está lá. Isso acontece por que a modificação que foi realizada, ficou restringida ao outro processo.

Para guardar qualquer texto (String ou conjunto de caráteres) usamos a forma `SET [nome da variável]=[valor/dado]`, Com essa estrutura, nós podemos criar variáveis capazes de armazenar qualquer conjunto com um ou mais caracteres. Sendo assim, podemos armazenar nomes, endereços, algarismos, frases completas, etc.

```batchfile
@ECHO OFF

:: Declara uma variável nomeada _val.
SET _val=Um valor Qualquer

PAUSE
```

O valor de uma variável pode ser copiado para outra. Nesse caso, ao invés de especificar o valor do lado direito do sinal de atribuição, nós indicamos a variável da qual o valor deve ser copiado. Deve-se incluir o símbolo de porcentagem antes de depois do identificador da variável.

```batchfile
@ECHO OFF
SET _val=Um valor Qualquer

:: _val2 recebe o valor de _val.
SET _val2=%_val%

:: Exibe o valor de _val2 na tela.
ECHO %_val2%
PAUSE
```

Múltiplas variáveis podem ser atribuídas a uma variável. Nesse caso, elas serão combinadas em uma única string.

```batchfile
@ECHO OFF
SET _val=Uma
SET _val2=Frase
SET _val3=Qualquer

:: Junta todas as strings acima em uma só
SET _frase=%_val% %_val2% %_val3%

:: Exibe o valor de _frase na tela.
ECHO %_frase%
PAUSE
```

Cada variável de ambiente possuí um **limite de 32.767 caracteres**, incluindo o nome, o sinal de igual e o valor da variável, mas na prática esse limite é restringido pelo meio utilizado para criar a variável que, neste caso, é o CMD.  Nós podemos digitar até 1.890 caracteres no CMD, e toda a declaração `SET [nome da variável]=[texto]` deve estar dentro desse limite. Tirando o comando `SET` e o espaço que vem logo após ele, que juntos ocupam 4 caracteres, ficamos com 1.886 caracteres de espaço disponíveis para o **nome, sinal de igual e valor da variável**. 

A troca no valor da variável também pode ser feita com o comando `SET`. Use a mesma estrutura  `SET [nome da variável]=[novo valor]` , mas dessa vez o nome da variável deve ser o nome da variável a ser modificada.

Para deletar uma variável nós apenas digitamos SET \[nome da variável]=, onde \[nome da variável] identifica a variável que deve ser excluída. O comando `SET path=` exclui a variável Path.

Ao atribuir valor que incluí símbolos reservados da linguagem Batch a uma variável de ambiente, é necessário usar o caráter de escape (^), que será pré-fixado ao símbolo. Os símbolos reservados possuem um significado especial na linguagem, e incluem `&`, `<`, `>`, `^` e `|`. O caráter de espace torna o símbolo um caráter qualquer. 

```batchfile
@ECHO OFF
SET var=coluna1 ^| coluna2
PAUSE
```

A variável no fragmento guarda o valor coluna1 | coluna2.

### Armazenar Resultados de Operações em Variáveis

A opção /A do comando `SET` nos permite criar variáveis que recebem resultados de um cálculo matemático. A sintaxe mais comum `SET /A "[nome da variável]=[expressão aritmética]"`.

Observação: As aspas somente são obrigatórias se os operadores `&`, `|`, `^`, `<<` e `>>` forem usados, mas é recomendado sempre inclui-las.

A expressão aritmética vai conter números/operandos (ou variáveis que guardem números) e algum operador que informa como eles devem ser manipulados, ou seja, qual operação deve ser feita. O calculo pode ser tão curto quanto 2 + 2, ou tão grande quanto 2 *(22/4) ^ 3 +23-300%3. 

```batchfile
@ECHO OFF
SET /A _soma=2+5
PAUSE
```

Podemos ler a declaração acima como “crie uma variável com nome _soma e armazene a soma entre 2 e 5”, ou seja, “_soma” recebe 7.

A soma não é a única operação possível. Todas as quatro operações fundamentais da  matemática são aplicáveis a partir da escolha do sinal apropriado. Além disso há outros tipos de operações que podem ser realizadas além das quatro fundamentais.

## Usando o Comando SETX

O comando `SETX` permite criar ou modificar variáveis de ambiente do sistema ou usuário. Sua modificação **não** é feita no bloco de ambiente herdado pelo processo, mas no bloco inicial do sistema operacional. Desse modo, a mudança persiste mesmo depois de fechar o CMD, e elas estarão visíveis para outros processos que forem iniciados a partir de então. 

Os processos em execução no momento da modificação não ficam sabendo das alterações que foram feitas. Para que um programa que esteja usando fique ciente do novo valor de uma variável, você terá que fechar e abrir o programa. Isso por que o bloco de ambiente é herdado quando o programa é aberto, e não recebe atualizações dali em diante.

Para definir uma variável de usuário usamos `SETX [nome da variável] [valor]`, e para variáveis do sistema o comando é `SETX /m [nome da variável] [valor]`. Não é necessário usar o `=`. Os símbolos especiais (`&`, `<`, `>`, `^` e `|`) ainda precisam ser precedidos por `^`.

Como as alterações com esse comando não estão restritas ao processo em que ele foi usado, é melhor não modificar nenhuma variável com ele se não tiver 100% de certeza de que pode fazer isso. Nem pense em alterar a variável path, por exemplo.

O valor geralmente é um texto, como em

```batchfile
@ECHO OFF
:: Cria uma variável do usuário chamada nome e guarda o valor Fernando nela.
SETX nome Fernando
PAUSE
```

Feche o CMD, abra novamente e digite `SET nome` ou `ECHO %nome%` para ver a variável &#8212; somente processos iniciados depois da alteração recebem uma cópia da nova variável.

O valor também pode ser um que esteja contido em um {% include postLink.html text="registro" url="https://bit.ly/3dfOPmk" %}. O registro é o local de armazenamento central para todos os detalhes de configuração do computador que permite que o Windows funcione adequadamente. Nós podemos puxar o valor de uma configuração especifica, como o nome do computador, e armazenar em uma variável de ambiente.

Para acessar o editor de registro no Windows, digite "editor de registros" na caixa de pesquisa do Windows. Uma lista de{% include postLink.html text="hives" url="https://bit.ly/3bCGg4n"  %}(grupos de chaves, subchaves e valores)  pode ser observada no painel de navegação a esquerda. No entanto, apenas as configurações nos {% include postLink.html text="hives" url="https://bit.ly/3bCGg4n"  %} HKEY_CURRENT_USER e HKEY_LOCAL_MACHINE são aceitos. 

Os tipos de {% include postLink.html text="dados válidos" url="https://bit.ly/3bD1ejF"%} são REG_DWORD, REG_EXPAND_SZ, REG_SZ, e REG_MULTI_SZ. Ao ler valores REG_MULTI_SZ de um registro, apenas o primeiro item será usado. Valores do tipo REG_DWORD são usados em modo hexadecimal. O tipo pode ser observado na coluna Tipo no editor de registro.

No trecho abaixo nós armazenamos o nome do computador na variável meucomputador.

```batchfile
@ECHO OFF
SETX meucomputador /k HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ComputerName\ComputerName\ComputerName
PAUSE
```

## Como Acessar Variáveis de Ambiente

Para ver as variáveis de ambiente do sistema e usuário o Windows disponibiliza uma interface gráfica. Para acessa-la, pesquise por "variáveis" na caixa de pesquisa do Windows, e depois clique em Editar as variáveis de ambiente do sistema.  Clique em Variáveis de ambiente, e uma janela com as variáveis será exibida:

{% include post_img.html 

png="/assets/imgs_posts/batch/env-variable/batch-3-env-variables-gui.png"

webp="/assets/imgs_posts/batch/env-variable/batch-3-env-variables-gui.webp"

alt="Uma interface gráfica mostrando as variáveis de ambiente do usuário e do sistema."

align="center"

%}

Na parte de cima da janela tem uma seção com as variáveis especificas do usuário atual e na parte de baixo estão as variáveis do sistema (pelo menos até o Windows 10). 

No meu caso, as variáveis de usuários existentes são:

ONEDRIVE: Caminho para a pasta sincronizada com o OneDrive. Só aparece para quem tem o OneDrive instalado no computador.

PATH: Contém uma lista de caminhos para pastas onde o interpretador de comandos pode buscar os programas com as instruções para execução de um comando externo. 

Quando digitamos um comando, o CMD primeiro procura pelo programa na pasta em que está aberto, e caso não encontre ele vai procurar nas pastas apontadas nessa variável. Outros programas também podem procurar por programas nessas pastas.

Na interface gráfica, você pode verificar quais as pastas na lista de forma mais organizada clicando no botão Editar com a variável PATH selecionada. 

Essa lista é apensada a especificada na variável de ambiente do sistema PATH.

TEMP: Indica onde programas podem armazenar programas temporários.  Seu valor sobrepõe o especificado na variável de ambiente do sistema.

TMP: O mesmo que TEMP indica onde programas podem armazenar programas temporários. Seu valor sobrepõe o especificado na variável de ambiente do sistema.

Já as do sistema são:

PATH: Contém uma lista de caminhos para pastas onde o interpretador de comandos pode buscar os programas com as instruções para execução de um comando externo. 

Quando digitamos um comando, o CMD primeiro procura pelo programa na pasta em que está aberto, e caso não encontre ele vai procurar nas pastas apontadas nessa variável. Outros programas também podem procurar por programas nessas pastas.

Na interface gráfica, você pode verificar quais as pastas na lista de forma mais organizada clicando no botão Editar com a variável PATH selecionada. 

Essa lista é apensada a especificada na variável de ambiente do usuário PATH.

TEMP: A pasta onde programas podem armazenar programas temporários.  Seu valor é sobreposto pela sua contraparte no 

TMP: O mesmo que TEMP, a pasta onde programas podem armazenar programas temporários.

COMSPAC: Aponta pra o interpretador de comandos atual, o que geralmente é o CMD.

DRIVERDATA: Um local para armazenar arquivos temporários relacionados a um dispositivo que devem ser compartilhados com outros componentes.

OS: Informa qual o sistema base do sistema operacional instalado na máquina. No caso do Windows 10, o valor mostra Windows NT.

PATHEXT: Contém um conjunto de extensões separadas por ponto e vírgula. Quando digitamos um comando externo o CMD procura pelo arquivo com o mesmo nome do comando em questão, e que tenha uma das extensões listadas aqui.  Por padrão, essa variável contém o valor  .COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC. 

Significa que se você tentar executar qualquer comando externo ou abrir qualquer programa sem especificar a extensão a extensão do arquivo, então cada um dos valores de PATHEXT será anexado, um de cada vez, até que o nome completo do programa (incluindo a extensão) seja encontrada. Por exemplo, para executar o comando MeuComando.exe, basta digitar MeuComando e CMD vai tentar encontrar MeuComando.com, MeuComando.exe, MeuComando.bat, etc., em todas as pastas especificadas na variável PATH.

PROCESSOR_ARCHITECTURE: Informa a arquitetura do processador da máquina. O valor é geralmente x86 (para processadores de 32-bits) ou AMD64 (para processadores 64-bits).

PSMODULEPATH: Contém uma lista de pastas onde encontrar módulos e recursos para o PowerShell.

USERNAME: Nome do usuário conectado na máquina.

WINDIR: Caminho para o diretório que contém os arquivos do Windows.

NUMBER_OF_PROCESSORS: Quantidade de processadores na máquina. Cada núcleo é contado como um processador.

PROCESSOR_LEVEL: Informa o número do modelo do processador 

PROCESSOR_IDENTIFIER: O identificador do processador da computador.

PROCESSOR_REVISION: Versão do processador da máquina.

Sua interface de usuário pode mostrar mais variáveis do que a minha. Isso depende dos programas instalados na sua máquina, de alterações que tenha feito anteriormente, e da versão do Windows. 

Programas abertos no Windows receberão um bloco de ambiente composto pela combinação dessas variáveis, mas com algumas adições. No CMD, digite `set` e pressione a tecla Enter para exibir as variáveis de ambiente disponíveis. Compare os itens que são mostrados na interface gráfica anterior, e deve perceber que a lista montada por esse comando é maior.

ALLUSERSPROFILE: O mesmo que PROGRAMDATA. A pasta usada para armazenar dados de softwares para todos os usuários. Geralmente é C:\ProgramData.

APPDATA: O caminho um diretório onde desenvolvedores podem armazenar dados e configurações do programa que são específicos para um usuário, e precisam estar disponível para um perfil roaming (um perfil armazenado em um servidor; o servidor disponibiliza o perfil para qualquer máquina conectado a rede onde o usuário faça login). Por exemplo, o tamanho da fonte que o usuário configurou no programa. O endereço geralmente é C:\Users&lt;usuário&gt;\AppData\Roaming.

PROGRAMFILES: Pasta onde os arquivos de programas 64-bit são instalados. 

PROGRAMFILES(x86): Pasta onde os arquivos de programas 32-bit são instalados.

COMMONPROGRAMFILES: Uma pasta para componentes que são compartilhados entre dois ou mais programas 64-bit. Geralmente, o caminho é C:\Program Files\Common.

COMMONPROGRAMFILES(x86): Uma pasta para componentes que são compartilhados por programas em sistemas 32-bits. Geralmente, a pasta é C:\Program Files (x86)\Common Files.

COMPUTERNAME: O nome do computador. Identifica a máquina na rede.

HOMEDRIVE: Mostra a letra que identifica o dispositivo onde o sistema operacional está instalado, que por padrão é o C:.

HOMEPATH: Caminho para a pasta com os arquivos do usuário atual.

LOCALAPPDATA: Aponta para a pasta C:\Users&lt;usuário&gt;\AppData\Local, onde &lt;usuário&gt; deve ser substituído pelo nome que identifica o usuário logado. Essa pasta é usada por programas para armazenar dados e configurações  do usuário que não precisam ser disponibilizadas por um perfil roaming ( um perfil armazenado em um servidor; o servidor disponibiliza o perfil para qualquer computador conectado a rede no qual o usuário se conecte).

LOGONSERVER: Mostra o {% include postLink.html text="Controlador de Domínio" url="https://en.wikipedia.org/wiki/Domain_controller" %} que permitiu o acesso do usuário. O Controlador de Domínio é um servidor que controla o acesso dos usuários.

PROGRAMDATA: Geralmente, se um programa armazena seus dados e configurações específicos para um usuário na pasta C:\Users&lt;usuário&gt;\AppData, talvez na pasta C:\Users&lt;úsuário&gt;\documents, ou ainda na pasta onde os arquivos do programa se localizam. Contudo, para dados e configurações do programa que não são específicos para um usuário, o programa armazena na pasta indicada por essa variável, que geralmente é C:\Program Data.

PROMPT: Mostra o código que determina o texto que indica que o programa está pronto para o próximo. Esse texto é chamado de prompt. Por padrão o valor é $P$G, que coloca o caminho para a pasta atual como o prompt.

PUBLIC: A pasta pública do sistema. Qualquer arquivo nessa pasta ou em uma de suas subpastas estão disponíveis para qualquer usuário que logar na máquina.

SYSTEMDRIVE: O mesmo que HOMEDRIVE, mostra a letra que identifica o dispositivo ou partição onde o Windows está instalado.

SYSTEMROOT: O diretório principal do Windows, que geralmente é  C:\Windows.

USERDOMAIN: O nome do domínio do Wndows no qual o usuário está logado. O domínio Windows é um tipo de rede de computadores na qual as contas de usuários, os computadores, impressoras estão registrados em um banco de dados localizado em um ou mais servidores.

USERDOMAIN_ROAMINGPROFILE: O nome do domínio do Windows associado ao perfil roaming atual (um perfil armazenado em um servidor; o servidor disponibiliza o perfil para qualquer computador conectado a rede no qual o usuário se conecte.).

USERNAME: O nome de usuário do usuário logado.

USERPROFILE: O caminho para a pasta com arquivos do usuário logado.

A pasta do perfil do usuário atual. Nessa pasta, você pode encontrar pastas como Downloads, Documentos, Área de Trabalho, e outras pasta com dados relacionados ao usuário atual.

Infelizmente eu não consegui determinar o propósito das variáveis FPS_BROWSER_APP_PROFILE_STRING, FPS_BROWSER_USER_PROFILE_STRING, PROGRAMW6432 e COMMONPROGRAMW6432. 

Algumas variáveis dinâmicas são deixadas de fora de ambas as listas. Variáveis dinâmicas tem seu valor gerado automaticamente pelo sistema quando são invocadas. Por essa característica, essas variáveis são inerentemente somente para leitura, isto é, elas não podem ter seu valor modificado. Nesse grupo nós podemos incluir as seguintes variáveis:

RANDOM: Gera um número aleatório entre 0 e 32.767

TIME: Retorna a hora atual do sistema.

DATE: Retorna a data atual do sistema.

CD: Guarda o endereço da pasta em que o processador de comandos está aberto.

Outra maneira de visualizar a lista de variáveis do ambiente é o programa {% include postLink.html text="Process Explorer" url="https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer" %}. Baixe o arquivo .zip e extraia o seu conteúdo para uma pasta de sua preferencia. Os arquivos extraidos incluem:

EULA:  O acordo de licença.

procexp.chm: É um manual para te ajudar com instruções para a utilização do programa.

procexp.exe: Uma versão de 32-bits do programa com uma interface gráfica. Pode ser executada no Windows de 32 bits em uma máquina com processador x86, x86-64 (x64) ou ARM.

procexp64: Uma versão de 64-bits do programa com uma interface gráfica.  Pode ser executada no Windows de 64 bits em uma máquina com processador x64 ou ARM64.

procexp64a: Uma versão de 64-bits do programa com uma interface gráfica. Pode ser executada no Windows de 64 bits em uma máquina com processador ARM64.

A melhor correspondência para um computador pode ser determinada verificando a versão do Windows (32 ou 64 bits) e a arquitetura da CPU (x86, x64 ou ARM). Essas informações podem ser encontradas em Configurações > Sistemas > Sobre. Procure a entrada Tipo de sistema. Lá podemos encontrar o sistema operacional e a versão do processador. Com essas informações, agora podemos identificar a versão do arquivo que melhor se adéqua à nossa máquina.

Abra o aplicativo que melhor se adequa as configurações do seu computador. Na janela que se abrir você encontra uma tabela com informações sobre os programas em execução no momento. Clique sobre uma das entradas na tabela com o botão direito do mouse e selecione Properties. Na aba Environment você deve encontrar uma lista com cada variável de ambiente do bloco de ambiente do processo.

Para retornar o valor de uma variável individual, nós envolvemos seu nome, por ambos os lados, com o símbolo de porcentagem "%", assim:

```batchfile
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

```batchfile
@ECHO OFF
SET nome=Fernando

:: Exibe o conteúdo da variável nome.
ECHO %NOME%
PAUSE
```

Esse fragmento tem exatamente a mesma função que o anterior, e funciona da mesma forma. Perceba que o nome da variável entre % está todo em maiúsculo, mas isso não faz diferença para o resultado final.

Resultado:

```console
Fernando
Pressione qualquer tecla para continuar. . .
```

As variáveis podem ser usadas em qualquer lugar do programa escrito em Batch.  Pode inclusive ser usada como um alvo dinâmico para o comando `GOTO`, O comando `GOTO` é usado para modificar o fluxo de execução, fazendo o computador pular para uma parte especifica do arquivo, marcado por um rótulo na forma (:\[rótulo]), e continuar a execução a partir de lá.

```batchfile
@ECHO OFF
SET alvo=segundaparte

:: Pula para a parte do arquivo marcada com dado armazenado em alvo
GOTO %alvo%
ECHO Esse texto nao sera exibido.

:primeiraparte
ECHO Esse trecho sera ignorado.

:segundaparte
ECHO O programa continua a partir dessa linha.

PAUSE
```

No fragmento acima nós declaramos uma variável e instruímos o computador a continuar a execução do programa a partir do rótulo cujo nome é idêntico ao valor dessa variável.  

Resultado:

```console
O programa continua a partir dessa linha.
Pressione qualquer tecla para continuar. . .
```

As variáveis podem até ser usadas como um comando.

```batchfile
@ECHO OFF
SET comando=dir /b

:: %comando% é substituido por dir /b
:: Como dir /b corresponde a um comando, esse comando é executado quando a variável
:: é acessada.
%comando%
PAUSE
```

Uma variável tem como seu valor o comando `DIR /b`, Quando a linha com %comando% é lida, o valor da variável comando é recuperado, e então o comando é executado. O comando `DIR` com o parâmetro `/b` exibe o nome dos arquivos da pasta atual.

Outra forma de exibir o valor de uma variável é usando `set [nome da variável]` (sem = e sem %) vai exibir o nome e o valor da variável indicada. Na verdade, ele mostra todas as variáveis que começam com o nome indicado. `SET pr` deve mostrar algo como:

```batchfile
C:\Users\fefe>set pr
PROCESSOR_ARCHITECTURE=AMD64
PROCESSOR_IDENTIFIER=Intel64 Family 6 Model 55 Stepping 8, GenuineIntel
PROCESSOR_LEVEL=6
PROCESSOR_REVISION=3708
ProgramData=C:\ProgramData
ProgramFiles=C:\Program Files
ProgramFiles(x86)=C:\Program Files (x86)
ProgramW6432=C:\Program Files
PROMPT=$P$G
```

## Regras de Nomeação de Variáveis

O **nome** e o **valor**, no geral, respeitam algumas regras e normas consideradas boas práticas, sendo elas:

1 - Usar nomes simples e que identifiquem facilmente que tipo de informação será salva. Pode ser necessário referenciar a variável varias vezes durante o script, ou outro programador precisará ler seu código, então utilizar nomes muito grandes ou que não refletem com exatidão que tipo de informação foi armazenada nela pode levar a alguns enganos. Contudo, isto é opcional, ficando à seu critério usar ou não nomes simples e descritivos.

Por Exemplo, ao invés de `SET _caminho_para_a_pasta_de_imagens="c:\users\fefe\images"` faça `SET _imagens="c:\users\fefe\images"`.

2 - Use espaço somente para separar o comando `SET` do resto dos parâmetros, e para separar palavras de alguma frase. Espaços adicionados fora dessas situações não serão ignorados, podendo levar à comportamentos inesperados. Então, escreva `SET name=Davy` e não `SET name = Davy`. Vá para seção<a href=”#acessando-variáveis”> Acessando Variáveis </a>e veja como espaços extras afetam a forma como invocamos uma variável e também a apresentação do resultado.

3 - O primeiro elemento do nome não pode ser numérico. Ao invés disso, o comum é colocar o sinal de “underline” (_) ou o cifrão ($) no começo do nome. Isso evita possíveis confusões com nomes de variáveis pré-definidas do sistema. Por exemplo, `SET $path=c:\users\kleber\videos`.

4 - Você pode incluir qualquer um dos seguintes símbolos no nome de uma variável: A-Z, a-z, 0-9, cerquilha (#), cifrão ($), apóstrofo ('), parênteses (()), asterisco (*), soma (+), hifen (-), ponto (.), interrogação (?), arroba(@), colchetes(\[ ]), underline (_), sinal da crase (`), chaves ({ }), til (~). Como `SET tipo-de-arquivo=JPG`, por exemplo.

5 - Os símbolos `<`, `>`, `|`, `&`, `^` são caráteres especiais do CMD e só podem ser usados em nomes ou valores de variáveis se precedidos pelo sinal de escape `^`, ou caso toda a expressão esteja entre aspas. As declarações `SET _nome^|apelido=Silva` e `SET "_name|lastName=Tony Stark"` são igualmente válidas.

6 - Não use o sinal de igual no valor ou nome da variável.

O interpretador (cmd.exe) tem um limite de 8.190 caracteres que podem ser digitados, contando com o nome da variável, o sinal de igual e o valor guardado. Na verdade, a maioria dos sites apontam que o limite é de 8.191 caracteres, mas eu tentei chegar à esse valor e o CMD não permitiu, me deixando apenas com 8.186 de espaço.

- - -

Discutimos o que são variáveis de ambiente, partindo dos termos individuais deste termo composto. Concluímos que variáveis de ambiente são espaços nomeados na memória que guardam dados sobre o hardware, sistema operacional, e outros programas.  Aprendemos que essas variáveis fazem parte de um bloco de ambiente, e que cada processo recebe seu próprio bloco de ambiente quando é iniciado. Nós criamos variáveis usando os comandos `SET`, para mudanças no bloco de e `SETX` para mudanças persistentes nas variáveis de ambiente.  Finalizamos mostrando como podemos ver as variáveis de ambiente e seus valores.