import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userName: BehaviorSubject<string> = new BehaviorSubject<string>('');

  getUserName$(): Observable<string> {
    return this.userName.asObservable();
  }

  setUserName(name: string): void {
    this.userName.next(name);
  }
}
