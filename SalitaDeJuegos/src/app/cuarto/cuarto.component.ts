import { Component, OnInit } from '@angular/core';
import { ConexionService } from "../servicios/conexion.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-cuarto',
  templateUrl: './cuarto.component.html',
  styleUrls: ['./cuarto.component.css']
})
export class CuartoComponent implements OnInit {

  puntajeMaximo=0;
  JWTHelper = new JwtHelperService();
  token = this.JWTHelper.decodeToken(localStorage.getItem("token"));

  n1;
  n2;
  answer;
  question;
  userAnswer;

  constructor(private conexion: ConexionService) 
  { 


  }

  ngOnInit() 
  {
    this.getNewQuestion();

  }

  Volver()
  {
    location.href = "./salita";
  }

  Salir()
  {
    location.href = "./";
  }
  


    getNewQuestion()   
    {

        this.n1 = Math.floor(Math.random() * 9);
        //this.n2 = Math.floor(Math.random() * 9);
        //this.question = this.n1 + " + " + this.n2;
        
        this.answer = this.n1;
        this.userAnswer = "";
    }

    onSubmitAnswer() 
    {
      if(!this.userAnswer)
      {
          alert("No escribio ninguna respuesta");
          return;
      }



      if (parseInt(this.userAnswer) == this.answer) 
      {
          alert("Acerto el numero secreto");
          this.puntajeMaximo++;
          this.getNewQuestion();
      } else 
      {
        alert("Incorrecto,el numero secreto era "+this.answer);

        this.conexion.puntajeCuatro(this.token.correo,this.puntajeMaximo).subscribe(
          exito => {
            
            //location.href = "./salita";
            location.href = "./puntajeCuarto";
           
          },
          error => alert("error" + JSON.stringify(error))
        );
        //this.getNewQuestion();
      }
   }

   skipQuestion() 
   {
    this.getNewQuestion();
    
  }

}
