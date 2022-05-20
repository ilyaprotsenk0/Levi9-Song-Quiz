import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/components/shared.module';

import { QuizPageHeaderComponent } from './quiz-page-header/quiz-page-header.component';
import { QuizPageProgressBarComponent } from './quiz-page-progress-bar/quiz-page-progress.component';
import { QuizPageQuizComponent } from './quiz-page-quiz/quiz-page-quiz.component';
import { QuizPageDescriptionComponent } from './quiz-page-description/quiz-page-description.component';
import { QuizPageComponent } from './quiz-page.component';

@NgModule({
  declarations: [
    QuizPageHeaderComponent,
    QuizPageProgressBarComponent,
    QuizPageQuizComponent,
    QuizPageDescriptionComponent,
    QuizPageComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [QuizPageComponent],
})
export class QuizPageModule {}
