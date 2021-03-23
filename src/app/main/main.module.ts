import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioModule } from '../audio/audio.module';
import { LauroModule } from '../lauro/lauro.module';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    LauroModule,
    AudioModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
