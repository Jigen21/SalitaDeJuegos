import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { HttpClientModule }         from '@angular/common/http';
import { LayoutModule }             from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatCardModule,
  MatProgressSpinnerModule
}                                   from '@angular/material';
import { RutasModule }              from "./modulos/rutas/rutas.module";

import { ConexionService }          from "./servicios/conexion.service";
import { AutorizacionService }      from "./servicios/autorizacion.service";
import { VerificarTipoService }     from "./servicios/verificar-tipo.service";
import { JwtHelperService }         from "@auth0/angular-jwt";

import { AppComponent }             from './app.component';
import { RegistroComponent }        from './componentes/registro/registro.component';
import { LoginComponent }           from './componentes/login/login.component';

import { SalitaComponent } from './salita/salita.component';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceroComponent } from './tercero/tercero.component';
import { CuartoComponent } from './cuarto/cuarto.component';
import { PuntajePrimeroComponent } from './puntaje-primero/puntaje-primero.component';
import { ArraySortPipe } from './asd.pipe';
import { PuntajeSegundoComponent } from './puntaje-segundo/puntaje-segundo.component';
import { PuntajeTerceroComponent } from './puntaje-tercero/puntaje-tercero.component';
import { PuntajeCuartoComponent } from './puntaje-cuarto/puntaje-cuarto.component';
import { PuntajeQuintoComponent } from './puntaje-quinto/puntaje-quinto.component';
import { QuintoComponent } from './quinto/quinto.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    SalitaComponent,
    PrimeroComponent,
    SegundoComponent,
    TerceroComponent,
    CuartoComponent,
    PuntajePrimeroComponent,
    ArraySortPipe,
    PuntajeSegundoComponent,
    PuntajeTerceroComponent,
    PuntajeCuartoComponent,
    PuntajeQuintoComponent,
    QuintoComponent
  ],
  imports: [
    BrowserModule,
    RutasModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    ConexionService,
    AutorizacionService,
    VerificarTipoService,
    JwtHelperService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
