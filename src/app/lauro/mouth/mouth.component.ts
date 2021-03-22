import { Component } from '@angular/core';
import { MouthService } from './mouth.service';

@Component({
  selector: 'app-mouth',
  templateUrl: './mouth.component.html',
  styleUrls: ['./mouth.component.scss']
})
export class MouthComponent {

  constructor(private service: MouthService) { }

  get selected(): string {
    return this.service.selected;
  }
}
