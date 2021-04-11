---
layout: post
title: Como criar chave SSH
date: 2021-04-10
header-img: ""
categories: [Terminal, SSH]
---

O Secure Shell (mais conhecido como SSH) é um protocolo de rede criptográfico
que permite aos usuários executar com segurança vários serviços de rede em uma
rede não segura. As chaves SSH fornecem uma maneira mais segura de fazer login
em um servidor com SSH do que usar apenas uma senha. Embora uma senha possa
eventualmente ser quebrada com um ataque de força bruta, as chaves SSH são
quase impossíveis de decifrar usando esse método.

A geração de um par de chaves fornece duas longas sequências de caracteres: uma
chave pública e uma privada. Você pode colocar a chave pública em qualquer
servidor e desbloqueá-la conectando-a a um cliente que já tenha a chave
privada. Quando os dois coincidem, o sistema é desbloqueado sem a necessidade
de uma senha. Você pode aumentar ainda mais a segurança protegendo a chave
privada com uma senha.

O OpenSSH é a principal ferramenta de conectividade para login remoto com o
protocolo SSH. Ele criptografa todo o tráfego para eliminar a interceptação, o
sequestro de conexões e outros ataques. Além disso, ele fornece um amplo
conjunto de recursos de encapsulamento seguro, vários métodos de autenticação
e opções de configuração sofisticadas.

## Instalação

No Debian de derivados:

```
sudo apt install openssh-client
```

## Criando chaves

```
ssh-keygen -t rsa -b 4096
```

```
Generating public/private rsa key pair.
Enter file in which to save the key (/home/all/.ssh/id_rsa): 
Created directory '/home/all/.ssh'.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/all/.ssh/id_rsa
Your public key has been saved in /home/all/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:Q/7DP7b9o567eYJm891x0oG9AScs+0ed9iweBibdk18 all@debian
The key's randomart image is:
+---[RSA 4096]----+
|                 |
|            .    |
|        .  . + . |
|       o   .o.*.o|
|        S ..+.+BE|
|         + o..o=*|
|          + ..=+*|
|           Bo==*+|
|          o.*@Oo+|
+----[SHA256]-----+
```

> **-t**
>Especifica o tipo de chave que vai ser criada. Os valores possíveis são: 
>“dsa”, “ecdsa”, “ecdsa-sk”, “ed25519”, “ed25519-sk”, ou “rsa”.
>
> **-b** 
>Especifica o número de bits para chave criada. Para chaves RSA, o tamanho
>mínimo é 1024 bits e o padrão é 3072 bits. Geralmente, 3072 bits é
>considerado suficiente, mas vou colocar o tamanho máximo 4096.
>As chaves DSA devem ter exatamente 1024 bits, conforme especificado 
>por FIPS 186-2. Para chaves do ECDSA.

O programa perguntará onde gostaria de salvar as chaves, por padrão as chaves 
são salvas no diretório `.ssh` na pasta /home do usuário, mas você pode escolher
outro local. Em seguida, vai pedir uma senha para sua chave, você pode deixar
em branco mas aconselho colocar uma senha para garantir mais segurança. Feito
isso, suas chaves estão criadas. 

A `id_rsa` é sua chave privada(nunca deve compartilhar ele) e `id_rsa.pub` a 
chave publica que você pode repassar para outras pessoas.