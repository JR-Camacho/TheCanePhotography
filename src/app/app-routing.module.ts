import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './components/contactos/contactos.component';
import { GraficosComponent } from './components/graficos/graficos.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SesionesEstudioComponent } from './components/sesiones-estudio/sesiones-estudio.component';
import { SesionesExteriorComponent } from './components/sesiones-exterior/sesiones-exterior.component';
import { SesionesComponent } from './components/sesiones/sesiones.component';

const routes: Routes = [
  {
    path: '', component:InicioComponent
  },
  {
    path: 'sesiones', component:SesionesComponent
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
    path: 'ingresar', component:IngresoComponent
  },
  {
    path: 'registrar', component:RegistroComponent
  },
  {
    path: 'profile', component:ProfileComponent
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
