import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-quiz-page-header',
  templateUrl: 'quiz-page-header.component.html',
  styleUrls: ['quiz-page-header.component.css'],
})
export class QuizPageHeaderComponent implements OnInit {
  public userName!: string;
  public userScore!: number;

  constructor(
    private userService: UserService,
    private scoreService: ScoreService
  ) {}

  ngOnInit() {
    this.userService.getUserName$().subscribe((name: string) => {
      this.userName = name;
    });

    this.scoreService.getScore$().subscribe((score) => {
      this.userScore = score;
    });
  }
}
