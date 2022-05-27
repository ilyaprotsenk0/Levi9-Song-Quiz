import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from 'src/app/models/Genre';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';
import { CounterService } from 'src/app/services/counter.service';
import { QuizService } from 'src/app/services/quiz.service';
import { ScoreService } from 'src/app/services/score.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: 'quiz-page.component.html',
  styleUrls: ['quiz-page.component.css'],
})
export class QuizPageComponent implements OnInit {
  isDataLoading: boolean = true;
  counter!: number;
  allGenresData!: Array<Genre>;
  allGenresDataLength!: number;
  isRoundOver!: boolean;
  userName!: string;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private storeService: StoreService,
    private counterService: CounterService,
    private quizService: QuizService,
    private scoreService: ScoreService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Logic to prevent a bug with clicking back and forward in browser
    // Example: Quiz has over and result page with 9 of 12 points displays.
    // User clicks back button and able to choose an new option and then redirect
    // to result page with invalid result that may be > 12.

    this.quizService.setIsQuizOver(false);
    this.quizService.setSelectedSongId('');
    this.scoreService.resetScore();
    this.counterService.resetCounter();

    // Logic to prevent entering quiz page by browser input
    // with unfilled name

    this.userService.getUserName$().subscribe((name) => {
      this.userName = name;

      if (!name) {
        this.router.navigateByUrl('/start');
      }
    });

    this.apiService.fetchAllGenresData$().subscribe((data) => {
      this.isDataLoading = false;
      this.allGenresData = data;
      this.allGenresDataLength = data.length;
      const maxScore = data.length * 3;
      this.scoreService.setMaxScore(maxScore);
    });

    this.counterService.getCounter$().subscribe((value) => {
      this.counter = value;
    });

    this.quizService.getIsRoundOver$().subscribe((value) => {
      this.isRoundOver = value;
    });
  }

  toNextGenre() {
    this.counterService.setCounter(this.counter);
    this.quizService.setSelectedSongId('');
  }

  toResultPage() {
    this.quizService.setIsQuizOver(true);
    this.router.navigateByUrl('/result');
  }
}
