---
layout:     post
title:      "Como usar o Trimage para comprimir imagens"
subtitle:   "Neste artigo, vamos aprender como instalar o Trimage para comprimir nossas imagens. O Trimage é uma GUI multiplataforma e interface de linha de comando para otimizar imagem."
date:       2018-05-08 13:10:00
author:     "Allythy"
header-img: ""
categories: [Dica]
---

Neste artigo, vamos aprender como instalar o Trimage para comprimir nossas imagens. O Trimage é uma GUI multiplataforma e interface de linha de comando para otimizar imagem, usando optipng, pngcrush, advpng e jpegoptim, dependendo do tipo de arquivo (atualmente, os arquivos PNG e JPG são suportados),foi inspirado no imageoptim.

Todas as imagem são comprimidos com o Trimage sem perdas nos níveis mais altos de compressão disponíveis, o EXIF e outros metadados são removidos. O Trimage oferece várias funções de entrada para ajustar o seu próprio fluxo de trabalho: Uma caixa de diálogo de arquivo comum, arrastando e soltando e várias opções de linha de comando.

## Instalação

__Debian, Ubuntu e derivados__
```bash
sudo apt install trimage
```
__Arch Linux__
```bash
yaourt -S trimage-git
```
__Outras distribuições__

1- Faça o download no projeto no <a href="http://github.com/Kilian/Trimage" target="_ blank">GitHub</a> ou no  <a href="https://launchpad.net/trimage" target="_ blank">Launchpad</a>

2- Feito isso, você tem que instalar os pacotes necessário para instalação:
```bash
sudo apt install python python-qt4 optipng pngcrush advancecomp jpegoptim
```
3- Digite esse comando para começar a instalação:
```bash
sudo python setup.py install
```
4- Pronto, agora é só procurar por Trimage no seu lançador de arquivos.

## Como usar

### Interface gráfica
Ele é um programa bem simples de usar, para comprimir suas imagens clique em __Add and compress__ e selecione os arquivos. Se você achar isso muito trabalhoso é só arrasta as imagens para o programa ou a pasta. Quando a imagem é comprimida ele mostra de quantos porcentos foi a compressão e o tamanho que a imagem tinha e o tamanho que ele ficou depois.

![Interface do trimamge comprimindo cinco imagens](img/trimage.png)

### Linha de comando

Comprimir um arquivo:
```bash
trimage -f nome-do-arquivo
```

Comprimir um diretórios com várias imagem:
```bash
trimage -d nome-da-pasta
```
