import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  fizzBuzz(num:number){

    if (num>1 && num<100) {
        
       if (num%3 && num%5) {
        return "fizzbuzz";
        
       }else 
            if (num%3){
                return "fizz";
            }else
                if(num%5){
                    return "buzz";
                }          
    }

    return "Num equivocado"
    
}

}
