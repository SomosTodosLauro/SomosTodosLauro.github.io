import { Component } from '@angular/core';
import { ClothesService } from './clothes.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent {

  constructor(private service: ClothesService) { }

  get selected(): string {
    return this.service.selected;
  }

  get color(): string {
    return this.service.colorClass;
  }

}
