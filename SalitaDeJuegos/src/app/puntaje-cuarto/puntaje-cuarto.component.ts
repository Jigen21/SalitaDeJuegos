import { Component, OnInit } from '@angular/core';
import { ConexionService } from "../servicios/conexion.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-puntaje-cuarto',
  templateUrl: './puntaje-cuarto.component.html',
  styleUrls: ['./puntaje-cuarto.component.css']
})
export class PuntajeCuartoComponent implements OnInit {

  public displayedColumns: string[] = ['usuario', 'puntaje'];
  public turnos = [];
  public misTurnos;
  public dataSource;
  public juegoUno;
  public juegoDos;
  public juegoTres;
  public juegoCuatro;
  public juegoCinco


  constructor(private conexion: ConexionService) {

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
          return value.cuatro != 0;
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
    location.href = "./cuarto";
  }

  Salir()
  {
    location.href = "./";
  }


}
