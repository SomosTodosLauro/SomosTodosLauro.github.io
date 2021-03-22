import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AudioComponent } from './audio.component';



@NgModule({
  declarations: [AudioComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [AudioComponent]
})
export class AudioModule { }
