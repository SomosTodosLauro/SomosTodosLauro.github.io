import { Injectable } from '@angular/core';
import { FacialHair } from '../options/facial-hair.enum';
import { OptionsService } from '../services/options.service';

@Injectable({
  providedIn: 'root'
})
export class FacialHairService extends OptionsService {

  constructor() {
    super(FacialHair);
  }
}
