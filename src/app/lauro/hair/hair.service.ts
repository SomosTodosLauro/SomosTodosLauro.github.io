import { Injectable } from '@angular/core';
import { Hair } from '../options/hair.enum';
import { OptionsService } from '../services/options.service';

@Injectable({
  providedIn: 'root'
})
export class HairService extends OptionsService {

  // KEVIN poe aqui a cor do botão para cada estilo que tenha no hair-component.scss
  // AH, e KEVIN, adicionar essa propriedade nos outros servicos que você quer por color.
  // a ordem do array segue a ordem do enum
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


  // KEVIN se vc quiser replicar pros outros componentes
  constructor() {
    super(Hair);
  }
}
