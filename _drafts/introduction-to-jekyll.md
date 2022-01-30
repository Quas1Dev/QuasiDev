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
- Definição formal
- Workflow básico com jekyll
- Os três componentes de um gerador de sites
- Outros geradores

- HTML - Predominant

# Por que Usar o Jekyll?

No começo da internet, os sites eram construídos e mantidos a mão. Não havia processos automatizados. Cada parte da estrutura de cada página tinha que ser  escrita manualmente pelo desenvolvedor ou time de desenvolvedores. Imagina o inferno que era algumas atividades simples como adicionar uma nova página, ou mudar o layout do site. Apenas pessoas com conhecimento avançado de programação eram capazes de colocar conteúdo no ar, enquanto o grande público permanecia apenas consumidor.

Em pouco tempo, viu-se a necessidade de um sistema que pudesse facilitar a criação, implantação e manutenção de websites a longo prazo. Dai começaram a aparecer os primeiros Sistemas de Gerenciamento de Conteúdo (do inglês Content Management System), geralmente referenciado como CMS. Primeiro vieram as versões especificas para cada negócio, depois vieram empresas oferecendo uma solução para uso geral. 

Os CMS fornecem funcionalidades que facilitam a vida dos criadores de sites e criadores que alimentam esse site com conteúdo. Com essas funcionalidades, o tempo para colocar um novo blog, e-commerce, ou qualquer outro sistema, no ar se tornou uma questão de minutos. Mesmo os usuários que não entendem nada sobre programação podem ter o próprio site pessoal.

No entanto, os CMSs trazem alguns desafios no que diz respeito a segurança, performance, e personalização dos projetos. Alguns plug-ins utilizados nesses sistemas podem ser propensos a serem comprometidos se não for bem gerenciado e atualizado. 

 The entire process of keeping the admin panel and the CMS updated was getting very time consuming, 
but the costs of not doing so could be rather embarrassing and take days to clean up. Developers were starting 
to get frustrated because the whole idea of blogging was becoming bogged down with more maintenance 
and less focus on writing and creating new content. Many developers tried to think of possible solutions 
and after much tinkering, a few options emerged. The easiest solution was to use a blogging engine that was 
being hosted online for you, instead of self-hosting something like WordPress. Blogger falls into this category 
of hosted blogs that did not require much maintenance, and the back end would be managed at large by the 
company behind the efforts. This is an incredibly lucrative option, because the user can purchase add-ons 
such as a custom domain that points to their own blog and circumvent the hosting issue entirely. 
 There are limitations of this approach in terms of customization: Self-hosting allows for more 
modifications that might not otherwise be possible. Increasingly, it was becoming clear that there was a 
need for a self-hosting service for the developer who can customize the blog to his or her own needs and still 
be able to spend time creating great content instead of spending it on updating and maintenance


At times, though, the effort has seemed to trade one goal for another. Wordpress, for example, became a revolution in making content easier to author—but anyone who’s scaled a high-traffic Wordpress site knows it also brings a whole set of new challenges in performance and security. Trading the simplicity of HTML files for database-powered content means facing the very real threats that sites might crash as they become popular or are hacked when nobody is watching closely.


And dynamically transforming content into HTML—each and everytime it’s requested—takes quite a few compute cycles. To mitigate allthe overhead, many web stacks have introduced intricate and clevercaching schemes at almost every level, from the database on up. Butthese complex setups have often made the development process feelcumbersome and fragile. It can be difficult to get any work done ona site when you can’t get it running and testable on your own laptop.(Trust us, we know.)


