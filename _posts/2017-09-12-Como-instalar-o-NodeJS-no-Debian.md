---
layout:     post
title:      "Como instalar o NodeJS no Debian"
subtitle:   "Neste artigo, vamos aprender como instalar o NodeJS no Debian"
date:       2017-09-12 17:00:00
author:     "Allythy"
header-img: ""
---

Neste artigo, vamos aprender como instalar o NodeJS no Debian. Node.js é uma plataforma para desenvolvimento de aplicações server-side baseadas em rede utilizando JavaScript e o V8 JavaScript Engine, ou seja, com Node.js podemos criar uma variedade de aplicações Web utilizando apenas código em JavaScript.

## Baixando e executando script

Esta parte é super fácil. Na verdade, é o que é recomendado pela NodeJS Foundation. Use cURL para baixar script. O script detecta sua distribuição e configura o repositório para você. Ele ainda executa `apt update`. Você provavelmente deve ter o `sudo` instalado. Caso contrário, você precisa executar o script com o usuário `root` e os comandos onde eu utilizo o sudo você deve omitir o mesmo, porque se você não fizer isso vai da um erro dizendo que o comando não foi encontrado.

Caso você não tenho o cURL, use esse comando para instalar:
```bash
sudo apt install curl
```

__Versão LTS do Nodejs__
```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
```

__Última versão do Nodejs__
```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
```

## Instalando o NodeJs

Agora que temos o repositório configura. Você pode instalar o NodeJS normalmente através do `apt`.
```bash
sudo apt install nodejs
```

## Testando NodeJS

Certifique-se que o NodeJS foi instalado e está funcionando corretamente. Você pode fazer isso usando esse comando:
```nodejs
node -v
```

## Instalando um pacote com o NPM

Antes de começar a usar o NPM, verifique se está instalado no seu Debian o pacote `build-essential` para evitar problemas futuros quando encontra pacote fonte. Caso você não tenha instalado, use o comando abaixo para instalar:
```bash
sudo apt install build-essential
```

O NPM é um gerenciador de pacotes do NodeJS. Com ele você pode instalar, remover, procurar pacotes entre outras coisas como a gente faz com `apt` no Debian e seus derivados. Vamos instalar o Express para testar o npm. O Express é um popular  framwork NodeJS.

```bash
sudo npm install express
```

<a href="https://linuxconfig.org/how-to-install-nodejs-on-debian-9-stretch-linux" target="_ blank">Fonte</a>
