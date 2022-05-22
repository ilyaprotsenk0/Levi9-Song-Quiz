import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-start-page',
  templateUrl: 'start-page.component.html',
  styleUrls: ['start-page.component.css'],
})
export class StartPageComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.setUserName('');
  }
}
