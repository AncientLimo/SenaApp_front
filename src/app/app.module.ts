import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './Core/auth/auth.module';
import { NavBarModule } from './Core/nav-bar/nav-bar.module';
import { BarraNavegacionModule } from './Componentes/Barra-Navegacion/barra-navegacion.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { RouterModule } from '@angular/router';
import { IconSetService } from '@coreui/icons-angular';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    BarraNavegacionModule,
    AuthModule,
    HttpClientModule,
    SnotifyModule,
    RouterModule

        
  ],
  providers: [
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },IconSetService
    ,{  provide: 'SnotifyToastConfig', useValue: ToastDefaults}
    , SnotifyService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
