---
layout: article
title: 'Como Melhorar o Desempenho de um PC com Windows 10?'
permalink: "/windows/:title"
description: "Aprenda como melhorar o desempenho do seu computador Windows."
categories: "windows"
lastUpdated: 2022-01-04 06:39:00
author: "Fernando"
order: 4
---
Ao longo do texto, discutimos algumas dicas que podem ajudar os usuários a melhorar o desempenho do computador. As abordagens são focadas principalmente na velocidade, mas também incluímos soluções que podem corrigir comportamentos estranhos em geral.

Embora muito do que é discutido aqui possa ser replicado em outros sistemas operacionais, lidamos especificamente com máquinas Windows 10.

## Use o plano de energia de alto desempenho
Um plano de energia é uma coleção de configurações que permitem ao usuário controlar, até certo ponto, como a energia é usada por certos componentes de uma máquina Windows. As configurações disponíveis para fazer parte de um plano variam dependendo do hardware do dispositivo; alguns componentes podem oferecer apenas uma opção, ou talvez duas ou três. Normalmente, um plano de energia pode ser usado para economizar energia, priorizar o desempenho ou equilibrar o desempenho e o uso de energia, dependendo das configurações adicionadas a ele.

É comum encontrar um ou dois planos de energia predefinidos pelo fabricante. Esses planos de energia podem ter nomes diferentes, mas geralmente há um denominado Equilibrado contendo configurações que não definem nenhuma preferência para desempenho ou economia de energia e outro denominado Economia de energia, contendo configurações para usar a quantidade mínima de energia. Em alguns casos, ainda podemos encontrar um plano de energia denominado Alto desempenho, que provavelmente configura os componentes do computador para priorizar o desempenho em vez da economia de energia.

Para ver todos os planos de energia disponíveis, podemos seguir as etapas abaixo:
- Digite painel de controle na caixa de pesquisa da barra de tarefas do Windows e clique em Painel de controle;
- Selecione Opções de Energia;
{% include post_img.html 
png="/assets/imgs_posts/windows/win-performance-improvement/control-panel.png"
webp="/assets/imgs_posts/windows/win-performance-improvement/control-panel.webp"
alt="Opções de Energia no Painel de Controle."
align="center"
%}
- Na janela que aparece, podemos identificar todos os planos de energia disponíveis na seção Planos preferenciais e clicando em  Mostrar planos adicionais (caso já tenha clicado, a mensagem diz Ocultar planos adicionais);
{% include post_img.html
png="/assets/imgs_posts/windows/win-performance-improvement/power-options-window.png"
webp="/assets/imgs_posts/windows/win-performance-improvement/power-options-window.webp"
alt="A janela de Opções de Energia."
align="center"
%}
- Se houver uma opção de alto desempenho, selecione o botão de opção ao lado dela.

Caso a referida opção não seja encontrada, ainda existe a possibilidade de criar um plano personalizado:
- No lado esquerdo da janela, clicamos em Criar um Plano de Energia;
- Na janela da página Criar um Plano de Energia, escolhemos um dos planos existentes para começar, damos um nome ao novo plano ou aceitamos o nome padrão Meu Plano Personalizado 1, e então clicamos em Avançar;
{% include post_img.html
png="/assets/imgs_posts/windows/win-performance-improvement/create-plan-step-1.png"
webp="/assets/imgs_posts/windows/win-performance-improvement/create-plan-step-1.webp"
alt="Planos de energia disponíveis."
align="center"
%}
- Uma nova janela pode ser aberta, mostrando os controles usuais de exibição e suspensão. Essas opções determinam a quantidade de tempo que deve passar desde que o usuário esteja longe do dispositivo antes que o sistema desligue a tela ou coloque-se em um estado de suspensão (o sistema mantém os dados na RAM gastando menos energia e mantém alguns componentes ativos, portanto o computador pode acordar com o pressionar de uma tecla no teclado do usuário, de outra máquina por meio de uma rede local (LAN) ou dispositivos USB).
{% include post_img.html
png="/assets/imgs_posts/windows/win-performance-improvement/create-plan-step-2.png"
webp="/assets/imgs_posts/windows/win-performance-improvement/create-plan-step-2.webp"
alt="Opções Desligar vídeo e Suspender atividade do computador."
align="center"
%}

O plano básico determina a coleção inicial de configurações para nosso novo plano, exceto para as configurações de exibição e sono, que são modificadas separadamente em outra janela. No entanto, uma vez que criamos o plano de energia, é possível alterar as configurações herdadas usando a opção Alterar configurações do plano, que  ao lado do plano personalizado. Este botão nos leva a uma janela (semelhante à mostrada abaixo) onde podemos modificar as configurações herdadas.
{% include post_img.html
png="/assets/imgs_posts/windows/win-performance-improvement/modify-plan.png"
webp="/assets/imgs_posts/windows/win-performance-improvement/modify-plan.webp"
alt="Janela Opções de Energia. São disponibilizadas várias opções para modificação do plano."
align="center"
%}

As opções na guia Configurações avançadas são personalizadas para o ambiente de hardware e software. Assim, as pessoas provavelmente encontrarão diferentes opções disponíveis em cada dispositivo. No entanto, geralmente há uma grande quantidade de controle minuciosamente detalhado sobre eventos relacionados ao consumo de energia. Use os botões mostrar mais/menos para explorar as opções disponíveis.

Lembre-se de que fazer com que os computadores priorizem o desempenho aumenta a quantidade de energia gasta pela máquina, portanto, no caso de ser um laptop, é melhor manter o carregador conectado.

## Desativar animações do Windows
No Windows, existem algumas animações destinadas a melhorar a experiência do usuário. Embora os efeitos visuais sejam leves e não façam nenhuma diferença para a maioria dos computadores, mesmo com um conjunto modesto de componentes de hardware, pode-se argumentar que eles prejudicam um pouco o desempenho do computador. Se o computador que está sendo usado apresentar  problemas de desempenho, desabilitar os efeitos pode ser uma ideia a se considerar.

Na caixa de pesquisa do Windows, clique em Configurações (representado pelo ícone de engrenagem) para abrir o aplicativo de configurações. No aplicativo, digite desempenho na caixa de pesquisa e selecione Ajustar a aparência e o desempenho do Windows. A caixa de diálogo Opções de desempenho será exibida e, na aba Efeitos Visuais, você pode controlar as animações em um nível granular.
{% include post_img.html
png="/assets/imgs_posts/windows/win-performance-improvement/performance-options.png"
webp="/assets/imgs_posts/windows/win-performance-improvement/performance-options.webp"
alt="Janela Opções de Desempenho. Várias opções de efeitos são disponibilizados com uma caixa de seleção do lado."
align="center" 
%}

## Libere Espaço na Máquina
Normalmente, um computador possui um dispositivo de armazenamento que centraliza todas as informações e programas que já foram salvos nele. Este dispositivo é geralmente um disco rígido (HDD) ou o mais rápido Solid State Drive (SSD), e alguns ainda usam uma versão híbrida deles chamada Hybrid Hard Disk (HHD). Independentemente da tecnologia, quando este dispositivo está ficando cheio, o computador pode começar a ter problemas para executar suas funções corretamente.

O sistema operacional Windows precisa de espaço para uma série de tarefas, como usar o arquivo de troca (swap file) e o arquivo de paginação (page file), evitar a fragmentação (ao usar HDD) e criar arquivos temporários. Sem espaço suficiente para executar essas tarefas, o sistema ou os programas executados nele ficarão mais lentos ou até mesmo travar.

Para verificar a quantidade de espaço restante em uma máquina com Windows 10, pressionamos a tecla Windows + E para abrir o Explorador de Arquivos e clicamos em Este Computador à esquerda. Podemos identificar a quantidade de espaço disponível em todos os dispositivos de armazenamento conectados ao computador na seção Dispositivos e unidades.

Não podemos definir uma quantidade mínima de espaço livre que uma unidade deve ter, mas, geralmente, é sugerido manter um mínimo de 15-20% do espaço total do HDD livre - provavelmente também é verdade para HHDs. Isso ocorre porque o processo de desfragmentação requer um mínimo de 15% para ocorrer corretamente. Ao usar um SSD, geralmente é sugerido manter 20% do espaço livre para um melhor desempenho. O valor apropriado pode ser menor devido ao excesso de provisionamento que os fabricantes implementam em seus SSDs.

Para ajudar a liberar espaço, temos várias abordagens, como remover programas ou arquivos não utilizados, compactar binários do Windows e outros. Nós os discutimos em [Liberar espaço em uma máquina]({% link _posts/2022-01-04-win-free-up-space-ptbr.md%}).

## Desligue os programas em execução em segundo plano
Muitos programas em execução simultaneamente também podem ser a razão para um computador lento, uma vez que eles precisam compartilhar o poder de processamento da máquina. Mesmo que estejamos usando ativamente apenas um programa, provavelmente haverá vários softwares em execução em segundo plano sem que percebamos.

Executando em segundo plano?
Um programa em execução em segundo plano não está em foco na tela e não é interativo em um determinado momento. Todos os programas que estão em execução em um computador, mas não estão recebendo interação do usuário nem sendo exibidos na tela, estão sendo executados em segundo plano. Por exemplo, se abrirmos o aplicativo Photoshop e, em seguida, minimizá-lo enquanto fazemos outra coisa, o Photoshop continuará sendo executado em segundo plano. Não precisa ser um programa que inicializamos; o sistema operacional ou outro programa pode inicializar algum programa que será executado sem que nenhum indicador apareça na tela do monitor.

Para ver os programas que estão sendo executados em uma máquina e quanto recurso eles estão consumindo, podemos usar o Gerenciador de Tarefas. Esta ferramenta, disponível no Windows 7 ou posterior, é um software de monitoramento que fornece informações sobre o uso atual dos recursos do computador por processos (programas em execução) e também lista os processos configurados para serem executados na inicialização. Podemos acessar o Gerenciador de Tarefas pressionando CTRL + SHIFT + ESC. Em seguida, seremos apresentados a uma tabela mostrando os programas que estão em execução e quantos recursos eles estão consumindo.

{% include post_img.html
png="/assets/imgs_posts/windows/win-performance-improvement/task-manager-processes-tab.png"
webp="/assets/imgs_posts/windows/win-performance-improvement/task-manager-processes-tab.webp"
alt="Aba Processos na janela Gerenciador de Tarefas. Uma tabela com informações sobre os programas em execução."
align="center"
%}

Nota: Se a janela mostrar uma visualização simplificada, basta clicar em Mais detalhes na parte inferior.

Podemos organizar os processos para descobrir qual deles está consumindo mais de um determinado recurso. Para isso, devemos clicar no cabeçalho correspondente ao recurso no topo da tabela. Por exemplo, se notarmos que o uso da memória está muito próximo ou em 100%, provavelmente será útil descobrir quais processos estão consumindo a maior parte desse recurso. Para fazer isso, nós clicamos no cabeçalho denominado Memória na parte superior da tabela e os processos são organizados automaticamente automaticamente para mostrar quais deles estão usando mais memória na parte superior, enquanto os que usam menos memória são enviados para a parte inferior. Podemos clicar mais uma vez para reverter a lista e colocar os processos que usam menos desse recurso no topo.

Assim que identificarmos os processos que estão drenando os recursos do nosso computador, podemos interrompê-los selecionando o processo e clicando no botão Finalizar tarefa no canto inferior direito da janela. Mas precisamos ser cautelosos aqui. Se um processo for necessário para o sistema ou outro programa em execução, esta ação pode fazer com que o sistema ou programa dependente pare de funcionar corretamente ou até mesmo trave. Podemos pesquisar informações sobre qualquer processo na Internet clicando com o botão direito em seu nome e selecionando Pesquisar Online. Desta forma, garantimos que sabemos quais são as consequências de desativá-lo.
{% include post_img.html
png="/assets/imgs_posts/windows/win-performance-improvement/search-online.png"
webp="/assets/imgs_posts/windows/win-performance-improvement/search-online.webp"
alt="Opção Pesquisar Online em um menu de contexto."
align="center"
%}

No Windows 10, também temos a opção de impedir que aplicativos baixados da Microsoft Store sejam executados em segundo plano por meio do aplicativo Configurações. Para isso, seguimos os passos abaixo:

- Use a caixa de pesquisa na barra de tarefas do Windows para encontrar o aplicativo Configurações;
- Clique em Privacidade;
- No painel esquerdo, clicamos em Aplicativos em segundo plano;
{% include post_img.html
png="/assets/imgs_posts/windows/win-performance-improvement/privacy-window.png"
webp="/assets/imgs_posts/windows/win-performance-improvement/privacy-window.webp"
alt="Janela que se abre ao clicar em Privacidade na página inicial do aplicativo Configurações."
align="center"
%}
- Aqui podemos determinar quais aplicativos podem ser executados em segundo plano, ligando ou desligando a chave seletora ao lado de cada recurso listado na seção "Escolha quais aplicativos podem ser executados em segundo plano".[1]
{% include post_img.html
png="/assets/imgs_posts/windows/win-performance-improvement/background-plan.png"
webp="/assets/imgs_posts/windows/win-performance-improvement/background-plan.webp"
alt="Janela Aplicativos em Segundo Plano. HÁ opções para controlar quais aplicativos podem ou não ser executados em segundo plano."
align="center"
%}

Ainda podemos impedir que todos os aplicativos sejam executados em segundo plano, desligando a chave seletora "Permitir aplicativos em segundo plano" na seção Aplicativos de segundo plano.

## Reinicie o Computador
Quando clicamos no botão desligar, o Windows 10 por padrão desconecta o usuário e, em seguida, copia uma versão compactada dos dados da memória RAM para o arquivo de hibernação, nomeado hiberfl.sys. Na próxima vez que o computador for ligado, o gerenciador de inicialização verificará e detectará os dados salvos anteriormente. Os dados são carregados de volta para a RAM e o sistema retoma a execução no ponto em que estava antes de desligar. O objetivo é acelerar o tempo de inicialização do Windows.

O problema surge quando algo que está fazendo com que o computador pareça lento está na RAM quando o sistema está copiando seu conteúdo para o arquivo de hibernação. Nessa situação, os bits indesejados também são copiados. Por isso, ligar o sistema pode trazer de volta um problema para a RAM.

O botão de reinicialização, por outro lado, desliga completamente o computador antes de reiniciá-lo. Este processo não inclui a criação de uma cópia do conteúdo da RAM, portanto, os dados problemáticos que poderiam estar nela não voltam a dar problemas.

## Desativar programas de inicialização
Uma causa comum de queda no desempenho é o carregamento de uma quantidade excessiva de programas, ou mesmo de alguns poucos programas pesados, durante a inicialização. Eles tendem a se acumular com o tempo, conforme você instala novos programas, consumindo recursos que poderiam ser usados para outra coisa.

O problema de desempenho que eles causam é mais aparente, pois o sistema parece levar cada vez mais tempo para ser completamente carregado. Além disso, se não fecharmos esses programas, eles continuarão sendo executados em segundo plano, fazendo com que os programas atualmente em uso pareçam cada vez mais lentos.

Alguns programas precisam ser executados na inicialização, como um antivírus, mas em muitos casos, estamos mais bem servidos executando programas conforme eles são necessários e fechando-os quando não são mais necessários. O legal é que é completamente possível determinar quais deles têm permissão para se auto-inicializar quando o computador está ligado e quais não.

Uma maneira de bloquear a execução de um programa durante a inicialização é desativando-o na guia Inicializar do Gerenciador de Tarefas. Siga as instruções abaixo para fazer isso:

- Abra o Gerenciador de Tarefas pressionando CTRL + Shift + ESC;
- A seguir, clicamos na aba Inicializar para ver uma lista de alguns softwares que são inicializados sempre que uma nova sessão do Windows é inicializada;
- Para desabilitar um dos programas da lista, clicamos com o botão direito no nome do software e selecionamos Desabilitar.

Se houver algum antivírus ou firewall inicializando junto com o Windows, é melhor não mexer com eles. Os demais são ótimos candidatos à desabilitação, mas cada caso deve ser analisado individualmente. As perguntas que devem ser feitas são: O que é este programa? e eu realmente preciso que ele seja executado durante a inicialização?

A guia Inicializar do Gerenciador de tarefas não mostra todos os programas de inicialização, no entanto. Na verdade, os programas de inicialização definidos pelas Políticas de Grupo ou pelo Agendador de Tarefas não aparecem na lista apresentada. Para ver uma lista mais completa, podemos usar um software chamado Autoruns. Autoruns é uma ferramenta da coleção do Windows Sysinternals que possui a lista mais abrangente de programas executados na inicialização e também fornece uma maneira fácil de desabilita-los.

Para baixar e instalar este recurso, seguimos as etapas abaixo:
- {% include postLInk.html text="Baixe o Autoruns" url="https://docs.microsoft.com/en-us/sysinternals/downloads/autoruns" %} no site da Microsoft.
-Autoruns vem compactado em um arquivo .zip. Para extraí-lo, clique com o botão direito do mouse no arquivo .zip e clique em Extrair tudo.
-Na janela Extrair Tudo indicamos a pasta onde queremos colocar o conteúdo do arquivo compactado, e a seguir clicamos em Extrair.

Depois de concluído o processo, navegamos até a pasta para a qual extraímos os arquivos. Lá, podemos encontrar um monte de arquivos executáveis que correspondem a diferentes versões do Autoruns, para que os usuários possam escolher a que melhor combina com seu ambiente de computador. Enquanto este artigo é escrito, as versões disponíveis são as seguintes:

autoruns.exe: esta é uma versão de 32 bits, portanto, os usuários que executam o Windows de 32 ou 64 bits em uma máquina com processador x86, x86-64 (x64) ou ARM podem executar este software. Esta versão apresenta uma interface gráfica de usuário (da sigla em inglês GUI), o que significa que os usuários podem interagir com o Autoruns manipulando ícones gráficos.

autoruns64.exe: esta é uma versão de 64 bits, portanto, os usuários que executam o Windows de 64 bits em uma máquina com processador x64 ou ARM64 podem executar este software. Embora uma versão de 32 bits funcione nessas configurações, uma versão de 64 bits pode aproveitar as vantagens de um sistema de 64 bits. Esta versão também apresenta uma GUI.

autoruns64a.exe: esta é uma versão de 64 bits projetada especificamente para Windows de 64 bits rodando em um computador com processador ARM64. As outras versões de 32 e 64 bits mencionadas anteriormente também podem ser executadas no ARM64, mas precisam de um processo de emulação (que já é fornecido pelo Windows on ARM) para converter suas instruções em algo que o processador possa executar. Este processo de emulação pode não funcionar corretamente para todos os programas e também afetar negativamente a velocidade de execução do programa, portanto, usar a versão adequada é uma escolha melhor. Esta versão também apresenta uma GUI.

autorunsc.exe: como o autoruns.exe, esta versão funciona em Windows de 32 bits e 64 bits em computadores com processadores x86, x64 e ARM. A diferença é que não oferece uma GUI; esta é uma versão de linha de comando. Como uma ferramenta de linha de comando, interagimos com ela usando comandos que são interpretados por um interpretador de linha de comando, como o CMD. [2]

autorunsc64.exe: esta é uma versão de linha de comando de 64 bits que será executada no Windows de 64 bits em um processador x64 ou ARM64.

autorunsc64a.exe: o último é uma versão de linha de comando de 64 bits desenvolvida para rodar nativamente em um computador com processador ARM64.

A melhor correspondência para um computador pode ser determinada verificando a versão do Windows (32 ou 64 bits) e a arquitetura da CPU (x86, x64 ou ARM). Essas informações podem ser encontradas em Configurações > Sistemas > Sobre. Procure a entrada Tipo de sistema. Lá podemos encontrar o sistema operacional e a versão do processador.  Com essas informações, agora podemos identificar a versão do arquivo que melhor se adéqua à nossa máquina.

Além dos arquivos apresentados na lista acima, podemos encontrar um arquivo chamado eula.txt e autoruns.chm. O primeiro contém informações relacionadas à licença. O último contém uma documentação de ajuda.

Assim que abrimos uma versão do Autoruns com GUI, vemos uma lista de todos os programas de inicialização que podem ser identificados, incluindo aqueles definidos pelo Windows ou softwares de terceiros. As caixas de seleção que aparecem ao lado de cada entrada são marcadas para cada programa que está ativo no momento. Para desabilitar um ou mais deles, devemos desmarcar as caixas correspondentes.

Os itens que desabilitamos na guia Inicializar do Gerenciador de Tarefas ou no Autoruns ainda são executáveis manualmente. Nós apenas evitamos que iniciem antes que sua funcionalidade seja necessária. Além disso, essa ferramenta não para um programa em execução. Mesmo assim, ainda é necessário escolher cuidadosamente qual podemos desativar com segurança.

Alguns programas podem ser reconfigurados para inicializar junto com o sistema operacional de novo. Nesse caso, cheque a configuração do programa para encontrar uma opção para interromper esse comportamento ou entre em contato com a empresa que fornece o software ou a comunidade que o mantém para obter ajuda.
Verifique se há vírus
Vírus, trojans, spyware, adware e outros programas maliciosos (malwares) podem causar grandes danos ao desempenho do sistema. Certifique-se de verificar se há algum malware oculto no sistema que possa estar deixando o PC lento, causando erros ou qualquer comportamento estranho em geral.

Para Windows, podemos baixar o {% include postLink.html text="Microsoft Safety Scanner" url="https://docs.microsoft.com/en-us/windows/security/threat-protection/intelligence/safety-scanner-download" %} para encontrar e remover programas maliciosos conhecidas. Como a Microsoft observa na página de download,  este não é o tipo de programa que monitora o computador; ele é executado apenas quando acionado diretamente pelo usuário. Ele também para de funcionar 10 dias após o download. Talvez seja uma forma de forçar o usuário a baixar a versão mais atualizada do programa, que será capaz de detectar ameaças identificadas mais recentemente.

Para proteção em tempo real, você deve usar um antivírus (também conhecido como antimalware). O Windows tem um antivírus integrado chamado Microsoft Defender, mas podemos encontrar várias soluções antivírus de terceiros, como Avast ou Kaspersky Anti-Virus. Alguns softwares possuem uma versão gratuita e outra paga, cabe a você decidir se a versão gratuita é adequada para suas necessidades.

Além disso, certifique-se de ter apenas um antivírus de terceiros em execução no seu computador. Vários programas antivírus podem causar problemas de desempenho ou detecção de vírus falsa. O Microsoft Defender será desabilitado ou executado em modo passivo automaticamente no WIndows para desktop, mas há exceções para versões do Windows Server que você pode aprender em {% include postLink.html text="Artigo sobre compatibilidade do Microsoft Defender Antivirus" url="https://docs.microsoft.com/en-us/microsoft-365/security/defender-endpoint/microsoft-defender-antivirus-compatibility?view=o365-worldwide" %}. Portanto, na maioria dos casos não há problema em manter um antivírus de terceiros e o Microsoft Defender no mesmo dispositivo, mas nós não podemos garantir esse comportamento para dois antivírus de terceiros em execução na mesma máquina.

## Procure por Erros
Um erro é qualquer problema que surge inesperadamente, prejudicando a atividade do computador. Com o tempo, qualquer computador pode acumular problemas (por exemplo, arquivos corrompidos, setores defeituosos, arquivos ausentes, etc.) que podem aparecer como erros durante a execução de alguma tarefa. Felizmente, o Windows vem com ferramentas para localizar e resolver alguns desses problemas.

Um interpretador de linha de comando é necessário para executar as ferramentas de linha de comando que estamos prestes a usar. O prompt de comando (CMD) é suficiente para essa função, mas certamente poderíamos usar outro como o PowerShell. Para abrir o CMD, digitamos seu nome na caixa de pesquisa do Windows, clicamos com o botão direito do mouse no ícone Prompt de Comando e selecionamos Executar como Administrador, que é um requisito de nível de permissão para executar alguns recursos. Isso nos dá acesso completo e irrestrito aos arquivos e pastas por meio do prompt de comando.

Na janela do Prompt de Comando, digitamos ```DISM /online /cleanup-image /ScanHealth``` e pressionamos Enter para executá-lo. Isso analisará os arquivos do sistema no armazenamento de componentes do Windows, o que será essencial para o próximo comando. Isso nos permitirá saber se há algum problema com os arquivos dessa pasta. Se o ```DISM``` relatar um problema, usamos o comando``` DISM /online /cleanup-image /RestoreHealth``` para resolvê-los.

Assim que terminarmos com o ```DISM```, podemos usar o comando``` SFC``` para verificar a integridade dos arquivos de sistema protegidos e recuperar os arquivos ausentes e corrompidos usando versões saudáveis do armazenamento de componentes (component store). Ainda no Prompt, execute o comando ```SFC  /scannow``` para iniciar o processo. Assim que terminar, uma das mensagens abaixo pode ser exibida:

● A Proteção de Recursos do Windows não encontrou nenhuma violação de integridade - indica que o sistema não possui nenhum arquivo corrompido ou ausente;
● A Proteção de Recursos do Windows não pôde executar a operação solicitada - Isso significa que o PRW não tem certeza sobre a tarefa não comprometeria a integridade dos arquivos do sistema. Para superar esse problema, você pode seguir as etapas em Verificar e corrigir erros no Windows;
● A Proteção de Recursos do Windows encontrou arquivos corrompidos e os reparou com sucesso. Os detalhes estão incluídos em CBS.Log %WinDir%\Logs\CBS\CBS.log - o processo foi executado com êxito; problemas foram encontrados e corrigidos;
● A Proteção de Recursos do Windows encontrou arquivos corrompidos, mas não pôde corrigir alguns deles. Os detalhes estão incluídos em CBS.Log %WinDir% \Logs\CBS\CBS.log - a ferramenta executou sua tarefa, mas alguns arquivos continuaram corrompidos. Essa situação pode ser resolvida por meio de uma intervenção mais direta, ou seja, substituímos manualmente o arquivo.

Outra ferramenta de linha de comando que pode ser usada para buscar e corrigir problemas é o ```CHKDSK```. Esta ferramenta é usada para verificar um disco especificado e reparar ou recuperar dados, se necessário. Diferente de ```SFC```,  ```CHKDSK``` verifica todo o disco para encontrar e corrigir erros em arquivos e no próprio sistema de arquivos. Na janela CMD, digitamos ```CHKDSK /r``` e pressionamos enter. Uma mensagem pedindo para agendar o processo para a próxima vez que o computador for ligado pode aparecer, pressione a tecla Y e pressione Enter para confirmar.

Para saber mais detalhes sobre os comandos mencionados acima, consulte [Verificar e corrigir erros no Windows]({% link _posts/2022-01-04-win-fix-errors-ptbr.md %}).

## ReadyBoost
ReadyBoost é um recurso que foi introduzido no Windows Vista que permite ao usuário usar um dispositivo de memória flash externo, (por exemplo, Pen Drive, SD, CompactFlash) para armazenar em cache o conteúdo do disco rígido, reduzindo a necessidade de acesso ao disco rígido. 

O ReadyBoost pode mostrar algum aumento perceptível no desempenho caso o seu computador use um HDD e não tenha RAM suficiente para atender às suas necessidades. Quando o dispositivo de armazenamento é rápido o suficiente para tornar o ReadyBoost superfluo, esse recurso é desativado. Normalmente, essa velocidade é alcançada ao usar um SSD.

Para saber mais sobre esse recurso e como configurá-lo, preparamos um [texto sobre o assunto]({% link _posts/2022-01-04-win-readyboost-ptbr.md %}).

## Desativar ou limitar a indexação do Windows
O Windows tem um serviço de indexação que rastreia arquivos e pastas por nome, propriedades e (em formatos suportados) conteúdo. As informações coletadas são armazenadas em um banco de dados, que é acessado quando o usuário tenta encontrar algo por meio de alguma caixa de pesquisa, como a da barra de tarefas do Windows. Isso nos permite encontrar alguns itens mais rapidamente.

O sistema constrói primeiro o índice após o Windows iniciar e continua a partir daí em execução em segundo plano, adicionando novos itens ao banco de dados e modificando ou excluindo os existentes. A tarefa em segundo plano de coleta de dados foi projetada para ser executada com baixa prioridade, o que significa que essa tarefa usa uma pequena parte da capacidade de processamento da CPU e do uso do disco quando outros processos, presumivelmente, mais importantes estão em execução. Isso faz com que a indexação seja executada mais lentamente, mas ajuda a evitar um impacto perceptível no desempenho.

No entanto, alguns usuários ainda reclamam do uso de recursos para esta tarefa, especialmente o uso da CPU. Caso seja determinado que qualquer problema de desempenho seja causado por esta tarefa, é possível limitar sua atividade. Podemos encontrar essa opção navegando para Configurações > Pesquisar > Pesquisando no Windows. Ao selecionar a opção clássica, que aprece na seção Localizar Meus Arquivos, nós restringimos o serviço para pesquisar apenas conteúdos da área de trabalho ou das Bibliotecas.

Embora provavelmente seja desnecessário devido ao mecanismo usado para evitar qualquer problema de desempenho, é possível interromper essa funcionalidade por meio do aplicativo Serviços. Para acessá-lo, digitamos Serviços na caixa de pesquisa da barra de tarefas e clicamos no aplicativo Serviços nos resultados. É apresentada uma lista de todos os serviços disponíveis. Em seguida, clicamos com o botão direito do mouse no Windows Searcher e selecionamos propriedades. Na janela Propriedades, mude o Tipo de inicialização para desativado. Para ativar novamente, mude o Tipo de inicialização para Automático.

Às vezes, o índice é a única fonte em que um sistema de pesquisa procura o item que está sendo pesquisado. Precisamente, o recurso de pesquisa na barra de tarefas do Windows pode não encontrar arquivos se o índice de pesquisa estiver desativado. Além disso, você não poderá usar a caixa de pesquisa na janela do Explorador de Arquivos para localizar arquivos nas bibliotecas. Na maioria dos casos, porém, a falta de um índice de pesquisa apenas retarda o processo de pesquisa.

## Gerenciar o Arquivo de Página
Um arquivo de paginação é um arquivo especial, geralmente armazenado no mesmo dispositivo que contém os arquivos do sistema, destinado a armazenar temporariamente dados que não cabem na memória RAM, mas que deveriam estar lá. Os dados movidos para o arquivo de paginação  ficam lá e aguardam até que algum espaço seja liberado na memória física (a memória RAM de fato). Quando o processador precisa de um dado que está no arquivo de paginação, ele espera que os dados sejam carregados de volta na memória para poder acessá-los. Considerando que um dispositivo de armazenamento (por exemplo, HDD ou SSD) é muito mais lento do que a RAM e os dados precisam viajar para a RAM, acessar os dados durante uma atividade torna o computador lento. Um SSD certamente ameniza esse problema, mas não o resolve.

Como um arquivo de paginação é usado no caso de o sistema estar com a RAM real saturada, geralmente não há necessidade de tocá-lo. No entanto, se o Windows estiver usando esse arquivo com muita frequência, ele pode supostamente se beneficiar de alguns ajustes nas configurações desse componente.

O Windows pode lidar com até 16 arquivos de página. Esse recurso nos permite ter vários dispositivos de armazenamento, cada um contendo um arquivo de paginação. É importante observar, entretanto, que um novo arquivo de paginação deve residir em uma unidade interna. Isso quer dizer que nada de pen drives, cartões CompactFlash, HDD externo ou qualquer outro dispositivo externo que possa ser conectado a uma porta USB. Isso provavelmente se deve ao fato de que um dispositivo externo pode ser removido a qualquer momento e, nesse caso, dados importantes podem ser perdidos. Por outro lado, um dispositivo interno requer mais trabalho para ser removido, portanto, ter um arquivo de paginação armazenado nele tem menos chances de causar problemas.

Segundo a Microsoft, em um sistema configurado para ter várias páginas, o arquivo de página que responde primeiro (provavelmente a uma solicitação de gravação) é o usado. Isso significa que um arquivo de paginação em um dispositivo de armazenamento mais rápido e/ou menos ativo é usado com mais frequência. Se um dispositivo estiver ocupado quando o sistema precisar usar o arquivo de paginação, o sistema usará o arquivo de paginação no outro dispositivo. 

Observação: Essas informações são baseadas principalmente em um artigo bastante antigo sobre a configuração ideal do arquivo de paginação no Windows XP e em uma pequena seção discutindo arquivos de múltiplas páginas em um artigo recentemente atualizado intitulado Como determinar o tamanho apropriado do arquivo de paginação para versões de 64 bits do Windows . Ambos os textos postados no site da Microsoft.

Para definir um novo arquivo de paginação, precisamos acessar as configurações do arquivo de paginação, o que leva algumas etapas.
- Clique com o botão direito do mouse no botão Iniciar do Windows e, em seguida, clique em Sistema;
- Selecione as Configurações avançadas do sistema no painel esquerdo;
- Na janela Propriedades do Sistema, selecionamos a guia Avançado;
- Nós clicamos então no botão Configurações na seção Desempenho;
- Na caixa de diálogo Opções de Desempenho, selecionamos a guia Avançado;
- Finalmente, clicamos no botão Alterar em Memória Virtual para acessar a caixa de diálogo de configuração da memória virtual.

Se a configuração padrão não foi modificada, deve haver um único arquivo de paginação criado no mesmo volume onde o sistema está instalado, que geralmente é identificado pelo rótulo c:. Para adicionar um novo arquivo de página, clicamos no volume onde o novo arquivo de página estará localizado e, em seguida, escolhemos entre Tamanho personalizado ou Tamanho gerenciado pelo sistema. Se escolhermos a primeira opção, um Tamanho inicial e um Tamanho máximo devem ser definidos em seus campos apropriados. O Windows decidirá esses parâmetros caso escolhamos a segunda opção. Quando estiver pronto, podemos clicar no botão Definir.

Não devemos cometer o erro de criar dois ou mais arquivos de paginação em volumes no mesmo dispositivo. Por exemplo, se um PC tiver um disco rígido dividido em dois volumes c: e d: e definirmos um arquivo de paginação em cada um deles, o computador pode ficar mais lento. Nessa configuração, o disco rígido terá trabalho extra lendo dados de diferentes partes do disco, em vez de ler os dados de uma região contígua do disco.

Observe que os valores estão em megabytes, portanto, um valor de 300 no Tamanho inicial (MB) significa que 300 megabytes são inicialmente reservados para o arquivo de paginação.

Se o resultado desejado for ter um arquivo de paginação exclusivo, basta clicar no volume do qual deseja remover o arquivo de paginação e selecionar Nenhum arquivo de paginação.

## Use a Restauração Rápida
O Windows oferece um recurso que permite aos usuários reinstalar o Windows usando os arquivos do sistema disponíveis no armazenamento de componentes (geralmente localizado em c:\Windows\WinSxS) e os arquivos localizados em uma partição de recuperação criada pelo fabricante do PC (também conhecida como partição OEM), caso exista, ou até mesmo arquivos de sistema baixados da web.

As etapas envolvidas no uso desse recurso permitem que o usuário decida se deseja manter seus arquivos pessoais ou apagar tudo completamente. Em qualquer caso, qualquer atualização do sistema nos últimos 28 dias é removida, os aplicativos padrão do Windows são restaurados e atualizados para a versão mais recente. Outros softwares e aplicativos adquiridos anteriormente na Windows Store são removidos e devem ser reinstalados manualmente pelo usuário.

Reiniciar um computador para uma instalação limpa do Windows 10 pode ser uma alternativa, caso nenhuma das opções listadas acima tenha o efeito desejado. Encontramos essa opção na página Configurações > Atualização e Segurança > Recuperação. Na página Recuperação, clicamos no botão Começar agora na seção Restaurar o PC. Um guia de reinicialização será aberto, para que possamos configurar a operação.

- Em primeiro lugar, podemos escolher manter ou remover quaisquer arquivos pessoais, incluindo arquivos de mídia e documentos;
{% include post_img.html 
png="/assets/imgs_posts/windows/win-performance-improvement/push-button-step-2.png"
webp="/assets/imgs_posts/windows/win-performance-improvement/push-button-step-2.webp"
alt="Janela Restaurar o PC.São apresentadas as opções Manter meus arquivos e Remover tudo."
align="center"
%}
- Qualquer caminho nos levará a uma janela que oferece as opções de Baixar o Windows e Reinstalar, ou usar arquivos de sistema que já estão no computador.
{% include post_img.html 
png="/assets/imgs_posts/windows/win-performance-improvement/push-button-step-3.png"
webp="/assets/imgs_posts/windows/win-performance-improvement/push-button-step-3.webp"
alt="Janela Restaurar o PC. São apresentadas as opções Download da nuvem e Reinstalação local."
align="center"
%}
- Agora são mostradas algumas informações sobre a configuração definida até agora. Se clicarmos em Alterar Configurações, teremos duas opções para ativar ou desativar.
  - Aplicativos pré-instalados: restaura todos os aplicativos instalados pelo fabricante do PC. Esta opção provavelmente precisa da partição OEM configurada pelo fabricante;
  - Download Windows: Permite que o usuário escolha novamente entre o Windows baixado e a instalação atual como a fonte dos arquivos de sistema para redefinir o Windows;
Uma vez que as opções estão definidas conforme desejado, clicamos em Confirmar.
{% include post_img.html 
png="/assets/imgs_posts/windows/win-performance-improvement/push-button-step-4.png"
webp="/assets/imgs_posts/windows/win-performance-improvement/push-button-step-4.webp"
alt="Janela Restaurar o PC. São apresentadas as opções Restaurar aplicativos pré-instalados? e Baixar o Windows?."
align="center"
%}
- Clique em Avançar;
{% include post_img.html 
png="/assets/imgs_posts/windows/win-performance-improvement/push-button-step-5.png"
webp="/assets/imgs_posts/windows/win-performance-improvement/push-button-step-5.webp"
alt="Janela Restaurar o PC. São exibidas informações sobre as configurações feitas até o momento."
align="center"
%}
- Algumas informações sobre o que será removido são apresentadas. É recomendado ler toda mensagem antes de prosseguir. Também existe a opção Exibir os aplicativos que serão removidos. Caso clique nela, uma lista dos programas que serão afetados. Dependendo do caso, também pode ser mostrado uma opção Exibir a Lista de Drives que serão Afetados, que nos permite selecionar qual drive será afetado pela operação;
{% include post_img.html 
png="/assets/imgs_posts/windows/win-performance-improvement/push-button-step-6.png"
webp="/assets/imgs_posts/windows/win-performance-improvement/push-button-step-6.webp"
alt="Janela Restaurar o PC. Um resumo de tudo que vai acontecer durante a restauração é apresentado."
align="center"
%}
- Uma vez que tudo estiver configurado, podemos clicar em Restaurar para iniciar o processo.

Se o PC estiver tão lento que parece impossível até mesmo acessar o guia de reinicialização, podemos acessar essa opção por outros meios.
- Mantenha pressionada a tecla Shift e clique no botão Reiniciar. Isso o levará ao Ambiente de Recuperação do Windows (WinRE), que contém várias ferramentas que podem ser usadas para recuperar o Windows;
- Na tela do WinRE, selecione Solução de problemas > Restaurar o PC.

Ainda podemos executar a primeira etapa na tela de login.  Antes de assinar, clicamos no botão liga / desliga, mantenha pressionada a tecla Shift e selecione a opção Reiniciar para chegar à tela do WinRE.

## Certifique-se de que há RAM Suficiente
Sempre que executamos um programa em uma máquina convencional, os dados relacionados a ele são carregados de um dispositivo de armazenamento permanente - na maioria dos casos é uma unidade de disco rígido (da sigla em inglês HDD) ou uma Unidade de Estado Sólido (da sigla em inglês SSD) - para uma memória temporária - principalmente a chamada Memória de Acesso Aleatório (da sigla em inglês RAM) -, para que possam ser acessados pelo processador conforme necessário. Existem mais detalhes sobre a memória em arquitetura de computador, mas eles estão além do escopo desta seção.
 
Apesar dos avanços que surgiram nos HDDs modernos ou nos SSDs mais rápidos, suas velocidades estão longe de atingir as velocidades dos modelos de RAM contemporâneos. Mesmo considerando este fato, se não houver espaço suficiente na RAM, alguns dos dados devem ser mantidos no armazenamento no arquivo de paginação (pagefile.sys). Pelo menos até que haja mais espaço na RAM.

Quando o processador precisa acessar alguns dados relacionados a um programa em execução e esses dados foram mantidos na unidade de armazenamento mais lenta, ele deve aguardar que o sistema libere espaço suficiente na RAM para acomodar os dados necessários e aguardar o dados a serem carregados na RAM. Como resultado, essa dinâmica desacelera a tarefa que está sendo executada. O atraso é menos pronunciado ao usar um SSD, mas ainda está lá, afetando a experiência do usuário.

A guia Memória do Monitor de Recursos mostra informações que podem ajudar os usuários a determinar a adequação da memória atualmente instalada. Para acessar essa ferramenta, digitamos Monitor de recursos na caixa de pesquisa da barra de tarefas do Windows e selecionamos o software Monitor de recursos que aparece na lista resultante. Na janela Monitor de recursos, selecione a guia Memória para ver os dados instantâneos (i.e., em tempo real) e o histórico recente do uso da memória RAM.

Para acessar o Monitor de Recursos digite monitor de recursos na caixa de pesquisa da barra de tarefas do Windows, e selecione Monitor de Recursos nos resultados.  Na janela do Monitor de Recursos, clique na aba Memória. Lá podemos ver uma barra horizontal que nos dá uma representação visual do uso atual de RAM (não inclui o uso do arquivo de paginação). A parte verde da barra indica a porcentagem correspondente à memória em uso; se estiver chegando a 100% com frequência, é uma boa evidência de que a RAM disponível não é suficiente para nosso uso. Observe também a linha verde no gráfico à direita, que representa o número de Falhas Graves/s (falhas graves por segundo); se a linha alcançar o topo do gráfico por longos períodos de tempo, significa que o computador está tendo que ler os dados do armazenamento com muita frequência, pois não os encontra na RAM.
{% include post_img.html 
png="/assets/imgs_posts/windows/win-performance-improvement/resource-monitor-memory-tab.png"
webp="/assets/imgs_posts/windows/win-performance-improvement/resource-monitor-memory-tab.webp"
alt="A aba Memória no Monitor de Recursos. Tabelas e gráficos mostram gráficamente os dados de uso da memória RAM."
align="center"
%}

Para evitar queda de desempenho relacionada à falta de RAM, podemos mudar nosso perfil de uso, usar ferramentas que consumam menos deste recurso ou instalar mais RAM. Atualizar a RAM pode ser complicado. Existem vários detalhes que devemos levar em consideração antes de qualquer mudança, como quanta memória é necessária, quanta memória a máquina pode suportar, o tipo de RAM necessária, etc. Michael Crider escreveu {% include postLink.html text="um ótimo artigo sobre iso no blog How-To Geek" url="www.howtogeek.com/346541/how-to-upgrade-or-replace-your-pcs-ram/" %} que compila as informações necessárias para fazer a instalação.

## Considere comprar um SSD
Historicamente, a maioria dos computadores tem usado <dfn><abbr title="Hard Disk Drive"> HDD </abbr> </dfn> s para armazenamento permanente de dados. Este dispositivo armazena seus dados em discos que são mantidos girando sob um componente do cabeçote de leitura/gravação conectado a uma estrutura chamada braço, que é controlada pelo atuador. Os pratos giram em alta velocidade enquanto a cabeça de leitura/gravação cria ou recupera magneticamente os dados do disco.

Hoje em dia, vemos uma adoção cada vez maior de uma tecnologia mais moderna: o <dfn><abbr title="Solid-state drive"> SSD </abbr> </dfn>. Esta tecnologia de armazenamento armazena os dados em chips de memória flash, aplicando tensões precisas aos transistores que fazem parte dela, criando um padrão específico de 0s e 1s que representará os dados armazenados. Não há movimentos mecânicos dentro de um SSD; se você abrir este dispositivo, não verá nem discos giratórios nem um braço atuador lendo ou gravando dados nele.

O fato do SSD não possuir partes móveis lhe confere diversas vantagens sobre o HDD, como silêncio durante a execução, menor consumo de energia, resistência a danos por choque físico (embora possa acontecer), além de impactar positivamente no desempenho do computador. Essa tecnologia pode acessar um dado tão rapidamente quanto qualquer outro, não importa onde eles estejam localizados no dispositivo de armazenamento. É possível perceber o efeito do SSD quando o computador é inicializado rapidamente ou os programas abrem quase instantaneamente. Quando a máquina fica sem memória, o que leva ao uso do dispositivo de armazenamento permanente para liberar espaço na memória RAM, um SSD evita grandes quedas no desempenho. Isso se aplica não apenas a jogadores ou editores profissionais, mas também a usuários comuns.

No entanto, também existem desvantagens das unidades de estado sólido, incluindo custo, maior probabilidade de apresentar erros irrecuperáveis e eles tendem a ter uma vida mais curta (embora não seja realmente um grande problema para o usuário comum).

Você pode encontrar muitos tutoriais com instruções sobre como instalá-lo em um desktop, laptop ou {% include postLink.html text="computadores all-in-one" url="https://youtu.be/dA7gsRlA4Kc" %}.

[1] Toggle switch (widget) - Wikipedia
https://en.wikipedia.org/wiki/Toggle_switch_(widget) 

Cmd.exe - Wikipedia
https://pt.wikipedia.org/wiki/Cmd.exe 