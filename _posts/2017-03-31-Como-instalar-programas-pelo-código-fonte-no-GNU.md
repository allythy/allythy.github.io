---
layout: article
title: Como instalar programas pelo código fonte no GNU/Linux
coverPhoto: /imagem/codigo-fonte.png
---
Neste artigo, vamos aprender como instalar programas pelo código fonte, isso pode parecer uma tarefa bem complicada, mas não é. Na maioria das vezes usamos ferramentas para instalar os programas sem necessidade de compilar ou corrigir dependências, como o apt-get, aptitude, yum ou pacman eles fazem isso tudo para gente. Mas existem alguns programas que vêm apenas com o código fonte, então temos que compilar, que é transformar o “texto” (linguagem de programação) em arquivos binários, pois é essa linguagem que o computador entende.

Primeiramente, temos que, baixar o pacote **build-essential** que contém as ferramentas necessárias para compilação.

No Debian e derivados, devemos executar o comando:
<pre class ="language-bash">
sudo apt-get install build-essential
</pre>

Feito isso, agora temos que descompactar o arquivo que contém o código fonte, na maioria das vezes o código fonte vem compactados em gzip ou bzip2.

<pre class="language-bash">
tar -xvzf pacote.tar.gz
</pre>

Entre no diretório que foi descompactado. Lembrando onde tem **“allythy”** é o nome do seu usuário.

<pre class ="language-bash">
cd /home/allythy/Downloads/pacote
</pre>

Dentro do diretório descompactado, é sempre recomendado ler os arquivos **readme** e **install** antes. Agora temos que executar um script, que na maioria da vezes vem como o nome **“configure”**. Esse script verifica no sistema se existem todas as dependências necessárias para a compilação do programa, se for concluído com sucesso, irá gerar o arquivo **Makefile** que contém as informações para compilação. Para executar o script basta usar esse comando:

<pre class=language-bash> ./configure </pre>

Para compilar, usamos o comando **make**, que vai ler o arquivo Makefile com as instruções de compilação e executar cada etapa. Isso pode demorar um pouco dependendo do software e do seu computador.

<pre class="language-bash"> make </pre>

Depois que o programa foi compilado, usamos o comando **make install** que vai mover os arquivos que foram compilados para os seus devidos lugares, assim concluindo a instalação. Lembrando que esse comando tem que ser executado com a permissão de super usuário (root).

<pre class="language-bash"> sudo make install </pre>

Uma dica, depois da instalação use o comando `make clean`, ele vai apagar os arquivos temporários que foram gerados durante a instalação.

Para desinstalar um programa que foi instalado pelo código fonte também é muito simples, primeiros temos que entrar naquele diretório que foi descompactado.

<pre class="language-bash">
cd /home/allythy/Downloads/pacote
</pre>

Feito isso, é só digitar o seguinte comando:

<pre class="language-bash"> sudo make uninstall </pre>

Se por algum motivo essa opção não deu certo, não se preocupe você pode usar o comando `whereis` para localizar os arquivos e depois apagá-los.

<pre class="language-bash"> whereis nome-do-pacote  </pre>

<pre class="language-bash"> sudo rm -r caminho-do-pacote </pre>

Como você pode ver não tem nada de complicado em instalar programas pelo código fonte, basicamente são três comandos :

<pre class="language-bash">
./configure
make
sudo make install
</pre>

Espero que tenha sanado suas dúvidas sobre esse assunto.
