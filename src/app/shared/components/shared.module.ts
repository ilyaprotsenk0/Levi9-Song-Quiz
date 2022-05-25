import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LogoComponent } from './logo/logo.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';

@NgModule({
  declarations: [ButtonComponent, LogoComponent, AudioPlayerComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, LogoComponent, AudioPlayerComponent],
})
export class SharedModule {}
