import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { StartPageComponent } from './start-page.component';
import { StartPageFormComponent } from './start-page-form/start-page-form.component';

@NgModule({
  declarations: [StartPageComponent, StartPageFormComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [StartPageComponent],
})
export class StartPageModule {}
