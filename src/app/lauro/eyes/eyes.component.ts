import { Component } from '@angular/core';
import { EyesService } from './eyes.service';

@Component({
  selector: 'app-eyes',
  templateUrl: './eyes.component.html',
  styleUrls: ['./eyes.component.scss']
})
export class EyesComponent {
  constructor(private service: EyesService) { }

  get selected(): string {
    return this.service.selected;
  }
}
