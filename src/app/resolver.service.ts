import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Promise<Array<string>>> {

  private images = [
    'assets/04-meu-amor.png',
    'assets/01-trela.png',
    'assets/02-contramao.png',
    'assets/03-terreiro.png',
    'assets/logo.png',
  ];

  private songs = [
    'assets/01-trela.mp3',
    'assets/02-contramao.mp3',
    'assets/03-terreiro.mp3',
  ];

  resolve(): Promise<Array<string>> {
    let promises = new Array();
    promises = promises.concat(this.images.map((image) => this.createImage(image)));
    promises = promises.concat(this.songs.map((song) => this.createAudio(song)));
    Promise.all(promises).then((r) => console.log(r));
    return Promise.all(promises);
  }


  private createImage(source: string): Promise<string> {
    const image = new Image();
    image.src = source;
    return new Promise((resolve) => image.addEventListener('load', () => resolve(source)));
  }

  private createAudio(source: string): Promise<string> {
    return fetch(source) as unknown as Promise<string>;
  }
}
