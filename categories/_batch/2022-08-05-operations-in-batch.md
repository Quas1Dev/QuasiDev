---
title: Batch - Operações Matemáticas
layout: article
permalink: /batch/:title
description: Em Batch também podemos incluir operações matemáticas.
categories:
  - batch
tags:
  - operadores
  - cálculo
  - expressões
date: 2022-08-05T17:22:12.899Z
lastUpdated: 2022-08-06T08:13:20.966Z
author: Fernando Bonfim
excerpt_separator: <!--more-->
order: 4
---
Assim como em varias outras linguagens, é possível incluir operações matemáticas em código escrito em Batch. Contudo, diferente de outras linguagens, uma expressão matemática ser parte de uma atribuição de valor à uma variável. O comando `SET` com o parâmetro `/a` pode ser usado para esse propósito.

Em Batch nós não podemos exibir o resultado de uma expressão matemática diretamente, como no fragmento abaixo:

```
@ECHO OFF
:: Exibe 2 + 2, não o resultado da soma 2 + 2
ECHO 2 + 2
PAUSE
```

Ativar a opção /A do comando SET nos permite criar variáveis que recebem resultados de um calculo matemático. A sintaxe mais comum é a seguinte:

```console
SET /A "[nome da variável]=[expressão aritmética]"
```

Observação: As aspas somente são obrigatórias ao usar os operadores &,|, ^, << e >>, mas geralmente elas são usadas.

A expressão aritmética vai conter números (ou variáveis que guardem números) e algum operador que informa a operação que deve ser feita. O calculo pode ser tão curto quanto 2 + 2, ou tão grande quanto 2 *(22/4) ^ 3 +23-300%3.

```batchfile
SET /A _soma=2+5
```

Podemos ler a declaração acima como "crie uma variável com nome _soma e armazene a soma entre 2 e 5", ou seja, "_soma" recebe 7.

O sinal de mais (+) não é o único que podemos usar, abaixo vou mencionar os operadores que podem ser usados e como utiliza-los.

#### Operadores Aritméticos

Quais são os Operadores -> Para que servem? -> Exemplos com Cada Um -> Por que dobrar o sinal de %
Segue uma lista com os operadores mais simples da linguagem.
Operador 	Descrição

* Adição
* Subtração
  /	Divisão
* Multiplicação
  %	Módulo
  Os quatro primeiros servem para realizar as quatro operações fundamentais da aritmética. Veja como pode usa-los abaixo:

```batchfile
@ECHO OFF
:: Multiplicação
SET /A _multiplicacao=10*5
ECHO O produto eh %_multiplicacao%

:: Divisão
SET /A _divisao=10/5
ECHO O quociente eh %_divisao%

::Soma
SET /A _adicao=10+5
ECHO A soma eh %_soma%

::Subtração
SET /A _subtracao=10-5
ECHO A diferenca eh %_subtracao%
PAUSE
```

Resultado no cmd.exe.

As quatro operações da matemática com 10 e 5.
Já o último, o operador de módulo (%), serve para pegar o resto de uma divisão. O resto, por sua vez, é o valor que sobra após uma divisão entre dois números (Acesse \[Resto da divisão](https://mundoeducacao.uol.com.br/matematica/resto-divisao.htm#:~:text=Dessa%20forma%2C%20o%20resto%20%C3%A9,poss%C3%ADvel%20realizar%20divis%C3%B5es%20com%20ele.&text=O%20resto%20pode%20n%C3%A3o%20existir,do%20conjunto%20dos%20n%C3%BAmeros%20inteiros para entender melhor).
Exemplo:

```batchfile
@ECHO OFF
SET /A _resto=10%%3
ECHO O resto eh %_resto%
PAUSE
```

Note que o operador de módulo (%) deve ser sempre duplicado **quando utilizado em um arquivo script**, ou seja, quando você não for usa-lo diretamente no cmd. No cmd faça 5%4 e no script faça 5%%4.
Resultado do trecho acima:

O resto da divisão entre 10 e 3.
Caso o resultado da operação seja um número com decimais, ele será arredondado para o número inteiro mais próximo de zero. 1,4 é arredondado para 1, 3,9 é arredondado para 3, -2,5 é arredondado para -2 e assim por diante.
No trecho abaixo “_divisao” recebe 1, pois 3 / 2 é igual á 1,5 que é arredondado para o número inteiro mais próximo de zero, que é 1.

```batchfile
@ECHO OFF
SET /A _divisao=3/2
ECHO O resultado da divisão entre 3 e 2 eh: %_divisão%
PAUSE
```

Resultado no CMD:
\[IMAGEM]
A linguagem Batch não oferece suporte para operações com números não inteiros(e.g., 1,4). Mas se realmente precisa realizar essa operação {% include postLink.html url="https://bit.ly/3JxxSzw” text="esse artigo' %} (em inglês) explica como usar um script externo para fazer o cálculo com números com ponto flutuante e então retornar uma string com o resultado.

Podemos usar diferentes operações em uma mesma expressão matemática, como no exemplo abaixo:

```batchfile
@ECHO OFF
SET /A _expressao=2+5/5-1
ECHO O resultado da expressao eh: %_expressao%
PAUSE
```

Resultado no cmd:
\[IMAGE]
Perceba que existe uma ordem de precedência, isto é, uma sequência em que as operações são realizadas. No exemplo acima a divisão é realizada primeiro, depois a soma e então a subtração. Mas, como na matemática a que estamos habituados, nós podemos mudar isso colocando a operação que deve ser realizada primeiro entre parênteses.

```batchfile
@ECHO OFF
SET /A _expressao=2+5/(5-1)
ECHO O resultado eh: %_expressao%
PAUSE
```

Agora, 5 - 1 será calculado primeiro, depois a divisão e por último a adição.
Resultado no CMD:

\[IMAGEM]
Tudo que estiver fora dos parênteses seguira a seguinte ordem:
1 - Multiplicação, divisão ou módulo;
2 - Adição ou subtração.
Caso todas as operações em uma expressão tenham a mesma prioridade, como em 2+4-3, o resultado será calculado da esquerda para a direita, portanto 2+4 = 6, 6 + 3 = 9.
Uma vez criadas as variáveis também podem ser usadas como valores em qualquer calculo.

```batchfile
@ECHO OFF
SET _val1=5
SET _val2=3
SET /A _resto=_val1 %% _val2

ECHO O resto eh: %_resto%
PAUSE
```

Resultado no CMD:
\[IMAGE]
Perceba que, nesse caso, não é necessário envolver o nome da variável com o símbolo de porcentagem.
Caso a variável indicada não tenha sido criada, o valor 0 será considerado.
Múltiplas variáveis podem ser declaradas usando o mesmo comando `SET` desde que separadas por uma virgula (,).

```batchfile
@ECHO OFF
SET /A _soma=20+3, _subtracao=5-1, _resto=_soma%%_subtracao
ECHO O resto eh: %_resto%
PAUSE
```

Resultado no CMD:
\[IMAGE]

#### Operações bit a bit

O que são bits? -> O que é uma operação bit a bit? -> Por que esse nome? - > As outras operações não são realizadas bit a bit? -> Quais são os Operadores -> Como funcionam? -> Para que servem? -> Exemplos
Tudo que o computador entende está codificado usando bits. Seja um número, um texto, seu emoji favorito, as senhas que você salvou em um arquivo .txt mesmo ignorando qualquer recomendação de segurança, tudo é codificado usando uma sequência desses bits.

Bit é uma abreviação de Binary Digit (digito binário), que é uma unidade de informação que carrega uma de duas mensagens possíveis, usualmente descritas na forma escrita como 1 e 0. No computador, 1 e 0 tomam forma de alta ou baixa carga elétrica, sinal fraco ou forte, ou um ponto brilhante ou opaco na superfície de um CD. Praticamente qualquer informação pode ser reduzida a uma sequência de uns e zeros e, portanto, ser representada em bits.

Toda e qualquer operação será feita com a sequências de bits dos valores envolvidos, seja uma operação aritmética comum como 2+2, ou uma operação bit a bit como 2&2 (mais sobre o operador “&” abaixo).

Então, qual é a diferença entre esses dois tipos de operações? Se ambos operam nos bits que representam os valores, por que dizemos que uma operação é bit a bit e a outra não?

Numa operação aritmética cada sequência de bits é tratada como uma coisa só, todos compõem um número. Por exemplo, na adição entre dois números o computador deve realizar a operação entre cada um dos bits que representam os valores envolvidos, indo da esquerda para a direita, sendo que cada operação terá influência do resultado anterior.

Vejamos como o computador poderia resolver operação 15 + 3. O binário desses números são respetivamente 0000 1111(decimal 15) e 0000 0011 (decimal 3) respetivamente (veja <a href=”” target=””>como converter decimal para binário</a>).

A adição é feita de forma praticamente idêntica a forma como fazemos com números decimais.

* 1 + 0 resulta em 1;
* 0 + 1 resulta em 1;
* 0 + 0 resulta em 0;
* 1 + 1 resulta em 10 (decimal 2), sendo que o 0 fica e o 1 é carregado para a próxima coluna;
* 1+1+1 resulta em 11 (decimal 3), sendo que um 1 fica, enquanto o outro 1 é carregado para a próxima coluna.

Perceba como a soma de bits influência o resultado das adições posteriores, o que é necessário para que a conta dê o resultado esperado. Essa caraterística reforça que os bits não são tratados de forma separada.
Já em uma operação bit a bit o resultado depende apenas dos dois bits envolvidos na operação, ou seja, a operação é mais focada nos bits individuais e não todo o conjunto. Por exemplo, a operação “E” é usada para comparar dois bits e retorna um caso ambos sejam um, e zero em todos os outros casos. Vamos aplicar essa operação entre os valores 7 e 3 e ver o que acontece.

Perceba que apenas os números nas mesmas colunas são comparados, um de cada vez. O resultado da operação na terceira coluna da direita para a esquerda é 0 mesmo que nas anteriores tenham sido 1.\
Sendo assim, podemos definir uma <dfn>operação bit a bit</dfn> como uma função que recebe uma ou mais sequências de bits, e trabalha individualmente em cada um de seus elementos.
Existem vários operadores desse tipo na linguagem Batch e vamos falar de cada um deles abaixo.
Começando com o já mencionado operador &, chamado de operador E. Ele fica entre dois valores numéricos e compara cada bit de ambos. Será retornado um sempre que os dois bits forem um, e zero em todas as outras combinações.

Operação	Resultado
1 & 1	1
0 & 1	0
1 & 0	0
0 & 0	0
Vamos resolver 5&6 para verificar o funcionamento na prática.

O resultado final é 0000 0100 (Decimal 4).

Perceba que somente a terceira casa da direita para a esquerda tinha o número 1 em ambos números binários, logo apenas a terceira casa da direita para a esquerda do binário resultante terá o número 1, e o resto será 0.
O operador | (OU), recebe dois valores numéricos e compara cada bit de ambos. Será retornado 1, sempre que pelo menos um dos bits comparados for igual à 1, e zero caso nenhum seja, como mostra a tabela abaixo.

Operação	Resultado
1 | 1	1
0 | 1	1
1 | 0	1
0 | 0	0
Seguindo as regras mencionadas, vamos resolver a operação 5|6 e ver como fica:

O resultado é 0000 0111 (Decimal 7).
Perceba que sempre que um dos bits comparados é 1 o resultado também será 1.
O operador ^ (OU Exclusivo), recebe dois valores numéricos e compara cada bit de ambos. Será retornado 1 se exclusivamente um dos bits for 1, caso contrario será retornado 0.
Operação	Resultado
1 ^ 1	0
0 ^ 1	1
1 ^ 0	1
0 ^ 0	0
Usando as regras acima a operação 5^6 é resolvida da seguinte forma:

O resultado é 0000 0011 (Decimal 3)
O operador de deslocamento para esquerda, representado por <<, move todos os bits para a esquerda pelo número de vezes determinado do lado direito do operador. A << B significa “mova todos os bits de um número A um número B de casas para a esquerda”.

B deve ser um número inteiro positivo.
Após o deslocamento, 0s serão usados para ocupar o espaço deixado para trás.
Os bits deslocados para fora da sequência serão descartados.
Considere A=-14 e B=2, o resultado seria o seguinte:
1111 0010 -> 1100 1000
O operador de deslocamento para direita, representado por >>, move todos os bits de uma sequência de bits para a direita. A >> B significa “mova todos os bits de um número A um número B de vezes de casas para a direita”.
As casas que ficarem vazias ao mover os bits serão preenchidos com o valor do bit que indica o sinal do número (o que está mais a direita).
B deve ser um número inteiro e positivo.
Os bits que excederem a quantidade de casas a esquerda serão descartados.
Os bits deslocados para fora da sequência serão descartados.
Considere A=14 e B=2, o resultado de A >> B seria o seguinte:
0000 1110 (decimal 14) -> 0000 0011(decimal 3)
Considere A=-14 e B=2, e um total de 5 bits para cada número, o resultado de A>>B seria o seguinte:
0001 0010 (decimal 18) -> 0001 1100 (decimal 28)
O operador de negação “\~” é usado para inverter o valor de cada bit. Sendo assim, um vira zero e zero vira um.
Considere A = 4, a operação \~A é resolvida da seguinte forma:
00000100 (decimal 4) -> 11111011(decimal -5)
Operadores de Atribuição
Quais as Combinações Possíveis -> Como funcionam? -> Para que servem -> Exemplos
Os operadores de atribuição atribuem um valor a uma variável baseado no valor a direita do operador. O mais comum, e o qual você viu ser usado até agora, é o sinal de igual (=) que basicamente pega o que estiver do seu lado direito e “guarda” em uma variável nomeada à sua esquerda. X=Y atribui o valor de Y a X, como em `SET /A _soma=2+2`.
Utilizar esse sinal de atribuição já é o suficiente para atribuir valores a variáveis. Contudo, existem vários outros que buscam, de certa forma, facilitar a criação de uma variável em um caso especifico.
Essas combinações podem ser utilizadas quando o valor da variável deve ser incluido no cálculo que gera o valor para ser armazenado na variável.
Considere que você tem uma variável que guarda o resultado de 2*5.

```batchfile
SET /A _valor=2*5
```

Agora imagine que precise, por algum motivo, adicionar 10 a esse resultado, você poderia fazer isso facilmente.

```batchfile
SET /A _val=_val+10
```

Isso funcionaria com certeza para o propósito idealizado, mas podemos fazer esse comando ficar menor utilizando uma combinação dos operadores mais (+) e igual(=).

```batchfile
SET /A _val+=10
```

Essa declaração faz a mesma coisa que a anterior, ela soma 10 ao valor de “_val” e armazena o novo resultado na própria variável “_val”.
O mesmo pode ser feito com todas as outras operações, basta utilizar a combinação certa de operadores.
Operador	Descrição
+=	Adiciona um valor a variável.
-=	Subtrai um valor da variável.
/=	Divide o valor da variável.
*=	Multiplica o valor da variável.
%=	Atribuí o resto da divisão entre a variável e o número definido do lado direito do operador, e atribuí o valor a variável.
&=	Executa uma operação E entre a variável e o valor a direita do operador, e guarda o resultado na variável.
^=	Executa uma operação OU exclusivo entre a variável e o valor a direita do operador, e guarda o resultado na variável.
|=	Executa uma operação OU entre a variável e o valor a direita do operador, e guarda o resultado na variável.
<<=	Move para a direita os bits da variável um número de vezes definido pelo operando a direita.

> > \=	Move para a esquerda os bits da variável um número de vezes definido pelo operando a direita.
> > Veja um trecho abaixo exemplos com cada operador.

```batchfile
@ECHO OFF
SET _num1=25, _num2=2

:: Soma 25 e 2 e armazena o resultado em _num1- Equivalente a SET /A _num1=_num1+_num2
SET /A _num1+=_num2
ECHO %_num1%

:: Subtrai 2 de 25 e armazena o resultado em _num1 - Equivalente a SET /A _num1=_num1-_num2
SET /A _num1-=_num2
ECHO %_num1%

:: Multiplica 25 por 2 e armazena o resultado em _num1 - Equivalente a SET /A _num1=_num1*_num2
SET /A _num1*=_num2
ECHO %_num1%

:: Divide 25 por 2 e armazena o resultado em _num1 - Equivalente a SET /A _num1=_num1/_num2
SET /A _num1/=_num2
ECHO %_num1%

:: Operação lógica E (bit a bit) entre 0001 1001 (decimal 25) e 0000 0010 (decimal 2) - Equivalente a SET /A _num1=_num1&_num2
SET /A _num1&=_num2
ECHO %_num1%

:: Operação lógica OU (bit a bit) entre 0001 1001 (decimal 25) e 0000 0010 (decimal 2) - Equivalente a SET /A _num1=_num1|_num2
SET /A _num1|=_num2
ECHO %_num1%

:: Operação lógica OU exclusivo (bit a bit) entre 0001 1001 (decimal 25) e 0000 0010 (decimal 2) - Equivalente a SET /A _num1=_num1^_num2
SET /A _num1^=_num2
ECHO %_num1%

:: Desloca todos os bits de 0001 1001 (decimal 25) duas casas para a esquerda - Equivalente a SET /A _num1=_num1<<_num2
SET /A _num1<<=num_2
ECHO %_num1%

:: Desloca todos os bits de 0001 1001 (decimal 25) duas casas para a direita- Equivalente a SET /A _num1=_num1>>_num2
SET /A _num1>>=_num2
ECHO %_num1%

PAUSE
```

Resultado no CMD:
\[IMAGE]

## Operador de Negação lógica

Em Batch o número 0 é considerado falso, enquanto que qualquer número diferente de zero (1 ou mais) será considerado verdadeiro.
O operador de negação lógica (!) inverte o significado de um número. Se o número for 0 (falso) será transformado em verdadeiro (1). se o número for verdadeiro (1 ou mais) ele se torna falso (0).
Considere