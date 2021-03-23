import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioModule } from '../audio/audio.module';
import { InfoComponent } from '../info/info.component';
import { LauroModule } from '../lauro/lauro.module';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  declarations: [MainComponent,
    InfoComponent],
  imports: [
    CommonModule,
    LauroModule,
    AudioModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
