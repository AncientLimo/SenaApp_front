import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesModule } from './Componentes/componentes.module';
import { NavComponent } from './Componentes/Barra-Navegacion/nav/nav.component';
import { LoginComponent } from './Core/auth/login/login.component';
import { AuthModule } from './Core/auth/auth.module';
import { CoreModule } from './Core/core.module';
import { NavBarModule } from './Core/nav-bar/nav-bar.module';
import { DireccionComponent } from './Componentes/Barra-Navegacion/direccion/direccion.component';
import { BarraNavegacionModule } from './Componentes/Barra-Navegacion/barra-navegacion.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    BarraNavegacionModule,
    AuthModule

        
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
