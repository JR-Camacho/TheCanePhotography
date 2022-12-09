import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BreakpointObserver, LayoutModule} from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SesionesComponent } from './components/sesiones/sesiones.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { GraficosComponent } from './components/graficos/graficos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BarraRedesComponent } from './components/barra-redes/barra-redes.component';
import { SesionesExteriorComponent } from './components/sesiones-exterior/sesiones-exterior.component';
import { SesionesEstudioComponent } from './components/sesiones-estudio/sesiones-estudio.component';
import { BarraRedesPhoneComponent } from './components/barra-redes-phone/barra-redes-phone.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewPhotoComponent } from './components/new-photo/new-photo.component';
import { EditPhotoComponent } from './components/edit-photo/edit-photo.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import { MessageComponent } from './components/message/message.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MessageErrorComponent } from './components/message-error/message-error.component';
import { MessageConfirmationComponent } from './components/message-confirmation/message-confirmation.component';
import { UpdateOfferComponent } from './components/update-offer/update-offer.component';
import { ShowOfferComponent } from './components/show-offer/show-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SesionesComponent,
    PersonalComponent,
    ContactosComponent,
    GraficosComponent,
    PageNotFoundComponent,
    BarraRedesComponent,
    SesionesExteriorComponent,
    SesionesEstudioComponent,
    BarraRedesPhoneComponent,
    IngresoComponent,
    RegistroComponent,
    ProfileComponent,
    NewPhotoComponent,
    EditPhotoComponent,
    MessengerComponent,
    MessageComponent,
    SpinnerComponent,
    MessageErrorComponent,
    MessageConfirmationComponent,
    UpdateOfferComponent,
    ShowOfferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
