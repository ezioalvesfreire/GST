<< [HOME](/README.md)

1 - Para clonar a aplicação entre na pasta onde você deseja clonar a aplicação, como exemplo foi criada uma pasta chamada clone_app_GST dentro do diretório de downloads, crie a sua no local desejado, como por exemplo em documentos ou mesmo em downloads, também nomeie a pasta como quiser.

2 - Copie a URL da aplicação no GitHub conforme ilustra a imagem a seguir, caso tenha feito o fork, o link será referente ao projeto, porém da sua conta git hub.
<img src="images_md/url_github_gst-2.png" alt="Download_VS_Code" width="1000">
3 - Caso tenha instalado o Git em sua máquina, pode-se usar o GitBash para clonar a aplicação GST
para isso entre na pasta que foi criada e clique com o botão auxiliar do mouse, será aberta uma janela, clique em Git Bash Here, conforme ilustra a imagem abaixo.

<img src="images_md/atalho_git_bash-2.png" alt="Download_VS_Code" width="1000">

Será aberto um terminal Bash, conforme ilustra imagem abaixo.
<img src="images_md/terminal_git_bash-2.png" alt="Download_VS_Code" width="1000">

4 - após ter copiado o link da URL do projeto e aberto o terminal, dê o comado git clone e cole a URL do projeto clicando com botão auxiliar do mouse e clicando em paste
<img src="images_md/clone_terminal_git_bash-2.png" alt="Download_VS_Code" width="1000">

Veja na imagem abaixo como ficou o comando git clone + URL da aplicação
<img src="images_md/git_clone_gst-2.png" alt="Download_VS_Code" width="1000">

Em alguns segundos será feito o clone da aplicação
<img src="images_md/clonado_gst-2.png" alt="Download_VS_Code" width="1000">

4 - Feito o download, descompacte o arquivo  
<img src="images_md/pasta_clonado_gst-2.png" alt="Download_VS_Code" width="1000">

5 - Entre na pasta do projeto
<img src="images_md/pasta_clonado_gst2-2.png" alt="Download_VS_Code" width="1000">

6 - Para acessar o projeto utilizando o VS_Code, utilize o atalho digitando no termial o comando "code ." e tecle enter, se o seu visual Code estiver configurado para abrir através deste comando que já vem configurado por padrão o projeto será aberto.

<img src="images_md/code_atalho-2.png" alt="Download_VS_Code" width="1000">

Para termos uma abrangencia maior no uso de ferramentas e também maior comodidade, a partir deste momento os comandos no terminal será dado a partir do terminal de comando contido no VS-Code, fique a vontade para utilizar qualquer outro terminal.

7 - Conforme ilustra a imagem abaixo, clique em Terminal no parte superio do VS_Code, na nova janela aberte clique em Novo Terminal ou utilize as teclas de atalho, Ctrl + Shift + ' será aberto um terminal na parte inferior do VS-Code.

<img src="images_md/acesse_terminal_vs_code.png" alt="Download_VS_Code" width="1000">

8 - Com terminal aberto podemos inclusive consultar se o Node.Js foi instalado corretamente e qual sua versão para isso dê o comando node -v ou node --version.
<img src="images_md/versao_node-2.png" alt="Download_VS_Code" width="1000">

Já que temos o Node.Js foi instalado na máquina, podemos utilizar NPM (Node Package Mananger) gerenciador de pacotes que já vem com Node.js para gerenciar nossas dependências, o Yarn é uma boa alternativa ao NPM, mas essa documentação seguirá com NPN.

9 - Antes navegue até a pasta do projeto, pode ser utilizado o comando cd GST.

<img src="images_md/entre_na_pasta-do _projeto-2.png" alt="Download_VS_Code" width="1000">

10 - O projeto que GST que foi clonado encontra-se na Branch master, "branch é um ramo de versionamento do Git", atualmente as ultimas implementações do projeto encontra-se na branch newDev.

11 - para verificar sua branch atual dê o comando "git branch".

<img src="images_md/branch_master-2.png" alt="Download_VS_Code" width="1000">

12 - Para mudar para branch newDev, basta dar o comado git checkout newDev.

<img src="images_md/mudando_de_branch-2.png" alt="Download_VS_Code" width="1000">

13 - Instale as dependências utilizando o comando npm install,
com isso o Node Package mananger irá consultar o arquivo package.json verificando quais dependências necessárias a ser instaladas.

<img src="images_md/dependencias1-2.png" alt="dependencias" width="1000">

Veja na imagem abaixo que os pacotes foram adicionados 1462 pacotes e auditado 1463.
<img src="images_md/npm_install-2.png" alt="Download_VS_Code" width="1000">

14 - suba a aplicação através do comando npm start
<img src="images_md/npm_start-2.png" alt="Download_VS_Code" width="1000">

A aplicação pode ser visualizada acessando no navegador a URL localhost:3000

<img src="images_md/app_suspensa-2.png" alt="Download_VS_Code" width="1000">

<< [HOME](/README.md)
