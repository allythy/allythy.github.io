---
layout:     post
title:      "Como usar o Tmux"
subtitle:   "Neste artigo, vamos aprender como usar o tmux. O tmux é um multiplexador de terminais."
date:       2017-04-26 23:00:00
author:     "Allythy"
header-img: "img/tmux.png"
---
Neste artigo, vamos aprender como usar o tmux. O tmux é um multiplexador de terminais, um multiplexador de terminal permite que um número de terminais sejam criados, acessados e controlados a partir de uma única janela. Com o tmux você também pode ser desconectar de uma tela e  a mesma continuar funcionando em segundo plano, e depois você pode se conectar novamente.

## Como instalar o Tmux

Para instalar o tmux no Debian, Ubuntu, linux mint e seus derivados:

{%highlight bash%}
sudo apt install tmux
{%endhighlight%}

No CentOS e RHEL

{%highlight bash%}
sudo yum install tmux
{%endhighlight%}

No Arch Linux

{%highlight bash%}
sudo pacman -S tmux
{%endhighlight%}

No Fedora

{%highlight bash%}
sudo dnf install tmux -y
{%endhighlight%}

## Aprenda como usar o Tmux

Para iniciar uma sessão no tmux esse comando:

{%highlight bash%}
tmux new -s nomedasessão
{%endhighlight%}

Ao ser iniciado, o aplicativo cria uma nova sessão em uma janela, exibida na tela.
Uma linha de status, na parte inferior da janela mostra informações sobre a sessão atual e também é usada para digitar comandos interativos. Uma sessão é uma coleção de pseudoterminais sob a gestão do tmux. Cada sessão tem uma ou mais janelas ligadas a ela.

Com uma sessão criada, vamos aprender alguns comandos do tmux. Primeiro, os comandos no tmux são emitidos por um prefixo de comandos, por padrão é **Ctrl + B**. Depois de pressionar Ctrl + b você pressionar outra tecla que vai fazer uma determinada ação, logo abaixo segue um exemplos dessas combinações.

Criar uma sessão com nome:

{%highlight bash%}
tmux new -s nomedasessão
{%endhighlight%}

Listas as sessões:

{%highlight bash%}
tmux list-sessions
{%endhighlight%}

Para ir em sessão que você fechou, caso você só coloque **tmux attach** ele vai se conectar a última sessão, para ele se conectar a uma sessão específica você tem que usar esse comando:

{%highlight bash%}
tux attach -t nomedasessão
{%endhighlight%}

Para entrar no modo interativo :

{%highlight bash%}
Ctrl+b+ :
{%endhighlight%}

Desconectar uma sessão ( mas ela ainda vai ficar aberta em segundo plano)

{%highlight bash%}
Ctrl+b+d
{%endhighlight%}

Fechar uma sessão ( você também pode digitar “exit” ou Ctrl+b+x) Você vai usar o Ctrl+b+:
para entrar no modo interativo, quando estiver nele digite esse comando:

{%highlight bash%}
kill-session
{%endhighlight%}

Renomeia a janela atual :

{%highlight bash%}
Ctrl+b+,
{%endhighlight%}

Renomeia a sessão atual:

{%highlight bash%}
Ctrl+b+$
{%endhighlight%}

Navegar entre as sessões:

{%highlight bash%}
Ctrl+b+s
{%endhighlight%}

Criar uma janela:

{%highlight bash%}
Ctrl+b+c
{%endhighlight%}

Navegar entra as janelas, para saber em qual janela você tá fica * depois do nome da janela.

{%highlight bash%}
-Para voltar: Ctrl+b+p
-Para avançar: Ctrl+b+n
 {%endhighlight%}

ou você pode usar o número da janela :

{%highlight bash%}
Ctrl+b+1
{%endhighlight%}

Dividir na horizontal. Depois de pressionar o Ctrl + b você terá que pressionar o **Shift** ao mesmo tempo que as aspas duplas, caso você não faça isso ele vai usar a aspa simples e não vai fazer nada.

{%highlight bash%}
Ctrl+b+ “
{%endhighlight%}

Dividir na vertical. Depois de pressionar o Ctrl + b você terá que pressionar o **Shift** ao mesmo tempo que o símbolo de percentagem.

{%highlight bash%}
Ctrl+b+%
{%endhighlight%}

Navegar entra janelas

{%highlight bash%}
Ctrl+b+ setas_do_teclado
{%endhighlight%}

Organizar as janelas com layout pré-definidos

{%highlight bash%}
Ctrl+b+espaço
{%endhighlight%}

Mostrar a hora

{%highlight bash%}
Ctrl+b+t
{%endhighlight%}
