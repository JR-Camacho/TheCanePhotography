import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { GraficosComponent } from './graficos/graficos.component';
import { InicioComponent } from './inicio/inicio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonalComponent } from './personal/personal.component';
import { Sesion1EstudioComponent } from './sesion1-estudio/sesion1-estudio.component';
import { Sesion1ExteriorComponent } from './sesion1-exterior/sesion1-exterior.component';
import { Sesion2EstudioComponent } from './sesion2-estudio/sesion2-estudio.component';
import { Sesion2ExteriorComponent } from './sesion2-exterior/sesion2-exterior.component';
import { Sesion3EstudioComponent } from './sesion3-estudio/sesion3-estudio.component';
import { Sesion3ExteriorComponent } from './sesion3-exterior/sesion3-exterior.component';
import { Sesion4EstudioComponent } from './sesion4-estudio/sesion4-estudio.component';
import { Sesion4ExteriorComponent } from './sesion4-exterior/sesion4-exterior.component';
import { Sesion5EstudioComponent } from './sesion5-estudio/sesion5-estudio.component';
import { Sesion6EstudioComponent } from './sesion6-estudio/sesion6-estudio.component';
import { SesionesEstudioComponent } from './sesiones-estudio/sesiones-estudio.component';
import { SesionesExteriorComponent } from './sesiones-exterior/sesiones-exterior.component';
import { SesionesComponent } from './sesiones/sesiones.component';

const routes: Routes = [
  {
    path: '', component:InicioComponent
  },
  {
    path: 'sesiones', component:SesionesComponent
  },
  {
    path: 'galeria', component:GaleriaComponent
  },
  {
    path: 'graficos', component:GraficosComponent
  },
  {
    path: 'personal', component:PersonalComponent
  },
  {
    path: 'contactos', component:ContactosComponent
  },
  {
    path: 'sesiones_exterior', component:SesionesExteriorComponent
  }, 
  {
    path: 'sesiones_estudio', component:SesionesEstudioComponent
  },
  {
    path: 'sesion1_estudio', component:Sesion1EstudioComponent
  },
  {
    path: 'sesion2_estudio', component:Sesion2EstudioComponent
  },
  {
    path: 'sesion3_estudio', component:Sesion3EstudioComponent
  },
  {
    path: 'sesion4_estudio', component:Sesion4EstudioComponent
  },
  {
    path: 'sesion5_estudio', component:Sesion5EstudioComponent
  },
  {
    path: 'sesion6_estudio', component:Sesion6EstudioComponent
  },
  {
    path: 'sesion1_exterior', component:Sesion1ExteriorComponent
  },
  {
    path: 'sesion2_exterior', component:Sesion2ExteriorComponent
  },
  {
    path: 'sesion3_exterior', component:Sesion3ExteriorComponent
  },
  {
    path: 'sesion4_exterior', component:Sesion4ExteriorComponent
  },
  {
    path: '**', component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
