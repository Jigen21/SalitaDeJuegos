import { Component, OnInit } from '@angular/core';
import { ConexionService } from "../servicios/conexion.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import {Router} from "@angular/router";


@Component({
  selector: 'app-tercero',
  templateUrl: './tercero.component.html',
  styleUrls: ['./tercero.component.css']
})
export class TerceroComponent implements OnInit {

  public segundos;
  puntajeMaximo=0;
  JWTHelper = new JwtHelperService();
  token = this.JWTHelper.decodeToken(localStorage.getItem("token"));
  n1;
  n2;
  answer;
  question;
  userAnswer;
  public operador: number;
  primeraVezJugando=0;
  asd;

  constructor(private conexion: ConexionService,private router : Router) 
  { 


  }

  Timer() 
  {

    //this.segundos = 5;
    //this.milisegundos = 9;

   this.asd=  setInterval(() => {

      this.segundos--;

      if (this.segundos == 0) {
        
       // alert("Se te acabo el tiempo");

        this.conexion.puntajeTres(this.token.correo,this.puntajeMaximo).subscribe(
          exito => {
            
            //location.href = "./salita";
            //location.href = "./puntajeTercero";
            this.router.navigate(['/Puntaje']);
            clearInterval(this.asd);
           
          },
          error => alert("error" + JSON.stringify(error))
        );
        
        
        
      }


    }, 1000);

    

    

    
  }







  ngOnInit() 
  {
    this.getNewQuestion();

  }

  Volver()
  {
    //location.href = "./salita";
    clearInterval(this.asd);
     this.router.navigate(['/salita']);
     
  }

  Salir()
  {
    //location.href = "./";
    clearInterval(this.asd);
     this.router.navigate(['/']);
  }
  


    getNewQuestion()   
    {

      if(this.primeraVezJugando==0)
    {
      this.Timer();
    }



      this.segundos=5;
     // this.Timer();

       /* this.n1 = Math.floor(Math.random() * 15);
        this.n2 = Math.floor(Math.random() * 15);
        this.question = this.n1 + " + " + this.n2;
        this.answer = this.n1 + this.n2;
        this.userAnswer = "";*/
        this.operador = Math.floor(Math.random() * (4 - 1)) + 1;
        this.n1 = Math.floor(Math.random() * (50 - 1)) + 1;
        this.n2 = Math.floor(Math.random() * (50 - 1)) + 1;
    
        switch (this.operador) {
    
          case 1:
            this.question = `${this.n1} + ${this.n2} = `;
            this.answer = this.n1 + this.n2;
            break;
    
          case 2:
            this.question = `${this.n1} - ${this.n2} = `;
            this.answer = this.n1 - this.n2;
            break;
    
          case 3:
            this.n1 = this.operador = Math.floor(Math.random() * (10 - 1)) + 1;
            this.n2 = this.operador = Math.floor(Math.random() * (10 - 1)) + 1;
            this.question = `${this.n1} X ${this.n2} = `;
            this.answer = this.n1 * this.n2;
            break;
    
          default:
            
        }



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
          alert("respuesta correcta");
          this.userAnswer="";
          this.puntajeMaximo++;
          this.primeraVezJugando++;
          this.getNewQuestion();
      } else 
      {
        alert("respuesta incorrecta");
        clearInterval(this.asd);

        

        this.conexion.puntajeTres(this.token.correo,this.puntajeMaximo).subscribe(
          exito => {
            
            //location.href = "./salita";
            //location.href = "./puntajeTercero";
            this.router.navigate(['/Puntaje']);
           
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
