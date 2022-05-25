import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: 'audio-player.component.html',
  styleUrls: ['audio-player.component.css'],
})
export class AudioPlayerComponent {
  @Input() audioUrl!: string;
  @Input() showArtistImage!: boolean;
  @Input() imageUrl!: string;
  state: string = 'pause';
  intervalId!: any;

  onAudioDataLoaded(
    duration: HTMLElement,
    currentTime: HTMLElement,
    audio: HTMLAudioElement,
    audioPlayer: HTMLElement
  ) {
    audioPlayer.classList.add('pause');
    this.state = 'pause';
    currentTime.textContent = this.calculateTime(audio.currentTime);
    duration.textContent = this.calculateTime(audio.duration);
  }

  onPlayPauseClick(
    progressBar: HTMLElement,
    audio: HTMLAudioElement,
    currentTime: HTMLElement,
    audioPlayer: HTMLElement
  ) {
    if (this.state === 'play') {
      audioPlayer.classList.remove('play');
      audioPlayer.classList.add('pause');
      this.state = 'pause';
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      audio.pause();
    } else {
      audioPlayer.classList.remove('pause');
      audioPlayer.classList.add('play');
      let audioPlayers = document.getElementsByClassName('audio-player');

      for (let i = 0; i < audioPlayers.length; i++) {
        if (
          audioPlayers[i] !== audioPlayer &&
          audioPlayers[i].classList.contains('play')
        ) {
          audioPlayers[i]
            .querySelector('.play-pause-container')
            ?.dispatchEvent(
              new MouseEvent('click', { bubbles: true, cancelable: true })
            );
        }
      }
      this.state = 'play';
      audio.play();
      this.updateProgressBar(progressBar, audio, currentTime, audioPlayer);
    }
  }

  onTimelineClick(
    event: MouseEvent,
    timeline: HTMLElement,
    audio: HTMLAudioElement,
    progressBar: HTMLElement,
    currentTime: HTMLElement
  ) {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek =
      (event.offsetX / parseInt(timelineWidth)) * audio.duration;
    audio.currentTime = timeToSeek;
    progressBar.style.width = (audio.currentTime / audio.duration) * 100 + '%';
    currentTime.textContent = this.calculateTime(audio.currentTime);
  }

  updateProgressBar(
    progressBar: HTMLElement,
    audio: HTMLAudioElement,
    currentTime: HTMLElement,
    audioPlayer: HTMLElement
  ) {
    this.intervalId = setInterval(() => {
      progressBar.style.width =
        (audio.currentTime / audio.duration) * 100 + '%';
      currentTime.textContent = this.calculateTime(audio.currentTime);
      if (audio.currentTime === audio.duration) {
        audioPlayer.classList.remove('play');
        audioPlayer.classList.add('pause');
        this.state = 'pause';
        clearInterval(this.intervalId);
        audio.currentTime = 0;
        progressBar.style.width =
          (audio.currentTime / audio.duration) * 100 + '%';
        currentTime.textContent = this.calculateTime(audio.currentTime);
      }
    }, 200);
  }

  calculateTime = (secs: number) => {
    const minutes = Math.floor(Number(secs) / 60);
    const seconds = Math.floor(Number(secs) % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  };
}
