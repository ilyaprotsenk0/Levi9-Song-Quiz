import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CounterService } from 'src/app/services/counter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: 'quiz-page.component.html',
  styleUrls: ['quiz-page.component.css'],
})
export class QuizPageComponent implements OnInit {
  counter: number = 0;
  quizData: any = [];
  genreData: any = [];

  constructor(private http: HttpClient, private counterService: CounterService, private router: Router) {}

  ngOnInit() {
    this.http
      .get<any>('https://levi9-song-quiz.herokuapp.com/api/data')
      .subscribe((data) => {
        this.quizData = data;

        this.counterService.currentCounter.subscribe((counter) => {
          this.counter = counter;

          if (this.counter < this.quizData.length) {
            this.genreData = this.quizData[counter];
            console.log(this.genreData);
          } else {
            this.router.navigateByUrl('/result');
          }
        });
      });
  }

  selectedSong!: boolean;
  selectedSongData: any = [];

  onSelect(index: number) {
    this.selectedSong = true;
    this.selectedSongData = this.genreData.data[index];
    console.log(this.selectedSongData);
  }

  rightSongId = '1-3' || '2-1' || '3-2' || '4-1';
  test: boolean = false;
  checkRightAnswer(id: string) {
    if (id === this.rightSongId) {
      this.test = true;
    } else if (this.test) {
      return;
    } else {
      this.test = false;
    }
  }

  increaseCounter() {
    this.selectedSong = false;
    this.test = false;
    this.counterService.setCounterIncrement(this.counter);
  }
}
