interface IConfig {
  isDevelopment: boolean;
  port: number | string;
  redisUrl: string;
  jwt: {
    secret: string;
    refreshSecret: string;
  };
}

export default IConfig;
