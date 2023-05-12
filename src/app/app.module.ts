import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Componentes/Barra-Navegacion/nav/nav.component';
import { ProgramaFormativoComponent } from './Componentes/programa-formativo/programa-formativo.component';
import { GuiaMonitoreoColoresComponent } from './Componentes/guia-monitoreo-colores/guia-monitoreo-colores.component';
import { ElipseInformationComponent } from './Componentes/elipse-information/elipse-information.component';
import { FiltroSearchComponent } from './Componentes/filtro-search/filtro-search.component';
import { DireccionComponent } from './Componentes/Barra-Navegacion/direccion/direccion.component';
import { DescripcionComponent } from './Componentes/descripcion/descripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProgramaFormativoComponent,
    GuiaMonitoreoColoresComponent,
    ElipseInformationComponent,
    FiltroSearchComponent,
    DireccionComponent,
    DescripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
