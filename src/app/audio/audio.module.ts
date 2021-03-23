import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AudioComponent } from './audio.component';



@NgModule({
  declarations: [AudioComponent],
  imports: [
    CommonModule
  ],
  exports: [AudioComponent]
})
export class AudioModule { }
