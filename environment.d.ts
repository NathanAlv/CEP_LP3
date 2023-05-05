declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_DOMAIN: string;
      DATABASE_NAME: string;
      APP_PORT: string;
    }
  }
}

export {};