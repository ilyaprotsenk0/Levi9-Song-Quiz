import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// Shared components
import { LogoComponent } from './shared/components/logo/logo.component';
import { ButtonComponent } from './shared/components/button/button.component';
// Start quiz page
import { StartPageComponent } from './components/start-page/start-page.component';
import { StartPageFormComponent } from './components/start-page/start-page-form/start-page-form.component';
// Quiz page
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';
import { QuizPageHeaderComponent } from './components/quiz-page/quiz-page-header/quiz-page-header.component';
import { QuizPageProgressBarComponent } from './components/quiz-page/quiz-page-progress-bar/quiz-page-progress.component';
import { QuizPageQuizComponent } from './components/quiz-page/quiz-page-quiz-options/quiz-page-quiz.component';
import { QuizPageSongDescriptionComponent } from './components/quiz-page/quiz-page-song-description/quiz-page-song-description';
// Result page
import { ResultPageComponent } from './components/result-page/result-page.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ButtonComponent,
    StartPageComponent,
    StartPageFormComponent,
    QuizPageComponent,
    QuizPageHeaderComponent,
    QuizPageProgressBarComponent,
    QuizPageQuizComponent,
    QuizPageSongDescriptionComponent,
    ResultPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
