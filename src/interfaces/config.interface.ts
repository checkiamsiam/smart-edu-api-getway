interface IConfig {
  isDevelopment: boolean;
  port: number | string;
  redisUrl: string;
  jwt: {
    secret: string;
    refreshSecret: string;
  };
  authServiceUrl: string | undefined;
  coreServiceUrl: string | undefined;
}

export default IConfig;
