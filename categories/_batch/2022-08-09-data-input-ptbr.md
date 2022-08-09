Podemos usar uma variável para armazenar um valor inserido pelo usuário. Para isso, devemos usar a sintaxe abaixo.

```batchfile
SET /P [nome da variável]=[Mensagem]
```

O nome da variável você já deve saber o que é a essa altura. Já a mensagem será um texto exibido para usuário antes dele digitar qualquer coisa. A mensagem pode ser usada para informar o usuário que tipo de informação se espera que ele digite, como feito abaixo.

```batchfile
SET /P _usuario=Digite seu nome de usuario:
```

Pode ajudar inserir colocar aspas ao redor da estrutura para identificar qualquer espaço após a frase, como o que foi colocado após os dois pontos.
```batchfile
SET /P "_usuario=Digite seu nome de usuario: "
```

Note: as aspas não serão incluídas na mensagem.
O texto “Digite seu nome de usuário: ” será exibido na tela e então o script para de ser lido até que a tecla enter seja pressionada.

Observe o código abaixo que pede para que seja inserido um valor e em seguida exibe ele na tela.

``` batchfile
@ECHO OFF
SET /P ”_valor=Insira um valor: “
ECHO %_valor%
PAUSE
```
Considerando que o usuário digite o valor 8, o resultado no cmd seria:
[IMAGEM]

Dessa vez o que está do lado direito do sinal de igual (=) não é armazenada na variável como nas outras declarações de variáveis. O único valor que será colocado na variável é o valor inserido pelo usuário.
Perceba que é possível que o usuário aperte enter sem realmente digitar qualquer coisa. Não podemos fazer nada para evitar isso, mas podemos checar se a variável existe ou não, ja que ela não é criada quando o valor é vazio, e se ela não existir nós pedimos novamente para o usuário inserir um valor.

```batchfile
@ECHO OFF
:pedirValor
SET /P "_valor=Insira um valor: "
IF "%_valor%"=="" GOTO pedirValor
PAUSE
```

O trecho acima utiliza uma combinação de labels (rótulos), e os comandos IF e GOTO para colocar o usuário em um loop do qual não pode escapar sem fazer o que pedimos.

O rótulo ```:pedirValor``` marca um ponto no script para o qual podemos voltar sempre que necessário usando o comando GOTO.

O comando ```IF``` testa uma condição, se essa condição for verdadeira nós

O **nome** e o **valor**, no geral, respeitam algumas regras e normas consideradas boas práticas, sendo elas:
1 - Usar nomes simples e que identifiquem facilmente que tipo de informação será salva. Pode ser que tenha que referenciar a variável varias vezes durante o script, ou outro programador precisará ler seu código, então utilizar nomes muito grandes ou que não refletem com exatidão que tipo de informação foi armazenada nela pode levar a alguns enganos. Contudo, isto é opcional, ficando à seu critério usar ou não nomes simples.

Por Exemplo, ao invés de

```batchfile
SET _caminho_para_a_pasta_de_imagens="c:\users\kleber\images\"
```

Faça
```batchfile
SET _imagens="c:\users\kleber\images\"
```
2 - Use espaço somente para separar o comando SET do resto dos parâmetros, e para separar palavras de alguma frase. Espaços adicionados fora dessas situações não serão ignorados, podendo levar à comportamentos inesperados. Então, escreva isso SET name=Davy e não SET name = Davy. Vá para seção<a href=”#acessando-variáveis”> Acessando Variáveis </a>e veja como espaços extras afetam a forma como invocamos uma variável e também a apresentação do resultado.

3 - O primeiro elemento do nome não pode ser numérico. Ao invés disso, o comum é colocar o sinal de “underline” (_) ou o sinal de dólar ($) no começo do nome. Isso evita possíveis confusões com nomes de variáveis pré-definidas do sistema (veja: <a target=”_self” href=”#variaveis-de-ambiente-do-sistema”> Variáveis de Ambiente do Sistema </a>).
Exemplo:
``` batchfile
SET $path=c:\users\kleber\videos
```

4 - Você pode incluir qualquer um dos seguintes símbolos no nome de uma variável: A-Z, a-z, 0-9, # $ ' ( ) * + , - . ? @ [ ] _ ` { } ~.

Exemplo:

```batchfile
SET _tomy's-car=Jaguar
```

5 - Os símbolos <, >, |, &, ^ são carateres especiais do CMD e só podem ser usados em nomes ou valores de variáveis se precedidos pelo sinal de escape ^, ou caso os parâmetros estejam entre aspas.
Exemplo:

```batchfile
SET _name^&lastName=Tony Stark
```

Ou

```batchfile
SET “_name&lastName=Tony Stark”
```

6 - Não use o sinal de igual no valor ou nome da variável.

O interpretador (cmd.exe) tem um limite de 8.190 caracteres que podem ser digitados, contando com o nome da variável, o sinal de igual e o valor guardado. Na verdade, a maioria dos sites apontam que o limite é de 8.191 caracteres, mas eu tentei chegar à esse valor e o CMD não permitiu, me deixando apenas com 8.186 de espaço.
