// **Você pode dar os nomes que quiser para as funções e variáveis, apenas lembre que eles devem ser semânticos :)

// 1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), 
//cada uma delas recebendo 2 números como parâmetros e retornando o resultado

function soma (numero1, numero2){
    return `O resultado eh ${numero1 + numero2}` 
}
console.log(soma(2,4))


function subtrair (numero1, numero2){
    return `O resultado eh ${numero1 - numero2}` 
}
console.log(subtrair(10,5))

function multiplicar (numero1, numero2){
    return `O resultado eh ${numero1 * numero2}` 
}
console.log(multiplicar(5,5))

function dividir (numero1, numero2){
    return `O resultado eh ${numero1 / numero2}` 
}
console.log(dividir(10,2))



// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). 
//Adicione esta lógica nas funções.

function multiplicarPorZero (numero1, numero2){
    if(numero1 !=0 && numero2 !=0){
     return numero1 * numero2 
 }else{
     console.log("numero igual a zero!")
 }
 
}
console.log(`O resultado eh ${multiplicarPorZero(0,5)}`)

function dividirPorZero (numero1, numero2){
   if(numero1 !=0 && numero2 !=0){
     return numero1 / numero2 
 }else{
     console.log("numero igual a zero!")
 }
 
}
console.log(`O resultado eh ${dividirPorZero(5,0)}`)


// 3) crie uma função que chame qualquer uma das funções acima e imprima o resultado no formato de String.
// Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).



// 4) utilizando as funções de soma e multiplicação dos exercícios anteriores, crie uma função que resolva a
// conta 36325 * (9824 + 777).

function conta(num1, num2, num3){
    resultado = num1 *(num2 + num3)
    return resultado
}
console.log(`O resultado da conta eh: ${conta(36325, 9824, 777)}`)

// 5) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles.
// Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre 1 e 100. Em seguida, 
// some estes números e devolva uma string com o resultado no formato: "a soma de [número aleatório] e
// [número aleatório] é XXX". Você vai ter que pesquisar o método do JS para gerar números aleatórios,
// `Math.random()` e como utilizá-lo.

function getRandomInt(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
    
}
a = getRandomInt(10,50)
console.log(`O primeiro numero aleatorio entre 10 e 50 eh: ${a}`)
b = getRandomInt(10,50)
console.log(`O segundo numero aleatorio entre 10 e 50 eh: ${b}`)
soma = a+b
console.log(`A soma de ${a} + ${b} eh: ${soma}`)


// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros
// 2. Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string:
// "Preencha todos os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.

function retorno(numero1, numero2, numero3){
    if(numero1 == null || numero2 == null || numero3 == null){
        return `Preencha os valores corretamente!`
    }else {
        resultado = (numero1 * numero2 * numero3) + 2
        return resultado
    }
}
console.log(retorno(6, 2, 3))


// 7) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros.
// 2. Se somente um argumento for passado, retorne o valor do argumento.
// 3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
// 4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, 
//e o resultado dividido pelo terceiro.
// 5. Se nenhum argumento for passado, retorne "não recebeu parâmetro"

function parametros(numero1, numero2, numero3){
    if(numero1 != null && numero2 == null && numero3 == null){
        return numero1
      }else if(numero1 != null && numero2 != null && numero3 == null){
        return numero1 + numero2
    }else if(numero1 != null && numero2 != null & numero3 != null ){
        return (numero1 + numero2) / numero3
    }else if(numero1 == null && numero2 == null && numero3 == null){
        return `Nao recebeu parametro!`
    }
}
console.log(parametros())


// 8) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida.
// Por exemplo, recebendo "reprograma", vai retornar "amargorper". Para isso, você vai ter que 
// pesquisar como usar JavaScript para inverter uma string.

// 9) agora que você já sabe reverter strings, crie uma função que receba uma string,
// verifique se é um palíndromo e retorne true ou false. Exemplo de palíndromo: "arara".

// 10) crie uma função que receba duas strings como parâmetros e retorne a string com 
//a maior quantidade de caracteres. Por exemplo, se passarmos como parâmetro 
//"banana" e "chocolate" a função deve retornar "chocolate"


