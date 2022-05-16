import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.css'],
})
export class ButtonComponent {
  @Input() isFormValid!: boolean;
  @Input() buttonText!: string;
}
