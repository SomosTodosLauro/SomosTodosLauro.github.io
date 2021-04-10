import { Component } from '@angular/core';
import { FacialHairService } from './facial-hair.service';

@Component({
  selector: 'app-facial-hair',
  templateUrl: './facial-hair.component.html',
  styleUrls: ['./facial-hair.component.scss']
})
export class FacialHairComponent {

  constructor(private service: FacialHairService) { }

  get selected(): string {
    return this.service.selected;
  }

  get color(): string {
    return this.service.colorClass;
  }

}
