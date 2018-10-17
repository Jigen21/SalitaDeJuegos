import { Injectable } from '@angular/core';

import { Cliente } from "../clases/cliente";
import { Auto } from '../clases/auto';
import { Turno } from '../clases/turno';

import { HttpClient, HttpHeaders } from '@angular/common/http';

//const config = { "headers": new HttpHeaders({ "token": localStorage.getItem("token") }) };
const config = { "headers": new HttpHeaders({ 
  'Content-Type':'application/x-www-form-urlencoded'
}) 
};

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private http: HttpClient) { }

  public Registrar(cliente: Cliente) { return this.http.post("http://192.168.2.73:3003/clientes", { "cliente": cliente }); }
  
  public AltaAuto(auto: Auto) { return this.http.post("http://192.168.2.73:3003/auto", { "auto": auto }, config); }
  public PedirTurno(turno: Turno) { return this.http.post("http://192.168.2.73:3003/turnos", { "turno": turno }, config); }
  public ObtenerTurnos() { return this.http.get("http://192.168.2.73:3003/turnos", config); }
  public ObtenerClientes() { return this.http.get("http://192.168.2.73:3003/clientes", config); }

  public Probando() { return this.http.get("https://lab4qa.000webhostapp.com/api/api/",{responseType: 'text'}); }
  //public ProbandoDos(){ return this.http.post("http://192.168.2.73:3003/auto"),{ "cliente": "asd" }}

  //public ProbandoDos() { return this.http.post("https://lab4qa.000webhostapp.com/api/api/","asd", config); }

  public RegistrarPosta(name: string, pass: string) 
  { 
    let params='correo='+name+'&clave='+pass;
    return this.http.post("https://lab4qa.000webhostapp.com/api/api/registrar",params, config); 
  }


  public Logear(name: string, pass: string) 
  { 
    let params='correo='+name+'&clave='+pass;
    return this.http.post("https://lab4qa.000webhostapp.com/api/api/login",params, config); 

  } 

  public puntajeUno(correo:string,puntaje:number)
  {
    let params='correo='+correo+'&uno='+puntaje;
    return this.http.post("https://lab4qa.000webhostapp.com/api/api/puntajeUno",params,config);    

  }

  public puntajePrimero(){ return this.http.get("https://lab4qa.000webhostapp.com/api/api/puntajeUno", config); }
  


  public puntajeDos(correo:string,puntaje:number)
  {
    let params='correo='+correo+'&dos='+puntaje;
    return this.http.post("https://lab4qa.000webhostapp.com/api/api/puntajeDos",params,config);    

  }

  public puntajeTres(correo:string,puntaje:number)
  {
    let params='correo='+correo+'&tres='+puntaje;
    return this.http.post("https://lab4qa.000webhostapp.com/api/api/puntajeTres",params,config);    

  }

  public puntajeCuatro(correo:string,puntaje:number)
  {
    let params='correo='+correo+'&cuatro='+puntaje;
    return this.http.post("https://lab4qa.000webhostapp.com/api/api/puntajeCuatro",params,config);    

  }

  public puntajeCinco(correo:string,puntaje:number)
  {
    let params='correo='+correo+'&uno='+puntaje;
    return this.http.put("https://lab4qa.000webhostapp.com/api/api/login/juegoUno",params,config);    

  }



}
