import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { CounterService } from 'src/app/services/counter.service';
// import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';
import { Genre } from 'src/app/models/Genre';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: 'quiz-page.component.html',
  styleUrls: ['quiz-page.component.css'],
})
export class QuizPageComponent implements OnInit {
  counter!: number;
  allGenresData!: Array<Genre>;

  constructor(
    private apiService: ApiService,
    private counterService: CounterService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.apiService.fetchAllGenresData().subscribe((result) => {
      this.allGenresData = result;
    });

    this.counterService.currentCounter.subscribe((value) => {
      this.counter = value;
    });

    // this.storeService.getAllGenresData().subscribe((result) => {
    //   this.allGenresData = result;
    //   console.log(this.allGenresData);
    // });
  }

  increaseCounter() {
    if (this.counter < this.allGenresData.length - 1) {
      this.counterService.setCounterIncrement(this.counter);
    } else {
      return;
    }
  }
}

// allGenresData: any = [];
// singleGenreData: any = [];
// rightAnswerSongId!: string;
// rightAnswerSongUrl!: string;

// constructor(
//   private http: HttpClient,
//   private counterService: CounterService,
//   private router: Router
// ) {}

// ngOnInit() {
//   this.http
//     .get<any>('https://levi9-song-quiz.herokuapp.com/api/data')
//     .subscribe((data) => {
//       this.allGenresData = data;
//       console.log(this.allGenresData)

//       this.counterService.currentCounter.subscribe((counter) => {
//         this.counter = counter;

//         if (this.counter < this.allGenresData.length) {
//           this.singleGenreData = this.allGenresData[counter];
//           console.log(this.singleGenreData);
//           this.rightAnswerSongId = this.randRightAnswerSongId(
//             this.singleGenreData.data
//           );
//           this.rightAnswerSongUrl = this.singleGenreData.data.filter(
//             (item: any) => item.id === this.rightAnswerSongId
//           )[0].audio;
//         } else {
//           this.router.navigateByUrl('/result');
//         }
//       });
//     });
// }

// randRightAnswerSongId(data: any) {
//   const r = Math.floor(Math.random() * data.length);
//   return data.map((item: any) => item.id)[r];
// }

// selectedSong!: boolean;
// selectedSongData: any = [];

// onSelect(index: number) {
//   this.selectedSong = true;
//   this.selectedSongData = this.singleGenreData.data[index];
//   console.log(this.selectedSongData);
// }

// match: boolean = false;
// checkRightAnswer(id: string) {
//   console.log(`Correct answer: ${this.rightAnswerSongId}`);
//   console.log(`Clicked id: ${id}`);

//   if (id === this.rightAnswerSongId) {
//     this.match = true;
//     console.log('Match');
//   } else if (this.match) {
//     return;
//   }
// }

// increaseCounter() {
//   this.selectedSong = false;
//   this.match = false;
//   this.counterService.setCounterIncrement(this.counter);
// }
