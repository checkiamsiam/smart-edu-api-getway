import dotenv from "dotenv";
import path from "path";
import { z } from "zod";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const envVarsZodSchema = z.object({
  NODE_ENV: z.string(),
  PORT: z
    .string()
    .default("5000")
    .refine((val) => Number(val)),
  JWT_SECRET: z.string(),
  REDIS_URL: z.string(),
  AUTH_SERVICE_URL: z.string(),
  CORE_SERVICE_URL: z.string(),
  // CLOUDINARY_CLOUD_NAME: z.string(),
  // CLOUDINARY_API_KEY: z.string(),
  // CLOUDINARY_API_SECRET: z.string()
});

const envVars = envVarsZodSchema.parse(process.env);

export default {
  env: envVars.NODE_ENV || "development",
  port: envVars.PORT || 5000,
  jwt: {
    secret: envVars.JWT_SECRET,
  },
  redis: {
    url: envVars.REDIS_URL,
  },
  authServiceUrl: envVars.AUTH_SERVICE_URL,
  coreServiceUrl: envVars.CORE_SERVICE_URL,
  // cloudinary: {
  //   cloudName: envVars.CLOUDINARY_CLOUD_NAME,
  //   apiKey: envVars.CLOUDINARY_API_KEY,
  //   apiSecret: envVars.CLOUDINARY_API_SECRET
  // }
};
