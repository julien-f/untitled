declare module "app-conf" {
  function watch(
    options: {
      appDir?: string;
      appName: string;
      initialLoad?: boolean = true;
    },
    cb: (error?: any, config: object) => void
  ): Promise<() => void>;
}
