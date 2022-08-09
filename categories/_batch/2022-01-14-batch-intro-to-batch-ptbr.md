---
title: Batch - Introdução
layout: article
permalink: /batch/:title
description: Já pensou em aprender Batch? Se sim, sinta-se a vontade para
  conferir essa introdução a essa linguagem tão pouco conhecida.
categories:
  - Batch
tags:
  - batch
  - windows
  - programação
  - arquivo em lotes
date: 2022-01-14T03:00:00.000Z
lastUpdated: 2022-08-07T12:42:42.047Z
author: Fernando
excerpt_separator: <!--more-->
sources:
  - title: Comando do Windows - Microsoft
    url: https://docs.microsoft.com/pt-br/windows-server/administration/windows-commands/windows-commands
order: 1
---
Nesse texto nós apresentamos uma introdução a linguagem Batch, que é usada para escrever scripts que serão executados pelo CMD. Nós vamos entender o que é o CMD e depois já vamos criar nosso primeiro programa com a linguagem Batch. Nesse documento, ainda é disponibilizado uma lista com alguns comandos que podem ser utilizados.

<!--more-->

Mas por que aprender a linguagem Batch? Para falar a verdade, hoje em dia isso é mais para quem tem curiosidade. Existem ferramentas que podem fazer bem mais que o CMD. De todo modo, entender Batch para aproveitar melhor o CMD ainda pode resumir horas de trabalho em alguns segundos. Com ela podemos automatizar tarefas, como a criação de um sistema de pastas por exemplo. Nesse sentido, aprender a linguagem Batch - que é a linguagem que usamos para criar os programas que serão executados pelo CMD - é muito útil para quem quer trabalhar melhor com o computador. Além disso, ter novos conhecimentos na bagagem é sempre uma coisa boa. Dificilmente você verá alguém lamentando ter aprendido algo novo. 

Nota: apesar da linguagem Batch ser bem útil, existem algumas limitações. Então seria interessante se você também estudasse os comandos do PowerShell - outro interpretador que também vem com o Windows. 

## O que é Prompt de Comando (CMD)?

O Prompt de Comando, também chamado de CMD, é um programa que oferece uma interface de usuário, a qual permite a interação do usuário com os recursos do sistema Windows. A interface criada é do tipo command-line interface (CLI), que traduzido para o português fica Interface de Linha de Comando (ILC), e, portanto, o usuário interage com os recursos do sistema por meio de comandos escritos que serão interpretados pelo CMD para execução da tarefa desejada. 

## Navegação no CMD

Como o Batch foi criado para ser usado no CMD, é comum que suas operações envolvam arquivos e pastas. Dessa forma, convém aprendermos como chegar até esses elementos no computador usando alguns comandos mais comuns.

Vamos começar pelo comando `DIR`. Esse comando é usado para listar todos os arquivos e pastas que estão dentro de uma pasta. Para ver esse comando funcionando, primeiro digite CMD na caixa de pesquisa do Windows. O programa Prompt de Comando aparecerá logo no topo. Clique sobre ele. Uma janela como a seguinte irá se abrir:

{% include post_img.html
png="/assets/imgs_posts/batch/intro-to-batch-ptbr/first-screen-cmd.png"
webp="/assets/imgs_posts/batch/intro-to-batch-ptbr/first-screen-cmd.webp"
align="center"
alt="O CMD é aberto na pasta do usuário logado."
%}

O programa já é aberto com alguma coisa escrita. Na primeira linha, nós vemos a versão do Windows instalada na máquina no momento em que o CMD foi aberto. Na segunda linha temos uma mensagem de copyright da Microsoft. Na terceira linha temos um texto que chamamos de prompt, que é usado para indicar que o sistema está pronto para o próximo comando. Esse texto pode ter diferentes conteúdos, e inclusive ser informativo. É possível navegar pela estrutura de pastas do sistema através do CMD, e o prompt, nesse caso mostra o caminho para a pasta que o usuário está atualmente. Por exemplo, o prompt `c:\Users\Fernando` mostra que atualmente o usuário está com o CMD aberto na pasta Fernando, que está dentro da pasta Users, e que por sua vez está dentro do dispositivo de armazenamento identificado com c:. 

Nós podemos modificar esse texto usando o comando `prompt`. Basta colocar o texto que deve ser usado após o comando. Por exemplo, o comando `prompt meuprompt` coloca o texto 'meuprompt' no lugar do caminho para a pasta atual. Use `prompt /?` para ver todas as opções.

Agora, vamos digitar o comando `DIR` e apertar Enter.

{% include post_img.html
png="/assets/imgs_posts/batch/intro-to-batch-ptbr/dir-command-result.png"
webp="/assets/imgs_posts/batch/intro-to-batch-ptbr/dir-command-result.webp"
align="center"
alt="Resultado do comando `DIR`. Todo o conteúdo da pasta onde o CMD estava aberto é exibido para o usuário."
%}

Como resultado, todo o conteúdo da pasta onde o CMD estava aberto, C:\Users\Fernando, foi exibido para o usuário. As informações são exibidas em "colunas". Na primeira coluna é exibida a data da última modificação. A segunda exibe o horário da última modificação. Na terceira pode ou não conter o valor &lt;DIR&gt;, que é usado para indicar se o item é um diretório (uma pasta) ou não. A última mostra o nome do item. 

Nós podemos acessar essas pastas usando o comando `CD [pasta]`, em que \[pasta] deve ser substituído pelo nome da pasta/diretório que deve ser acessado. Por exemplo, digamos que precisamos acessar a pasta Music, para isso nós digitamos `CD Music`.

{% include post_img.html
png="/assets/imgs_posts/batch/intro-to-batch-ptbr/cd-command.png"
webp="/assets/imgs_posts/batch/intro-to-batch-ptbr/cd-command.webp"
align="center"
alt="O CMD entra na pasta informada."
%}

Retornar para o diretório anterior é tão simples quanto digitar `CD ..`(perceba os dois pontos logo depois do comando) no CMD.

{% include post_img.html
png="/assets/imgs_posts/batch/intro-to-batch-ptbr/cd-back.png"
webp="/assets/imgs_posts/batch/intro-to-batch-ptbr/cd-back.webp"
align="center"
alt="O CMD volta para o diretório anterior."
%}

Para retornar duas pastas, nós usamos `cd ../../`, se forem três nós digitamos `cd ../../../`, e assim por diante.
Para acessar uma subpasta, ou seja, uma pasta que está dentro de outra pasta, e que por sua vez pode estar dentro de outra pasta, nós não precisamos entrar em cada uma delas até chegar até a que a gente quer. Só o que precisamos é o endereço da pasta **relativo** a pasta atual, ou o endereço completo do diretório. Por exemplo, digamos que dentro da pasta Music, exista uma pasta chamada rock, e dentro desta há uma outra pasta chamada ac_dc. Nós não precisamos entrar na pasta Music, depois rock e então ac_dc, nós podemos pular direto para a última pasta que é a que a gente quer. Para esse fim, nós podemos usar o comando `CD music\rock\ac_dc\`.

{% include post_img.html
png="/assets/imgs_posts/batch/intro-to-batch-ptbr/cd-relative-path.png"
webp="/assets/imgs_posts/batch/intro-to-batch-ptbr/cd-relative-path.webp"
align="center"
alt="Pasta ac_dc acessada diretamente."
%}

Os diretórios music e rock foram pulados e o CMD foi direto na pasta ac_dc. Nós usamos o comando CD para acessar essa subpasta. 
Perceba que usamos o caminho relativo da pasta desejada. O caminho é relativo quando é levado em consideração o ponto de partida do CMD, que é a pasta em que ele está no momento. Nesse caso, o programa estava na pasta Fernando, daí para chegar até a pasta ac_dc, tínhamos que entrar na pasta music, acessar a pasta rock e finalmente a pasta ac_dc. 

Além disso, também é possível usar o endereço completo da pasta que, nesse caso, é `C:\Users\Fernando\Music\rock\ac_dc`.

{% include post_img.html
png="/assets/imgs_posts/batch/intro-to-batch-ptbr/cd-full-path.png"
webp="/assets/imgs_posts/batch/intro-to-batch-ptbr/cd-full-path.webp"
align="center"
alt="Pasta ac_dc acessada diretamente com a especificação do seu caminho completo."
%}

Perceba que, na maior parte dos casos, o endereço completo do arquivo independe de onde o CMD está aberto. No entanto, quando esse diretório se encontra em outra unidade de armazenamento, é preciso acessá-la primeiro. Por exemplo, se no seu computador existe um pen drive identificado por e:, e o CMD está aberto no disco c:, para acessar qualquer pasta neste dispositivo nós precisamos entrar em e: pelo CMD primeiro, e então acessar a pasta desejada.

Vamos supor que exista uma pasta chamada cursos em um pen drive d:. Para acessar essa pasta, nós acessamos o pen drive digitando d: no CMD, e então inserimos o comando para entrar no diretório.

{% include post_img.html
png="/assets/imgs_posts/batch/intro-to-batch-ptbr/cd-folder-in-another-dir.png"
webp="/assets/imgs_posts/batch/intro-to-batch-ptbr/cd-folder-in-another-dir.webp"
align="center"
alt="Acesso à pasta courses em outro dispositivo."
%}

Esses são os comandos que normalmente usamos para navegar pelas pastas que estão contidos no computador. A partir daqui, vamos focar nos arquivos escritos com Batch Script.

## Ferramentas Necessárias

O ambiente para o desenvolvimento em Batch é muito simples. Basicamente, você vai precisar de um computador com Windows instalado para conseguir executar o programa. E além disso, você vai precisar de um editor de texto simples, que pode ser o próprio bloco de notas.

Se você não quiser usar o Bloco de Notas do Windows, há também opções de programas que podem ser baixados como o [notapad++](https://notepad-plus-plus.org/){: rel="noreferrer noopener nofollow" target="_blank"} ou o [sublime 3](https://www.sublimetext.com/3){: rel="norefferer noopener nofollow" target="_blank"}.
Existe também a opção de utilização de uma IDE (Integrated Development Environment). Esse é um programa que integra diversas ferramentas que facilitam a programação, tais como um [depurador](https://en.wikipedia.org/wiki/Debugging){: rel="noreferrer noopener nofollow" target="_blank"} que procura por erros de sintaxe no código, o [IntelliSense](https://en.wikipedia.org/wiki/Intelligent_code_completion){: rel="noreferrer noopener nofollow" target="_blank"} que é um conjunto de funcionalidades que ajuda o programador a escrever o programa mais rápido. Entre as IDEs, podemos citar o [Batch Compiler](https://sourceforge.net/projects/batch-compiler/){: rel="noreferrer noopener nofollow" target="_blank"}, que permite também a criação de uma versão .exe do seu documento, o que é bem útil quando não é desejável que outras pessoas possam xeretar o seu código.

## Como criar Arquivos Contendo Batch

Para criar documentos no Bloco de Notas, Notepad++, Sublime 3 ou em outros editores:

1. Com o programa aberto, crie um novo arquivo se necessário;
2. Digite o script e então salve o arquivo como .cmd ou .bat.

Para criar arquivos no Batch Compiler também precisamos de poucos passos:

1. Abra o programa, digite os comandos que você quer executar na tela branca que aparecer.
2. Vá em file > save, escolha o local onde o arquivo deve ser salvo, e clique em salvar.

A criação de executáveis que pode ser feita utilizando a IDE Batch Compiler é realizado seguindo os seguintes passos:

1. Abra o programa e digite os comandos necessários na area de edição (tela em branco);
2. Clique no ícone indicado na imagem.
   {% include post_img.html
   png="/assets/imgs_posts/batch/intro-to-batch-ptbr/batch-script-one-with-marks.png"
   webp="/assets/imgs_posts/batch/intro-to-batch-ptbr/batch-script-one-with-marks.webp"
   align="center"
   alt="Botão para criar executáveis."
   %}
3. Vai abrir uma janela chamada "Compile \| Batch Compiler". Nessa janela você pode definir diversos parâmetros referente ao programa, tais como mostra a imagem e a descrição que se segue:

{% include post_img.html
png="/assets/imgs_posts/batch/intro-to-batch-ptbr/batch-script-two-with-marks.png"
webp="/assets/imgs_posts/batch/intro-to-batch-ptbr/batch-script-two-with-marks.webp"
align="center"
alt="Botão para criar executáveis."
%}

Opções de compilação do Batch Compiler.
A - Uma descrição do programa; 

B - O nome da empresa dona do programa; 

C - Informações de copyright; 

D - Informar o local onde o executável será salvo;

E - Definir a visibilidade do programa;

F - Definir o nível de privilégio que usuário deve ter para executar o programa;

G - Dar um número de versão para o programa;

H - Adicionar recursos extras.

Quando estiver tudo pronto, você pode finalmente clicar no botão compilar.

## Criando e Rodando Arquivos Batch

Com tudo pronto, mãos à obra!
Abra o editor que escolheu, e digite o código abaixo (vamos destrinchá-lo logo em seguida):

```batchfile
ECHO Hello, world!
ECHO.
PAUSE
```

O comando `ECHO` é utilizado para indicar ao CMD que queremos imprimir alguma coisa na tela para o usuário. A estrutura é `ECHO [mensagem]`, onde \[mensagem] deve ser substituído pela mensagem que deseja mostrar. Não é necessário o uso das aspas como em outras linguagens. Se você colocar o texto entre aspas, ele será exibido entre aspas. Nesse caso a mensagem é "Hello, world!".

O comando `ECHO.` é um comando usado para inserir uma linha vazia, ajudando a manter uma estética mais apresentável para o usuário.

O comando `PAUSE` impede que o CMD feche assim que terminar de executar as instruções que acabamos de passar. Sem esse comando o CMD executa o script e se fecha logo em seguida. 

Agora salve o arquivo com a extensão .bat (e.g., hello-world.bat) e depois basta clicar sobre ele para executa-lo.

Resultado:

{% include post_img.html
png="/assets/imgs_posts/batch/intro-to-batch-ptbr/batch-program.png"
webp="/assets/imgs_posts/batch/intro-to-batch-ptbr/batch-program.webp"
align="center"
alt="Hello, world! exibido para o usuário com sucesso."
%}

Dica: apague o comando `PAUSE` e execute o script novamente para comparar os resultados.

Também é possível executar o arquivo diretamente pelo CMD. Para tanto, navegue pelo CMD até a mesma pasta em que o programa foi salvo, e então digite o nome desse script. Nesse caso, meu arquivo foi salvo como ‘hello-world.bat", e está na pasta "batch-lang", então por esse método eu devo abrir o CMD, navegar até essa pasta "batch-lang" e digitar "hello-world.bat".

{% include post_img.html
png="/assets/imgs_posts/batch/intro-to-batch-ptbr/batch-program-two.png"
webp="/assets/imgs_posts/batch/intro-to-batch-ptbr/batch-program-two.webp"
align="center"
alt="Digite o nome do arquivo para executá-lo, o resultado é o mesmo."
%}

Uma coisa que você deve ter percebido é que os comandos colocados no arquivo (`ECHO Hello,world!`, `ECHO.` e `PAUSE`) apareceram no CMD quando o mesmo foi executado (se não percebeu, volte lá para dar uma olhada). Isso faz com que a tela fique mais poluída, e as informações mais difíceis de ler, principalmente quando temos scripts gigantes. Para diminuir essa poluição visual podemos usar o comando `@ECHO OFF` logo no início do documento. Esse comando indica para o CMD que ele não deve mostrar os comandos na tela, mas apenas os resultados destes (caso tenha um resultado para mostrar na tela).
Nesse caso nosso arquivo ficaria da seguinte forma:

```batchfile
@ECHO OFF
ECHO Hello, world!
ECHO.
PAUSE
```

Agora os comandos serão suprimidos enquanto que o resultado desses comandos será exibido para o usuário.

{% include post_img.html
png="/assets/imgs_posts/batch/intro-to-batch-ptbr/clean-hello-world.png"
webp="/assets/imgs_posts/batch/intro-to-batch-ptbr/clean-hello-world.webp"
align="center"
alt="Apenas o resultado dos comandos é exibido."
%}

Como dito, um arquivo **.bat** ou **.cmd** não passa de um documento com um ou mais comandos que você digitaria diretamente no prompt de comando com a adição de um ou outro recurso. Portanto, qualquer comando que costumamos usar no CMD, podemos também digitá-lo no arquivo ".bat" ou ".cmd". 

No exemplo abaixo escrevemos um script que vai mostrar todos os arquivos e pastas dentro da pasta onde o arquivo .bat está localizado.

```batchfile
@ECHO OFF
DIR
PAUSE
```

Supondo que o arquivo esteja salvo em uma pasta nomeada "batch-lang", quando ele for executado será listado todo o conteúdo desta pasta.

{% include post_img.html
png="/assets/imgs_posts/batch/intro-to-batch-ptbr/batch-program-dir.png"
webp="/assets/imgs_posts/batch/intro-to-batch-ptbr/batch-program-dir.webp"
align="center"
alt="Todo o conteúdo da pasta em que o arquivo foi executado é exibido."
%}

No entanto, perceba que nem todo comando que pode ser inserido em um arquivo script terá alguma utilidade ao ser digitado diretamente no CMD. O comando `GOTO`, por exemplo, é utilizado para modificar a ordem de execução de um programa, apontando para outra parte do arquivo que o CMD deve ler. Dessa forma, ao ser usado fora de um arquivo, esse comando deixa de ter utilidade. Você entenderá mais sobre esse comando quando falarmos sobre labels (rótulos).

## Comandos

Os comandos apresentados até aqui não são os únicos. Abaixo é apresentado uma tabela em português com alguns dos comandos disponíveis. 

Comandos da Linguagem Batch e sua Respectiva Função 

<div class="table-container">
<table class="table table-model-1">
<thead>
  <tr>
    <th>Comando</th>
    <th>Função</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>ARP</td>
    <td>Exibe e modifica as tabelas de conversão de endereços IP para endereços físicos usadas pelo protocolo de resolução de endereços (ARP).</td>
  </tr>
  <tr>
    <td>ASSOC</td>
    <td>Muda ou exibe a relação entre uma extensão e um tipo de arquivo. As extensões são, geralmente, uma parte de um nome maior que indentifica o tipo do arquivo. Por exemplo, a extensão .jpg é usada para arquivos do tipo jpegfile, mas nós podemos mudar essa associação com esse comando.</td>
  </tr>
  <tr>
    <td>ATTRIB</td>
    <td>Exibe ou altera atributos de arquivos.</td>
  </tr>
  <tr>
    <td>BCDBOOT</td>
    <td>Criar ou reparar uma partição do sistema.</td>
  </tr>
  <tr>
    <td>BCDEDIT</td>
    <td>Uma ferramenta para o gerenciamento do BCD (Boot Configuration data ou Dados de Configuração de Inicialização). O BCD é um banco de dados, um conjunto de dados organizados, que armazena dados necessários para a correta inicialização do sistema.</td>
  </tr>
  <tr>
    <td>BITSADMIN</td>
    <td>O Background Intelligent Transfer Service (Serviço de Transferência Inteligente em Plano de Fundo) gerencia o serviço de transferência inteligente de arquivos de forma assíncrona, priorizada, e acelerada de arquivos entre máquinas usando largura de banda disponível no momento .</td>
  </tr>
  <tr>
    <td>CACLS</td>
    <td>Exibe ou altera permissões de arquivo. A lista de permissões define quais usuários/grupos de usuários podem ler ou editar um arquivo. Se aplica somente para arquivos armazenados em um disco formatado como NTFS.</td>
  </tr>
  <tr>
    <td>CALL</td>
    <td>Inicia outro programa em Batch.*</td>
  </tr>
  <tr>
    <td>CERTREQ</td>
    <td>Solicita um certificado digital de uma autoridade de certificação.Um certificado digital autentica a quem pertence um software, um PC, uma chave pública usada para encriptação. Esse certificado digital é fornecido por uma autoridade de certificação, uma entidade reconhecida e confiável como a Google.</td>
  </tr>
  <tr>
    <td>CERTUTIL</td>
    <td>Gerencia os serviços e arquivos da autoridade de certificação.</td>
  </tr>
  <tr>
    <td>CD</td>
    <td>Usado para navegação entre diretórios.*</td>
  </tr>
  <tr>
    <td>CHANGE</td>
    <td>Alterar propriedades da sessão do Terminal Server.</td>
  </tr>
  <tr>
    <td>CHANGEPK</td>
    <td>Muda a edição do Windows ou a chave do produto. Por exemplo, é possível sair do Windows Home para o Windows Pro Education se a chave do produto for modificada. Todos os upgrades possíveis são <a href="https://docs.microsoft.com/en-us/windows/deployment/upgrade/windows-10-edition-upgrades" rel="noreferrer noopener nofollow" target="_blank">listados no site da Microsoft</a></td>
  </tr>
  <tr>
    <td>CHCP</td>
    <td>Altera o atual codificação dos caracteres no CMD, isto é, permite mudar como os caracteres são representados na memória, o que também determina os caracteres que podem ser exibidos.</td>
  </tr>
  <tr>
    <td>CHDIR</td>
    <td>Usado para navegação entre diretórios.</td>
  </tr>
  <tr>
    <td>CHKDSK</td>
    <td>Procura e repara problemas no disco local.</td>
  </tr>
  <tr>
    <td>CHKNTFS</td>
    <td>Checa o sistema de arquivos NTFS.</td>
  </tr>
  <tr>
    <td>CHOICE</td>
    <td>Detecta o pressionamento de uma única tecla pelo usuário. Esse comando é geralmente utilizado para construção de menus, apresentando opções que o usuário escolhe ao pressionar alguma tecla.</td>
  </tr>
  <tr>
    <td>CIPHER</td>
    <td>Encripta ou tira a encriptação de arquivos/pastas.</td>
  </tr>
  <tr>
    <td>CLEANMGR</td>
    <td>Automatiza a exclusão de arquivos.</td>
  </tr>
  <tr>
    <td>CLIP</td>
    <td>Copia o resultado de um comando.</td>
  </tr>
  <tr>
    <td>CLS</td>
    <td>Limpa a tela do CMD.*</td>
  </tr>
  <tr>
    <td>CMD</td>
    <td>Abre uma nova instância do CMD dentro do CMD. Nessa janela podemos executar qualquer comando.</td>
  </tr>
  <tr>
    <td>CMDKEY</td>
    <td>Gerência senha e nomes de usuários armazenados.</td>
  </tr>
  <tr>
    <td>COLOR</td>
    <td>Muda a cor da fonte e do fundo do CMD.</td>
  </tr>
  <tr>
    <td>COMP</td>
    <td>Compara o conteúdo de dois arquivos.</td>
  </tr>
  <tr>
    <td>COMPACT</td>
    <td>Exibe ou altera a compactação de arquivos em partições NTFS.</td>
  </tr>
  <tr>
    <td>CONVERT</td>
    <td>Converte um o sistema de arquivo do dispositivo de FAT ou FAT32 para NTFS.</td>
  </tr>
  <tr>
    <td>COPY</td>
    <td>Copia um ou mais arquivos para outro local.</td>
  </tr>
  <tr>
    <td>CSVDE</td>
    <td>Importar ou explorar dados do Active Directory para um arquivo.</td>
  </tr>
  <tr>
    <td>CURL</td>
    <td>Transfere dados de ou para um servidor usando um de vários protocolos suportados.</td>
  </tr>
  <tr>
    <td>DATE</td>
    <td>Exibe ou define a data.*</td>
  </tr>
  <tr>
    <td>DEFRAG</td>
    <td>Desfragmentar o disco rígido.</td>
  </tr>
  <tr>
    <td>DEL</td>
    <td>Exclui um ou mais arquivos.*</td>
  </tr>
  <tr>
    <td>DELPROF</td>
    <td>Deleta perfis de usuário em computadores locais ou remotos.</td>
  </tr>
  <tr>
    <td>DIR</td>
    <td>Exibe uma lista de arquivos e pastas do diretório atual.*</td>
  </tr>
  <tr>
    <td>DIRQUOTA</td>
    <td>Cotas de disco do Gerenciador de recursos de servidor de arquivos.</td>
  </tr>
  <tr>
    <td>DISKPART</td>
    <td>Administra discos, volumes ou partições.</td>
  </tr>
  <tr>
    <td>DISKSHADOW</td>
    <td>Serviço de cópia de sombra de volume.</td>
  </tr>
  <tr>
    <td>DISM</td>
    <td>Inicia o Manutenção e gerenciamento de imagens de implantação.</td>
  </tr>
  <tr>
    <td>DISPLAYSWITCH</td>
    <td>Especifica qual monitor e qual utilizar.</td>
  </tr>
  <tr>
    <td>DNSCMD</td>
    <td>Gerência servidores de DNS.</td>
  </tr>
  <tr>
    <td>DOSKEYE</td>
    <td>Edite a linha de comando, recupere comandos e crie macros.</td>
  </tr>
  <tr>
    <td>DRIVERQUERY</td>
    <td>Exibir drivers de dispositivos instalados.</td>
  </tr>
  <tr>
    <td>DSMGMT</td>
    <td>Gerenciamento de serviços de diretório.</td>
  </tr>
  <tr>
    <td>ECHO</td>
    <td>Exibe uma mensagem na tela.*</td>
  </tr>
  <tr>
    <td>ENDLOCAL</td>
    <td>Terminar a localização do ambiente em um arquivo de lote.*</td>
  </tr>
  <tr>
    <td>ERASE</td>
    <td>Exclui um ou mais arquivos.*</td>
  </tr>
  <tr>
    <td>EVENTCREATE</td>
    <td>Adicionar uma mensagem para o registro de eventos do Windows.</td>
  </tr>
  <tr>
    <td>EXIT</td>
    <td>Encerra a rotina ou script e define um valor para a variável ERRORLEVEL.*</td>
  </tr>
  <tr>
    <td>EXPAND</td>
    <td>Descomprime arquivos Cabinet (CAB). Esses são arquivos comprimidos, identificados pela extensão .cab, que guardam informações de várias instalações do Windows que podem envolver drivers ou arquivos do sistema.</td>
  </tr>
  <tr>
    <td>FC</td>
    <td>Compara dois arquivos.</td>
  </tr>
  <tr>
    <td>FIND</td>
    <td>Procura por strings de texto em um arquivo.</td>
  </tr>
  <tr>
    <td>FINDSTR</td>
    <td>Procura por um texto em um arquivo.</td>
  </tr>
  <tr>
    <td>FLTMC</td>
    <td>Carregar, descarregar, listar e gerenciar drivers de filtro.</td>
  </tr>
  <tr>
    <td>FOR</td>
    <td>Usado para executar um ou mais comandos para cada item em um conjunto.*</td>
  </tr>
  <tr>
    <td>FORFILES</td>
    <td>Seleciona um arquivo (ou grupo de arquivo) e executa um comando para todos.</td>
  </tr>
  <tr>
    <td>FORMAT</td>
    <td>Formatar um dispositivo.</td>
  </tr>
  <tr>
    <td>FREEDISK</td>
    <td>Procura por espaço livre em disco.</td>
  </tr>
  <tr>
    <td>FSUTIL</td>
    <td>Executa várias tarefas relacionadas aos sistemas de arquivo FAT e NTFS como gerenciar Reparse Points e Sparse Files, desmontar um volume, e extender um um volume.</td>
  </tr>
  <tr>
    <td>FTP</td>
    <td>Protocolo de transferência de arquivos.</td>
  </tr>
  <tr>
    <td>FTYPE</td>
    <td>Exibe ou modifica a relação entre um tipo de arquivo e um arquivo executável que deve abri-lo por padrão. Por exemplo, podemos definir o Chrome como o programa padrão para abrir documentos do tipo htmlfile.*</td>
  </tr>
  <tr>
    <td>GETMAC</td>
    <td>Exibe o endereço de mac.</td>
  </tr>
  <tr>
    <td>GOTO</td>
    <td>Muda a ordem de execução em um programa Batch, apontando um local rotulado em que os comandos que devem ser executados estão.*</td>
  </tr>
  <tr>
    <td>GPRESULT</td>
    <td>Exibe as informações das Políticas de Grupo.</td>
  </tr>
  <tr>
    <td>GPUPDATE</td>
    <td>Atualiza as configurações de Política de Grupo.</td>
  </tr>
  <tr>
    <td>HELP</td>
    <td>Exibe uma lista de comandos disponíveis, ou mais detalhes sobre um comando especifico. Não funciona com todos os programas. Para estes, tente o comando /? (e.g., <code>CMD /?</code>).</td>
  </tr>
  <tr>
    <td>HOSTNAME</td>
    <td>Exibe o nome de host do computador.</td>
  </tr>
  <tr>
    <td>ICACLS</td>
    <td>Muda as permissões de arquivo e pasta.</td>
  </tr>
  <tr>
    <td>IEXPRESS</td>
    <td>Crie um arquivo ZIP de extração automática. Esse arquivo é um executável que contém um arquivo ZIP e um código que descomprime o(s) arquivo(s) desse arquivo ZIP. Para executar esse código, e assim obter os arquivos comprimidos, basta clicar sobre os arquivos .exe.</td>
  </tr>
  <tr>
    <td>IF</td>
    <td>Executa um comando condicionalmente.*</td>
  </tr>
  <tr>
    <td>IPCONFIG</td>
    <td>Exibe as configurações de IP da máquina.</td>
  </tr>
  <tr>
    <td>LABEL</td>
    <td>Edita o rótulo de uma unidade.</td>
  </tr>
  <tr>
    <td>LODCTR</td>
    <td>Atualiza os valores de registro relacionados aos contadores de desempenho.</td>
  </tr>
  <tr>
    <td>LOGMAN</td>
    <td>Gerência registros.</td>
  </tr>
  <tr>
    <td>LOGOFF</td>
    <td>Desconectar um usuário.</td>
  </tr>
  <tr>
    <td>MAKECAB</td>
    <td>Cria um arquivo CAB. Este é um arquivo comprimido, como o ZIP.</td>
  </tr>
  <tr>
    <td>MANAGE-BDE</td>
    <td>Configurar a Criptografia de Unidade de Disco BitLocker nos volumes de discos.</td>
  </tr>
  <tr>
    <td>MD</td>
    <td>Cria um novo diretório.*</td>
  </tr>
  <tr>
    <td>MKDIR</td>
    <td>Cria um novo arquivo.*</td>
  </tr>
  <tr>
    <td>MKLINK</td>
    <td>Criar um link simbólico, um link físico, ou .*.</td>
  </tr>
  <tr>
    <td>MODE</td>
    <td>Configura os dispositivos do sistema.</td>
  </tr>
  <tr>
    <td>MORE</td>
    <td>Exibe textos no CMD sem que ultrapasse o espaço disponível na tela em um determinado momento. Uma vez que não há mais espaço, o CMD aguarda até que o usuário pressione enter. Rode <code>HELP</code> e depois <code>HELP | MORE</code> e compare o resultado.</td>
  </tr>
  <tr>
    <td>MOUNTVOL</td>
    <td>Cria, exclui, ou lista um ponto de montagem de volume.</td>
  </tr>
  <tr>
    <td>MOVE</td>
    <td>Move e renomeia arquivos e pastas.*</td>
  </tr>
  <tr>
    <td>MSG</td>
    <td>Envia uma mensagem para um usuário.</td>
  </tr>
  <tr>
    <td>MSIEXEC</td>
    <td>Fornece os meios para instalar, modificar e executar operações no Windows Installer a partir da linha de comando.</td>
  </tr>
  <tr>
    <td>MSINFO32</td>
    <td>Coleta informações sobre o PC e exibe uma visão abrangente do seu Hardware, componentes do sistema e ambiente de software. Pode aparecer a mensagem "Não foi possível coletar informações". Esse problema talvez possa ser resolvido <a href="https://answers.microsoft.com/en-us/windows/forum/windows_7-performance/msinfo32exe-system-information-not-working-error/ddc9c6ef-1832-42ee-a768-9878c81f196c#:~:text=Windows%20Management%20files%20may%20be%20moved%20or%20missing.&text=You%20may%20just%20need%20to,Management%20Instrumentation%20(WMI)%20Repository.&text=See%20how%20msinfo32%20works%20now.&text=Then%20be%20sure%20to%20restart,restarted%20and%20check%20msinfo32%20again">resetando o repositório do WMI(Instrumentação de Gerenciamento do Windows)</a>.</td>
  </tr>
  <tr>
    <td>MSTSC</td>
    <td>Permite logar um computador remoto usando o protocolo Remote Desktop Protocol (RDP).</td>
  </tr>
  <tr>
    <td>NET</td>
    <td>Gerencia os recursos de rede. Podemos usá-lo para conectar ou desconectar o computador de um recurso compartilhado por um servidor, exibir informações de configuração do servidor, adicionar ou remover um computador de um domínio e etc.</td>
  </tr>
  <tr>
    <td>NETDOM</td>
    <td>Gerencia domínios.</td>
  </tr>
  <tr>
    <td>NETSH</td>
    <td>Exibe ou modifica as configurações de rede.</td>
  </tr>
  <tr>
    <td>NBTSTAT</td>
    <td>Exibe as estatísticas de protocolo e as conexões TCP/IP atuais que usam NBT.</td>
  </tr>
  <tr>
    <td>NETSTAT</td>
    <td>Exibe estatísticas de protocolo e conexões de rede TCP/IP atuais.</td>
  </tr>
  <tr>
    <td>NLTEST</td>
    <td>Teste de localização de rede.</td>
  </tr>
  <tr>
    <td>NMBIND</td>
    <td>Gerencia as ligações de rede Hyper-V. Note que o Hyper-V - um software para criação de máquinas virtuais - deve ser ativado nas versões suportadas do Windows para poder usá-lo. Procure instruções para o seu sistema operacional.</td>
  </tr>
  <tr>
    <td>NSLOOKUP</td>
    <td>Pesquisa em um DNS (Domain Name Server) por um domínio (e.g., google.com) para encontrar o endereço de IP correspondente, ou procurar pelo endereço de IP para encontrar o domínio correspondente.</td>
  </tr>
  <tr>
    <td>NTBACKUP</td>
    <td>Usado para executar funções de backup pelo CMD.</td>
  </tr>
  <tr>
    <td>NTDSUTIL</td>
    <td>Usado para acessar e gerenciar o Active Directory do Windows. Disponível para computadores que possuem o as Ferramentas dos Serviços de Domínio Active Directory que fazem parte das Ferramentas de Administração de Servidor Remoto (RSAT), ou se você tiver o AD DS ou a função de servidor AD LDS. <a href="https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/cc753343(v=ws.11" rel="noreferrer noopener nofollow" target="_blank">Microsoft recomenda</a> que o NTDSutil seja usado por administradores experientes e requer que a ferramenta seja usada com o CMD no modo administrador.</td>
  </tr>
  <tr>
    <td>OPENFILES</td>
    <td>Lista, consulta ou desconecta arquivos e pastas que foram abertos no sistemas.</td>
  </tr>
  <tr>
    <td>PATH</td>
    <td>Exibe ou configura um conjunto de caminhos para programas executáveis que podem ser acesssados e executados através da linha de comando.</td>
  </tr>
  <tr>
    <td>PATHPING</td>
    <td>Funciona como o comando <code>TRACERT</code> mas também informa sobre a latência da rede e perda de pacotes em cada salto. Um salto é a transmissão de um pacote (pedaço de informação) de um dispositivo para o outro até chegar ao destino determinado.</td>
  </tr>
  <tr>
    <td>PAUSE</td>
    <td>Suspende o processamento do arquivo batch*</td>
  </tr>
  <tr>
    <td>PING</td>
    <td>Testar uma conexão de rede. Se obter sucesso é retornado o endereço de IP.</td>
  </tr>
  <tr>
    <td>POPD</td>
    <td>Retorna para um diretório previamente salvo pelo comando <code>PUSHD</code>.*</td>
  </tr>
  <tr>
    <td>POWERCFG</td>
    <td>Gerencia as configurações do gerenciamento de energia do Windows.</td>
  </tr>
  <tr>
    <td>PRINT</td>
    <td>Imprime um arquivo usando uma impressora específica.</td>
  </tr>
  <tr>
    <td>PRINTBRM</td>
    <td>Backup / Recuperação / Migração da fila de impressão.</td>
  </tr>
  <tr>
    <td>PROMPT</td>
    <td>Usado para customizar a aparência do texto que aparece antes dos comandos do CMD ou MS-DOS. Geralmente, o CMD ou o MS-DOS exibe caminho para a pasta onde ele está aberto, mas isso pode ser mudado para uma seta com esse comando, por exemplo.</td>
  </tr>
  <tr>
    <td>PSHD</td>
    <td>Armazena o caminho para um diretório que pode ser referenciado pelo comando POPD.</td>
  </tr>
  <tr>
    <td>RASDIAL</td>
    <td>Usado para iniciar ou finalizar uma conexão discada ou Virtual Network Connection (VPN).</td>
  </tr>
  <tr>
    <td>RD</td>
    <td>Exclui um diretório*.</td>
  </tr>
  <tr>
    <td>RECOVER</td>
    <td>Recupera informações legíveis de um disco danificado ou defeituoso.</td>
  </tr>
  <tr>
    <td>REG</td>
    <td>Lê, cria, exporta, ou deleta valores e chaves do registro. Muito cuidado ao utilizar esse comando. O registro é uma parte fundamental do Windows e qualquer modificação mal calculada pode deixar seu sistema operacional inacessível.</td>
  </tr>
  <tr>
    <td>REGEDIT</td>
    <td>Importa ou exporta configurações de registro de um arquivo de texto .reg.</td>
  </tr>
  <tr>
    <td>REGSVR32</td>
    <td>Registrar ou cancelar o registro de controladores OLE (Object Linking Embedded), como arquivos .DLL e .OCX. Quando esse comando registra um arquivo DLL, informações sobre arquivos de programa associados a ele são armazenadas no registro do Windows. Outros programas podem acessar essas informações a fim de saber onde os dados do programa estão e como interagir com eles.</td>
  </tr>
  <tr>
    <td>REGINI</td>
    <td>Define ou altera permissões e valores do registro,</td>
  </tr>
  <tr>
    <td>REM</td>
    <td>Adicionar um comentário em um arquivo Batch.*</td>
  </tr>
  <tr>
    <td>REN</td>
    <td>Renomeia um ou mais arquivos. É a mesma funcionalidade do comando rename.*</td>
  </tr>
  <tr>
    <td>REPLACE</td>
    <td>Troca ou atualiza um arquivo com um outro arquivo.</td>
  </tr>
  <tr>
    <td>RMDIR</td>
    <td>Exclui um diretório.*</td>
  </tr>
  <tr>
    <td>ROBOCOPY</td>
    <td>Usado para copiar arquivos e pastas de um lugar para o outro. Esse comando é superior ao <code>COPY</code> e <code>XCOPY</code> pois possui muito mais opções.</td>
  </tr>
  <tr>
    <td>ROUTE</td>
    <td>Manipular tabelas de roteamento de rede.</td>
  </tr>
  <tr>
    <td>RUNAS</td>
    <td>Executa um programa usando as credenciais de outro usuário</td>
  </tr>
  <tr>
    <td>RUNDLL32</td>
    <td>Executa um comando DLL (adiciona ou remove conexões de impressoras). Só funciona com arquivos DLL explicitamente criado para ser executado por esse comando.</td>
  </tr>
  <tr>
    <td>SC</td>
    <td>Configura informações sobre serviços.</td>
  </tr>
  <tr>
    <td>SCHTASKS</td>
    <td>Criar, excluir, consultar, alterar, executar e finalizar tarefas agendadas em um sistema local ou remoto.</td>
  </tr>
  <tr>
    <td>SET</td>
    <td>Exibe, cria, ou remove variáveis de ambiente da seção atual.*</td>
  </tr>
  <tr>
    <td>SETLOCAL</td>
    <td>Controla a visibilidade de variáveis de ambiente.*</td>
  </tr>
  <tr>
    <td>SETSPN</td>
    <td>Gerência o Service Principal Name (SPN) para um Active Directory.</td>
  </tr>
  <tr>
    <td>SETX</td>
    <td>Cria ou muda as variáveis de ambiente de usuário ou no ambiente do sistema.</td>
  </tr>
  <tr>
    <td>SFC</td>
    <td>Verificar ou substituir arquivos importantes do sistema do Windows.</td>
  </tr>
  <tr>
    <td>SHIFT</td>
    <td>Muda a posição de parâmetros substituíveis em um arquivo batch ou script.•</td>
  </tr>
  <tr>
    <td>SHUTDOWN</td>
    <td>Desliga, reinicia, ou logoff do sistema atual ou computador remoto.</td>
  </tr>
  <tr>
    <td>SLMGR</td>
    <td>Gerenciar o licenciamento de software</td>
  </tr>
  <tr>
    <td>SORT</td>
    <td>Ler a entrada de dados, ordenar os dados, e retornar o resultado do ordenamento para a tela do CMD, para um arquivo, ou outro dispositivo de saída.</td>
  </tr>
  <tr>
    <td>SSH</td>
    <td>Permite a conexão entre dois computadores de maneira segura. Pode ser usado para logar em um computador remoto, trocar arquivos entre a máquina local e a máquina remota, e também executar códigos na máquina remota.,</td>
  </tr>
  <tr>
    <td>START</td>
    <td>Inicia um programa, comando ou arquivo Batch.*</td>
  </tr>
  <tr>
    <td>SUBST</td>
    <td>Associa um caminho com a letra de um drive.</td>
  </tr>
  <tr>
    <td>SYSMON</td>
    <td>Monitora e registra a atividade do sistema no registro de evento do Windows.</td>
  </tr>
  <tr>
    <td>SYSTEMINFO</td>
    <td>Exibe informações detalhadas sobre a configuração do computador local ou remoto e de seu sistema operacional.</td>
  </tr>
  <tr>
    <td>TAKEOWN</td>
    <td>Usado por um administrador para recuperar o acesso, que havia sido negado, a um arquivo.</td>
  </tr>
  <tr>
    <td>TAR</td>
    <td>Extrai arquivos ou cria um arquivo composto de dois ou mais arquivos. Por exemplo, podemos extrair os arquivos de um arquivo ZIP, e depois juntá-los em um só arquivo.</td>
  </tr>
  <tr>
    <td>TASKLIST</td>
    <td>Lista aplicações e serviços sendo executados.</td>
  </tr>
  <tr>
    <td>TASKKILL</td>
    <td>Interrompe a execução de um processo.</td>
  </tr>
  <tr>
    <td>TELNET</td>
    <td>Usado para se comunicar com outro computador que utiliza o protocolo Telnet. Não está disponível por padrão no Windows mas pode ser ativado em Painel de Controle &gt; Programas &gt; Ativar ou Desativar Recursos do Windows. Marque a caixa para a opção "Cliente Telnet".</td>
  </tr>
  <tr>
    <td>TIME</td>
    <td>Exibe ou determina a hora do sistema.*</td>
  </tr>
  <tr>
    <td>TIMEOUT</td>
    <td>Atrasar o processamento de um arquivo Batch/comando.</td>
  </tr>
  <tr>
    <td>TITLE</td>
    <td>Determina o título para a sessão do CMD.*</td>
  </tr>
  <tr>
    <td>TRACERT</td>
    <td>Exibe os dispositivos intermediários entre o computador local e um computador remoto.</td>
  </tr>
  <tr>
    <td>TREE</td>
    <td>Exibe de forma gráfica a estrutura de pastas.</td>
  </tr>
  <tr>
    <td>TSDISCON</td>
    <td>Desconecta uma sessão remota.</td>
  </tr>
  <tr>
    <td>TSKILL</td>
    <td>Interrompe um programa em execução.</td>
  </tr>
  <tr>
    <td>TYPE</td>
    <td>Exibe o conteúdo de um arquivo de texto.*</td>
  </tr>
  <tr>
    <td>TYPEPERF</td>
    <td>Exibe informações de performance no CMD ou guarda em um arquivo de registro específico.</td>
  </tr>
  <tr>
    <td>TZUTIL</td>
    <td>Exibe ou configura o fuso horário atual do sistema.</td>
  </tr>
  <tr>
    <td>VER</td>
    <td>Exibe informação sobre a versão do Windows.*</td>
  </tr>
  <tr>
    <td>VERIFY</td>
    <td>Ativa ou desativa a habilidade do CMD ou MS-DOS de verificar se os arquivos foram salvos corretamente.</td>
  </tr>
  <tr>
    <td>VOL</td>
    <td>Exibe o rótulo do disco.*</td>
  </tr>
  <tr>
    <td>VSSADMIN</td>
    <td>Exibe os backups de cópia de sombra de volume atuais e todos os provedores e gravadores de cópia de sombra instalados.</td>
  </tr>
  <tr>
    <td>W32TM</td>
    <td>Usado para diagnosticar problemas no Windows Time.</td>
  </tr>
  <tr>
    <td>WAITFOR</td>
    <td>Esperar por ou enviar um sinal.</td>
  </tr>
  <tr>
    <td>WBADMIN</td>
    <td>Inicia ou finaliza procedimentos de backup, exibe os detalhes de um backup anterior, lista o conteúdo de um backup, e reportar o status de um backup em processo.</td>
  </tr>
  <tr>
    <td>WECUTIL</td>
    <td>Permite a criação e gerenciamento de assinaturas para eventos que são encaminhados por computadores com suporte ao protocolo WS-Management.</td>
  </tr>
  <tr>
    <td>WEVTUTIL</td>
    <td>Inicia o Events Command-line Utility , que é usado para gerenciar registros de eventos e editores.</td>
  </tr>
  <tr>
    <td>WHERE</td>
    <td>Usado para procurar por arquivos que apresentem um padrão específico.</td>
  </tr>
  <tr>
    <td>WHOAMI</td>
    <td>Exibe o domínio ou nome de usuário atual.</td>
  </tr>
  <tr>
    <td>WINGET</td>
    <td>Esse comando está previsto para Maio de 2021. Gerenciador de pacotes do Windows. Um gerenciador de pacotes facilita o processo de instalação de software na máquina. Bastando escrever o software necessário, e deixar o gerenciador encontrar, baixar e instalar a versão mais nova (ou a que foi especificado por você) do programa.</td>
  </tr>
  <tr>
    <td>WINRM</td>
    <td>Inicia a versão de linha de comando do Window Remote Management, usado para gerenciar comunicação com computadores locais e remotos usando Web Services.</td>
  </tr>
  <tr>
    <td>WINRS</td>
    <td>Permite gerenciar programas remotamente.</td>
  </tr>
  <tr>
    <td>WMIC</td>
    <td>Inicia o Windows Management Instrumentation Command Line (WMIC), uma interface de script que simplifica o uso do Windows Management Instrumentation (WMI) e também de sistemas gerenciados pelo WMI.</td>
  </tr>
  <tr>
    <td>WPR</td>
    <td>Registra eventos do sistema que então podem ser avaliados usando o Windows Performance Analyzer (WPA).</td>
  </tr>
  <tr>
    <td>WUSA</td>
    <td>O Windows Update Standalone Installer utiliza oWindows Update Agent API para instalar pacotes de atualização.</td>
  </tr>
  <tr>
    <td>WUAUCLT</td>
    <td>O Windows Update Automatic Update Client é usado para solucionar erros do Windows Update, e gerenciar as atualizações do Windows Update.</td>
  </tr>
  <tr>
    <td>XCOPY</td>
    <td>Copia pastas e arquivos.</td>
  </tr>
</tbody>
</table>
</div>

Os comandos marcados por * são comandos internos do CMD. Esses comandos são construídos junto ao CMD; eles fazem parte do interpretador. Por esse motivo, eles estão sempre disponíveis.

Os outros são comandos externos. Esses comandos são na verdade programas separados que podem ser utilizados pelo CMD para performar alguma tarefa. Eles podem estar armazenados em qualquer parte do computador, mas para que estejam acessíveis pelo CMD o caminho até eles deve ser armazenado na variável de ambiente PATH.

Um exemplo de comando externo pode ser o `CLIP`. Ao digitar esse comando e pressionar "enter",  o CMD precisa procurar por um programa chamado clip e executá-lo. Nesse caso, existe um programa clip.exe na pasta "System32" do Windows, cujo caminho é armazenado na variável PATH para que o CMD possa encontrá-lo.

Muitos softwares são baixados para ser usados como um comando no CMD, como o {% include postLink.html text="NodeJS" url="https://nodejs.org/" %} ou o {% include postLink.html text="cwebp" url="https://developers.google.com/speed/webp/docs/cwebp" %} (um processador de imagens).

## Resumo

O Batch Script é uma **linguagem de programação** que usamos para automatizar tarefas que serão executadas pela ferramenta de linha de comando do Windows, o CMD. Seu objetivo é facilitar a vida de quem usa o sistema operacional Windows.

Os comandos dessa linguagem podem ser digitados diretamente no interpretador, ou podem ser escritos separadamente em um arquivo com a extensão .cmd ou .bat . Uma vez criados, os arquivos podem ser executados a qualquer momento pelo usuário, ou de forma automatizada e programada.

Existem dezenas de comandos disponíveis para serem usados. Aqui listamos somente alguns deles. Para uma lista mais completa vale a pena ler a [lista de comandos do Windows](https://docs.microsoft.com/pt-br/windows-server/administration/windows-commands/windows-commands){: rel="noreferrer noopener nofollow" target="_blank"}.