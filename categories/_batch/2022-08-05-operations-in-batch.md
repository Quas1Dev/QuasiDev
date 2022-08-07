---
title: Batch - Operações
layout: article
permalink: /batch/batch-operations-ptbr
description: Em Batch também podemos incluir operações matemáticas.
categories:
  - batch
tags:
  - operadores
  - cálculo
  - expressões
date: 2022-08-07T11:20:46.993Z
lastUpdated: 2022-08-07T11:20:48.237Z
author: Fernando Bonfim
excerpt_separator: <!--more-->
order: 4
---
Assim como em varias outras linguagens, é possível incluir operações matemáticas em código escrito em Batch. Contudo, em Batch nós não podemos exibir o resultado de uma expressão matemática diretamente, como no fragmento abaixo:

``` batchfile
@ECHO OFF
:: Exibe 2 + 2, não o resultado da soma 2 + 2
ECHO 2 + 2
PAUSE
```

Uma expressão matemática ser parte de uma atribuição de valor à uma variável. Essa variável vai armazenar o resultado da operação, então nós podemos referencia-la sempre que aquele resultado for necessário.

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
<div  class="table-container">
<table class="table table-model-1">
<thead>
  <tr>
    <th>Operador</th>
    <th>Operação</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>+</td>
    <td>Adição</td>
  </tr>
  <tr>
    <td>-</td>
    <td>Subtração</td>
  </tr>
  <tr>
    <td>/</td>
    <td>Divisão</td>
  </tr>
  <tr>
    <td>*</td>
    <td>Multiplicação</td>
  </tr>
  <tr>
    <td>%</td>
    <td>Módulo</td>
  </tr>
</tbody>
</table>
</div>

Os quatro primeiros servem para realizar as quatro operações fundamentais da aritmética. 

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

Resultado no cmd.exe:

```console
O produto eh 50
O quociente eh 2
A soma eh
A diferenca eh 5
```

Já o último, o operador de módulo (%), serve para pegar o resto de uma divisão. O resto, por sua vez, é o valor que sobra após uma divisão entre dois números (Acesse {% include postLink.html text="Resto da divisão" url="https://bit.ly/3QnBart" %} para entender melhor).
Exemplo:

```batchfile
@ECHO OFF
SET /A _resto=10%%3
ECHO O resto eh %_resto%
PAUSE
```

Note que o operador de módulo (%) deve ser sempre duplicado **quando utilizado em um arquivo .bat ou .cmd**. Fora desse arquivo, apenas um já basta. Para pegar o resto da divisão entre 5 e 4 diretamente no CMD (sem criar um arquivo), digite 5%4, mas dentro de um arquivo essa mesma conta deve aparecer como 5%%4.

Resultado do script acima:

```console
O resto eh 1
```

Caso o resultado da operação seja um número com decimais, ele será arredondado para o número inteiro mais próximo de zero. 1,4 é arredondado para 1, 3,9 é arredondado para 3, -2,5 é arredondado para -2 e assim por diante.

No trecho abaixo “_divisao” recebe 1, pois 3 / 2 é igual á 1,5 que é arredondado para o número inteiro mais próximo de zero, que é 1.

```batchfile
@ECHO OFF
:: _divisao recebe o resto da divisão entre 3 e 2, arrendado para o valor
:: mais próximo de 0
SET /A _divisao=3/2
ECHO O resultado da divisão entre 3 e 2 eh: %_divisao%
PAUSE
```

Resultado no CMD:

```console
O resultado da divis├úo entre 3 e 2 eh: 1
```

A linguagem Batch não oferece suporte para operações com números não inteiros (e.g., 1,4). Mas se realmente precisa realizar essa operação {% include postLink.html url="https://bit.ly/3JxxSzw” text="esse artigo' %} (em inglês) explica como usar um script externo para fazer o cálculo com números com ponto flutuante e então retornar uma string com o resultado.

Podemos usar diferentes operações em uma mesma expressão matemática, como no exemplo abaixo:

```batchfile
@ECHO OFF
:: Toda a expressão é calculada e o resultado é armazenado em _expressao
SET /A _expressao=2+5/5-1
ECHO O resultado da expressao eh: %_expressao%
PAUSE
```

Resultado no CMD:

```console
O resultado da expressao eh: 2
```

Perceba que existe uma **ordem de precedência**, isto é, uma sequência em que as operações são realizadas. No exemplo acima, a divisão é realizada primeiro, depois a soma e então a subtração. Mas, como na matemática a que estamos habituados, nós podemos mudar isso colocando a operação que deve ser realizada primeiro entre parênteses.

```batchfile
@ECHO OFF
SET /A _expressao=2+5/(5-1)
ECHO O resultado eh: %_expressao%
PAUSE
```

Agora, 5 - 1 será calculado primeiro, depois a divisão e por último a adição.

Resultado no CMD:

```console
O resultado eh: 3
```

Tudo que estiver fora dos parênteses seguira a seguinte ordem:

1º Multiplicação, divisão ou módulo;
2º Adição ou subtração.

Caso todas as operações em uma expressão tenham a mesma prioridade, como em 2+4-3, o resultado será calculado da esquerda para a direita, portanto 2+4 = 6, 6 + 3 = 9.

Uma vez criadas as variáveis também podem ser usadas como valores em qualquer cálculo.

```batchfile
@ECHO OFF
SET _val1=5
SET _val2=3
SET /A _resto=_val1 %% _val2

ECHO O resto eh: %_resto%
PAUSE
```

Resultado no CMD:

```console
O resto eh: 2
```

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

``` console
O resto eh: 3
```

#### Operações bit a bit

Tudo que o computador entende está codificado usando bits. Seja um número, um texto, seu emoji favorito, as senhas que você salvou em um arquivo .txt, ignorando qualquer recomendação de segurança, tudo é codificado usando uma sequência desses bits.

Mas o que é um bit? Bit é uma abreviação de Binary Digit (digito binário), que é uma unidade de informação que carrega uma de duas mensagens possíveis, usualmente descritas na forma escrita como 1 e 0. No computador, 1 e 0 tomam forma de alta ou baixa carga elétrica, sinal fraco ou forte, ou um ponto brilhante ou opaco na superfície de um CD. Praticamente qualquer informação pode ser reduzida a uma sequência de uns e zeros e, portanto, ser representada em bits.

Toda e qualquer operação será feita com a sequências de bits dos valores envolvidos, seja uma operação aritmética comum como 2+2, ou uma operação bit a bit como 2&2 (mais sobre o operador “&” daqui apouco).

Então, qual é a diferença entre esses dois tipos de operações? Se ambos operam nos bits que representam os valores, por que dizemos que uma operação é bit a bit e a outra não?

Numa operação aritmética cada sequência de bits é tratada como uma coisa só, todos compõem um número. Por exemplo, na adição entre dois números o computador deve realizar a operação entre cada um dos bits que representam os valores envolvidos, indo da esquerda para a direita, sendo que cada operação terá influência do resultado anterior.

Vejamos como o computador poderia resolver operação 15 + 3. O binário desses números, de acordo com o padrão ASCII, são respetivamente 0000 1111(decimal 15) e 0000 0011 (decimal 3) respectivamente (veja {% include postLink.html text="como converter decimal para binário" url="https://bit.ly/3oXT5JJ" %}).

A adição é feita de forma praticamente idêntica a forma como fazemos com números decimais.

* 1 + 0 resulta em 1;
* 0 + 1 resulta em 1;
* 0 + 0 resulta em 0;
* 1 + 1 resulta em 10 (decimal 2), sendo que o 0 fica e o 1 é carregado para a próxima coluna;
* 1+1+1 resulta em 11 (decimal 3), sendo que um 1 fica, enquanto o outro 1 é carregado para a próxima coluna.

{% include post_img.html

png="/assets/post_imgs/batch/batch-operations-ptbr/batch-sum-operation.png"

webp="/assets/post_imgs/batch/batch-operations-ptbr/batch-sum-operation.webp"

alt="Operação de soma entre 15 e 3 em forma binária."

align="center"

%}

Perceba como a soma de bits influência o resultado das adições posteriores, o que é necessário para que a conta dê o resultado esperado. Essa caraterística reforça que os bits não são tratados de forma separada.
Já em uma operação bit a bit o resultado depende apenas dos dois bits envolvidos na operação, ou seja, a operação é mais focada nos bits individuais e não em todo o conjunto. Por exemplo, a operação “&” é usada para comparar dois bits e retorna 1 caso ambos sejam 1, e 0 em todos os outros casos. Vamos aplicar essa operação entre os valores 7 e 3 e ver o que acontece.

{% include post_img.html

png="/assets/post_imgs/batch/batch-operations-ptbr/batch-and-operation.png"

webp="/assets/post_imgs/batch/batch-operations-ptbr/batch-and-operation.webp"

alt="Operação E entre os números 7 e 3."

align="center"

%}

Perceba que apenas os números nas mesmas colunas são comparados, um de cada vez. O resultado da operação em cada "coluna" é independente dos demais.

Sendo assim, podemos definir uma <dfn>operação bit a bit</dfn> como uma função que recebe uma ou mais sequências de bits, e trabalha individualmente em cada um de seus elementos.

Existem vários operadores desse tipo na linguagem Batch e vamos falar de cada um deles abaixo.

Começando com o já mencionado operador `&`, chamado de operador E ou E lógico. O resultado dessa operação, que é realizada entre cada bit dos valores numéricos envolvidos, será um se ambos os bits forem um, ou zero em todas as outras combinações.

Nós podemos organizar todos os possíveis resultados em uma tabela.
<div class="table-container">
<table class="table table-model-1">
<thead>
  <tr>
    <th>Operação</th>
    <th>Resultado</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1 &amp; 1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>0 &amp; 1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1 &amp; 0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>0 &amp; 0</td>
    <td>0</td>
  </tr>
</tbody>
</table>
</div>

Vamos resolver 5 & 6 para verificar o funcionamento na prática.

{% include post_img.html

png="/assets/post_imgs/batch/batch-operations-ptbr/batch-and-operation-five-and-six.png"

webp="/assets/post_imgs/batch/batch-operations-ptbr/batch-and-operation-five-and-six.webp"

alt="Operação E entre os números 5 e 6."

align="center"

%}

O resultado final é 0000 0100 (Decimal 4).

Perceba que somente a terceira casa da direita para a esquerda tinha o número 1 em ambos números binários, logo apenas a terceira casa da direita para a esquerda do binário resultante terá o número 1, e o resto será 0.

Começando com o já mencionado operador `&`, chamado de operador E ou E lógico. O resultado dessa operação, que é realizada entre cada bit dos valores numéricos envolvidos, será um se ambos os bits forem um, ou zero em todas as outras combinações.

A operação indicada por | (OU) será retornado 1 se **pelo menos** um dos bits avaliados forem 1. O resultado será 0 apenas quando ambos os bits forem 0. Os resultados possíveis são apresentados abaixo.

<div class="table-container">
<table class="table table-model-1">
<thead>
  <tr>
    <th>Operação</th>
    <th>Resultado</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1 | 1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>0 | 1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1 | 0</td>
    <td>1</td>
  </tr>
  <tr>
    <td>0 | 0</td>
    <td>0</td>
  </tr>
</tbody>
</table>
</div>

Seguindo as regras mencionadas, vamos resolver a operação 5 | 6 e ver como fica:

{% include post_img.html

png="/assets/post_imgs/batch/batch-operations-ptbr/batch-or-operation-five-and-six.png"

webp="/assets/post_imgs/batch/batch-operations-ptbr/batch-or-operation-five-and-six.webp"

alt="Operação OU entre os números 5 e 6."

align="center"

%}

O resultado é 0000 0111 (Decimal 7).

Perceba que sempre que um dos bits comparados é 1, o resultado também será 1.

A operação indicada pelo operador (OU Exclusivo) retorna 1 se **apenas** um dos bits avaliados for 1. Em todos os outros casos o resultado é 0. Os resultados possíveis são apresentados na tabela.
<div class="table-container">
<table class="table table-model-1">
<thead>
  <tr>
    <th>Operação</th>
    <th>Resultado</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1 ^ 1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>0 ^ 1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1 ^ 0</td>
    <td>1</td>
  </tr>
  <tr>
    <td>0 ^ 0</td>
    <td>0</td>
  </tr>
</tbody>
</table>
</div>
Usando as regras acima a operação 5 ^ 6 é resolvida da seguinte forma:

{% include post_img.html

png="/assets/post_imgs/batch/batch-operations-ptbr/batch-exclusive-or-operation-five-and-six.png"

webp="/assets/post_imgs/batch/batch-operations-ptbr/batch-exclusive-or-operation-five-and-six.webp"

alt="Operação OU Exclusivo entre os números 5 e 6."

align="center"

%}

O resultado é 0000 0011 (Decimal 3).

O operador de deslocamento para esquerda, representado por `<<`, move todos os bits para a esquerda pelo número de vezes determinado do lado direito do operador. `A << B` significa “mova todos os bits de um número A um número B de casas para a esquerda”.

Após o deslocamento, 0s serão usados para ocupar o espaço deixado para trás. Além disso, os bits deslocados para fora da sequência serão descartados.  Na operação `5 << 2`, por exemplo, deve acontecer a transição de 0000 0101 (decimal 5) para 0001 0100 (decimal 20).

O operador de deslocamento para direita, representado por `>>`, move todos os bits de uma sequência de bits para a direita. `A >> B` significa “mova todos os bits de um número A um número B de vezes de casas para a direita”.

As casas que ficarem vazias ao mover os bits serão preenchidos com o valor do bit que indica o sinal do número (o que está mais À esquerda). Além disso, os bits que excederem a quantidade de casas a esquerda serão descartados. Na operação `-14 >> 1`, deve ocorrer a transição de 1111 0010 (decimal -14) para 1111 1001(decimal -7).

O operador de negação “~” é usado para inverter o valor de cada bit. Sendo assim, 1 vira 0 e 0 vira 1. Na operação `~4` , uma nova sequência de bits será gerada invertendo os bits que representam 4. A sequência que representa 4 é 0000 0100, então o resultado é 1111 1011 ( decimal -5).

## Operadores de Atribuição

Quais as Combinações Possíveis -> Como funcionam? -> Para que servem -> Exemplos
Os operadores de atribuição atribuem um valor à uma variável baseado no valor a direita do operador. O mais comum, e o qual você viu ser usado até agora, é o sinal de igual (=) que pega o que estiver do seu lado direito e “guarda” em uma variável nomeada à sua esquerda. `X=Y` atribui o valor de Y a X, como em `SET /A _soma=2+2`.

Utilizar esse sinal de atribuição já é o suficiente para iniciar variáveis. Contudo, existem vários outros que buscam, de certa forma, facilitar a criação de uma variável em um casos específicos. 

Essas combinações podem ser utilizadas quando o valor da variável deve ser incluído no cálculo que gera seu novo valor. 

Considere que você tem uma variável que guarda o resultado de 2*5.

```batchfile
SET /A _valor=2*5
```

Agora imagine que precise, por algum motivo, adicionar 10 a essa variável. Você poderia fazer isso facilmente como no fragmento abaixo.

```batchfile
SET /A _val=_val+10
```

Isso com certeza funcionaria funciona para o propósito idealizado, mas podemos fazer esse comando ficar menor utilizando uma combinação dos operadores mais (`+`) e igual(`=`).

```batchfile
SET /A _val+=10
```

Essa declaração faz a mesma coisa que a anterior: ela soma 10 ao valor de “_val” e armazena o novo resultado na própria variável “_val”. 

O mesmo pode ser feito com todas as outras operações, basta utilizar a combinação certa de operadores.
<div class="table-container" >
<table class="table table-model-1">
<thead>
  <tr>
    <th>Operador</th>
    <th>Descrição</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>+=</td>
    <td>Adiciona um valor a variável.</td>
  </tr>
  <tr>
    <td>\-=</td>
    <td>Subtrai um valor da variável.</td>
  </tr>
  <tr>
    <td>/=</td>
    <td>Divide o valor da variável.</td>
  </tr>
  <tr>
    <td>\*=</td>
    <td>Multiplica o valor da variável.</td>
  </tr>
  <tr>
    <td>%=</td>
    <td>Atribuí o resto da divisão entre a variável e o número definido do lado direito do operador, e atribuí o valor a variável.</td>
  </tr>
  <tr>
    <td>&amp;=</td>
    <td>Executa uma operação E entre a variável e o valor a direita do operador, e guarda o resultado na variável.</td>
  </tr>
  <tr>
    <td>^=</td>
    <td>Executa uma operação OU exclusivo entre a variável e o valor a direita do operador, e guarda o resultado na variável.</td>
  </tr>
  <tr>
    <td>|=</td>
    <td>Executa uma operação OU entre a variável e o valor a direita do operador, e guarda o resultado na variável.</td>
  </tr>
  <tr>
    <td>&lt;&lt;=</td>
    <td>Move para a esquerda os bits da variável um número de vezes definido pelo operando a direita.</td>
  </tr>
  <tr>
    <td>\&gt;&gt;=</td>
    <td>Move para a direita os bits da variável um número de vezes definido pelo operando a direita. Veja um trecho abaixo exemplos com cada operador.</td>
  </tr>
</tbody>
</table>
</div>

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

---

Nesse texto nós compreendemos como usar o comando SET/A para armazenar resultado de expressões. Além disso n´s vimos quais são os operadores disponíveis na linguagem.