import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from 'src/app/models/Genre';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';
import { CounterService } from 'src/app/services/counter.service';
import { QuizService } from 'src/app/services/quiz.service';

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

  constructor(
    private router: Router,
    private apiService: ApiService,
    private storeService: StoreService,
    private counterService: CounterService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.apiService.fetchAllGenresData$().subscribe((data) => {
      this.storeService.setStorageData(data);
      this.isDataLoading = false;
    });

    this.storeService.getStorageData$().subscribe((data) => {
      this.allGenresData = data;
      this.allGenresDataLength = data.length;
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
  }

  toResultPage() {
    this.router.navigateByUrl('/result');
  }
}
