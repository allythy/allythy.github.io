---
layout:     post
title:      "Como instalar o pip para gerenciar pacotes do Python no GNU/Linux"
subtitle:   "Neste artigo, vamos aprender como instalar o pip para gerenciar pacotes do Python no GNU/Linux."
date:       2017-08-27 00:35:00
author:     "Allythy"
header-img: ""
---
Neste artigo, vamos aprender como instalar o pip no GNU/Linux. O pip é um gerenciador de pacotes multiplataforma para instalar e gerenciar pacotes Python.

## Instalação no Debian e derivados

Para o Python 2
```bash
sudo apt install python-pip
```
Para o Python 3
```bash
sudo apt install python3-pip
```
## Instalação no CentOS e RHEL

Infelizmente, o pip não é está no repositório oficial do CentOS/RHEL. Então, você precisa primeiro habilitar o repositório EPEL e depois instalar o pip.

```bash
sudo yum install epel-release
sudo yum install python-pip
```

## Instalação no Fedora

Para o Python 2
```bash
sudo dnf install python-pip
```

Para o Python 3
```bash
sudo dnf install python3
```

## Instalação no Arch Linux

Para o Python 2
```bash
sudo pacman -S python2-pip
```

Para o Python 3
```bash
sudo pacman -S python-pip
```

## Instalação no openSUSE

Para o Python 2
```bash
sudo zypper install python-pip
```

Para o Python 3
```bash
sudo zypper install python3-pip
```

## Como usar o Pip

Eu vou usar como exemplo o pip3 que usar o Python 3, caso você queira usar o Python 2 use o pip no lugar do pip3.

__Instalação de pacotes:__
```bash
sudo pip3 install nome-do-pacote
```

__Desinstalação de um pacote:__
```bash
sudo uninstall nome-do-pacote
```

__Procurar um pacote:__
```bash
pip3 search nome-do-pacote
```

__Listar os pacotes instalados:__
```bash
pip3 list
```
__Mostrar informações sobre um pacote:__
```bash
pip3 show nome-do-pacote
```

__Para ver a lista completa de comandos:__
```bash
pip3 help
```

<a href="https://www.tecmint.com/install-pip-in-linux/" target="_ blank">Fonte</a>
