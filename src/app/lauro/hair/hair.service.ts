import { Injectable } from '@angular/core';
import { Hair } from '../options/hair.enum';
import { OptionsService } from '../services/options.service';

@Injectable({
  providedIn: 'root'
})
export class HairService extends OptionsService {

  constructor() {
    super(Hair);
  }
}
