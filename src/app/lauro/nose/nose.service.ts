import { Injectable } from '@angular/core';
import { Nose } from '../options/nose.enum';
import { OptionsService } from '../services/options.service';

@Injectable({
  providedIn: 'root'
})
export class NoseService extends OptionsService {

  constructor() {
    super(Nose);
  }
}
