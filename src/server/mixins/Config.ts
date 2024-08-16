import { watch as watchConfig } from "app-conf";

import { Abstract } from "./Abstract.js";

export class Config extends Abstract {
  #config: object;

  async initialize() {
    const app = this._app;

    await app.hooks.initialize();

    app.hooks.once(
      "stop",
      await watchConfig(
        { appName: app.name, appDir: app.dir, initialLoad: true },
        (error, config) => {
          if (error != null) {
            console.warn("WARN: error while loading config", error);
          } else {
            this.#config = config;
          }
        }
      )
    );
  }
}
