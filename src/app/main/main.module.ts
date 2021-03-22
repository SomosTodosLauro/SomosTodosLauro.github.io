import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AudioModule } from '../audio/audio.module';
import { LauroModule } from '../lauro/lauro.module';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    LauroModule,
    AudioModule,
  ]
})
export class MainModule { }
