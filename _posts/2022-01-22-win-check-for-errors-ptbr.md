---
layout: article
title: 'Verificar e Corrigir Erros no Windows'
description: 'No Windows nós podemos usar o DISM, SFC e o CHKDSK para concertar erros no sistema. É o que vamos aprender.'
permalink: '/windows/:title'
categories: ["windows"]
tags: sfc, dism, chskdsk, error, sistema
date: 2022-01-22 16:20:00
lastUpdated: 2022-01-22 16:20:00
author: "Fernando Bonfim"
excerpt_separator: <!--more-->
---
Aqui vamos aprender a usar as ferramentas de linha de comando integradas ao Windows para localizar e resolver problemas que podem eventualmente aparecer como erros.
<!--more-->

## Abra um Interpretador de Linha de Comando
As ferramentas que vamos usar aqui são principalmente ferramentas de linha de comando. Isso significa que eles não apresentam uma janela gráfica contendo botões para ativar sua funcionalidade. Em vez disso, interagimos com este programa usando texto que é interpretado por um interpretador de linha de comando (também conhecido como interface de linha de comando ou shell).

Aqui, nós usamos o Prompt de Comando (CMD) para fazer uso das ferramentas apresentadas nesta seção, mas sinta-se à vontade para usar qualquer interface de linha de comando com o qual se sinta confortável. Para abrir o Prompt de Comando, digite CMD na caixa de pesquisa na barra de tarefas do Windows, clique com o botão direito do mouse no software Prompt de Comando e selecione Executar como Administrador (precisamos de privilégios administrativos para executar as ferramentas). Com o CMD aberto, podemos começar a consertar o sistema.

## Verifique Tudo Usando o DISM
Na próxima seção nós vamos usar o System File Checker (SFC), mas antes nós vamos executar outra ferramenta de linha de comando chamada Deployment Image Servicing and Management (DISM) para preparar o sistema. O DISM é um programa que permite ao usuário modificar um Windows em execução ou uma imagem do Windows a partir de um arquivo .wim, .vhd ou .vhdx. Podemos adicionar, remover ou modificar recursos, pacotes, drivers, definições de configuração e muito mais. Esse recurso nos ajudará a encontrar e corrigir arquivos corrompidos no armazenamento de componentes (Component Store) do Windows.

O armazenamento de componentes (cujo endereço no sistema é ```%windir%/WinSxS```), por outro lado, é uma pasta que contém todos os arquivos do sistema (arquivos essenciais para o correto funcionamento do sistema), incluindo DLLs, do Windows. Na verdade, todos os arquivos de sistema encontrados em outros lugares, como na pasta ```%windir%\System32```, são apenas cópias dos arquivos contidos no WinSxS. Esta pasta oferece suporte à atualização e personalização dos recursos do Windows.

Os arquivos dessa pasta são usados pela próxima ferramenta. Dessa forma é necessário garantir que estejam em bom estado antes de usá-la. Para isso, o ```dism``` compara esses arquivos com versões corretas que ele encontra através do Windows Update, e então troca aqueles que ele encontrar problemas.

Observação: ```%windir%``` é uma variável de ambiente que armazena o caminho da pasta Windows no formato ```<letra-da-unidade>:\windows```. Por exemplo, considerando c: como a unidade do sistema, ```%windir%/WinSxS``` está se referindo a ```c:\windows\WinSxS```.

Podemos verificar se os arquivos no armazenamento de componentes estão em boas condições usando o seguinte comando:

~~~ batch
DISM /online /cleanup-image /scanHealth
~~~

Caso indique algum erro, o código a seguir fará outra análise e substituirá os arquivos defeituosos conhecidos nas versões íntegras pelo Windows update.

~~~ batch
DISM /online /cleanup-image /RestoreHealth C:\RepairSource\Windows
~~~

Os parâmetros utilizados com a ferramenta DISM em ambas as situações estão descritos abaixo:

```/online```: especifica o Windows em execução atual como o sistema de destino;
```/cleanup-image```: define a ferramenta para realizar operações de limpeza e recuperação na imagem. A operação específica é determinada por outros parâmetros, como os dois seguintes;
```/scanHealth```: verificará a integridade dos arquivos de armazenamento de componentes do Windows 10;
```/RestoreHealth```: isso verificará e reparará problemas no armazenamento de componentes.

Nota: apenas uma operação pode ser definida por vez. Ou você executa ```/scanHealth``` ou ```/RestoreHealth```, mas não os dois.

Se o Windows Update estiver com problemas, podemos usar o parâmetro ```/source ``` junto com ```/RestoreHealth``` para apontar outra fonte para versões íntegras. Essa origem pode ser o diretório do Windows de uma imagem do Windows montada. Aqui, uma imagem do Windows é como  nos referimos a uma cópia deste sistema operacional, que pode ser baixada no [site da Microsoft](https://www.pcmag.com/encyclopedia/term/mount){: rel="noreferrer nofollow noopener" target="_blank"}. Uma imagem é montada quando seu conteúdo é extraído para uma pasta, o que os torna acessíveis para manipulação.

~~~ batch
DISM /online /cleanup-image /RestoreHealth /source: :C:\RepairSource\Windows\limitAccess
~~~

Usando o comando acima, configuramos a ferramenta para substituir o sistema de arquivos corrompido por versões íntegras encontradas na pasta do Windows a partir de uma imagem do Windows montada. Também adicionamos o parâmetro /limitAccess para impedir que o DISM entre em contato com o Windows Update para imagens online, pois foi determinado que ele estava quebrado.

## Vamos Consertar o Sistema
Depois de garantir que o armazenamento de componentes esteja bem, estamos prontos para usar o próximo recurso, o Verificador de arquivos do sistema (SFC). <dfn>SFC</dfn> é um recurso de linha de comando que verifica arquivos de sistema Windows corrompidos e ausentes e os substitui por uma versão íntegra encontrada no armazenamento de componentes do Windows. É por isso que tivemos que verificar o armazenamento de componentes anteriormente. Se os arquivos no armazenamento de componentes estiverem comprometidos, não faz sentido executar o recurso SFC.

A sintaxe para usar este utilitário é ```sfc <options>```, onde as opções devem ser substituídas por um dos parâmetros disponíveis - digite ```sfc /?``` e pressione Enter para ver os parâmetros possíveis . O parâmetro mais comum usado é ```/scannow```, que define o recurso para verificar todos os arquivos do Windows e substituir os defeituosos. Para usar essas opções, digite ```sfc /scannow``` no CMD e pressione Enter para iniciar o processo. Esse processo pode demorar um pouco para ser concluído, mas podemos continuar a fazer outra tarefa, desde que não fechemos a instância CMD em execução. O processo será concluído mais rapidamente se deixarmos o computador sozinho.

## O Comando ```chkdsk```

A próxima ferramenta que vamos usar é chamada ```chkdsk```, que é uma abreviação para o utilitário Check Disk. Essa ferramenta de linha de comando é usada para verificar se há erros no sistema de arquivos e seus metadados. A sintaxe para usar este recurso é ```chkdsk [letra da unidade] [opções]```.

A parte ```[letra da unidade]``` deve ser substituída pela letra que identifica o volume que você deseja verificar; você pode verificar essas informações na pasta Este PC do Explorador de Arquivos ou usando o software Gerenciamento de Disco. Se não for definido, o volume atual é selecionado. Por exemplo, se você executar este comando em um interpretador de linha de comando aberto na unidade c:, este é o volume que será verificado.

A parte ```[options]``` pode ser substituída por um ou mais parâmetros disponíveis - digite ```sfc /?```, e pressione Enter para ver os parâmetros possíveis. ```/f``` e ```/r``` são opções comuns mencionadas em tutoriais espalhados pela internet. O primeiro instrui o ```chkdsk``` para corrigir quaisquer erros detectados. O segundo instrui o ```chkdsk``` para corrigir quaisquer erros que detecte, além de identificar e recuperar informações legíveis de setores defeituosos.

Suponhamos que queremos verificar um dispositivo de armazenamento identificado com c:. Nesse caso, poderíamos digitar ```chkdsk c: /r``` e pressionar Enter. O processo de verificação começa imediatamente, ou uma mensagem é exibida.  A mensagem pode estar perguntando se você deseja adiar a análise do disco para a próxima vez que seu PC reiniciar ou para [desmontar](https://www.pcmag.com/encyclopedia/term/unmount){: target="_blank" rel="noreferrer noopener nofollow"} o volume que deseja verificar. Desmontar seu volume pode causar perda de dados, portanto, essa abordagem deve ser evitada. Agendar a análise para a próxima vez que seu PC iniciar é uma opção melhor.

Nota: os comandos ```chkdsk [letra da unidade] /f /r``` e ```chkdsk [letra da unidade] /r``` são redundantes, pois ```/r``` implica em ```/f```.

Existe também uma versão com interface gráfica dessa ferramenta. Para acessar essa alternativa siga os passos a seguir:

1. Pressione a Tecla do Windows + E para abrir o explorador de arquivos (File Explorer);
2. No painel de navegação, localize e clique sobre Este Computador;
3. Na seção dispositivos e unidades, com o botão direito sobre o Disco Local (c:), e selecione propriedades;
4. Clique na aba Ferramentas;
5. Na seção Verificação de Erros, clique no botão Verificar.

Na janela que se abrir você pode iniciar uma nova verificação clicando em Verificar Unidade. 