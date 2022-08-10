import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { GraficosComponent } from './graficos/graficos.component';
import { InicioComponent } from './inicio/inicio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonalComponent } from './personal/personal.component';
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
  // {
  //   path: '**', component:PageNotFoundComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
