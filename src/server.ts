#!/usr/bin/env node

import { App } from "./server/App.js";

async function main(): Promise<void> {
  const app = new App();

  await app.hooks.initialize();

  await app.hooks.start();

  await new Promise((resolve) => {
    process.once("SIGINT", () => {
      resolve(app.hooks.stop());
    });
  });

  console.log("bye");
}

main().catch((error) => {
  console.error("FATAL:", error);
  process.exit(1);
});
