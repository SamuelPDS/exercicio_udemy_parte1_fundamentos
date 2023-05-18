/**Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */

let jurossimples = (capital, taxa, tempo) => {
    let calculo = capital * taxa * tempo
    return `O valor total é igual a ${(capital + calculo).toFixed(2)}`
}

let juroscompostos = (capital, taxa, tempo) => {
    let calculo = capital* (1+taxa) **tempo
    return `O valor total é igual a ${calculo.toFixed(2)}`
}

console.log(jurossimples(1000, 0.10, 12))
console.log(juroscompostos(1000,0.10,12))


