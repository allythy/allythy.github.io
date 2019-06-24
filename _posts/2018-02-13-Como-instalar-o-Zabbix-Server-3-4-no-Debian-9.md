---
layout:     post
title:      "Como instalar o Zabbix Server 3.4 no Debian 9"
subtitle:   "Vamos aprender como instalar o Zabbix 3.4 no Debian 9, uma solução livre para monitoramento."
date:       2018-02-11 21:00:00
author:     "Allythy"
header-img: ""
categories: [Debian, Zabbix]
---

Este artigo vai tomar como base o material e os conhecimentos adqueridos no treinamento que fiz mês passado sobre o Zabbix, ministrado pelo Werneck Costa que é Zabbix Certified Specialist e Zabbix Certified Professional. Vamos aprender como instalar o Zabbix Server 3.4 no Debian 9.

 A solução de monitoramento Zabbix é um Software Livre de última geração com classe empresarial. Ele é projetado para monitorar disponibilidade e desempenho dos componentes de uma infraestruturada de TI. O Zabbix é capaz de monitorar um número ilimitado de métricas e fornecer análises sofisticadas sobre a saúde da infraestrutura de TI. Sendo capaz de identificar a fonte de um problema nos sistemas de T.I, permite aos usuários Zabbix (SysOps) agirem rapidamente, reduzindo os custos associados com a paralisação.

__Roteiro para instalação do Zabbix:__

>1. Instalação do repositório Debian;
>2. Instalação dos pacotes Zabbix (servidor e cliente) e suas dependências;
>3. Configuração do banco de dados;
>4. Configurar interface web;
>5. Testar e validar a instalação acessado via navegador.

### 1. Instalação do repositório Debian

Primeiro, vamos logar como root para fazer a instalação. Feito isso, vamos baixar o pacote do Zabbix 3.4:

```bash
su
```
```bash
 wget http://repo.zabbix.com/zabbix/3.4/debian/pool/main/z/zabbix-release/zabbix-release_3.4-1+stretch_all.deb
 ```

Agora vamos instalar o pacote que baixamos, digite:
```bash
dpkg -i zabbix-release_3.4-1+stretch_all.deb
```

Vamos atualizar o repositório do sistema:
```bash
apt update
```

## 2. Instalação dos pacotes Zabbix

Temos que instalar o pacote Zabbix Server e suas dependências:
```bash
apt install zabbix-server-mysql zabbix-frontend-php zabbix-agent zabbix-get -y
```

Após a execução do comando anterior, todos os componentes estarão instalados (servidor web, php, banco de dados e servidor Zabbix). Para fazer o primeiro acesso (teste), recarregue o Apache e abra o seu navegador e acesse o ip do seu servidor barra zabbix:
```bash
systemctl reload apache2
```
```bash
192.168.0.106/zabbix
```
![Página de boas-vindas do Zabbix](img/zabbix1.png)

Feito o primeiro teste, vamos voltar para emulador de terminal e editar alguns parâmetros de configuração do Apache para o frontend do Zabbix. Algumas configurações do PHP estão corretas, mas é necessário configurar o time zone. Para isso, vou usar o editor de linha de comando, o vim. Caso você não tenha instalado, use esse comando:
```bash
apt install vim
```

Vamos abrir o arquivo de configuração:

```bash
vim /etc/apache2/conf-available/zabbix.conf
```

Procure o seguinte bloco de código __mod_php7.c__, quando encontrar pressione a tecla `i` para entrar no modo de inserção do vim.
Retire o comentário (“#”) da linha __php_value date.timezone__ e altere para o time zone do seu Estado,
<a href="https://secure.php.net/manual/en/timezones.america.php" target="_ blank">caso você não saiba o seu time zone, procure aqui.</a>

![Arquivo de configuração do Zabbiz Server](img/zabbix2.png)

Feito isso, pressione `Esc` para sair do modo de inserção e depois `:x` que vai salvar o arquivo e sair do vim.

Agora vamos reiniciar o servidor Apache para aplicação da configuração feita no arquivo do PHP:

```bash
systemctl restart apache2
```

## 3. Configuração do banco de dados

Antes de voltar à interface web, será preciso executar algumas operações no banco de dados:

>- Setar senha de root
>- Criar banco Zabbix
>- Criar usuário para acesso

Vamos executar o comando a seguir para melhorar a segurança do nosso banco de dados MariaDB, configurando uma senha para o root, remover o usuário de conexão anônima, desabilitar acesso de root feito de fora deste servidor, remover a base de test que possui acesso anônimo.

```bash
mysql_secure_installation
```

O utilitário solicitará uma senha de root para se conectar. Como não existe, pode deixar em branco e apertar o Enter:

![Tela que solicita a senha do root do bando de dados](img/zabbix3.png)

O utilitário perguntará se deve ser setada uma senha para o root. Responda com um __“y”__ e informe sua senha, vou colocar __Allythy!__:

![Tela para configurar a senha do usuário root](img/zabbix4.png)

Agora é só responder __"y"__ para as próximas perguntas. No final o programa informará que a configuração foi finalizada:

![Tela informando que todos os campos foram preenchidos](img/zabbix5.png)

Ainda no terminal, logue no console do MariaDB com usuário root e senha que você colocou acima.

```sql
mariadb -u root -p
```

Vamos criar um banco de dados chamado zabbix_db:
```sql
create database zabbix_db character set utf8 collate utf8_bin;
```

Depois criaremos um usuário chamado __zabbix_usr__ para o banco que acabamos de criar e colocar como senha para esse usuário __@Allythye@!__. Caso você queira saber como criar usuário e conceder permissão,
<a href="https://allythy.github.io/Como-criar-um-novo-usuario-e-conceder-permissoes-no-MariaD-e-MySQL" target="_ blank">temos esse artigo sobre o assunto.</a>

```sql
grant all privileges on zabbix_db.* to zabbix_usr@localhost identified by '@Allythye@!';
```
Feito isso, podemos sair do console do MariaDB:

```sql
exit;
```

Agora temos que fazer importação dos dados iniciais para o banco de dados que criamos, o zabbix_db:

```bash
zcat /usr/share/doc/zabbix-server-mysql/create.sql.gz | mysql -u zabbix_usr -p@Allythye@! zabbix_db
```
Vamos editar o arquivo de configuração do banco de dados do servidor Zabbix que se encontra no diretório /etc/zabbix:

```bash
vim /etc/zabbix/zabbix_server.conf
```
Procure pelos parâmetros abaixo e coloque as informações do seu banco de dados. Lembrando, pressione a tecla `i` para entrar no modo de inserção do vim, depois de alterar os parâmetros pressione `Esc` e depois `:x` para salvar e depois sair do vim.

```bash
DBName=zabbix_db
DBUser=zabbix_usr
DBPassword=@Sempre#Update@!
```
![Tela do arquivo de configuração do zabbix server mostrando as variáveis alteradas](img/zabbix6.png)

Feito isso, vamos reiniciar o servidor Zabbix:

```bash
systemctl restart zabbix-server
```
Configurando o Zabbix para inicializar junto ao sistema:

```bash
systemctl enable zabbix-server
```

## 4. Configurar interface web

Vamos voltar para a interface web, coloque o ip do seu servidor e no final coloque __“/zabbix”__, depois clique em Next step:

```bash
192.168.0.106/zabbix
```
![Tela de boas-vindas do Zabbix](img/zabbix1.png)

Verifique se está tudo OK, se tiver, clique Next step:

![Tela mostrando a checagem dos pré-requisitos](img/zabbix7.png)

Preencha os campos com as informações do banco de dados e depois clique em Next step:

![Tela para colocar as informações do banco de dados](img/zabbix8.png)

Coloque um nome ,ip e porta do seu Servidor Zabbix:

![Tela para colocar as informações do servidor](img/zabbix9.png)

Confirme tudo:

![Tela para confirmar as configurações feitas anteriomente](img/zabbix11.png)

Instalação finalizada com sucesso, clique em Finish:

![Tela mostrando que a instalação foi finalizada com sucesso](img/zabbix12.png)

O acesso padrão é:

```
Usuário: Admin
Senha: zabbix
```
Pronto, com o servidor Zabbix instalado é só começar o monitoramento da sua rede, servidores e tudo que essa poderosa ferramenta tem a oferecer.
