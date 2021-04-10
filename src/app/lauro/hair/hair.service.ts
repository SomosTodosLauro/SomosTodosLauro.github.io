import { Injectable } from '@angular/core';
import { Hair } from '../options/hair.enum';
import { OptionsService } from '../services/options.service';

@Injectable({
  providedIn: 'root'
})
export class HairService extends OptionsService {

  colors = [
    ['#000', '#E2D343', '#6F3C1F', '#CC3300', '#CFCFCF'], // hair-3
    [], // hair-1
    ['#000', '#E2D343', '#6F3C1F', '#CC3300', '#CFCFCF'], // hair-2
    ['#000', '#E2D343', '#6F3C1F', '#CC3300', '#CFCFCF'], // hair-4
    ['#000', '#E2D343', '#6F3C1F', '#CC3300', '#CFCFCF'], // hair-5
    ['#000', '#E2D343', '#6F3C1F', '#CC3300', '#CFCFCF'], // hair-6
    ['#000', '#E2D343', '#6F3C1F', '#CC3300', '#CFCFCF'], // hair-7
    ['#000', '#E2D343', '#6F3C1F', '#CC3300', '#CFCFCF'], // hair-8
  ];

  constructor() {
    super(Hair);
  }
}
