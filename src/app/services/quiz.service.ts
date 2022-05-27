import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private selectedSongId: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );

  getSelectedSongId$(): Observable<string> {
    return this.selectedSongId.asObservable();
  }

  setSelectedSongId(songId: string): void {
    this.selectedSongId.next(songId);
  }

  private isRoundOver: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  getIsRoundOver$(): Observable<boolean> {
    return this.isRoundOver.asObservable();
  }

  setIsRoundOver(status: boolean) {
    this.isRoundOver.next(status);
  }

  private isQuizOver: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  getIsQuizOver$(): Observable<boolean> {
    return this.isQuizOver.asObservable();
  }

  setIsQuizOver(value: boolean): void {
    this.isQuizOver.next(value);
  }
}
