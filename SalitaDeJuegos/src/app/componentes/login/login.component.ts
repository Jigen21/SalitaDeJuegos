import { Component, OnInit } from '@angular/core';

import { ConexionService } from "../../servicios/conexion.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public correo;
  public password;

  constructor(private conexion: ConexionService) { }

  ngOnInit() 
  { 
    localStorage.clear();

  }

  /*Logear() {

    if(!this.correo || !this.password) {
      alert("Todos los campos deben ser completados...");
      return;
    }

    this.conexion.Logear(this.correo, this.password).subscribe(
      exito => {

        if((exito as any).error != undefined) {

          alert("Ups... Parece que las credenciales no son validas.");
        } else {

          localStorage.setItem("token", (exito as any).token);
          location.href = "./principal/auto";
        }
      },
      error => alert("error" + JSON.stringify(error))
    );
  }*/

  Setear(name: string, pass: string) {
    this.correo = name;
    this.password = pass;
  }

  Logear()
  {

    if(!this.correo || !this.password) {
      alert("Complete los campos");
      return;
    }
    //this.conexion.Logear(this.correo,this.password).subscribe(exito => console.log(exito));
    //location.href = "./principal/auto";

    this.conexion.Logear(this.correo, this.password).subscribe(
      exito => {

        if((exito as any).error != undefined) {

          alert("Ups... Parece que las credenciales no son validas.");
        } else {

          //localStorage.setItem("token", (exito as any).token);
          localStorage.setItem("token",JSON.stringify(exito));
          
          //location.href = "./principal/auto";
          location.href = "./salita";
        }
      },
      //error => alert("error" + JSON.stringify(error))
      error => alert("El usuario ingresado no coincide con ninguno registrado")
    );

    




  }
  //ProbandoDos()
  //{
   // this.conexion.ProbandoDos(this.correo,this.password).subscribe();
  //}
  
}
