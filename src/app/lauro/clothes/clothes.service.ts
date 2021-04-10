import { Injectable } from '@angular/core';
import { Clothes } from '../options/clothes.enum';
import { OptionsService } from '../services/options.service';

@Injectable({
  providedIn: 'root'
})
export class ClothesService extends OptionsService {

  colors = [
    ['#ffc50c', '#49a8de', '#ed1c24', '#d6d5d4', '#3d3d3d'], // Clothes-1
    ['#ffc50c', '#49a8de', '#ed1c24', '#d6d5d4', '#3d3d3d'], // Clothes-2
    ['#ffc50c', '#49a8de', '#ed1c24', '#d6d5d4', '#3d3d3d'], // Clothes-3
    ['#ffc50c', '#49a8de', '#ed1c24', '#d6d5d4', '#3d3d3d'], // Clothes-4
    ['#ffc50c', '#49a8de', '#ed1c24', '#d6d5d4', '#3d3d3d'], // Clothes-5
    ['#ffc50c', '#49a8de', '#ed1c24', '#d6d5d4', '#3d3d3d'], // Clothes-6
    ['#ffc50c', '#49a8de', '#ed1c24', '#d6d5d4', '#3d3d3d'], // Clothes-7
  ];

  constructor() {
    super(Clothes)
   }
}
