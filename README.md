# GST - GUIA DE SUBSTITUIÇÃO DE TRANSISTORES


## ARTIGO - A invenção do transistor
Autores Michael Rioddan, Lilian Hoddeson, e Conyes Herring

[Link para Artigo](https://link.springer.com/chapter/10.1007/978-1-4612-1512-7_37)

Indiscutivelmente a invenção mais importante do século passado, o transistor é frequentemente citado como o exemplo de como a pesquisa científica pode levar a produtos comerciais úteis. Emergindo em 1947 de um programa da Bell Telephone Laboratories de pesquisa básica sobre a física dos sólidos, começou a substituir os tubos de vácuo na década de 1950 e acabou gerando o circuito integrado e o microprocessador - o coração de uma indústria de semicondutores que agora gera vendas anuais de mais de US$ 150. bilhão. Esses dispositivos eletrônicos de estado sólido são os que colocaram os computadores em nossos colos e nos desktops e permitiram que eles se comunicassem entre si por meio de redes telefônicas em todo o mundo. O transistor foi apropriadamente chamado de “célula nervosa” da Era da Informação.

Existem variados tipos de transistores, mas o que alcançou maior sucesso foi o transistor BJT(transistor de Junção Bipolar), desenvolvido por William Shockley, da Bell Labs, transistor foi uma invenção que acabou rendendo o prêmio Nobel aos seus criadores.
 

[Link - Veja como é formada a estrutura de um transistor e como funciona](pages_md/estrutura_trasistor.md)


## Sobre a aplicação, GST(Guia de Substituição de Transistores)

O GST (Guia de substituição de transistor ) é uma aplicação que pode ser utilizada em dois modos diferentes, utilizando o modo comparar, após ter preenchido os dados referente ao transistor conforme seu datasheet a aplicação será capaz de dizer se o transistor é equivalente ou não,  no modo buscar após o usuário ter preenchido todos os dados do transistor corretamente a aplicação poderá encontrar em sua base de dados e recomendar nenhum, um ou vários transistores equivalentes.

## Como funciona a inteface com usuário

### Modo Comparar

1 - selecione o tipo de transistor que deseja comparar (Mosfet, Power Transistor)
2 - Selecione o modo comparar
3 - preencha todos os dados corretamente conforme o datasheet do transistor nos formulários 01 e 02
4 - clique no botão comparar que atualmente está como buscar/comparar

se o formulário ficar verde é porque o transistor pode ser substituido pelo outro, se ficar vermelho não é romendado 

### Modo Buscar

1 - selecione o tipo de transistor que deseja buscar (Mosfet, Power Transistor)
2 - Selecione o modo buscar
3 - preencha todos os dados corretamente conforme o datasheet do transistor nos formulário 01
4 - clique no botão buscar que atualmente está como buscar/comparar

se a aplicação encontrar algum transistor equivalente em sua base de dados, o mesmo será recomendado.

[Testando API via interface GST](/pages_md/templates.md)


## Ferramentas e tecnologias utilizadas no desenvolvimento da UI(User interface) interface com usuário, denominada GST(Guia de Substituição de Transistores) - Front-End

A UI(User interface) interface com o usuário foi desenvolvida na linguagem de programação Javascript com Node.js, utilizando a biblioteca React,  também foi utilizada as bibliotecas Reactstrap e Feathericons.

[Link - API do projeto GST no Github - Back-End](https://github.com/ezioalvesfreire/API_gst)

## Ferramentas utilizadas para o desenvolvimento da API GST(Guia de Substituição de transistores) - Back-End

A API GST, desenvolvida na linguagem de programação Typescript, em conjunto com o Node.js e Express.js, dentre outros módulos para auxiliar no desenvolvimento como Axios, CORS, e Nodemon, o banco de dados MYSQL Server também foi associada a API.

para mais detalhes se saber qual finalidade de cada ferramenta e e tecnologia utilizada no desenvolvimento da aplicação clique no link abaixo:

[FERRAMENTAS E TECNOLOGIAS](pages_md/ferramentas_e_tecnologias.md)


## Guia rápido de como baixar ou clonar esta aplicação instalar as ferramentas e testar em seu computador. 

