import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './components/start-page/start-page.component';
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';
import { ResultPageComponent } from './components/result-page/result-page.component';
import { UserAuthGuard } from './guards/user-auth.guard';

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
    canActivate: [UserAuthGuard],
  },
  {
    path: 'result',
    component: ResultPageComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: '**',
    component: StartPageComponent,
    canActivate: [UserAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
