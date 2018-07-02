import Controller from "@ember/controller";
import CombinedMixins from "../mixins/combined";

export default class Application extends Controller.extend(CombinedMixins) {
  constructor() {
    super();

    // Available on type definition
    this.combined;

    // No available on type definition
    this.a;
    this.b;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module "@ember/controller" {
  interface Registry {
    application: Application;
  }
}
