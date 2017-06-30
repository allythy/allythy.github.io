---
layout:     post
title:      "Como baixar playlist do Youtube usando o youtube-dl"
subtitle:   "Esta vai ser uma dica bem rápida, mas muito útil de como baixar playlist do Youtube usando o youtube-dl"
date:       2017-06-30 16:00:00
author:     "Allythy"
header-img: ""
---
Esta vai ser uma dica bem rápida, mas muito útil de como baixar playlist do Youtube usando o youtube-dl. Para quem ainda não conhece o youtube-dl é um pequeno programa de linha de comando para baixar vídeos e áudio do YouTube e outros sites, o programa é escrito em python.

Caso você não tenha o programa instalado, use esse comando para instalar o Debian e derivados:

```bash
sudo apt install youtube-dl
```

Feito isso, vamos pegar o link da playlist do canal do YouTube do SempreUpdate como exemplo.

![playlist do canal do youtube do SempreUpdate](img/sempreupdate.png)

Com o link em mãos, use esse comando para baixar a playlist

```bash
youtude-dl -cit coloque-aqui-o-link-da-playlist
```
>`-c` Continua do download da onde parou, caso você tenha cancelado ( Ctrl+C)
>
`-i` Continuar caso tenha algum erros de download, por exemplo, para ignorar vídeos indisponíveis em uma playlist
>
`-t` Usa o título do nome do vídeo

Legal, mas eu não quero baixar todos os vídeos só quero do vídeo 5 até o 9, então você usa esse comando:

``` bash
youtube-dl --playlist-start 5 --playlist-end 9 link-da-playlist
```

>`--playlist-start` Vídeo da playlist que vai começar.
>
>`--playlist-end` Vídeo da playlist que vai parar.

Interessante, mas eu quero baixar apenas os vídeos 4, 6 e 15. Então, você tem que usar esse comando:

```bash
youtube-dl -cit --playlist-items 4,6,15 link-da-playlist
```
>`--playlist-items` Faz o download de vídeos específicos de uma playlist. Para isso, você tem que especificar o índices dos vídeos na playlist separando-os por vírgulas.

Você pode também informar ao mesmo tempo os vídeos que gostaria de baixar na playlist e especificar o intervalo. Com esse comando:

```bash
youtube-dl -cit --playlist 4-7,8,10-13 link-da-playlist
```
