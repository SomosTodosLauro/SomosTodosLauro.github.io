import { Component } from '@angular/core';
import { BackgroundService } from './services/background.service';

@Component({
  selector: 'app-lauro',
  templateUrl: './lauro.component.html',
  styleUrls: ['./lauro.component.scss']
})
export class LauroComponent  {
  constructor(private backgroundService: BackgroundService) { }

  get background(): string {
    return `${this.backgroundService.selected}.png`;
  }
}
