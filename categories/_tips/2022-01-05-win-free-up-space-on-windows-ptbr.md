---
title: Como Liberar Espaço no Windows 10
layout: article
permalink: /windows/:title
description: Confira algumas dicas para aproveitar melhor o espaço no
  dispositivo de armazenamento do seu computador.
categories: windows
date: 2022-01-05T03:00:00.625Z
lastUpdated: 2022-01-28 15:05:00
author: Fernando Bonfim
excerpt_separator: <!--more-->
---

Se o seu computador está com o armazenamento cheio, ele pode começar a apresentar sérios problemas de performance. Se está tendo algum problema de performance, pode ser o momento de limpar o sistema de armazenamento do seu computador. Nas seções abaixo são listadas algumas práticas que podem ajudar a recuperar espaço no dispositivo de armazenamento.
<!--more-->
Dica: anote o espaço disponível antes e depois de aplicar qualquer uma das seguintes soluções.
## Use Programas Mais Leves
Dependendo de suas necessidades, pode haver mais de uma ferramenta disponível que possa atendê-las. Naturalmente, alguns ocuparão menos espaço do que outros e podem economizar algum espaço. Você ainda pode ter programas que usa apenas para tirar proveito de uma função específica. Talvez você possa encontrar outro software mais leve que se concentre naquela função específica de que você precisa, ou até mesmo encontrar uma solução em outro software que você já possui. Por exemplo, se você estiver usando o CCleaner para excluir os dados armazenados pelo seu navegador, você pode remover este software e usar uma funcionalidade dos próprios navegadores.

Considere o uso de uma ferramenta de linha de comando - um programa com o qual interagimos usando um terminal (por exemplo, CMD, Batch Script) - para atender às suas necessidades. Eles geralmente são mais leves e podem fornecer mais funcionalidade do que um programa com interface gráfica. Embora algumas pessoas possam considerá-los difíceis de usar, provavelmente é apenas falta de prática. No entanto, se você estiver sem espaço, vale a pena tentar.

## Compacte o Sistema Operacional
```compact``` é uma ferramenta de linha de comando do Windows usada para mostrar ou alterar o estado de compactação de arquivos em partições usando o New Technology File System (NTFS). Vamos definir a compactação e os sistemas de arquivos abaixo para que possamos entender o que esse recurso faz.
 
Compressão: processo em que os dados são codificados de forma especial para que sejam representados com menos bits, ocupando assim um espaço menor no dispositivo de armazenamento. Quando um dado compactado deve ser lido, ele precisa ser descompactado para seus binários originais.
 
Sistema de arquivos: é qualquer método de organização de arquivos em um dispositivo de armazenamento, como um HDD, pen drive USB, etc. Pense nele como um conjunto de regras que dita a maneira como os arquivos serão organizados em um determinado dispositivo. Um dispositivo de armazenamento pode ter diferentes arquivos de sistema aplicados a cada uma de suas partições, que são seções tratadas pelo sistema operacional como dispositivos diferentes. Por exemplo, um computador pode ter um HDD dividido em duas partições que são tratadas como dois dispositivos de armazenamento, uma usando o NTFS e a outra usando o sistema de arquivos FAT32.
 
Portanto, o recurso ```compact``` é utilizado para tornar menores os arquivos que fazem parte de um ambiente organizado de acordo com o NTFS, e para mostrar se estão compactados ou não. Se você tentar usar este recurso em um diretório, ele será marcado para que os próximos arquivos que serão adicionados ao diretório sejam compactados, assim você acaba compactando os arquivos de qualquer maneira.
 
Nota: este recurso não detecta a compressão realizada por outras ferramentas de compressão.
 
A ferramenta compacta possui vários parâmetros que podem ser usados para configurá-la. Podemos usar o parâmetro ```/compactOS``` para compactar os arquivos do sistema operacional ou mostrar se eles estão compactados. A partir do momento que os arquivos são comprimidos, os binários serão compactados e descompactados em tempo real, ou seja, eles serão descompactados à medida que forem lidos e compactados de volta ao serem armazenados. Embora exija mais processamento para compactar e descompactar os binários, isso não afetará significativamente o desempenho do computador.
 
Atenção: este processo não deve causar problema, mas é uma boa ideia fazer um backup temporário de seus arquivos importantes para o caso de algo dar errado durante ou após a compressão.
 
Para compactar os binários do Windows, siga estas etapas:
 
1 - Digite CMD na caixa de pesquisa da barra de tarefas do Windows e selecione o software Prompt de Comando na lista de resultados.

2 - Digite ```compact /compactOS:always``` e pressione enter. Isso vai compactar os binários do sistema se o Windows determinar que há benefícios nessa ação.
{% 
include post_img.html 
png="/assets/imgs_posts/windows/win-free-up-space-on-windows/compactos-ptbr.png"
webp="/assets/imgs_posts/windows/win-free-up-space-on-windows/compactos-ptbr.webp"
alt="cmd.exe mostrando o resultado da compactação."
align="center" 
%}
 
Você pode economizar 2 GB ou mais de armazenamento com este recurso.
 
Para reverter o resultado você deve seguir os mesmos passos apresentados acima, mas use o comando ```compact /compactOS: never``` ao invés do passo 2.

## Limpe a lixeira
Quando você clica com o botão direito em alguma pasta ou arquivo e selecione Excluir, o item não é completamente apagado a princípio. Ao invés disso, ele é enviado para a Lixeira, onde aguardará até que o usuário decida se livrar dele permanentemente ou restaurá-lo. Os itens enviados para a Lixeira continuam ocupando espaço no seu computador. Você simplesmente não pode usá-los. Com o passar do tempo, esses arquivos podem se acumular, levando bytes preciosos que poderiam estar em uso por algo útil. Ao esvaziar a Lixeira, você marca o espaço ocupado por seus itens como disponível para uso, e isso permite que sua máquina salve novos dados nesse espaço.
 
Por exemplo, você pode ter um vídeo antigo que seu amigo lhe enviou há anos, mas isso não é mais útil e, portanto, você decide excluí-lo. A princípio, esse arquivo é enviado para a Lixeira, onde permanecerá até que você decida que tem certeza de que deseja descartá-lo. Enquanto o vídeo ainda está na lixeira, o espaço que seus bits ocupam em seu dispositivo de armazenamento (HDD ou SSD) não pode ser usado para acomodar outros dados. Depois de esvaziar a Lixeira, o computador agora será capaz de armazenar um novo arquivo no mesmo lugar onde o vídeo que você removeu estava localizado.
 
Você ainda pode recuperar arquivos que estavam na Lixeira quando apagou tudo dela, contanto que o computador não use o espaço marcado como disponível. Existem várias ferramentas que podem ser utilizadas para essa tarefa, como {% include postLink.html text="Recuva" url="https://www.ccleaner.com/recuva" %}. Mas, conforme você grava novos dados em seu computador, ele eventualmente usará o espaço marcado e os dados serão completamente perdidos.
 
Para esvaziar a lixeira, clique com o botão direito em qualquer lugar da Lixeira e selecione "Esvaziar Lixeira". Você também pode clicar no próprio ícone da Lixeira.
 
## Excluir dados de navegação
Enquanto você está navegando na web, existem algumas informações que são armazenadas pelo seu navegador, como o histórico de endereços que você visitou, cookies que os sites usam para armazenar suas preferências para que possam "lembrar" nossas escolhas sempre que os acessamos, download registros, etc. Esses dados aumentam conforme navegamos na web e, a menos que os limpemos regularmente, eles podem ocupar uma grande quantidade de espaço e, assim, ajudar a desacelerar nosso computador.
 
A maioria dos navegadores tem a opção de remover esses dados em algum lugar do menu de configurações. Você pode descobrir como excluir todos os dados do navegador consultando a documentação do seu navegador específico, que deve estar em seu site oficial. Se você tiver vários navegadores, pode preferir usar um software de terceiros, como o {% include postLink.html text="CCleaner" url="https://www.ccleaner.com/pt-br" %}, assim você não precisa executar a mesma tarefa em cada um dos navegadores.

## Limpe a Pasta de Downloads
Você provavelmente já baixou arquivos e softwares da Internet. Esses arquivos e programas precisam ser colocados em algum lugar do seu sistema. Em vez de escolher aleatoriamente onde colocá-los, os navegadores geralmente definem a pasta Downloads do Windows como o local padrão para colocar todo o conteúdo baixado.
 
Para encontrar a pasta Downloads, você deve abrir o Windows Explorer pressionando Windows + E e procurar a pasta Downloads no painel esquerdo. Assim que encontrá-la, você pode selecionar os arquivos e pastas que deseja remover e pressione a tecla Delete. Certifique-se de excluir apenas o conteúdo que não é mais necessário e mover os outros para a pasta apropriada, como a pasta Documentos para seus arquivos e pastas.

## Remova Softwares Desnecessários
Com o passar do tempo, tendemos a instalar vários programas para atender às nossas necessidades. Alguns deles podem se tornar inúteis com o tempo, pois você não tem o mesmo problema que motivou sua decisão de baixá-lo em primeiro lugar. Esses softwares que não são usados continuam a ocupar espaço no armazenamento que poderia ser usado para armazenar algo útil. Dessa forma, removê-los pode fornecer o espaço que sua máquina precisa para funcionar corretamente.
 
Para remover softwares e liberar espaço em seu disco rígido, siga as etapas abaixo:
- Digite Painel de Controle na caixa de pesquisa da barra de tarefas do Windows e selecione Painel de Controle nos resultados;
- Encontre a opção Desinstalar Programas;
- Identifique quais programas você deseja remover e clique duas vezes em cada um deles, um de cada vez, para iniciar a desinstalação.
 
Certifique-se de saber a finalidade exata do programa que está desinstalando. A remoção de softwares necessários para o sistema pode fazer com que o Windows não funcione corretamente. Tenha um cuidado em especial com programas que contenham as palavras Microsoft ou Driver no nome. Se você não tem certeza sobre um programa, pesquise no Google. Se ainda não tiver certeza, não o exclua.

## Gerencie os Arquivos de Mídia
Softwares não são a única coisa que ocupa espaço no seu drive: são fotos, vídeos, áudios e documentos também. Como acontece com os softwares, esses arquivos também ocupam grande parte do espaço disponível em seu dispositivo de armazenamento. Para visualizar melhor como seu dispositivo de armazenamento está sendo usado por esses itens, você pode usar um software como o {% include postLink.html text="Windirstat" url="https://windirstat.net/" %}. Este software representa quanto espaço cada arquivo ocupa no armazenamento usando blocos coloridos de tamanhos variados, como os da figura abaixo. Cada bloco é um arquivo; blocos maiores significam mais espaço ocupado pelo arquivo; cada cor representa uma extensão diferente (por exemplo, .png, .jpg, etc.).

{% 
include post_img.html 
png="/assets/imgs_posts/windows/win-free-up-space-on-windows/windirstat-ptbr.png"
webp="/assets/imgs_posts/windows/win-free-up-space-on-windows/windirstat-ptbr.webp"
alt="Representação dos items ocupando espaço no computador em formato de retângulos"
align="center" 
%}
 
Depois de saber o que está ocupando seu armazenamento principal e quanto está sendo ocupado, você pode definir atitudes para aproveitar melhor sua unidade de armazenamento. Uma maneira, é claro, é remover os arquivos que podem ser removidos com segurança. Não faz sentido guardar algo que você sabe que não vai mais precisar ou que pode ser facilmente encontrado novamente.
 
Outra abordagem envolve o uso de ferramentas para compactar arquivos. Como dissemos na seção anterior, a compressão codifica algo de uma maneira especial, de modo que pode ser armazenado usando menos bits e, portanto, usando menos espaço. Existem muitas ferramentas que você pode usar para reduzir seus arquivos usando uma variedade de mecanismos, portanto, não vamos explorá-los aqui. Mas você pode encontrar muitos tutoriais mostrando como compactar arquivos na Internet. No entanto, você deve ter em mente que alguns métodos de compactação causarão alguma diminuição na qualidade de suas imagens, vídeos ou áudios, por isso é prudente ser cauteloso.
 
Considere também armazenar todos os arquivos criados em outro dispositivo de armazenamento, como uma unidade USB ou um HDD / SSD externo, especialmente se você produz arquivos grandes regularmente. Você ainda pode usar serviços de nuvem como{% include postLink.html text="Google Drive" url="https://www.google.com/intl/pt-BR/drive/" %} ou {% include postLink.html text="OneDrive" url="https://onedrive.live.com/about/pt-br/signin" %} para armazenar seus documentos em um computador que está em outro lugar do globo. O uso de um serviço na nuvem tem a vantagem de que os documentos salvos podem ser acessados por qualquer dispositivo com acesso à internet de onde você estiver, e você não precisa se preocupar com o estado do dispositivo que contém suas informações. No entanto, certifique-se de usar um serviço de armazenamento seguro, pois a segurança de seus dados estará fora de seu controle.

## Remover Arquivos Temporários
Os <dfn> arquivos temporários </dfn>, também conhecidos como arquivos foo, são arquivos que seu sistema operacional e outros programas criam ou baixam nos quais dados temporários são armazenados, como arquivos que os programas baixam ao instalar atualizações. O programa deve excluir seus arquivos temporários assim que for fechado, mas às vezes isso pode não acontecer por vários motivos. Por exemplo, quando um programa falha, ele pode não ter tido tempo suficiente para excluir seu (s) arquivo (s) temporário(s).
 
A localização desses arquivos pode variar de computador para computador e até mesmo de usuário para usuário. Você pode encontrar a maioria deles na pasta Temp do usuário e na pasta Temp do Windows. O primeiro armazena arquivos temporários gerados pelo Windows e aplicativos. O último é onde os arquivos temporários criados pelo Windows são armazenados. Podemos navegar até essas pastas e, em seguida, tentar excluir tudo o que há dentro delas.
 
O Windows vai impedi-lo de excluir algo que está sendo usado no momento. Isso é bom. Você não gostaria de se livrar dos arquivos que algum programa está usando, pois isso pode causar um comportamento indesejado ou inesperado. Portanto, quando você receber a mensagem "Esta ação não pode ser concluída porque o arquivo está aberto em outro programa", você deve pular o arquivo.
 
Para acessar a pasta Temp do usuário, podemos abrir o Explorador de Arquivos pressionando Windows + E. Depois, digite % temp% na barra de endereço e pressione Enter. % temp% é a variável de ambiente que o Windows usa para armazenar o endereço da pasta que os programas devem usar para armazenar arquivos temporários, que geralmente é "C:\Usuários\&lt;username&gt;\AppData\Local\Temp".
 
A pasta Temp do Windows pode ser acessada digitando %windir%\temp na caixa de endereço do Explorador de Arquivos do Windows. % windir% é uma variável de ambiente que armazena o endereço da pasta do Windows, que geralmente é c:\windows\. Ao tentar acessar esta pasta pela primeira vez, você provavelmente receberá a mensagem de erro informando que não tem permissão para acessar esta pasta. Clique em continuar para abri-lo.

{% 
include post_img.html 
png="/assets/imgs_posts/windows/win-free-up-space-on-windows/temp-access-denied-ptbr.png"
webp="/assets/imgs_posts/windows/win-free-up-space-on-windows/temp-access-denied-ptbr.webp"
alt="cmd.exe mostrando o resultado da compactação."
align="center" 
%}
 
Quando chegar nessas pastas, selecione tudo e pressione a tecla delete. Isso enviará todos os arquivos e subpastas que não estão em uso para a Lixeira. Uma caixa de diálogo pop-up pode aparecer solicitando que você confirme se deseja excluir vários arquivos, dependendo da configuração do seu computador; pode confirmar. Quaisquer arquivos ocultos também podem ser excluídos sem problemas. A próxima etapa é ir para a Lixeira e esvaziá-la; caso contrário, os arquivos deletados continuarão a ocupar o mesmo espaço de antes.
 
Você também pode usar um recurso disponível no aplicativo Configurações do Windows 10 para excluir os arquivos temporários. As etapas abaixo mostram como você pode usá-lo:
 
1. Clique na caixa de pesquisa do Windows, procure por Armazenamento e clique na opção Configurações de Armazenamento;
2. Abaixo de "É assim que o armazenamento é usado e como você pode liberar espaço.", clique em Arquivos temporários;
{% 
include post_img.html 
png="/assets/imgs_posts/windows/win-free-up-space-on-windows/temp-step-2-ptbr.png"
webp="/assets/imgs_posts/windows/win-free-up-space-on-windows/temp-step-2-ptbr.webp"
alt="Indicação da opção Arquivos Temporários na janela Armazenamento."
align="center" 
%}
3. Na janela Arquivos Temporários, é apresentada uma lista dos tipos de arquivos temporários que podem ser excluídos com segurança. Por algum motivo, ele também oferece a exclusão do conteúdo da pasta Download. Marque as caixas de seleção para determinar o que deseja remover e clique no botão Remover arquivos. 

{% 
include post_img.html 
png="/assets/imgs_posts/windows/win-free-up-space-on-windows/temp-step-3-ptbr.png"
webp="/assets/imgs_posts/windows/win-free-up-space-on-windows/temp-step-3-ptbr.webp"
alt="Todas as opções possíveis para excluir."
align="center" 
%}

Note: Todas as opções podem ser marcadas para remoção  com segurança, mas talvez você deva verificar se há algum conteúdo importante na pasta de downloads antes de marcá-lo para limpeza.

## Habilitar Sensor de Armazenamento
No Windows 10, você ainda pode habilitar o Sensor de Armazenamento - se ainda não estiver habilitado. Este recurso verifica regularmente quais arquivos podem ser excluídos e os remove automaticamente.
 
Siga estas etapas para habilitar este recurso.
 
1. Clique na caixa de pesquisa do Windows, digite Armazenamento e clique na opção Armazenamento.
2. Clique em "Configurar o Sensor de Armazenamento ou executá-lo agora." para acessar as opções de configuração do Sensor de Armazenamento.
{% 
include post_img.html 
png="/assets/imgs_posts/windows/win-free-up-space-on-windows/storage-sense-step-2-ptbr.png"
webp="/assets/imgs_posts/windows/win-free-up-space-on-windows/storage-sense-step-2-ptbr.webp"
alt="Indicação da opção Arquivos Temporários na janela Armazenamento."
align="center" 
%}
 
Na janela "Configurar o Sensor de Armazenamento ou executá-lo agora", encontramos algumas configurações que determinam a frequência com que esse recurso é executado, qual conteúdo deve ser excluído ou não e a "idade" do conteúdo a ser excluído.

{% 
include post_img.html 
png="/assets/imgs_posts/windows/win-free-up-space-on-windows/storage-sense-options-ptbr.png"
webp="/assets/imgs_posts/windows/win-free-up-space-on-windows/storage-sense-options-ptbr.webp"
alt="Indicação da opção Arquivos Temporários na janela Armazenamento."
align="center" 
%}

Vamos começar pela primeira opção. Lá no topo nós temos a chave seletora que podemos usar para ativar ou desativar o Sensor de Armazenamento.
 
Em seguida, podemos determinar com que frequência o Sensor de Armazenamento deve rodar.  Por padrão, ele é executado quando há pouco espaço livre em disco, mas você pode alterar esse comportamento no menu oculto abaixo de Executar o Sensor de Armazenamento. Podemos configurá-lo para ser executado todos os dias, todas as semanas, todos os meses ou quando há pouco espaço livre em disco (recomendado).
 
As outras opções determinarão quais arquivos serão removidos durante a execução. Abaixo de "Excluir arquivos da minha Lixeira, se eles estiverem lá há mais de", você pode determinar a idade do conteúdo da Lixeira para que possa ser removido. Por exemplo, se você escolher 1 dia, o Storage Sense excluirá todo o conteúdo da Lixeira que estiver lá por mais de um dia sempre que for executado.
 
Abaixo de "Excluir arquivos da minha pasta Meus Downloads, se eles não tiverem sido abertos por mais de:", você pode determinar a quanto tempo um arquivo pode permanecer na pasta de downloads sem ser usado. Por exemplo, se tu escolher 14 dias, qualquer arquivo que você deixe na pasta de downloads por mais de 14 dias sem abri-lo, será excluído.
 
A opção principal que nos interessa aqui é "Excluir os arquivos temporários que meus aplicativos não usam.". Marque a caixa de seleção referente a  essa opção para determinar que o Sensor de Armazenamento deve excluir qualquer arquivo temporário que não estiver sendo usado.
 
Se você não quiser esperar pela próxima análise automática do seu dispositivo de armazenamento, você pode executar o Sensor de Armazenamento a qualquer momento clicando no botão "Limpar agora" na parte inferior da janela. Quando o Storage Sense for executado, ele excluirá os arquivos temporários (incluindo aqueles do sistema), removerá o conteúdo indexado antigo, se livrará dos arquivos de cache do sistema e muito mais. Além disso, ele excluirá os arquivos no Download e limpará a Lixeira se você definir essas opções.

## Exclua a partição OEM oculta
<dfn> <abbr title="Original Equipment Manufacturer"> OEM </abbr> </dfn> significa Fabricante de equipamento original, e foi atribuído a ele significados diferentes e contraditórios ao longo da história. Originalmente, esse termo era usado para se referir a uma empresa que fabrica produtos para outra empresa que os vendem sob sua marca ou os adiciona a seus equipamentos. Veja o relacionamento entre marcas como Dell e Intel, por exemplo. Normalmente, a Dell compra e incorpora processadores Intel em seus computadores e os vende sob sua marca. Nesse caso, a Intel é considerada OEM.

No entanto, pelo menos no mundo do hardware de computador, OEM também pode se referir à empresa que monta produtos de outros fabricantes em seu próprio equipamento e os vende sob sua marca. Portanto, agora a Dell também pode ser rotulada como OEM. Para os fins deste artigo, usaremos o segundo significado deste termo.

É comum que os OEMs tentem personalizar seus produtos e há várias maneiras de fazer isso. Um fabricante de computadores venderá seu computador com sistemas operacionais pré-configurados e um conjunto personalizado de aplicativos que eles acham que estão bem pré-instalados. Outra coisa que eles geralmente fazem é adicionar uma partição de recuperação personalizada chamada partição OEM.

Agora, antes de entrarmos no que é essa coisa de partição de recuperação de recuperação personalizada, vamos definir o que é uma partição.

### O que é Uma Partição?
Uma partição é uma divisão lógica em um dispositivo de armazenamento (por exemplo, um CD ou uma unidade de disco rígido) que é tratada como um dispositivo separado pelo sistema operacional. É como a separação do mundo em porções menores que chamamos de países: na realidade não há fronteiras, mas logicamente definimos uma determinada área como os EUA, outra como o Brasil, etc.

Um dispositivo de armazenamento pode ter uma ou mais partições que são tratadas como dispositivos diferentes. Assim como diferentes países têm aspectos diferentes, cada partição pode ter sua própria maneira de organizar arquivos, conjunto de conteúdo e finalidade. Eles funcionarão separadamente e às vezes podem interferir uns nos outros. É importante notar que um dispositivo de armazenamento pode ter uma partição única que abrange toda a unidade.

### Partição OEM
Com base em nossa discussão sobre partições e a definição de um OEM, podemos concluir que uma partição OEM é uma divisão lógica do disco definida pelo fabricante do computador. Essa partição consiste em uma versão personalizada do que chamamos de partição de recuperação.

Uma partição de recuperação contém um ambiente especial denominado Windows Recovery Environment (WinRE). Este sistema reúne várias ferramentas que devem ajudar os usuários a recuperar o sistema se um grande problema de hardware ou software impedir você de iniciar o Windows. Por exemplo, no WinRE, poderíamos usar o recurso de restauração rápida do Windows para reinstalar o sistema sem usar uma mídia de instalação.

Além do conteúdo padrão do WinRE, uma partição OEM também inclui os dados necessários para que o usuário possa reverter o sistema para o padrão de fábrica. Portanto, é possível obter todos os aplicativos, unidades e configurações que vieram embutidas no sistema quando você comprou o computador. Além disso, os fabricantes podem adicionar seu próprio conjunto de ferramentas de recuperação.

Esta partição pode ser muito útil se você gosta da maneira como seu computador foi configurado pelo fabricante e gostaria de poder retornar o sistema a esse estado caso algo dê errado. No entanto, se reverter para o padrão de fábrica não for algo que você deseja, livrar-se dessa partição é uma alternativa interessante para recuperar mais espaço de armazenamento.

### Encontrando a Partição OEM
Antes de fazer qualquer coisa, vamos descobrir se você tem uma partição OEM. Podemos verificar se uma máquina tem uma partição OEM usando a ferramenta Gerenciamento de Disco. Este é um recurso do Windows que fornece informações sobre discos físicos e volumes e permite que o usuário os gerencie.

Para iniciar este programa, você pode clicar com o botão direito do mouse no botão iniciar e selecionar Gerenciamento de disco. Na janela que aparece, são apresentados dois painéis: um no topo com uma tabela que mostra todos os volumes detectados, juntamente com alguns outros dados sobre esses volumes; o segundo painel mostra uma representação gráfica dos dados apresentados na tabela do primeiro painel.
{% 
include post_img.html 
png="/assets/imgs_posts/windows/win-free-up-space-on-windows/disk-management-ptbr.png"
webp="/assets/imgs_posts/windows/win-free-up-space-on-windows/disk-management-ptbr.webp"
alt="A Janela do Gerenciador de Disco. Nele podemos identificar todos os dispositivos armazenamento conectados no computador e as partições dentro deles."
align="center" 
%}

Você pode identificar a partição OEM procurando por Íntegro (partição OEM) na coluna de status da tabela que aparece na parte superior da janela Gerenciamento de Disco ou no painel gráfico que aparece na parte inferior. Nesse caso, há um que ocupa 15 GB.

É importante observar que a ordem das partições no painel gráfico é importante. Lá você pode ver que a partição OEM está bem ao lado da partição rotulada c :, que é onde todos os arquivos de sistema, imagens, vídeos, etc., estão armazenados, e também é a partição que queremos expandir. Se houvesse alguma outra partição entre eles, excluir a partição OEM não teria nenhum benefício. Se for esse o seu caso, simplesmente ignore esta seção.

### Múltiplas Partições OEM
Normalmente, o Windows cria uma partição de recuperação durante a configuração inicial, ou seja, quando é instalado. Além disso, às vezes ele cria uma nova partição de recuperação durante uma atualização. Então, depois de um tempo, você pode acabar com várias partições de recuperação no mesmo computador. De acordo com a Microsoft, o motivo desse comportamento foi supostamente corrigido. Portanto, se você instalou o Windows recentemente, não deverá ter esse problema.

Essas várias partições de recuperação geralmente são mostradas com o status Íntegro (partição de recuperação), o que é muito bom. Esta etiqueta deixa claro que não é uma partição definida pelo OEM. No entanto, por algum motivo, há casos em que seu status é Íntegro (partição OEM), o que pode ser bastante confuso.

É importante diferenciá-los, pois a partição configurada pela OEM é a única que contém as configurações, aplicativos e drivers personalizados de fábrica, enquanto que a partição configurada pelo Windows instala apenas os componentes padrão padrão, que consiste apenas em um WinRE e drivers Você não pode redefinir o sistema para o estado original de fábrica usando a partição de recuperação definida pelo Windows.

No caso de você ter mais de uma instância de Íntegro (partição OEM), você pode identificar qual foi definida pelo OEM observando a coluna Capacidade. A partição de recuperação criada devido a uma atualização ou durante a instalação do Windows tem mais ou menos 500 MB de tamanho na maior parte dos casos, enquanto a partição OEM configurada pelo fabricante tem seu tamanho expresso em gigabytes ou muito próximo a 1 GB. Na minha máquina, a partição OEM definida pelo fabricante tinha mais de 10 GB!

### Livrando-se de Partições OEM
Depois de determinar que existe uma partição OEM, anote o número do disco na coluna Volume. Isso identifica o dispositivo onde reside a partição. Quando estiver pronto, você pode seguir o seguinte passo a passo:
1 - Clique no botão Iniciar, procure CMD, clique com o botão direito do mouse no Prompt de Comando e selecione Executar como Administrador;

2 - Digite ```DISKPART``` e pressione Enter. Se for solicitado, dê qualquer permissão para permitir a execução da ferramenta;

3 - Digite ```LIST DISK``` e pressione Enter. Isso irá mostrar todos os discos conectados à sua máquina, incluindo seu disco rígido interno, stick USB conectado, etc.;{% 
include post_img.html 
png="/assets/imgs_posts/windows/win-free-up-space-on-windows/delete-part-step-3.png"
webp="/assets/imgs_posts/windows/win-free-up-space-on-windows/delete-part-step-3.webp"
alt="Janela do CMD com uma lista dos dispositivos de armazenamento conectados na máquina."
align="center" 
%}

4 - Use o comando ```SELECT DISK <número do disco>```. O comando ```SELECT DISK``` é usado para selecionar um dos dispositivos de armazenamento que estão conectados à máquina. O ```<número do disco>``` deve ser substituído pelo número do dispositivo a ser selecionado, que, neste caso, deve ser o número da unidade que contém a partição ou partições que queremos remover. Olhando a coluna Volume na janela Gerenciamento de disco, é possível identificar que a partição de destino está no disco 0, então digitamos ```SELECT DISK 0```;

{% 
include post_img.html 
png="/assets/imgs_posts/windows/win-free-up-space-on-windows/delete-part-step-4.png"
webp="/assets/imgs_posts/windows/win-free-up-space-on-windows/delete-part-step-4.webp"
alt="Janela do CMD com o comando que seleciona o dispositivo de armazenamento."
align="center" 
%}

5 - Digite ```LIST PARTITION``` e pressione Enter para listar todas as partições no disco selecionado. Aqui você pode ver o número que corresponde a cada partição no disco selecionado. Tente identificar o número que corresponde à partição OEM comparando o tamanho especificado na coluna Tamanho, com o valor apontado no Gerenciamento de Disco;

{% 
include post_img.html 
png="/assets/imgs_posts/windows/win-free-up-space-on-windows/delete-part-step-5.png"
webp="/assets/imgs_posts/windows/win-free-up-space-on-windows/delete-part-step-5.webp"
alt="Janela do CMD com uma lista de partições no dispositivo selecionado."
align="center" 
%}

6 - Digite ```SELECT PARTITION <número da partição>``` onde <número da partição> é o número da partição OEM que queremos excluir. Certifique-se de selecionar o correto, pois deletar a partição errada pode tornar sua máquina inoperante. Para identificar a correta, compare o tamanho da partição OEM (localize-a na janela Gerenciamento de disco), com os valores na coluna Tamanho da tabela da etapa anterior;{% 
include post_img.html 
png="/assets/imgs_posts/windows/win-free-up-space-on-windows/delete-part-step-6.png"
webp="/assets/imgs_posts/windows/win-free-up-space-on-windows/delete-part-step-6.webp"
alt="Janela do CMD com uma lista de partições no dispositivo selecionado."
align="center" 
%}

7 -  Digite ```DELETE PARTITION OVERRIDE``` e pressione Enter. Isso excluirá a partição selecionada.

Após a conclusão do processo, o espaço que foi alocado para a partição OEM agora excluída aparecerá como espaço não alocado, o que denota um espaço que não faz parte de nenhuma partição e, portanto, não pode ser usado para armazenar nada. Abra o software de gerenciamento de disco e você poderá ver uma partição não alocada no painel gráfico.

Para tornar este espaço utilizável, você deve criar outra partição usando esse espaço ou expandir uma partição existente. Vamos adicionar o espaço livre à partição principal c:, para termos mais espaço para nossos arquivos pessoais, programas, arquivos de sistema, etc.

Observação: lembre-se de que só podemos fazer isso pois a partição c: está exatamente do lado esquerdo do espaço não alocado.

1 - Ainda no utilitário ```DISKPART```, digite``` SELECT DRIVE <número do drive>```. deve ser o número que identifica o drive onde a partição c: está localizada.

2 - Digite ```SELECT PARTITION <número da partição>```, onde o número da partição deve ser substituído pelo número da partição principal c:.
	
3 - Digite ```EXPEND```, e a partição atual será expandida para ocupar todo espaço não alocado.