//Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
//dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

let verificador = (dia) => {
switch(dia){
    case 1:
        return "O dia informado refere-se a domingo,  fim de semana!"
    break

    case 2:
    case 3: 
    case 4:
    case 5: 
    case 6:
        return "O dia informado refere-se a dia útil"
    break

    case 7:
        console.log("O dia informado refere-se a Sábado, fim de semana!")
        default:
            return 'numero referente ao dia invalido'
        }
    } 

    console.log(verificador(1))
    console.log(verificador(4))
    console.log(verificador(7))



