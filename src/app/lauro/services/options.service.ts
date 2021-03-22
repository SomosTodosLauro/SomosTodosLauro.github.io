
export abstract class OptionsService {

  options: Array<string>;
  lastIndex: number;
  indexSelected = 0;

  constructor(enumOptions: object) {
    this.options = this.getEnumTuple(enumOptions);
    this.lastIndex = this.options.length - 1;
    // this.indexSelected = Math.floor(Math.random() * this.lastIndex);
  }

  get selected(): string {
    return this.options[this.indexSelected];
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

  private getEnumTuple(e: object): Array<string> {
    return Object.keys(e).map(key => e[key]);
  }

}
