import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogoComponent } from './shared/components/logo/logo.component';
// Start quiz page
import { StartPageComponent } from './components/start-page/start-page.component';
import { StartPageFormComponent } from './components/start-page/start-page-form/start-page-form.component';
import { ButtonComponent } from './shared/components/button/button.component';
// Quiz page
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';
import { QuizPageHeaderComponent } from './components/quiz-page/quiz-page-header/quiz-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    StartPageFormComponent,
    LogoComponent,
    QuizPageComponent,
    QuizPageHeaderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
