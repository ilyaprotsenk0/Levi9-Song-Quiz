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
    // Logic to prevent a bug when user click back in browser and
    // possible to change name and redirect to quiz page
    // with stage and points of previous game with previous name
    this.userService.setUserName('');
  }
}
