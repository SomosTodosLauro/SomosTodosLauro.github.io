import { Component } from '@angular/core';
import { HairService } from './hair.service';

@Component({
  selector: 'app-hair',
  templateUrl: './hair.component.html',
  styleUrls: ['./hair.component.scss']
})
export class HairComponent {

  constructor(private service: HairService) { }

  get selected(): string {
    return this.service.selected;
  }

  get color(): string {
    return this.service.colorClass;
  }

}
