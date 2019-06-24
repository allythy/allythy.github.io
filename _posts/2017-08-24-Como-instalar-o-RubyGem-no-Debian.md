---
layout:     post
title:      "Como instalar o RubyGems no Debian"
subtitle:   "Neste artigo, vamos aprender a instalar o RubyGems do Debian"
date:       2017-08-24 15:00:00
author:     "Allythy"
header-img: ""
categories: Debian
---
Neste artigo, vamos aprender a instalar o RubyGems do Debian. O RubyGems é o gerenciador de pacotes para o Ruby. Primeiramente, temos que instalar o pacote build-essential, porque vamos compilar algumas coisas.

## Instalação

Para instalação, use o seguinte comando:

```bash
sudo apt install build-essential
```
Também temos que instalar o Ruby. Para isso, use esse comando:

```bash
sudo apt install ruby-full
```

Agora temos que baixar o RubyGems, você pode <a href="https://rubygems.org/pages/download#formats" target="_ blank">acessar o site e baixar</a> ou usar esse comando:

```bash
wget -c https://rubygems.org/rubygems/rubygems-2.6.12.tgz
```

Vamos descompactar o arquivo baixado. Caso você queira saber mais sobre o descompactadores  <a href="https://allythy.github.io/Empacotamento-e-compactacao-de-arquivos-no-gnu-linux" target="_ blank">tem esse artigo.</a>

```bash
tar -xvzf rubygems-2.6.12.tgz
```

Temos agora que entrar na pasta que descompactar o arquivo baixado:

```bash
cd rubygems-2.6.12
```

Feito isso, vamos instalar o RubyGems com esse comando:

```bash
sudo ruby setup.rb
```

Pronto, o RubyGems está instalado. Você pode fazer um teste instalando o Gulp com
esse comando:

```bash
sudo gem install gulp
```
