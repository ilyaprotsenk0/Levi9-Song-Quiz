import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-page-progress-bar',
  templateUrl: 'quiz-page-progress-bar.component.html',
  styleUrls: ['quiz-page-progress-bar.component.css'],
})
export class QuizPageProgressBarComponent {
  @Input() allGenresData: any = [];
}
