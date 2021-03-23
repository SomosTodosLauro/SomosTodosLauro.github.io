import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit, OnChanges {

  @Input() file: string;

  howl: Howl;

  muted = false;
  mutedOnBlur = false;

  ngOnInit(): void {
    window.onblur = () => {
      if (!this.muted) {
        this.mutedOnBlur = true;
        this.muteToggle();
      }
    };

    window.onfocus = () => {
      if (this.mutedOnBlur && this.muted) {
        this.muteToggle();
      }
    };
    Howler.mute(this.muted);
  }

  ngOnChanges(): void {
    this.initMusic();
  }

  muteToggle(): void {
    this.muted = !this.muted;
    Howler.mute(this.muted);
  }

  private initMusic(): void {
    if (this.howl) {
      this.howl.stop();
    }

    if (this.file) {
      this.howl = new Howl({ autoplay: true, html5: true, volume: .25, loop: true, src: new Array<string>(this.file)});
    }
  }

}
