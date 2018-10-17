import { Component, OnInit }  from '@angular/core';

import { Cliente }            from "../../clases/cliente";

import { ConexionService }    from "../../servicios/conexion.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public correo;
  public password;
  public tipo = "cliente";

  constructor(private conexion: ConexionService) { }

  ngOnInit() {  }

/*  Registrar() {

    if(!this.correo || !this.password) {
      
      alert("Todos los campos deben ser completados...");
      return;
    }

    this.conexion.Registrar(new Cliente(this.correo, this.password, this.tipo)).subscribe(
      exito => {
        alert("exito" + JSON.stringify(exito));
        location.href = "./";
      },
      error => alert(error)
    );
  }*/

  Registrar()
  {
    //this.conexion.RegistrarPosta(this.correo,this.password).subscribe();
    //location.href = "./";

    if(!this.correo || !this.password) {
      
      alert("Todos los campos deben ser completados...");
      return;
    }

    this.conexion.RegistrarPosta(this.correo, this.password).subscribe(
      exito => {
        alert("exito" + JSON.stringify(exito));
        location.href = "./";
      },
      error => alert(error)
    );
  }
}
