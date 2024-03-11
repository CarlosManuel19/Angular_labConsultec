import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  fizzBuzz(num:number){

    if (num>1 && num<100) {
        
       if (num%3==0 && num%5==0) {
        return "fizzbuzz";
        
       }else 
            if (num%3==0){
                return "fizz";
            }else
                if(num%5==0){
                    return "buzz";
                }          
    }

    return "Num equivocado"
    
}

esAnagrama(palabra1: string, palabra2: string): boolean {
  // Convertir las palabras a minúsculas
  const palabra1Minuscula = palabra1.toLowerCase();
  const palabra2Minuscula = palabra2.toLowerCase();

  // Si las palabras tienen longitudes diferentes, no son anagramas
  if (palabra1Minuscula.length !== palabra2Minuscula.length) {
    return false;
  }

  const frecuencia1: Record<string, number> = {};
  for (let i = 0; i < palabra1Minuscula.length; i++) {
    const caracter = palabra1Minuscula[i];
    if (!frecuencia1.hasOwnProperty(caracter)) {
      frecuencia1[caracter] = 0;
    }
    frecuencia1[caracter]++;
  }

  const frecuencia2: Record<string, number> = {};
  for (let i = 0; i < palabra2Minuscula.length; i++) {
    const caracter = palabra2Minuscula[i];
    if (!frecuencia2.hasOwnProperty(caracter)) {
      frecuencia2[caracter] = 0;
    }
    frecuencia2[caracter]++;
  }

  for (const caracter of palabra1Minuscula) {
    if (frecuencia1[caracter] !== frecuencia2[caracter]) {
      return false;
    }
  }

  return true;
  
}

}