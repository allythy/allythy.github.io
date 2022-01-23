---
layout: post
title: Como usar o pre-commit parte 1
date: 2021-10-16
header-img: ""
categories: [Git, Python]
---

Esse artigo vai ser dividido em duas partes, primeiro vamos entender o conceito
do hook, como o Git usa os hooks e como podemos configurar os hooks com o
pre-commit. Eu acho importante compreender um pouco desses conceitos para
entender como o pre-commit é útil e nos ajuda. Na segunda parte do artigo
vamos criar o nosso próprio hook e disponibilizar para quem quiser usar ele.

Conteúdo:

- [O que é Git Hook](#o-que-é-git-hook)
- [O que é pre-commit](#o-que-é-pre-commit)
- [Como instalar](#como-instalar)
- [Como configurar](#como-configurar)
- [Como usar](#como-usar)
- [Primeiro exemplo](#primeiro-exemplo)
- [Segundo exemplo](#segundo-exemplo)

## O que é Git Hook

Hook em uma tradução literal é gancho, em programação são usados para alterar ou
acrescentar algum comportamento, interceptando chamadas de função, mensagens
ou eventos passados entre componentes. O Git usa dessse conceito (Git hook)
para disparar scripts personalizados quando certas ações ocorrem. Existem dois
grupos de hooks: lado do cliente (client-side) e lado do servidor (server-side).
Os ganchos do lado do cliente são acionados por operações de commit e merge,
enquanto os hooks do lado do servidor são executados em operações por meio da
internet, como push e pull.

Os hooks são todos armazenados em um subdiretório dentro do diretório Git. Na
maioria dos projetos é .git/hooks. Quando você inicializa um novo repositório
com git init, o Git preenche o diretório hooks com alguns scripts de exemplo.
Todos os exemplos são escritos em shell scripts ou Perl, mas você pode usar
qualquer linguagem de script, desde que possa ser executada como um executável,
você pode escrevê-los em Ruby, Python ou qualquer linguagem com a qual esteja
familiarizado.

O Git hook é útil para identificar problemas simples antes de enviar o código
para revisão(code review), como executar um hook em cada commit para
identificar problemas no código, ponto e vírgula ausente, espaço em
branco à direita e outras coisas.

## O que é pre-commit

Os hooks do Git ficam apenas locais na sua máquina, eles não são copiados
quando você executa o git clone. Isso é um grande problema, porque você precisa
encontrar uma maneira de garantir que os hooks permaneçam atualizados entre os
membros de sua equipe e funcionando em diferentes estruturas de projetos.

O pre-commit nos ajuda a resolver esse problema. É um gerenciador de hook para
várias linguagens. Você especifica uma lista de hooks que deseja que o
pre-commit instale e execute, esses hooks podem ser escritos em qualquer
linguagem e ele pode rodar antes de cada commit, você pode cofigurala-lo para ser
executado em outras ações, mas não vamos fazer isso nesse artigo. Pre-commit é
projetado especificamente para não requerer acesso
root(privilégios de administrador), se um membro da sua equipe não tem um node
instalado, mas modifica um arquivo JavaScript, o pré-commit automaticamente
lida com o download e a construção do node para executar o eslint sem root.

## Como instalar

Você pode instalar pelo gerenciador de pacotes do Python, pip. Caso você não
tenha o pip instalado tem
[esse post que mostra como instalar no GNU/Linux.](https://allythy.github.io/Como-instalar-o-pip-para-gerenciar-pacotes-do-Python-no-GNU-Linux)

```python
pip install pre-commit
```

Também tem a opção de instalar via script:

```bash
curl https://pre-commit.com/install-local.py | python -
```

Vamos verificar se foi instalado:

```python
pre-commit --version
```

## Como configurar

Temos que criar o arquivo de configuração do pre-commit. Ele precisa estar na
raiz do projeto com o nome `.pre-commit-config.yaml`. Esse arquivo descreve
quais repositórios e hooks são instalados. A estrutura básica do arquivo é essa:

```yml
repos:
-   repo: https://linkdorepositorio.com/meu-hoook
    rev: v1.2.3
    hooks:
    -   ...
```

>`repos`: lista dos repositórios.
>
>`repo`: o url do repositório que o hook vai ser clonado.
>
>`rev`: releases(versão) que vai ser clonada.
>
>`hooks`: Lista dos hook que irão ser executados.

No arquivo de configuração a sessão hooks é usado para definir qual hook vai
ser usado do repositório e também permite fazer algumas personalizações. Todas
as chaves opcionais receberão o valor padrão configurado no repositório. A
única chave obrigatória é o `id` que identifica qual é o hook que vai ser usado
daquele repositório.
A lista completa das chaves você [pode ler na documentação](https://pre-commit.com/#pre-commit-configyaml---top-level).

Vamos criar um pre-commit que remova os espaços em branco a direita de
todos os arquivos.

```yml
repos:
-   repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v1.2.3
    hooks:
    -   id: trailing-whitespace
```

Está configuração diz para clonar o repositório **pre-commit-hooks** na sua
**versão v1.2.3** e executar seu hook chamado **trailing-whitespace**.

## Como Usar

Com o arquivo configurado, agora vamos rodar o pre-commit com esse comando:

```python
pre-commit install
```

Esse comando vai instalar o pre-commit em seus git hooks e a partir de agora o
pre-commit será executado automaticamente em cada commit do seu repositório.
Caso o projeto que você for contribuir tenha um arquivo de configuração do
pre-commit, a execução de pre-commit install deve ser sempre a primeira coisa
a ser feita.

O pre-commit vai ser executado apenas nos arquivos que foram modificados, caso
você queira executar em todos os arquivos use:

``` bash
pre-commit run --all-files
```

Para executar hooks individuais, use:

```bash
pre-commit run <hook_id>
```

Na primeira vez que o pré-commit é executado ele automaticamente baixa,
instala e executa os hooks. Esse processo na primeira vez pode ser lento, mas
nas próximas vezes serão mais rápidas porque já foram realizadas essas etapas.

## Primeiro exemplo

Vamos colocar o pre-commit em um projeto de documenetação feito com o Mkdocs.
Esse projeto está disponível no GitHub para você baixar.
Caso queira saber mais como criação documentação com o mkdocs tem esse artigo
falando mais sobre o assunto.

Esse projeto tem apenas arquivos [markdown](https://daringfireball.net/projects/markdown/)
,[YAML](https://yaml.org/) e algumas imagens. Como é um projeto livre queremos
definir padrões para os nossos arquivos, garantindo que a base de código sempre
terá o mesmo aspecto. Para isso, vamos colocar alguns lint
(programa que verificar se está em conformidade com as regras estabelecidadas)
para analizar os nossos arquivos.

A estrutura do projeto está assim:

```sh
.
├── docs
│   ├── about.md
│   └── index.md
├── mkdocs.yml
├── README.md
└── requirements.txt

```

Crie o arquivo `.pre-commit-config.yaml` na raiz do projeto. 

```sh
.
├── docs
│   ├── about.md
│   └── index.md
├── .pre-commit-config.yaml
├── mkdocs.yml
├── README.md
└── requirements.txt
```

Primeiro vamos colocar um hook para verificar os arquivos markdowns.
```yaml
repos:
  - repo: https://github.com/igorshubovych/markdownlint-cli
    rev: v0.29.0
    hooks:
      - id: markdownlint
```

```yaml
  - repo: https://github.com/adrienverge/yamllint.git
    rev: v1.26.3
    hooks:
      - id: yamllint
        args: [.yamllint]
```

```yaml
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.0.1
    hooks:
      - id: check-added-large-files
      - id: detect-private-key
```

O arquivo final do `.pre-commit-config.yam` ficará assim:

```yaml
repos:
  - repo: https://github.com/igorshubovych/markdownlint-cli
    rev: v0.29.0
    hooks:
      - id: markdownlint
  - repo: https://github.com/adrienverge/yamllint.git
    rev: v1.26.3
    hooks:
      - id: yamllint
        args: [.yamllint]
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.0.1
    hooks:
      - id: check-added-large-files
      - id: detect-private-key
```

## Segundo exemplo

```yaml
repos:
- repo: https://github.com/pre-commit/pre-commit-hooks
  rev: v4.0.1
  hooks:
  - id: check-added-large-files
  - id: debug-statements
  - id: end-of-file-fixer
  - id: trailing-whitespace
- repo: https://github.com/PyCQA/flake8
  rev: 3.9.2
  hooks:
  - id: flake8
- repo: https://github.com/PyCQA/isort
  rev: 5.8.0
  hooks:
  - id: isort
- repo: https://github.com/ambv/black
  rev: 21.7b0
  hooks:
  - id: black

```
