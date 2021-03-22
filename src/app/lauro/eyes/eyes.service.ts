import { Injectable } from '@angular/core';
import { Eyes } from '../options/eyes.enum';
import { OptionsService } from '../services/options.service';

@Injectable({
  providedIn: 'root'
})
export class EyesService extends OptionsService {

  constructor() {
    super(Eyes);
  }
}
