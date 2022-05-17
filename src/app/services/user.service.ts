import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  private userName: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Ilya'
  );

  // userNameSubject$ = this.userName.asObservable();

  get UserName$(): Observable<string> {
    return this.userName.asObservable();
  }

  setUserName(name: string): void {
    console.log(name);
    this.userName.next(name);
  }
}
