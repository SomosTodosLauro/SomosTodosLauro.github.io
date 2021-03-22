import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class EnumService {
  getEnumTuple<T>(e: Record<string, T>): Array<T> {
    return Object.keys(e).map(key => e[key]);
  }
}
