/*
Declare uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `genero` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

var Pessoa  = {
    Nome : 'Julia',
    Sobrenome : 'Bergman',
    Genero : 'Feminino',
    Idade : 19,
    Altura : 1.59,
    Peso : 80 ,
    Andando : false,
    CaminhouQuantosMetros: 0
 }



/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

Pessoa.FazerAniversario = function(){
    Pessoa.Idade= Pessoa.Idade + 1
}




/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/ 
 Pessoa.Andar= function(MetrosAndados){
     Pessoa.CaminhouQuantosMetros= Pessoa.CaminhouQuantosMetros + MetrosAndados
     Pessoa.Andando = true
}




/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

Pessoa.Parar = function(){
    Pessoa.Andando= false;

    }





/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!" 
*/

Pessoa.NomeCompleto = function  () {
    console.log('Olá! Meu nome é ' + Pessoa.Nome + ' ' + Pessoa.Sobrenome)
}

//



/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

Pessoa.MostrarIdade = function  () {
    console.log('Olá! eu tenho ' + Pessoa.Idade + ' anos!')
}



/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

Pessoa.MostrarPeso = function () {
    console.log('eu peso' + Pessoa.Peso + 'KG')
}



/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

Pessoa.MostrarAltura = function () {
    console.log('Minha Altura é '+ Pessoa.Altura + 'm.') //1.59
}



/*
Agora vamos trabalhar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

Pessoa.NomeCompleto(); 
//Olá! Meu nome é Julia Bergman



/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
Pessoa.MostrarIdade();
//Olá! eu tenho 19 anos!



/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
Pessoa.MostrarPeso();//80
//eu peso80KG



/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

Pessoa.MostrarAltura(); 

//Minha Altura é 1.59m.

/*
Faça a `pessoa` fazer 3 aniversários.
*/
Pessoa.FazerAniversario();
Pessoa.FazerAniversario();
Pessoa.FazerAniversario();
//



/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/


 Pessoa.MostrarIdade();

//Olá! eu tenho 22 anos!



/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com as distâncias diferentes passadas por parâmetro.
*/
  

Pessoa.Andar(5);
Pessoa.Andar(9);
Pessoa.Andar(100);




/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
if(Pessoa.Andando === true){
    console.log('sim')
}else{
    console.log('não')
}
//sim

/*
Se a pessoa ainda está andando, faça-a parar.
*/

 if(Pessoa.Andando=== true){
        Pessoa.Parar()
        console.log('parou de andar')

 }
//parou de andar

// }

// pessoa.parar= function(){
//     pessoa.andando= false;
        
//     }
//



/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

if(Pessoa.Andando === true){
    console.log('sim')
}else{
    console.log('não')
}

//não
 




/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

//



/*
Agora, vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

S:ó que, antes de retornar a string, você vai fazer algumas validações
- Se o `genero` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

//

Pessoa.Apresentacao = function (){
    var Genero
    var Idade
    var Metros
    
    if(Pessoa.Genero === 'Feminino'){
         Genero = 'a'
    }else{
        Genero = 'o'
    }
    if(Pessoa.Idade === 1){
        Idade= 'ano'
    }else{
        Idade = 'anos'
    }
    if(Pessoa.CaminhouQuantosMetros === 1){
        Metros= 'metro'
    }else{
        Metros= 'metros'
    }

    console.log(`Olá, eu sou ${Genero} ${Pessoa.Nome} ${Pessoa.Sobrenome},
                 tenho ${Pessoa.Idade} ${Idade},${Pessoa.Altura},
                    meu peso é ${Pessoa.Peso} e, só hoje, eu já caminhei ${Pessoa.CaminhouQuantosMetros} ${Metros}!`)

}



/* Agora, apresente-se. */

Pessoa.Apresentacao();
// Olá, eu sou a Julia Bergman,
//tenho 22 anos,1.59,
//meu peso é 80 e, só hoje, eu já caminhei 114 metros!