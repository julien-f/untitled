import { once } from "lodash";

import { type App } from "../App.js";

export class Abstract {
  _app;

  constructor(app: App) {
    this._app = app;

    this.initialize = once(this.initialize);
  }

  async initialize() {}
}
