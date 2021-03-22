import { Injectable } from '@angular/core';
import { BackgroundService } from './services/background.service';

@Injectable({providedIn: 'root'})
export class LauroService {
  constructor(private backgroundService: BackgroundService) { }

  getLauroSVG(): string {
    return `

`;
  }
}
