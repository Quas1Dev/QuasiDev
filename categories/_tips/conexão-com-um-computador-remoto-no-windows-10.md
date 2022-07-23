---
title: Conexão com um Computador Remoto no Windows 10
layout: article
permalink: /windows/:title
description: "Como usar o "
categories:
  - Windows
tags:
  - comexão-remota
  - suporte
date: 2022-07-20T23:57:06.994Z
lastUpdated: 2022-07-20T23:24:29.598Z
author: Fernando Bonfim
excerpt_separator: <!--more-->
---
As vezes você precisa fazer alguma atividade em um computador que só pode ser feita com você sentado na frente do computador. Para essas situações a Microsoft disponibiliza um programa chamado **Conexão de Área de Trabalho Remota**, que vem instalado junto do Windows e antigamente se chamava Terminal Services Client, ou aplicativo **Área de Trabalho Remota**, que está disponível para download gratuito na Microsoft Store. 

Ambos possibilitam que o computador reproduza em uma janela exatamente o que está se passando na interface gráfica do computador remoto a que está se conectando, além de permitir a interação com essa representação exata seja transmitida de volta para o computador remoto.

{% include post_img.html

png="/assets/"

webp=""

alt=""

align=""

%}

O Área de Trabalho Remota é uma versão melhorada do Conexão de Área de Trabalho Remota, Ele oferece novas ferramentas, uma interface adequada para dispositivos móveis, melhorias na performance que otimizam a conexão, e permite a conexão com mais de um computador ao mesmo tempo.

Os dois programas utilizam executam a comunicação cliente-servidor de acordo com o protocolo Remote Desktop Protocolo (RDP). Esse é um {% include postLink.html text="protocolo de comunicação" url="https://bit.ly/3B8gxuT" %} criado pela Microsoft para facilitar  a conexão de um usuário com um computador remoto. Esse protocolo permite que o usuário utilize uma interface gráfica para controlar outro computador. Nesse sentido, estando em uma máquina A, é possível ver e interagir com todos os softwares, arquivos e pastas de uma máquina B. 

Protocolo de Comunicação?
Um protocolo de comunicação é um conjunto de regras que determinam como ocorre a troca de dados entre duas ou mais entidades em um sistema de comunicação. 

Perceba que a máquina pode ser virtual. Uma <dfn>{% include postLink.html text="máquina virtual" url="https://pt.wikipedia.org/wiki/M%C3%A1quina_virtual" %} </dfn> ou computador virtual é um software que age como um computador, no qual podemos instalar um sistema operacional, jogos, criar e excluir arquivos e pastas, e qualquer outra coisa que se possa fazer com um computador físico. 

A fim de realizar essa conexão, é necessário que o agente que inicia a conexão tenha um programa cliente RDP na máquina. Já o PC que será acessado deve possuir um programa servidor RDP, que da permissão para a conexão do usuário. Quando conectado, o usuário poderá ver a área de trabalho do computador remoto, bem como utilizar seus recursos como se estivesse de frente a ele através do programa cliente RDP.

## Como o RDP funciona?

Os dados produzidos pelo mouse e teclado no computador cliente são transmitidos de acordo com as regras do protocolo para o computador servidor, que envia de volta dados que ajudam o computador cliente a reconstruir o que aparece na tela do computador remoto.

Quando uma conexão entre duas máquinas é iniciada. um canal dedicado é criado para a transmissão de dados entre os envolvidos: o computador remoto e o computador cliente que está sendo usado pelo usuário. O movimento do mouse, o pressionamento de uma tecla, um programa se abrindo, e qualquer outro dado é entregue por esse canal via TCP/IP, que é um protocolo de transporte utilizado pela maioria dos tipos de tráfego pela internet. 

Canal dedicado?
Um canal é um caminho em que os dados podem fluir da fonte para o destino. Ele pode ser físico ou lógico. Um canal é dedicado quando possuí um único objetivo. 

A interação do usuário com o computador remoto pode sofrer um pouco de delay. Isso por que os dados do mouse e teclado precisam ser encriptados e percorrer uma certa distância até chegar no seu destino remoto, e os dados da tela do computador remoto precisam ser enviado para o computador do usuário. Dessa forma, ao clicar duas vezes para abrir um programa, o clique duplo não será comunicado instantaneamente para o computador remoto, e o aplicativo aberto somente será percebido pelo usuário quando os dados comunicados pelo servidor RDP chegarem no computador do usuário. A demora pode ser ainda maior quando o usuário possuí uma internet lenta.

## Características

Entre as características do RDP, podemos citar:

* Encriptação dos dados enviados por mouse e teclado com uma chave de 128-bit;
* Suporte a cores de 32-bit ou menos;
* Redirecionamento de áudio: o áudio do computador remoto é redirecionado para o computador do usuário, 
* Redirecionamento de impressora: os aplicativos do computador remoto pode usar a impressora do computador remoto.
* Redirecionamento de sistema de arquivos: os arquivos do computador cliente podem ser redirecionados para um computador servidor.
* Redirecionamento de porta: as portas do computador local podem ser usadas pelos aplicativos do computador remoto, isso significa que os aplicativos possuem acesso aos periféricos conectados no computador local. ;
* Suporta diferentes topologias de rede;
* Compartilhamento de área de transferência entre o servidor remoto e um cliente local;
* Os aplicativos de um computador remoto podem ser executados em uma máquina cliente;
* Utiliza técnicas de redução de banda para otimizar a taxa de transferência em internet de baixa conexão;
* É possível se desconectar temporariamente sem deslogar.

## Segurança

O RDP não está imune a ataques, e como ele é utilizado com o sistema de computação Azure para o acesso de usuários a máquinas virtuais disponibilizados online, hackers estão constantemente buscando maneiras de burlar a segurança do protocolo. 

Sendo assim, é especialmente importante adotar hábitos de proteção. Medidas simples como definir a autenticação em dois passos, criar senhas fortes, e trancar a porta 3389 quando ela não for necessária, podem fazer uma grande diferença para evitar transtorno. Além disso, a Microsoft eventualmente lança atualizações que corrigem erros encontrados no RDP. É importante instalar essas atualizações para manter esse protocolo no seu melhor estado.

Varias vulnerabilidades já foram encontradas e exploradas por hackers. Em 2005 veio a publico um ponto fraco do RDP 5.1 que permitia um ataque conhecido como man-in-the-middle, em que o atacante - aquele que realiza o ataque - intercepta os dados trocados entre os envolvidos em uma comunicação. Em outra ocasião, em 2012, a Microsoft lançou um atualização de segurança para impedir alguém mal intencionado pudessem executar códigos remotamente ao enviar pacotes de dados especialmente definidos. Já em 2019 foi descoberto uma vulnerabilidade chamada de “BlueKeep” que, novamente, permitia a execução de códigos de forma remota. Todas essas vulnerabilidades já foram corrigidas pela Microsoft com a disponibilização de patches de segurança, o que evidencia a importância de manter o RDP atualizado com a versão mais recente.

As versões mais recentes do protocolo estão bem mais seguras. Nas versões mais recentes do Windows, é possível especificar quais usuários podem ter acesso via RDP. Existe também a possibilidade de impedir o acesso remoto de qualquer computador que não esteja usando Autenticação no Nível da Rede.

## Utilização

Para usar o RDP é preciso ter certeza que o computador remoto tenha a versão do Windows diferente da versão home ou uma das versões para servidor. Não é possível, oficialmente, se conectar com Windows 10 Home usando o RDP, embora existam programas disponibilizados na internet que prometem remover essa restrição (eu não testei). 

Vamos começar vendo como acessar as configurações do roteador, e também como identificar o endereço de IP interno e externo da máquina. Depois vamos configurar o computador remoto para aceitar a conexão. Por último vamos fazer a conexão via internet e rede privada.

### Acessar as Configurações do Roteador

Siga os passos abaixo sempre que for necessário acessar as configurações do roteador:

1 - Clique no botão “Iniciar” e digite “CMD” na barra de pesquisa;

2 - Selecione o programa “Prompt de Commando”;

3 - Digite “IPCONFIG”;

4 - Identifique o número correspondente ao “Gateway Padrão”;

5 - Em um navegador qualquer, digite o número anotado na barra de endereços e pressione enter;

Acessando o roteador pela barra de endereços.

6 - Entre com o nome de usuário e senha do roteador. Se nada foi alterado, esses dados provavelmente estão escritos em uma etiqueta em baixo do roteador. Para alguns modelos de roteadores não é solicitado

### Identificação do IP do Computador

Para realizar uma conexão remota, é necessário conhecer o endereço de IP da máquina. Em uma configuração normal - no qual o computador é conectado a um roteador, e que por sua vez é conectado a um modem- o PC ganha dois endereços de IP, sendo um interno/local e o outro externo/público. O primeiro é usado para sua identificação dentre outros dispositivos conectados a uma mesma rede privada, como a formada quando são conectados vários dispositivos em um mesmo roteador. Já o segundo serve para identificar um dispositivo que está conectado a internet.

Para encontrar o IP interno, você pode:

1 - Procurar nas <a href=”#acessar_as_configuracoes_do_roteador” target=”_self”>configurações do roteador</a>. Onde esse número está exatamente vai depender da marca e modelo do aparelho, então consulte o site da fabricante para obter informações especificas. 

2 - Também podemos achar o endereço usando o CMD - uma ferramenta de linha de comando do Windows.

* Clique no botão iniciar e digite CMD, e clique n selecione o “Prompt de Comando” para abrir o programa;
* Insira o código `IPCONFIG`´` e aperte “Enter”;
* No resultado, identifique e anote os números correspondentes ao IPv4 ou IPv6.

Esse número mostrado no CMD é o endereço de IP (Internet Protocol) escrito de acordo a versão 4 do protocolo. Se o computador remoto ao qual vai se conectar está na mesma rede que o seu, você pode ir direto para a seção sobre [Conexão](#conexao).

Caso contrário, você vai precisara de um endereço de IP externo, que será o endereço do roteador a que o computador remoto está conectado na internet. O IP externo pode ser encontrado de diversas maneiras, entre elas:
1 - Procurando nas <a href=”#acessar_as_configuracoes_do_roteador” target=”_self”>configurações do Roteador</a>; 
2 - Acessar o buscador Google e pesquisar por “What is my ip”;
2 - Visitar o site [WhatIsmyIP.com](www.whatismyip.com) - a informação que você precisa aparece logo no topo da página, onde diz “My public IPv6 is:” ou “My public IPv4 is:”. 

### Configuração para o Acesso Remoto na Mesma Rede

No computador remoto nós precisamos realizar o preparo para a conexão, seguindo os passos a seguir:

1 - Vá em Iniciar > Configurações > Sistema -> Sobre, e selecione “Habilitar Área de Trabalho Remota”, para permitir a conexão remota.

Ativação da Área de Trabalho Remota.

2 - É preciso garantir que o firewall não bloqueie a conexão. Para tanto, vá em configurações, e na caixa de pesquisa digite firewall. Dos resultados, selecione “Permitir um aplicativo pelo Firewall do Windows”. Na tela que se abrir, clique no botão “Alterar Configurações” para ativar a edição das configurações. Procure pela opção “Área de Trabalho Remota” e marque os quadrados vazios que estiverem do seu lado.

Uma vez que os passo anteriores sejam executados, o computador está pronto para ser acessado por outro computador na mesma rede. Mas para acessar via internet ainda é necessário fazer o direcionamento de porta no roteador.

### Configuração para o Acesso via Internet

Para que seja possível controlar remotamente um computador usando o RDP, é preciso fazer o redirecionamento de porta no roteador, ou configurar um servidor VPN (método mais seguro);

### Redirecionamento de Porta

Quando o cliente quer se conectar com o servidor, ele precisa enviar um pedido para um IP público, com um numero de porta especifico. O IP público é um endereço que permite o cliente encontrar dispositivos pela internet, como um roteador por exemplo. Uma porta é uma conexão lógica usada por programas e serviços para troca de informações. Assim, cada porta corresponde a um software ou serviço especifico em um computador. Nesse caso, a porta correspondente ao programa servidor RDP é a 3389.  

Uma vez que o roteador recebe uma solicitação pela porta 3389, este precisa saber para onde redireciona-la. É ai que entra o redirecionamento de porta. Nós informamos ao roteador que ele deve redirecionar as solicitações para uma máquina especifica.

Note: manter a funcionalidade de área de trabalho remota ativada e abrir portas pode permitir que indivíduos mal-intencionados obtenham acesso ao computador. Garanta a utilização de uma senha forte quando precisar usar esse serviço, e além disso remova o redirecionamento de portas e desative a área de trabalho remota quando não estiver usando.

Para configurar o redirecionamento de porta os passos podem variar de acordo com a fabricante e o modelo do seu roteador. Contudo, você pode usar os passos a seguir como uma referencia para configurar o seu roteador. Você pode checar o site da fabricante para mais detalhes de como isso pode ser feito no seu aparelho. 

Aqui eu vou fazer a modificação no modem-roteador da ASKEY, modelo RTA9227W.

1 - \[Identifique o IP Interno da máquina](#identificação*do_ip* do_computador);

2 - [Entre nas configurações do roteador](#acessar_as_configurações_do_roteador);

3 - Procure por uma seção “Redirecionar portas”, ou algo parecido. Nesse caso, podemos encontrar essa opção indo em Configurações > Rede local. 

4 - Configure um novo redirecionamento de porta com as informações requisitadas. Por exemplo:
Protocolo: TCP
Porta interna: 3389
Porta externa: 3389
IP interno: insira o IP interno da máquina identificado.

5 - Salve a configuração.

Você pode definir uma **porta externa** diferente de 3389. Toda solicitação para essa nova porta seria redirecionado para a porta 3389 do computador remoto. Por exemplo, podemos usar a porta 55.001 para fazer o roteador redirecionar toda solicitação por essa porta para a porta 3389 do computador remoto.  

Mudar a porta externa é também quando precisamos disponibilizar mais de um computador para ser acessado remotamente pela internet. Para isso nós definimos no roteador diferentes portas externas para cada máquina, como na imagem abaixo:

O roteador foi configurado para escutar portas diferentes, e redirecionar as solicitações para a porta 3389 de diferentes destinos.

A **porta interna** deve permanecer como 3389. a menos que você modifique que porta o RDP usa para trocar dados. Para fazer essa alteração confira a seção “Como Mudar a Porta TCP 3389 para outro Número”.

Agora o computador remoto está pronto para receber o acesso através da internet.  

### Conexão

Uma vez que o sistema operacional da máquina remota está ok, e você possuí o [endereço de IP dela](#identificação_do_ip_do_computador), nós podemos prosseguir para a realização do contato através do computador local, O processo no computador local é o mesmo tanto para se conectar a um computador na mesma rede, quanto para se conectar a um computador pela internet.

O Windows vem com um software cliente RDP chamado “Conexão de Área de Trabalho Remota” que podemos usar para o contato. Contudo, existe um aplicativo mais novo chamado “Área de Trabalho Remota” que é disponibilizado na loja de aplicativos do Windows. Vamos usa os dois programas.

#### Usando o “Conexão de Área de Trabalho Remota”

1 - No computador que vai realizar a conexão, clique no menu iniciar e procure por “Conexão de Área de Trabalho Remota” e selecione o aplicativo que aparece com esse mesmo nome; 

2 - Digite o endereço de IP interno ou externo verificado anteriormente e pressione o botão conectar. Se o computador remoto estiver na mesma rede, use IP interno ou o nome do computador. Caso contrário, utilize o IP externo;

Note: Geralmente, esse software solicita o contato pela porta 3389. Mas caso tenha definido uma porta externa diferente, é necessário especifica-la nesse momento. Para isso, adicione :<porta externa> ao final do IP externo do dispositivo, em que <porta externa> é o valor definido para o campo “Porta externa” ao configurar o redirecionamento de portas.

3 - Digite o nome de usuário e senha do usuário da máquina remota, e então clique em “OK”;

4 - Vai aparecer uma mensagem informando que “Não foi possível verificar a identidade do computador remoto.\[...]”, você pode confirmar a conexão sem problemas. Isso somente alerta que não foi encontrado um certificado digital, ou pelo menos um confiável, que confirme que o computador remoto o qual você está se conectando é de fato o servidor que você queria se conectar;

Seguidos os passos, deve ser aberta uma interface gráfica que irá reproduzir o que aparece na tela do computador remoto. Agora você pode fazer o que quiser com tudo que está instalado nesse computador remoto.

Note que, enquanto você controla o computador remoto, este fica “travado” na tela de login. Se por acaso alguém logar nesse computador remoto, a conexão com o PC local se perderá, e será preciso usar IP, usuário e senha novamente para se conectar. 

Para encerar uma conexão, basta fechar a janela.

Você pode alterar varias opções de configuração do software clicando em “Mostrar Opões”, que aparece na parte de baixo da janela inicial. Navegue pelas abas para se familiarizar com elas.
Usando o “Área de Trabalho Remota”
1 - Clique no botão “iniciar” e procure por “Microsoft Store”;

2 - Clique na lupa do lado superior direito da tela para pesquisar por um aplicativo, e digite “Área de Trabalho Remota”;

3 - Dos resultados, selecione o aplicativo “Área de Trabalho Remota da Microsoft”;

4 - Clique em “Obter” para realizar o download e instalação;

5 - Abra o aplicativo;

6 - Clique em Adicionar > Computadores, para adicionar informações de um computador a que pretende se conectar;

7 - No campo “Nome do Computador”, digite o endereço de IP do computador remoto. Mais uma vez, use o endereço externo para uma máquina que será acessada pela internet, ou um IP interno para uma máquina na mesma rede. E caso tenha modificado a porta externa para um valor diferente de 3389. Faça isso colocando o número da porta escolhida depois de dois-pontos logo após o endereço IP da máquina, por exemplo: 122.122.122.122:55001;

8 - No campo “Conta do Usuário”, é possível selecionar um usuário já cadastrado em algum momento, mesmo que para máquinas diferentes;

9 - Na tela “Adicionar uma Conta”, coloque o nome de usuário e senha e pressione “Enter”. Essas informações são usadas para fazer o login no computador remoto. Você pode salvar quantas contas você quiser e selecionar a conta apropriada quando for realizar a conexão;

10 - De volta a tela “Editar uma Computador” - sim, tem um erro de digitação - pressione a tecla “Enter” para adicionar essa configuração, ou clique em “Salvar”;

11 - Clique na configuração que acabou de adicionar para iniciar a conexão;

12 - Confirme a conexão se necessário.

Agora, deve aparecer exatamente a mesma coisa que aparece na tela do computador remoto. Você pode interagir com todos os programas, pastas e arquivos desse computador como se estivesse mesmo na frente dele.
E se não Conectar?
Se mesmo depois de seguir corretamente todos os passos descritos você não conseguir se conectar, tente as soluções a seguir:

**Desbloqueie a porta junto ao provedor de internet**: é possível que o seu provedor esteja impedindo a conexão por motivos de segurança. Entre em contato com o provedor para resolver o problema;

**Prefira o endereço IP ao nome da máquina**: em teoria, você pode utilizar o nome do computador remoto para se conectar a ele quando estiver na mesma rede privada. Porém, por esse método pode ser que o seu computador não encontre o computador que você está tentando se conectar. Isso acontece pois o computador precisa identificar o endereço de IP interno, que corresponde ao nome da máquina, indicada em um registro antes de se conectar. Caso esse registro esteja desatualizado, o seu PC pode não encontrar o computador remoto.

**Opte pela utilização do IPv4**: o Windows 10 pode utilizar ambos o Internet Protocol Version 4 e a Version 6. mas as vezes, ele irá preferir se conectar usando o IPv6, o que pode causar alguns problemas com o RDP.

Para definir o IPv4 como padrão no Windows 10 use os passos abaixo:

1 - Clique no botão ”Iniciar” , digite “Painel de Controle” e pressione “Enter”;

2 - Selecione “Rede e Internet”;

3 - Clique em “Central de Rede e Compartilhamento ”;

4 - Clique em “Alterar as Configurações do Adaptador” do painel de navegação a esquerda;

5 - Clique com o botão direito no adaptador ativo e selecione a opção “Propriedades”;

6 - Desmarque a opção relativa ao IPv6;

7 - Clique em “OK”;

8 - Reinicie the computador.

Se tudo correu bem, você já deve ser capaz de se conectar remotamente ao computador remoto que você quer controlar.

## Conclusão

There are alternative methods to RDP, which allow the implementation of remote desktops without relying on the RDP protocol to provide desktop services; Ericom Connect is one such solution.

Fontes
Como usar a conexão de área de trabalho remota
How to Use Remote Desktop Connection Windows 10 - ProgrammingKnowledge2 - YouTube
https://youtu.be/LmnMRCixwLU 

How to Use Remote Desktop Connection Windows 10 - Britec09 - YouTube
https://youtu.be/gsP46ltENRY 

Protocolo RDP
How to setup VPN with Remote Desktop on Windows 10 - Elena Constantinescu - Windows Report
https://windowsreport.com/vpn-remote-desktop-windows-10/

Proprietary protocol - Proprietary Protocol
https://en.wikipedia.org/wiki/Proprietary_protocol

Communication protocol - Wikipedia
https://en.wikipedia.org/wiki/Communication_protocol 

Remote Desktop Protocol (RDP) - Techopedia
https://www.techopedia.com/definition/3422/remote-desktop-protocol-rdp 

What is RDP? = Ericom
https://www.ericom.com/whatis/rdp/

What is the Remote Desktop Protocol (RDP)? - Cloudflare
https://www.cloudflare.com/pt-br/learning/access-management/what-is-the-remote-desktop-protocol/   

Remote Desktop Protocol - Microsoft
https://docs.microsoft.com/en-us/windows/win32/termserv/remote-desktop-protocol 

Remote Desktop Protocol - Wikipedia
https://en.wikipedia.org/wiki/Remote_Desktop_Protocol#cite_note-MSRDPERP-31 

Remote Desktop Protocol (RDP) - Search Enterprise Desktop
https://searchenterprisedesktop.techtarget.com/definition/Remote-Desktop-Protocol-RDP 

What are Network Protocols? Here's Why They're Important - Eye on Tech - YouTube
https://youtu.be/znIjk-7ZuqI 

Remote Desktop Protocol - Microsoft
https://docs.microsoft.com/en-us/windows/win32/termserv/remote-desktop-protocol 

How to use Remote Desktop app to connect to a PC on Windows 10 - Windows Central
https://www.windowscentral.com/how-use-remove-desktop-app-connect-pc-windows-10-0 

How to Access Windows Remote Desktop Over the Internet - How to Geek
https://www.howtogeek.com/131961/how-to-access-windows-remote-desktop-over-the-internet/

Softwares
Remote Desktop clients - Microsoft
https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-clients 

Endereço de IP
How to find your local and external IP address - Lifehacker
https://lifehacker.com/how-to-find-your-local-and-external-ip-address-5833108 

What Is My Public IP Address? - WhatIsMyIP.com
https://www.whatismyip.com/what-is-my-public-ip-address/#:~:text=The%20public%20IP%20address%20is,devices%20through%20your%20internet%20connection.&text=Some%20even%20refer%20to%20this%20as%20their%20external%20IP%20address. 
Minhas Questões
the identity of the remote computer cannot be verified. Do you want to connect anyway - Technet
https://social.technet.microsoft.com/Forums/Azure/en-US/4d53b2af-fb74-42a8-8ddf-48244369f4c7/the-identity-of-the-remote-computer-cannot-be-verified-do-you-want-to-connect-anyway?forum=winservergen 

Manual de acesso remoto à rede do TST - Justiça do Trabalho
http://www.tst.jus.br/documents/23101476/23231488/Manual+de+acesso+remoto+ao+TST.pdf/a2cc01bb-b580-d268-2551-5e498bf74430?t=1585068346698 

\[Solved] The remote computer requires network level authentication - The Geek Page
https://thegeekpage.com/solved-the-remote-computer-requires-network-level-authentication/#:~:text=1%5D%20Press%20Win%20%2B%20R%20to,Level%20Authentication%20(recommended).%E2%80%9D 

Remote Desktop Connection using IPv6 address and custom port - Respondido por sejong - Technet
https://social.technet.microsoft.com/Forums/lync/en-US/da151755-edd1-4a54-b9ff-083acf023e06/remote-desktop-connection-using-ipv6-address-and-custom-port?forum=winserverTS

Difference between Microsoft's Remote Desktop and Remote Desktop Connection? - Respondido por QuillanFae - Reddit
https://www.reddit.com/r/sysadmin/comments/binq8o/difference_between_microsofts_remote_desktop_and/ 

CVE ID
Common Vulnerabilities and Exposures (CVE) - Wikichip
https://en.wikichip.org/wiki/cve 

Tipos de ataque
Man-in-the-middle attack
https://en.wikipedia.org/wiki/Man-in-the-middle_attack 

How IP addresses work on Google - Google Search Help
https://support.google.com/websearch/answer/1696588 

É seguro compartilhar o resultado do comando `IPCONFIG`
Is it safe to publish the ipconfig/ifconfig results? \[closed] - Law29 - Stck Exchange
https://networkengineering.stackexchange.com/questions/30051/is-it-safe-to-publish-the-ipconfig-ifconfig-results 

Redirecionamento de portas
Port Forwarding Explained - PowerCert Animated Videos
https://youtu.be/2G1ueMDgwxw 

Como Azure usa o RDP
How to connect and sign on to an Azure virtual machine running Windows - Microsoft
https://docs.microsoft.com/en-us/azure/virtual-machines/windows/connect-logon 

Segurança
\[VIDEO] Understanding Remote Desktop Protocol Threats - Martin Lemay - Devolutions
https://blog.devolutions.net/2018/07/understanding-remote-desktop-protocol-threats 

What are the security risks of RDP? | RDP vulnerabilities - Cloudflare
https://www.cloudflare.com/pt-br/learning/access-management/rdp-security-risks/ 

Microsoft Security Bulletin MS12-020 - Critical - Microsoft
]https://docs.microsoft.com/en-us/security-updates/SecurityBulletins/2012/ms12-020?redirectedfrom=MSDN

is it safe to change the RDP port? - Respondido por gerryLowry - Serverfault
https://serverfault.com/questions/698462/is-it-safe-to-change-the-rdp-port#:~:text=Don't%20try%20to%20change,the%20RDP%20standard%20port%203389.

Tamperproofing - Wikipedia
https://en.wikipedia.org/wiki/Tamperproofing 

Protect your workforce with simple, powerful access security. - Duo
https://duo.com/

How to setup VPN for RDP and why? - Spice Works
https://community.spiceworks.com/topic/2138256-how-to-setup-vpn-for-rdp-and-why 

How to setup VPN with Remote Desktop on Windows 10 - Windows Report
https://windowsreport.com/vpn-remote-desktop-windows-10/ 

VPN vs RDP: what’s the difference? - NordVPN
https://nordvpn.com/pt-br/blog/vpn-vs-rdp/

Do you need a VPN router if you already have a VPN Service? - Quora
https://www.quora.com/Do-you-need-a-VPN-router-if-you-already-have-a-VPN-Service 

Can VPNs Be Hacked? We Did The Research, Here’s the 2021 Guide - VPN Mentor
https://www.vpnmentor.com/blog/can-vpns-hacked-take-deeper-look/ 

Difference between External/Internal Start/End port? - Respondido por Alvy - Superuser
https://superuser.com/questions/659795/difference-between-external-internal-start-end-port 

Canal
Channel - Computer Hope
https://www.computerhope.com/jargon/c/channel.htm 

Problemas
Why does remote desktop not work for me by computer name, and only by IP? - Respondido por vpram86 - Superuser
https://superuser.com/questions/52109/why-does-remote-desktop-not-work-for-me-by-computer-name-and-only-by-ip 

RDP on VM
Remote desktop connection using Virtual Box - YouTube
https://www.youtube.com/watch?v=GCamvUsGgGc  

VirtualBox Network Settings: Complete Guide - Nakivo
https://www.nakivo.com/blog/virtualbox-network-setting-guide/#:~:text=VirtualBox%20network%20adapter%20settings%20can,default%20after%20virtual%20machine%20creation.