---
layout:     post
title:      "Como criar docomentação com o MkDocs"
subtitle:   "Neste artigo, vamos aprender como criar uma docomentação com o MkDocs."
date:       2018-06-21 17:10:00
author:     "Allythy"
header-img: ""
---
O MkDocs é gerador de site estático para documentação simples, rápido e um bonito para seu projeto. Ele é feito em Python, então já entendemos a origem da sua simplicidade, mas não confunda simplicidade com falta de recursos, porque o MkDocs tem muito recursos que você pode usar com poucas linhas de código. A documentação é escrita em Markdown, que é uma forma de escrever HTML bem mais simples e bonita e a configuração do MkDocs é feita em apenas um arquivo YAML.

Quando ocorre o build o MKDocs vai gerar arquivos estáticos (HTML, CSS e JS), com isso você pode hospedar o site da sua documentação sem pagar nada no GitHub ou GitLab, porque esses serviços possuem os recursos <a href="https://pages.github.com/" target="_ blank">GitHub Pages</a> e <a href="https://about.gitlab.com/features/pages/" target="_ blank">GitLab Pages</a>, respectivamente, que permite a utilização dos arquivos estáticos.

O MkDocs ainda possui um servidor de desenvolvimento integrado, isso permite pré-visualizar a documentação à medida que a escreve. Ele também vai recarregar automaticamente e atualizar seu navegador sempre que você salvar suas alterações.

## Instalação

Se você estiver usando qualquer distribuição GNU, você pode instalar o MkDocs pelo seu gerenciador de pacotes. Como eu estou usando o Debian só tenho que digitar esse comando:

```bash
sudo apt install mkdocs
```

Acredito ser seja mais interessante instalar o MkDocs pelo gerenciador de pacotes do Python, o pip, porque se você estiver usando um ambiente virtual vai ficar tudo mais organizado e não vai “poluir” o seu sistema. Neste post não vou mostrar como você faz isso, pois sairia do escopo do texto.
Entretanto, se você não souber como instalar o pip,
<a href="https://allythy.github.io/Como-instalar-o-pip-para-gerenciar-pacotes-do-Python-no-GNU-Linux" target="_ blank">preparei esse post que demostra como faz</a>. Com o pip instalado, você só tem que digitar esse comando:

```python
pip install mkdocs
```
Para verificar se tudo deu certo, execute esse comando:

```python
mkdocs --version
```

## Criando a documentação

Para começar a nossa documentação é muito fácil, basta digitar esse comando:

```python
mkdocs new my-project
```

>Onde tem `my-project` você coloca o nome da sua docomentação

Depois entre no diretório que foi criado:

```python
cd my-project
```
Dentro desse diretório você vai ter uma estrutura igual a essa:

```
├── docs
│ └── index.md
└── mkdocs.yml
```

Agora vamos entender o que são esses arquivos e pasta. O MkDocs tem apenas um arquivo de configuração, como eu tinha falando acima, esse arquivo é o `mkdocs.yml` e uma pasta chamada `docs` que conterá os nossos arquivos da documentação escritos em Markdown. No momento, a pasta docs contém apenas uma única página de documentação, chamada index.md.

## Inicializando o servidor

Vamos inicializar o servidor do MkDocs para verificar como está a nossa documentação até agora:

> Lembre-se de estar no mesmo diretório que o arquivo de configuração `mkdocs.yml`

```python
mkdocs serve
```

Abra o seu navegador e digite a seguinte URL `http://localhost:8000/`, encontrará uma página igual a essa:

![](img/mkdocs.png)

## Editando as páginas

Vamos adicionar uma segunda página a nossa documentação, o nome dela será `about.md` e deve ficar dentro da pasta **docs**. O conteúdo dela vai ser esse:

```
# About

## Random

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Random2

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Random3

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
```

Feito isso, o MkDocs colocará automaticamente a nossa página no menu de navegação. Como vocês podem observar, cada título do documento virou um hyperlink no menu lateral e a URL que será exibida é o nome que você deu para o arquivo, neste casso `about`.

![](img/mkdocs2.png)

O nome **Welcome to MkDocs** no menu de navegação não está muito interessante, quero deixar apenas o nome **home**, porque o MkDocs utiliza o primeiro título do documento e define como nome do menu de navegação. Então vamos alterar isso, primeiro que temos abrir o arquivo de configuração do MkDocs (mkdocs.yml) e colocar essas informações:

```
site_name: My Docs
pages:
        - Home: index.md
        - About: about.md
```

![](img/mkdocs3.png)

O que acabamos de fazer foi adicionar o parâmetro `pages` ao arquivo de configuração, onde primeiro argumento é o nome que vai aparecer no menu de navegação e o segundo é caminho da página. Você também podem alterar o nome da documentação, para isso mude onde tem `My Docs` e colocar o nome da sua documentação.

## Campo de Pesquisa

Uma coisa que me chamou muito atenção foi o campo de pesquisa do MkDocs, porque os resultados da pesquisa incluem todas as ocorrências do termo de pesquisa no site e vinculam diretamente à seção da página em que o termo é exibido. Você tem tudo isso sem esforço ou configuração nenhuma da sua parte.

![](img/mkdocs4.png)

## Alterando o tema

O MkDocs vem com dois temas: **mkdocs** e o **readthedocs**. O  mkdocs é o tema que estavamos usando até o momento, então vamos habilitar o readthedocs. Para isso, abra o arquivo `mkdocs.yml` e adicione o parâmetro `theme` ao arquivo e passe o nome do tema.

```
site_name: My Docs
pages:
        - Home: index.md
        - About: about.md
theme: readthedocs
```

![](img/mkdocs5.png)

Você também pode instalar temas feitos por outras pessoas <a href="https://github.com/mkdocs/mkdocs/wiki/MkDocs-Themes" target="_ blank">acessando a Wiki do MkDocs</a>.

## Gerando os arquivos estáticos

Digamos que já fizemos toda a nossa documentação, então agora temos que gerar os arquivos estáticos. Para isso, só temos que digitar esse comado:

```
mkdocs build
```

Esse comando vai criar um diretório chamado `site` e ele vai conter os nossos arquivos estáticos.

```
404.html  about  css  fonts  img  index.html  js  search  search.html  sitemap.xml
```

## Deploy para o GitHub

Essa parte é importante que você tenha um conhecido básico de como usar o git. O MkDocs possui um comando que facilita o deploy para o GitHub, o  `mkdocs gh-deploy`, mas antes temos que ir no GitHub e criar um repositório vazio, eu vou colocar o nome de **test-mkdocs**.

![](img/mkdocs6.png )

Quando clicamos em `Create repository`, vamos ser enviado para essa página:

![](img/mkdocs7.png)

>Não feche essa página vamos precisar dela daqui a pouco.

Volte a pasta do projeto e inicializar o git com esse comando:

```
git init
```

Feito isso, vamos criar um arquivo chamando `.gitignore`, esse arquivo vai dizer para o git ignorar uma pasta ou arquivo, no nosso caso vamos ignorar a pasta **site**.

```
echo "site/" >> .gitignore
```

Agora vamos adicionar todos os arquivos e realizar o commit deles:

```
git add .
git commit -m "first commit"
```

Volte ao GitHub e pegue o link do repositório remoto que ele deu e adicione ao seu projeto, o meu vai ser esse:

```
git remote add origin https://github.com/allythy/test-mkdocs.git
```

Feito isso, vamos enviar nossa documentação para o GitHub:

```
git push -u origin master
```

Volte ao GitHub e atualize a página e verá que nossa documentação já está lá.

![](img/mkdocs8.png)

Certo, mas cadê o site da documentação? Calma, primeiro tivemos que colocar no nosso projeto no GitHub, porque se ele não tivesse lá o comando a seguir falharia. Então vamos voltar ao nosso projeto e executar esse comando:


```
mkdocs gh-deploy
```

Esse comando gerar o build do site, copiar os arquivos para a branch `gh-pages` caso não tenha essa branch ele vai criar (que é o nosso caso) e enviar os arquivos para o GitHub, por conta disso ele vai solicitar o seu usuário e senha do GitHub. Feito isso, ele vai gerar a URL da sua documentação.

![](img/mkdocs9.png)

É só pegar ela URL e colocar no seu navegador. Pronto, a sua documentarão feita com o MkDocs está online. O código desse projeto está <a href="https://github.com/allythy/test-mkdocs" target="_ blank">disponível no meu GitHub</a>, se gostou dá uma star lá.

![](img/mkdocs10.png)

<p>
Referência:
<a href="https://www.mkdocs.org/" target="_ blank">MkDocs</a>

</p>
