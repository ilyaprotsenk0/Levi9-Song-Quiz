import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Genre } from 'src/app/models/Genre';
import { Song } from 'src/app/models/Song';
import { CounterService } from 'src/app/services/counter.service';
import { ScoreService } from 'src/app/services/score.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-page-quiz',
  templateUrl: 'quiz-page-quiz.component.html',
  styleUrls: ['quiz-page-quiz.component.css'],
})
export class QuizPageQuizComponent implements OnInit {
  // Variables for setting data
  @Input() allGenresData!: Array<Genre>;
  singleGenreData!: Genre;

  // Variables for round values
  roundPoints!: number;
  roundAnswer!: string;
  roundAnswerSongUrl!: string;
  roundAnswerImageUrl!: string;
  isRoundOver!: boolean;

  // Variable for collecting round answers and highlight
  alreadySelectedAnswers: Array<string> = [];

  constructor(
    private counterService: CounterService,
    private scoreService: ScoreService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.counterService.getCounter$().subscribe((value) => {
      // Setting data by dynamic counter
      this.singleGenreData = this.allGenresData[value];
      this.roundPoints = this.singleGenreData.data.length - 1;
      // Generating random round answer, song and image
      this.roundAnswer = this.randomRoundAnswer(this.singleGenreData.data);
      this.roundAnswerSongUrl = `https://levi9-song-quiz.herokuapp.com/api/audio/${this.roundAnswer}.mp3`;
      this.roundAnswerImageUrl = `https://levi9-song-quiz.herokuapp.com/api/images/${this.roundAnswer}.jpg`;
      // Reseting round
      this.quizService.setIsRoundOver(false);
    });

    // Setting round dynamic round status
    this.quizService.getIsRoundOver$().subscribe((value) => {
      this.isRoundOver = value;
    });
  }

  randomRoundAnswer(data: Array<Song>): string {
    const randomId = Math.floor(Math.random() * data.length);
    return data.map((item) => item.id)[randomId];
  }

  onSongSelect(selectedSongId: string, selectedSong: HTMLElement) {
    this.quizService.setSelectedSongId(selectedSongId);

    if (!this.isRoundOver) {
      if (selectedSongId === this.roundAnswer) {
        selectedSong.classList.add('quiz-option-right-answer');
        this.scoreService.setScore(this.roundPoints);
        this.quizService.setIsRoundOver(true);
      } else {
        if (this.alreadySelectedAnswers.length) {
          if (this.alreadySelectedAnswers.indexOf(selectedSongId) === -1) {
            this.roundPoints = this.roundPoints - 1;
            this.alreadySelectedAnswers.push(selectedSongId);
            selectedSong.classList.add('quiz-option-wrong-answer');
          }
        } else {
          this.roundPoints = this.roundPoints - 1;
          this.alreadySelectedAnswers.push(selectedSongId);
          selectedSong.classList.add('quiz-option-wrong-answer');
        }
      }
    }
  }
}
