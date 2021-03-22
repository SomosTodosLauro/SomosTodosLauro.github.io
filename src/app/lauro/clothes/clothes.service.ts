import { Injectable } from '@angular/core';
import { Clothes } from '../options/clothes.enum';
import { OptionsService } from '../services/options.service';

@Injectable({
  providedIn: 'root'
})
export class ClothesService extends OptionsService {

  constructor() {
    super(Clothes)
   }
}
