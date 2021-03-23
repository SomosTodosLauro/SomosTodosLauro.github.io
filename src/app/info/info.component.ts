import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  private show = true;
  hide = false;

  set showInfo(show: boolean) {
    if (!show) {
      setTimeout(() => {
        this.hide = true;
      }, 1010);
      this.show = show;
      return;
    } else {
      this.hide = false;
      setTimeout(() => {
        this.show = show;
      }, 0);
    }
  }

  get showInfo(): boolean {
    return this.show;
  }
}
