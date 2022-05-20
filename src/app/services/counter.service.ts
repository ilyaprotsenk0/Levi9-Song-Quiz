import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {}

  private counter: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  getCounter$(): Observable<number> {
    return this.counter.asObservable();
  }

  setCounter(counter: number): void {
    this.counter.next(counter + 1);
  }

  resetCounter(): void {
    this.counter.next(0);
  }
}
