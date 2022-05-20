import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/components/shared.module';

import { ResultPageComponent } from './result-page.component';

@NgModule({
  declarations: [ResultPageComponent],
  imports: [CommonModule, SharedModule],
  exports: [ResultPageComponent],
})
export class ResultPageModule {}
