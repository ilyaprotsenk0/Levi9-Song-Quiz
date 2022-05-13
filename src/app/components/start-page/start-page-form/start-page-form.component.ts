import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-start-page-form',
  templateUrl: 'start-page-form.component.html',
  styleUrls: ['start-page-form.component.css'],
})
export class StartPageFormComponent {
  constructor(private router: Router, private userService: UserService) {}

  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required],
      }),
    });

    // this.userService.UserName$.subscribe((name: string) => {
    //   console.log(name);
    //   // this.userName = name;
    // });
  }

  onSubmit() {
    this.userService.setUserName(this.form.value.name);
    this.router.navigateByUrl('/quiz');
  }
}
