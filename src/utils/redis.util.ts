import { createClient } from "redis";
import config from "../config";
import { print, printError } from "./customLogger.util";

const redisClient = createClient({
  url: config.redisUrl,
});

redisClient.on("error", (er) => {
  printError.error("Redis Error", er);
});
redisClient.on("connect", () => {
  print.info("Redis connected");
});

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

const redisUtil = {
  connect,
};

export default redisUtil;
