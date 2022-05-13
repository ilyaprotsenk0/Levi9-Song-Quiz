import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz-page',
  templateUrl: 'quiz-page.component.html',
  styleUrls: ['quiz-page.component.css'],
})
export class QuizPageComponent implements OnInit {
  quizData: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>('https://levi9-song-quiz.herokuapp.com/api/data')
      .subscribe((data) => {
        this.quizData = this.parseData(data);
        console.log(this.quizData);
      });
  }

  parseData(data: any) {
    const newData: any = [];

    for (let i = 0; i < data.length; i++) {
      let genre = data[i];

      newData.push({
        id: genre.id,
        genre: genre.genre,
        songsData: [],
      });

      let songs = data[i].data;

      for (let j = 0; j < songs.length; j++) {
        newData[i].songsData.push({
          audio: `https://levi9-song-quiz.herokuapp.com/api/${songs[j].audio}`,
          description: songs[j].description,
          id: songs[j].id,
          name: songs[j].name,
          songTitle: songs[j].songTitle,
          image: `https://levi9-song-quiz.herokuapp.com/api/${songs[j].image}`,
        });
      }
    }

    return newData;
  }
}
