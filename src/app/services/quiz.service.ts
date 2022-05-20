import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private isRoundOver: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  private selectedSongId: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );

  getIsRoundOver$(): Observable<boolean> {
    return this.isRoundOver.asObservable();
  }

  setIsRoundOver(status: boolean) {
    this.isRoundOver.next(status);
  }

  getSelectedSongId$(): Observable<string> {
    return this.selectedSongId.asObservable();
  }

  setSelectedSongId(songId: string): void {
    this.selectedSongId.next(songId);
  }
}
