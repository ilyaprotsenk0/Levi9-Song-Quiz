import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {}

  private counter: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  // userNameSubject$ = this.userName.asObservable();

  get currentCounter(): Observable<number> {
    return this.counter.asObservable();
  }

  setCounterIncrement(counter: number): void {
    this.counter.next(counter + 1);
  }
}
