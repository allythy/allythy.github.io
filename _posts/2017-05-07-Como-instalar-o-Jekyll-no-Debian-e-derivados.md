---
layout:     post
title:      "Como instalar o Jekyll no Debian e derivados"
subtitle:   "Neste artigo, vamos aprender como instalar o Jekyll no Debian e derivados. O Jekyll é um gerador de site estáticos"
date:       2017-05-07 14:00:00
author:     "Allythy"
header-img: ""
categories: [Debian, Jekyll]
---
Neste artigo, vamos aprender como instalar o Jekyll no Debian e derivados. O Jekyll é um gerador de site estáticos feito em Ruby,com ele você pode fazer desde um simples blog até site institucional ou o que você queira criar. O jekyll utiliza o [YAML](http://yaml.org/), e  para guardar e organizar informações, ele usa o Front Matter e o [Liquid](https://github.com/Shopify/liquid/wiki) como renderizador. Outra coisa muito interessante do Jekyll que você pode fazer os seus post usando [Markdown](https://daringfireball.net/projects/markdown/) e hospedar o seu site no [GitHub](https://github.com/).

## Como Instalar o Jekyll?

Primeiro temos que instalar os pacotes `build-essential` e `ruby-full`, porque vamos precisar do **GCC**, **Make** e o Ruby instalado. Para isso, use esse comando:

```bash
sudo apt install build-essential
```

É melhor evitar a instalação do Ruby Gems como usuário root. Portanto,precisamos configurar um diretório de instalação `gem` para conta do seu usuário. Os comandos a seguir adicionarão variáveis de ambiente ao seu arquivo `~/.bashrc` para configurar o caminho de instalação da `gem`. Execute uma linha de cada vez que está abaixo:

```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Feito isso, vamos instalar o Jekyll:

```bash
gem install jekyll bundler
```

Você pode verificar se ele foi instalado com esse comando:

```bash
jekyll -v
```

Pronto, você tá com Jekyll instalado. Para criar o seu site digite o comando abaixo.

>onde tem o **allythy** coloque o nome que você vai dar para o seu blog/site.

```bash
jekyll new allythy
```
Esse comando vai gerar uma pasta com o nome que você deu para o seu site, entre nessa pasta:

```bash
cd allythy
```

Execute o Jekyll:

```bash
bundle exec jekyll serve -l
```

Esse comando vai executar o seu site localmente na `porta 4000` e flag `-l` é de **Live reload** (recarrega automaticamente o site quando for editado). Agora é só você acessar o endereço `http://127.0.0.1:4000/` e começar a testar.
