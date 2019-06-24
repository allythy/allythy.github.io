---
layout:     post
title:      "Conheça três ferramentas de conversão de arquivos de linha de comando para GNU/Linux"
subtitle:   "Neste artigo, vamos ver três ferramentas de conversão de arquivos de linha de comando para GNU/Linux."
date:       2017-06-24 17:00:00
author:     "Allythy"
header-img: ""
categories: Dica
---
Neste artigo, vamos ver três ferramentas de conversão de arquivos de linha de comando para GNU/Linux.

## Pandoc

Pandoc é um ótimo utilitário para converter de uma linguagem de marcação para outra, além de fazer conversões rápidas e boas. Tem um arquivo formatado com Markdown que você deseja converter para um documento do LibreOffice Writer? Ou tem um documento LaTeX que você quer transformar em um EPUB? Ou talvez você tenha um arquivo HTML que deseja transformar em um slide deck. Pandoc está a altura de todas essas tarefas.

Veja como usar Pandoc para uma conversão simples (neste caso, de HTML para reStructuredText). Para mais informações sobre essa ferramenta, leia a <a href="http://pandoc.org/MANUAL.html#options" target="_ blank">documentação do Pandoc</a>.

```bash
pandoc -t rst myfile.htlm -o myfile.rst
```

## LibreOffice

Você provavelmente está pensando: “Espere, o LibreOffice é uma aplicação gráfica”. Sim, mas o que muitas pessoas não sabem é que você pode executar LibreOffice a partir da linha de comando para converter rapidamente um ou mais arquivos. Por exemplo, transformar um conjunto de slides do LibreOffice Impress em PDF, digite o seguinte:

```bash
soffice --headless --convert-to pdf SoftwareLivre.odp
```

Você pode substituir a extensão `.pdf` para qualquer formato de arquivo que você deseja converter. A opção `--headless` permite usar o aplicativo sem a interface gráfica.

Usar o LibreOffice na linha de comando para converter um único arquivo não é uma coisa interessante, pois você poderia fazer isso mais rápido usando a interface gráfica. No entanto, para converter vários arquivos ao mesmo tempo é uma ótima opção. Digamos que você queira converter todos os documentos do Microsoft Word para o formato do LibreOffice Writer, então digite o comando:

```bash
soffice --headless --convert-to odt *.doc
```

## FFmpeg

Considerando que o Pandoc é o canivete suíço para conversão entre linguagens de marcação, o FFmpeg é o Pandoc para conversão de áudios e vídeos. O FFmpeg é um conjunto de bibliotecas e executáveis ​​que lhe dão a capacidade de converter seemlessly entre quase qualquer formato.

Aqui está um exemplo de uma simples conversão de um vídeo em um formato AVI para Ogg Theora:

```bash
ffmpeg -i myvideo.avi myvideo.ogg
```

FFmpeg pode fazer muito mais do que isso. Você pode definir a taxa de quadros de um vídeo e adicionar legendas para ele, mudar a qualidade de áudio e muito mais.

O FFmpeg tem muitas opões e é fácil esquecê-las, especialmente se você usar o FFmpeg de vez em quando. Então é sempre bom <a href="https://ffmpeg.org/ffmpeg.html" target="_ blank">ler a documentação</a>.

<a href="https://opensource.com/life/16/10/3-file-conversion-tools-linux-command-line" target="_ blank">Fonte</a>
