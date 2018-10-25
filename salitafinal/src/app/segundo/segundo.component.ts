import { Component, OnInit } from '@angular/core';
import { ConexionService } from "../servicios/conexion.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import {Router} from "@angular/router";
import { timer } from 'rxjs';



@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {

  
  JWTHelper = new JwtHelperService();
  token = this.JWTHelper.decodeToken(localStorage.getItem("token"));


  public segundos;
  public milisegundos;
  public valor;
  public randomLetter;
  public palabraUno;
  public palabraDos;
  public palabraTres;
  public palabraCuatro;
  public palabraCinco;
  public userAnswer;
  public respuestaUno;
  public respuestaDos;
  public tiempo;
  public respuestaTres;
  public a;
  public primeraVezJugando;
  public puntajeMaximo=0;


    

  constructor(private conexion: ConexionService,private router : Router) 
  { 
    

  }

  ngOnInit() 
  {
    //this.getNewQuestion();
    //this.shuffleWord() 
    this.valor=false;
    this.respuestaUno=false;
    this.respuestaDos=false;
    this.respuestaTres=true;
    this.primeraVezJugando=0;
    


  }

  

  onSubmitAnswer() 
    {


        if(!this.userAnswer)
        {
            alert("No escribio ninguna respuesta");
            return;
        }



      //if (parseInt(this.userAnswer) == this.answer) 
      if (this.userAnswer==this.palabraUno+this.palabraDos+this.palabraTres+this.palabraCuatro+this.palabraCinco) 
      {
          alert("Acerto la palabra");
          this.primeraVezJugando++;
          this.Iniciar();
          this.puntajeMaximo++;
      } 
      
      else 
      {
        alert("Incorrecto,la palabra era "+this.palabraUno+this.palabraDos+this.palabraTres+this.palabraCuatro+this.palabraCinco);

        this.conexion.puntajeDos(this.token.correo,this.puntajeMaximo).subscribe(
          exito => {
            
            //location.href = "./salita";
            //location.href = "./puntajeSegundo";
            this.router.navigate(['/Puntaje']);
           
          },
          error => alert("error" + JSON.stringify(error))
        );


        //this.shuffleWord();
      }
   }

   Volver()
   {
     //location.href = "./salita";
     this.router.navigate(['/salita']);
   }

   Salir()
   {
    // location.href = "./";
    this.router.navigate(['/']);
   }





  Iniciar()
  {
    this.userAnswer="";
    //clearInterval();
    this.palabraUno = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))];
    this.palabraDos = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))];
    this.palabraTres = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))];
    this.palabraCuatro = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))];
    this.palabraCinco = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))];

    this.respuestaDos=false;

    this.respuestaTres=false;
    this.respuestaUno=false;



    this.segundos = 5;
    this.milisegundos = 9;
    this.valor=true;
    this.tiempo=true;
    
    if(this.primeraVezJugando==0)
    {
      this.Timer();
    }

   
  }

  Timer() 
  {

    //this.segundos = 5;
    //this.milisegundos = 9;

    setInterval(() => {

      this.segundos--;

      if (this.segundos == 0) {
        //this.GameOver();
        //alert("perdiste");
        this.tiempoTerminado();
        //clearInterval();
        //clearInterval(this.a);
        
        
        
      }


    }, 1000);

    
  }

  tiempoTerminado()
  {

    this.valor=false;
    this.respuestaUno=true;
    this.respuestaDos=true;
    this.tiempo=false;
    //this.respuestaTres=false;
    //clearInterval(this.a);
  }


  

  

  

  

}
