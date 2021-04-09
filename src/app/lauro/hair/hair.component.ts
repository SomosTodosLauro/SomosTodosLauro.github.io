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

  // KEVIN adicionar isso nos outros componentes que você quer por color
  get color(): string {
    return this.service.colorClass;
  }

}
