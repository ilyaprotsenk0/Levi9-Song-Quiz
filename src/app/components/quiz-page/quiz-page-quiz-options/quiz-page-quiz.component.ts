import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/Genre';
import { Song } from 'src/app/models/Song';
import { ApiService } from 'src/app/services/api.service';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-quiz-page-quiz',
  templateUrl: 'quiz-page-quiz.component.html',
  styleUrls: ['quiz-page-quiz.component.css'],
})
export class QuizPageQuizComponent implements OnInit {
  public singleGenreData!: Genre;

  constructor(
    private apiService: ApiService,
    private counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.counterService.currentCounter.subscribe((id) => {
      this.apiService.fetchAllGenresData().subscribe((allGenresData) => {
        this.singleGenreData = allGenresData[id];
        console.log(this.singleGenreData);
      });
    });
  }
}
