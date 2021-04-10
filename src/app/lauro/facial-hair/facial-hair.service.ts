import { Injectable } from '@angular/core';
import { FacialHair } from '../options/facial-hair.enum';
import { OptionsService } from '../services/options.service';

@Injectable({
  providedIn: 'root'
})
export class FacialHairService extends OptionsService {

  colors = [
    ['#000', '#E2D343', '#6F3C1F', '#CC3300', '#CFCFCF'], // facial-hair-2
    [], // facial-hair-1
    ['#000', '#E2D343', '#6F3C1F', '#CC3300', '#CFCFCF'], // facial-hair-3
    ['#000', '#E2D343', '#6F3C1F', '#CC3300', '#CFCFCF'], // facial-hair-4
    ['#000', '#E2D343', '#6F3C1F', '#CC3300', '#CFCFCF'], // facial-hair-5
    ['#000', '#E2D343', '#6F3C1F', '#CC3300', '#CFCFCF'], // facial-hair-6
    ['#000', '#E2D343', '#6F3C1F', '#CC3300', '#CFCFCF'], // facial-hair-7
  ];

  constructor() {
    super(FacialHair);
  }
}
