import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Genre } from '../models/Genre';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private storage: BehaviorSubject<Array<Genre>> = new BehaviorSubject<
    Array<Genre>
  >([]);

  getStorageData$(): Observable<Array<Genre>> {
    return this.storage.asObservable();
  }

  setStorageData(data: Array<Genre>): void {
    this.storage.next(data);
  }
}
