import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseComponent } from './base/base.component';
import { ClothesComponent } from './clothes/clothes.component';
import { EyesComponent } from './eyes/eyes.component';
import { FacialHairComponent } from './facial-hair/facial-hair.component';
import { HairComponent } from './hair/hair.component';
import { LauroComponent } from './lauro.component';
import { MouthComponent } from './mouth/mouth.component';
import { NoseComponent } from './nose/nose.component';

@NgModule({
  declarations: [
    LauroComponent,
    BaseComponent,
    ClothesComponent,
    EyesComponent,
    FacialHairComponent,
    HairComponent,
    NoseComponent,
    MouthComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LauroComponent
  ]
})
export class LauroModule { }
