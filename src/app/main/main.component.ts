import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import saveAs from 'file-saver';
import html2canvas from 'html2canvas';
import { ClothesService } from '../lauro/clothes/clothes.service';
import { EyesService } from '../lauro/eyes/eyes.service';
import { FacialHairService } from '../lauro/facial-hair/facial-hair.service';
import { HairService } from '../lauro/hair/hair.service';
import { MouthService } from '../lauro/mouth/mouth.service';
import { NoseService } from '../lauro/nose/nose.service';
import { BackgroundService } from '../lauro/services/background.service';
import { OptionsService } from '../lauro/services/options.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild('lauro') lauro: ElementRef;
  @ViewChild('text') text: ElementRef;
  @ViewChild('canvasRef') canvasRef: ElementRef;

  selectedService: OptionsService;
  selected: string;

  overlay = true;
  done = false;
  playMusic = false;

  colorButtonColor: string;

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

  ngOnInit(): void {
    this.select('hair');
  }

  ngAfterViewInit(): void {
    this.setTextSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.setTextSize();
  }


  get music(): string {
    return this.playMusic ? this.backgroundService.music : '';
  }

  get options(): Record<string, string> {
    return {
      background: this.backgroundService.image
    };
  }

  changeColor(): void {
    if (this.selectedService) {
      this.selectedService.nextColor();
      this.colorUpdate();
    }
  }

  select(option: string): void {
    this.selected = option;
    this.selectedService = this.resolveService(option);
    this.colorUpdate();
  }

  previous(): void {
    if (this.selectedService) {
      this.selectedService.previous();
      this.colorUpdate();
    }
  }

  next(): void {
    if (this.selectedService) {
      this.selectedService.next();
      this.colorUpdate();
    }
  }

  private colorUpdate(): void {
    if (this.selectedService) {
      this.colorButtonColor = this.selectedService.mainColor;
    }
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

    setTimeout(() => {
      html2canvas(this.lauro.nativeElement, {
        width: 1080 / window.devicePixelRatio,
        height: 1920 / window.devicePixelRatio,
        windowWidth: 1080 / window.devicePixelRatio,
        windowHeight: 1920 / window.devicePixelRatio,
        x: 0,
        onclone: (doc) => {
          const svgs = doc.getElementsByTagName('svg');
          for (let x = 0; x < svgs.length; x++) {
            const svg = svgs.item(x);
            svg.setAttribute('width', (1080 / window.devicePixelRatio) + 'px');
            svg.setAttribute('height', (1920 / window.devicePixelRatio) + 'px');
            svg.style.width = (1080 / window.devicePixelRatio) + 'px';
            svg.style.height = (1920 / window.devicePixelRatio) + 'px';
          }
        }
      }).then((canvas) => {
        function iOS() {
          return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
          ].includes(navigator.platform)
            // iPad on iOS 13 detection
            || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        }
        if (iOS()) {
          window.alert('Tire um print e compartilhe! (habilitaremos a fun????o de download para iOS em breve)')
          return;
        }
        if (navigator.share) {
          canvas.toBlob(imageBlob => {

            console.log('share');
            const file = new File([imageBlob], 'SomosTodosLauro.png', { type: 'image/png' });
            const filesArray = [file];
            if ((navigator as any).canShare && (navigator as any).canShare({ files: filesArray })) {
              navigator.share({
                text: 'Veja o meu Lauro! #SomosTodosLauro',
                files: filesArray,
                url: 'https://somostodoslauro.github.io/',
                title: '#SomosTodosLauro'
              } as any);
            }
          });
        } else {
          canvas.toBlob(imageBlob => {
            this.triggerDownload(imageBlob, 'SomosTodosLauro.png');
          });
        }
      });
    }, 0);
  }

  private triggerDownload(imageBlob: Blob, fileName: string): void {
    saveAs(imageBlob, fileName);
  }
}
