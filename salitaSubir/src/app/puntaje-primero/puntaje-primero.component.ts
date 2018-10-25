import { Component, OnInit } from '@angular/core';
import { ConexionService } from "../servicios/conexion.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import {ArraySortPipe} from "../asd.pipe";
import {Router} from "@angular/router";


@Component({
  selector: 'app-puntaje-primero',
  templateUrl: './puntaje-primero.component.html',
  styleUrls: ['./puntaje-primero.component.css'],
  
  
})
export class PuntajePrimeroComponent implements OnInit {

  public displayedColumns: string[] = ['usuario', 'puntaje'];
  public turnos = [];
  public misTurnos;
  public dataSource;
  public juegoUno;
  public juegoDos;
  public juegoTres;
  public juegoCuatro;
  public juegoCinco


  constructor(private conexion: ConexionService,private router : Router) {

    let JWTHelper = new JwtHelperService();
    let token;
    token=JWTHelper.decodeToken(localStorage.getItem('token'));

  

    this.conexion.puntajePrimero().subscribe(
      exito => {
        //alert("llegue");
        //console.log(exito);

        //this.turnos = (exito as any).rta;
        this.turnos = (exito as any);
        this.misTurnos = this.turnos.filter((value)=> {

          //return value.correo == token.correo || value.correo != token.correo; 
          return value.uno != 0;
       });

       

        this.dataSource = this.misTurnos;
        //alert(this.turnos);
      },
      error => alert("Error: " + JSON.stringify(error))
    );
   }

  ngOnInit() { }

  Volver()
  {
    //location.href = "./primero";
    this.router.navigate(['/primero']);
  }

  Salir()
  {
    //location.href = "./";
    this.router.navigate(['/']);
  }

}
