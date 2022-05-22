import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/services/score.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-result-page',
  templateUrl: 'result.page.component.html',
  styleUrls: ['result-page.component.css'],
})
export class ResultPageComponent implements OnInit {
  userName!: string;
  quizScore!: number;

  constructor(
    private userService: UserService,
    private scoreService: ScoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getUserName$().subscribe((userName) => {
      this.userName = userName;

      if (!userName) {
        this.router.navigateByUrl('/start');
      }
    });

    this.scoreService.getIsQuizOver$().subscribe((isQuizOver) => {
      if (!isQuizOver) {
        this.router.navigateByUrl('/quiz');
      }
    });

    this.scoreService.getScore$().subscribe((quizScore) => {
      this.quizScore = quizScore;
    });
  }

  restartQuiz() {
    this.router.navigateByUrl('/quiz');
  }
}
