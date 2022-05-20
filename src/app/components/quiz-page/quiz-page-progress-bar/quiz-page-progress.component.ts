import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-page-progress-bar',
  templateUrl: 'quiz-page-progress-bar.component.html',
  styleUrls: ['quiz-page-progress-bar.component.css'],
})
export class QuizPageProgressBarComponent implements OnInit {
  @Input() allGenresData: any = [];
  counter = 0;
  isRoundOver!: boolean;

  constructor(
    private counterService: CounterService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.counterService.getCounter$().subscribe((value) => {
      this.counter = value;
    });

    this.quizService.getIsRoundOver$().subscribe((value) => {
      this.isRoundOver = value;
    });
  }

  isLighted(id: number, element: HTMLElement) {
    if (id <= this.counter) {
      if (this.isRoundOver) {
        return {
          'current-genre-highlighted': true,
        };
      } else {
        if (element.classList.contains('current-genre-highlighted')) {
          return {
            'current-genre-highlighted': true,
          };
        } else {
          return {
            'current-genre': true,
          };
        }
      }
    }

    return {
      'progress-bar-item': true,
    };
  }
}
