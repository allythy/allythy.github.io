---
layout:     post
title:      "Como deixar o pen drive bootável usando a interface gráfica"
subtitle:   "Neste artigo, vamos aprender como deixar o pen drive bootável usando a interface gráfica"
date:       2017-07-03 14:00:00
author:     "Allythy"
header-img: ""
---
Neste artigo, vamos aprender como deixar o pen drive bootável usando a interface gráfica. Alguns usuários não gostam ou não estão muito familiarizados com o Terminal, então esse método é uma boa alternativa. O programa que usaremos será o __Utilitário de Discos do GNOME__, em algumas distribuições como Debian com o ambiente de trabalho GNOME ou Ubuntu ele já vem instalado por padrão. Caso você esteja usando o Debian como outro ambiente de trabalho use o comando abaixo para instalar Utilitário de Discos do GNOME:

```bash
sudo apt install gnome-disk-utility
```
Agora vamos formatar o pen drive, do lado esquerdo selecione o pen drive, muito cuidado para não selecionar o seu HD. Clique no ícone da engrenagem e depois em Formatar ou Shift + Ctrl + F.

![Tela do Utilitário de Disco do Gnome para formatar o pen drive](/img/disco1.png)

Na próxima tela você escolherá o __Sistema de Arquivos__, que será o __FAT__ e depois digite o nome desse volume. Feito isso, clique em __Formatar__ aparecerá outra tela onde você vai clique em __Formatar__ novamente. Pronto, o seu pen drive foi formatado.

![Tela para escolher o sistema de arquivos e o nome do pen drive](/img/disco2.png)

Com o pen drive formatado agora vamos deixar ele bootável. Clique novamente na engrenagem e em __Restaurar imagem de disco__, outra janela abrirá, nela você vai indicar a __localização da sua ISO__.   Feito isso, clique em __Iniciar Restauração__ e depois digite sua senha.

![Tela para mostrar onde a ISO está localizada](/img/disco3.png)

Pronto, o seu pen drive já está bootável.
