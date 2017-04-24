---
layout:     post
title:      "Como verificar autenticidade da ISO do Debian"
subtitle:   "Neste artigo, vamos aprender como verificar autenticidade da ISO do Debian. É uma coisa bem rápida de se fazer e importante"
date:       2017-03-17 20:00:00
author:     "Allythy"
header-img: "img/post-bg-01.jpg"
---
Neste artigo, vamos aprender como verificar autenticidade da ISO do Debian. É uma coisa bem rápida de se fazer e importante, porque fazendo essa verificação podemos ter certeza que aquela ISO não foi corrompida. Se o pessoal que baixou o ISO do Linux Mint tivesse verificado a assinatura da ISO deles não teria ocorrido aquele escândalo no começo do ano.

Enfim, vamos para o que interessa. Depois de ter baixado a ISO do Debian temos que baixar os arquivos SHA512SUMS e SHA512SUMS.sign e colocar no mesmo diretório da ISO do Debian. Primeiramente, vamos verificar a hash da ISO que baixamos como esse comando:

{% highlight bash %}
sha512sum -c SHA512SUMS | grep debian-testing-amd64-netinst.iso
{% endhighlight %}

![Mostrando que a comparação da hash foi bem sucedida](/img/terminal01.png)

Vai aparecer uma mensagem com o nome **“SUCESSO”**, isso nos diz que o Download não foi corrompido, mas a gente não sabe se veio do Debian. Para isso temos que verificar a assinatura dos arquivos que contém as hashs. Primeiro, temos que obter a chave pública da pessoa que assinou o arquivo usando o seguinte comando:

{% highlight bash %}
gpg —verify SHA512SUMS.sign
{% endhighlight %}

Você receberá uma mensagem informando que a chave pública com **ID 09EA8AC3** não está actualmente disponível em seu sistema, então precisamos baixar essa chave diretamentamente do keyring server do Debian, para isso vamos usar esse comando:

{% highlight bash %}
gpg —keyserver keyring.debian.org —recv 6294BE9B
{% endhighlight %}

Lembrando que no lugar desse ID **“6294BE9B”** você vai colocar o ID que apareceu pra você com o comando anterior. Feito isso, agora é só fazer a verificação da assinatura com esse comando:

{% highlight bash %}
gpg —verify SHA512SUMS.sign SHA512SUMS
{% endhighlight %}


Se tudo ocorrer bem você irar receber essa mensagem **“ Good signature from "Debian CD signing key “**. Também é bom você verificar se o chave do fingerprint que foi gerado pelo último comando é o mesmo que tem no [site do Debian](https://www.debian.org/CD/verify.pt.html), para ter certeza que ninguém modificou. Agora é só instalar o seu Debian. Com ajuda do Samuel Henrique da comunidade Debian.
