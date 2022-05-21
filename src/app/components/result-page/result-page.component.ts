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
  score!: number;
  name!: string;

  constructor(
    private scoreService: ScoreService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.scoreService.getScore$().subscribe((score) => {
      this.score = score;
    });

    this.userService.getUserName$().subscribe((name) => {
      this.name = name;
    });
  }

  restartQuiz() {
    this.router.navigateByUrl('/quiz');
  }
}
