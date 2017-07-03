---
layout:     post
title:      "Automatizando a geração de senhas seguras no GNU/Linux"
subtitle:   "Neste artigo, vamos aprender a automatizar a geração de senhas seguras no GNU/Linux"
date:       2017-07-03 14:00:00
author:     "Allythy"
header-img: ""
---

Neste artigo, vamos aprender a automatizar a geração de senhas seguras no GNU/Linux. Vamos deixar a criação de senha algo mais prático e rápido, porque se você precisar fazer algo mais do que 3 vezes, crie um Shell Script.

__Gerando senha com caracteres alfanuméricos__

```bash
cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 20 | head -n1
```
No comando acima, utilizo a saída do `/dev/urandom` que gera números aleatórios e mando para o `tr` que vai deletar todos os caracteres exceto aqueles que estão entre as aspas simples, o `fold` vai quebrar a linha a cada 20 caracteres. Em seguida, temos o `head` que pegar apenas a primeira linha

__Gerando senha com caracteres especiais__

```bash
cat /dev/urandom | tr -dc 'a-zA-Z0-9-_!@#$%&*+?' | fold -w 20 | head -n1
```

__Script para geração da senha__

Agora vamos a um exemplo de script que pode ser utilizado para gerar senhas. O script vai perguntar quantas senhas o usuário vai querer e a quantidade de caracteres que a senha vai ter.

```bash
read -p "Informe a quantidade de senhas: " qtdSenha
read -p "Informe a quantidade de caracteres da senha: " cart
echo

for i in $(seq 1 $qtdSenha);do
 cat /dev/urandom | tr -dc 'a-zA-Z0-9-_!@#$%&*+' | fold -w $cart | head -n1 | tr A-Za-z N-ZA-Mn-za-m
done
echo
```
<a href="http://sempreupdate.com.br/2016/06/automatizando-geracao-de-senhas-seguras.html" target="_ blank">Fonte</a>
