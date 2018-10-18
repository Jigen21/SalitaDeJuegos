import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { Routes, RouterModule }   from '@angular/router';

import { AutorizacionService }    from "../../servicios/autorizacion.service";
import { VerificarTipoService }   from "../../servicios/verificar-tipo.service";

import { LoginComponent }         from "../../componentes/login/login.component";
import { RegistroComponent }      from "../../componentes/registro/registro.component";

import { SalitaComponent } from '../../salita/salita.component';
import { PrimeroComponent } from '../../primero/primero.component';
import { TerceroComponent } from '../../tercero/tercero.component';
import { SegundoComponent } from '../../segundo/segundo.component';
import { CuartoComponent } from '../../cuarto/cuarto.component';
import { PuntajePrimeroComponent } from '../../puntaje-primero/puntaje-primero.component';
import { PuntajeSegundoComponent } from '../../puntaje-segundo/puntaje-segundo.component';
import { PuntajeTerceroComponent } from '../../puntaje-tercero/puntaje-tercero.component';
import { PuntajeCuartoComponent } from '../../puntaje-cuarto/puntaje-cuarto.component';
import { PuntajeQuintoComponent } from '../../puntaje-quinto/puntaje-quinto.component';
import { QuintoComponent } from '../../quinto/quinto.component';

const rutas: Routes = [
  { path: "", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "salita", component: SalitaComponent , canActivate: [AutorizacionService] },
  { path: "primero", component: PrimeroComponent , canActivate: [AutorizacionService] },
  { path: "segundo", component: SegundoComponent , canActivate: [AutorizacionService] },
  { path: "tercero", component: TerceroComponent , canActivate: [AutorizacionService] },
  { path: "cuarto", component: CuartoComponent , canActivate: [AutorizacionService] },
  { path: "cinco", component: QuintoComponent , canActivate: [AutorizacionService] },
  { path: "puntajePrimero", component: PuntajePrimeroComponent , canActivate: [AutorizacionService] },
  { path: "puntajeSegundo", component: PuntajeSegundoComponent , canActivate: [AutorizacionService] },
  { path: "puntajeTercero", component: PuntajeTerceroComponent , canActivate: [AutorizacionService] },
  { path: "puntajeCuarto", component: PuntajeCuartoComponent , canActivate: [AutorizacionService] },
  { path: "puntajeQuinto", component: PuntajeQuintoComponent , canActivate: [AutorizacionService] },

  /*{ path: "principal", component: PrincipalComponent, canActivate: [AutorizacionService], children:[
    { path: "auto", component: CargarAutoComponent, canActivate: [AutorizacionService, VerificarTipoService], data: {roles: ["admin", "cliente"]} },
    { path: "turno", component: PedirTurnoComponent, canActivate: [AutorizacionService, VerificarTipoService], data: {roles: ["cliente"]} },
    { path: "turnos", component: MostrarTurnosComponent, canActivate: [AutorizacionService, VerificarTipoService], data: {roles: ["cliente"]} },
    { path: "todosturnos", component: TodosLosTurnosComponent, canActivate: [AutorizacionService, VerificarTipoService], data: {roles: ["admin"]} }
  ] },*/
  { path: "**", component: LoginComponent }
 ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RutasModule { }
