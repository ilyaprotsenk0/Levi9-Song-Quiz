import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { CounterService } from './counter.service';
import { Observable, Subject, tap } from 'rxjs';
import { Genre } from '../models/Genre';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private allGenresData: Subject<Array<Genre>> = new Subject<Array<Genre>>();

  constructor(
    private apiService: ApiService,
    private counterService: CounterService
  ) {}

  setAllGenresData(): void {
    this.apiService.fetchAllGenresData().subscribe((allGenresData) => {
      this.allGenresData.next(allGenresData);
    });
  }

  getAllGenresData(): Observable<Array<Genre>> {
    this.setAllGenresData();
    return this.allGenresData.asObservable();
  }

  getGenreSongs() {
    // return this.counterService.currentCounter.pipe(
    //   tap((index) => {
    //     return this.getAllGenresData().subscribe(allGenresData => {
    //     })
    //   })
    // );
  }
}
