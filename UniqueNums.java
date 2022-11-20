package uniquenums;
import java.util.Scanner;

public class UniqueNums {


    public static void main(String[] args) {
    int [] numeros = new int[5];
    Scanner sc = new Scanner (System.in);
    int num =0, numValor=0;
    boolean valido = true;
    while(numValor<numeros.length){
    do {
        valido = true;
        System.out.println("Por favor insira um valor unico");
    num = sc.nextInt();
    for (int i = 0; i<numValor; i++)
    {
        if (num==numeros[1]){
            System.out.println("Numero ja existe");
    valido = false;
    break;
        }
    }    
    }while(!valido);
numeros[numValor] = num;
numValor = 0;
    }    
    }
