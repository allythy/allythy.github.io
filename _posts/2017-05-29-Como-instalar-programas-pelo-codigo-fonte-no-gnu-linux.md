---
layout:     post
title:      "Como instalar programas pelo código fonte no GNU/Linux"
subtitle:   "Neste artigo, vamos aprender como instalar programas pelo código fonte, isso pode parecer uma tarefa bem complicada, mas não é."
date:       2017-05-07 14:00:00
author:     "Allythy"
header-img: ""
---
Neste artigo, vamos aprender como instalar programas pelo código fonte, isso pode parecer uma tarefa bem complicada, mas não é. Na maioria das vezes usamos ferramentas para instalar os programas sem necessidade de compilar ou corrigir dependências, como o apt-get, aptitude, yum ou pacman eles fazem isso tudo para gente. Mas existem alguns programas que vêm apenas com o código fonte, então temos que compilar, que é transformar o “texto” (linguagem de programação) em arquivos binários, pois é essa linguagem que o computador entende.

Primeiro,temos que baixar o pacote `build-essential` que contém as ferramentas necessárias para compilação.
No Debian e derivados, devemos executar o comando:

```bash
sudo apt install build-essential
```
Feito isso, agora temos que descompactar o arquivo que contém o código fonte, na maioria das vezes o código fonte vem compactados em gzip ou bzip2. Caso você queira saber mais sobre esse compactadores <a href="https://allythy.github.io/Empacotamento-e-compactacao-de-arquivos-no-gnu-linux" target="_ blank">leia esse artigo </a>.

```bash
tar -xvzf pacote.tar.gz
```

Entre no diretório que foi descompactado.

```bash
cd /pacote
```

Dentro do diretório descompactado, é sempre recomendado ler os arquivos **readme** e **install** antes. Agora temos que executar um script, que na maioria da vezes vem como o nome `configure`. Esse script verifica no sistema se existem todas as dependências necessárias para a compilação do programa, se for concluído com sucesso, irá gerar o arquivo **Makefile** que contém as informações para compilação. Para executar o script basta usar esse comando:

```bash
./configure
```

Para compilar, usamos o comando `make`, que vai ler o arquivo Makefile com as instruções de compilação e executar cada etapa. Isso pode demorar um pouco dependendo do software e do seu computador.

```bash
make
```

Depois que o programa foi compilado, usamos o comando `make install` que vai mover os arquivos que foram compilados para os seus devidos lugares, assim concluindo a instalação. Lembrando que esse comando tem que ser executado com a permissão de super usuário (root).

```bash
sudo make install
```
Uma dica, depois da instalação use o comando `make clean`, ele vai apagar os arquivos temporários que foram gerados durante a instalação.

## Desinstalação
Para desinstalar um programa que foi instalado pelo código fonte também é muito simples, primeiros temos que entrar  diretório onde foi descompactado o programa.

```bash
cd /pacote
```

Feito isso, é só digitar o seguinte comando:

```bash
sudo make uninstall
```

Se por algum motivo essa opção não deu certo, não se preocupe você pode usar o comando `whereis` que retorna a localização os binários, código fonte e manuais dos programas.

```bash
whereis nome-do-pacote
```
Sabendo o caminho onde os arquivos foram instalados é só removê-los com o comando `rm -r`.
```bash
sudo rm -r caminho-do-pacote
```
Como você pode ver não tem nada de complicado em instalar programas pelo código fonte, basicamente são três comandos :

```bash
./configure
make
sudo make install
```
Espero que tenha sanado suas dúvidas sobre esse assunto.
