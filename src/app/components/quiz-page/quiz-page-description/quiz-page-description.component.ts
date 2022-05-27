import { Component, OnInit, Input } from '@angular/core';
import { Genre } from 'src/app/models/Genre';
import { Song } from 'src/app/models/Song';
import { CounterService } from 'src/app/services/counter.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-page-description',
  templateUrl: 'quiz-page-description.component.html',
  styleUrls: ['quiz-page-description.component.css'],
})
export class QuizPageDescriptionComponent implements OnInit {
  @Input() allGenresData!: Array<Genre>;
  counter!: number;
  songData!: Song | any;

  constructor(
    private counterService: CounterService,
    private quizService: QuizService
  ) {}

  ngOnInit() {
    this.counterService.getCounter$().subscribe((value) => {
      this.counter = value;
    });

    this.quizService.getSelectedSongId$().subscribe((id) => {
      const songs = this.allGenresData[this.counter].data;
      this.songData = songs.find((song) => {
        return song.id === id;
      });
    });
  }
}
