import { Injectable } from '@angular/core';
import { Background } from '../options/background.enum';
import { OptionsService } from './options.service';

@Injectable({providedIn: 'root'})
export class BackgroundService extends OptionsService {
  constructor() {
    super(Background);
  }

  get image(): string {
    return `<image src="${this.selected}.png" width="100%" />`;
  }

  get music(): string {
    return `${this.selected}.mp3`;
  }

}

