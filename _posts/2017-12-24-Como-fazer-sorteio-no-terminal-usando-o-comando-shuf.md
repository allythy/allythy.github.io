---
layout:     post
title:      "Como fazer sorteio no terminal usando o comando shuf"
subtitle:   "Neste artigo, vamos aprender como fazer sorteio no terminal com o comando shuf."
date:       2017-12-24 20:00:00
author:     "Allythy"
header-img: ""
categories: [Terminal, Dica]
---
Neste artigo, vamos aprender como fazer sorteio no terminal com o comando shuf. O shuf é um comando que gerar permutações aleatórias, com isso a gente pode gerar um número aleatório de um terminado intervalo ou de algum arquivo. Digamos que você tem a quantidade de pessoas que estão participando de um evento ou lista com todos os nomes das pessoas, com uma dessas informações você gostaria de realizar um sorteio. Você pode fazer isso de uma forma rápida e fácil usando o comando shuf.

## Gerando números aleatórios de um intervalo numérico

__Sintaxe__:
```bash
shuf -i [NÚMERO INICIAL]-[NUMERO FINAL]
```

A opção `-i` é usada para informar o intervalo número. Exemplo:

```bash
shuf -i 2-70
```
![Gerou números aleatórios de 2 até 70.](/img/shuf-1.png)

Ele vai gerar as permutações e mostrar a saída padrão (tela do seu emulador de terminal). Mas digamos que você queira apenas o primeiro número. Para isso, você deve usar a opção `-n` para informar a quantidade de números você gostaria de ver na saída padrão. Exemplo:

```bash
shuf -i 10-20 -n1
```
![Gerou números aleatórios de 10 até 20, mostrando apenas o primeiro número.](/img/shuf-2.png)

## Gerando nomes aleatórios de um arquivo

__Sintaxe__:

```bash
shuf [NOME DO ARQUIVO] -n1
```

Exemplo:

```bash
 shuf nomes -n1
```
![Pegou um nome aleatório do arquivo nome, neste casso Francisco.](/img/shuf-3.png)

Você também pode guardar a saída do comando em um arquivo usando os redirecionadores (>, >>), mas o próprio comando tem uma opção para isso a `-o` . Exemplo:

```bash
shuf nomes -n2 -o ganhadores
```
