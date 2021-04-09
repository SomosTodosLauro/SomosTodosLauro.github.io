
export abstract class OptionsService {

  options: Array<string>;
  lastIndex: number;
  indexSelected = 0;
  colorIndex = 0;
  colors: string[][];

  constructor(enumOptions: object, colorOptions?: object) {
    this.options = this.getEnumTuple(enumOptions);
    if (colorOptions) {
      this.colors = this.options.map(option => colorOptions[option]);
    }
    this.lastIndex = this.options.length - 1;
    // this.indexSelected = Math.floor(Math.random() * this.lastIndex);
  }

  get selected(): string {
    return this.options[this.indexSelected];
  }

  get colorClass(): string {
    return this.colors ? `color-${this.colorIndex + 1}` : null;
  }

  get mainColor(): string {
    return this.colors ? this.colors[this.indexSelected][this.colorIndex] : null;
  }

  next(): void {
    if (this.indexSelected === this.lastIndex) {
      this.indexSelected = 0;
      return;
    }
    this.indexSelected++;
  }

  previous(): void {
    if (this.indexSelected === 0) {
      this.indexSelected = this.lastIndex;
      return;
    }
    this.indexSelected--;
  }

  nextColor(): void {
    if (this.colors) {
      if (this.colorIndex === this.colors[this.indexSelected].length - 1) {
        this.colorIndex = 0;
        return;
      }
      this.colorIndex++;
    }
  }

  private getEnumTuple(e: object): Array<string> {
    return Object.keys(e).map(key => e[key]);
  }

}
