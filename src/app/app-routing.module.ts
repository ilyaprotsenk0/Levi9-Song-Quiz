import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './components/start-page/start-page.component';
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';
import { ResultPageComponent } from './components/result-page/result-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'start',
    component: StartPageComponent,
  },
  {
    path: 'quiz',
    component: QuizPageComponent,
  },
  {
    path: 'result',
    component: ResultPageComponent,
  },
  {
    path: '**',
    redirectTo: 'start',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
