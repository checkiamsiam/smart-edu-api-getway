interface IConfig {
  isDevelopment: boolean;
  port: number | string;
  jwt: {
    secret: string;
    refreshSecret: string;
  };
}

export default IConfig;
