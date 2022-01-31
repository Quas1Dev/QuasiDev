---
title: "Introdução ao Jekyll - Static Site Generator"
layout: article
sources:
	- title: 'The history of CMS – what has happened? - Enonic'
	  url: https://enonic.com/blog/the-history-of-cms--what-has-happened 
	- title: 'O que é CMS (Content Management System)? - Canaltech'
	  url: https://canaltech.com.br/software/o-que-e-cms-content-management-system/
---
O que é Jekyll
- Introdução
- Definição formal
- Por que Jekyll? - Done
- Workflow básico com jekyll
- Os três componentes de um gerador de sites
- Outros geradores
- HTML - Predominant

The beginning or introduction explains what your post is about, and what your readers can expect to get out of it. The meat of a post is in the middle, that’s where you deliver the goods. And all of this builds up to the end where you deliver your final conclusions and invite your readers to do something with all of this information; your call-to-action.

Já pensou em criar um Website 
State an interesting fact or statistic about your topic
Ask a rhetorical question
Reveal a common misconception about your topic
Set the scene of your story: who, when, where, what, why, how?
Share an anecdote (a humorous short story) that captures your topicState an interesting fact or statistic about your topic
Ask a rhetorical question
Reveal a common misconception about your topic
Set the scene of your story: who, when, where, what, why, how?
Share an anecdote (a humorous short story) that captures your topic

Jekyll é um gerador de sites estáticos, ou seja, sites que são pré-construídos e enviados para um servidor, que pode então servir as páginas que são requisitadas pelo usuário sem ter que reconstruí-las a todo momento. 

Nessa série de postagens eu vou ensinar a você como utilizar essa ferramenta para desenvolver um site do zero. Nessa introdução, nós vamos apresentar os motivos para usar o Jekyll,

## Por que Usar o Jekyll?

No começo da internet, os sites eram construídos e mantidos a mão. Não havia processos automatizados. Cada componente tinha que ser escrito manualmente pelo desenvolvedor ou time de desenvolvedores. Imagina o inferno que era algumas atividades simples como adicionar uma nova página, ou mudar o layout do site. Apenas pessoas com conhecimento avançado de programação eram capazes de colocar conteúdo no ar, enquanto o grande público permanecia apenas consumidor.

Em pouco tempo, viu-se a necessidade de um sistema que pudesse facilitar a criação, implantação e manutenção de websites a longo prazo. Dai começaram a aparecer os primeiros Sistemas de Gerenciamento de Conteúdo (do inglês Content Management System), geralmente referenciado como CMS. Primeiro vieram as versões especificas para cada negócio, depois surgiram empresas oferecendo soluções para uso geral. 

Os CMS fornecem funcionalidades que facilitam a vida dos desenvolvedores de sites e criadores que alimentam esse site com conteúdo. Com essas funcionalidades, o tempo para colocar um novo blog, e-commerce, ou qualquer outro sistema, no ar se tornou uma questão de minutos. Agora, mesmo usuários que não entendem nada sobre programação podem ter o próprio site pessoal.No entanto, os CMSs trazem alguns desafios no que diz respeito a segurança, performance, e customização dos projetos. 

Nesses sistemas, as páginas de um site são criadas automaticamente em um servidor a cada pedido do usuário. Isso significa muitas oportunidades para alguém mal intencionado explorar vulnerabilidades nos plug-ins que são adicionados pelos desenvolvedores, e que precisam ser executados toda vez que uma nova construção é iniciada, por exemplo. Para garantir que o ambiente esteja seguro, os desenvolvedores precisam gerenciar e atualizar constantemente todas as dependências do projeto, principalmente as mais propensas a serem comprometidas, ao mesmo tempo que toma cuidado para não quebrar todo o site por um efeito colateral das alterações em um plug-in. 

Acontece que o processo de manter todo o sistema atualizado consome muito tempo. A solução mais fácil encontrada foi a de usar um serviço online que fica responsável pela manutenção do CMS e os plug-ins adicionados (e.g., Blogger, Wordpress.com), ao invés de usar o CMS localmente. Nesse caso, a empresa por traz da solução online fica responsável pela manutenção, enquanto seus clientes podem focar em adicionar conteúdo e novas funcionalidades. Mas ter a segurança oferecida por esses serviços muitas vezes significa abrir mão do poder de customização do projeto. Manter um CMS localmente permite alterar detalhes que talvez não seja possível em um serviço como Blogger, por exemplo. Como resultado, algumas otimizações que poderiam ser implementadas no código do site pode não ser possível.

A performance também é um problema. Além de estar limitado em relação a otimização do código usado para construir, estilizar e dinamizar a página, também temos que considerar que criar uma página no momento em que o usuário precisa dela pode impactar bastante o tempo de carregamento da página, e como algumas pesquisas demonstram, tempo é dinheiro.

Considerando esses desafios, alguns desenvolvedores começaram a pensar em uma solução que permitisse a customização do produto final, e que fosse possível ter um ambiente seguro sem gastar muito tempo com a manutenção. O Jekyll foi um dos frutos desse pensamento. 

Com essa ferramenta, todas as páginas são construídas somente uma única vez: quando há alguma alteração nos documentos. Ou seja, quando o usuário digita o endereço da página e aperta Enter, ou clica em um link que leva para uma página no seu site, tudo que o servidor precisa fazer é enviar o documento HTML pre-construído para o usuário. Isso cria uma separação entre o frontend e o backend, o que reduz a quantidade de possíveis alvos de ataques hacker e evita que as vulnerabilidades nas ferramentas usadas para criar um site sejam exploradas para derrubar o site. 

Ademais, todo o código do site está disponível para fazer qualquer alteração necessária em nível granular. Modificar a marcação do site para se adequar as exigências de um sistema de validação, implementar um recurso recém adicionado ao JavaScript, reduzir os recursos externos usados na página, tudo isso pode ser feito com Jekyll. Mas isso para quem está familiarizado com HTML, CSS e JavaScript, o que de certa forma torna o Jekyll não ideal para usuários leigos nessas tecnologias.













