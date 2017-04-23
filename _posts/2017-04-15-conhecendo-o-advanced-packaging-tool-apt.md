---
layout:     post
title:      "Conhecendo o Advanced Packaging Tool (APT) "
subtitle:   "Neste artigo, vamos conhecer um pouco mais o Advanced Packaging Tool (APT), o gerenciador de pacotes do Debian e seus derivados."
date:       2017-04-15 23:00:00
author:     "Allythy"
header-img: "img/post-bg-01.jpg"
---
Neste artigo, vamos conhecer um pouco mais o Advanced Packaging Tool (APT), o gerenciador de pacotes do Debian e seus derivados. Então, vamos aprender como esse gerenciador surgiu e alguns comandos que são necessário para os usuários que o utilizam.

No princípio era o .tar.gz. Os usuários tinham que compilar cada programa que quisessem usar em seus sistemas GNU/Linux, ou outro qualquer. Quando o Debian foi criado, uma nova forma de gerenciamento de pacotes tornou-se necessário. Para este sistema, foi dado o nome dpkg. Esse famoso pacote (Pacote é um arquivo binário, compactado ou não, que contém os arquivos binários do software, scripts de configuração, documentação, ícones, imagens, licenças GPL e, por vezes, os próprios arquivos-fonte. Um pacote pode ser criptografado e assinado digitalmente, apesar de nem todos o serem.) foi o primeiro a chegar nos sistemas GNU/Linux. Logo após a Red Hat decidiu criar seu próprio sistema, o RPM.

Um novo dilema rapidamente tomou conta das mentes dos criadores do GNU/Linux. Eles precisavam de um método rápido, prático e eficiente para instalar pacotes, que deveriam gerenciar automaticamente as dependências e cuidar dos arquivos de configuração ao atualizá-los. Aqui novamente, o Debian mostrou o caminho e deu vida ao APT, o ‘Advanced Packaging Tool’ (ferramenta de pacotes avançada), hoje portado pela Conectiva e incorporado por algumas outras distribuições”.

APT é um programa C++ cujo código reside principalmente na biblioteca compartilhada libapt-pkg. Usar uma biblioteca compartilhada para facilitar a criação de interfaces de usuário (front-ends), já que o código contido na biblioteca pode facilmente ser reutilizado. Historicamente, apt-get foi projetado apenas como um front-end de teste para libapt-pkg, mas seu sucesso tende a obscurecer esse fato, tornando-se a ferramenta usada no gerenciamento de pacotes padrão do Debian e seus derivados. Você também pode usar outra ferramentas para gerenciar o APT, como Aptitude, que tem uma interface semi-gráfico e o Synaptic que é uma ferramenta em modo gráfico.
Agora que já possuímos um embasamento sobre a origem e porque foi necessário criar o APT, vamos aprender alguns comandos essenciais.

## Instalação de programas

Para Instalar um programa é muito fácil, basta usar o seguinte comando:
<pre class ="language-bash">sudo apt-get install nome_do_pacote</pre>

Instalando mais de um programa simultaneamente:
<pre class="language-bash">sudo apt-get install pacote1 pacote2 pacote3</pre>

Baixa apenas os pacotes, não são desempacotados e nem instalados. Os arquivos baixados são colocados no diretório /var/cache/apt/archives
<pre class="language-bash">sudo apt-get install -d nome_do_pacote</pre>

Simulando a instalação de um pacote, isso não altera nada no seu sistema:
<pre class="language-bash">sudo apt-get install -s nome_do_pacote</pre>

>Ainda temos a opção -y que assume “sim” para todas as perguntas, e a opção -u mostrar pacotes que serão atualizados.

## Desinstalação de programas
Para remoção de um programa:
<pre class="language-bash">sudo apt-get remove nome_do_pacote</pre>

Removendo mais de um programa simultaneamente:
<pre class="language-bash">sudo apt-get remove pacote1 pacote2 pacote3</pre>

Quando você usa “apt-get remove” para desinstalar um programa, ele ainda deixa suas configurações, por exemplo: Quando você instala o servidor de impressão CUPS e cria uma configuração personalizada. Ao remover com “apt-get remove cups” essas configurações ainda continuam presentes no /etc/, caso você venha a reinstalar esse pacote estas configurações serão mantidas. Para uma desinstalação completa temos que usar esse comando:
<pre class="language-bash">sudo apt-get purge nome_do_pacote</pre>

Caso você de alguma forma danifique a instalação de um pacote, ou simplesmente deseja que os arquivos do pacote sejam repostos com a versão mais nova que estiver disponível, você pode usar esse comando:
<pre class="language-bash">sudo apt-get --reinstall install nome_do_pacote</pre>

## Atualização
Atualizar lista de repositório do sistema:
<pre class="language-bash">sudo apt-get update</pre>

Instalar as atualizações de todos os pacotes no sistema:
<pre class="language-bash">sudo apt-get upgrade</pre>

O dist-upgrade é quase igual ao upgrade , o dist-upgrade também atualiza o sistema, mas  pode remover pacotes que ele julgue necessário para atualização do sistema.
<pre class="language-bash">sudo apt-get dist-upgrade</pre>

## Obtendo informações sobre os pacotes
Para isso, vamos usar o apt-cahe que é o outra ferramenta para o APT, ela é usada para manipular e obter informações sobre os pacotes no cache (O cache é um sistema de armazenamento temporário usado para acelerar o acesso frequente de dados) do APT.

Esse comando pesquisa por pacotes que estejam relacionados com a palavra-chave que você deseja, e traz uma breve descrição sobre eles.
<pre class="language-bash">sudo apt-cache search palavra-chave</pre>

Este comando fornece a descrição do pacote, suas dependências, o nome de seu mantenedor, entre outras coisas. Ele traz mais informações do que o apt-cache search.
<pre class="language-bash">sudo apt-cache show nome_do_pacote</pre>

Mostra as dependência de um pacote:
<pre class="language-bash">sudo apt-cache depends nome_do_pacote</pre>

Este comando escreve o nome de cada pacote que o APT conhece:
<pre class="language-bash">sudo apt-cache pkgnames</pre>

Para exibir as prioridades de pacote, se ele está instalado ou não, a versão e outras coisas:
<pre class="language-bash">sudo apt-cache policy</pre>

## Limpeza

O APT mantém uma cópia de cada arquivo .deb baixado no diretório /var/cache/apt/archives/ . Caso haja atualizações frequentes, este diretório pode rapidamente ocupar uma grande espaço em disco com várias versões de cada pacote. Para efetuar essa limpeza, vamos usar dois comando. O primeiro  esvazia completamente o diretório:
<pre class="language-bash">sudo apt-get clean</pre>

O segundo remove apenas os pacotes que não podem mais ser baixados, por terem sumido dos repositórios do Debian, e são agora claramente inúteis:
<pre class="language-bash">sudo apt-get autoclean</pre>



O comando a seguir é usado para remover pacotes que foram instalados automaticamente, para satisfazer dependências de outros pacotes, que já não são necessários.
<pre class="language-bash">sudo apt-get autoremove</pre>



## Resolvendo Problemas
Às vezes, um defeito em algum pacote ou um download corrompido pode fazer com que o APT fique “travado”, sem concluir a instalação de um determinado pacote por causa de um erro qualquer e sem aceitar instalar outros antes que o problema inicial seja resolvido.
Caso isso aconteça, usamos o sistema de resolução de problemas do APT,  que verifica a lista de dependências quebradas e tenta corrigi-las, instalando pacotes necessários. Para isso, usamos esse comando:
<pre class="language-bash">sudo apt-get -f install</pre>

Caso você queira saber qual é a dependência que está faltando, o comando a seguir faz a verificação e mostra todas as dependências que o pacote necessita.
<pre class="language-bash">sudo dpkg –configure -a</pre>

Caso `apt-get -f install` não resolva, o que é bem difícil isso acontecer, experimente o `sudo apt-get -f remove`, que tem uma função similar à do `sudo apt-get -f install`, mas dá preferência a remover os pacotes com problemas, ao invés de tentar corrigir a instalação.
