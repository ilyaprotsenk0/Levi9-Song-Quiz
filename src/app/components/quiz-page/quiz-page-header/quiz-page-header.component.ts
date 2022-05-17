import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-quiz-page-header',
  templateUrl: 'quiz-page-header.component.html',
  styleUrls: ['quiz-page-header.component.css'],
})
export class QuizPageHeaderComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  public userName!: string;
  public userScore: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.UserName$.subscribe((name: string) => {
      this.userName = name;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next('');
    this.destroy$.complete();
  }
}
