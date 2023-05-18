/*  Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function divisao (dividendo, divisor){
    let result = ` ${Math.floor(dividendo/divisor)}`
    let rest = ` ${dividendo%divisor}`
    return{
        Resultado: result,
        Resto: rest
    }
}
console.log(divisao(16,5))



