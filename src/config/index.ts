import dotenv from "dotenv";
import IConfig from "../interfaces/config.interface";

dotenv.config();

const config: IConfig = {
  isDevelopment: process.env.NODE_ENV === "development",
  port: process.env.PORT || 5002,
  redisUrl: process.env.REDIS_URL || "redis://localhost:6379",
  jwt: {
    secret: process.env.JWT_SECRET || "secret",
    refreshSecret: process.env.JWT_REFRESH_SECRET || "refreshSecret",
  },
  authServiceUrl: process.env.AUTH_SERVICE_URL,
  coreServiceUrl: process.env.CORE_SERVICE_URL,
};

export default config;
