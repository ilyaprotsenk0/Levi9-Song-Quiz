import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  private score: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  getScore$(): Observable<number> {
    return this.score.asObservable();
  }

  setScore(points: number): void {
    this.score.next(this.score.getValue() + points);
  }

  resetScore(): void {
    this.score.next(0);
  }
}
