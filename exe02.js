/** Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */ 
function tip_triangulo(ladoa, ladob, ladoc){
    if(ladoa==ladob && ladob==ladoc){
        return 'triângulo equilátero'
    } else if (ladoa==ladob || ladob ==ladoc || ladoa==ladoc){
        return 'triângulo isósceles'
    } else 
    return 'triangulo escaleno'
}
console.log(tip_triangulo(2, 2, 2));
console.log(tip_triangulo(2, 3, 3));
console.log(tip_triangulo(2, 3, 4));


