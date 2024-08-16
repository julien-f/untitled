import { readFileSync } from "fs";

import { Config } from "./mixins/Config.js";
import { Hooks } from "./mixins/Hooks.js";

const MIXINS = Object.fromEntries(
  Object.entries({ Config, Hooks }).map(([key, value]) => [
    key.toLowerCase(),
    value,
  ])
);

export class App {
  config = new Config(this);
  dir = new URL("..", import.meta.url).pathname;
  hooks = new Hooks(this);
  name = JSON.parse(
    readFileSync(new URL("../package.json", import.meta.url), "utf8")
  ).name as string;
}
