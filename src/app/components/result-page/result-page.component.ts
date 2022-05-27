import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/services/score.service';
import { UserService } from 'src/app/services/user.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-result-page',
  templateUrl: 'result.page.component.html',
  styleUrls: ['result-page.component.css'],
})
export class ResultPageComponent implements OnInit {
  userName!: string;
  quizScore!: number;
  maxScore!: number;

  constructor(
    private userService: UserService,
    private scoreService: ScoreService,
    private quizService: QuizService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getUserName$().subscribe((userName) => {
      this.userName = userName;

      if (!userName) {
        this.router.navigateByUrl('/start');
      }
    });

    this.quizService.getIsQuizOver$().subscribe((isQuizOver) => {
      if (!isQuizOver) {
        this.router.navigateByUrl('/quiz');
      }
    });

    this.scoreService.getScore$().subscribe((quizScore) => {
      this.quizScore = quizScore;
    });

    this.scoreService.getMaxScore$().subscribe((max) => {
      this.maxScore = max;
    });
  }

  restartQuiz() {
    this.router.navigateByUrl('/quiz');
  }
}
