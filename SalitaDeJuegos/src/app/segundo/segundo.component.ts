import { Component, OnInit } from '@angular/core';
import { ConexionService } from "../servicios/conexion.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {

  puntajeMaximo=0;
  JWTHelper = new JwtHelperService();
  token = this.JWTHelper.decodeToken(localStorage.getItem("token"));

  n1;
  n2;
  answer;
  question;
  userAnswer;
  palabrita = Math.floor(Math.random() * 9);
  a;
  b;
  c;



  
  WORDS = ["ACCOUNT", "ADDITION",
    "AGREEMENT", "ANGRY", "ANIMAL", "BEHAVIOUR", "BETWEEN", "BLACK", "CHEMICAL", "FOOLISH",
    "FREQUENT", "GOVERNMENT", "GRAIN", "GRASS", "HOSPITAL", "PAYMENT", "POLITICAL",
    "PROCESS", "SHAME", "SMASH", "SMOOTH", "STATEMENT", "SUBSTANCE", "TEACHING", "TENDENCY",
    "TOMORROW", "TOUCH", "UMBRELLA", "WEATHER", "YESTERDAY"];
    

  constructor(private conexion: ConexionService) 
  { 
    

  }

  ngOnInit() 
  {
    //this.getNewQuestion();
    this.shuffleWord() 
    


  }

  shuffleWord() 
  {
    let ran = Math.floor(Math.random() * 27);
    this.answer=this.WORDS[ran];
    this.question=this.answer.split('').sort(function(){return 0.5 - Math.random() }).join('');
    
    

    


    //this.question= this.WORDS[this.palabrita];
    //this.shuffleArray(this.answer)
  }

 /* shuffleArray(d) 
  {
    for (this.a=0;d.lenght;this.a++) 
    {
      


      
    }
    this.question=d;
  }*/

  shuffleArray(inputArray){
    
    for (let i: number = inputArray.length - 1; i >= 0; i--){
        var randomIndex: number = Math.floor(Math.random() * (i + 1));
        var itemAtIndex: number = inputArray[randomIndex];

        inputArray[randomIndex] = inputArray[i];
        inputArray[i] = itemAtIndex;
    }
    return inputArray;
  }
  


    getNewQuestion()   
    {

        this.n1 = Math.floor(Math.random() * 9);
        //this.n2 = Math.floor(Math.random() * 9);
        //this.question = this.n1 + " + " + this.n2;
        
        this.answer = this.n1;
        this.userAnswer = "";
    }

    Volver()
    {
      location.href = "./salita";
    }

    Salir()
    {
      location.href = "./";
    }


    onSubmitAnswer() 
    {


        if(!this.userAnswer)
        {
            alert("No escribio ninguna respuesta");
            return;
        }



      //if (parseInt(this.userAnswer) == this.answer) 
      if (this.userAnswer == this.answer) 
      {
          alert("Acerto la palabra");
          this.shuffleWord();
          this.puntajeMaximo++;
      } else 
      {
        alert("Incorrecto,la palabra era "+this.answer);

        this.conexion.puntajeDos(this.token.correo,this.puntajeMaximo).subscribe(
          exito => {
            
            //location.href = "./salita";
            location.href = "./puntajeSegundo";
           
          },
          error => alert("error" + JSON.stringify(error))
        );


        //this.shuffleWord();
      }
   }

   skipQuestion() 
   {
    this.getNewQuestion();
    
  }

}
