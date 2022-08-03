import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BreakpointObserver, LayoutModule} from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SesionesComponent } from './sesiones/sesiones.component';
import { PersonalComponent } from './personal/personal.component';
import { ContactosComponent } from './contactos/contactos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { GraficosComponent } from './graficos/graficos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BarraRedesComponent } from './barra-redes/barra-redes.component';
import { SesionesExteriorComponent } from './sesiones-exterior/sesiones-exterior.component';
import { SesionesEstudioComponent } from './sesiones-estudio/sesiones-estudio.component';
import { Sesion1EstudioComponent } from './sesion1-estudio/sesion1-estudio.component';
import { Sesion2EstudioComponent } from './sesion2-estudio/sesion2-estudio.component';
import { Sesion3EstudioComponent } from './sesion3-estudio/sesion3-estudio.component';
import { Sesion4EstudioComponent } from './sesion4-estudio/sesion4-estudio.component';
import { Sesion5EstudioComponent } from './sesion5-estudio/sesion5-estudio.component';
import { Sesion1ExteriorComponent } from './sesion1-exterior/sesion1-exterior.component';
import { Sesion2ExteriorComponent } from './sesion2-exterior/sesion2-exterior.component';
import { Sesion3ExteriorComponent } from './sesion3-exterior/sesion3-exterior.component';
import { Sesion4ExteriorComponent } from './sesion4-exterior/sesion4-exterior.component';
import { BarraRedesPhoneComponent } from './barra-redes-phone/barra-redes-phone.component';
import { Sesion6EstudioComponent } from './sesion6-estudio/sesion6-estudio.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SesionesComponent,
    PersonalComponent,
    ContactosComponent,
    GaleriaComponent,
    GraficosComponent,
    PageNotFoundComponent,
    BarraRedesComponent,
    SesionesExteriorComponent,
    SesionesEstudioComponent,
    Sesion1EstudioComponent,
    Sesion2EstudioComponent,
    Sesion3EstudioComponent,
    Sesion4EstudioComponent,
    Sesion5EstudioComponent,
    Sesion1ExteriorComponent,
    Sesion2ExteriorComponent,
    Sesion3ExteriorComponent,
    Sesion4ExteriorComponent,
    BarraRedesPhoneComponent,
    Sesion6EstudioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
