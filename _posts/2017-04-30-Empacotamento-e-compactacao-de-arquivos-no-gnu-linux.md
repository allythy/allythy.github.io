---
layout:     post
title:      "Empacotamento e Compactação de arquivos no GNU/Linux"
subtitle:   "Nesse artigo, vamos aprender sobre empacotamento e compactação de arquivos."
date:       2017-04-30 15:00:00
author:     "Allythy"
header-img: ""
categories: GNU/Linux
---
Nesse artigo, vamos aprender sobre empacotamento e compactação de arquivos. Para o empacotamento de arquivos utilizamos o comando tar, é válido ressaltar que o empacotamento não diminui o tamanho do arquivo, ele faz a junção de um ou mais arquivos em um único arquivo, quem diminui o tamanho são os compactadores, que são GNU gzip (gzip) ou bzip2. Primeiro vamos entender a sintaxe do comando tar.

###  Sintaxe

```bash
tar [opções] [nome do novo arquivo] [arquivo de origem]
```
Vejamos alguma opções do comando tar:
```bash
c = Cria um novo arquivo tar
t = Exibe o conteúdo de um arquivo tar
p = Mantém as permissões originais dos arquivos
r = Adiciona arquivos a um arquivo tar existente
f = Permite especificar o arquivo tar que vai ser usado, por causa disso é a ultima opção
v = Exibe detalhes da operação
x = Extrai arquivos de uma arquivo tar existente
C = especifica o diretório dos arquivos a serem armazenados
```
## Usando o comando tar

Primeiro vamos aprender a usar o comando `tar` para o empacotamento de arquivos e extração mais adiante usaremos os compactadores, que não tem nada de difícil.

Criando um arquivo .tar

```bash
tar -cvf artigos.tar telgram.odt mycroft.odt
```
Exibindo o conteúdo de um arquivo .tar

```bash
tar -tf artigos.tar
```
Extraindo um arquivo .tar

```bash
tar -xvf artigos.tar
```

Adicionar um arquivo ao arquivo já empacotado

```bash
tar -rf artigos.tar mozilla.odt
```

Excluindo um arquivo do arquivo.tar

```bash
tar -f artigos.tar –-delete mozilla.odt
```
## Usando os compactadores

Agora que já sabemos usar o comando `tar` para o empacotamento de arquivos, vai ser bem fácil aprender a comprimir arquivos. Primeiros vamos aprender a compactar com o gzip, para  isso temos que acrescentar uma opção ao comando tar que é `-z`, essa opção indica que os arquivos serão compactados em **gzip**, que resultará em um arquivo com extensão **.tar.gz**.

Criando um arquivo compactado com gzip

```bash
tar -cvzf artigos.tar.gz telgram.odt mycroft.odt
```

Extraindo arquivos com gzip

```bash
tar -xvzf artigos.tar.gz
```

Quando for comprimir arquivos usando o **bzip2**, só acrescentar o parâmetro `-j`, essa opção indica que os arquivos serão compactados em bzip2, que resultara um arquivo com a extensão **.tar.bz2**.

Criando um arquivo compactado com bzip2

```bash
tar -cvjf artigos.tar.bz2 telgram.odt mycroft.odt
```

Extraindo arquivos com bzip2

```bash
tar -xvjf artigos.tar.bz2
```
