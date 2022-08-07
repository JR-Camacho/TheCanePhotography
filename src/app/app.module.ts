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
import { BarraRedesPhoneComponent } from './barra-redes-phone/barra-redes-phone.component';


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
    BarraRedesPhoneComponent,
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
