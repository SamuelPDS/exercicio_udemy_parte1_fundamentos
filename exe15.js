/**Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”. */

let escolhaCarro =  (carro) => {
    switch(carro){
        case 'moto':
            return 'Tem certeza que não deseja a moto?'
        
        case 'caminhonete':
            return 'Tem certeza que não deseja a caminhonete?' 
        
        case 'sedan':
            return 'Tem certeza que não deseja o sedan?'

        case 'hatch': 
        return 'compra efetuada com sucesso'
    

        default:
                return 'Não possuimos esse modelo de carro na loja'
    
    
        }
}

console.log(escolhaCarro('moto'))
console.log(escolhaCarro('caminhonete'))
console.log(escolhaCarro('jeep'))
console.log(escolhaCarro('sedan'))
console.log(escolhaCarro('hatch'))


