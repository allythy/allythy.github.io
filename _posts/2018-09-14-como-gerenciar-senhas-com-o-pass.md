---
layout:     post
title:      "Como Gerenciar Senhas Com O Pass "
subtitle:   "Neste artigo, vamos aprender como gerenciar senhas com o Pass."
date:       2018-09-14 17:10:00
author:     "Allythy"
header-img: ""
---

O Pass é um simples gerenciador de senhas de linha de comando. Com o Pass, cada senha fica salva dentro de um arquivo criptografado com o GPG, onde o nome do arquivo é o site ou recurso que você gostaria de salvar a senha. Esses arquivos criptografados ficam salvos em `~/.password-store`.

O Pass torna o gerenciamento desses arquivos extremamente fácil fornecendo uma série de comandos para senhas: adicione, remova, edite, sincronizar, gerar e manipule. Neste artigo, vamos aprender como usá-lo para gerenciarmos nossas senhas.

## Instalação

A instalação do Pass é muito simples, porque o mesmo está disponível na maioria das distribuições GNU.

**Debian e derivados**
```bash
sudo apt install pass
```
**Fedora**

```bash
sudo dnf install pass
```
**Arch Linux**

```
pacman -S pass
```

## Inicializando o pass

Após a instalação do Pass, temos que **criar o nosso par de chaves usando o GPG**. Então, para isso, digite esse comando:

```bash
gpg --full-gen-key
```

Com nossas chaves criadas, vamos inicializar o Pass. Para isso, você vai precisar do **ID da sua chave GPG ou o e-mail** que você informou quando estava criando a mesma. Eu vou usar o e-mail:

```bash
pass init contato@allythy.com
```

Com isso, o Pass vai criar a um diretório para armazenar a nossas senhas.

## Inserindo senhas

>Sintaxe: pass insert pasta/serviço

Para adicionar senha ao pass é bem simples. Primeiro, vou criar uma pasta chamada e-mail e nela vou guardar as senhas dos meus e-mails. Então, vou começar com o e-mail do SempreUpdate.

```bash
pass insert email/sempreupdate

mkdir: foi criado o diretório '/home/allythy/.password-store/email'
Enter password for email/sempreupdate:
Retype password for email/sempreupdate:
```

Agora eu quero adicionar a senha do protonmail na mesma pasta email. Vai ser do mesmo jeito, mas agora ele não vai criar a pasta email, porque já foi criada antes.

```bash
pass insert email/protonmail

Enter password for email/protonmail:
Retype password for email/protonmail:
```

Para ver a estrutura de como as nossas senhas estão sendo salvas, digite:

```bash
pass

Password Store
|---- email
    |---protonmail
    |---sempreupdate
```

Vamos criar outra pasta para armazenar as senhas das redes sociais:

```bash
pass insert social/diaspora

mkdir: foi criado o diretório '/home/allythy/.password-store/social'
Enter password for social/diaspora:
Retype password for social/diaspora:
```

Se a gente não informar a pasta que vai ser criada ou usada para salvar a senha, o Pass vai salvar normalmente nossa senha, mas vai ficar desorganizado porque vai ficar “solto” no repositório `~/.password-store`. Então, é recomendado informar uma pasta.

```bash
Password Store
|---- email
|    |---protonmail
|    |---sempreupdate
|----social
     |---diaspora
```

Você também pode salvar outras informações junto à senha, como usuário, site etc. Para isso, você tem que passar a opção `--multiline` ou `-m`. Contudo, a primeira linha tem que ser a senha. Já as outras podem conter qualquer informação. Para sair e salva as informações pressione `Ctrl+d`.

```bash
pass insert -m social/noosfero
Enter contents of social/noosfero and press Ctrl+D when finished:

2wq!2oOLIF9*&<de2cx
site: noosfero.org
user: livre
```

## Gerando senhas automaticamente

Você pode mandar o Pass gerar uma senha para um serviço novo ou  já existente. Vamos gerar uma nova senha para o Protonmail com 25 caracteres:

```
pass generate email/protonmail 25

An entry already exists for social/sim. Overwrite it? [y/N] y
The generated password for email/protonmail is:
&aPO<*$~."HS)?z'9VIDh(NL0
```
Caso queira gerar senha alfanumérico coloque a opção `-n` depois do comando generate.

## Exibindo as senhas

Como a gente viu, digitando `pass` mostra a estrutura de como as senhas estão organizadas. Digamos que eu quero pegar a senha do sempreupdate. Para isso precisamos passar a pasta e o arquivo que vamos pegar a senha:

```
pass email/sempreupdate

!J|>%,a9UP3Et,X`d:L<;xr3)
```

Ele vai pedir uma senha. Essa é a senha que colocamos quando criamos a chaves GPG. O problema é que ele vai mostrar a senha do terminal. Imagine se tiver alguém perto de você nesse momento. Isso não seria nada bom. Então, vamos usar a opção `-c`. Assim, essa opção vai copiar a senha para o clipboard, deixar ela lá por 45s e depois apagar.

```
pass -c email/sempreupdate
Copied email/sempreupdate to clipboard. Will clear in 45 seconds.
```

Para ver as informações de noosfero, que foi a senha que inserimos múltiplas linhas, usamos o comando `show`:

```
pass show social/noosfero

2wq!2oOLIF9*&<de2cx
site: noosfero.org
user: livre
```

Caso você queira que a senha não seja mostrada no terminal tem que usar a opção `-c` depois do comando `show`. Como você verá, apenas a senha vai ser copiada. Então, caso queira copiar a linha 2,3 ou qualquer outra, você precisa passar o número da linha depois da opção `-c`, assim:

```
pass show -c2 social/noosfero

Copied social/noosfero to clipboard. Will clear in 45 seconds.
```

## Apagando senhas

Enfim, para remover uma senha do Pass precisamos apenas usar o comando `rm` e informar qual é senha, desse forma:

```
pass rm email/sempreupdate

Are you sure you would like to delete email/sempreupdate? [y/N] y
removido '/home/allythy/.password-store/email/sempreupdate.gpg'
```

Caso você queira remover uma pasta completa com todas senhas use a opção `--recursive` ou `-r` .

```
pass rm -r email/

Are you sure you would like to delete email/? [y/N] y
removido '/home/allythy/.password-store/email/job.gpg'
removido '/home/allythy/.password-store/email/protonmail.gpg'
foi removido o diretório: '/home/allythy/.password-store/email/'
```

Se não quiser que o pass pergunte se tem certeza na hora de apagar a senha, use a opção `--force` ou `-f`.

## Editando senha

Para editar uma senha do Pass, temos que usar o comando `edit`:

```
pass edit social/diaspora
```

## Mais informações

Para mais informações você pode <a href="https://www.passwordstore.org/" target="_ blank">acessar a página do projeto</a>
 ou olhar a documentação no terminal mesmo:

```bash
man pass
```

Entretanto, caso você não goste de usar a linha de comando <a href="https://qtpass.org/ " target="_ blank">pode instalar o QtPass</a>. Ele é uma interface gráfica para o pass. Da mesma forma do Pass, o QtPass está na maioria do repositório das distribuições GNU.

<p>
Referência:
<a href="https://www.passwordstore.org/" target="_ blank">Pass</a>
</p>
