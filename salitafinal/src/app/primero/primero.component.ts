import { Component, OnInit } from '@angular/core';
import { ConexionService } from "../servicios/conexion.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import {Router} from "@angular/router";

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent implements OnInit {

  puntajeMaximo=0;
  JWTHelper = new JwtHelperService();
  token = this.JWTHelper.decodeToken(localStorage.getItem("token"));
  
  
  constructor(private conexion: ConexionService,private router : Router) { }

  ngOnInit() 
  {
    let token = this.JWTHelper.decodeToken(localStorage.getItem("token"));
    
  }

  Volver()
  {
    //location.href = "./salita";
    this.router.navigate(['/salita']);
    
  }

  Salir()
  {
    //location.href = "./";
    this.router.navigate(['/']);
  }

  scores = [0 , 0]; 
  weapons = [
    'rock',
    'paper',
    'scissors'
  ];  
  playerSelected = -1;
  enemySelected  = -1;
  loading= false;
  isResultShow = false;
  
  theResult = 0 

  pick( weapon: number): void {
    
    if(this.loading) return;
    this.loading = true;
    this.playerSelected = weapon;
   
   
    setTimeout( () => {
      this.loading = false;
      
      const randomNum =  Math.floor(Math.random() * 3 ) ;
      this.enemySelected = randomNum;
      this.checkResult();
      this.isResultShow = true;
    },  Math.floor(Math.random()  * 500 ) +200);
  }
 
  reset(): void {
   this.scores = [0,0];
  }
  checkResult(): void {
    const playerPick = this.playerSelected;
    const enemyPick = this.enemySelected;
 
    if( playerPick ==  enemyPick)
     {
     this.theResult = 2;
   }
 
     else if ( (playerPick - enemyPick + 3)% 3 == 1)    {
       
       this.theResult = 0;
       this.scores[0] = this.scores[0]+1;

       this.puntajeMaximo=this.scores[0];
     }
     else{
      
       alert("Perdiste");


       this.conexion.puntajeUno(this.token.correo,this.puntajeMaximo).subscribe(
        exito => {
          
          //location.href = "./salita";
          //location.href = "./puntajePrimero";
          this.router.navigate(['/Puntaje']);
         
        },
        error => alert("error" + JSON.stringify(error))
      );




       //location.href= "./salita";
       //this.theResult = 1;
         //this.scores[1] = this.scores[1]+1;

         
     }
  }




}
