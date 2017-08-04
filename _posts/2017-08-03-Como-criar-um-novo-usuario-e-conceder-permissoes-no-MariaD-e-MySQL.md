---
layout:     post
title:      "Como criar um novo usuário e conceder permissões no MariaDB e MySQL "
subtitle:   "Neste artigo, vamos aprender como criar um novo usuário e conceder permissões no MariaDB e MySQL"
date:       2017-08-03 22:00:00
author:     "Allythy"
header-img: ""
---
Neste artigo, vamos aprender como criar um novo usuário e conceder permissões no MariaDB e MySQL. O  MariaDB e MySQL são sistemas de gerenciamento de banco de dados (SGBD), que possuem uma variedade de opções para conceder a usuários específicos permissões diferenciadas dentro de tabelas e bases de dados. Este artigo vai lhe dar um breve resumo de algumas das muitas opções que eles oferecem.

## Como criar um Novo Usuário

Vamos fazer toda a edição no MariaDB ou MySQL como usuário root, já que ele tem acesso total a todos os bancos de dados e tabelas dentro desses bancos de dados. Os comandos a seguir vão funcionar tanto no MariaDB como no MySQL.

```bash
sudo mysql -u root -p
```
Vamos começar criando um novo usuário:

```bash
CREATE USER 'novousuario'@'localhost' IDENTIFIED BY 'minhasenha';
```

Infelizmente, nesse momento o “novousuario” não tem permissão para fazer nada com as bases de dados. Na verdade, se o “novousuario” tentar fazer login (com a senha “minhasenha”), ele não será capaz de chegar ao shell do MySQL ou do MariaDB.

Portanto, a primeira coisa a fazer é fornecer ao usuário o acesso às informações que ele vai precisar, com o seguinte comando:

```bash
GRANT ALL PRIVILEGES ON * . * TO 'novousuario'@'localhost';
```

Os asteriscos neste comando referem-se ao banco de dados e à tabela respectivamente que eles podem acessar. Este comando permite ao usuário ler, editar, executar e realizar todas as tarefas em todas as bases de dados e tabelas, tendo assim as mesmas permissões de acesso que o usuário root.

Feito isso, vamos recarregar as permissões do nosso banco de dados com esse comando:

```bash
FLUSH PRIVILEGES;
```

## Como conceder permissões específicas para usuários

Não é muito inteligente conceder acesso de nível de root a um usuário como a gente fez acima. Imagine que você precisa dar acesso ao banco de dados para uma pessoa que precisa ver as tabelas.

Ao conceder acesso à nível de root para essa pessoa, ela pode alterar algum dado de alguma tabela, excluir ou fazer alguma coisa pior. Então, é melhor você criar um usuário e especificar as permissões que ele tem acesso, assim você tem mais controle de quem pode acessar o seu banco de dados e o que vai acessar.

A sintaxe do comando que concede privilégios é essa:

```bash
GRANT tipo-de-permissão ON nome-da-base-de-dados . nome-da-tabela TO 'nome-do-usuário'@'localhost';
```

Aqui está uma pequena lista de outras possíveis permissões que os usuários podem utilizar, você pode ver a <a href="https://dev.mysql.com/doc/refman/5.7/en/privileges-provided.html" target="_ blank">lista completa aqui.</a>

```bash
ALL PRIVILEGES- como vimos anteriormente, isso daria a um usuário do MySQL todo o acesso a uma determinada base de dados (ou se nenhuma base de dados for selecionada, todo o sistema)
CREATE- permite criar novas tabelas ou bases de dados
DROP- permite deletar tableas ou bases de dados
DELETE- permite deletar linhas das tabelas
INSERT- permite inserir linhas nas tabelas
SELECT- permite utilizar o comando Select para ler bases de dados
UPDATE- permite atualizar linhas das tabelas
GRANT OPTION- permite conceder ou revogar privilégios de outros usuários
```

Para aplicar mais de uma permissão a um usuário é só separar com uma vírgula. Por exemplo, vamos atribuir a um determinado usuário a permissão de UPDATE e DELETE:

```bash
GRANT UPDATE, DELETE ON * . * TO 'nome-do-usuario'@'localhost';
```
>Cada vez que você atualizar ou mudar uma permissão certifique-se de utilizar o comando FLUSH PRIVILEGES

## Remover uma permissão

Se você precisar revogar uma permissão, a estrutura é quase idêntica a concedê-la:

```bash
REVOKE tipo-de-permissão ON nome-da-base-de-dados . nome-da-tabela FROM 'nome-do-usuário'@'localhost';
```
Vamos remover a permissão de UPDATE de um usuário. Exemplo:

```bash
REVOQUE UPDATE ON *. * FROM 'nome-do-usuario' @ 'localhost';
```

## Excluir um usuário

Assim como você pode deletar bases de dados com o DROP, você pode utilizar o DROP para excluir um usuário:

```bash
DROP USER 'nome-do-usuario'@'localhost';
```

## Testando o novo usuário

Para testar seu novo usuário, faça logout digitando:

```bash
quit
```
E faça login de novamente com este comando:

```bash
mysql -u nome-do-usuário -p
```
<a href="https://www.digitalocean.com/community/tutorials/como-criar-um-novo-usuario-e-conceder-permissoes-no-mysql-pt" target="_ blank">Fonte</a>
