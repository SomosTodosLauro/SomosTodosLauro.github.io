import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import saveAs from 'file-saver';
import html2canvas from 'html2canvas';
import { ClothesService } from './lauro/clothes/clothes.service';
import { EyesService } from './lauro/eyes/eyes.service';
import { FacialHairService } from './lauro/facial-hair/facial-hair.service';
import { HairService } from './lauro/hair/hair.service';
import { MouthService } from './lauro/mouth/mouth.service';
import { NoseService } from './lauro/nose/nose.service';
import { BackgroundService } from './lauro/services/background.service';
import { OptionsService } from './lauro/services/options.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('lauro') lauro: ElementRef;
  @ViewChild('text') text: ElementRef;
  @ViewChild('canvasRef') canvasRef: ElementRef;

  selectedService: OptionsService;

  overlay = false;
  done = false;

  constructor(
    private backgroundService: BackgroundService,
    private hairService: HairService,
    private eyesService: EyesService,
    private mouthService: MouthService,
    private facialHairService: FacialHairService,
    private noseSerivce: NoseService,
    private renderer: Renderer2,
    private clothesService: ClothesService
  ) { }

  ngAfterViewInit(): void {
    this.setTextSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.setTextSize();
  }


  get music(): string {
    return this.backgroundService.music;
  }

  get options(): Record<string, string> {
    return {
      background: this.backgroundService.image
    };
  }

  select(option: string): void {
    this.selectedService = this.resolveService(option);
  }

  previous(): void {
    return this.selectedService && this.selectedService.previous();
  }

  next(): void {
    return this.selectedService && this.selectedService.next();
  }

  private resolveService(option: string): OptionsService | null {
    switch (option) {
      case 'background':
        return this.backgroundService;
      case 'hair':
        return this.hairService;
      case 'eyes':
        return this.eyesService;
      case 'mouth':
        return this.mouthService;
      case 'facial-hair':
        return this.facialHairService;
      case 'nose':
        return this.noseSerivce;
      case 'clothes':
        return this.clothesService;
    }
    return null;
  }

  private setTextSize(): void {
    const fontSizeModifier = 0.041152263;
    const textElement = this.text.nativeElement;
    const fontSize = `${textElement.clientWidth * fontSizeModifier}px`;
    this.renderer.setStyle(textElement, 'font-size', fontSize);
  }

  share(e: Event): void {
    this.overlay = false;
    this.done = true;
    e.stopPropagation();

    setTimeout(()   => {
      html2canvas(this.lauro.nativeElement, {
        width: 1080,
        height: 1920,
        windowWidth: 1080,
        windowHeight: 1920,
        x: 0,
        onclone: (doc) => {
          const svgs = doc.getElementsByTagName('svg');
          for (let x = 0; x < svgs.length; x++) {
            const svg = svgs.item(x);
            svg.setAttribute('width', '1080px');
            svg.setAttribute('height', '1920px');
            svg.style.width = '1080px';
            svg.style.height = '1920px';
          }
        }
      }).then((canvas) => {
        canvas.toBlob(imageBlob => {
          // this.triggerDownload(imageBlob, 'SomosTodosLauro.png');
          navigator.share({
            url: window.URL.createObjectURL(imageBlob),
            title: '#SomosTodosLauro'
          });
        });
      });
    }, 0);
  }

  private triggerDownload(imageBlob: Blob, fileName: string): void {
    saveAs(imageBlob, fileName);
  }
}
