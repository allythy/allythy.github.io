---
layout: post
title: Deletando todas as branch do git exceto a main
date: 2021-04-24
header-img: ""
categories: [Git, Dica]
---

Quando estamos em algum projeto sempre criamos branch, seja para uma
funcionalidade, corrigir um problema ou refatoração. Pouco tempo depois você
se depara com várias branch que não estão sendo usadas em seu repositório
local. Foi exatamente assim que me encontrei esses dias, tinha enviado os
Pull Resquest mas não apaguei as branch, quando olhei tinha mais de 10.

Com certeza eu não apagaria uma de cada vez na mão. Então peguei os meus
conhecimentos em Shell, adquiridos no excelente livro: *Programação Shell Linux*
do *Julio Cezar Neves* (que tive o prazer em conhecer, grande abraço Julhão!)
e fui encadear uns pipe.

```
git branch | grep -v 'master' | xargs git branch -D
```

>`git branch`: Lista todas as branch do repositório atual
>
>`grep -v 'master'`: Comando `grep` procura por padrões, quando passamos a 
>opção `-v(--invert-match)` Inverte o sentido de coincidência, para selecionar 
>linhas que não coincidem com o nome “master”.
>
>`xargs git branch -D`: Comando `xargs` receber uma lista(o nome branch) e envia 
>como argumento de entrada para um próximo comando, neste caso o `git branch -D`.
>A opção menos `-D` é para força a exclusão da branch.

Rodando o comando acima vamos apagar todas as branch menos a main.