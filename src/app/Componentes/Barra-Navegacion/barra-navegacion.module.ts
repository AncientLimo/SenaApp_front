import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/Core/auth/login/login.component';
import { AuthModule } from 'src/app/Core/auth/auth.module';
import { NavComponent } from './nav/nav.component';
import { DireccionComponent } from './direccion/direccion.component';



@NgModule({
  declarations: [
  NavComponent,
  DireccionComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
  ],
  exports:[
    NavComponent,
    DireccionComponent
  ]
})
export class BarraNavegacionModule { }
