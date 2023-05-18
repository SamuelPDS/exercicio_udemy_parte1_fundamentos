/**) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo). */

let stringpontuacoes = '30,29,30, 3, 0, 23, 34,22,78 ,34,98'

function avaliar_jogo(stringpontuacoes){
let pontuacao = stringpontuacoes.split(",")
let qtdrecord = 0
let piorjogo = 1
let maiorpontuacao = pontuacao [0]
let menorpontuacao = pontuacao [0]

for(let i=1; i<pontuacao.length; i++){
    if(parseInt(pontuacao[i]) > parseInt(maiorpontuacao)){
        maiorpontuacao = pontuacao[i]
        qtdrecord++
    } else if (parseInt(pontuacao[i])< parseInt(menorpontuacao)){
        menorpontuacao = pontuacao[i]
        piorjogo = i+1
    }
    
}
return [qtdrecord, piorjogo]
}

console.log(avaliar_jogo(stringpontuacoes))

