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
  rightAnswerSongId!: string;
  rightAnswerSongUrl!: string;

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
            this.rightAnswerSongId = this.randRightAnswerSongId(this.genreData.data);
            console.log(this.rightAnswerSongId);
            this.rightAnswerSongUrl = this.genreData.data.filter((item: any) => item.id === this.rightAnswerSongId)[0].audio;
            console.log(this.rightAnswerSongUrl);
          } else {
            this.router.navigateByUrl('/result');
          }
        });
      });
  }

  randRightAnswerSongId(data: any) {
    const r = Math.floor(Math.random() * data.length);
    return data.map((item: any) => item.id)[r];
  }

  selectedSong!: boolean;
  selectedSongData: any = [];

  onSelect(index: number) {
    this.selectedSong = true;
    this.selectedSongData = this.genreData.data[index];
    console.log(this.selectedSongData);
  }

  match: boolean = false;
  checkRightAnswer(id: string) {
    console.log(`Correct answer: ${this.rightAnswerSongId}`);
    console.log(`Clicked id: ${id}`);
    
    if (id === this.rightAnswerSongId) {
      this.match = true;
      console.log('Match');
    } else if (this.match) {
      return;
    }
  }

  increaseCounter() {
    this.selectedSong = false;
    this.match = false;
    this.counterService.setCounterIncrement(this.counter);
  }
}
