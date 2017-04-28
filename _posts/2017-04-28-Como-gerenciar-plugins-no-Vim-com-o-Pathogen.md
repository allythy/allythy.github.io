---
layout:     post
title:      "Como gerenciar plugins no Vim com o Pathogen"
subtitle:   "Neste artigo, vamos aprender como gerenciar plugins no Vim com o Pathogen. O Vim é um editor de texto altamente configurável."
date:       2017-04-28 14:00:00
author:     "Allythy"
header-img: "img/post-bg-01.jpg"
---
O Vim é um editor de texto altamente configurável com centenas de plugins que podem ser instalados. Muitos deles são adaptados para usos específicos, como programação em uma determinada linguagem ou até ajudar na escrita de um texto comum, outros são mais gerais e melhoram as capacidades existentes do Vim. Qualquer que seja a sua finalidade você terá que gerenciar esses plugins.

Existe uma série de gerenciadores de plugins para o Vim, mas o Pathogen é o mais universal e simples de instalar e usar.

O Pathogen funciona puxando todos os plugins do Vim em um determinado diretório para sua instalação no editor de texto e depois são ativados com uma linha no arquivo **.vimrc.** Pacotes necessários
Antes de começar, você deve ter instalado, claro, o **Vim**, **Git** e o **Curl** em seu sistema. Eles são pacotes muito comuns em qualquer distribuição GNU/Linux, por isso não há muita necessidade de entrar em detalhes aqui. Caso você queira saber sobre o gerenciador de pacotes do Debian e derivados
[leia esse artigo](https://allythy.github.io/conhecendo-o-advanced-packaging-tool-apt)

## Instalação do Vim, Git e Curl

No Debian, Ubuntu, linux mint e seus derivados:

{%highlight bash%}
sudo apt install vim git curl
{%endhighlight%}

No CentOS e RHEL

``` bash
sudo yum install vim git curl
```

No Arch Linux

``` bash
sudo pacman -S vim git curl
```

No Fedora

``` bash
sudo dnf install vim git curl
```

## Configurando os diretórios

Tudo isso é feito localmente, pelo usuário. Ele requer uma pasta .vim no diretório /home. Se ainda não o tiver, você tem que criar usando o seguinte comando:

``` bash
mkdir ~/.vim
```

Vamos entrar na pasta que acabamos de criar, e dentro dela criaremos mais duas pastas **autoload** e **bundle**.

``` bash
cd ~/.vim
mkdir autoload
mkdir bundle]
```
## Instalando o Pathogen
A melhor maneira de instalar o Phathogen é clonado-o diretamente do seu [repositório do Github](https://github.com/tpope/vim-pathogen). Para que o Pathogen seja executado automaticamente, ele precisa ser instalado no diretório **autoload** que acabou de ser criado. Quando a clonagem do repositório terminar, você terá o Pathogen instalado.

``` bash
cd autoload
```

``` bash
curl -LSso ~/.vim/autoload/pathogen.vim https://github.com/tpope/vim-pathogen.git
```
## Configurando o .vimrc

Você precisa adicionar algumas linhas ao arquivo **.vimrc**. Caso não tenha o arquivo .vimrc, você poderá criá-lo e logo em seguida adicionar o Pathogen.

``` bash
vim ~/.vimrc
```

``` bash
execute pathogen#infect()
syntax on
filetype plugin indent on
```
Caso já tenha alguma coisa configurado no .vimrc, coloque a seguinte linha no arquivo.

```bash
execute pathogen#infect()
```

## Instalando plugins usando Pathogen

Toda a razão pela qual você instalou o Pathogen, foi para instalar os plugins de uma forma mais rápida e aumentar a sua produtividade no Vim. Agora, está tudo pronto para a instalação. Vamos instalar o **Emmet-vim** usando o Pathongen, para isso use esses comandos:

```bash
cd ~/.vim/bundle/
```

```bash
git clone https://github.com/mattn/emmet-vim.git
```
Os comandos acima faz com que você entre na pasta ~/.vim/bundle e clone o repositório do plugin Emmet-vim que está [hospedado no GitHub.](https://github.com/mattn/emmet-vim/) Agora, criaremos um arquivo **index.html** para testar o Emment.

```bash
vim index.html
```

Pressione a tecla **i** para entrar no Modo de Inserção, depois digite **html:5** deixe o cursor na frente do número 5 e pressione ao mesmo tempo as teclas **Ctrl+y** e logo na sequência pressione **,** não demore muito para digitar a vírgula. Se você tiver feito tudo certo aparecerá isso:

![tela do index.html feito com Emment](/img/vim.png)

[Fonte](https://linuxconfig.org/manage-vim-plugins-with-pathogen)
