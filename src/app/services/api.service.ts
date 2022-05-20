import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../models/Genre';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  fetchAllGenresData$(): Observable<Array<Genre>> {
    return this.httpClient.get<any>(
      'https://levi9-song-quiz.herokuapp.com/api/data'
    );
  }
}
