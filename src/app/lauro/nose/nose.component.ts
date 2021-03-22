import { Component } from '@angular/core';
import { NoseService } from './nose.service';

@Component({
  selector: 'app-nose',
  templateUrl: './nose.component.html',
  styleUrls: ['./nose.component.scss']
})
export class NoseComponent {

  constructor(private service: NoseService) { }

  get selected(): string {
    return this.service.selected;
  }

}
