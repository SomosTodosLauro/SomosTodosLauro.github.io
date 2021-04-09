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
    ['#000', '#F00'], // hair-3
    [], // hair-1
    [], // hair-2
    [], // hair-4
    [], // hair-5
    [], // hair-6
    [], // hair-7
    [], // hair-8
  ];


  // KEVIN se vc quiser replicar pros outros componentes
  constructor() {
    super(Hair);
  }
}
