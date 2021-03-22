import { Injectable } from '@angular/core';
import { Mouth } from '../options/mouth.enum';
import { OptionsService } from '../services/options.service';

@Injectable({
  providedIn: 'root'
})
export class MouthService extends OptionsService {

  constructor() {
    super(Mouth);
  }
}
