import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  private userName: Subject<string> = new Subject<string>();

  // userNameSubject$ = this.userName.asObservable();

  get UserName$(): Observable<string> {
    return this.userName.asObservable();
  }

  setUserName(name: string): void {
    console.log(name);
    this.userName.next(name);
  }
}
