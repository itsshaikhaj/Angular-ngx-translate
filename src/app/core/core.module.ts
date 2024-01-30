import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../global/shared.module';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreRoutingModule, SharedModule],
})
export class CoreModule {}
