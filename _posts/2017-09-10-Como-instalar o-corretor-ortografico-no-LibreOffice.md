---
layout:     post
title:      "Como instalar o corretor ortográfico no LibreOffice"
subtitle:   "Essa será uma dica bem rápida, mas muito útil de como instalar o corretor ortográfico no LibreOffice."
date:       2017-09-10 22:00:00
author:     "Allythy"
header-img: ""
categories: LibreOffice
---
Essa será uma dica bem rápida, mas muito útil de como instalar o corretor ortográfico no LibreOffice. O LibreOffice que vem no Debian ou derivados não contém o corretor ortográfico, porque infelizmente ninguém empacotou para ele ainda. Mas, se você baixar o LibreOffice direto do site ele já vem com o corretor ortográfico. Para que você não tenha o trabalho de desinstalar o LibreOffice que está na nossa distribuição e baixar a do site, vamos apenas instalar o corretor ortográfico, o VERO.

## Instalação

Primeiro, você têm que acessar o site do VERO e baixar ou usar esse comando para isso:

```bash
wget -c https://pt-br.libreoffice.org/assets/Uploads/PT-BR-Documents/VERO/VeroptBRV320AOC.oxt
```
Feito isso, vamos abrir o LibreOffice e ir em __Ferrementas > Gerenciador de Extensões__.

![Tela principal do LibreOffice mostrando onde está o gerenciador de extensões](/img/libreoffice.png)

Com o gerenciador de extensões aberto vamos clicar em adicionar.

![Tela do gerenciador de extensões do LibreOffice](/img/libreoffice2png)

E depois informar o caminho onde salvamos o Vero e clicamos em abrir.

![Tela para informar o caminho onde salvamos o Vero](img/libreoffice3.png)

Feito isso, você pode fechar o gerenciador de extensões que o corretor ortográfico do LibreOffice já estará funcionando.
