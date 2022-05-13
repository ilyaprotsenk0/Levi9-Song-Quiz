import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './components/start-page/start-page.component';
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';

const routes: Routes = [
  {
    path: 'start',
    component: StartPageComponent,
  },
  {
    path: 'quiz',
    component: QuizPageComponent,
  },
  {
    path: '**',
    component: StartPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
