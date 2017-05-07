---
layout:     post
title:      "Como instalar o Jekyll no Debian e derivados "
subtitle:   "Neste artigo, vamos aprender como instalar o Jekyll no Debian e derivados. O Jekyll é um gerador de site estáticos"
date:       2017-05-07 14:00:00
author:     "Allythy"
header-img: "img/post-bg-01.jpg"
---
Neste artigo, vamos aprender como instalar o Jekyll no Debian e derivados. O Jekyll é um gerador de site estáticos, seja ele um blog, site institucional ou o que você queira criar. O jekyll utiliza o [YAML](http://yaml.org/), e  para guardar e organizar informações, ele usa o Front Matter e o [Liquid](https://github.com/Shopify/liquid/wiki) como renderizador. Outra coisa muito interessante do Jekyll que você pode fazer os seus post usando [Markdown](https://daringfireball.net/projects/markdown/) e hospedar o seu site no [GitHub](https://github.com/).

## Como Instalar o Jekyll?

Primeiro temos que instalar o pacote build-essential, pois vamos precisar do gcc e do make. Para isso,  use esse comando:

```bash
sudo apt install build-essential
```

Também temos que instalar a versão 2.0 do ruby ou superior.  Para isso, use esse comando:

```bash
sudo apt install ruby2.3
```

Cerifique-se que também foi instalado o pacote ruby-dev, caso não tenho sido instalado, use esse comando:

```bash
sudo apt install ruby2.3-dev
```

Agora temos que baixar o RubyGems, que é um gerenciador de pacotes para o Ruby. Você pode [acessar o site e baixar](https://rubygems.org/pages/download) ou usar esse comando:

```bash
wget -c https://rubygems.org/rubygems/rubygems-2.6.11.tgz
```

Vamos descompactar. Caso você queira saber mais sobre o descompactadores [tem esse artigo](https://allythy.github.io/Empacotamento-e-compactacao-de-arquivos-no-gnu-linux).

```bash
tar -xvzf rubygems-2.6.11.tgz
```
Temos que entrar na pasta que descompactar e depois instalar o RubyGems, para isso use esses comandos:

```bash
cd rubygems-2.6.11/
sudo ruby setup.rb
```

Pronto, agora é só instalar o jekyll com esse comando:

```bash
sudo gem install jekyll bundler
```

Você pode verificar se ele foi instalado com esse comando:

```bash
jekyll -v
```

Pronto, você tá com Jekyll instalado. Para criar o seu site digite esse comando, onde tem o nomeSempreUpdate coloque o nome que você vai dar para o seu site.

```bash
sudo jekyll new allythy
```
Esse comando vai gerar uma pasta com o nome que você deu para o seu site, entre nessa pasta e execute esse comando:

```bash
sudo jekyll s
```

Esse comando vai executar o seu site localmente na porta 4000. Agora é só você acessar o endereço http://127.0.0.1:4000/ e começar a testar.
