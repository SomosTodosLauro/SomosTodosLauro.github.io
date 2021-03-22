import { Background } from "./background.enum";

export class Options {
  constructor(
    public head,
    public hair,
    public eyes,
    public nose,
    public mouth,
    public background: Background
  ) { }
}
