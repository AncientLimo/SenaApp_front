import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { CoreModule } from '../Core/core.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentesRoutingModule,
    CoreModule
  ]
})
export class ComponentesModule { }
