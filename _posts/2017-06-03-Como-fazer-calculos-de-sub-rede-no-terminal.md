---
layout:     post
title:      "Como fazer cálculo de sub-redes no terminal"
subtitle:   "Neste artigo, vamos aprender a fazer cálculo de sub-rede no terminal."
date:       2017-06-03 19:00:00
author:     "Allythy"
header-img: ""
---

Neste artigo, vamos aprender a fazer cálculo de sub-rede no terminal. Hoje eu estava estudando para prova de Redes que eu tenho amanhã, só que eu não tinha como conferir se as respostas estavam corretas, então fui pesquisar algum programa (apt-cache search ) achei ipcalc um programa de linha de comando que mostra o endereço de rede, primeiro host, ultimo host, máscara de rede, endereço de broadcast e faz cálculos de sub-rede para uma determinada quantidade de host. O ipcalc  mostrar todas essas informações tanto em decimal como em binário, mas o ipcalc só é valido para o Ipv4.  A  instalação é bem simples, digite esse comando:

```bash
sudo apt install ipcalc
```
Para  verificar  o endereço de rede, primeiro host, ultimo host, máscara de rede, endereço de broadcast de um determinado IP, use esse comando:

```bash
 ipcalc 192.168.0.0/24
 ```
Para verificar o endereço IP para uma sub-rede com 40 host outra com 25 host e outra com 12 host

```bash
ipcalc 192.100.40.0/24 -s 40 25 12
```
Para fazer 8 sub-redes para um endereço IP de classe C

```bash
ipcalc 192.168.0.0/24 27
```
